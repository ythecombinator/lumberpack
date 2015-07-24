'use strict';

// Call Watch
module.exports = function (gulp) {
  return function () {
    gulp.watch('src/templates/**/*.jade', ['jade']);
    gulp.watch('src/styles/**/*.styl', ['stylint', 'stylus']);
    gulp.watch('src/scripts/**/*ls', ['ls']);
    gulp.watch('src/images/**/*.{jpg,png,gif}', ['imagemin']);
  };
};
