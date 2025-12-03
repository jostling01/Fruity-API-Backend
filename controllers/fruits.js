const Fruit = require('../models/Fruit') // imports fruit model

const index = async (req, res) => {
    try {
        const fruits = await Fruit.showAll() // assigns fruits the value of the result of calling the showAll function in Fruits model
        res.status(200).send(fruits) // sends back all fruit records with status code 200
    } catch (err) {
        res.status(500).send({'error': 'Server error'}) // sends back 500 status code if something goes wrong
    }
    
    
}

const show = async (req, res) => {
    const name = req.params.name.toLowerCase() // gets the name of the fruit from URL
    try {
        const fruit = await Fruit.showOne(name) // assigns fruit the value of passing the name of the fruit from URL into showOne function in Fruits model
        res.status(200).send(fruit) // sends back fruit records of fruit entered in url with status code 200
    } catch(error) {
        res.status(404).send({'error': 'Fruit not found'}) // sends back 404 status code error if something goes wrong
    }
}

const create = async (req, res) => {
    try {
        const fruitData = req.body // stores the user input in a variable called fruitData
        const newFruit = await Fruit.create(fruitData) // assigns newFruit the value of passing the user input into the create function in the Fruits model
        res.status(201).send(newFruit) // sends back records of fruit from user input (URL) with status code 201
    } catch(err) {
        res.status(409).send('Not able to add Fruit') // sends back 409 status code error if something goes wrong
    }
}

const update = async (req, res) => {
    const name = req.params.name.toLowerCase() // gets the name of the user input fruit from URL
    try {
        const fruit = await Fruit.showOne(name) // fetches fruit - assigns fruit the value of passing the user input fruit into the showOne function in the Fruits model
        const result = await fruit.update(req.body) // assigns result the value of passing the user input fruit into the update function in the Fruits model
        res.status(200).send(result) // returns the updated fruit from userinput in URL with status code 200
    } catch(err) {
        res.status(404).send('No fruit with that name found') // sends back 404 status code error if something goes wrong
    }
}

const destroy = async (req, res) => {
    const name = req.params.name.toLowerCase() // gets the name of the user input fruit from URL
    try {
        const fruit = await Fruit.showOne(name) // fetches fruit - assigns fruit the value of passing the user input fruit into the showOne function in the Fruits model
        const result = await fruit.destroy() // calls the destroy function in Fruits model
        res.sendStatus(204) // sends back a 200 status code (successful no content) but nothing else, because we are deleting the user input fruit from API
    } catch(err) {
        res.status(404).send('Fruit does not exist') // sends back 404 status code error if something goes wrong
    }
}
module.exports = { // exports all the functions so they can be accessed in routes file
    index,
    show,
    create,
    update,
    destroy
}