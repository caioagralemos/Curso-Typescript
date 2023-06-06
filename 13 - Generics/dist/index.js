"use strict";
const inputElement = document.querySelector('#username');
inputElement.value = "hacked!";
inputElement.disabled = true;
const btn = document.querySelector(".btn");
// My first generic
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item:any): any { // aqui o tipo de item pode ser uma coisa e o do retorno qualquer outra
//     return item
// }
function identity(item) {
    // aqui quando for inserido o tipo, toda a func vai trabalhar com esse tipo em mente
    return item;
}
identity('Ola!');
identity(7);
identity({ name: "Luke", breed: "French Bulldog" });
function getRandomElement(list) {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}
const my_string = getRandomElement(['A', 'B', 'C']);
console.log(my_string);
// Generics with multiple types
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
function mergeObjects(obj1, obj2) {
    // aqui para mesclar ele necessariamente precisa ser um objeto
    return Object.assign(Object.assign({}, obj1), obj2);
}
const my_object = merge({ name: "Mark" }, { pets: [{ name: "blue", color: "gray", species: 'parrot' }, { name: "gary", color: "blue", species: "snail" }] });
console.log(my_object);
function printDoubleLength(thing) {
    // para o tipo do parametro passado rodar aqui ele vai precisar ter a propriedade .length
    return thing.length * 2;
}
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(element) {
        this.queue.push(element);
    }
    remove(element) {
        this.queue.filter(q => {
            q != element;
        });
    }
}
