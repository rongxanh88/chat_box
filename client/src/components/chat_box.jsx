import React, { Component } from 'react'

import Message from './message'

class ChatBox extends Component {
  constructor(props) {
    super(props)

    this.submitMessage = this.submitMessage.bind(this)

    this.state = {
      chatHistory: [
        "Hello! My name is Nate",
        "Yo, what is up!",
        "I am having a great Sunday!"
      ]
    }
  }

  submitMessage(e) {
    e.preventDefault()
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