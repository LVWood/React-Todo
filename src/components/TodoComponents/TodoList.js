import React from 'react';

class TodoList extends React.Component {

    createTasks = item => {
        return <li 
                className={item.completed ? "complete-todo" : "todo-list"} 
                key={item.key} 
                onClick={() => this.props.completeItem(item)}
            >{item.text}</li>
    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)

        return (
            <span className="todo-list">
                <ul>{listItems}</ul>
            </span>
            
        ) 
    }
}


export default TodoList;
