import React from 'react'
import './style.css'

const DashboardBlock1 = ({Icon, title, buttonText1, buttonText2, mode, navigateTo, path}) => {
  return (
    <div className={`dashboard-block ${mode}`}>
        <div className='dashboard-header'>
           {Icon} <small>{title}</small>
        </div>
        <div className='dashboard-buttons'>
            <button onClick={() => navigateTo(path)}>{buttonText1}</button>
            <div className='dashboard-line'></div>
            <button onClick={() => navigateTo(path)}>{buttonText2}</button>
        </div>
    </div>
  )
}

export default DashboardBlock1