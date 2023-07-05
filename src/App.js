import { CssBaseline, ThemeProvider } from '@mui/material'
import PomodoroProvider from './components/PomodoroProvider'
import Topbar from './components/Topbar'
import { ColorModeContext, useMode } from './theme'
import { useState } from 'react'

function App() {
  const [muted, setMuted] = useState(false)
  const [theme, colorMode] = useMode()

  const handleMuted = () => {
    setMuted( prev => (prev === false ? true : false ))
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar muted={muted} handleMuted={handleMuted}/>
          <main className="content">
            <PomodoroProvider muted={muted}/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
