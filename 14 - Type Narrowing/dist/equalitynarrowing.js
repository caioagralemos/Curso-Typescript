"use strict";
// Equality Narrowing (a === b) - só executa algo se os dois parametros forem iguais e do mesmo tipo
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
    return x;
}
