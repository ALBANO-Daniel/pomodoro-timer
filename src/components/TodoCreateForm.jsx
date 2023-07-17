import { Box } from '@mui/material'
import { useState } from 'react'

function TodoCreateForm({ handleTodoSubmit }) {
  const [newTodo, setNewTodo] = useState('')

  const updateValue = (event) => {
    setNewTodo(event.target.value)
  }
  const handleClick = () => {
    handleTodoSubmit(newTodo)
    setNewTodo('')
  }

  return (
    <Box>
      <input value={newTodo} onChange={updateValue} />
      <button onClick={() => handleClick()}>Add</button>
    </Box>
  )
}

export default TodoCreateForm
