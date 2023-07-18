import { createContext, useState } from 'react'

export const StatisticsContext = createContext(null)

export const StatisticsProvider = () => {
  const [value, setValue] = useState('null')

  const handleChangeValue = (newValue) => {
    setValue(newValue)
  }
  return [value, handleChangeValue]
}

// const statistics = {}
