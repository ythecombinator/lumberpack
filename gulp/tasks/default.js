'use strict';

var gulp = require('gulp');

module.exports = gulp.task('default', ['ls', 'jade', 'stylint', 'stylus', 'imagemin', 'watch', 'browser-sync']);
