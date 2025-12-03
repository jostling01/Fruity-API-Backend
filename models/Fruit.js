const fruits = require("../fruits.json") // imports the contents of fruits.json file

class Fruit{
    constructor ({genus, name, id, family, order, nutritions}) { // defines the fruit class
        this.genus = genus
        this.name = name
        this.id = id
        this.family = family
        this.order = order
        this.nutritions = nutritions
    }

    static showAll = () => {
        return fruits.map(fruit => new Fruit(fruit)) // Loops through the entire fruits.json array, turns each plain object into a Fruit instance and returns the full list of Fruit objects
    }

    static showOne = (name) => { // takes the name passed in from user input URL , called in controller
        const fruit = fruits.filter(fruit => fruit.name.toLowerCase() == name) // filters the in-memory fruits array for a name that matches the name entered by user
        if (fruit.length == 1){ // if exactly one match is found
            return new Fruit(fruit[0]) // returns Fruit instance, i.e., fruit records of the fruit the user has entered in URL
        } else {
            throw Error("The fruit does not exist") // throws error if something goes wrong
        }
    }
    
    static create = (data) => { // takes the name passed in from user input URL , called in controller
        const newFruit = data // assigns the user input fruit to the variable newFruit
        newFruit['id'] = fruits.length + 1
        fruits.push(newFruit) // pushes the new object into the in-memory fruits array
        return new Fruit(newFruit) // returns new Fruit instance of the new fruit
    }

    update(data) {
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase()) // Finds the raw fruit object in the fruits array that matches the current instance (this.name)/user input
        if(updatedFruit) { // checks if the user input is truthy
            updatedFruit.name = data.name // updates the name of the fruit using data.name with fruit the user has entered
            return new Fruit(updatedFruit) // returns new Fruit instance of the updated fruit
        } else {
            throw new Error('Fruit not found') // returns error if something has gone wrong
        }
    }

    destroy(data) {
        const destroyedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase()) // Finds the raw fruit object in the fruits array that matches the current instance (this.name)/user input

        if(destroyedFruit) { // checks if fruit entered by user is truthy
            const index = fruits.indexOf(destroyedFruit) // locates the index of the fruit the user has entered in the in-memory fruits array
            fruits.splice(index, 1) // removes the fruit the user has entered 
        } else {
            throw new Error('Quote not found') // throws an error if something goes wrong
        }
    }
}

module.exports = Fruit // exports Fruit class so it can be accessed by controller