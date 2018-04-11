import React from 'react'
import './form.css'

function Form() {
  console.log('form');
  return (
    <form>
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
  );
}

export default Form