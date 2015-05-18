var gulp = require('gulp');
var gls = require('gulp-live-server');
var opn = require('opn');
var less = require('gulp-less');
var path = require('path');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var config = {
};

gulp.task('default', ['serve']);
gulp.task('serve', function() {
    //1. run your script as a server 
    var server = gls.new('bin/www');
    server.start();
    opn('http://localhost:3000');
    //use gulp.watch to trigger server actions(notify, start or stop) 
    gulp.watch(['public/**/*.css', 'public/**/*.js','public/**/*.html'], server.notify);
    gulp.watch(['bin/www','app.js'], server.start); //restart my server
    gulp.watch('./**/*.less', ['less']);
});

gulp.task('less', function() {
    return gulp.src('./public/css/style.less')  // only compile the entry file
        .pipe(plumber())
        .pipe(less({
          paths: ['./public/css']
        }))
        .pipe(prefix("last 5 version"), {cascade:true})
        .pipe(gulp.dest('./public/css'));
});