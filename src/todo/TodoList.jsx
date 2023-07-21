import { Box } from '@mui/material'
import Todo from './Todo'

function TodoList({ todos, handleTodoEdit, handleTodoComplete, handleTodoDelete, handleTodoArchive }) {
  return (
    <Box>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleTodoEdit={handleTodoEdit}
            handleTodoComplete={handleTodoComplete}
            handleTodoDelete={handleTodoDelete}
            handleTodoArchive={handleTodoArchive}
          />
        )
      })}
    </Box>
  )
}

export default TodoList