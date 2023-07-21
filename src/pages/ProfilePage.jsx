import { Box } from '@mui/material'
import ProfileView from '../profile/ProfileView'

function ProfilePage({ visible }) {
  const visibleClassName = visible ? 'block' : 'none'



  return (
    <Box sx={{ display: visibleClassName }}>
      <ProfileView />
    </Box>
  )
}

export default ProfilePage
