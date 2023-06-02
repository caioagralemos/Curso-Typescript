let age: number | string = 21; // numero ou string
age = 23
age = '24'

// Fazendo isso com tipos personalizados

type Point = {
    x: number,
    y: number
}

type Loc ={
    lat: number,
    long: number
}

let coordenadas: Point | Loc = {x: 1, y: 1}
coordenadas = {lat: 1.232, long: -12.992}

// Exemplo do uso de Union Types em funções -

function printAge(age: number | string): void{
    console.log(`You are ${age} years old`)
}