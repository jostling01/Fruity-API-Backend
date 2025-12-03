const express = require('express')
const fruitRouter = express.Router()
const fruitsController = require('../controllers/fruits') // imports controller functions. Each route passes to a function in controller

fruitRouter.get('/', fruitsController.index)
fruitRouter.get('/:name', fruitsController.show)
fruitRouter.post('/', fruitsController.create)
fruitRouter.patch('/:name', fruitsController.update)
fruitRouter.delete('/:name', fruitsController.destroy)
// first parameter is path, the second calls the function from the controller file
module.exports = fruitRouter // exports our routes so they can be accessed in app file