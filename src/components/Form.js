import React from 'react'
import './form.css'



function Form(props) {

  console.log (props);
  return (
    <div>
      <h1>{props.name}</h1>
    <form onSubmit={(event) => {
      event.preventDefault()
      console.log('clicked')
      let contact = event.target.contactName.value

      console.log(contact);
      }
    }>
      <label htmlFor="contactName">Contact Name</label>
      <input type="text" name="contactName" />
      <label htmlFor="streetAddress">Street Address</label>
      <input type="text" name="streetAddress" />
      <label htmlFor="city">City</label>
      <input type="text" name="city" />
      <label htmlFor="state">State</label>
      <input type="text" name="state" />
      <button>Add Contact</button>
    </form>  
    </div>
  );
}

export default Form