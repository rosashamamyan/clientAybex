import React, { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './styles.css'
import { useNavigate } from 'react-router-dom';

const StrategyTypesDropDown = ({strategyTypesData}) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const viewStrategy = (id) => {
    setAnchorEl(null);
    navigate(`addEditStrategy/${id}`)
  }

  return (
    <div>
      <button
        className="purple-button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        + new strategy
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {
          strategyTypesData.map((elm) => {
            const {id, name} = elm
            return <MenuItem key={id} onClick={() => viewStrategy('-')}>{name}</MenuItem>
          })
        }
      </Menu>
    </div>
  );
}

export default StrategyTypesDropDown