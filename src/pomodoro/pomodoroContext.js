import React from 'react'

export const ShouldShowTimerContext = React.createContext()
export const useShouldShowTimer = () => React.useContext(ShouldShowTimerContext)

export const IsStageFinishedContext = React.createContext()
export const useIsStageFinished = () => React.useContext(IsStageFinishedContext)

export const AreAllStagesFinishedContext = React.createContext()
export const useAreAllStagesFinished = () => React.useContext(AreAllStagesFinishedContext)

export const StageCurrentIndexContext = React.createContext()
export const useStageCurrentIndex = () => React.useContext(StageCurrentIndexContext)

//methods
export const PomodoroControlContext = React.createContext()
export const usePomodoroControl = () => React.useContext(PomodoroControlContext)
