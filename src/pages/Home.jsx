import Link from '../components/Link'

function Home() {
  return (
    <div>
      <Link to="/todos">Go to Todos</Link>
      <Link to="/pomodoro">Go to Pomodoro</Link>
    </div>
  )
}

export default Home
