'use strict';

// Call Watch for Browserify
module.exports = function (gulp) {
  return function () {
    gulp.watch('src/templates/**/*.jade', ['jade']);
    gulp.watch('src/styles/**/*.styl', ['stylint', 'stylus']);
    gulp.watch('src/js/**/*.js', ['browserify']);
    gulp.watch('src/images/**/*.{jpg,png,gif}', ['imagemin']);
  };
};
