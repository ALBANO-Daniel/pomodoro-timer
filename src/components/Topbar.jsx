import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { Box, Container, IconButton, Typography, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from '../theme'
// import MusicNoteIcon from '@mui/icons-material/MusicNote'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AppIcon from '../assets/images/favicon.gif'

const Topbar = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Container
      sx={{
        height: '70px',
        marginBottom: '30px',
        padding: 2,
        bgcolor: ['transparent'],
        borderBottom: 4,
        borderColor: 'success.dark',
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" borderRadius="3px" paddingLeft={1} paddingTop={1}>
          <img src={AppIcon} alt="logo" height="25px" />
          <Typography paddingLeft={2} color="success" variant="h4">
            Work Tools
          </Typography>
        </Box>

        <Box display="flex" sx={{ color: 'success.dark' }}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlinedIcon color="success" />
            ) : (
              <LightModeOutlinedIcon color="success" />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon color="disabled" />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon color="disabled" />
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default Topbar

