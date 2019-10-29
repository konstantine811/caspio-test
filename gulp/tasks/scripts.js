const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');

module.exports = function () {
  $.gulp.task('js', () => {
    return $.gulp.src(['./dev/js/**/*.js'], {sice: $.gulp.lastRun('js')})
      .pipe(plumber())
      .pipe(webpack({
        mode: 'production'
      }))
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(concat('bundle.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe($.gulp.dest('./build/js/'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });
}