import React from "react";
import { Component } from "react";

import './todo-list-item.css';


const TodoListItem = ({ label, onDeleted, onImportantItem, onDoneItem, done, important }) => {
   

    let todoItemClass = 'todo-list-items'
    if(done) {
        todoItemClass += ' done ';
    }

    if(important) {
        todoItemClass += ' important';
    }

    return (
        <span className="todo-list-item d-flex justify-content-between">
            <span className={todoItemClass}
            onClick={ onDoneItem }>{ label }</span>
            <span className="todo-list-icon">
            <button className="btn btn-danger"
                onClick={ onDeleted }>
                <i className="bi bi-trash trash"></i>
            </button>
            <button className="btn btn-success"
            onClick={ onImportantItem }>
                <i className="bi bi-exclamation-lg important"></i>
            </button> 
                    
            </span>
        </span>
    );
};

export default TodoListItem;