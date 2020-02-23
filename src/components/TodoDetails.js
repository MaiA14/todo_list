import TodoPreview from '../components/TodoPreview.js';

import React, { Component } from 'react'

export default class TodoDetails extends Component {

    render() {
        const { todo } = this.props;
        return (
            <div className="todo-list-container">
                <button onClick={this.props.goBack} className="app-button">Back</button>
                <div className="todo-title-details ">{todo.title}</div>
                <div className="date-and-time-details-container">
                    <div className="todo-date-details"> {todo.date}</div>
                    <div className="todo-time-details">{todo.time}</div>
                </div>
                <div className="todo-content-details">{todo.content}</div>
            </div>
        )
    }
}
