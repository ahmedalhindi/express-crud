const express = require("express")
const bodyParser = require("body-parser")
const db = require('./db/config')
const productRoute = require("./app/product/route")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/products", productRoute);


app.listen(9000, () => console.log("Server runing at 9000"))