"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// instanceof Narrowing (value instanceof class)
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        var x = new Date(date).toUTCString();
        console.log(x);
    }
}
exports.default = printFullDate;
