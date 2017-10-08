import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <li className="message">
        {this.props.content}
      </li>
    )
  }
}

export default Message;