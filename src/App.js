import React from 'react';

// Import Components

import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList'

// Import Stylesheet

import './components/TodoComponents/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addItem = (taskItem) => {
    const newItem = {
      task: taskItem,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  toggleItem = (itemID) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === itemID) {
          return {...item, completed: !item.completed};
        } else {
            return item;
        }
      })
    });
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((task) => {
        return !task.completed;
      })
    });
  }

  render() {
    return (
      <div>
        <div className="listContainer">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm
            addItem={this.addItem}
            clearCompleted={this.clearCompleted} />
          <TodoList
            todos={this.state.todos}
            toggleItem={this.toggleItem} />
        </div>
      </div>
    );
  }
}

export default App;
