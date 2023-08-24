import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {AiOutlineDrag} from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";

const StrategyTable = ({strategiesData}) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  // const [userId, setUserId] = useState(null)
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const viewStrategy = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const columns = [
    {
      field: "/",
      headerName: "",
      width: 50,
      renderCell: (params) => <AiOutlineDrag />,
    },
    {
      field: "icon",
      headerName: "Icon",
      width: 200,
    },
    {
      field: "strategy_name",
      headerName: "Strategy Name",
      width: 200,
    },
    {
      field: "name",
      headerName: "Strategy Type",
      valueGetter: (params) => params.row.strategyType?.name,
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      valueGetter: (params) => (params.row.status ? "Active" : "Inactive"),
      width: 200,
    },
    {
      field: "color",
      headerName: "Colors",
      width: 200,
    },
    {
      field: "video",
      headerName: "Video",
      width: 240,
    },
    {
      field: "order",
      headerName: "Sequence",
      width: 120
    },
    {
      field: "",
      headerName: "",
      width: 50,
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
            <MenuItem onClick={viewStrategy}>MenuItem1</MenuItem>
            <MenuItem onClick={viewStrategy}>MenuItem2</MenuItem>
            <MenuItem onClick={viewStrategy}>MenuItem3</MenuItem>
          </Menu>
        </>
      ),
    },
  ];

  return (
    <div>
       {
        strategiesData && (
          <DataGrid
          className="dataTable"
          rows={strategiesData}
          columns={columns}
          getRowId={() => uuidv4()}
          // onRowClick = {(rowData) => {
          //   setUserId(rowData.row.id)
          // }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15]}
        />
        )
       }
    </div>
  )
}

export default StrategyTable