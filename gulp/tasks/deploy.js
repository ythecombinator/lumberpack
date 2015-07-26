'use strict';

// Necessary Plugins
var gulp   = require('gulp')
    ,gutil = require('gulp-util')
    ,rsync = require('rsyncwrapper').rsync

// Deploy via Rsync
module.exports = gulp.task('deploy', function () {
    rsync({
      ssh: true,
      src: './www/',
      dest: 'user@hostname:/path/to/www',
      recursive: true,
      syncDest: true,
      args: ['--verbose']
    },

    function (erro, stdout, stderr, cmd) {
        gutil.log(stdout);
    });
});
