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

  deleteContact(index) {
    this.state.contacts.splice(index,1);
    this.setState({
      contacts: this.state.contacts
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Address Book</h1>
        </header>
        <Form name="Add New Contact" add={(contact) => this.addContact(contact)} />
        <AddressList name="My Contacts" items={this.state.contacts} delete={index => this.deleteContact(index)} />
      </div>
    );
  }
}

export default App;
