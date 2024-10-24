const http = require("http")

const server = http.createServer((request, response)=>{
    response.end("Mi primer servidor con Node")
})

server.listen(8080,()=>{
    console.log("Escuchando en el puerto 8080")
})

//Para levantar el servidor en la consola se debe escribir
// node app.js
