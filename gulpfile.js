var gulp = require ('gulp');
var autoprefixer = require ('gulp-autoprefixer');
var sass = require ('gulp-sass');

gulp.task('styles', gulp.series(function(done) {
  gulp.src('css/style.scss')
  .pipe(sass({
    errorLogToConsole: true
  }))
  .on ( 'error', console.error.bind(console))
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'))
  done();
}));

gulp.task('watch', gulp.series(function() {
  gulp.watch('css/*.scss', gulp.series('styles'));
}));
