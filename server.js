const express = require("express")
const app = express()
const port = 3000

const drinks = require("./models/drinks")

// index
app.get("/drinks",(req,res) => {
    res.render("drinksindex.ejs", {allDrinks: drinks})
})

// show
app.get("/drinks/:id",(req,res) => {
    res.send(req.params.id)
})

app.listen(port, () => {
    console.log(`Welcome to the Gitpub App!`)
})