import React, { useState } from 'react'
import './style.css'
import {TfiMenu} from 'react-icons/tfi'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div>
        <TfiMenu onClick={handleOpen}/>
      </div>
      {
        isOpen &&
        <nav>
        <ul>
            <li>ehge</li>
            <li>ehger</li>
        </ul>
      </nav>
      }
    </div>
  );
}

export default NavBar