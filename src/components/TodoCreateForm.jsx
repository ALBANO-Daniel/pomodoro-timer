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
        margin: 2,
        gap: 1,
      }}
    >
      <TextField
        id="outlined-multiline-static"
        label="new task"
        color="success"
        multiline
        rows={2}
        defaultValue={newTodo}
        value={newTodo}
        onChange={updateValue}
        // InputLabelProps={{ style: { fontSize: 19 } }}
        inputProps={{ style: { fontSize: 19 } }}
      />
      <Button variant="contained" type="submit" color="success" onClick={() => handleClick()}>
        ADD
      </Button>
    </Box>
  )
}

export default TodoCreateForm
