module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./dev/styles/**/*.scss', $.gulp.series('styles'));
    $.gulp.watch('./dev/js/**/*.js', $.gulp.series('js'))
  })
}