import React, { PureComponent } from 'react';
import Secrets from './Secrets';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Secrets />
      </div>
    );
  }
}

export default App;
