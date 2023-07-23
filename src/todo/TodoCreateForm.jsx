import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useTodosControlContext } from './todoContext'

function TodoCreateForm() {
  const [newTodo, setNewTodo] = useState('')
  const { handleTodoSubmit } = useTodosControlContext()

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
        // multiline
        rows={2}
        defaultValue={newTodo}
        value={newTodo}
        onChange={updateValue}
        inputProps={{ style: { fontSize: 19 } }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleClick()
          }
        }}
      />
      <Button variant="contained" type="submit" color="success" disabled={newTodo == ''} onClick={() => handleClick()}>
        ADD
      </Button>
    </Box>
  )
}

export default TodoCreateForm
