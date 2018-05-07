import React, { PureComponent } from 'react';

class HelloWorld extends PureComponent {
  // every component must render() a method which returns a single html elemnet
  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
        <button id="cool">cool</button>
      </div>
    );
  }
}

export default HelloWorld;
