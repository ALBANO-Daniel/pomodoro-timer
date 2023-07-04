import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { RestoreOutlined } from '@mui/icons-material'
import { useState } from 'react'

function Footer() {
  const [value, setValue] = useState('')

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction label="Form" icon={<RestoreOutlined />} />
      <BottomNavigationAction label="Timer" icon={<RestoreOutlined />} />
      <BottomNavigationAction label="Git Repository" icon={<RestoreOutlined />} />
    </BottomNavigation>
  )
}

export default Footer

