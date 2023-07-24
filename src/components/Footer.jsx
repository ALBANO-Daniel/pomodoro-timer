import { Box, Container, Link } from '@mui/material'

function Footer() {
  const year = new Date().getFullYear()

  // WIP PROD
  return (
    <Container
      sx={{
        height: '70px',
        marginTop: '30px',
        padding: 2,
        backgroundColor: 'transparent',
        borderTop: 4,
        borderColor: 'success.dark',
      }}
    >
      <Box
        component="footer"
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          mt: 'auto',
        }}
      >
        <Box>© {year} Tupanetwork All rights reserved.</Box>
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            fontSize: '19px',
          }}
        >
          <Link color="success.dark"  href="https://github.com/ALBANO-Daniel/pomodoro-timer" underline="hover" target='_blank' rel="noopener" >
            Git Repository
          </Link>
          <Link color="success.dark" href="https://www.linkedin.com/in/daniel-albano-9b3134247"  underline="hover" target='_blank' rel="noopener" >
            LinkedIn
          </Link>
          <Link color="success.dark" href="mailto:deanidev@gmail.com"  underline="hover" target='_blank' rel="noopener" >
            Contact Us
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer

