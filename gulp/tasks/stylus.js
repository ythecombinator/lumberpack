'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,plumber = require('gulp-plumber')
    ,env     = require('minimist')(process.argv.slice(2))
    ,paths   = require('../paths')
    ,stylus  = require('gulp-stylus');

// Call Stylus
module.exports = gulp.task('stylus', function () {
  return gulp.src(paths.source.files.styl)
    .pipe(plumber())
    .pipe(stylus({
      compress: env.p
    }))
    .pipe(gulp.dest(paths.build.css))
});
