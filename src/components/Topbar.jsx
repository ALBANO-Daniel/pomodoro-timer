import { useContext } from 'react'
import { ColorModeContext } from '../theme'
import { Box, Container, IconButton, Typography, useTheme } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import MusicOffIcon from '@mui/icons-material/MusicOff'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AppIcon from '../images/favicon.gif'

const Topbar = ({ muted, handleMuted }) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Container
      sx={{
        height: '50px',
        marginBottom: '30px',
        padding: 0,
        bgcolor: ['neutral.dark', 'neutral.dark', 'transparent'],
      }}
    >
      <Box display="flex" justifyContent="space-between" p={[0, 1, 2]}>
        <Box display="flex" borderRadius="3px" paddingLeft={1}>
          <img src={AppIcon} alt="logo" height="30px" />
          <Typography padding={0.5}>deani.dev</Typography>
        </Box>

        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
          </IconButton>
          <IconButton onClick={handleMuted}>{muted ? <MusicOffIcon /> : <MusicNoteIcon />}</IconButton>
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

