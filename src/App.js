import { CssBaseline, ThemeProvider } from '@mui/material'
// import { Route, Routes } from 'react-router-dom'
// import { Switch, Redirect } from 'react-router'
import PomodoroProvider from './components/PomodoroProvider'
import Topbar from './components/Topbar'
import { ColorModeContext, useMode } from './theme'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar />
          <main className="content">
            <PomodoroProvider />
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
