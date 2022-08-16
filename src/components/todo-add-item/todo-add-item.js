import React, { Component } from "react";
import './todo-add-item.css';

export default class TodoAddItem extends Component {
    
    render () { 
        
        return (
        <div className="todo-add-item">
            <button
            onClick={ () => { this.props.onAddItem('new item') } } 
            className="btn btn-outline-secondary">
            Add Item
            </button>
        </div>
        );
    }
}
