const express = require("express")
const app = express()
const cors = require("cors")

const middleWare = require("./middleware")
const router = require("./routes")

app.use(cors())
app.use(express.json())
app.use(router)

app.use(express.urlencoded({ extended: true}))

app.use(middleWare.notFound)
app.use(middleWare.errorHandling)

module.exports = app