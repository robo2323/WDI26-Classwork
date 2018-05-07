import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SERVER_URL = 'https://0beb00ee.ngrok.io/secrets.json';

class SecretForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { content: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({ content: e.target.value });
  }
  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({ content: '' });
  }
  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <textarea onChange={this._handleChange} value={this.state.content} />
        <input type="submit" value="Tell" />
      </form>
    );
  }
}

SecretForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const Gallery = (props) => {
  return <div>{props.secrets.map((s) => <p key={s.id}>{s.content}</p>)}</div>;
};

//// parent //////////////////////////
class Secrets extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      secrets: []
    };
    this.saveSecret = this.saveSecret.bind(this);

    /// polling
    const fetchSecrets = () => {
      axios.get(SERVER_URL).then((res) => {
        this.setState({ secrets: res.data });
        setTimeout(fetchSecrets, 4000);
      });
    };
    fetchSecrets();
  }

  saveSecret(s) {
    axios.post(SERVER_URL, { content: s }).then((res) => {
      this.setState({ secrets: [res.data, ...this.state.secrets] });
    });
  }
  render() {
    return (
      <div>
        <h1>secrets</h1>
        <SecretForm onSubmit={this.saveSecret} />
        <Gallery secrets={this.state.secrets} />
      </div>
    );
  }
}

export default Secrets;
