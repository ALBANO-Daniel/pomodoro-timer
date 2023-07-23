import { Box } from '@mui/material'
import PomodoroProvider from '../pomodoro/PomodoroProvider'
import { PomodoroView } from '../pomodoro/PomodoroView'

function PomodoroPage({ visible }) {
  const visibleClassName = visible ? 'block' : 'none'

  return (
    <Box sx={{ display: visibleClassName }}>
      <PomodoroProvider>
        <PomodoroView />
      </PomodoroProvider>
    </Box>
  )
}

export default PomodoroPage
