import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const DataTable = ({ usersData }) => {
  const columns = [
    { field: "account_status", headerName: "Status", width: 140 },
    { field: "firstName", headerName: "First Name", width: 200 },
    { field: "lastName", headerName: "Last Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone Number", width: 200 },
    {
      field: "address",
      headerName: "Address",
      valueGetter: (params) => params.row.address?.address,
      width: 200,
    },
    { field: "", headerName: "", width: 50 },
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
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      )}
    </>
  );
};

export default DataTable;
