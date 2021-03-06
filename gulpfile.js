var gulp = require('gulp');

var mainBowerFiles = require('main-bower-files'),
  inject = require('gulp-inject'),
  sass = require('gulp-sass');

var config = {
  sassDir: './scss',
  bowerDir: './bower_components'
};

gulp.task('default', ['custom-js']);

// Compile Sass files, move to CSS folder, inject css files into index.html
gulp.task('sass', function() {
  return gulp.src('./index.html')
  .pipe(inject(
    gulp.src(config.sassDir + '/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
  ))
  .pipe(gulp.dest('.'));
});

// Get Bower JavaScripts and inject them into index.html
gulp.task('bower-js', ['sass'], function() {
  return gulp.src('./index.html')
    .pipe(inject(
      gulp.src(mainBowerFiles(), {read: false}),
      { name: 'bower' }
    ))
    .pipe(gulp.dest('.'));
});

// Get Custom JavaScripts and inject them into index.html
gulp.task('custom-js', ['bower-js'], function() {
  return gulp.src('./index.html')
    .pipe(inject(
      gulp.src('./js/*.js', {read: false})
    ))
    .pipe(gulp.dest('.'));
});
