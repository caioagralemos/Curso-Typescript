// instanceof Narrowing (value instanceof class)
function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString())
    } else {
        var x = new Date(date).toUTCString()
        console.log(x)
    }
}
export default printFullDate