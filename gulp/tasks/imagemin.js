'use strict';

// Necessary Plugins
var gulp      = require('gulp')
    ,plumber  = require('gulp-plumber')
    ,imagemin = require('gulp-imagemin');

// Call Imagemin
module.exports = gulp.task('imagemin', function () {
  return gulp.src('src/images/**/*')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('www/img'));
});
