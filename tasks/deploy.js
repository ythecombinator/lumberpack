'use strict';

// Necessary Plugins
var rsync       = require('rsyncwrapper').rsync
    ,gutil      = require('gulp-util');

// Rsync
module.exports = function (gulp) {
  return function () {
    rsync({
      ssh: true,
      src: './build/',
      dest: 'user@hostname:/path/to/www',
      recursive: true,
      syncDest: true,
      args: ['--verbose']
    },

    function (erro, stdout, stderr, cmd) {
        gutil.log(stdout);
    });
  };
};
