import PomodoroProvider from '../components/PomodoroProvider'

function PomodoroPage({ muted }) {
  return (
    <PomodoroProvider muted={muted} />
  )
}

export default PomodoroPage