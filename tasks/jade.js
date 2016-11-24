'use strict';
const gulp = require('gulp');
const jade = require('gulp-jade');
const sync = require('browser-sync').create();

gulp.task('jade', function() {
  gulp.src(['!app/shared/**', 'app/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('./public/'))
    .pipe(sync.stream({
      once: true,
      match: '**/*.html'
    }));
});
