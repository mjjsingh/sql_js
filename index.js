require("dotenv").config()
console.log(process.env)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send("jyotijyotsnadotcom")
  })

  app.get("/login", (req, res) => {
    res.send("<h1> Please login to the server </h1>")
  })

  app.get("/youtube", (req, res) => {
    res.send("<h2> login to the server </h2>")
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})