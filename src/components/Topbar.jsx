import { useContext } from 'react'
import { ColorModeContext } from '../theme'
import { Box, Container, IconButton, Typography, useTheme } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import MusicOffIcon from '@mui/icons-material/MusicOff'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AppIcon from '../images/favicon2.gif'

const Topbar = ({ muted, handleMuted }) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Container
      sx={{
        height: '70px',
        marginBottom: '30px',
        padding: 2,
        bgcolor: ['neutral.dark', 'neutral.dark', 'transparent'],
        borderBottom: 4,
        borderColor: 'success.dark',
      }}
    >
      <Box display="flex" justifyContent="space-between" >
        <Box display="flex" borderRadius="3px" paddingLeft={1} paddingTop={1}>
          <img src={AppIcon} alt="logo" height="23px" />
          <Typography paddingLeft={1} color='success.dark' variant='h4'>deani.dev</Typography>
        </Box>

        <Box display="flex" sx={{ color:'success.dark' }}>
          <IconButton  onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon color='success' /> : <LightModeOutlinedIcon color='success' />}
          </IconButton>
          <IconButton onClick={handleMuted}>{muted ? <MusicOffIcon color='success' /> : <MusicNoteIcon color='success' />}</IconButton>
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

