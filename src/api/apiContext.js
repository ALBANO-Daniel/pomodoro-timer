import React from 'react'

export const TodosArchivedContext = React.createContext()
export const useTodosArchivedContext = () => React.useContext(TodosArchivedContext)

export const WorkTimesInMinutesContext = React.createContext()
export const useWorkTimesInMinutesContext = () => React.useContext(WorkTimesInMinutesContext)

export const PauseTimesInMinutesContext = React.createContext()
export const usePauseTimesInMinutesContext = () => React.useContext(PauseTimesInMinutesContext)

export const CompletedWorkTimesContext = React.createContext()
export const useCompletedWorkTimesContext = () => React.useContext(CompletedWorkTimesContext)

export const CompletedPauseTimesContext = React.createContext()
export const useCompletedPauseTimesContext = () => React.useContext(CompletedPauseTimesContext)

export const IncompletedPomodorosContext = React.createContext()
export const useIncompletedPomodorosContext = () => React.useContext(IncompletedPomodorosContext)

export const CompletedPomodorosContext = React.createContext()
export const useCompletedPomodorosContext = () => React.useContext(CompletedPomodorosContext)

//methods
export const ApiControlContext = React.createContext()
export const useApiControlContext = () => React.useContext(ApiControlContext)
