
//Author: Saúl Alejandro Hernández Rojas - saulhernandez@ciencias.unam.mx

// Irvin Javier Cruz Gonzalez - 1rv1n@ciencias.unam.mx

const http = require('http')
const server = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-Type': 'text/plain'})
    respuesta.end("Hola mundo")
})
server.listen(3000)
