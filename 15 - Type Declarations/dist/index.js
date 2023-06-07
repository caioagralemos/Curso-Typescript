"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// axios.get<User>('https://jsonplaceholder.typicode.com/users/1')
//     .then((res) => {
//         console.log('WOO IT WORKS!')
//         printUser(res.data)
//     }).catch((e) => {
//         console.log('Error', e)
//     })
// for multiple users
axios_1.default.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
    console.log('WOO IT WORKS!');
    res.data.forEach(printUser);
}).catch((e) => {
    console.log('Error', e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
