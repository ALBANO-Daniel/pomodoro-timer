import { useContext } from 'react'
import NavigationContext from '../context/navigation'

function Route({ path, children }) {
  const { currentPath } = useContext(NavigationContext)

  // WIP url query
  const pathArray = path.split('?')
  const pathNoQuery = pathArray[0]
  const currentPathArray = currentPath.split('?')
  const currentPathNoQuery = currentPathArray[0]

  if (pathNoQuery === currentPathNoQuery) {
    return children
  }

  return null
}

export default Route
