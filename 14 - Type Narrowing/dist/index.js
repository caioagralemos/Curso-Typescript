import triple from "./typeofguard";
import printLetters from "./truthinessguard";
import printFullDate from "./instanceofnarrowing";
import { getFarmAnimalSound } from "./discriminatedunions";
console.log(triple('Ola'));
printLetters();
printFullDate('05/11/1971');
const stevie = {
    name: 'stevie chicks',
    age: 2,
    weight: 2,
    kind: "rooster"
};
console.log(getFarmAnimalSound(stevie));
