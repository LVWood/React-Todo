import React from 'react';
import './App.css';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  inputElement = React.createRef()  
  constructor() {
    super();
    this.state = {
      listArray: [],
      currentItem: {text:'', key:'', completed:''}
    }
  }

  clearCompleted = e => {
    e.preventDefault()
    this.setState({
      listArray: this.state.listArray.filter(current => {
        return !current.completed
      })
    })
  }

  completeItem = task => {
    const completedItems = this.state.listArray.map(item => {
      if (item.key === task.key) {
        return { 
          ...task, 
          completed: !task.completed
        }
      } else return item
    })
    this.setState({
      listArray: completedItems
    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now(), completed: false }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.listArray, newItem]
      this.setState({
        listArray: items,
        currentItem: { text: '', key: '', completed: ''},
      })
    }
  }
    

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>My to-do list</h1>
        </div>
        <TodoForm 
          addItem={this.addItem} 
          inputElement={this.inputElement} 
          handleInput={this.handleInput}
          currentItem = {this.state.currentItem} 
          clearCompleted = {this.clearCompleted}/>
        <TodoList
          entries={this.state.listArray } 
          completeItem={this.completeItem}
          />
      </div>
    )
  }
}

export default App;

