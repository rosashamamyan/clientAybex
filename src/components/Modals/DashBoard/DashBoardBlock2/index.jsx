import React from 'react'
import './style.css'

const DashBoardBlock2 = ({Icon, title, mode, navigateTo, path}) => {
  return (
    <div className={`dashboard-block2 ${mode}`}>
      <div className="dashboard2-header">
        <div>
          {Icon}
          <small>{title}</small>
        </div>
        <div className='dashboard-line2'></div>
      </div>
      <div className='dashboard2-button'>
        <button onClick={() => navigateTo(path)}>view all</button>
      </div>
    </div>
  );
}

export default DashBoardBlock2