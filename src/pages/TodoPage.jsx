import { Box } from '@mui/material'
import TodoProvider from '../todo/TodoProvider'

function TodoPage({ visible }) {
  const visibleClassName = visible ? 'block' : 'none'

  return (
    <Box sx={{ display: visibleClassName }}>
      <TodoProvider />
    </Box>
  )
}

export default TodoPage
