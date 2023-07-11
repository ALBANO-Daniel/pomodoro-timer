import Link from './components/Link'
import Route from './components/Route'

function routing() {
  return (
    <div>
      <Link to="/todos">Go to Todos</Link>
      <Link to="/pomodoro">Go to Pomodoro</Link>
      <div>
        <Route path="/pomodoro">
          <PomodoroPage />
        </Route>
        <Route path="/todos">
          <TodosPage />
        </Route>
      </div>
    </div>
  )
}

export default routing
