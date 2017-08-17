'use strict';
var path = require('path');
var conf = require('./gulp/conf');
var _ = require('lodash');
var wiredep = require('wiredep');

var pathSrcHtml = [
  path.join(conf.paths.src, '/**/*.html')
];

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  var patterns = wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.src, '/app/**/*.js'),
      path.join(conf.paths.mock, '/**/*.mock.js'),
      path.join(conf.paths.unit, '/**/*.spec.js')
    ])
    .concat(pathSrcHtml);

  var files = patterns.map(function(pattern) {
    return {
      pattern: pattern
    };
  });

  return files;
}

module.exports = function(config) {
  var configuration = {
    files: listFiles(),
    singleRun: true,
    autoWatch: false,
    ngHtml2JsPreprocessor: {
      stripPrefix: conf.paths.src + '/',
      moduleName: 'app'
    },
    logLevel: 'WARN',
    frameworks: ['phantomjs-shim', 'jasmine', 'angular-filesort'],
    angularFilesort: {
      whitelist: [path.join(conf.paths.src, '/**/!(*.html|*.spec|*.mock).js')]
    },
    browsers : ['Chrome', 'Firefox'],
    plugins : [
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-phantomjs-shim',
      'karma-coverage',
      'karma-jasmine'
    ],
    coverageReporter: {
      type : 'html',
      dir : 'target/coverage_report/'
    },
    reporters: ['progress'],
    browserDisconnectTolerance:2,
    browserDisconnectTimeout: 5000,
    browserNoActivityTimeout: 15000
  };

  configuration.preprocessors = {};

  pathSrcHtml.forEach(function(path) {
    configuration.preprocessors[path] = ['ng-html2js'];
  });

  config.set(configuration);
};
