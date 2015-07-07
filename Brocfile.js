/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  es3Safe: false
});

module.exports = app.toTree();
