'use strict';

// Necessary Plugins
var stylint = require('gulp-stylint');

// Call Stylus Linter
module.exports = function (gulp) {
  return function () {
    gulp.src('src/styles/**/*.styl')
      .pipe(stylint({config: '.stylintrc'}))
    };
};
