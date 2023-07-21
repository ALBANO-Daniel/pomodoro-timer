import { Box } from '@mui/system'
import PomodoroForm from '../pomodoro/PomodoroForm'
import { AllStagesFinishedAlert } from './AllStagesFinishedAlert'
import { MainAppContainer } from '../components/MainAppContainer'
import { StageProgressIndicator } from './StageProgressIndicator'
import { useAreAllStagesFinished, useShouldShowTimer, useIsStageFinished } from './pomodoroContext'

export function PomodoroView() {
  const areAllStagesFinished = useAreAllStagesFinished()
  const shouldShowTimer = useShouldShowTimer()
  const isStageFinished = useIsStageFinished()

  return (
    <MainAppContainer>
      <Box sx={{ pl: 1 }}>
        <PomodoroForm shouldShowTimer={shouldShowTimer} isStageFinished={isStageFinished} />
        {areAllStagesFinished && <AllStagesFinishedAlert />}
        {shouldShowTimer && !areAllStagesFinished && <StageProgressIndicator />}
      </Box>
    </MainAppContainer>
  )
}
