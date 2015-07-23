'use strict';

// Necessary Plugins
var browserSync = require('browser-sync');

// Serve files from /build/
module.exports = function (gulp) {
  return function () {
    var files = [
      'build/**/*.html',
      'build/css/**/*.css',
      'build/img/**/*',
      'build/js/**/*.js'
    ];

    browserSync.init(files, {
      server: {
        baseDir: './build/'
      }
    });
  };
};
