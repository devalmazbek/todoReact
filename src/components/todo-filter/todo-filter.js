import React from 'react';

import './todo-filter.css';


const TodoStatus = () => {
    return (
        <div className="todo-filter btn-group">
            <button type="button" className="btn btn-outline-secondary">All</button>
            <button type="button" className="btn btn-outline-secondary">Active</button>
            <button type="button" className="btn btn-outline-secondary">Done</button>
        </div>
 
    );
}

export default TodoStatus;