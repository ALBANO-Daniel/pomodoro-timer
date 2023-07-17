import { Box, Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import TodoEditForm from './TodoEditForm'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

function Todo({ todo, handleTodoEdit, handleTodoComplete, handleTodoDelete, handleTodoArchive }) {
  const [showEdit, setShowEdit] = useState(false)

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }
  const handleEditForm = (text) => {
    handleTodoEdit(todo.id, text)
    setShowEdit(!showEdit)
  }
  const handleCompleteClick = () => {
    handleTodoComplete(todo.id)
  }


  return (
    <Box>
      {showEdit ? <TodoEditForm todo={todo} handleEditForm={handleEditForm} /> : <Box>{todo.text}</Box>}
      <ButtonGroup>
        <Button onClick={() => handleEditClick()} disabled={showEdit}>
          edit
        </Button>
        <Button onClick={() => handleCompleteClick()}>{todo.complete ? <CheckBoxIcon /> : <CropSquareIcon />}</Button>
        {todo.complete ? (
          <Button onClick={() => handleTodoArchive(todo.id)}>archive</Button>
        ) : (
          <Button onClick={() => handleTodoDelete(todo.id)}>delete</Button>
        )}
      </ButtonGroup>
    </Box>
  )
}

export default Todo
