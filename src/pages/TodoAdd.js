import React, { Component } from 'react';
import todoService from '../services/TodoService.js';
import TodoForm from '../components/TodoForm.js';

export default class TodoAdd extends Component {

    onAddTodo = (title, content) =>{
        return todoService.addTodo(title, content).then(todo =>{
            this.props.history.push('/todos');
        })
    }

    goBack = () => {
        this.props.history.push('/todos')
    }

    render() {
        return (
            <div className="todo-list-container">
                <TodoForm onSave={this.onAddTodo}  goBack={this.goBack}></TodoForm>
            </div>
        )
    }
}