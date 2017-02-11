/**
 * gulp clean build file
 */
var fs    = require('fs');
var gulp  = require('gulp');
var clean = require('gulp-clean');

var package = fs.readFileSync('package.json');
var version = JSON.parse(package).projectVersion;

gulp.task('clean', function() {
  gulp.src(`build/${version}`)
      .pipe(clean());
})
