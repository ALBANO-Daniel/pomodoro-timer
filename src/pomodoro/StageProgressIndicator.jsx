import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PomodoroChips from './PomodoroChips'
import PomodoroTimer from './PomodoroTimer'
import {  useStageCurrentIndex } from './pomodoroContext'

export function StageProgressIndicator() {
  const stageCurrentIndex = useStageCurrentIndex()

  return (
    <Box sx={{ alignContent: 'center', pt: 0 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography color="grey" paddingBottom={2} fontSize={[16, 21]}>
          current progress:
        </Typography>
        <PomodoroChips index={stageCurrentIndex} />
      </Box>
      <PomodoroTimer
        key={stageCurrentIndex}
        index={stageCurrentIndex}
      />
    </Box>
  )
}
