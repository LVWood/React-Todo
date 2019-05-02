import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    createTasks = item => {
        const newItem = <li className={item.completed ? "complete-todo" : "todo-list"} key={item.key} onClick={() => this.props.completeItem(item)}>{item.text}</li>
        return newItem;
    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
        return <Todo listItems={listItems}/>   //I danced around this forever! Why don't I need {this.listItems} here?  
    }
}


export default TodoList;
