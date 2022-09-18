import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'

const ConfirmationModal = ({ open, handleClose, title, subtitle }) => {
  const theme = useTheme()
  const router = useRouter()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title' sx={{ textAlign: 'center' }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ textAlign: 'center' }}>{subtitle}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
          <Button
            size='large'
            type='submit'
            sx={{ ml: 2 }}
            onClick={() => router.push('/admin-management')}
            variant='contained'
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ConfirmationModal
