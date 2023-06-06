interface Colorful {
    color: string
}

interface Printable {
    print(): void
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}
    print(): void {
        console.log(`Jaqueta ${this.brand} ${this.color}`)
    }
}

var caloi = new Bike("red")
var jaqueta = new Jacket("Nike", "Black")
jaqueta.print()