'use strict';

// Necessary Plugins
var gulp    = require('gulp')
    ,gutil  = require('gulp-util')
    ,paths  = require('../paths')
    ,rsync  = require('rsyncwrapper').rsync
    ,config = require("./../../src/config.json");

// Deploy via Rsync
module.exports = gulp.task('deploy-rsync', function () {
    rsync({
      ssh: true,
      src: paths.build.html,
      dest: config.deploy.rsync.username + '@' + config.deploy.rsync.hostname + ':' + config.deploy.rsync.dest,
      recursive: true,
      syncDest: true,
      args: ['--verbose']
    },

    function (erro, stdout, stderr, cmd) {
        gutil.log(stdout);
    });
});
