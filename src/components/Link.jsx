import { useContext } from 'react'
import NavigationContext from '../context/navigation'

// WIP url query
function extractParams(url) {
  //still need to handle Fragments... #id at the end
  const array = url.split('?')
  const destination = array[0]
  const query = array[1]

  return (
    {
      destination,
      query,
    }
  )
}

export default function Link({ to, children }) {
  const { navigate, handleParameters } = useContext(NavigationContext)

  // WIP url query
  const { destination, query } = extractParams(to) 
  
  const handleClick = (event) => {
    event.preventDefault()
    // WIP url query
    handleParameters(query)
    navigate(destination)
  }
    
  return (
    <a onClick={handleClick}>
      {children}
    </a>
  )
}
