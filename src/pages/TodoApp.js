import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import todoService from '../services/TodoService.js';
import TodoList from '../components/TodoList.js';
import TodoFilter from '../components/TodoFilter.js';

export default class TodoApp extends Component {

    state = {
        todos: [],
        filterBy: {
            title: ''
        }
    }

    componentDidMount() {
        this.loadTodos();
    }

    loadTodos = () => {
        todoService.getTodos(this.state.filterBy).then((todos) => {
            this.setState({ todos });
        })
    }

    onSetFilter = (filterBy) => {
        this.setState(prevState => ({
            filterBy:
                { ...prevState.filterBy, ...filterBy }
        }), this.loadTodos);
    }

    onDelete = (todo) => {
        todoService.deleteTodo(todo).then(() => {
            console.log('test')
        });
    }

    render() {
        return (
            <div className="todo-list-container">
                <h1 className="todo-title">Todo List</h1>
                <div className="buttons-container">

                    <Link to={`/todos/addTodo`}>
                        <button className="add-todo">+</button>
                    </Link>
                    <TodoFilter filterBy={this.state.filterBy}
                        onSetFilter={this.onSetFilter}></TodoFilter>
                </div>
                <TodoList todos={this.state.todos} onDelete={this.onDelete}></TodoList>
            </div>
        )
    }
}
