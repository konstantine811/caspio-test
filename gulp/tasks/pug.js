const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const pugInheritance = require('gulp-pug-inheritance');
const changed = require('gulp-changed');
const cached = require('gulp-cached');
const gulpif = require('gulp-if');
const filter = require('gulp-filter');

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src('./dev/pug/*.pug')
      .pipe(plumber())
      .pipe(changed('dist', { extension: '.html' }))
      .pipe(gulpif(global.isWatching, cached('pug')))
      .pipe(pugInheritance({ basedir: './dev/pug/', skip: 'node_modules' }))
      .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe(pug({
        pretty: true
      }))
      .pipe(plumber.stop())
      .pipe($.gulp.dest('./build/'))
      .on('end', $.browserSync.reload);
  });
}