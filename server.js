const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

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
      await handle(req, res, parsedUrl);
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
