import React, { PureComponent as Component } from 'react';
import jsonp from 'jsonp-es6';
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(e) {
    this.setState({ query: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input type="search" placeholder="butterfly" onInput={this._handleInput} />
        <input type="submit" value="search" />
      </form>
    );
  }
}
/////////////////////////////////////////////////////////////////////
class Gallery extends Component {
  render() {
    return <div>{this.props.images.map((img) => <Image url={img} key={img} />)}</div>;
  }
}

function Image(props) {
  return <img src={props.url} width="150" height="150" alt={props.url} key={props.url} />;
}

/////////////////// parent /////////////////////////////////
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages(q) {
    const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
    const flickrParams = {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
      text: q,
      format: 'json'
    };

    const generateURL = function(p) {
      return [
        'http://farm',
        p.farm,
        '.static.flickr.com/',
        p.server,
        '/',
        p.id,
        '_',
        p.secret,
        '_q.jpg' // Change "q" to something else for different sizes
      ].join('');
    };

    jsonp(flickrURL, flickrParams, { callback: 'jsoncallback' }).then(
      function(res) {
        const images = res.photos.photo.map(generateURL);
        this.setState({ images });
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <SearchForm onSubmit={this.fetchImages} />
        <Gallery images={this.state.images} />
      </div>
    );
  }
}

export default Search;
