import React, { Component } from 'react';
import todoService from '../services/TodoService.js';
import TodoForm from '../components/TodoForm.js';

export default class TodoAdd extends Component {

    onAddTodo = (title, content) =>{
        return todoService.addTodo(title, content).then(todo =>{
            this.props.history.push('/todos' + todo.id);
        })
    }

    render() {
        if (!this.state.todo) return <div className="loading">Loading...</div>
        return (
            <div className="add-todo-container">
                <TodoForm onAddTodo={this.onAddTodo}></TodoForm>
            </div>
        )
    }
}
