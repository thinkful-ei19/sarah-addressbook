import React, { Component } from 'react';
import Form from './components/Form'
import AddressList from './components/AddressList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Addresses</h1>
        </header>
        <Form />
        <AddressList />
      </div>
    );
  }
}

export default App;
