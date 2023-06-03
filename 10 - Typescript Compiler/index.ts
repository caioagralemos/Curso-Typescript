// tsc -w index.ts é o nodemon do typescript
// tsc por si só compila todos os arquivos ts de uma vez (ou tsc -w para aplicar a todos)

interface Chicken {
    breed: string,
    eggsPerWeek: number,
    name: string,
    age: number
}

const chilean: Chicken = {
    breed: 'Silkie',
    eggsPerWeek: 4,
    name: 'Brad, the Chilean Chicken',
    age: 3
}

const angolean: Chicken = {
    breed: 'Angola',
    eggsPerWeek: 7,
    name: 'Geo',
    age: 2
}