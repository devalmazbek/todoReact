import React from "react";
import './todo-title.css';

const TodoTitle = ({ todoCount, todoDone }) => {
    console.log(todoCount, todoDone);
    return (
    <div className="todo-title d-flex justify-content-between">
        <h1 className="display-6">My todo app</h1>
        <span className="text-black-50">{todoCount} more to do, {todoDone} done</span>
    </div> 
    );
}

export default TodoTitle;