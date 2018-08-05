var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  browsersync = require('browser-sync'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cleancss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  notify = require("gulp-notify"),
  rsync = require('gulp-rsync'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  babel = require("gulp-babel");


gulp.task('browser-sync', function () {
  browsersync({
    server: {
      baseDir: 'app'
    },
    notify: false,
    // open: false,
    // tunnel: true,
    // tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
  })
});

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass({
      outputStyle: 'expand'
    }).on("error", notify.onError()))
    .pipe(rename({
      suffix: '.min',
      prefix: ''
    }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss({
      level: {
        1: {
          specialComments: 0
        }
      }
    })) // Opt., comment out when debugging
    .pipe(gulp.dest('app/css'))
    .pipe(browsersync.reload({
      stream: true
    }))
});

gulp.task('js', ['babeling'], function () {
  return gulp.src([
      'app/libs/jquery/dist/jquery.min.js',
      'app/libs/Vue/vue.js',
      'app/libs/lightGallery-master/dist/js/lightgallery.min.js',
      'app/libs/lightGallery-master/modules/lg-thumbnail.min.js',
      'app/libs/slick/slick.min.js',
      'app/js/es5/common_es5.js', // Always at the end
    ])
    .pipe(concat('scripts.min.js'))
    // .pipe(uglify()) // Mifify js (opt.)
    .pipe(gulp.dest('app/js'))
    .pipe(browsersync.reload({
      stream: true
    }))
});

gulp.task('babeling', function () {
  return gulp.src(['app/js/components/*.js', 'app/js/common.js'])
    .pipe(concat('common_es5.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('app/js/es5'))
});

gulp.task('rsync', function () {
  return gulp.src('app/**')
    .pipe(rsync({
      root: 'app/',
      hostname: 'username@yousite.com',
      destination: 'yousite/public_html/',
      // include: ['*.htaccess'], // Includes files to deploy
      exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
      recursive: true,
      archive: true,
      silent: false,
      compress: true
    }))
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function () {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch(['app/js/common.js', 'app/js/components/*.js'], ['babeling']);
  gulp.watch(['libs/**/*.js', 'app/js/es5/common_es5.js'], ['js']);
  gulp.watch('app/*.html', browsersync.reload)
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function () {
  var buildFiles = gulp.src([
    'app/*.html',
    'app/.htaccess',
  ]).pipe(gulp.dest('dist'));
  var buildCss = gulp.src([
    'app/css/main.min.css',
  ]).pipe(gulp.dest('dist/css'));
  var buildJs = gulp.src([
    'app/js/scripts.min.js',
  ]).pipe(gulp.dest('dist/js'));
  var buildFonts = gulp.src([
    'app/fonts/**/*',
  ]).pipe(gulp.dest('dist/fonts'));
  // var buildMusic = gulp.src([
  //     'app/music/**/*',
  // ]).pipe(gulp.dest('dist/music'));
});

gulp.task('imagemin', function () {
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin())) // Cache Images
    .pipe(gulp.dest('dist/img'));
});

gulp.task('removedist', function () {
  return del.sync('dist');
});

gulp.task('clearcache', function () {
  return cache.clearAll();
});

gulp.task('default', ['watch']);