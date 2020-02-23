import Todo from './Todo.js';
import storageService from '../services/storageService.js';

export default {
    getTodos,
    editTodo,
    deleteTodo,
    getTodoById,
    addTodo
}

let gTodos = storageService.load('todos') || createTodos() ;

function createTodos() {
    const todos =  [
        new Todo('To finish homework', 'finish this React app'),
        new Todo('To convert this app', 'To convert this app to Angular app'),
        new Todo('To create another app', 'to create full stack app'),
    ]
    storageService.store('todos', todos)
    return todos;
}

function getTodoById(TodoId) {
    const todo = gTodos.find(todo => todo.id === TodoId)
    return Promise.resolve(todo)
}

function editTodo(id,title, content) {
    let editTodo = gTodos.find(todo => todo.id === id)
    editTodo = { ...editTodo, title, content };
    gTodos = gTodos.map(todo => editTodo.id === todo.id ? editTodo : todo);
    storageService.store('todos', gTodos)
    return Promise.resolve(editTodo)
}

function getTodos(filterBy) {
    if (filterBy) return Promise.resolve(gTodos.filter(todo => {
        return todo.title.includes(filterBy.title)
    }))
    return Promise.resolve([...gTodos]);
}

function addTodo(title, content) {
    const newTodo = new Todo(title, content);
    gTodos = [...gTodos, newTodo];
    storageService.store('todos', gTodos)
    return Promise.resolve(newTodo);
}

function deleteTodo(todo) {
    gTodos = gTodos.filter((currTodo) => currTodo.id !== todo.id)
    storageService.store('todos', gTodos)
    return Promise.resolve(true)
}
