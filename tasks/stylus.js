'use strict';

// Necessary Plugins
var env        = require('minimist')(process.argv.slice(2))
  ,plumber     = require('gulp-plumber')
  ,stylus      = require('gulp-stylus');

// Call Stylus
module.exports = function (gulp) {
  return function () {
    gulp.src('src/styles/main.styl')
      .pipe(plumber())
      .pipe(stylus({
        compress: env.p
      }))
      .pipe(gulp.dest('www/css'))
  };
};
