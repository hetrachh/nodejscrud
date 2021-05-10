const express = require('express')
const UrlRouter = express.Router()

const UserController = require('../controller/user.controller')


UrlRouter.get('/', UserController.listItem)
UrlRouter.post('/', UserController.createItem)
UrlRouter.get('/:id', UserController.readItem)
UrlRouter.put('/:id', UserController.updateItem)
UrlRouter.delete('/:id', UserController.deleteItem)

module.exports = UrlRouter