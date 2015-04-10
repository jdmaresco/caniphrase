var gulp = require('gulp');

var bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    es = require('event-stream')
    notify = require('gulp-notify');

var config = {
  sassDir: './scss',
  bowerDir: './bower_components' 
}

gulp.task('default', function() {

  var cssFiles = gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));

  gulp.src('./index.html')
    .pipe(inject(
      gulp.src(
        bowerFiles('.js'), {read:false}
      )
    ), {name: 'bower'})

    .pipe(inject(
      es.merge(
        cssFiles,
        gulp.src('./js/*.js', {read: false})
      )
    ))
    .pipe(gulp.dest('.'));
});

gulp.task('sass', function() { 
  return gulp.src(config.sassDir + '/*.scss')
  .pipe(sass() 
  .on("error", notify.onError(function (error) {
    return "Error: " + error.message;
  }))) 
  .pipe(gulp.dest('./css')); 
});
