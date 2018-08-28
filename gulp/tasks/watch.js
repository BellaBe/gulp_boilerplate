module.exports = function(){
    $.gulp.task("watch", function(){
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'))
        $.gulp.watch('./src/static/sass/**/*.scss', $.gulp.series('sass:dev'))
        $.gulp.watch('./src/static/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'))
        $.gulp.watch(['./src/static/img/general/**/*.{png,jpg,gif}',
                     './src/static/img/content/**/*.{png,jpg,gif}'],
                     $.gulp.series('img:dev'));
    })
}