import React from 'react'
import './addressList.css'

function AddressList(props) {
  // console.log(props);
  const contacts = props.items.map((contact, index) => (
    <li key={index}>
      {contact}
    </li>
    )
  )

  return (
    <div>
      <h1>{props.name}</h1>
    <ul>
      {contacts}
    </ul>
    </div>
  )
}

export default AddressList