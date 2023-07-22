import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './components/Topbar'
import { ColorModeContext, useMode } from './theme'
// import { StatisticsContext } from './context/Statistics'
import { useState } from 'react'
import FeaturesMenu from './components/FeatureSwitchMenu'
import PomodoroPage from './pages/PomodoroPage'
import ProfilePage from './pages/ProfilePage'
import ApiProvider from './api/ApiProvider'
import TodoPage from './pages/TodoPage'

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
      {/* <StatisticsContext.Provider value={statisticsObject}> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApiProvider>
          <div className="app">
            <Topbar muted={muted} handleMuted={handleMuted} />
            <main className="content">
              <FeaturesMenu handleVisibleFeature={handleVisibleFeature} />

              {visibleFeature === 'timer' ? (
                <PomodoroPage visible={true} muted={muted} />
              ) : (
                <PomodoroPage muted={muted} visible={false} />
              )}
              {visibleFeature === 'todo' ? <TodoPage visible={true} /> : <TodoPage visible={false} />}
              {visibleFeature === 'profile' ? <ProfilePage visible={true} /> : <ProfilePage visible={false} />}
            </main>
          </div>
        </ApiProvider>
      </ThemeProvider>
      {/* </StatisticsContext.Provider> */}
    </ColorModeContext.Provider>
  )
}

export default App
