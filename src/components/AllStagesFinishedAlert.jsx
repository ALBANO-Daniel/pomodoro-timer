import { Alert } from '@mui/material'
import { Box } from '@mui/system'

export function AllStagesFinishedAlert(props) {
  const { setAreAllStagesFinished, setShouldShowTimer } = props

  return (
    <Box sx={{ alignContent: 'center', pt: 3 }}>
      <Alert
        sx={{ height: '70px', pt: 5 }}
        onClose={() => {
          setAreAllStagesFinished(false)
          setShouldShowTimer(false)
        }}
      >
        Pomodoro Finished!!!!
      </Alert>
    </Box>
  )
}