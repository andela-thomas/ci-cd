'use strict';
const gulp = require('gulp');
require('require-dir')('./tasks');

let paths = {
  public: 'public/**',
  jade: ['!app/shared/**', 'app/**/*.jade'],
  scripts: 'app/**/*.js',
  styles: 'app/styles/*.+(less|css)'
};

gulp.task('watch', function() {
  // livereload.listen({ port: 35729 });
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.styles, ['less']);
  gulp.watch(paths.scripts, ['browserify']);
});

gulp.task('build', ['jade', 'less', 'browserify', 'bower']);
// TODO
gulp.task('heroku:production', ['build']);
gulp.task('heroku:staging', ['build']);

gulp.task('default', ['watch', 'build', 'serve']);
