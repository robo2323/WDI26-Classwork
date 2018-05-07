import React, { Component } from 'react';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile name="rob" age="36" bio="lorem" pic="http://fillmurray.com/400/400"/>
        <Profile name="bob" age="26" bio="lorem" pic="http://fillmurray.com/600/400"/>
        <Profile name="dob" age="56" bio="lorem" pic="http://fillmurray.com/800/400"/>
      </div>
    );
  }
}

export default App;
