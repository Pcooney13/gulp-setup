var gulp = require ('gulp');
var autoprefixer = require ('gulp-autoprefixer');

gulp.task('styles', gulp.series(function(done) {
  gulp.src('css/style.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'))
  done();
}));

gulp.task('watch', gulp.series(function() {
  gulp.watch('css/style.css', gulp.series('styles'));
}));
