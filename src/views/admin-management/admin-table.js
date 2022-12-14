// ** MUI Imports
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography, Button, Chip } from "@mui/material";
import Router, { useRouter } from "next/router";
import moment from "moment";

// ** Demo Components Imports
import TableCustomized from "src/views/tables/TableCustomized";
import ConfirmationModal from "src/views/modals/ConfirmationModal";
import SwitchComponent from "../switch";
import { toast } from "react-toastify";
import axiosMain from "src/https/axiosMain";

const UserTable = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createData = (
    status,
    name,
    email,
    phone,
    organisation,
    createdAt,
    id,
    active
  ) => {
    return { status, name, email, phone, organisation, createdAt, id, active };
  };

  const generateData = () => {
    return data.user.map((item) =>
      createData(
        item.active ? (
          <Chip label="Participant" color="success" />
        ) : (
          <Chip label="Pending" color="info" />
        ),
        item.name,
        item.email,
        item.phone,
        item.organisation,
        moment(item.createdAt).format("ll"),
        item._id,
        item.active
      )
    );
  };

  const TableHeader = {
    status: "Status",
    name: "Full Name",
    email: "Email",
    phone: "Phone Number",
    organisation: "Organisation",
    createdAt: "Created At",
  };

  const onAddButtonClick = async (id, active) => {
    try {
      let response;
      if (!active) {
        response = await axiosMain.get(`/api/admin/approveUser/?id=${id}`);
        toast.success("Participant added successfully!");
      } else {
        response = await axiosMain.get(`/api/admin/disApproveUser/?id=${id}`);
        toast.success("Participant removed successfully!");
      }
      if (response) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
      toast.error(err.msg);
    }
  };

  const onPrintButtonClick = async (id) => {
    router.push(`/admin/verify-user/${id}`);
  };

  const actions = {
    view: false,
    edit: false,
    delete: false,
    add: true,
    print: true,
    onAddButtonClick,
    onPrintButtonClick,
  };

  return (
    <Grid container spacing={6}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h5">User Management</Typography>
        {/* <Button variant='contained' onClick={() => Router.push({ pathname: '/admin', query: { type: 'add' } })}>
          Add Admin
        </Button> */}
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableCustomized
            TableHeader={TableHeader}
            rows={generateData()}
            actions={actions}
          />
        </Card>
      </Grid>
      <ConfirmationModal
        title="Delete Confirmation"
        subtitle=" Deleting the admin will permanently delete it from the database. Are you sure you want to delete this admin?"
        handleClose={handleClose}
        open={open}
      />
    </Grid>
  );
};

export default UserTable;
