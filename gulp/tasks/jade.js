'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,plumber = require('gulp-plumber')
    ,env     = require('minimist')(process.argv.slice(2))
    ,jade    = require('gulp-jade');

// Call Jade to compile Templates
module.exports = gulp.task('jade', function () {
  return gulp.src('src/templates/*.jade')
    .pipe(plumber())
    .pipe(jade({pretty: !env.p }))
    .pipe(gulp.dest('www/'))
});
