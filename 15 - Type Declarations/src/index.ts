import axios from "axios"
// npm i --save-dev @types/lodash
import _ from 'lodash'

interface User {
        id: number,
        name: string,
        username: string,
        email: string,
        address: {
          street: string,
          suite: string,
          city: string,
          zipcode: string,
          geo: { lat: string, lng: string }
        },
        phone: string,
        website: string,
        company: {
          name: string,
          catchPhrase: string,
          bs: string
        }
      }

// axios.get<User>('https://jsonplaceholder.typicode.com/users/1')
//     .then((res) => {
//         console.log('WOO IT WORKS!')
//         printUser(res.data)
//     }).catch((e) => {
//         console.log('Error', e)
//     })

// for multiple users
axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        console.log('WOO IT WORKS!')
        res.data.forEach(printUser)
    }).catch((e) => {
        console.log('Error', e)
    })

function printUser(user: User) {
    console.log(user.name)
    console.log(user.email)
    console.log(user.phone)
}