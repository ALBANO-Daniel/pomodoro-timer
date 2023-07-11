import Link from '../components/Link'

function Home() {
  return (
    <div>
      <Link to="/todos?id=1&color=red">Go to Todos</Link>
      <Link to="/pomodoro?id=2&color=blue">Go to Pomodoro</Link>
    </div>
  )
}

export default Home
