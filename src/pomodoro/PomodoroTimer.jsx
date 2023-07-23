import PauseCircleIcon from '@mui/icons-material/PauseCircle'
import PlayCircleIcon from '@mui/icons-material/PlayCircle'
import { Box, Stack, Typography } from '@mui/material'
import { useTimer } from 'react-timer-hook'
import { usePomodoroControl } from './pomodoroContext'

export default function PomodoroTimer({ index }) {
  const pomodoroControl = usePomodoroControl()

  const expiryTimestamp = pomodoroControl.getExpirationTimestampForCurrentStage(index)

  const { seconds, minutes, isRunning, pause, resume } = useTimer({
    expiryTimestamp,
    onExpire: pomodoroControl.handleStageFinished,
  })

  // handle showing timer on html title
  let titleMinutes = minutes < 10 ? `0${minutes}` : minutes
  let titleSeconds = seconds < 10 ? `0${seconds}` : seconds
  let titleTime = titleMinutes + ':' + titleSeconds
  document.title = index % 2 ? titleTime + ' | pause' : titleTime + ' | work'

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        fontSize: [50, 50, 100],
        height: [200, 200, 300],
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography fontSize={[80, 90, 110]}>
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

