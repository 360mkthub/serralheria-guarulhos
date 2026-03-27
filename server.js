const http = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = parseInt(process.env.PORT || '3000', 10)

const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  http
    .createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error handling request', req.url, err)
        res.statusCode = 500
        res.end('internal server error')
      }
    })
    .listen(port, hostname, () => {
      console.log(
        `> Ready on http://${hostname}:${port} (${dev ? 'development' : 'production'})`
      )
    })
})
