import { useState } from "react"
import { Item } from "../models/item"
import ShoppingListForm from "./ShoppingListForm"
import { randomUUID } from "crypto"

interface ShoppingListProps {
    items: Item[]
}
export default function ShoppingList(props: ShoppingListProps) {
    const [itemsState, setItem] = useState<Item[]>([]) // State vai ser um array de iten
    const addItem = (product: string) => {
        setItem([
            ...itemsState,
            {
                id: Math.random(),
                product: product,
                quantity: Math.floor(Math.random() * 10)

            } 
        ])
        console.log(itemsState)
    }
    return <div>
        Shopping List
        <ul>
            {itemsState.map(item => {
                return <li key={item.id}>{item.product}</li>
            })}
        </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
}