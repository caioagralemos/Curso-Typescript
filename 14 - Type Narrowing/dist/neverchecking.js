"use strict";
// Exhaustiveness checks with Never
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return 'Oink!';
        case "rooster":
            return 'Popopó!';
        case "cow":
            return 'Môooo!';
        default:
            // We should never make it here if we handled all cases correctly
            // vai retornar um erro por que tentamos passar o tipo never
            const shouldNeverGetHere = animal;
            return shouldNeverGetHere;
    }
}
var dolly = {
    name: "Dolly",
    age: 10,
    weight: 2,
    kind: 'sheep'
};
// getFarmAnimalSound(dolly)
