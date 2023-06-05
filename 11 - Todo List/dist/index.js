"use strict";
const btn = document.getElementById('alertTest');
const input = document.getElementById('todoinput');
const form = document.querySelector('#todoform');
const list = document.getElementById('todolist');
const todosJSON = localStorage.getItem("todolist");
function readTodos() {
    if (todosJSON === null) {
        return [];
    }
    return JSON.parse(todosJSON);
}
const todos = readTodos();
todos.forEach(createTodo);
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = '';
}
function saveTodos() {
    localStorage.setItem('todolist', JSON.stringify(todos));
}
function createTodo(todo) {
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('click', function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);
