'use strict';

var gulp = require('gulp');

module.exports = gulp.task('build', ['ls', 'jade', 'stylint', 'stylus', 'imagemin', 'deploy']);
