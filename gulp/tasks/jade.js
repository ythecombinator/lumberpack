'use strict';

// Necessary Plugins
var gulp     = require('gulp')
    ,plumber = require('gulp-plumber')
    ,env     = require('minimist')(process.argv.slice(2))
    ,paths   = require('../paths')
    ,path    = require('path')
    ,fs      = require('fs')
    ,data    = require('gulp-data')
    ,jade    = require('gulp-jade');

// Call Jade to compile Templates
module.exports = gulp.task('jade', function () {
  return gulp.src(paths.source.files.jade)
    .pipe(plumber())
    .pipe(data(function() {
      return JSON.parse(fs.readFileSync('./src/config.json'));
    }))
    .pipe(jade({pretty: !env.p }))
    .pipe(gulp.dest(paths.build.html))
});
