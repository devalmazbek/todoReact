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
        {label: 'Drink Coffee', important: false, done: false, id: 1}, 
        {label: 'Build Awesome App', important: false, done: false, id: 2}, 
        {label: 'Build React App', important: false, done: false, id: 3}, 
      ],
      term: ''
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
      
      const newItem = {
        label: text,
        important: false,
        id: ++lastIndex,
      }

      const newTodoItems = [ ...todoItems.slice(), newItem];
      return {
        todoItems: newTodoItems
      }
    });
  };

   // onToggle important list item
   onDoneItem = (id) => {
    // console.log('item', id);

    this.setState(({todoItems}) => {
      const index = todoItems.findIndex((item) => item.id ===   id);

      const oldItem = todoItems[index];
      const newItem = { ...oldItem, done: !oldItem.done};

      const newArray = [
        ...todoItems.slice(0, index),
        newItem,
        ...todoItems.slice(index + 1)
      ]
      
      return {
        todoItems: newArray
      }
    });

  };

  onImportantItem = (id) => {
    this.setState(({todoItems}) => {
      const index = todoItems.findIndex((item) => item.id ===   id);

      const oldItem = todoItems[index];
      const newItem = { ...oldItem, important: !oldItem.important};

      const newArray = [
        ...todoItems.slice(0, index),
        newItem,
        ...todoItems.slice(index + 1)
      ]
      
      return {
        todoItems: newArray
      }
    });
  }

  todoFilterItem = (e) => {
    const { todoItems } = this.state;
    const {label} = {...todoItems, label};
    console.log(label);

  }

  onSearchChange = (term) => {
    this.setState({ term });
  }

  search = (items, term) => {
    if(term.length === 0) {
      return items;
    }

    return (items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    }) );
  }
  

  render() {
    const {todoItems, term} = this.state;

    const todoDone = todoItems.filter((element) => element.done).length;
    
    const todoCount = todoItems.length - todoDone;

    const visibleItem = this.search(todoItems, term);

    return (
      <div className="todo">
        <TodoTitle todoCount={todoCount} todoDone={todoDone}/>
    
        <div className="todo-search-bar d-flex justify-content-between">
          <TodoSearch onFilter={ this.todoFilterItem }
          onSearchChange={this.onSearchChange}/>
          <TodoStatus />
        </div>
        
        <TodoList 
        todo={visibleItem}
        onDeleted = { this.deleteItem }
        onImportantItem = { this.onImportantItem }
        onDoneItem = { this.onDoneItem }/>
        <TodoAddItem onAddItem = { this.addTodoItem }/>
      </div>
      );
  };
  
}
