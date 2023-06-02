// tuplas são um tipo exclusivo para typescript (não existem em js)
// são arrays de tamanhos fixos e ordenados com tipos específicos

let myTuple: [number, string] = [10, 'Olá!']
// myTuple = ['Ola', 10] // o TS não permite isso
// myTuple = [10, 10] // nem isso

let color: [number, number, number] = [10, 8, 11]

type HTTPResponse = [number, string]; // um tipo baseado em tupla
const goodResponse: HTTPResponse = [200, 'OK']
goodResponse[0] = 100

// Por algum motivo, tuplas não reclamam se nós adicionarmos um novo valor depois de criada (push)
goodResponse.push('Oi!')
console.log(goodResponse) // [200, 'OK', 'Oi!']

// Array de Tuplas
const responses: HTTPResponse[] = [[404, 'Fail'], goodResponse]