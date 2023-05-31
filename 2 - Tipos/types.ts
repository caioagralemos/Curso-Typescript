// tipos
let sim: boolean = true
sim = false

let vidasDeGato: number = 7
vidasDeGato += 1


// Type inference - você não precisa declarar o tipo da variável
// só iguale ela a algum valor e ela vai assumir o tipo desse valor

let tvShow = 'Young Sheldon'
// tvShow = 1 // O tipo 'number' não pode ser atribuído ao tipo 'string'.
tvShow = 'The Big Bang Theory'

// tipo ANY -
let anyyy;
let qualquer: any = 'Ola'
qualquer = 1
qualquer = true
qualquer()