import React from 'react';
import { Component } from 'react';

import './todo-filter.css';


export default class TodoStatus extends Component {
    render() {
        return (
            <div className="todo-filter btn-group">
                <button type="button" className="btn btn-outline-secondary">All</button>
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
     
        );
    }
}
