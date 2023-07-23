import { Box } from '@mui/material'
import { MainAppContainer } from '../components/MainAppContainer'
import MainAppHeaderSubheader from '../components/MainAppHeaderSubheader'
import TodoCreateForm from './TodoCreateForm'
import TodoList from './TodoList'

function TodoView() {
  return (
    <MainAppContainer>
      <MainAppHeaderSubheader header={'Your List of Tasks'} subheader={'create, edit, complete and delete: '} />
      <Box
        sx={{
          p: [0, 2],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <TodoCreateForm />
        <TodoList />
      </Box>
    </MainAppContainer>
  )
}

export default TodoView
