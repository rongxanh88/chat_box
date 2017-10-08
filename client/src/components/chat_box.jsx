import React, { Component } from 'react'

class ChatBox extends Component {
  constructor(props) {
    super(props)

    this.submitMessage = this.submitMessage.bind(this)
  }

  submitMessage(e) {

  }

  render() {
    return (
      <div className="chatroom">
        <ul className="chats">
          
        </ul>
        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
            <input type="text"/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default ChatBox;