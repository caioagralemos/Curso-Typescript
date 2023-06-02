// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

var ages: number[] = []
ages.push(19)

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

var gameBoard: string[][] = []
gameBoard.push(['O', 'X', 'O'])

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
    name: string,
    price: number
}

var mug: Product = {name: "coffee mug", price: 11.50}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(produto: Product[]): number {
    var sum: number = 0
    produto.map(prod => {
        sum += prod.price
    })
    return sum
}