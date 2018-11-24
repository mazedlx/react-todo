import React, { Component } from "react";
import TodoItem from './TodoItem';

class TodoList extends Component {
  componentDidMount() {
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo}>
          <input
            type="text"
            placeholder="Todo"
            ref={this.props.inputElement}
            onChange={this.props.handleInput}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {this.props.todos.map(({text, key}) => (
            <TodoItem
              deleteTodo={this.props.deleteTodo}
              key={key}
              id={key}
              text={text}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
