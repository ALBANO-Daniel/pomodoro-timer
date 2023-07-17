import React, { Component } from 'react'
import TodoView from './TodoView'

export default class TodoProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: '1', text: 'make dinner', finished: true },
        { id: '2', text: 'Dentist at 5pm', finished: false },
        { id: '3', text: 'Go to Gym', finished: false },
      ],
      newTodo: '',
    }
  }

  handleTodoSubmit = (todo) => {
    this.setState({ todos: todo })
  }

  deleteTodo = (id) => {
    this.setState({ todos: id })
  }

  editTodo = (todo, id) => {
    
    this.setState({ todos: todo + id })
  }

  render() {
    return <TodoView todos={this.state.todos} handleTodoSubmit={this.handleTodoSubmit} />
  }
}
