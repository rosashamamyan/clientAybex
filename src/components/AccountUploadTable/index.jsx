import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

const AccountUploadTable = ({ uploadBatchData }) => {
  const [uploadBatchId, setUploadBatchId] = useState(null);

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options)
               .replace(/ /, '-');
  }


  const columns = [
    {
      field: "strategyId", // --------
      headerName: "Strategy",
      width: 140,
    },
    { field: "createdAt", headerName: "Period", valueGetter: (params) => formatDate(params.row.createdAt), width: 250 },
    { field: "total_accounts", headerName: "Total Accouts", width: 250 },
    { field: "new_accounts", headerName: "New Accounts", width: 230 },
    {
      field: "",
      headerName: "",
      renderCell: (params) => (
        <>
          <FaTrash />
        </>
      ),
      width: 200,
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
          onRowClick={(rowData) => {
            setUploadBatchId(rowData.row.id);
          }}
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
