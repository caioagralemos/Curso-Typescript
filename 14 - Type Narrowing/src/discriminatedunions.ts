// Discriminated Unions
interface Rooster {
    name: string,
    weight: number,
    age: number,
    // kind = discriminator
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

type FarmAnimal = Pig | Rooster | Cow

function getFarmAnimalSound(animal: FarmAnimal) {
    // os 3 animais tem exatamente as mesmas propriedades, então vamos adicionar um discriminador
    // adicionamos a mesma propriedade com literal values a todas as interfaces que estamos comparando
    switch(animal.kind){
        case "pig":
            return 'Oink!'
        case "rooster":
            return 'Popopó!'
        case "cow":
            return 'Môooo!'
    }
}

export {getFarmAnimalSound, FarmAnimal, Pig, Rooster, Cow}