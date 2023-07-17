import { Box, Button, TextField } from '@mui/material'
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
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      <TextField
        id="outlined-multiline-static"
        label="write new task..."
        color="success"
        multiline
        rows={2}
        defaultValue={newTodo}
        value={newTodo}
        onChange={updateValue}
      />
      <Button variant="contained" type="submit" color="success" onClick={() => handleClick()}>
        ADD
      </Button>
    </Box>
  )
}

export default TodoCreateForm
