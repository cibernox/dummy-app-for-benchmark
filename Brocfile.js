/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  es3Safe: false,
  'ember-cli-bootstrap-sassy': {
    'js': false,
    'glyphicons': false
  }
});

module.exports = app.toTree();
