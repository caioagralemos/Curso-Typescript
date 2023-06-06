const inputElement = document.querySelector<HTMLInputElement>('#username')!
inputElement.value = "hacked!"
inputElement.disabled = true

const btn = document.querySelector<HTMLButtonElement>(".btn")

// My first generic

function numberIdentity(item: number): number {
    return item
}

function stringIdentity(item: string): string {
    return item
}

function booleanIdentity(item: boolean): boolean {
    return item
}

type Dog = {
    name: string,
    breed: string
}
// function identity(item:any): any { // aqui o tipo de item pode ser uma coisa e o do retorno qualquer outra
//     return item
// }

function identity<T>(item: T) {
    // aqui quando for inserido o tipo, toda a func vai trabalhar com esse tipo em mente
    return item
}

identity<string>('Ola!')
identity<number>(7)
identity<Dog>({name: "Luke", breed: "French Bulldog"})

function getRandomElement<T>(list: T[]): T { // so precisa envolver o <T> na primeira chamada
    const randIndex = Math.floor(Math.random() * list.length)
    return list[randIndex]
}

const my_string = getRandomElement(['A', 'B', 'C'])
console.log(my_string)

// Generics with multiple types

function merge<T,U>(obj1: T, obj2: U) { // podem ser tipos diferentes, por isso T e U
    return {
        // TS deduz que o tipo do retorno é uma interseção de T & U
        ...obj1,
        ...obj2
    }
}

function mergeObjects<T extends object,U extends object>(obj1: T, obj2: U) { 
    // aqui para mesclar ele necessariamente precisa ser um objeto
    return {
        ...obj1,
        ...obj2
    }
}

const my_object = merge({name: "Mark"}, {pets: [{name: "blue", color: "gray", species: 'parrot'}, {name: "gary", color: "blue", species: "snail"}]})

console.log(my_object)

interface Lengthy {
    length: number
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    // para o tipo do parametro passado rodar aqui ele vai precisar ter a propriedade .length
    return thing.length * 2
}

// Generic Classes

interface Song {
    title: string,
    artist: string
}

interface Video {
    title: string,
    creator: string,
    likes: number
}

class Playlist<T> {
    public queue: T[] = []
    add(element: T) {
        this.queue.push(element)
    }
    remove(element: T) {
       this.queue.filter(q => {
        q != element
       })
    }
}

