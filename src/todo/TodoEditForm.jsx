import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'

function TodoEditForm({ todo, handleEditForm }) {
  const [text, setText] = useState(todo.text)

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = () => {
    handleEditForm(text)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 1,
        margin: 2,
      }}
    >
      <TextField
        id="outlined-multiline-flexible"
        color="success"
        multiline
        maxRows={4}
        value={text}
        onChange={handleChange}
        InputLabelProps={{ style: { fontSize: [15, 15, 19] } }}
        inputProps={{ style: { fontSize: [15, 15, 19] } }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleClick()
          }
        }}
      />
      <Button variant="contained" type="submit" color="success" onClick={() => handleClick()}>
        Save
      </Button>
    </Box>
  )
}

export default TodoEditForm
