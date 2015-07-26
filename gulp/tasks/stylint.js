'use strict';

// Necessary Plugins
var gulp = require('gulp')
    ,stylint = require('gulp-stylint');

// Call Stylus Linter
module.exports = gulp.task('stylint', function () {
  return gulp.src('src/styles/**/*.styl')
      .pipe(stylint({config: '.stylintrc'}))
});
