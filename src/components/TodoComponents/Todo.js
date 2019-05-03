import React from 'react';


const Todo = props => {
    return (
        <div className="todo-list">
            <ul>{props.listItems}</ul>
        </div>
    )
}


export default Todo;