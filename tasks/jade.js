'use strict';

// Necessary Plugins
var env         = require('minimist')(process.argv.slice(2))
    ,plumber    = require('gulp-plumber')
    ,uglify     = require('gulp-uglify')
    ,jade       = require('gulp-jade');

// Call Jade to compile Templates
module.exports = function (gulp) {
  return function () {
  gulp.src('src/templates/*.jade')
    .pipe(plumber())
    .pipe(jade({pretty: !env.p }))
    .pipe(gulp.dest('build/'))
  };
};
