module.exports = function(){
    $.gulp.task('pug', function(){
        return $.gulp.src('src/pug/pages/*.pug')
            .pipe($.gp.pug({
                pretty: true
                ,
                locals: {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    content: JSON.parse($.fs.readFileSync('./data/content.json', 'utf8'))
                }    
            }))
            .on('error', $.gp.notify.onError(function(error){
                return {
                    title: 'Pug',
                    message: error.message
                }
            }))
            .pipe($.gulp.dest('./build/'))
            .on("end", $.bs.reload)
    });
}