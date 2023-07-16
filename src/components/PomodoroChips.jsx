import { Chip, Stack } from '@mui/material'
import React from 'react'

function PomodoroChips({ index }) {
  return (
    <React.Fragment>
      <Stack direction="row" gap={2} paddingBottom={1} >
        <Chip label="work" color="success" />
        <Chip label="pause" color="success" variant={index < 1 ? 'outlined' : ''} />
        <Chip label="work" color="success" variant={index < 2 ? 'outlined' : ''} />
        <Chip label="pause" color="success" variant={index < 3 ? 'outlined' : ''} />
      </Stack>
      <Stack direction="row" gap={2}>
        <Chip label="work" color="success" variant={index < 4 ? 'outlined' : ''} />
        <Chip label="pause" color="success" variant={index < 5 ? 'outlined' : ''} />
        <Chip label="work" color="success" variant={index < 6 ? 'outlined' : ''} />
        <Chip label="pause" color="error" variant={index < 7 ? 'outlined' : ''} />
      </Stack>
    </React.Fragment>
  )
}

export default PomodoroChips

