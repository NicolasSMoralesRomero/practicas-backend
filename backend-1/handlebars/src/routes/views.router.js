const express = require("express")
const router = express.Router()


let food = [
    {name: "Hamburguesas", price: 100},
    {name: "Pizzas", price: 200},
    {name: "Empanadas", price: 300},
    {name: "Lomos", price: 400},
    {name: "Ensalada", price: 500}
]

router.get("/", (req, res)=>{
    //Usuarios

    let testUser = {
        name: "Usuario 1",
        lastName: "Apellido 1",
        role: "admin"
    }

    res.render("index", {
        user: testUser,
        isAdmin: testUser.role === "admin",
        food
    })
})







module.exports = router