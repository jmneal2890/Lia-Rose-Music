var gulp = require('gulp'),
    connect = require('gulp-connect'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    browserify = require('gulp-browserify'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat');

//Server Launch
gulp.task('webserver', function(){
  connect.server({
    livereload: true
  });
});

//scss compiler and watch
gulp.task('sass', function(){
    gulp.src('scss/*.scss')
      .pipe(plumber())
      .pipe(sass({ style: 'compressed' }))
      .pipe(gulp.dest('css/'))
      .pipe(livereload());
});

gulp.task('watch', function(){
  var server = livereload.listen();
  gulp.watch('scss/*.scss', ['sass'])
  gulp.watch('js/*.js', ['js']);
  gulp.watch('index.html', ['html'])
});

//browserify Launch
gulp.task('js', function(){
  gulp.src('js/main.js')
  .pipe(plumber())
  .pipe(browserify({ debug:true }))
  .pipe(concat ('build.js'))
  .pipe(gulp.dest('dist/'))
  .pipe(livereload());
});

//html task
gulp.task('html', function(){
  gulp.src('index.html')
  .pipe(livereload());
});

//Default task with sub tasks chained
gulp.task('default', ['sass', 'js', 'webserver', 'html', 'watch']);
