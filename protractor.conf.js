'use strict';

var paths = require('./.yo-rc.json')['generator-gulp-angular'].props.paths;

exports.config = {

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
