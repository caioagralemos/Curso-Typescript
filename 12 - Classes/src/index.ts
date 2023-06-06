class Player {
    // antes de tudo precisamos declarar as propriedades aqui
    public readonly username: string // readonly = assim que criado, é impossível mudar, mas é possível acessar
    private xp: number // public ou private controlam aonde a propriedade pode ser utilizada
    protected score: number = 0 // protected é um private que pode ser acessado em classes filhas
    constructor(username: string, xp: number){
        this.username = username
        this.xp = xp
    }

    // constructor(private username: string, private xp: number){ // também é possível inicializar assim

    private privateMethod() {
        console.log("esse método é privado e só é acessível dentro da classe")
    }

    goal(): string {
        this.score = this.score + 1
        return `GOAL! Now ${this.username} has ${this.score} goals.`
    }

    get resume (){
        return `${this.username} (${this.xp} XP PTS), ${this.score} goals this match`
    }

    set player_xp(newXp: number) {
        if (newXp < this.xp) {
            throw new Error('You can only increase your XP!')
        } else {
            this.xp = newXp
        }
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true
    maxScore() {
        this.score = 99999
    }
}

const player1: Player = new Player("caioagralemos", 1000)
console.log(player1.resume)
console.log(player1.goal())
console.log(player1.goal())
player1.player_xp = 1002
console.log(player1.resume)