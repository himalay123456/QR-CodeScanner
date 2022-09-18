import React from "react";
import AdminComponent from "src/views/admin-management/admin-table";
import axiosMain from "src/https/axiosMain";

const AdminManagement = ({ data }) => {
  return <AdminComponent data={data} />;
};

export async function getServerSideProps() {
  const res = await axiosMain.get("/admin/getAllUsers");
  const data = await res.data;

  // Pass data to the page via props
  return { props: { data } };
}
export default AdminManagement;
