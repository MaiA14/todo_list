import React from 'react';
import { Link } from 'react-router-dom';

export default function TodoPreview(props) {
    return (
        <Link to={`/todos/${props.todo.id}`}>
            <li className="todo-preview">
                <div className="todo-line">
                    <div className="todo-title-preview">⭕ {props.todo.title}</div>
                    <Link to={`/todos/${props.todo.id}/edit`}>
                        <button className="edit-button"><img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1582406346/zwvointr6yjve95cf4bw.png"
                            width="23" height="23" alt="trash" /></button>
                    </Link>
                    <button className="trash-button"><img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1582404089/qqj9fcfqjjtphfiye2u2.png"
                        width="23" height="23" alt="trash"
                        onClick={() => { props.onDelete(props.todo) }} />
                    </button>
                </div>
            </li>
        </Link>
    )
}



