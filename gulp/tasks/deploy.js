'use strict';

// Necessary Plugins
var gulp   = require('gulp')
    ,gutil = require('gulp-util')
    ,paths = require('../paths')
    ,rsync = require('rsyncwrapper').rsync

// Deploy via Rsync
module.exports = gulp.task('deploy', function () {
    rsync({
      ssh: true,
      src: paths.build.html,
      dest: 'user@hostname:/path/to/www',
      recursive: true,
      syncDest: true,
      args: ['--verbose']
    },

    function (erro, stdout, stderr, cmd) {
        gutil.log(stdout);
    });
});
