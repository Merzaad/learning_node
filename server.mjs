import http from 'http'
import url from 'url'
import fs from 'fs'
import path from 'path'

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 420
// const favicon = path.join(__dirname, 'node.png')

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type' : 'image/png'});
    fs.readFile('node.png', (error, data) => {
      response.write(data)
      response.end()
    })
  } else {
    response.writeHead(200, { status: '200' })
    const learningData = {
      url: request.url,
      method: request.method,
      query: url.parse(request.url, true).query,
    }
    response.write(JSON.stringify(learningData, null, 1))
    response.end()
  }
})

server.listen(PORT, () => console.log(`server running on ${PORT}`))
