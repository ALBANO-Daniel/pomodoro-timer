import React from 'react'

export const TodosContext = React.createContext()
export const useTodosContext = () => React.useContext(TodosContext)

//methods
export const TodosControlContext = React.createContext()
export const useTodosControlContext = () => React.useContext(TodosControlContext)
