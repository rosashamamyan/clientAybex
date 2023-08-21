import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const DataTable = ({ usersData }) => {
  const columns = [
    {
      field: "activated",
      headerName: "Status",
      valueGetter: (params) =>
        params.row.userActive?.activated ? "active" : "deactive",
      width: 140,
    },
    { field: "firstName", headerName: "First Name", width: 250 },
    { field: "lastName", headerName: "Last Name", width: 250 },
    { field: "email", headerName: "Email", width: 230 },
    { field: "phone", headerName: "Phone Number", width: 200 },
    {
      field: "address",
      headerName: "Address",
      valueGetter: (params) => params.row.address?.address,
      width: 200,
    },
    { field: "", headerName: "", width: 70 },
  ];

  return (
    <>
      {usersData && (
        <DataGrid
          className="dataTable"
          rows={usersData}
          columns={columns}
          getRowId={() => uuidv4()}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
        />
      )}
    </>
  );
};

export default DataTable;