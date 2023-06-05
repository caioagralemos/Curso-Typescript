const btn = document.getElementById('alertTest') as HTMLButtonElement
const input = document.getElementById('todoinput') as HTMLInputElement
const form = document.querySelector('#todoform') as HTMLFormElement
const list = document.getElementById('todolist')

const todosJSON = localStorage.getItem("todolist")

interface Todo {
    text: string,
    completed: boolean
}

function readTodos(): Todo[] {
    if (todosJSON === null) {
        return []
    }
    return JSON.parse(todosJSON)
}

const todos: Todo[] = readTodos()
todos.forEach(createTodo)

function handleSubmit(e: SubmitEvent): void {
    e.preventDefault()
    const newTodo: Todo = {
        text: input.value,
        completed: false
    }
    createTodo(newTodo)
    todos.push(newTodo)
    saveTodos()
    input.value = ''
}

function saveTodos() {
    localStorage.setItem('todolist', JSON.stringify(todos))
}

function createTodo(todo: Todo) {
    const newLI = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = todo.completed
    checkbox.addEventListener('click', function(){
        todo.completed = checkbox.checked
        saveTodos()
    })
    newLI.append(todo.text)
    newLI.append(checkbox)
    list?.append(newLI)
}

form?.addEventListener("submit", handleSubmit)