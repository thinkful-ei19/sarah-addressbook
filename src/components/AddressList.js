import React from 'react'
import './addressList.css'

function AddressList(props) {
  console.log('list');

  return (
    <div>
      <h1>{props.name}</h1>
    <ul>
      <li>list</li>
    </ul>
    </div>
  )
}

export default AddressList