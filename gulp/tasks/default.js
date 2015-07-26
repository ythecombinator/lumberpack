'use strict';

var gulp = require('gulp');

// Default task
module.exports = gulp.task('default', ['ls', 'jade', 'stylint', 'stylus', 'imagemin', 'watch', 'browser-sync']);
