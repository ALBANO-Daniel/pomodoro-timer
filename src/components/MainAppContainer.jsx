import { Box } from '@mui/system'

export const MainAppContainer = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        p: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: [1,1,2],
          pl: [1,1,1],
          width: [400,400,500],
          minWidth: 300,
          alignContent: 'center',
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}
