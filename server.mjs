import http from 'http'
import url from 'url'
import fs from 'fs'
import path from 'path'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 420
// const favicon = path.join(__dirname, 'node.png')

const server = http.createServer((request, response) => {
  response.writeHead(200, { status: '200' })
  if (request.method === 'GET' && request.url === '/favicon.ico') {
    response.writeHead(204, { 'status': 'todo' })
  }
  response.end('end')
})

server.listen(PORT, () => console.log(`server running on ${PORT}`))
