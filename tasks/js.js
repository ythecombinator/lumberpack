'use strict';

// Necessary Plugins
var env        = require('minimist')(process.argv.slice(2))
  ,plumber     = require('gulp-plumber')
  ,uglify      = require('gulp-uglify')
  ,concat      = require('gulp-concat')
  ,gulpif      = require('gulp-if');

// Call Uglify and Concat JS
module.exports = function (gulp) {
  return function () {
    gulp.src('src/js/**/*.js')
      .pipe(plumber())
      .pipe(concat('main.js'))
      .pipe(gulpif(env.p, uglify()))
      .pipe(gulp.dest('build/js'))
  };
};
