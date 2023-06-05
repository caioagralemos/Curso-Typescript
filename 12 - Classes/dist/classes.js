class Player {
    static desc = 'player in the game' // o tipo static faz com que o
    // que esteja definido aqui não seja definido nas instancias, mas sim na classe player

    #score = 1 // a # antes do nome faz com que essa variável tenha o escopo privado e so possa ser
    // checada ou alterada dentro da função

    constructor(username, xp){
        // vai ser chamado automaticamente cada vez que uma instancia de player for criada
        this.username = username
        this.xp = xp
        numLives = 5
        this.#private()
    }
    #private() {
        // esse método só pode ser chamado dentro da classe
        console.log('new player created!')
    }
    get score(){
        return this.#score
    }
    damage(hits = 1){
        this.numLives = this.numLives - (1 * hits)
        console.log(`${this.username} took ${hits} hits and now has ${this.numLives} lives!`)
    }
    taunt(){
        console.log('WWCD!')
    }

    // getters - são como funções, que retornam dados que podem ser chamados como propriedades normais (player.resume)
    get resume() {
        return `${this.username} - Lives: ${this.#numLives} - ${this.#score} points`
    }

    // setters - são como getters, mas para definir valores
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be positive")
        }
        this.#score = newScore
    }
}

class Ultimate extends Player {
    constructor(username, xp, powers){
        super(username, xp)
        this.numLives = this.numLives * 5
        this.powers = powers
    }
    #isUlt = true
}

const player1 = new Player('caioagralemos', 12391)
console.log(player1.username)
player1.damage(4)
console.log(player1.score)
console.log(player1.resume) // getter