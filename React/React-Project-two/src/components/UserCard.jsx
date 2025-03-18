import React from 'react'
import Prince from '../assets/Prince.jpg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container'style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id="user-img" src={props.image} alt="prince"></img>
        <p>{props.desc}</p>
    </div>
  )
}

export default UserCard // export karunga tabhi import kar paunga