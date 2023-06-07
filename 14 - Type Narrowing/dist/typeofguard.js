"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Typeof Guard (typeof x == "type")
function triple(a) {
    if (typeof a === "string") {
        // isso é um typeof guard
        return a + a + a;
    }
    else if (typeof a === 'number') {
        return a * 3;
    }
}
exports.default = triple;
