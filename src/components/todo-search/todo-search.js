import React from 'react';
import { Component } from 'react';

import './todo-search.css';

export default class TodoSearch extends Component {
    constructor() {
      super();

      this.state = {
        term: ''
      };

    }


    onSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }
    
    render() {
        return (
        <div className="todo-search">
            <input 
            className="form-control" 
            type="text" 
            placeholder="search"
            value={this.state.term}
            onChange = { this.onSearch } />
        </div>
        
        );
    }
}
