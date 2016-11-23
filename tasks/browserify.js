'use strict';
const gulp = require('gulp');
const browserify = require('browserify');
const gutil = require('gulp-util');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  return browserify('./app/scripts/app.js').bundle()
    .on('success', gutil.log.bind(gutil, 'Browserify Rebundled'))
    .on('error', gutil.log.bind(gutil, 'Browserify ' +
      'Error: in browserify gulp task'))
    // vinyl-source-stream makes the bundle compatible with gulp
    .pipe(source('app.min.js')) // Desired filename
    // Output the file
    .pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
});
