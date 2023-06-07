// Truthiness Guards - checar se um valor existe antes de trabalhar com ele "if(word)"
const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char)
        }
    } else {
        console.log('Você não passou nada como parâmetro!')
    }
}

export default printLetters