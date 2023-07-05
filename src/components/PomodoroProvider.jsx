import React from 'react'
import alarmSound from '../sounds/windowsXP.opus'
import { PomodoroView } from './PomodoroView'
import { getStagesInSeconds } from './getStages'

export default class PomodoroProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerSettings: null,
      shouldShowTimer: false,
      isStageFinished: false,
      stageCurrentIndex: 0,
      areAllStagesFinished: false,
    }
  }

  handleTimerSettings = (timerSettings) => {
    this.setState({
      timerSettings,
      stageCurrentIndex: 0,
      shouldShowTimer: !this.state.shouldShowTimer,
      isStageFinished: false,
      areAllStagesFinished: false,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    this.handleTimerSettings(formJson)
  }

  get currentStageInSeconds() {
    const { workTime, breakTime, longPause } = this.state.timerSettings || { workTime: 0, breakTime: 0, longPause: 0 }
    const pomodoroStagesInSeconds = getStagesInSeconds({ workTime, breakTime, longPause })
    return pomodoroStagesInSeconds[this.state.stageCurrentIndex]
  }

  get expirationTimestampForCurrentStage() {
    const time = new Date()
    time.setSeconds(time.getSeconds() + this.currentStageInSeconds)
    return time
  }

  handleStageFinished = () => {
    new Audio(alarmSound).play() // CAN BE EXTERNALIZED!! RFC ( handle audio + sound user choice)
    const { stageCurrentIndex } = this.state
    if (stageCurrentIndex < 7) {
      this.setState({ stageCurrentIndex: stageCurrentIndex + 1 })
    } else {
      this.setState({ stageCurrentIndex: 0, areAllStagesFinished: true, isStageFinished: true })
    }
  }

  handleAreAllStagesFinished = () => {
    this.setState({ shouldShowTimer: false })
  }

  render() {
    return (
      <PomodoroView
        handleSubmit={this.handleSubmit}
        handleTimerSettings={this.handleTimerSettings}
        setShouldShowTimer={this.setShouldShowTimer}
        shouldShowTimer={this.state.shouldShowTimer}
        isStageFinished={this.state.isStageFinished}
        handleStageFinished={this.handleStageFinished}
        handleAreAllStagesFinished={this.handleAreAllStagesFinished}
        areAllStagesFinished={this.state.areAllStagesFinished}
        stageCurrentIndex={this.state.stageCurrentIndex}
        expirationTimestampForCurrentStage={this.expirationTimestampForCurrentStage}
      />
    )
  }
}
