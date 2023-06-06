"use strict";
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`Jaqueta ${this.brand} ${this.color}`);
    }
}
var caloi = new Bike("red");
var jaqueta = new Jacket("Nike", "Black");
jaqueta.print();
