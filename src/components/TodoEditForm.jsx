import { Box } from '@mui/material'
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
    <Box>
      <input value={text} onChange={handleChange} />
      <button onClick={() => handleClick()}>Save</button>
    </Box>
  )
}

export default TodoEditForm
