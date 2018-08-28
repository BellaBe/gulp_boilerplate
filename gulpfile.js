'use strict'
global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    },
    del: require('del'),
    fs: require('fs')

}

$.path.tasks.forEach(function(taskPath){
    require(taskPath)();
})


$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'sass:dev', 'libsJS:dev', 'js:copy', 'img:dev', 'fonts', 'svg:copy', 'svg'),
    
))
$.gulp.task("build", $.gulp.series(
    'clean',
    $.gulp.parallel('pug', 'sass:build', 'libsJS:build', 'js:copy', 'img:build', 'fonts', 'svg:copy', 'svg'),
))

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel('watch', 'serve')
))


