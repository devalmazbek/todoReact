import React from "react";

import './todo-list-item.css'

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : '',
        fontWeight: important ? 'bold' : '',
    };

    return (
        <div className="todo-list-item d-flex justify-content-between">
            <span className="todo-list-items" style={style}>{ label }</span>
            <div className="todo-list-icon">
            <button className="btn btn-danger"><i className="bi bi-trash trash"></i></button>
                <button className="btn btn-success"><i className="bi bi-exclamation-lg important"></i></button> 
                 
            </div>
        </div>
    );
}

export default TodoListItem;