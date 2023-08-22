import React from 'react'
import {CgFileDocument} from 'react-icons/cg'
import './style.css'

const InvestorEntities = () => {
  return (
    <div className='investorEnt'>
      <div className="investorEnt-item">
        <div>
          <CgFileDocument />
        </div>
        <small>No Record Found</small>
      </div>
    </div>
  );
}

export default InvestorEntities