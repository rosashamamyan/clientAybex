import React from 'react'
import {CgFileDocument} from 'react-icons/cg'
import './style.css'

const Documents = () => {
  return (
    <div className='document'>
        <div className='document-item'>
          <div><CgFileDocument /></div>
          <small>No Record Found</small>
        </div>
    </div>
  )
}

export default Documents