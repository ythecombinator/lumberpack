var gulp = require('gulp');

function getTask(task) {
    return require('./tasks/' + task)(gulp);
}

// Other tasks
gulp.task('browser-sync', getTask('browser-sync'));
gulp.task('deploy', getTask('deploy'));
gulp.task('imagemin', getTask('imagemin'));
gulp.task('jade', getTask('jade'));
gulp.task('js', getTask('js'));
gulp.task('stylint', getTask('stylint'));
gulp.task('stylus', getTask('stylus'));

// Watching task
gulp.task('watch', getTask('watch'));

// Default task
gulp.task('default', ['js', 'jade', 'stylint', 'stylus', 'imagemin', 'watch', 'browser-sync']);

// Build and Deploy
gulp.task('build', ['js', 'jade', 'stylint', 'stylus', 'imagemin', 'deploy']);
