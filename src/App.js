import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react'
import ApiProvider from './api/ApiProvider'
import FeaturesMenu from './components/FeatureSwitchMenu'
import Topbar from './components/Topbar'
import PomodoroPage from './pages/PomodoroPage'
import ProfilePage from './pages/ProfilePage'
import TodoPage from './pages/TodoPage'
import { ColorModeContext, useMode } from './theme'
import Footer from './components/Footer'

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
            <Container component="main" className="content" sx={{ minHeight: 'calc(100vh - 200px)', paddingTop: 3 }} maxWidth="sm">
              <FeaturesMenu handleVisibleFeature={handleVisibleFeature} />

              {visibleFeature === 'timer' ? <PomodoroPage visible={true} /> : <PomodoroPage visible={false} />}
              {visibleFeature === 'todo' ? <TodoPage visible={true} /> : <TodoPage visible={false} />}
              {visibleFeature === 'profile' ? <ProfilePage visible={true} /> : <ProfilePage visible={false} />}
            </Container>
            <Footer />
          </div>
        </ApiProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
