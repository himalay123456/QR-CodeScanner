// ** MUI Imports
import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { Typography, Button } from '@mui/material'
import Router, { useRouter } from 'next/router'

// ** Demo Components Imports
import TableCustomized from 'src/views/tables/TableCustomized'
import ConfirmationModal from 'src/views/modals/ConfirmationModal'
import SwitchComponent from '../switch'

const ClientTable = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const createData = (status, name, email, phone, dob, createdAt, createdBy) => {
    return { status, name, email, phone, dob, createdAt, createdBy }
  }

  const rows = [
    createData(<SwitchComponent />, 'Client1', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client2', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client3', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client4', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client5', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client1', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client2', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client3', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client4', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client5', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client1', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client2', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client3', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client4', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3'),
    createData(<SwitchComponent />, 'Client5', 'client@client.com', 8789202542, '12-01-2023', '01-05-1990', 'Admin3')
  ]

  const TableHeader = {
    status: 'Status',
    name: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    dob: 'DOB',
    createdAt: 'Created At',
    createdBy: 'Created By'
  }

  const onViewButtonClick = () => {
    router.push('/client-details')
  }

  const onEditButtonClick = () => {
    Router.push({ pathname: '/client', query: { type: 'edit' } })
  }

  const onDeleteButtonClick = () => {
    handleClickOpen()
  }

  const onAddButtonClick = () => {
    // handleClickOpen()
  }

  const actions = {
    view: true,
    edit: true,
    delete: true,
    add: true,
    onViewButtonClick,
    onEditButtonClick,
    onDeleteButtonClick,
    onAddButtonClick,
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h5'>Client Management</Typography>
        <Button variant='contained' onClick={() => Router.push({ pathname: '/client', query: { type: 'add' } })}>
          Add Client
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableCustomized TableHeader={TableHeader} rows={rows} actions={actions} />
        </Card>
      </Grid>
      <ConfirmationModal
        title='Delete Confirmation'
        subtitle=' Deleting the client will permanently delete it from the database. Are you sure you want to delete this client?'
        handleClose={handleClose}
        open={open}
      />
    </Grid>
  )
}

export default ClientTable
