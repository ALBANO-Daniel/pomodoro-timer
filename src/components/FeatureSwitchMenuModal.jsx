import { Box, Modal, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function BasicModal({ handleClose, openModal }) {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
          PROFILE STATS
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
          This Feature is Temporarly disabled due to server issue. Sorry for the incovenience!
        </Typography>
      </Box>
    </Modal>
  )
}
