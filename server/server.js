const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

app.use(cors())
app.use(express.json());

app.post("/auth/login", async (req,res) => {
    console.log("This is req: " + JSON.stringify(req.body))
    info = JSON.stringify(req.body)
    const token = jwt.sign({id:"113454290805484327187"}, "secret")
    res.json({token,userID:"113454290805484327187"})

})

app.post("/cart/add", async (req,res) => {
    console.log("This is req: " + JSON.stringify(req.body))
    res.status(200).json('Item added!')
})





app.listen(8000, () => console.log("Server is running on port 8000"))