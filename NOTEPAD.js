import Link from './src/components/Link'
import Route from './src/components/Route'

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


// WIP get params function
const searchParams = new URLSearchParams(window.location.href)

// Display the key/value pairs
for (const [key, value] of searchParams.entries()) {
  console.log(`${key}, ${value}`)
}




// params ? (window.location.pathname = `${window.location.pathname}?${params}`) : null


