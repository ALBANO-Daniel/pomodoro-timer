import React from 'react'
import { Box } from '@mui/system'

export const MainAppContainer = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        p: 1,
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          pl: 9,
          width: '500px',
          minWidth: 300,
          alignContent: 'center',
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}
