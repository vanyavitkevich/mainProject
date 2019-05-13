var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglifyjs'),
  cssnano = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false
  });
});
gulp.task('sass', function() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
        cascade: true
      })
    )
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp
    .src(['src/libs/**/*.js', 'src/js/*.js'])
    .pipe(concat('build.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
});

gulp.task('css-libs', function() {
  return gulp
    .src('src/css/*.css')
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts', 'img'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/css/**/*.css', ['css-libs']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/libs/**/*.js', ['scripts']);
  gulp.watch('src/img/**/*', ['img']);
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('clean', function() {
  return del.sync('build');
});

gulp.task('img', function() {
  return gulp
    .src('src/img/**/*')
    .pipe(
      cache(
        imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }]
        })
      )
    )
    .pipe(gulp.dest('build/img'));
});

gulp.task('clear', function() {
  return cache.clearAll();
});

gulp.task('default', ['watch']);
