import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PomodoroChips from '../components/PomodoroChips'
import PomodoroTimer from '../components/PomodoroTimer'

export function StageProgressIndicator(props) {
  const { handleStageFinished, stageCurrentIndex, expirationTimestampForCurrentStage } = props

  return (
    <Box sx={{ alignContent: 'center', pt: 3 }}>
      <Box sx={{ pb: 5 }}>
        <Typography color="grey" paddingBottom={1}>
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
