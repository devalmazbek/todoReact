import React from "react";
import './todo-title.css';

const TodoTitle = () => {
    return (
    <div className="todo-title d-flex justify-content-between">
        <h1 className="display-6">My todo app</h1>
        <span className="text-black-50">1 more to do, 3 done</span>
    </div> 
    );
}

export default TodoTitle;