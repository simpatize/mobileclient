var gulp = require('gulp');
var args = require('yargs').argv;
var rename = require('gulp-rename');
var replace = require('gulp-replace-task');
var fs = require('fs');
var exec = require('child_process').exec;

gulp.task('replace', function() {
  var env = args.env || 'development';
  var configFileName = env + '.json';
  var settings = JSON.parse(fs.readFileSync('./www/app/config/env/' + configFileName, 'utf8'));

  // Replace each placeholder with the correct value for the variable.
  gulp.src('./www/app/config/config.module.template.js')
    .pipe(replace({
      patterns: [
        {
          match: 'apiUrl',
          replacement: settings.apiUrl
        }
      ]
    }))
    .pipe(rename('config.module.js'))
    .pipe(gulp.dest('./www/app/config/'));
});

gulp.task('serve', function () {
  exec("./node_modules/ionic/bin/ionic serve --nobrowser", function(err, stdout, stderr){
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
});

gulp.task('build', ['replace']);
gulp.task('start', ['build', 'serve']);
