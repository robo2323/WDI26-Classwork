import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <Link to="/faq">Faq</Link>
      </div>
    );
  }
}

export default Home;
