import React from "react";
import ReactDOM from "react-dom/client";

import TodoTitle from "./components/todo-title";
import TodoSearch from "./components/todo-search";
import TodoList from "./components/todo-list";

const TodoElement = () => {
  return (
  <div className="todo">
    <TodoTitle />
    <TodoSearch />
    <TodoList />
  </div>
  );
}
  
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoElement />);

