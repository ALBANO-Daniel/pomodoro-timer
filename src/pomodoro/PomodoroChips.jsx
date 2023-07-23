import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import PomodoroFinishedIcon from '../assets/images/appleEnd.png'
import PomodoroFinishedIconWhite from '../assets/images/appleEndWhite.png'
import PomodoroIcon from '../assets/images/pomme.png'
import PomodoroIconWhite from '../assets/images/pommeWhite.png'

export default function PomodoroChips({ index }) {
  return (
    <React.Fragment>
      <Box direction="row" display="flex" gap={2} paddingBottom={1}>
        <PomodoroChip label="work" color="green" finished={index < 1 ? false : true} />
        <PomodoroChip label="pause" color="salmon" finished={index < 2 ? false : true} />
        <PomodoroChip label="work" color="green" finished={index < 3 ? false : true} />
        <PomodoroChip label="pause" color="salmon" finished={index < 4 ? false : true} />
      </Box>
      <Box direction="row" gap={2} display="flex">
        <PomodoroChip label="work" color="green" finished={index < 5 ? false : true} />
        <PomodoroChip label="pause" color="salmon" finished={index < 6 ? false : true} />
        <PomodoroChip label="work" color="green" finished={index < 7 ? false : true} />
        <PomodoroChip label="pause" color="red" finished={false} />
      </Box>
    </React.Fragment>
  )
}

export const PomodoroChip = (props) => {
  let { label, color, finished } = props

  const theme = useTheme()
  const mode = theme.palette.mode

  // handle color green for dark mode
  if (color === 'green' && mode === 'dark') {
    color = 'lime'
  }

  return finished ? (
    <Box color={color} sx={{ position: 'relative', opacity: '0.3' }}>
      {mode === 'dark' ? (
        <img src={PomodoroFinishedIconWhite} alt="stage icon" width="50px" height="45px" />
      ) : (
        <img src={PomodoroFinishedIcon} alt="stage icon" width="50px" height="45px" />
      )}
      <Typography color={color} sx={{ position: 'absolute', top: 0, paddingX: 1, paddingTop: 2, fontSize: '11px' }}>
        {label}
      </Typography>
    </Box>
  ) : (
    <Box color={color} sx={{ position: 'relative' }}>
      {mode === 'dark' ? (
        <img src={PomodoroIconWhite} alt="stage icon" width="50px" height="45px" />
      ) : (
        <img src={PomodoroIcon} alt="stage icon" width="50px" height="45px" />
      )}
      <Typography color={color} sx={{ position: 'absolute', top: 0, paddingX: 1.2, paddingTop: 1.5 }}>
        {label}
      </Typography>
    </Box>
  )
}

