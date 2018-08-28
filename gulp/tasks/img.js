module.exports = function(){
    $.gulp.task('img:dev', function(){
         return  $.gulp.src('src/static/img/*.{jpg, png, gif}')           
            .pipe($.gulp.dest('build/static/img/'))
    });
    $.gulp.task('img:build', function(){
         return  $.gulp.src('src/static/img/*.{jpg, png, gif}')
            .pipe($.gp.tinypng('BhYx9IwKKR-OYX62F7GYPwbg98oJesj5'))           
            .pipe($.gulp.dest('build/static/img/'))
    });
    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./src/static/img/general/*.svg')
            .pipe($.gulp.dest('./build/static/img/general/'))
    })
}

