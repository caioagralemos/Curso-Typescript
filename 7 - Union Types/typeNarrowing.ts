// Type Narrowing é uma tecnica que consiste em fazer
// operações diferentes dependendo do tipo de uma variável
// através da palavra chave typeof

function calculateTax(price: number | string, tax: number) {
    if(typeof price === 'string') {
        try {
            var num: number = parseFloat(price.replace('$', ''))
            return num * tax
        } catch (err) {
            console.log('Something went wrong with your price input')
        }
    } else {
        return price * tax
    }
}

console.log(calculateTax(45, .07))
console.log(calculateTax('$45', .07))