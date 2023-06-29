import React from 'react'
import PomodoroForm from '../components/PomodoroForm'
import { AllStagesFinishedAlert } from './AllStagesFinishedAlert'
import { MainAppContainer } from './MainAppContainer'
import { StageProgressIndicator } from './StageProgressIndicator'

export default function Pomodoro(props) {
  const {
    setAreAllStagesFinished,
    setShouldShowTimer,
    handleTimerSettings,
    shouldShowTimer,
    isStageFinished,
    areAllStagesFinished,
    stageCurrentIndex,
    time,
  } = props

  return (
    <MainAppContainer>
      <PomodoroForm
        handleTimerSettings={handleTimerSettings}
        shouldShowTimer={shouldShowTimer}
        isStageFinished={isStageFinished}
      />
      {areAllStagesFinished && (
        <AllStagesFinishedAlert
          setAreAllStagesFinished={setAreAllStagesFinished}
          setShouldShowTimer={setShouldShowTimer}
        />
      )}
      {shouldShowTimer && !areAllStagesFinished && (
        <StageProgressIndicator isStageFinished={isStageFinished} stageCurrentIndex={stageCurrentIndex} time={time} />
      )}
    </MainAppContainer>
  )
}
