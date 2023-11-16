import React, { Component } from 'react';

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIndex: this.props.index,
    };
  }

  handleDelete = () => {
    const { messageIndex } = this.state;
    this.props.deleteMessage(messageIndex);
  };

  render() {
    return (
      <button onClick={this.handleDelete}>
        Delete
      </button>
    );
  }
}

export default Delete;
