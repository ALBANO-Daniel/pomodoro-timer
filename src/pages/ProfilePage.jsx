import { Box } from '@mui/material'
import ProfileProvider from '../components/ProfileProvider'

function ProfilePage({ visible }) {
  const visibleClassName = visible ? 'block' : 'none'

  return (
    <Box sx={{ display: visibleClassName }}>
      <ProfileProvider />
    </Box>
  )
}

export default ProfilePage
