import React from 'react'
import PomodoroTimer from '../components/PomodoroTimer'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PomodoroChips from '../components/PomodoroChips'

export default function StageProgressIndicator(props) {
  const { isStageFinished, stageCurrentIndex, time } = props

  return (
    <Box sx={{ alignContent: 'center', pt: 3 }}>
      <Box sx={{ pb: 5 }}>
        <Typography color="grey" paddingBottom={1}>
          current progress:
        </Typography>
        <PomodoroChips index={stageCurrentIndex} />
      </Box>
      <PomodoroTimer
        expiryTimestamp={time}
        onExpire={isStageFinished}
        key={stageCurrentIndex}
        index={stageCurrentIndex}
      />
    </Box>
  )
}
