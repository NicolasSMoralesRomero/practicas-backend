const express = require("express")

const app = express()

const PORT = 8080


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

//ENDPOINTS

app.get("/", (req, res)=>{
    res.send("Mensaje desde mi ruta")
})

//Para enviar un objeto
app.get("/usuario", (req, res)=>{
    const usuario = {
        nombre: "Nicolas",
        apellido: "Morales",
        email: "nico@mail.com"
    }

    res.json(usuario)
})