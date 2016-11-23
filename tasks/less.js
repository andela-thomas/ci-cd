'use strict';
const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const minifycss = require('gulp-minify-css');

gulp.task('less', function() {
  gulp.src('app/styles/*.+(less|css)')
    .pipe(less({
      paths: [path.join(__dirname, './app/styles')]
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('./public/css'));
});
