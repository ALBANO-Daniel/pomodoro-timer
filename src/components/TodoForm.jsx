import { Box } from '@mui/material'
import { useState } from 'react'

function TodoForm({ handleTodoSubmit }) {
  const [newTodo, setNewTodo] = useState('')

  const updateValue = (event) => {
    setNewTodo(event.target.value)
  }

  return (
    <Box>
      <input value={newTodo} onChange={updateValue} />
      <button onClick={() => handleTodoSubmit()}>Add</button>
    </Box>
  )
}

export default TodoForm
