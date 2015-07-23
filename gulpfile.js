var gulp = require('gulp');

function getTask(task) {
    return require('./tasks/' + task)(gulp);
}

// Other tasks
gulp.task('browserify', getTask('browserify'));
gulp.task('browser-sync', getTask('browser-sync'));
gulp.task('deploy', getTask('deploy'));
gulp.task('imagemin', getTask('imagemin'));
gulp.task('jade', getTask('jade'));
gulp.task('js', getTask('js'));
gulp.task('stylint', getTask('stylint'));
gulp.task('stylus', getTask('stylus'));

// Watching tasks
gulp.task('watch', getTask('watch'));
gulp.task('watch', getTask('watchfy'));

// Default task
gulp.task('default', ['js', 'jade', 'stylint', 'stylus', 'imagemin', 'watch', 'browser-sync']);

// Default task using browserify
gulp.task('fy', ['browserify', 'jade', 'stylint', 'stylus', 'imagemin', 'watchfy', 'browser-sync']);

// Build and Deploy
gulp.task('build', ['js', 'jade', 'stylint', 'stylus', 'imagemin', 'deploy']);

// Build and Deploy
gulp.task('buildfy', ['browserify', 'jade', 'stylint', 'stylus', 'imagemin', 'deploy']);
