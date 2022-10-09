const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()
const mongoose = require('mongoose')
const Routs = require('./router/user-api')

mongoose.connect(process.env.mongoString).then(() => app.listen(process.env.Port, console.log(`connected and listing on port 4000`))).catch((err) => console.error(err))


app.use(express.json())
app.use('/', Routs)