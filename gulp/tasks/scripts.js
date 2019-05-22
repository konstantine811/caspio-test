const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

module.exports = function () {
  $.gulp.task('js', () => {
    return $.gulp.src('./dev/js/**/*.js')
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe($.gulp.dest('./build/js/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });
}