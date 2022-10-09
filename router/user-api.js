const express = require('express')
const { getAllUser, CreateUser, UpdateUser, DelectUser, getById } = require('../controller/user-api-controller')
const Routs = express.Router()


Routs.get('/', getAllUser)
Routs.post('/', CreateUser)
Routs.put('/:id', UpdateUser)
Routs.delete('/:id', DelectUser)
Routs.get('/:id', getById)
// Routs.get('/:id', getById)




module.exports = Routs