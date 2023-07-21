import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { MainAppContainer } from '../components/MainAppContainer'
import MainAppHeaderSubheader from '../components/MainAppHeaderSubheader'

import PersonIcon from '@mui/icons-material/Person'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PunchClockIcon from '@mui/icons-material/PunchClock'

import profileImage from '../assets/images/profile.png'
import TodoListArchived from './TodoListArchived'

function ProfileView() {

  const archivedTodos = [{}]

  return (
    <MainAppContainer>
      <MainAppHeaderSubheader
        header={'User Profile'}
        subheader={'your stats, archived tasks, achievements and more: '}
      />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ margin: 2 }}>
          <img src={profileImage} height="150px" alt="profile image" />
        </Box>
        <Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Nick Nobody" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AttachMoneyIcon />
                </ListItemIcon>
                <ListItemText primary="120" secondary='"Time is Money"' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PunchClockIcon />
                </ListItemIcon>
                <ListItemText primary="2" secondary="Pomodoros" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>

      <Box>
        <Typography>Pomodoro Statistics : </Typography>
        <Box
          sx={{
            paddingLeft: 5, paddingTop: 1,
          }}
        >
          <Typography>Minutes: 12.204</Typography>
          <Typography>Hours: 3034</Typography>
          <Typography>Pauses:</Typography>
          <Typography>Work Periods:</Typography>
          <Typography>BigPauses:</Typography>
        </Box>
      </Box>
      <TodoListArchived archivedTodos={archivedTodos} />
    </MainAppContainer>
  )
}

export default ProfileView
