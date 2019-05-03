import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addItem}>
            <input 
                placeholder="task" 
                ref={props.inputElement}
                value={props.currentItem.text}
                onChange={props.handleInput}
            />
            <button type="submit"> Add Task </button>
            <button type="button" onClick={props.clearCompleted}> Clear Completed Items </button>
        </form>
        )
    }

export default TodoForm;