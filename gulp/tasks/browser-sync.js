'use strict';

// Necessary Plugins
var gulp         = require('gulp')
    ,browserSync = require('browser-sync');

// Serve files from /www/
module.exports = gulp.task('browser-sync', function () {
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
});
