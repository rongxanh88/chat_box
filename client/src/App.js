import React, { Component } from 'react';
import './App.css';

import ChatBox from './components/chat_box.jsx';
import InfoBox from './components/info_box.jsx';
import io from 'socket.io-client';

class App extends Component {

  constructor(props) {
    super(props)

    this.componentDidMount = this.componentDidMount.bind(this)
    
    this.state = {
      numUsers: 0,
      socket: io.connect('http://localhost:3001')
    }
  }

  componentDidMount() {
    const socket = this.state.socket

    socket.on('usersConnected', count => {
      this.setState({numUsers: count})
    })
  }

  render() {
    return (
      <div className="App">
        <section className="App-window">
          <header className="App-header">
            <h1 className="App-title">Watercooler</h1>
          </header>
          <ChatBox socket={this.state.socket}/>
        </section>
        <InfoBox numUsers={this.state.numUsers} socket={this.state.socket}/>
      </div>
    );
  }
}

export default App;
