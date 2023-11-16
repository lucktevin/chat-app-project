import React, { Component } from 'react';
import './App.css';
import jsonData from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: {
        Home: false,
        About: false,
        Contact: false,
        Chat: false,
      },
      messages: [],
      newMessage: '',
      currentUser: '', 
    };
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    fetch('http://localhost:5000/messages')
      .then((response) => response.json())
      .then((data) => this.setState({ messages: data }))
      .catch((error) => console.error('Error:', error));
  };

  toggleComponent = (componentName) => {
    this.setState((prevState) => ({
      components: {
        ...prevState.components,
        [componentName]: !prevState.components[componentName],
      },
    }));
  };

  handleChange = (event) => {
    this.setState({ newMessage: event.target.value });
  };

  handleUserChange = (event) => {
    this.setState({ currentUser: event.target.value });
  };

  handleSubmit = () => {
    const { newMessage, currentUser } = this.state;
    if (!currentUser) {
      alert('Please enter a username.');
      return;
    }
    fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: currentUser, text: newMessage }),
    })
      .then(() => {
        this.setState({ newMessage: '' });
        this.fetchMessages(); 
      })
      .catch((error) => console.error('Error:', error));
  };

  handleDelete = (index) => {
    const updatedMessages = [...this.state.messages];
    updatedMessages.splice(index, 1);
    this.setState({ messages: updatedMessages }, () => {
      fetch(`http://localhost:5000/messages/${index}`, {
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((data) => console.log('Message deleted:', data))
        .catch((error) => console.error('Error:', error));
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My App</h1>
        </header>
        <main>
        <button onClick={() => this.toggleComponent('Home')}>
            {this.state.components.Home ? 'Hide Home' : 'Home'}
          </button>
          {this.state.components.Home && (
            <div>
              <h2>{jsonData.home.title}</h2>
              <p>{jsonData.home.content}</p>
            </div>
          )}

          <button onClick={() => this.toggleComponent('About')}>
            {this.state.components.About ? 'Hide About' : 'About'}
          </button>
          {this.state.components.About && (
            <div>
              <h2>{jsonData.about.title}</h2>
              <p>{jsonData.about.content}</p>
            </div>
          )}

          <button onClick={() => this.toggleComponent('Contact')}>
            {this.state.components.Contact ? 'Hide Contact' : 'Contact'}
          </button>
          {this.state.components.Contact && (
            <div>
              <h2>{jsonData.contact.title}</h2>
              <p>{jsonData.contact.content}</p>
            </div>
          )}

          <button onClick={() => this.toggleComponent('Chat')}>
            {this.state.components.Chat ? 'Hide Chat' : 'Chat'}
          </button>
          {this.state.components.Chat && (
            <div>
              <h2>{jsonData.chat.title}</h2>
              <p>{jsonData.chat.content}</p>
            </div>
          )}

          <div className="message-list">
            {this.state.messages.map((message) => (
              <div key={message.id}>
                <p>User: {message.userId}</p>
                <p>Message: {message.text}</p>
                <button onClick={() => this.handleDelete(message.id)}>Delete</button>
              </div>
            ))}
          </div>

          <div className="message-input">
            <input
              type="text"
              value={this.state.currentUser}
              onChange={this.handleUserChange}
              placeholder="Enter Username"
            />
            <input
              type="text"
              value={this.state.newMessage}
              onChange={this.handleChange}
              placeholder="Type your message..."
            />
            <button onClick={this.handleSubmit}>Send</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
