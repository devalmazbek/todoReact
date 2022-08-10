import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import TodoTitle from "../todo-title";
import TodoSearch from "../todo-search";
import TodoList from "../todo-list";
import TodoStatus from "../todo-filter";

// style
import './app.css';

const App = () => {
  
  const todoItems = [
    {label: 'Drink Coffe', important: false, id: 1}, 
    {label: 'Build Awesome App', important: true, id: 2}, 
    {label: 'Build React App', important: true, id: 3}, 
  ];

  return (
  <div className="todo">
    <TodoTitle />

    <div className="todo-search-bar d-flex justify-content-between">
      <TodoSearch />
      <TodoStatus />
    </div>
    
    
    <TodoList todo={todoItems}/>
  </div>
  );
}

export default App; 