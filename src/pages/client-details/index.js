// ** React Imports
import React, { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'

// ** Third Party Imports
import { useRouter } from 'next/router'
import ConfirmationModal from 'src/views/modals/ConfirmationModal'

const ClientDetails = () => {
  // ** States
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Card>
      <CardHeader title='Client Details' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid item xs={12} sm={2} sx={{ alignItems: 'center' }}>
            <Typography sx={{ marginBottom: 3 }}>Name : Himalay Shankar</Typography>
            <Typography sx={{ marginBottom: 3 }}>Email : himalayshankar31@gmail.com</Typography>
            <Typography sx={{ marginBottom: 3 }}>Phone : 8789202542</Typography>
            <Typography sx={{ marginBottom: 3 }}>DOB : 15/12/1996</Typography>
            <Typography sx={{ marginBottom: 3 }}>Created At : 01/01/2003</Typography>
            <Typography sx={{ marginBottom: 3 }}>Status : Active</Typography>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => router.push('/client-management')} size='large' color='secondary' variant='outlined'>
              Back
            </Button>
            <Button size='large' type='submit' sx={{ ml: 2 }} onClick={handleClickOpen} variant='contained'>
              Disable Client
            </Button>
          </Grid>
          <ConfirmationModal
            title='Disable Confirmation'
            subtitle='Once the client is disabled they may no longer be able to access the website. Are you sure you want to disable this client?'
            handleClose={handleClose}
            open={open}
          />
        </CardContent>
      </form>
    </Card>
  )
}

export default ClientDetails
