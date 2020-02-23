import React, { Component } from 'react'
import TodoForm from '../components/TodoForm.js';
import todoService from '../services/TodoService.js';

export default class TodoEdit extends Component {

    state = {
        todo: null
    }

    componentDidMount() {
        this.loadTodo();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id
            !== this.props.match.params.id) {
            this.loadTodo();
        }
    }

    loadTodo() {
        todoService.getTodoById(this.props.match.params.id).then(todo => {
            this.setState({ todo });
        })
    }

    onEditTodo = (title, content) =>{
        return todoService.editTodo(this.state.todo.id, title, content).then(todo =>{
            this.props.history.push('/todos/' + todo.id);
        })
    }

    render() {
        if (!this.state.todo) return <div className="loading">Loading...</div>
        return (
            <div className="edit-todo-container">
                <TodoForm todo={this.state.todo} onSave={this.onEditTodo}></TodoForm>
            </div>
        )
    }
}
