/**
 * LEGADO — não é mais o entrypoint em produção.
 * O start oficial é `npm run start` → `next start -H 0.0.0.0` (rewrites de /server.js em next.config.mjs).
 * Arquivo mantido só como referência; não remover sem revisar deploy na Hostinger.
 */
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const hostname = '0.0.0.0';

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

/**
 * Apache + Passenger (Hostinger) costuma reescrever para server.js/<rota>.
 * O Next precisa receber só o path da aplicação (ex.: /localidades/vila-barros/), senão rotas aninhadas falham ou geram 503.
 */
function normalizeRequestUrl(req) {
  const raw = req.url || '/';
  const parsed = parse(raw, true);
  let pathname = parsed.pathname || '/';
  if (pathname.startsWith('/server.js')) {
    pathname = pathname.slice('/server.js'.length) || '/';
  }
  return pathname + (parsed.search || '') + (parsed.hash || '');
}

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      req.url = normalizeRequestUrl(req);
      const parsedUrl = parse(req.url, true);
      const pathname = parsedUrl.pathname || '/';
      const logHomeOrLocalidades =
        pathname === '/' || pathname.startsWith('/localidades');
      const t0 = logHomeOrLocalidades ? Date.now() : 0;
      await handle(req, res, parsedUrl);
      if (logHomeOrLocalidades) {
        const ms = Date.now() - t0;
        console.log(
          '[req]',
          req.method,
          pathname,
          ms + 'ms',
          'status=' + res.statusCode
        );
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
