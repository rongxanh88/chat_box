import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ChatBox from './components/chat_box.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-window">
          <header className="App-header">
            <h1 className="App-title">Watercooler</h1>
          </header>
          <ChatBox />
        </section>
      </div>
    );
  }
}

export default App;
