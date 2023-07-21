import React from 'react'

//methods
export const ApiControlContext = React.createContext()
export const useProfileControl = () => React.useContext(ApiControlContext)

export const TodosArchivedContext = React.createContext()
export const useTodosArchivedContext = () => React.useContext(TodosArchivedContext)
