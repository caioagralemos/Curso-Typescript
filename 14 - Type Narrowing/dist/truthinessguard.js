"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Truthiness Guards - checar se um valor existe antes de trabalhar com ele "if(word)"
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log('Você não passou nada como parâmetro!');
    }
};
exports.default = printLetters;
