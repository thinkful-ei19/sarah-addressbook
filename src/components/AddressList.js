import React from 'react'
import './addressList.css'

function AddressList(props) {
  console.log(props);
  const contacts = props.items.map((contact, index) => (
    <li key={index}>
      <strong>{contact.name + ':'}</strong> {contact.street} {contact.city +','} {contact.state}
      <button
       onClick={() => {
         props.delete(index)
          }
        }
       >Delete</button>
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