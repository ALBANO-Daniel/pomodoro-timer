import { Box } from '@mui/material'
import ProfileView from '../profile/ProfileView'
import ProfileProvider from '../profile/ProfileProvider'

function ProfilePage({ visible }) {
  const visibleClassName = visible ? 'block' : 'none'

  return (
    <Box sx={{ display: visibleClassName }}>
      <ProfileProvider>
        <ProfileView />
      </ProfileProvider>
    </Box>
  )
}

export default ProfilePage
