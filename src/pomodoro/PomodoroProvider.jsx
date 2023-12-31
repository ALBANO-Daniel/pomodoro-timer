import React, { useContext } from 'react'
import allWorkStagesFinishedSound from '../assets/sounds/ApplauseCheering.m4a'
import stageFinishedSound from '../assets/sounds/default.m4a'
import allStagesFinishedSound from '../assets/sounds/ps1.m4a'

import { ApiControlContext } from '../api/apiContext'
import { getStagesInSeconds } from './getStages'
import {
  AreAllStagesFinishedContext,
  IsStageFinishedContext,
  PomodoroControlContext,
  ShouldShowTimerContext,
  StageCurrentIndexContext,
} from './pomodoroContext'

export class Pomodoro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerSettings: null,
      shouldShowTimer: false,
      isStageFinished: false,
      stageCurrentIndex: 0,
      areAllStagesFinished: false,
    }
    this.control = {
      handleSubmit: this.handleSubmit,
      handleAreAllStagesFinished: this.handleAreAllStagesFinished,
      handleStageFinished: this.handleStageFinished,
      getExpirationTimestampForCurrentStage: this.getExpirationTimestampForCurrentStage,
    }
  }

  // values from Form into Obj
  handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const formDataJson = Object.fromEntries(formData.entries())
    this.handleTimerSettings(formDataJson)
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

  getCurrentStageInSeconds = (stageCurrentIndex) => {
    const { workTime, breakTime, longPause } = this.state.timerSettings || { workTime: 0, breakTime: 0, longPause: 0 }
    const pomodoroStagesInSeconds = getStagesInSeconds({ workTime, breakTime, longPause })
    return pomodoroStagesInSeconds[stageCurrentIndex]
  }

  getExpirationTimestampForCurrentStage = (stageCurrentIndex) => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + this.getCurrentStageInSeconds(stageCurrentIndex))
    return time
  }

  handleUserHistory = () => {
    this.props.handleTodoArchived()
  }

  handleStageFinished = () => {
    const { stageCurrentIndex } = this.state

    if (stageCurrentIndex < 7) {
      if (stageCurrentIndex === 6) {
        !this.props.muted && new Audio(allWorkStagesFinishedSound).play()
      } else {
        !this.props.muted && new Audio(stageFinishedSound).play()
      }
      const nextStageIndex = stageCurrentIndex + 1
      this.setState({ stageCurrentIndex: nextStageIndex })
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
      <ShouldShowTimerContext.Provider value={this.state.shouldShowTimer}>
        <IsStageFinishedContext.Provider value={this.state.isStageFinished}>
          <PomodoroControlContext.Provider value={this.control}>
            <AreAllStagesFinishedContext.Provider value={this.state.areAllStagesFinished}>
              <StageCurrentIndexContext.Provider value={this.state.stageCurrentIndex}>
                {this.props.children}
              </StageCurrentIndexContext.Provider>
            </AreAllStagesFinishedContext.Provider>
          </PomodoroControlContext.Provider>
        </IsStageFinishedContext.Provider>
      </ShouldShowTimerContext.Provider>
    )
  }
}

export default function PomodoroProvider(props) {
  const { handleTodoArchived } = useContext(ApiControlContext)

  return <Pomodoro handleTodoArchived={handleTodoArchived}>{props.children}</Pomodoro>
}
