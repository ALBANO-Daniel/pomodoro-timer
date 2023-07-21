import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
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

  const todoContent = (
    <React.Fragment>
      <Button onClick={() => handleCompleteClick()}>
        {todo.complete ? (
          <CheckBoxIcon fontSize="small" color="success" />
        ) : (
          <CropSquareIcon fontSize="small" color="success" />
        )}
      </Button>
      <Typography
        sx={{
          fontSize: ['15px', '15px', '19px'],
          lineBreak: 'normal',
          overflowWrap: 'normal',
          letterSpacing: 0,
          textAlign: 'center',
          padding: 2,
          paddingLeft: 0,
        }}
      >
        {todo.text}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], margin: 0 }}>
        <Button
          variant="outlined"
          color="success"
          sx={{
            width: ['60px', '60px', '60.5px'],
            height: '100%',
            borderRadius: 0,
            marginLeft: 0,
            borderTop: 0,
            borderRight: 0,
            borderTopRightRadius: [13,13,0],
          }}
          onClick={() => handleEditClick()}
          disabled={showEdit}
        >
          edit
        </Button>
        {todo.complete ? (
          <Button
            sx={{
              width: ['60px', '58px', '60.5px'],
              height: '100%',
              borderRadius: 0,
              borderBottom: 0,
              borderRight: 0,
              borderBottomRightRadius: 13,
              borderTopRightRadius: [0,0,13],
            }}
            variant="contained"
            color="success"
            onClick={() => handleTodoArchive(todo.id)}
          >
            archive
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="success"
            sx={{ width: ['60px', '61px', '60.5px'], height: '100%', borderRadius: 0, borderBottom: 0, borderRight: 0, borderBottomRightRadius: 13, borderTopRightRadius: [0,0,13]  }}
            onClick={() => handleTodoDelete(todo.id)}
          >
            delete
          </Button>
        )}
      </Box>
    </React.Fragment>
  )

  return (
    <Box>
      <Paper
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'space-between',
          gap: 0,
          marginBottom: 2,

          elevation: 0,
          minHeight: '50px',
          height: 'auto',
          width: 'auto',
          border: 2,
          borderRadius: '15px',
          borderColor: 'success.light',
          backgroundColor: 'transparent',
        }}
      >
        {showEdit ? <TodoEditForm todo={todo} handleEditForm={handleEditForm} /> : todoContent}
      </Paper>
    </Box>
  )
}

export default Todo
