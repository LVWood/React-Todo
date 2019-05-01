import React from 'react';


class Todo extends React.Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <h1>my to-do list</h1>
                    

                </div>

            </div>
        )
    }
}

export default Todo