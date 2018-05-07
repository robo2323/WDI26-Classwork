import React, { PureComponent } from 'react';

class Calc extends PureComponent {
  constructor(props) {
    super(props); //must pass props to super
    this.state = { a: 0, b: 0 };
    this._updateA = this._updateA.bind(this);
    this._updateB = this._updateB.bind(this);
    this._clear = this._clear.bind(this);
  }
  _updateA(e) {
    const a = parseFloat(e.target.value) || 0;
    this.setState({ a });
  }
  _updateB(e) {
    const b = parseFloat(e.target.value) || 0;
    this.setState({ b });
  }
  _clear(e) {
    const id = e.target.id;
    this.setState({ [id]: 0 });
    e.target.value = null;
    
  }
  render() {
    const { a, b } = this.state;
    return (
      <div>
        <h1>Calculator</h1>
        <input id="a" type="number" value={this.state.a} onChange={this._updateA} onClick={this._clear} />
        <input id="b" type="number" value={this.state.b} onChange={this._updateB} onClick={this._clear} />
        <h2>Results:</h2>
        <h3>
          {a}+{b}={a + b}
        </h3>
        <h3>
          {a}-{b}={a - b}
        </h3>
        <h3>
          {a}*{b}={a * b}
        </h3>
        <h3>
          {a}/{b}={a / b}
        </h3>
      </div>
    );
  }
}
export default Calc;
