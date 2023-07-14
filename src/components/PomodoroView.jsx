import { Box } from '@mui/system'
import PomodoroForm from '../components/PomodoroForm'
import { AllStagesFinishedAlert } from './AllStagesFinishedAlert'
import { MainAppContainer } from './MainAppContainer'
import { StageProgressIndicator } from './StageProgressIndicator'

export function PomodoroView(props) {
  const {
    handleSubmit,
    areAllStagesFinished,
    shouldShowTimer,
    isStageFinished,
    handleStageFinished,
    handleAreAllStagesFinished,
    stageCurrentIndex,
    expirationTimestampForCurrentStage,
  } = props

  return (
    <MainAppContainer>
      <Box sx={{ pl: 1 }}>
        <PomodoroForm handleSubmit={handleSubmit} shouldShowTimer={shouldShowTimer} isStageFinished={isStageFinished} />
        {areAllStagesFinished && <AllStagesFinishedAlert handleAreAllStagesFinished={handleAreAllStagesFinished} />}
        {shouldShowTimer && !areAllStagesFinished && (
          <StageProgressIndicator
            handleStageFinished={handleStageFinished}
            stageCurrentIndex={stageCurrentIndex}
            expirationTimestampForCurrentStage={expirationTimestampForCurrentStage}
          />
        )}
      </Box>
    </MainAppContainer>
  )
}
