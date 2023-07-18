import { Box } from '@mui/material'
import PomodoroProvider from '../components/PomodoroProvider'

function PomodoroPage({ muted, visible }) {
  const visibleClassName = visible ? 'block' : 'none'

  return (
    <Box sx={{ display: visibleClassName }}>
      <PomodoroProvider muted={muted} />
    </Box>
  )
}

export default PomodoroPage
