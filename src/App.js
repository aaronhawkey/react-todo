import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  
  state = {
    todos: [
      {
        title: 'Take out Trash',
        id: 1,
        completed: false
      },
      {
        title: 'Take a poop',
        id: 2,
        completed: false
      },
      {
        title: 'Fart a but',
        id: 3,
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map( todo => {
        if(id === todo.id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }
  
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
