var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('cleanwwwroot', function(){
    return del(["../wwwroot/**", "!../wwwroot/"], {force: true});
});
gulp.task('apphtmlcss', function(){
    return gulp.src([
        'app/**/*.{html,css}'
    ], { base: './app' })
    .pipe(gulp.dest('../wwwroot/app',{force:true}));
});

gulp.task('htmlcss', ['apphtmlcss'], function(){
   return  gulp.src([
        'css/**/*.css'
    ], { base: './css' })
    .pipe(gulp.dest('../wwwroot/css',{force:true}));
});
gulp.task('rootfolder', function(){
    return gulp.src([
        'index.html'
    ]).pipe(gulp.dest('../wwwroot'));
});
gulp.task('restore', function() {
    return gulp.src([
        'node_modules/@angular/**/*.{js,js.map}',
        'node_modules/angular2-in-memory-web-api/*.{js,js.map}',
        'node_modules/rxjs/**/*.{js,js.map}',
        'node_modules/systemjs/dist/*.{js,js.map}',
        'node_modules/zone.js/dist/*.{js,js.map}',
        'node_modules/core-js/client/*.{js,js.map}',
        'node_modules/reflect-metadata/Reflect.{js,js.map}',
        'node_modules/jquery/dist/*.{js,js.map}',
        'node_modules/bootstrap/dist/**/*.*',
        'node_modules/ng2-bootstrap/**/*.{js,js.map}',
        'node_modules/moment/**/*.{js,js.map}'
    ], { base: './node_modules' }).pipe(gulp.dest('../wwwroot/node_modules',{force:true}));
});
gulp.task('build', function(callback){
    runSequence('cleanwwwroot',
    ['htmlcss', 'rootfolder', 'restore'],
    callback);
})

gulp.task('watchapp', ['htmlcss'], function () {
    function reportChange(event){
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    }
    return gulp.watch(['app/**/*.{html,css}', 'css/**/*.css'],['htmlcss']).on('change', reportChange);
});
gulp.task('watchroot', ['rootfolder'], function () {
    function reportChange(event){
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    }
    return gulp.watch(['index.html' ],['rootfolder']).on('change', reportChange);
});


gulp.task('cleandocs', function(){
    return del(["../docs/**", "!../docs"], {force: true});
});
gulp.task('docs', ['cleandocs'], function() {
    return gulp.src('../wwwroot/**/*.*')
    .pipe(gulp.dest('../docs/'));
});



