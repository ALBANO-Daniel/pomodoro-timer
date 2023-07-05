import { useContext } from 'react'
import { ColorModeContext } from '../theme'
import { Box, Container, IconButton, useTheme } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import MusicOffIcon from '@mui/icons-material/MusicOff'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

const Topbar = ( { muted, handleMuted }) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box
          display="flex"
          borderRadius="3px"
        >
          DEANI.DEV
        </Box>

        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
          <IconButton onClick={handleMuted}>
            { muted ? <MusicOffIcon /> : <MusicNoteIcon /> }
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon color='disabled' />
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}

export default Topbar

