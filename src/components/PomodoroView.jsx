import PomodoroForm from '../components/PomodoroForm'
import { AllStagesFinishedAlert } from './AllStagesFinishedAlert'
import { MainAppContainer } from './MainAppContainer'
import { StageProgressIndicator } from './StageProgressIndicator'

export function PomodoroView(props) {
  const {
    setAreAllStagesFinished,
    setShouldShowTimer,
    handleTimerSettings,
    shouldShowTimer,
    isStageFinished,
    areAllStagesFinished,
    currentStageIndex,
    expirationTimestampForCurrentStage,
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
        <StageProgressIndicator
          isStageFinished={isStageFinished}
          currentStageIndex={currentStageIndex}
          expirationTimestampForCurrentStage={expirationTimestampForCurrentStage}
        />
      )}
    </MainAppContainer>
  )
}
