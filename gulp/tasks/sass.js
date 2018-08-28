module.exports = function(){
    $.gulp.task('sass:build', function(){
        return $.gulp.src('./src/static/sass/main.scss')     
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers:['last 3 versions']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso()) 
            .pipe($.gulp.dest('./build/static/css/'))
    
    });
    $.gulp.task('sass:dev', function(){
        return $.gulp.src('./src/static/sass/main.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.autoprefixer({
                browsers:['last 3 versions']
            }))
            .on("error", $.gp.notify.onError(function(error){
                return {
                title: "sass",
                message: error.message
                }
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }))
    
    });
}