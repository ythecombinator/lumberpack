'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,paths   = require('../paths')
    ,stylint = require('gulp-stylint');

// Call Stylus Linter
module.exports = gulp.task('stylint', function () {
  return gulp.src('paths.source.styl')
      .pipe(stylint({config: '.stylintrc'}))
});
