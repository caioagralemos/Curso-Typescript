const printName = (name: {first: string, last: string}): void => { // objeto passado em uma func
    console.log(`Name: ${name.first} ${name.last}`)
}

let coordinate: {x: number, y: number} = { // objeto
    x: 34,
    y: 2
}

function randomCoordinate(): {x: number, y: number} { // função que retorna um objeto
    return {x: Math.random(), y: Math.random()}
}

// printName({first: 'Caio', last: 'Lemos', age: 19}) // não é permitido passar argumentos extras em inline-objects

let person = {first: 'Caio', last: 'Lemos', age: 19}
printName(person) // isso é permitido, ele só vai utilizar os argumentos necessários

function doublePoint(point: {x: number, y: number}): {x: number, y: number} { // objeto passado como parametro e tb tipo de retorno um objeto
    return {x: point.x * 2, y: point.y * 2}
}