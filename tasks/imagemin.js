'use strict';

// Necessary Plugins
var plumber     = require('gulp-plumber')
    ,imagemin   = require('gulp-imagemin');

// Call Imagemin
module.exports = function (gulp) {
  return function () {
  gulp.src('src/images/**/*')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('build/img'));
  };
};
