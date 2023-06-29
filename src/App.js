import { CssBaseline, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import React from 'react'
import Topbar from './components/Topbar'
import Pomodoro from './components/Pomodoro'
import PomodoroProvider from './components/PomodoroProvider'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar />
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <PomodoroProvider>
                    <Pomodoro />
                  </PomodoroProvider>
                }
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
