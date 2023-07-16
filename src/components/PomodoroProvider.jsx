import React from 'react'

// import stageFinishedSound from '../sounds/windowsXP.opus'
import stageFinishedSound from '../sounds/default.m4a'
// import allStagesFinishedSound from '../sounds/windowsXpShutdown.m4a'
import allStagesFinishedSound from '../sounds/ps1.m4a'

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

  handleTimerSettings = (timerSettings) => {
    this.setState({
      timerSettings,
      stageCurrentIndex: 0,
      shouldShowTimer: !this.state.shouldShowTimer,
      isStageFinished: false,
      areAllStagesFinished: false,
    })
  }

  // values from Form into Obj
  handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const formDataJson = Object.fromEntries(formData.entries())
    this.handleTimerSettings(formDataJson)
  }

  handleStageFinished = () => {
    const { stageCurrentIndex } = this.state
    if (stageCurrentIndex < 7) {
      !this.props.muted && new Audio(stageFinishedSound).play()
      this.setState({ stageCurrentIndex: stageCurrentIndex + 1 })
    } else {
      !this.props.muted && new Audio(allStagesFinishedSound).play()
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
        shouldShowTimer={this.state.shouldShowTimer}
        setShouldShowTimer={this.setShouldShowTimer}
        isStageFinished={this.state.isStageFinished}
        handleStageFinished={this.handleStageFinished}
        areAllStagesFinished={this.state.areAllStagesFinished}
        handleAreAllStagesFinished={this.handleAreAllStagesFinished}
        stageCurrentIndex={this.state.stageCurrentIndex}
        expirationTimestampForCurrentStage={this.expirationTimestampForCurrentStage}
      />
    )
  }
}
