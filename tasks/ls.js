'use strict';

// Necessary Plugins
var env        = require('minimist')(process.argv.slice(2))
  ,plumber     = require('gulp-plumber')
  ,uglify      = require('gulp-uglify')
  ,concat       = require('gulp-concat')
  ,gulpLiveScript = require('gulp-livescript')
  ,gutil       = require('gulp-util')
  ,gulpif      = require('gulp-if');

// Call Livescript Compiler
module.exports = function (gulp) {
  return function () {
    gulp.src('src/scripts/**/*.ls')
      .pipe(gulpLiveScript({bare: true})
      .on('error', gutil.log))
      .pipe(gulp.dest('build/js'));
  };
};
