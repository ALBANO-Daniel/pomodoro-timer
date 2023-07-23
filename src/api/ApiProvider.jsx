import { Component } from 'react'
import {
  ApiControlContext,
  CompletedPauseTimesContext,
  CompletedPomodorosContext,
  CompletedWorkTimesContext,
  IncompletedPomodorosContext,
  PauseTimesInMinutesContext,
  TodosArchivedContext,
  WorkTimesInMinutesContext,
} from './apiContext'

export default class ApiProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todosArchived: [{}],
      workTimesInMinutes: 0,
      pauseTimesInMinutes: 0,
      completedWorkTimes: 0,
      completedPauseTimes: 0,
      incompletedPomodoros: 0,
      completedPomodoros: 0,
    }
    this.control = {
      handleTodoArchived: this.handleTodoArchived,
      handlePomodoroArchived: this.handlePomodoroArchived,
    }
  }

  handleTodoArchived = (todo) => {
    console.log('archived todo: ')
    console.log(todo)

    this.setState({
      todosArchived: [todo, ...this.state.todosArchived],
    })
  }

  handlePomodoroArchived = (time, index) => {
    const totalTime = time
    if (index === 7) {
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
          <WorkTimesInMinutesContext.Provider value={this.state.workTimesInMinutes}>
            <PauseTimesInMinutesContext.Provider value={this.state.workTimesInMinutes}>
              <CompletedWorkTimesContext.Provider value={this.state.completedWorkTimes}>
                <CompletedPauseTimesContext.Provider value={this.state.completedPauseTimes}>
                  <IncompletedPomodorosContext.Provider value={this.state.incompletedPomodoros}>
                    <CompletedPomodorosContext.Provider value={this.state.completedPomodoros}>
                      {this.props.children}
                    </CompletedPomodorosContext.Provider>
                  </IncompletedPomodorosContext.Provider>
                </CompletedPauseTimesContext.Provider>
              </CompletedWorkTimesContext.Provider>
            </PauseTimesInMinutesContext.Provider>
          </WorkTimesInMinutesContext.Provider>
        </TodosArchivedContext.Provider>
      </ApiControlContext.Provider>
    )
  }
}
