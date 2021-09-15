const express = require("express")
const app = express()
const port = 3000

const food = require("./models/food")
const drinks = require("./models/drinks")

// index
app.get('/',(req,res) => {
    res.send(`
        <h1>Welcome to gitPub!</h1>
        <a href="./food">FOOD</a><br />
        <a href="./drinks">DRINKS</a>
    `)
})

// show
app.get("/food",(req,res) => {
    res.render("foodindex.ejs", {allFood: food})
})

app.get("/drinks/:id",(req,res) => {
    res.render("foodshow.ejs",{fooditem: food[req.params.id]})
})

app.get("/drinks",(req,res) => {
    res.render("drinksindex.ejs", {allDrinks: drinks})
})

app.get("/drinks/:id",(req,res) => {
    res.render("drinksshow.ejs", {drink: drinks[req.params.id]})
})

app.listen(port, () => {
    console.log(`Welcome to the Gitpub App!`)
})