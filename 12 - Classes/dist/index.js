"use strict";
class Player {
    constructor(username, xp) {
        this.score = 0; // protected é um private que pode ser acessado em classes filhas
        this.username = username;
        this.xp = xp;
    }
    // constructor(private username: string, private xp: number){ // também é possível inicializar assim
    privateMethod() {
        console.log("esse método é privado e só é acessível dentro da classe");
    }
    goal() {
        this.score = this.score + 1;
        return `GOAL! Now ${this.username} has ${this.score} goals.`;
    }
    get resume() {
        return `${this.username} (${this.xp} XP PTS), ${this.score} goals this match`;
    }
    set player_xp(newXp) {
        if (newXp < this.xp) {
            throw new Error('You can only increase your XP!');
        }
        else {
            this.xp = newXp;
        }
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this.score = 99999;
    }
}
const player1 = new Player("caioagralemos", 1000);
console.log(player1.resume);
console.log(player1.goal());
console.log(player1.goal());
player1.player_xp = 1002;
console.log(player1.resume);
