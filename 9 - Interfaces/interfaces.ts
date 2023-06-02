interface Point {
    x: number,
    y: number
}

// const pt: Point = {x: 123, y: 12} ficou ultrapassada sem o z

interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string // torna a propriedade nickname um opcional
    sayHi?: () => string, // é possível adicionar métodos em interfaces, mas não daquele jeito que conhecemos
}

const sheldon: Person = { first: 'Sheldon', last: 'Cooper', nickname: 'Shelly', id: 11, sayHi() {return `Hi I am ${self}`}, }

interface Product {
    name: string,
    price: number,
    applyDiscount?(discount: number): number;
}

const shoes: Product = {
    name: 'Shoes',
    price: 100,
    applyDiscount(amount: number){
        return this.price - amount*15
    }
}

shoes.applyDiscount!(10)

// Em interfaces, é possivel reabrir e adicionar novos métodos depois da declaração
// Isso não é possível com tipos

interface Point {
    z: number
}

var coordinates: Point = {
    x: 12,
    y: 7,
    z: 0
}

// É possível criar derivadas de interfaces

interface FootballPlayer extends Person {
    club: string,
    nationalTeam: string,
    value: number
}

var goat: FootballPlayer = {
    id: 10,
    first: 'Lionel',
    last: 'Messi',
    nickname: 'La Pulga',
    club: 'Barcelona',
    nationalTeam: 'Argentina',
    value: 40000000
}

console.log(goat.club)

// É possivel criar uma interface filha de outras interfaces

interface Sale extends Product, Person {
    announceDate: string,
    saleId: number
}

var myMac: Sale = {
    announceDate: '25/05/23',
    saleId: 123322,
    name: 'Macbook Pro',
    price: 4200,
    first: 'Caio',
    last: 'Lemos',
    id: 1
}