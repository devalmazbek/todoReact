import React, { Component } from "react";
import './todo-add-item.css';

export default class TodoAddItem extends Component {
    
    constructor() {
        super();

        this.state ={
            item: ''
        };
    };

    onLabelChange = (e) => {
        this.setState({
            item: e.target.value,
        });

    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.item);

        this.setState({
            item: '',
        });
    }

    render () { 
        return (
        <form className="todo-add-item d-flex"
                onSubmit={ this.onSubmit }>
            <input type="text" 
                placeholder="enter task" 
                className="form-control add-item" 
                onChange={this.onLabelChange}
                value={this.state.item}/>
            <button
            // onClick={ this.onSubmit } 
            className="btn btn-outline-secondary">
            Add Item
            </button>
        </form>
        );
    }
}
