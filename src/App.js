import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './components/Topbar'
import { ColorModeContext, useMode } from './theme'
import { useState } from 'react'
import FeaturesMenu from './components/FeatureSwitchMenu'
import PomodoroPage from './pages/PomodoroPage'
import ProfilePage from './pages/ProfilePage'
import ApiProvider from './api/ApiProvider'
import TodoPage from './pages/TodoPage'

function App() {
  const [visibleFeature, setVisibleFeature] = useState('timer')

  const [theme, colorMode] = useMode()

  const handleVisibleFeature = (feature) => {
    setVisibleFeature(feature)
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApiProvider>
          <div className="app">
            <Topbar />
            <main className="content">
              <FeaturesMenu handleVisibleFeature={handleVisibleFeature} />

              {visibleFeature === 'timer' ? <PomodoroPage visible={true} /> : <PomodoroPage visible={false} />}
              {visibleFeature === 'todo' ? <TodoPage visible={true} /> : <TodoPage visible={false} />}
              {visibleFeature === 'profile' ? <ProfilePage visible={true} /> : <ProfilePage visible={false} />}
            </main>
          </div>
        </ApiProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
