import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import Jokes from './components/jokes';

class App extends Component {
  render() {
    return (
      <React-Fragment>
      <Title/>
      <main className="container">
      <Jokes/>
      </main>  
      </React-Fragment>
    );
  }
}

export default App;
