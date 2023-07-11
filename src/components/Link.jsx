import { useContext } from 'react'
import NavigationContext from '../context/navigation'

export default function Link({ to, children }) {
  // WIP -> treating url params
  to = to.split('?')
  const values = to[1]
  to = to[0]

  console.log(to)
  console.log(values)


  const { navigate } = useContext(NavigationContext)

  const handleClick = (event) => {
    event.preventDefault()

    navigate(to)
  }
    
  return (
    <a onClick={handleClick}>
      {children}
    </a>
  )
}
