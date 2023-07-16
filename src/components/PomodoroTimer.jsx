import { useTimer } from 'react-timer-hook'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import { Box, Stack, Typography } from '@mui/material'

export default function PomodoroTimer({ expiryTimestamp, handleStageFinished, index }) {
  const { seconds, minutes, isRunning, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire: handleStageFinished,
  }) 

  // handle showing timer on html title
  let titleMinutes = minutes < 10 ? `0${minutes}` : minutes
  let titleSeconds = seconds < 10 ? `0${seconds}` : seconds
  let titleTime = titleMinutes + ':' + titleSeconds
  document.title = index % 2 ? titleTime + ' | pause' : titleTime + ' | work'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', fontSize: [50,50,100], height: [200,200,300], justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
      <Typography fontSize={[50,80,100]} >
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Typography>
      <Stack>
        {isRunning ? (
          <PauseCircleIcon color="success" fontSize="x-large" onClick={pause} />
        ) : (
          <PlayCircleIcon color="success" fontSize="x-large" onClick={resume} />
        )}
      </Stack>
    </Box>
  )
}

