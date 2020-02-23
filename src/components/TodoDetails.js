import TodoPreview from '../components/TodoPreview.js';

import React, { Component } from 'react'

export default class TodoDetails extends Component {

    render() {
        const { todo } = this.props;
        return (
            <div>
                <div>{todo.date}</div>
                <div>{todo.time}</div>
                <div>{todo.title}</div>
                <div>{todo.content}</div>
            </div>
        )
    }
}
