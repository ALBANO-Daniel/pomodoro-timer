import { CssBaseline, ThemeProvider } from '@mui/material'
// import PomodoroProvider from './components/PomodoroProvider'
import Topbar from './components/Topbar'
import { ColorModeContext, useMode } from './theme'
import { useState } from 'react'
import Route from './components/Route'
// import Home from './pages/Home'
import PomodoroPage from './pages/PomodoroPage'
// import TodosPage from './pages/TodosPage'

function App() {
  const [muted, setMuted] = useState(false)
  const [theme, colorMode] = useMode()

  const handleMuted = () => {
    setMuted((prev) => (prev === false ? true : false))
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar muted={muted} handleMuted={handleMuted} />
          <main className="content">
            <Route path="/">
              <PomodoroPage muted={muted} />
              {/* <Home /> */}
            </Route>
            {/* <Route path="/pomodoro"> */}
            {/* </Route> */}
            {/* <Route path="/todos"> */}
            {/* <TodosPage /> */}
            {/* </Route> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
