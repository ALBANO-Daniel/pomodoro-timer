import { Box } from '@mui/material'
import PomodoroProvider from '../components/PomodoroProvider'
import { PomodoroView } from '../components/PomodoroView'

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
