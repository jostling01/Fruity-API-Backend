const express = require('express') // loads the express library so it can be used in our code
const app = express()
const fruitRouter = require('./routes/fruits') // imports fruit router which loads routes file containing our routes
const logger = require('./logger') // imports logger function that logs information about incoming requests

app.use(logger) // runs logger on every request
app.use(express.json()) // converts json files into fomrat our code can interact with

app.get('/', (req, res) => {
  res.send('Welcome to the FruityAPI!')
})

app.use('/fruits', fruitRouter) // mounts router at /fruits path



module.exports = app // exports app so that index.js can import app and listen on a port