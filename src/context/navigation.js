import { createContext, useEffect, useState } from 'react'

const NavigationContext = createContext()

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
  const [params, setParams] = useState(null) // WIP url query
  

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handler)

    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    
    setCurrentPath(to)
  }

  // WIP url query
  const handleParameters = (query) => {
    setParams(query)
  }

  // WIP url query
  const getParameter = (param) => {
    if (params === null) {
      return
    }
    var url = new URL(window.location.href + '?' + params)
    var paramValue = url.searchParams.get(param)
    return paramValue
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate, getParameter, handleParameters }}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider }
export default NavigationContext
