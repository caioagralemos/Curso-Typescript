type Ponto = { // a partir de agora, Point é um tipo legitimo
    x: number,
    y: number,
    z?: number // valor opcional
}

let coord: Ponto = {x: 34, y: 2}
console.log(coord)

function doublePointTwo(point: Ponto): Ponto {
    return {x: point.x * 2, y: point.y * 2}
}

type Usuario = {
    readonly id: number; // dar a propriedade readonly num atributo de um type faz com que,
    // ele seja imutavel
    username: string;
}

var usuario: Usuario = {
    id: 1,
    username: 'caioagralemos'
}

// usuario.id = 2 // Não é possível atribuir a 'id' porque é uma propriedade de somente leitura

type Circle = {
    radius: number
}

type Color = {
    color: string
}

type colorCircle = Circle & Color; // Tipos de Interseção

const happyFacey: colorCircle = {
    radius: 4,
    color: 'yellow'
}

type colorCircles = Circle & Color & {
    amount: number // Tipos de interseção com novas propriedades exclusivas
}

var seteCirculosVermelhos: colorCircles = {
    radius: 5,
    color: 'red',
    amount: 7
}