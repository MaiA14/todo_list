import React, { Component } from 'react';
import utils from '../services/utils.js';

export default class TodoForm extends Component {

    state = {
        title: '',
        content: '',
        date: utils.getFormattedDate(),
        time: utils.getFormattedTime()
    }

    componentDidMount() {
        this.setFormatDataForEdit();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.todo !== this.props.todo)
            this.setFormatDataForEdit();
    }

    setFormatDataForEdit() {
        const { todo } = this.props;
        if(todo){
            this.setState({ title: todo.title, content: todo.content })
        }
    }

    onSave = () => {
        this.props.onSave(this.state.title, this.state.content).catch();
        this.setState({ title: '', content: '' });
    }

    inputChange = (ev) => {
        let fieldName = ev.target.name;
        let fieldValue = ev.target.value;
        this.setState({ [fieldName]: fieldValue });
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="title" name="title"
                    onChange={this.inputChange} value={this.state.title}></input>
                <input type="text" placeholder="content" name="content"
                    onChange={this.inputChange} value={this.state.content}></input>
                <button onClick={this.onSave}>Save</button>
            </div>
        )
    }
}