/* eslint-disable react/jsx-no-comment-textnodes */
// ** MUI Imports
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import View from "mdi-material-ui/Eye";
import Edit from "mdi-material-ui/LeadPencil";
import Delete from "mdi-material-ui/Delete";
import Add from "mdi-material-ui/BriefcasePlus";
import AddTaskIcon from "mdi-material-ui/AccountPlus";
import AccountCheck from "mdi-material-ui/AccountCheck";
import Printer from "mdi-material-ui/Printer";
import Router, { useRouter } from "next/router";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border
  "&:last-of-type td, &:last-of-type th": {
    border: 0,
  },
}));

const TableCustomized = ({ TableHeader, rows, actions }) => {
  const router = useRouter();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {Object.values(TableHeader).map(
              (
                item // Dynamic Table Header
              ) => (
                <StyledTableCell key={item} align="right">
                  {item}
                </StyledTableCell>
              )
            )}
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <StyledTableRow key={row.name}>
                {Object.keys(TableHeader).map(
                  (
                    item // Displaying Table Data dynamically w.r.t Table Header
                  ) => (
                    <StyledTableCell align="right" key={item}>
                      {row[item] && row[item]}{" "}
                    </StyledTableCell>
                  )
                )}
                <StyledTableCell align="right">
                  {actions.view && (
                    <Tooltip title="View">
                      <View
                        onClick={actions.onViewButtonClick}
                        sx={{ marginRight: "15px", cursor: "pointer" }}
                      />
                    </Tooltip>
                  )}
                  {actions.edit && (
                    <Tooltip title="Edit">
                      <Edit
                        onClick={actions.onEditButtonClick}
                        sx={{ marginRight: "15px", cursor: "pointer" }}
                      />
                    </Tooltip>
                  )}
                  {actions.delete && (
                    <Tooltip title="Delete">
                      <Delete
                        onClick={actions.onDeleteButtonClick}
                        sx={{ marginRight: "15px", cursor: "pointer" }}
                      />
                    </Tooltip>
                  )}
                  {actions.add && !row.active && (
                    <Tooltip title="Add Participant">
                      <AddTaskIcon
                        style={{ color: "#007bff" }}
                        onClick={() =>
                          actions.onAddButtonClick(row.id, row.active)
                        }
                        sx={{ marginRight: "15px", cursor: "pointer" }}
                      />
                    </Tooltip>
                  )}
                  {actions.add && row.active && (
                    <Tooltip title="Remove Participant">
                      <AccountCheck
                        style={{ color: "green" }}
                        onClick={() =>
                          actions.onAddButtonClick(row.id, row.active)
                        }
                        sx={{ marginRight: "15px", cursor: "pointer" }}
                      />
                    </Tooltip>
                  )}
                  {actions.print && (
                    <Tooltip title="Print">
                      <Printer
                        onClick={() => actions.onPrintButtonClick(row.id)}
                        sx={{ marginRight: "15px", cursor: "pointer" }}
                      />
                    </Tooltip>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCustomized;
