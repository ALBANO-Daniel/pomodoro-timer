import { Alert, Collapse } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { usePomodoroControl } from './pomodoroContext'

export function AllStagesFinishedAlert() {
  const [open, setOpen] = useState(true)
  const pomodoroControl = usePomodoroControl()

  return (
    <Box sx={{ alignContent: 'center', pt: 3, mr: 10 }}>
      <Collapse in={open}>
        <Alert
          sx={{ height: '70px', pt: 2 }}
          onClose={() => {
            setOpen(false)
            pomodoroControl.handleAreAllStagesFinished()
          }}
        >
          Pomodoro Finished !!!!
        </Alert>
      </Collapse>
    </Box>
  )
}
