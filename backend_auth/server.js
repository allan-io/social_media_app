const express = require('express')
const connectDB = require('./config/db.js')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

connectDB()

const app = express()

app.use(bodyParser.json())

app.use("/api/auth", require("./routes/auth.js"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
