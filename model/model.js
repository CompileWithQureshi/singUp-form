const mongoose = require('mongoose')
const { type } = require('os')
const { stringify } = require('querystring')

const schema = mongoose.Schema

const userSchema = new schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: Number, required: true, minlength: 6 }
})

const user = mongoose.model('user', userSchema)

module.exports = user