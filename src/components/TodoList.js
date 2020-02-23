import React from 'react'
import TodoPreview from '../components/TodoPreview.js';

export default function TodoList(props) {
    return <ul className="list">
        {props.todos.map((todo, i) =>
         <TodoPreview key={i} todo={todo} 
       onDelete={props.onDelete}>
        </TodoPreview>
        )
        }
    </ul>
}


