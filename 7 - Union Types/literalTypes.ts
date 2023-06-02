var zero: 0 = 0 // o tipo de uma variavel é o valor da variavel
// zero = 1 // O tipo '1' não pode ser atribuído ao tipo '0'.

var resposta: 'Sim' | 'Não' | 'Talvez' = 'Sim' // a resposta precisa ser uma dessas três pra dar certo
// resposta = 2 // O tipo '2' não pode ser atribuído ao tipo '"Sim" | "Não" | "Talvez"'.
resposta = 'Talvez'

type DiadaSemana =
    'Domingo' |
    'Segunda' |
    'Terça' |
    'Quarta' |
    'Quinta' |
    'Sexta' |
    'Sábado'

var hoje: DiadaSemana = 'Sexta'