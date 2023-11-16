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
        Chat: false
      }
    };
  }

  toggleComponent = (componentName) => {
    this.setState((prevState) => ({
      components: {
        ...prevState.components,
        [componentName]: !prevState.components[componentName]
      }
    }));
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
        </main>
      </div>
    );
  }
}

export default App;
