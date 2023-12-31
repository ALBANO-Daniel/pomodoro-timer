import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MainAppHeaderSubheader from '../components/MainAppHeaderSubheader'
import { usePomodoroControl, useShouldShowTimer } from './pomodoroContext'

function PomodoroForm({ pomodoroFinished }) {
  const shouldShowTimer = useShouldShowTimer()
  const pomodoroControl = usePomodoroControl()

  if (shouldShowTimer === false) {
    document.title = 'Pomodoro Timer'
  }

  return (
    <React.Fragment>
      <MainAppHeaderSubheader header={'Pomodoro Timer'} subheader={'choose your settings and press create:'} />
      <Box
        sx={{
          p: [0, 2],
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <form method="post" onSubmit={pomodoroControl.handleSubmit}>
          <FormControl disabled={shouldShowTimer} sx={{ my: 1.5, ml: [0.5, 1.5] }}>
            <FormLabel id="workTime">Work periods</FormLabel>
            <RadioGroup size="small" aria-labelledby="choose work time" defaultValue={25} name="workTime">
              <FormControlLabel value="20" control={<Radio color="success" />} label="20min" />
              <FormControlLabel value="25" control={<Radio color="success" />} label="25min" />
              <FormControlLabel value="30" control={<Radio color="success" />} label="30min" />
              <Divider />
              <FormControlLabel value="0.1" control={<Radio color="success" />} label="test it!" />
            </RadioGroup>
          </FormControl>

          <FormControl disabled={shouldShowTimer} sx={{ my: 1.5, mx: [0.5, 1.5] }}>
            <FormLabel id="breakTime">Break periods</FormLabel>
            <RadioGroup aria-labelledby="choose break time" defaultValue={5} name="breakTime">
              <FormControlLabel value="5" control={<Radio color="success" />} label="5min" />
              <FormControlLabel value="7" control={<Radio color="success" />} label="7min" />
              <FormControlLabel value="10" control={<Radio color="success" />} label="10min" />
              <Divider />
              <FormControlLabel value="0.1" control={<Radio color="success" />} label="test it!" />
            </RadioGroup>
          </FormControl>

          <FormControl disabled={shouldShowTimer} sx={{ my: 1.5, ml: [0.5, 1.5] }}>
            <FormLabel id="longPause">Long pause</FormLabel>
            <RadioGroup aria-labelledby="choose end of cicle break time" defaultValue={15} name="longPause">
              <FormControlLabel value="15" control={<Radio color="success" />} label="15min" />
              <FormControlLabel value="20" control={<Radio color="success" />} label="20min" />
              <FormControlLabel value="25" control={<Radio color="success" />} label="25min" />
              <Divider />
              <FormControlLabel value="0.3" control={<Radio color="success" />} label="test it!" />
            </RadioGroup>
          </FormControl>

          <Box
            sx={{
              p: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {shouldShowTimer === false ? (
              <Button variant="contained" type="submit" color="success">
                Create Pomodoro
              </Button>
            ) : (
              <Button variant="contained" disabled={pomodoroFinished} type="submit" color="success">
                End Pomodoro
              </Button>
            )}
          </Box>
        </form>
      </Box>
    </React.Fragment>
  )
}

export default PomodoroForm
