import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { reactivateUserAccount } from "../../features/users/userSlice";
import "./style.css";

const DataTable = ({ usersData }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const [userId, setUserId] = useState(null)
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const viewProfile = (id) => {
    setAnchorEl(null);
    navigate(`viewProfile/${id}/contactInfo`);
  };

  const reactivateAccount = (status) => {
    dispatch(
      reactivateUserAccount({
        userId,
        status,
      })
    );
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  
  
  const options = [
    {id: 1, title: 'View Profile', action: () => {viewProfile(userId)}},
    {id: 2, title: 'Reactivate account', action: () => {viewProfile(userId)}},
    {id: 3, title: 'Clear Notifications'}
  ];
  const columns = [
    {
      field: "activated",
      headerName: "Status",
      valueGetter: (params) =>
        params.row.userActive?.activated ? "active" : "inactive",
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
    {
      field: "",
      headerName: "",
      width: 70,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} onClick={option.action}>
                {option.title}
              </MenuItem>
            ))}
          </Menu>
        </>
      ),
    },
  ];

  return (
    <div>
      {usersData && (
        <DataGrid
          className="dataTable"
          rows={usersData}
          columns={columns}
          getRowId={() => uuidv4()}
          onRowClick = {(rowData) => {
            setUserId(rowData.row.id)
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

export default DataTable;