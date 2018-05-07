import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Faq extends PureComponent {
  render() {
    return (
      <div>
        <h2>FAQ</h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Faq;
