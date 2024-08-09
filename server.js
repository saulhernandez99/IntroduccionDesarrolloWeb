// punto 6
const http = require('http')
const server = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-Type': 'text/plain'})
    respuesta.end("Hola mundo")
})
server.listen(3000)
