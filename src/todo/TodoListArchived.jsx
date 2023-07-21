import { Box, Paper } from '@mui/material'

function TodoListArchived({ archivedTodos }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 3 }}>
      {archivedTodos.map((todo) => {
        return (
          <Paper
            key={todo.id}
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: 0,
              marginBottom: 2,
              padding: 1,
              elevation: 0,
              minHeight: '50px',
              height: 'auto',
              width: '50%',
              border: 2,
              borderRadius: '15px',
              borderColor: 'success.light',
              backgroundColor: 'transparent',
            }}
          >
            {todo.text}
          </Paper>
        )
      })}
    </Box>
  )
}

export default TodoListArchived
