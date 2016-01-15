var gulp = require("gulp");
var reactify = require("reactify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task('transpile', () => {
  browserify('src/js/main.js')
    .transform(reactify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
  gulp.src('src/css/**/*.*')
    .pipe(gulp.dest('dist/css'));
});

// include dependencies for Bootstrap
gulp.task('lib', function(){
  gulp.src("./node_modules/jquery/dist/jquery.min.js")
    .pipe(gulp.dest('dist/lib/js'));
  gulp.src("./node_modules/bootstrap/dist/js/bootstrap.min.js")
    .pipe(gulp.dest('dist/lib/js'));
  gulp.src("./node_modules/bootstrap/dist/css/bootstrap.min.css")
    .pipe(gulp.dest('dist/lib/css'));
});

gulp.task('default', ['transpile', 'copy', 'lib'], function(){
  return gulp.watch('src/**/*.*', ['transpile', 'copy']);
});