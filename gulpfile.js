const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/dist/css'));
});

gulp.task('default', ['sass']);

gulp.task('watch', () => {
  gulp.watch('src/sass/*.scss', ['sass']);
});
