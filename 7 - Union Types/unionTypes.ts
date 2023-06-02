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

// Arrays que permitem diferentes tipos -

const meuArray: (number | string)[] = []
meuArray.push(2)
meuArray.push('Opa')
// meuArray.push(true) // O argumento do tipo 'boolean' não é atribuível ao parâmetro do tipo 'string | number'.ts(2345)

const meuArray2: number[] | string[] = [1,2,3] // um array só de numeros ou só de strings

const localizacao: (Loc | Point)[] = [coordenadas, {x: 1, y:12}]