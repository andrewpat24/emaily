import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome <code>to</code> Emaily.
          </p>
          <a
            className="App-link"
            href="/auth/google"
            rel="noopener noreferrer"
          >
            Login with Google
          </a>
          
        </header>
      </div>
    );
  }
}

export default App;
