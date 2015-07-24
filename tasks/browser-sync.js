'use strict';

// Necessary Plugins
var browserSync = require('browser-sync');

// Serve files from /www/
module.exports = function (gulp) {
  return function () {
    var files = [
      'www/**/*.html',
      'www/css/**/*.css',
      'www/img/**/*',
      'www/js/**/*.js'
    ];

    browserSync.init(files, {
      server: {
        baseDir: './www/'
      }
    });
  };
};
