// Arrays básicos -

const activeUsers: [] = [] // tipo de empty array
// não vai me permitir fazer isso activeUsers.push('steven')

const activeUserIds: number[] = [] // em array, temos que declarar o tipo se declaramos que é um array
activeUserIds.push(1) // agora ele me permite fazer isso
// activeUserIds.push('ola') porém apenas com números

const anything: any[] = []
anything.push({'value': 1})
anything.push("ola ola")
anything.push(1)

// Outra sintaxe -

const booleanos: Array<boolean> = [true, false, false, true, true, true, false]

// É possível declarar nosso array de tipos personalizados -

type Coord = {
    x: number,
    y: number
}

const coords: Coord[] = []
coords.push({x: 23, y: 12})
coords.push({x: 10, y: 12})
console.log(coords)

// Array de Arrays (Matrizes) -

const board: string[][] = [
    ['X', 'O', 'X'],
    ['O', 'O', 'X'],
    ['X', 'X', 'O'],
]

