import { CssBaseline, ThemeProvider } from '@mui/material'
// import { Route, Routes } from 'react-router-dom'
// import { Switch, Redirect } from 'react-router'
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
            {/* <Routes> */}
            {/* <Route path="/" element={<PomodoroProvider />} /> */}
            {/* <Switch>
                <Route path="/" element={<div>bbb</div>} />
                <Redirect to={'/'} />
              </Switch> */}
            {/* </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
