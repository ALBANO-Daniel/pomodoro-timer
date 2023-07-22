import { Box } from '@mui/material'
import TodoProvider from '../todo/TodoProvider'
import TodoView from '../todo/TodoView'

function TodoPage({ visible }) {
  const visibleClassName = visible ? 'block' : 'none'

  return (
    <Box sx={{ display: visibleClassName }}>
      <TodoProvider>
        <TodoView />
      </TodoProvider>
    </Box>
  )
}

export default TodoPage
