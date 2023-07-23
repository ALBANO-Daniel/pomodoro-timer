import { Box, Button, ButtonGroup } from '@mui/material'
import { useState } from 'react'
import FeatureSwitchMenuModal from './FeatureSwitchMenuModal'

function FeatureSwitchMenu({ handleVisibleFeature }) {
  const [choosedFeature, setChoosedFeature] = useState('timer')
  const [openModal, setOpenModal] = useState(false)

  const handleClick = (feature) => {
    setChoosedFeature(feature)
    handleVisibleFeature(feature)
  }

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  return (
    <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
      <FeatureSwitchMenuModal openModal={openModal} handleClose={handleClose} handleOpen={handleOpen} />

      <ButtonGroup variant="contained" color="success" aria-label="outlined primary button group">
        <Button onClick={() => handleClick('timer')} disabled={choosedFeature === 'timer'}>
          Pomodoro Timer
        </Button>
        <Button onClick={() => handleClick('todo')} disabled={choosedFeature === 'todo'}>
          To-do List
        </Button>
        {/* profile will have all history, like number of pomodoros/day, statistics in minutes */}
        {/*list of finished todos/date and 1 currency by finished todo */}
        {/* currency to buy themes and sounds  */}

        {/* <Button onClick={ () => handleClick('profile')} disabled={choosedFeature === 'profile'}> */}
        <Button
          onClick={() => {
            setOpenModal(true)
          }}
        >
          Profile Stats
        </Button>
      </ButtonGroup>
    </Box>
  )
}

export default FeatureSwitchMenu
