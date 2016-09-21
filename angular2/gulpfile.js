var gulp = require('gulp');
var del = require('del');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('cleanwwwroot', function(){
    return del(["../wwwroot/node_modules/**", "!../wwwroot/node_modules"], {force: true});
});
gulp.task('restore', ['cleanwwwroot'], function() {
    gulp.src([
        'node_modules/@angular/**/*.js',
        'node_modules/angular2-in-memory-web-api/*.js',
        'node_modules/rxjs/**/*.js',
        'node_modules/systemjs/dist/*.js',
        'node_modules/zone.js/dist/*.js',
        'node_modules/core-js/client/*.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/jquery/dist/*.js',
        'node_modules/bootstrap/dist/**/*.*'
    ], { base: './node_modules' }).pipe(gulp.dest('../wwwroot/node_modules'));
});

gulp.task('cleandocs', function(){
    return del(["../docs/**", "!../docs"], {force: true});
});
gulp.task('docs', ['cleandocs'], function() {
    gulp.src('../wwwroot/**/*.*')
    .pipe(gulp.dest('../docs/'));
});



