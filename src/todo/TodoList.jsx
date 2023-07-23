import { Box } from '@mui/material'
import Todo from './Todo'
import { useTodosContext } from './todoContext'

function TodoList() {
  const todos = useTodosContext()

  return (
    <Box>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />
      })}
    </Box>
  )
}

export default TodoList
