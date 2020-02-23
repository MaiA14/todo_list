import React, { Component } from 'react'
import todoService from '../services/TodoService.js';
import TodoDetails from '../components/TodoDetails.js';

export default class TodoPage extends Component {

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
        const { id } = this.props.match.params;
        todoService.getTodoById(id).then(todo => {
            this.setState({ todo })
        })
    }

    goBack = () => {
        this.props.history.push('/todos')
    }

    render() {
        if (!this.state.todo) return <div className="loading">Loading...</div>
        return <TodoDetails todo={this.state.todo} goBack={this.goBack}/>
    }
}