const d = {
  getEl: function(query) {
    return document.querySelectorAll(query);
  },
  getAtr: function(el, attribute) {
    return el.getAttribute(attribute);
  },
  setAtr: function(el, attribute, value) {
    el.setAttribute(attribute, value);
  },
  create: function(tagName) {
    return document.createElement(tagName);
  }
};
