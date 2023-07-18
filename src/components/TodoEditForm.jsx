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
        justifyContent: 'start',
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
        InputLabelProps={{ style: { fontSize: 19 } }}
        inputProps={{ style: { fontSize: 19 } }}
      />
      <Button variant="contained" type="submit" color="success" onClick={() => handleClick()}>
        Save
      </Button>
    </Box>
  )
}

export default TodoEditForm

// <Box
//       sx={{
//         display: 'flex',
//         alignContent: 'center',
//         justifyContent: 'center',
//         gap: 1,
//       }}
//     >
//       <TextField
//         id="outlined-multiline-static"
//         label="write new task..."
//         color="success"
//         multiline
//         rows={2}
//         defaultValue={newTodo}
//         value={newTodo}
//         onChange={updateValue}
//       />
//       <Button variant="contained" type="submit" color="success" onClick={() => handleClick()}>
//         ADD
//       </Button>
//     </Box>
