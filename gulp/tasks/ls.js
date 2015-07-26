'use strict';

// Necessary Plugins
var gulp          = require('gulp')
    ,plumber        = require('gulp-plumber')
    ,env            = require('minimist')(process.argv.slice(2))
    ,gutil          = require('gulp-util')
    ,gulpif         = require('gulp-if')
    ,paths          = require('../paths')
    ,uglify         = require('gulp-uglify')
    ,concat         = require('gulp-concat')
    ,gulpLiveScript = require('gulp-livescript');

// Call Livescript Compiler
module.exports = gulp.task('ls', function () {
  return gulp.src(paths.source.ls)
    .pipe(gulpLiveScript({bare: true})
    .on('error', gutil.log))
    .pipe(gulp.dest(paths.build.js));
});
