import { Box } from '@mui/material'

function MainAppHeaderSubheader(props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', py: 2 }}>
      <Box sx={{ color: 'text.primary', fontSize: [30, 30, 34], fontWeight: 'medium' }}>{props.header}</Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'bold',
          mx: 0.5,
          fontSize: [14, 14, 16],
        }}
      >
        {props.subheader}
      </Box>
    </Box>
  )
}

export default MainAppHeaderSubheader
