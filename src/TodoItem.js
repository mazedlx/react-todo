import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>
        {this.props.text}
        <a
          href="/delete"
          onClick={this.props.deleteTodo}
          id={this.props.id}
        >X</a>
      </li>
    );
  }
}

export default TodoItem;
