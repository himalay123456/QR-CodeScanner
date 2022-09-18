// ** MUI Imports
import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { Typography, Button } from '@mui/material'
import Router, { useRouter } from 'next/router'

// ** Demo Components Imports
import TableCustomized from 'src/views/tables/TableCollapsible'
import ConfirmationModal from 'src/views/modals/ConfirmationModal'

const CaseTable = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const createData = (name, description, createdAt, createdBy) => {
    return { name, description, createdAt, createdBy }
  }

  const createProcessData = (date, serveDate, process, comments, observations, status) => {
    return { date, serveDate, process, comments, observations, status }
  }

  const createProceedingData = (date, endorsement, adjournement, comments, observations, status) => {
    return { date, endorsement, adjournement, comments, observations, status }
  }

  const rows = [
    createData('Case1', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case2', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case3', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case4', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case5', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case1', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case2', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case3', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case4', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case5', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case1', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case2', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case3', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case4', 'This is a short description of this case.', '01-05-1990', 'Admin3'),
    createData('Case5', 'This is a short description of this case.', '01-05-1990', 'Admin3')
  ]

  const processRows = [
    createProcessData('01-05-1990', '02-04-2022', 'Doc.pdf', 'Hii this is a comment', 'Looks Good', 'active'),
    createProcessData('01-05-1990', '02-04-2022', 'Doc.pdf', 'Hii this is a comment', 'Looks Good', 'active'),
    createProcessData('01-05-1990', '02-04-2022', 'Doc.pdf', 'Hii this is a comment', 'Looks Good', 'active'),
    createProcessData('01-05-1990', '02-04-2022', 'Doc.pdf', 'Hii this is a comment', 'Looks Good', 'active'),
    createProcessData('01-05-1990', '02-04-2022', 'Doc.pdf', 'Hii this is a comment', 'Looks Good', 'active'),
  ]

  const proceedingRows = [
    createProceedingData('01-05-1990', 'Lorem Ipsum', '02-04-2022', 'Hii this is a comment', 'Looks Good', 'active'),
    createProceedingData('01-05-1990', 'Lorem Ipsum', '02-04-2022', 'Hii this is a comment', 'Looks Good', 'active'),
    createProceedingData('01-05-1990', 'Lorem Ipsum', '02-04-2022', 'Hii this is a comment', 'Looks Good', 'active'),
    createProceedingData('01-05-1990', 'Lorem Ipsum', '02-04-2022', 'Hii this is a comment', 'Looks Good', 'active'),
    createProceedingData('01-05-1990', 'Lorem Ipsum', '02-04-2022', 'Hii this is a comment', 'Looks Good', 'active'),
  ]

  const TableHeader = {
    name: 'Case Name',
    description: 'Description',
    createdAt: 'Created At',
    createdBy: 'Created By'
  }

  const ProcessHeader = {
    date: 'Date Filed',
    serveDate: 'Date Served',
    process: 'Process (pdf, doc)',
    comments: 'Comments',
    observations: 'Client Observations',
    status: 'Status'
  }

  const ProceedingHeader = {
    date: 'Date',
    endorsement: 'Endorsement',
    adjournement: 'Adjournement',
    comments: 'Comments',
    observations: 'Client Observations',
    status: 'Status'
  }

  const onViewButtonClick = () => {
    router.push('/case-details')
  }

  const onEditButtonClick = () => {
    Router.push({ pathname: '/case', query: { type: 'edit' } })
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
    onAddButtonClick
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h5'>Case Management</Typography>
        <Button variant='contained' onClick={() => Router.push({ pathname: '/case', query: { type: 'add' } })}>
          Add Case
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableCustomized
            TableHeader={TableHeader}
            ProcessHeader={ProcessHeader}
            ProceedingHeader={ProceedingHeader}
            rows={rows}
            processRows={processRows}
            proceedingRows={proceedingRows}
            actions={actions}
          />
        </Card>
      </Grid>
      <ConfirmationModal
        title='Delete Confirmation'
        subtitle=' Deleting the case will permanently delete it from the database. Are you sure you want to delete this case?'
        handleClose={handleClose}
        open={open}
      />
    </Grid>
  )
}

export default CaseTable
