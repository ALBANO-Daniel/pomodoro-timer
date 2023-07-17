import { Box } from '@mui/material'
import { MainAppContainer } from './MainAppContainer'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import MainAppHeaderSubheader from './MainAppHeaderSubheader'

function TodoView({ todos }) {
  const handleTodoSubmit = () => {}
  const handleTodoDelete = () => {}
  const handleTodoEdit = () => {}
  const handleTodoComplete = () => {}

  return (
    <MainAppContainer>
      <MainAppHeaderSubheader header={'Your List of Tasks'} subheader={'create, edit, complete and delete: '} />
      <Box
        sx={{
          p: [0, 2],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <TodoList
          todos={todos}
          handleTodoDelete={handleTodoDelete}
          handleTodoEdit={handleTodoEdit}
          handleTodoComplete={handleTodoComplete}
        />
        <TodoForm handleTodoSubmit={handleTodoSubmit} />
      </Box>
    </MainAppContainer>
  )
}

export default TodoView
