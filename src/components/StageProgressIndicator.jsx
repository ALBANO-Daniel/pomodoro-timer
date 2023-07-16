import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PomodoroChips from '../components/PomodoroChips'
import PomodoroTimer from '../components/PomodoroTimer'

export function StageProgressIndicator(props) {
  const { handleStageFinished, stageCurrentIndex, expirationTimestampForCurrentStage } = props

  return (
    <Box sx={{ alignContent: 'center', pt: 0 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography color="grey" paddingBottom={2} fontSize={[16,21]}>
          current progress:
        </Typography>
        <PomodoroChips index={stageCurrentIndex} />
      </Box>
      <PomodoroTimer
        expiryTimestamp={expirationTimestampForCurrentStage}
        handleStageFinished={handleStageFinished}
        key={stageCurrentIndex}
        index={stageCurrentIndex}
      />
    </Box>
  )
}
