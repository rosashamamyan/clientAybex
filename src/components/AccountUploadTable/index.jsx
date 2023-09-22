import React from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import { deleteUploadBatchData } from "../../features/account/accountSlice";
import Swal from "sweetalert2";

const AccountUploadTable = ({ uploadBatchData }) => {
  const dispatch = useDispatch()

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options)
               .replace(/ /, '-');
  }

  const deleteUploadBatch = (uploadBatchId) => {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUploadBatchData(uploadBatchId))
        Swal.fire('Deleted!', '', 'success')
      }
    })
  }

  const columns = [
    {
      field: "strategy",
      headerName: "Strategy",
      valueGetter: (params) => params.row.strategy?.strategy_name,
      width: 200,
    },
    { field: "createdAt", headerName: "Period", valueGetter: (params) => formatDate(params.row.createdAt), width: 200 },
    { field: "total_accounts", headerName: "Total Accouts", width: 200 },
    { field: "new_accounts", headerName: "New Accounts", width: 200 },
    {
      field: "",
      headerName: "",
      renderCell: (params) => (
        <>
          <FaTrash onClick={() => dispatch(() => deleteUploadBatch(params.row.id))} style={{cursor: "pointer"}}/>
        </>
      ),
      width: 100,
    },
  ];

  return (
    <div>
      {uploadBatchData && (
        <DataGrid
          className="uploadBatchTable"
          rows={uploadBatchData}
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
    </div>
  );
};

export default AccountUploadTable;
