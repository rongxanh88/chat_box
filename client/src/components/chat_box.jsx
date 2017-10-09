import React, { Component } from 'react'

import Message from './message'

class ChatBox extends Component {
  constructor(props) {
    super(props)

    this.submitMessage = this.submitMessage.bind(this)
    this.setChatHistory = this.setChatHistory.bind(this)
    this.socketSend = this.socketSend.bind(this)

    this.state = {
      chatHistory: []
    }

    const socket = this.props.socket
    socket.on('message', message => this.setChatHistory(message))
  }

  submitMessage(e) {
    e.preventDefault()
    const text = e.target.children[0].value

    this.setChatHistory(text)
    this.socketSend(text)
    e.target.children[0].value = ""
  }

  setChatHistory(text) {
    let current_history = this.state.chatHistory.slice()
    current_history.push(text)
    this.setState({ chatHistory: current_history })
  }

  socketSend(text) {
    const socket = this.props.socket
    socket.emit('newMessage', text)
  }

  render() {
    return (
      <div className="chatroom">
        <ul className="chats">
          {this.state.chatHistory.map (message => <Message content={message}/>)}
        </ul>
        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
            <input className="input_text" type="text"/>
            <input className="input_submit" type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default ChatBox;