import React, { Component } from 'react';

class Message extends Component {
  contructor(props) {
    super(props)

    this.state = { content: props.content }
  }

  render() {
    return (
      <li className="message">
        {this.state.content}
      </li>
    )
  }
}

export default Message;