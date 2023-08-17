import React, { useEffect } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../features/users/userSlice';

const DataTable = ({usersData}) => {
  const columns = [
    { field: "account_status", headerName: "Status", width: 100 },
    { field: "firstName", headerName: "First Name", width: 200 },
    { field: "lastName", headerName: "Last Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone Number", width: 200 },
    { field: "address", headerName: "Address", width: 200 },
    { field: "", headerName: "", width: 50 },
  ];

  return (
    <>
      {usersData && (
        <DataGrid
          rows={usersData}
          columns={columns}
          getRowId={(row) => uuidv4()}
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
}

export default DataTable