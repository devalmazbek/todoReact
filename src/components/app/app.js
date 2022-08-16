import React from "react";
import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import TodoTitle from "../todo-title";
import TodoSearch from "../todo-search";
import TodoList from "../todo-list";
import TodoStatus from "../todo-filter";
import TodoAddItem from "../todo-add-item";
// style
import './app.css';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        {label: 'Drink Coffe', important: false, id: 1}, 
        {label: 'Build Awesome App', important: false, id: 2}, 
        {label: 'Build React App', important: false, id: 3}, 
      ]
    };

  };


  deleteItem = (id) => {
    this.setState(({ todoItems }) => {
      
      const index = todoItems.findIndex((element) => element.id === id );

      const newTodoItems = [ ...todoItems.slice(0, index), ...todoItems.slice(index + 1)]; 
      console.log(newTodoItems);
      return {
        todoItems: newTodoItems
      }
    });
  };


  addTodoItem = (text) => {
    this.setState( ({ todoItems })  => {
      let lastIndex = todoItems.length;
      lastIndex++
      const newTodoItems = [ ...todoItems.slice()];
      const newItem = {
        label: text,
        important: false,
        id: lastIndex,
      }
      newTodoItems.push(newItem);
      console.log(todoItems);
      return {
        todoItems: newTodoItems
      }
    });
  };

   // onToggle important list item
   onImportantItem = (id) => {
    console.log('item', id);
  }

  onDoneItem = (id) => {
    console.log('done', id);
  }
  

  render() {
    return (
      <div className="todo">
        <TodoTitle />
    
        <div className="todo-search-bar d-flex justify-content-between">
          <TodoSearch />
          <TodoStatus />
        </div>
        
        <TodoList todo={this.state.todoItems}
        onDeleted = { this.deleteItem }
        onImportantItem = { this.onImportantItem }
        onDoneItem = { this.onDoneItem }/>
        <TodoAddItem onAddItem = { this.addTodoItem }/>
      </div>
      );
  };
  
}
