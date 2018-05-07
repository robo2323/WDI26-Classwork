import React, { PureComponent } from 'react';

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: 100,
      zoom: 'scale(1)'
    };
    this._enlarge = this._enlarge.bind(this);
    this._shrink = this._shrink.bind(this);
  }

  _enlarge() {
    this.setState({ zoom: 'scale(1.2)' });
  }
  _shrink() {
    this.setState({ zoom: 'scale(1)' });
  }
  
  render() {
    const { name, age, bio, pic } = this.props;
    return (
      <div className="profile">
        <h1>{name}</h1>
        <h2>{age}</h2>
        <p>{bio}</p>
        <img src={pic} alt={name} style={{transform:this.state.zoom}} onMouseEnter={this._enlarge} onMouseLeave={this._shrink} />
        <hr />
      </div>
    );
  }
}

export default Profile;
