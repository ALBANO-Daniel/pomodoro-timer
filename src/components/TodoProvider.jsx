import { Component } from 'react'
import TodoView from './TodoView'

export default class TodoProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      archivedTodos: [],
    }
  }

  handleTodoSubmit = (text) => {
    let id = Math.floor(Math.random() * 99999)
    this.setState({
      todos: [{ id: id, text: text, complete: false }, ...this.state.todos],
    })
  }

  handleTodoEdit = (id, newText) => {
    let updatedTodos = this.state.todos
    updatedTodos = updatedTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  handleTodoComplete = (id) => {
    let updatedTodos = this.state.todos
    updatedTodos = updatedTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  handleTodoDelete = (id) => {
    let updatedTodos = this.state.todos
    updatedTodos = updatedTodos.filter((todo) => {
      if (todo.id === id) {
        return false
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  handleTodoArchive = (id) => {
    let updatedTodos = this.state.todos
    let todoToBeArchived
    updatedTodos.map((todo) => {
      if (todo.id === id) {
        todoToBeArchived = todo
      }
    })
    this.setState({
      archivedTodos: [todoToBeArchived, ...this.state.archivedTodos],
    })
    this.handleTodoDelete(id)
  }

  render() {
    return (
      <TodoView
        todos={this.state.todos}
        archivedTodos = {this.state.archivedTodos}
        handleTodoSubmit={this.handleTodoSubmit}
        handleTodoEdit={this.handleTodoEdit}
        handleTodoComplete={this.handleTodoComplete}
        handleTodoDelete={this.handleTodoDelete}
        handleTodoArchive={this.handleTodoArchive}
      />
    )
  }
}
