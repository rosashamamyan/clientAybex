import React from 'react'
import './style.css'

const SaveChanges = ({toggleSaveModal, handleSave}) => {
  return (
    <div className="savechanges">
      <div className='savechanges-container'>
        <div className="question">
          <small>
            Your changes will be descarded if you close this dialog.
          </small>
          <small>Are you sure you want to continue?</small>
        </div>
        <div className="buttons">
          <button className='cancelButton' onClick={() => toggleSaveModal(false)}>cancel</button>
          <button className='okButton' onClick={handleSave}>ok</button>
        </div>
      </div>
    </div>
  );
}

export default SaveChanges