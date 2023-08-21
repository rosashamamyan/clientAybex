import React from 'react'
import {AiOutlineUserAdd} from "react-icons/ai"
import {RiErrorWarningFill} from "react-icons/ri"
import './style.css'

const DashBoardBlock3 = ({navigateTo, path}) => {
  return (
    <div className="dashboard-block3">
      <div className="dashboard3-header">
        <div>
          <AiOutlineUserAdd />
          <small>Account Managment</small>
        </div>
        <div className="dashboard-line3"></div>
      </div>
      <div className='dashboard3-buttons'>
        <div className='warning-text'>
          <div>
            <RiErrorWarningFill />
            <small>1302 accounts with no user linked</small>
          </div>
          <div>
            <button className='dashboard3-button' onClick={() => navigateTo(path)}>view</button>
          </div>
        </div>
        <div>
          <button className='dashboard3-button' onClick={() => navigateTo(path)}>view all</button>
        </div>
      </div>
    </div>
  );
}

export default DashBoardBlock3