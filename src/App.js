import './App.css';

import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div class='flex'>
            <div class='appname'>
              Product App
            </div>
          </div>
          <div class='options'>
            <nav class="navbar navbar-dark bg-dark">
              <br/>
              <a href="HOME" className="btn btn-primary">Home</a><br />
              <a href="product" className="btn btn-primary">PRODUCT APP</a><br />
              

            </nav>
          </div>


        </div>
      </React.Fragment>
    );
  }
}

export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from Expert
        </a>
        <p>How ya Doin?</p>
      </header>
    </div>
  );
}

export default App; */
