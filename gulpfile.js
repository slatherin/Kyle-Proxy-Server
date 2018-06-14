const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const fs = require("fs");

const aws = JSON.parse(fs.readFileSync('./awsConfig.json'));

gulp.task('default', function() {
  // place code for your default task here
});