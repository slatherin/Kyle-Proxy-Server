const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const fs = require("fs");

const aws = JSON.parse(fs.readFileSync('./awsConfig.json'));
const publisher = awspublish.create({
  region: "us-west-1",
  params: {
    Bucket: 'hrla22fecbundles'
  },
  accessKeyId: aws.accessKeyId,
  secretAccessKey: aws.secretAccessKey
})


gulp.task('build', function(done) {

  gulp.src('/Users/kylemccarty/Desktop/FECmicroservices/CadenQuestionsAnswers/public').pipe(gulp.dest('./bundles'));
  // gulp.src('/Users/kylemccarty/Desktop/FECmicroservices/kevin-module-server/static').pipe(gulp.dest('./bundles'));
  // gulp.src('/Users/kylemccarty/Desktop/FECmicroservices/module-server/client/dist').pipe(gulp.dest('./bundles'));
  // gulp.src('/Users/kylemccarty/Desktop/FECmicroservices/product-descriptions-module-server/client/dist').pipe(gulp.dest('./bundles'));

  var headers = { 'Cache-Control': 'max-age=315360000, no-transform, public' };

  done()

  // gulp.src()
  // .pipe(publisher.publish(headers))
  // .pipe(publisher.sync())
  // .pipe(awspublish.reporter());

});

///Users/kylemccarty/Desktop/FECmicroservices/CadenQuestionsAnswers/public
///Users/kylemccarty/Desktop/FECmicroservices/kevin-module-server/static
///Users/kylemccarty/Desktop/FECmicroservices/module-server/client/dist
///Users/kylemccarty/Desktop/FECmicroservices/product-descriptions-module-server/client/dist