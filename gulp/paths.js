'use strict';

module.exports = {

    source: {
        jade: 'src/templates/**/*.jade',
        ls: 'src/scripts/**/*.ls',
        styl: 'src/styles/**/*.styl',
        img: 'src/images/**/*.{jpg,png,gif}',
        files: {
            config: './src/config.json',
            jade: 'src/templates/*.jade',
            styl: 'src/styles/main.styl'
        }

    },

    browserSync: {
        html: 'www/**/*.html',
        js: 'www/js/**/*.js',
        css: 'www/css/**/*.css',
        img: 'www/img/**/*'
    },

    build: {
        html: './www/',
        js: 'www/js',
        css: 'www/css',
        img: 'www/img'
    }
};
