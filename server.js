const express = require("express")
const app = express()
const port = 3000

const drinks = require("./models/drinks")

app.get("/drinks",(req,res) => {
    res.render("drinksindex.ejs", {allDrinks: drinks})
})

app.listen(port, () => {
    console.log(`Welcome to the Gitpub App!`)
})