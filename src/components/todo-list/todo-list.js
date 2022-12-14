import React from "react";

import TodoListItem from "../todo-list-item";

import './todo-list.css';

const TodoList = ({todo, onDeleted, onImportantItem, onDoneItem}) => {
   const todoElements = todo.map((item) => {

    const {id, ...itemProps} = item;
    return(
        <li key={ id } className="list-group-item todo-list-item">
            <TodoListItem { ...itemProps }
            onDeleted={ () => onDeleted(id) }
            onImportantItem = { () => onImportantItem(id) }
            onDoneItem = { () => onDoneItem(id) }/>
        </li>
    );
    
   });

   return (
        <ul className="list-group todo-list">
          { todoElements }  
        </ul>
    );
   }
    

export default TodoList;