import { Component } from 'react'
import { ApiControlContext, TodosArchivedContext } from './apiContext'

export default class ApiProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todosArchived: [{}],
      workTimeInMinutes: 0,
      pauseTimeInMinutes: 0,
      completedWorkTimes: 0,
      completedPauseTimes: 0,
      incompletedPomodoros: 0,
      completedPomodoros: 0,
    }
    this.control = {
      handleTodoArchived: this.handleTodoArchived,
    }
  }

  handleTodoArchived = (todo) => {
    this.setState({
      todosArchived: [todo, ...this.state.todosArchived],
    })
  }

  handlePomodoroArchived = (time, index) => {
    const totalTime = time
    if(index === 7){
      this.setState({
        completedPomodoros: this.state.completedPomodoros + 1,
      })
    } else {
      this.setState({
        incompletedPomodoros: this.state.incompletedPomodoros + 1,
      })
    }

    this.setState({
      lifetimeInSeconds: this.state.lifetimeInSeconds + totalTime,

    })
  }

  render() {
    return (
      <ApiControlContext.Provider value={this.control}>
        <TodosArchivedContext.Provider value={this.state.todosArchived}>
          {this.props.children}
        </TodosArchivedContext.Provider>
      </ApiControlContext.Provider>
    )
  }
}
