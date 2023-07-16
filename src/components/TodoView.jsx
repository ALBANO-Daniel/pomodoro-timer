import { Box } from '@mui/material'
import { MainAppContainer } from './MainAppContainer'

function TodoView() {
  const handleTodoSubmit = () => {}
  return (
    <MainAppContainer>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', py: 2 }}>
        {/* <Box sx={{ color: 'text.secondary' }}>deani.dev</Box> */}
        <Box sx={{ color: 'text.primary', fontSize: [30, 30, 34], fontWeight: 'medium' }}>Your List of Tasks</Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: [14, 14, 16],
          }}
        >
          create, edit, complete and delete:
        </Box>
        <Box
          sx={{
            p: [0, 2],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <ul>
            <li>todo 1</li>
            <li>todo 1</li>
            <li>todo 1</li>
            <li>todo 1</li>
            <li>todo 1</li>
            <li>todo 1 - edit(pencil) - complete(sign) - delete(x) </li>
            <li>todo 1</li>
            <li>todo 1</li>
          </ul>

          <form method="post" onSubmit={handleTodoSubmit}>
            <label name='todo'>new todo: </label>
            <input name='todo' type='text'/>
            <button>submit</button>
          </form>
        </Box>
      </Box>
    </MainAppContainer>
  )
}

export default TodoView
