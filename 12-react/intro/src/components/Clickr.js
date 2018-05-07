import React, { PureComponent } from 'react';

class Clickr extends PureComponent {
  // every component must render() a method which returns a single html elemnet
  constructor() {
    super(); // this calls original/built in version of constructor defined in purecomonent
    console.log('init');
    this.state = { clicks: 0 };
    this._incrementClicks = this._incrementClicks.bind(this);
  }

  _incrementClicks() {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this._incrementClicks}>{this.state.clicks} Clicks so far</button>
      </div>
    );
  }
}

export default Clickr;
