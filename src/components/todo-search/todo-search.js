import React from "react";

import './todo-search.css';

const TodoSearch = ({ onFilter }) => {
    return (
        <div className="todo-search">
            <input 
            className="form-control" 
            type="text" 
            placeholder="search"
            onChange = { onFilter } />
        </div>
        
    );
}

export default TodoSearch;