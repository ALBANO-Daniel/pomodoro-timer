import PomodoroProvider from '../components/PomodoroProvider'

function getURLValue(value) {
  var url = new URL(window.location.href)
  var URLValue = url.searchParams.get(value)

  return URLValue
}

function PomodoroPage({ muted }) {
  const id = getURLValue('id') 
  const color = getURLValue('color')
  console.log(id + ' ' + color)

  return <PomodoroProvider muted={muted} />
}

export default PomodoroPage
