'use strict';

var gulp = require('gulp');

// Call Watch
module.exports = gulp.task('watch', function () {
  gulp.watch('src/templates/**/*.jade', ['jade']);
  gulp.watch('src/styles/**/*.styl', ['stylint', 'stylus']);
  gulp.watch('src/scripts/**/*ls', ['ls']);
  gulp.watch('src/images/**/*.{jpg,png,gif}', ['imagemin']);
});
