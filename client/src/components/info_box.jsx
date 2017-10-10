import React, { Component } from 'react'

class InfoBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userTyping: ""
    }

    this.setUserTyping = this.setUserTyping.bind(this)

    const socket = this.props.socket
    socket.on('userTyping', socket_id => {
      this.setUserTyping(socket_id)
    })
  }

  setUserTyping(socket_id) {
    this.setState({ userTyping: `user ${socket_id} is typing...` })
  }

  render() {
    return (
      <div className="info-box">
        <ul>
          Users online: {this.props.numUsers}
        </ul>
        <ul>
          {this.state.userTyping}
        </ul>
      </div>
    )
  }
}

export default InfoBox;