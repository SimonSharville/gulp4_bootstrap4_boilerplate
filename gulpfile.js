// See notes in README file

const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      imagemin = require('gulp-imagemin'),
      changed = require('gulp-changed'),
      // uglify = require('gulp-uglify'),
      uglify = require('gulp-uglify-es').default;
      rename = require('gulp-rename'),
      lineec = require('gulp-line-ending-corrector');
      haml = require('gulp-ruby-haml');
      include = require('gulp-include');
      del = require('del');


/*
-- Top Level Functions --
gulp.task   - Defines tasks
gulp.src    - Points to files to use
gulp.dest   - Points to output folder
gulp.watch  - Watch files and folders for changes
*/


// Order Files ==================================

// Order of JS files
// When you change this stop and restart gulp, and save one of the files so it rebuilds.
var jsSRC = [
  // Required
  'node_modules/jquery/dist/jquery.js',
  'node_modules/popper.js/dist/umd/popper.js',
  'node_modules/bootstrap/dist/js/bootstrap.js',
  
  // Local (Add in order used)
  'app/assets/js/scripts/dropdown-submenu.js',
  'app/assets/js/scripts/popovers.js',
  'app/assets/js/scripts/file-uploads.js',
  'app/assets/js/scripts/smoothscroll.js',
  'app/assets/js/scripts/active.js',
  'app/assets/js/scripts/off-canvas-options.js',
  'app/assets/js/scripts/off-canvas-rag-key.js'
];

var imgSRC = 'app/assets/images/**/*',
    imgDEST = 'docs/assets/images/';

// For ordering SCSS file use scss/sard-styles.scss
// NEVER use the css folder

// Functions ====================================

// Compile scss to css
function compileCSS(){
  return gulp.src('app/assets/scss/**/*.scss')
  .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
  .pipe(sourcemaps.write('./'))
  .pipe(lineec())
  .pipe(gulp.dest('docs/assets/css'))
}

function createSardStyles() {
  return gulp.src('docs/assets/css/remote-sard-styles.css')
  .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
  .pipe(concat('remote-sard-styles.min.css'))
  .pipe(cleanCSS({compatibility: 'ie8'})) // Minimises the css
  .pipe(sourcemaps.write('./'))
  .pipe(lineec())
  .pipe(gulp.dest(function (file) {
        return file.base;
    }))
  .pipe(browserSync.stream());
}

function createFoundryStyles() {
  return gulp.src('docs/assets/css/remote-foundry-styles.css')
  .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
  .pipe(concat('remote-foundry-styles.min.css'))
  .pipe(cleanCSS({compatibility: 'ie8'})) // Minimises the css
  .pipe(sourcemaps.write('./'))
  .pipe(lineec())
  .pipe(gulp.dest(function (file) {
        return file.base;
    }))
  .pipe(browserSync.stream());
}

// Include Partials and convert to HTML
function hamlHTML (done) {
  gulp.src([
    'app/views/**/*.haml',
    '!app/views/partials/**/*',      //exclude files within partials
    ])
    .pipe(include().on('error', function(d) { console.log(d.message); })) // Includes partials
    .pipe(haml().on('error', function(e) { console.log(e.message); }))
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.stream())
    done();
};


// // Concat and Minify js
function js(){
  return gulp.src(jsSRC)
  .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
    .pipe(concat('remote-sard-scripts.js'))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('docs/assets/js'));
};

function minifyJS(done){
  gulp.src('docs/assets/js/remote-sard-scripts.js')
  .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
  .pipe(uglify().on('error', function(f) { console.log(f.message); })) // minifies the js
  .pipe(rename({extname : '.min.js' }))  // Add extension to the file
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('docs/assets/js'));
  done();
}

// Minify Images
function minifyImages(done) {
  return gulp.src(imgSRC)
  .pipe(changed(imgDEST))
      .pipe( imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
      ]))
      .pipe( gulp.dest(imgDEST))
  done();
}

// Delete Images
function imageDelete(){
  return del([
    'docs/assets/images/**/*'
  ]);
}

// Fontawesome
// Only needed if fonts should be local
// function faIcons() {
//     return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
//         .pipe(gulp.dest('docs/assets/webfonts/'));
// };


// /////////////////////////////
// These watch the source folder

function watch(done) {
  browserSync.init({
    server: {
      baseDir: 'docs'
    }
  })
  done();

  
  gulp.watch('app/views/**/*.haml', hamlHTML).on('change', browserSync.reload);
  gulp.watch('app/assets/scss/**/*.scss', compileCSS).on('change', browserSync.reload);
  gulp.watch('docs/assets/css/remote-sard-styles.css', createSardStyles).on('change', browserSync.reload);
  gulp.watch('docs/assets/css/remote-foundry-styles.css', createFoundryStyles).on('change', browserSync.reload);
  gulp.watch(jsSRC, js).on('change', browserSync.reload);
  gulp.watch('docs/assets/js/remote-sard-scripts.js', minifyJS).on('change', browserSync.reload);
  gulp.watch(imgSRC, imageDelete).on('change', browserSync.reload);
  gulp.watch(imgSRC, minifyImages).on('change', browserSync.reload);
  // gulp.watch('node_modules/@fortawesome/fontawesome-free/webfonts/*', faIcons).on('change', browserSync.reload);

}


exports.hamlHTML = hamlHTML;
exports.compileCSS = compileCSS;
exports.createSardStyles = createSardStyles;
exports.createFoundryStyles = createFoundryStyles;
exports.js = js;
exports.minifyImages = minifyImages;
exports.minifyJS = minifyJS;
exports.watch = watch;
// exports.faIcons = faIcons;


// Sets the default to gulp watch
var build = gulp.parallel(watch);
gulp.task('default', build);

