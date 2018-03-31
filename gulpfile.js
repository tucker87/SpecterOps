var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function(){
  });

gulp.task('sass', function () {
  gulp.src('SpecterOps.UI/Views/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('SpecterOps.UI/wwwroot/css/compiled/'));
});
 
gulp.task('watch', function () {
  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.js', ['scripts']);
});

gulp.task('default', [ 'scripts', 'sass']);