import { ReactEventHandler } from "react"
import { Item } from "../models/item"
import { useState } from "react"

interface ShoppingListFormProps {
    addItem: (product: string) => void
}

export default function ShoppingListForm(props: ShoppingListFormProps) {
    const [formText, changeFormText] = useState<string>("")
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        changeFormText(evt.target.value)
    }
    const handleSubmit = (evt: React.FormEvent) => {
        evt.preventDefault()
        props.addItem(formText)
        changeFormText("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="Product Name" value={formText}/>
            <button type="submit">Add Item</button>
        </form>
    )
}