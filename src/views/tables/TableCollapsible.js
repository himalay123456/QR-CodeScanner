// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Tooltip from '@mui/material/Tooltip'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'
import Chip from '@mui/material/Chip'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import View from 'mdi-material-ui/Eye'
import Edit from 'mdi-material-ui/LeadPencil'
import Delete from 'mdi-material-ui/Delete'
import Add from 'mdi-material-ui/AccountPlus'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.light
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const Row = props => {
  // ** Props
  const { TableHeader, ProcessHeader, ProceedingHeader, row, processRows, proceedingRows, actions } = props

  // ** State
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align='left'>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </TableCell>
        {Object.keys(TableHeader).map(
          (
            item // Displaying Table Data dynamically w.r.t Table Header
          ) => (
            <TableCell align='right' key={item}>
              {row[item] && row[item]}
            </TableCell>
          )
        )}
        <TableCell align='right'>
          {actions.view && (
            <Tooltip title='View'>
              <View onClick={actions.onViewButtonClick} sx={{ marginRight: '15px', cursor: 'pointer' }} />
            </Tooltip>
          )}
          {actions.edit && (
            <Tooltip title='Edit'>
              <Edit onClick={actions.onEditButtonClick} sx={{ marginRight: '15px', cursor: 'pointer' }} />
            </Tooltip>
          )}
          {actions.delete && (
            <Tooltip title='Delete'>
              <Delete onClick={actions.onDeleteButtonClick} sx={{ marginRight: '15px', cursor: 'pointer' }} />
            </Tooltip>
          )}
          {actions.add && (
            <Tooltip title='Assign Client'>
              <Add onClick={actions.onAddButtonClick} sx={{ marginRight: '15px', cursor: 'pointer' }} />
            </Tooltip>
          )}
        </TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Court Process
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <StyledTableRow>
                    {Object.values(ProcessHeader).map(
                      (
                        item // Dynamic Table Header
                      ) => (
                        <StyledTableCell key={item} align='right'>
                          {item}
                        </StyledTableCell>
                      )
                    )}
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {processRows.map(processRaw => (
                    <StyledTableRow key={processRaw.date}>
                      {Object.keys(ProcessHeader).map(item => (
                        <TableCell align='right' key={item}>
                          {item === 'status' ? <Chip label={processRaw[item]} color='success' /> : processRaw[item]}
                        </TableCell>
                      ))}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Court Proceedings
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <StyledTableRow>
                    {Object.values(ProceedingHeader).map(
                      (
                        item // Dynamic Table Header
                      ) => (
                        <StyledTableCell key={item} align='right'>
                          {item}
                        </StyledTableCell>
                      )
                    )}
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {proceedingRows.map(proceedingRaw => (
                    <StyledTableRow key={proceedingRaw.date}>
                      {Object.keys(ProceedingHeader).map(item => (
                        <TableCell align='right' key={item}>
                          {item === 'status' ? <Chip label={proceedingRaw[item]} color='info' /> : proceedingRaw[item]}
                        </TableCell>
                      ))}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </StyledTableRow>
    </Fragment>
  )
}

const TableCollapsible = ({
  TableHeader,
  ProcessHeader,
  ProceedingHeader,
  rows,
  processRows,
  proceedingRows,
  actions
}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Case Details</StyledTableCell>
            {Object.values(TableHeader).map(
              (
                item // Dynamic Table Header
              ) => (
                <StyledTableCell key={item} align='right'>
                  {item}
                </StyledTableCell>
              )
            )}
            <StyledTableCell align='right'>Actions</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row
              key={row.name}
              TableHeader={TableHeader}
              ProcessHeader={ProcessHeader}
              ProceedingHeader={ProceedingHeader}
              row={row}
              processRows={processRows}
              proceedingRows={proceedingRows}
              actions={actions}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCollapsible
