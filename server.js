import http from 'http'
import url from 'url'
import fs from 'fs'
import path from 'path'

// const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 420
// const favicon = path.join(__dirname, 'node.png')
let WHATISTHIS = 0
const data = { data: [1, 2, 3, 4] }
const server = http.createServer((request, response) => {
  WHATISTHIS += 1
  console.log(`${WHATISTHIS} : ${request.url}`)
  switch (request.url) {
    case '/app':
      response.writeHead(200, { 'Content-Type': 'text/html' })
      fs.readFile('index.html', (err, data) => {
        response.write(data)
        response.end()
      })
      break
    case '/favicon.ico':
      response.writeHead(200, { 'Content-Type': 'image/png' })
      fs.readFile('node.png', (error, data) => {
        response.write(data)
        response.end()
      })
      break
    case '/':
      response.writeHead(200, { status: '200' })
      const learningData = {
        url: request.url,
        method: request.method,
        query: url.parse(request.url, true).query,
      }
      response.write(JSON.stringify(learningData, null, 1))
      response.end()
      break
    case '/api/test':
      response.writeHead(200, { status: 200,  })
      response.write(JSON.stringify(data))
      response.end()
      break
    case '/index.js':
      fs.readFile('index.js', (error, data) => {
        response.write(data)
        response.end()
      })
      break
    default:
      response.writeHead(404, { status: '404', unfound_url: request.url })
      response.write('404 Not Found')
      response.end()
      break
  }
  /*   if (request.url === '/app') {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', (err, data) => {
      response.write(data)
      response.end()
    })
  } else if (request.url === '/favicon.ico') {
    response.writeHead(200, { 'Content-Type': 'image/png' })
    fs.readFile('node.png', (error, data) => {
      response.write(data)
      response.end()
    })
  } else if (request.url === '/') {
    response.writeHead(200, { status: '200' })
    const learningData = {
      url: request.url,
      method: request.method,
      query: url.parse(request.url, true).query,
    }
    response.write(JSON.stringify(learningData, null, 1))
    response.end()
  } else if (request.url === '/api/test') {
    response.writeHead(401, { status: '401 todo' })
    response.write('401 todo')
    response.end()
  } else if (request.url === '/index.js') {
    response.writeHead(200)
    fs.readFile('index.js', (error, data) => {
      response.write(data)
      response.end()
    })
  } else {
    response.writeHead(404, { status: '404' })
    response.write('404 Not Found')
    response.end()
  } */
})

server.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
