import { Box } from '@mui/material'
import { MainAppContainer } from './MainAppContainer'
import TodoCreateForm from './TodoCreateForm'
import TodoList from './TodoList'
import MainAppHeaderSubheader from './MainAppHeaderSubheader'

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
      <Box sx={{ backgroundColor: 'green' }}>
        {archivedTodos.map(todo => {
          console.log('achived list ')
          console.log(todo.id)
          return <Box key={todo.id}>{todo.text}</Box>
        })}
      </Box>
    </MainAppContainer>
  )
}

export default TodoView
