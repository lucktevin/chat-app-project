import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home Component</h2>
        <p>This is the Home page.</p>
        <button 
        className="home-btn" onClick={() => this.toggleComponent('Home')}>
       {this.state.components.Home ? 'Hide Home' : 'Home'}
     </button>
      </div>
    );
  }
}

export default Home;
