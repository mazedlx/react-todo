import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          text: 'Bob',
          key: 1,
        }, {
          text: 'jane',
          key: 7,
        }
      ],
      currentTodo: {
        text: '',
        key: null,
      }
    };
    this.inputElement = React.createRef();
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = this.state.currentTodo;
    if(newTodo.text !== '') {
      const todos = [...this.state.todos, newTodo];
      this.setState({
        todos,
        currentTodo: {
          text:'',
          key: null,
        }
      });
      this.inputElement.current.value = '';
    }
  }

  handleInput = e => {
    const text = e.target.value;
    const currentTodo = {
      text,
      key: Date.now(),
    };
    this.setState({
      currentTodo
    });
  }

  deleteTodo = (e) => {
    e.preventDefault();
    const key = e.target.id;
    const todos = this.state.todos.filter(todo => {
      return todo.key !== parseInt(key);
    });
    this.setState({
      todos
    });
  }

  render() {
    return <div id="main">
      <h1>TodoList</h1>
      <TodoList
        addTodo={this.addTodo}
        handleInput={this.handleInput}
        inputElement={this.inputElement}
        deleteTodo={this.deleteTodo}
        todos={this.state.todos}
      />
    </div>
  }
}

export default App