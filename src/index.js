import React from "react";
import ReactDOM from "react-dom/client";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import TodoTitle from "./components/todo-title";
import TodoSearch from "./components/todo-search";
import TodoList from "./components/todo-list";
import TodoStatus from "./components/todo-filter";

// style
import './index.css';

const TodoElement = () => {
  
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
  
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoElement />); 

