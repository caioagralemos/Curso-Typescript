"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeofguard_1 = __importDefault(require("./typeofguard"));
const truthinessguard_1 = __importDefault(require("./truthinessguard"));
const instanceofnarrowing_1 = __importDefault(require("./instanceofnarrowing"));
const discriminatedunions_1 = require("./discriminatedunions");
console.log((0, typeofguard_1.default)('Ola'));
(0, truthinessguard_1.default)();
(0, instanceofnarrowing_1.default)('05/11/1971');
const stevie = {
    name: 'stevie chicks',
    age: 2,
    weight: 2,
    kind: "rooster"
};
console.log((0, discriminatedunions_1.getFarmAnimalSound)(stevie));
