var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function(){
    return gulp.src('node_modules/vue/dist/vue.js')
      .pipe(gulp.dest('wwwroot/js/vue/'))
  });

gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('watch', function () {
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.js', ['scripts']);
});

gulp.task('default', [ 'scripts', 'sass']);