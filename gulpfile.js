var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
  return gulp.src('node_modules/vue/dist/vue.js')
      .pipe(gulp.dest('SpecterOps.UI/wwwroot/js/vue/'))
});

gulp.task('sass', function () {
  gulp.src('SpecterOps.UI/Views/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('SpecterOps.UI/wwwroot/css/compiled/'));
});

gulp.task('watch', function () {
  gulp.watch('SpecterOps.UI/Views/**/*.scss', ['sass']);
  gulp.watch('SpecterOps.UI/Views/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'sass']);