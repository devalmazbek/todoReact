import React from "react";

const TodoListItem = ({label, important = false}) => {
    const style = {
        color: important ? 'tomato' : '',
        fontWeight: important ? 'bold' : ''
    };

    return <span style={style}>{ label }</span>;
}

export default TodoListItem;