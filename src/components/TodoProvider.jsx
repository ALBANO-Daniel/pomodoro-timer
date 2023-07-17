import { Component } from 'react'
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
    let id = Math.floor(Math.random() * 99999)
    this.setState({
      todos: [...this.state.todos, { id: id, action: todo, done: false }],
    })
  }

  handleTodoEdit = (todo, id) => {
    this.setState({ todos: todo + id })
  }

  handleTodoComplete = (id) => {
    this.setState({ todos: id })
  }

  handleTodoDelete = (id) => {
    this.setState({ todos: id })
  }

  render() {
    return (
      <TodoView
        todos={this.state.todos}
        handleTodoSubmit={this.handleTodoSubmit}
        handleTodoEdit={this.handleTodoEdit}
        handleTodoComplete={this.handleTodoComplete}
        handleTodoDelete={this.handleTodoDelete}
      />
    )
  }
}

// ===============================================================

// import { Component } from 'react';
// import { Navbar } from './components/Navbar'
// import { TodoRows } from './components/TodoRows'

// export class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       userName: 'Zander',
//       todoItems: [
//         { action: 'Buy Milk', done: true },
//         { action: 'Dentist at 5pm', done: false },
//         { action: 'Go to Gym', done: false },
//       ],
//       newTodo: '',
//     }
//   }

//   updateValue = (event) => {
//     this.setState({ newTodo: event.target.value })
//   }

//   newTodo = () => {
//     this.setState({
//       todoItems: [...this.state.todoItems, { action: this.state.newTodo, done: false }],
//     })
//   }

//   todoRows = () =>
//     this.state.todoItems.map((item) => <TodoRows key={item.action} item={item} callback={this.toggleDone} />)

//   toggleDone = (todo) =>
//     this.setState({
//       todoItems: this.state.todoItems.map((item) =>
//         item.action === todo.action ? { ...item, done: !item.done } : item,
//       ),
//     })

//   render = () => (
//     <div className="container">
//       <div className="row">
//         <Navbar name={this.state.userName} />
//         <div className="col-12">
//           <input className="form-control" value={this.state.newToDo} onChange={this.updateValue} />
//           <button className="btn btn-primary" onClick={this.newTodo}>
//             Add
//           </button>
//         </div>
//         <div className="col-12">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Task</th>
//                 <th>Complete</th>
//               </tr>
//             </thead>
//             <tbody>{this.todoRows()}</tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// }
