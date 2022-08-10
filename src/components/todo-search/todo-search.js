import React from "react";

import './todo-search.css';

const TodoSearch = () => {
    return (
        <div className="todo-search">
            <input 
            className="form-control" 
            type="text" 
            placeholder="search"/>
        </div>
        
    );
}

export default TodoSearch;