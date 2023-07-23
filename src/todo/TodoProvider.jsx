import { Component } from 'react'
import { TodosContext, TodosControlContext } from './todoContext'

export class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    this.control = {
      handleTodoSubmit: this.handleTodoSubmit,
      handleTodoEdit: this.handleTodoEdit,
      handleTodoComplete: this.handleTodoComplete,
      handleTodoDelete: this.handleTodoDelete,
      // WIP
      handleTodoArchive: this.handleTodoArchive,
    }
  }

  handleTodoSubmit = (text) => {
    const date = new Date()
    const todoDate = date.getTime()
    this.setState({
      todos: [{ id: todoDate, text: text, complete: false, date: todoDate }, ...this.state.todos],
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

  // handleTodoArchive = (id) => {
  //   let updatedTodos = this.state.todos
  //   let todoToBeArchived
  //   updatedTodos.map((todo) => {
  //     if (todo.id === id) {
  //       todoToBeArchived = todo
  //     }
  //   })
  //   this.setState({
  //     archivedTodos: [todoToBeArchived, ...this.state.archivedTodos],
  //   })
  //   this.handleTodoDelete(id)
  // }

  render() {
    return (
      <TodosContext.Provider value={this.state.todos}>
        <TodosControlContext.Provider value={this.control}>{this.props.children}</TodosControlContext.Provider>
      </TodosContext.Provider>
    )
  }
}

export default function TodoProvider(props) {
  return <Todo>{props.children}</Todo>
}
