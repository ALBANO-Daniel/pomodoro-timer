import { Alert, Collapse } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'

export function AllStagesFinishedAlert(props) {
  const { handleAreAllStagesFinished } = props
  const [open, setOpen] = useState(true)

  return (
    <Box sx={{ alignContent: 'center', pt: 3, mr: 10 }}>
      <Collapse in={open}>
        <Alert
          sx={{ height: '70px', pt: 2 }}
          onClose={() => {
            setOpen(false)
            handleAreAllStagesFinished()
          }}
        >
          Pomodoro Finished !!!!
        </Alert>
      </Collapse>
    </Box>
  )
}