import React, { Component } from 'react';
import Form from './components/Form'
import AddressList from './components/AddressList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: []
    }
  }

  addContact(text) {
    this.setState({
      contacts: [...this.state.contacts, text]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Address Book</h1>
        </header>
        <Form name="Add New Contact" add={(contact) => this.addContact(contact)} />
        <AddressList name="My Contacts" />
      </div>
    );
  }
}

export default App;
