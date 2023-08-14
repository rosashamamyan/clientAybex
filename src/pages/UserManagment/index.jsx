import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddUser from '../../components/Modals/AddUser'
import './style.css'

const UserManagment = () => {
  const dispatch = useDispatch()
  const usersData = useSelector(state => state.users)
  console.log(usersData);
  const [isOpen, setIsOpen] = useState(false)

  const toggleForm = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='userManagment'>
      <button onClick={toggleForm}>add user</button>
      {
        isOpen && <AddUser toggleForm={toggleForm}/>
      }
    </div>
  )
}

export default UserManagment