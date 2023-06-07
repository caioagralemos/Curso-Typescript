// Exhaustiveness checks with Never

interface Rooster {
    name: string,
    weight: number,
    age: number,
    kind: "rooster"
}

interface Cow {
    name: string,
    weight: number,
    age: number,
    kind: 'cow'
}

interface Pig {
    name: string,
    weight: number,
    age: number,
    kind: 'pig'
}

interface Sheep {
    name: string,
    weight: number,
    age: number,
    kind: 'sheep'
}


type FarmAnimal = Pig | Rooster | Cow

function getFarmAnimalSound(animal: FarmAnimal) {
    switch(animal.kind){
        case "pig":
            return 'Oink!'
        case "rooster":
            return 'Popopó!'
        case "cow":
            return 'Môooo!'
        default:
            // We should never make it here if we handled all cases correctly
            // vai retornar um erro por que tentamos passar o tipo never
            const shouldNeverGetHere: never = animal
            return shouldNeverGetHere
    }
}

var dolly: Sheep = {
    name: "Dolly",
    age: 10,
    weight: 2,
    kind: 'sheep'
}

// getFarmAnimalSound(dolly)