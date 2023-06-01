type Point = { // a partir de agora, Point é um tipo legitimo
    x: number,
    y: number,
    z?: number // valor opcional
}

let coordenada: Point = {x: 34, y: 2}
console.log(coordenada)

function doublePointTwo(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2}
}