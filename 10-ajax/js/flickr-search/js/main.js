'use strict';

var qs = function qs(query) {
  return document.querySelector(query);
};

var State = function State() {
  return {
    page: 1,
    pages: 0,
    canScroll: true,
    getState: function getState(param) {
      return this[param];
    },
    setState: function setState(param, val) {
      this[param] = val;
    }
  };
};
var state = new State();

var search = function search(query) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var url = new URL('https://api.flickr.com/services/rest?jsoncallback=?');
  var params = {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    format: 'json',
    nojsoncallback: 1,
    page: page,
    text: query
  };
  // generate url with params
  Object.keys(params).forEach(function (key) {
    return url.searchParams.append(key, params[key]);
  });

  if (state.getState('page') <= state.getState('pages') || !state.getState('pages')) {
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (data) {
      state.setState('pages', data.photos.pages);
      data.photos.photo.forEach(function (photo) {
        var a = document.createElement('a');
        var img = document.createElement('img');
        img.setAttribute('src', generateURL(photo));
        a.setAttribute('href', generateURL(photo, 'b'));
        a.appendChild(img);
        a.classList.add('result');
        qs('#results').appendChild(a);

        state.setState('canScroll', true);
      });
    });
  }
};

var generateURL = function generateURL(p) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'q';

  return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_' + size + '.jpg' // Change "q" to something else for different sizes
  ].join('');
};

document.addEventListener('DOMContentLoaded', function () {
  var page = state.getState('page');

  qs('#search-form').addEventListener('submit', function () {
    event.preventDefault();
    state = new State();
    qs('#results').innerHTML = '';
    var query = qs('#query').value;
    search(query);
  });

  window.addEventListener('scroll', function () {
    var scroll = window.scrollY + window.innerHeight;

    var docHeight = document.documentElement.scrollHeight;

    if (docHeight - scroll < 1000 && state.getState('canScroll')) {
      state.setState('canScroll', false);

      var query = qs('#query').value;
      page++;
      state.setState('page', page);

      search(query, state.getState('page'));
    }
  });
});