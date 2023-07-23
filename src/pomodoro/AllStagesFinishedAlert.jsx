import { Alert, Collapse, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import AppleTree from '../assets/images/appleTree.png'
import { usePomodoroControl } from './pomodoroContext'

export function AllStagesFinishedAlert() {
  const [open, setOpen] = useState(true)
  const pomodoroControl = usePomodoroControl()

  return (
    <Box sx={{ alignContent: 'center', pt: 3, m: 3, alignText: 'center' }}>
      <Collapse in={open}>
        <Alert
          icon={false}
          sx={{
            height: '90px',
            pt: 2,
            px: [2, 2, 5],
            display: 'flex',
            gap: 1,
            alignContent: 'center',
            justifyItems: 'center',
            justifyContent: 'center',
          }}
          onClose={() => {
            setOpen(false)
            pomodoroControl.handleAreAllStagesFinished()
          }}
        >
          <Box width="100%" display="flex" alignItems="center">
            <img src={AppleTree} width="50px" height="50px" alt="tree with apple fruits" />
            <Typography variant="h3" sx={{ paddingLeft: 2 }}>
              Finished, Well Done!
            </Typography>
          </Box>
        </Alert>
      </Collapse>
    </Box>
  )
}
