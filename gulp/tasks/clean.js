module.exports = function () {
  $.gulp.task('clean', function () {
    return $.del(['./build/js', './build/styles', '!./build/libs'])
  })
};