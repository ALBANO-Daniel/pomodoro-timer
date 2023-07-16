import { CssBaseline, ThemeProvider } from '@mui/material'
// import PomodoroProvider from './components/PomodoroProvider'
import Topbar from './components/Topbar'
import { ColorModeContext, useMode } from './theme'
import { useState } from 'react'
// import Route from './components/Route'
// import Home from './pages/Home'
import FeaturesMenu from './components/FeatureSwitchMenu'
import PomodoroPage from './pages/PomodoroPage'
import ProfilePage from './pages/ProfilePage'
import TodoPage from './pages/TodoPage'
// import PomodoroPage from './pages/PomodoroPage'
// import TodosPage from './pages/TodosPage'

function App() {
  const [muted, setMuted] = useState(false)
  const [visibleFeature, setVisibleFeature] = useState('timer')

  const [theme, colorMode] = useMode()

  const handleMuted = () => {
    setMuted((prev) => (prev === false ? true : false))
  }

  const handleVisibleFeature = (feature) => {
    setVisibleFeature(feature)
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar muted={muted} handleMuted={handleMuted} />
          <main className="content">
            <FeaturesMenu handleVisibleFeature={handleVisibleFeature} />

            {visibleFeature === 'timer' ? <PomodoroPage visible={true} muted={muted} /> : <PomodoroPage muted={muted} visible={false} />}
            {visibleFeature === 'todo' ? <TodoPage visible={true} /> : <TodoPage visible={false} />}
            {visibleFeature === 'profile' ? <ProfilePage visible={true} /> : <ProfilePage visible={false} />}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
