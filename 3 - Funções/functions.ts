function square(num: number){
    return num * num
}

function greet(person: string){
    // person * person retorna um erro
    return `Olá, ${person.toUpperCase()}`
}

const doSomething = (person: string = 'stranger', age: number, text: string, isFunny: boolean) => {
    return `${age} year old ${person} said ${text} ${isFunny ? ', haha!' : '.'}`
}

// doSomething('Caio') // ts reclama que estão faltando parametros

const add = (x: number, y: number): number => { // declarando o tipo a ser retornado pela função
    return x+y
}

function rando(num: number){ // retorno de multiplos tipos
    if(Math.random() < 0.5){
        return num.toString()
    }
    return num
}

function printTwice(msg: string): void { // retorno void = retorna undefined
    console.log(msg)
    console.log(msg)
}

function gameLoop(): never{ // retorno never = nunca para de executar, nunca retorna nada
    while(true){
        alert('loop')
    }
}