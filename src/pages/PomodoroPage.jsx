import { Box } from '@mui/material'
import PomodoroProvider from '../pomodoro/PomodoroProvider'
import { PomodoroView } from '../pomodoro/PomodoroView'

function PomodoroPage({ muted, visible }) {
  const visibleClassName = visible ? 'block' : 'none'

  return (
    <Box sx={{ display: visibleClassName }}>
      <PomodoroProvider muted={muted}>
        <PomodoroView />
      </PomodoroProvider>
    </Box>
  )
}

export default PomodoroPage
