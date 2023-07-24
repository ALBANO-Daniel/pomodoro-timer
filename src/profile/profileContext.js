import React from 'react'


export const ProfileControlContext = React.createContext()
export const useProfileControlContext = () => React.useContext(ProfileControlContext)