import { Box, Divider, Typography } from '@mui/material'
import { MainAppContainer } from '../assets/components/MainAppContainer'
import TodoCreateForm from './TodoCreateForm'
import TodoList from './TodoList'
import MainAppHeaderSubheader from '../assets/components/MainAppHeaderSubheader'
import TodoListArchived from './TodoListArchived'

function TodoView(props) {
  const {
    todos,
    archivedTodos,
    handleTodoSubmit,
    handleTodoEdit,
    handleTodoComplete,
    handleTodoDelete,
    handleTodoArchive,
  } = props

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
        <TodoCreateForm handleTodoSubmit={handleTodoSubmit} />
        <TodoList
          todos={todos}
          handleTodoEdit={handleTodoEdit}
          handleTodoComplete={handleTodoComplete}
          handleTodoDelete={handleTodoDelete}
          handleTodoArchive={handleTodoArchive}
        />
      </Box>
      {archivedTodos.length !== 0 ? (
        <Box>
          <Divider sx={{ margin: 1, marginBottom: 3 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography component="h2" variant="h4">
              Archive of Finished Tasks
            </Typography>
          </Box>
          <TodoListArchived archivedTodos={archivedTodos} />
        </Box>
      ) : null }
    </MainAppContainer>
  )
}

export default TodoView
