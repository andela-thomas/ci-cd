'use strict';
const gulp = require('gulp');
const sync = require('browser-sync').create();

gulp.task('serve', ['build'], function() {
  sync.init({
    server: {
      baseDir: './public'
    }
  });
});
