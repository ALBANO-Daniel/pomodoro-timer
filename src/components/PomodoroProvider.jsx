import { useState } from 'react'
import React from 'react'
import PomodoroTimer from '../components/PomodoroTimer'
import PomodoroForm from '../components/PomodoroForm'

// import alarmSound from "../sounds/default.m4a";
import alarmSound from '../sounds/windowsXP.opus'

import { theme } from '../theme.js'
import { Alert, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PomodoroChips from '../components/PomodoroChips'
import { ThemeProvider } from '@emotion/react'

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
    setTimerSettings(timerSettings)
    setStageCurrentIndex(0)
    setShouldShowTimer(!shouldShowTimer)
    setIsStageFinished(false)
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    handleTimerSettings(formJson)
  }

  // const [timerSettings, setTimerSettings] = useState('')
  // const [shouldShowTimer, setShouldShowTimer] = useState(false)
  // const [isStageFinished, setIsStageFinished] = useState(false)
  // const [index, setStageCurrentIndex] = useState(0)
  // const [reset, setAreAllStagesFinished] = useState(false)

  // const { workTime, breakTime, longPause } = timerSettings

  // const pomodoroStages = [workTime, breakTime, workTime, breakTime, workTime, breakTime, workTime, longPause]


  function stageFinished() {
    new Audio(alarmSound).play() // CAN BE EXTERNALIZED!! RFC ( handle audio + sound user choice)
    if (index < 7) {
      setStageCurrentIndex(index + 1)
    } else {
      setStageCurrentIndex(0)
      setAreAllStagesFinished(true)
      setIsStageFinished(true)
    }
  }

  const time = new Date()
  time.setSeconds(time.getSeconds() + pomodoroStagesInSeconds[index])

render() {
  return <Pomodoro
    
  setAreAllStagesFinished=
  setShouldShowTimer,
  handleTimerSettings,
  shouldShowTimer,
  isStageFinished,
  areAllStagesFinished,
  stageCurrentIndex,
  time,
     />
  }

}

