const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gutil = require('gulp-util');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const csscomb = require('gulp-csscomb');

module.exports = function () {
  $.gulp.task('styles', () => {
    return $.gulp.src('./dev/styles/**/*.scss')
      .pipe(plumber({
        errorHandler: function (err) {
          notify.onError({
            title: "Gulp error in " + err.plugin,
            message: err.toString()
          })(err);

          gutil.beep();
        }
      }))
      .pipe(sourcemaps.init())
      .pipe(scss())
      .pipe(autoprefixer({
        browsers: ['last 3 version']
      }))
      .pipe(csscomb())
      .pipe(csso())
      .pipe(sourcemaps.write())
      .pipe(rename('styles.min.css'))
      .pipe($.gulp.dest('./build/styles/'))
      .on('end', $.browserSync.reload)
  })
}