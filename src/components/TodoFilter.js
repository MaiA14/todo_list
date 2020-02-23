import React, { Component } from 'react'

export default class TodoFilter extends Component {

    changeInput = (ev) => {
        const field = ev.target.name;
        let value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value
        this.props.onSetFilter({ [field]: value })
    }

    render() {
        return (
            <form id="search-todo">
                <input type="text" 
                    name="title" placeholder="Search by title"
                    value={this.props.filterBy.title}
                    onChange={this.changeInput} />
            </form>
        )
    }
}
