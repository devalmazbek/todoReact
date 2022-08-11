import React from "react";
import { Component } from "react";

import './todo-list-item.css';


export default class TodoListItem extends Component {
    constructor(){
        super();
        this.state = {
            done: false,
            important: false,
        };
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    };

    onMarkClick = () => {
        this.setState(({important})=> {
            return {
                important: !important,
            }
        });
    }
    render() {
        const { label } = this.props;
        const { done, important } = this.state;

        let todoItemClass = 'todo-list-items'
        if(done) {
            todoItemClass += ' done ';
        }

        if(important) {
            todoItemClass += ' important';
        }

        return (
            <span className="todo-list-item d-flex justify-content-between">
                <span className={ todoItemClass }
                onClick={ this.onLabelClick }>{ label }</span>
                <span className="todo-list-icon">
                <button className="btn btn-danger">
                    <i className="bi bi-trash trash"></i>
                </button>
                <button className="btn btn-success"
                onClick={ this.onMarkClick }>
                    <i className="bi bi-exclamation-lg important"></i>
                </button> 
                     
                </span>
            </span>
        );
    };
}

// const TodoListItem = ({label, important = false}) => {
//     const style = {
//         color: important ? 'steelblue' : '',
//         fontWeight: important ? 'bold' : '',
//     };

//     return (
//         <span className="todo-list-item d-flex justify-content-between">
//             <span className="todo-list-items" style={style}>{ label }</span>
//             <span className="todo-list-icon">
//             <button className="btn btn-danger"><i className="bi bi-trash trash"></i></button>
//                 <button className="btn btn-success"><i className="bi bi-exclamation-lg important"></i></button> 
                 
//             </span>
//         </span>
//     );
// }

// export default TodoListItem;