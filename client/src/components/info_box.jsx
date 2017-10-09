import React, { Component } from 'react'

class InfoBox extends Component {
  render() {
    return (
      <div className="info-box">
        <ul>
          Users online: {this.props.numUsers}
        </ul>
      </div>
    )
  }
}

export default InfoBox;