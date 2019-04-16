let gulp = require('gulp');
let css = require('gulp-minify-css');
let js = require('gulp-uglify');
let scss = require('gulp-sass');

gulp.task('css', () => {
    return gulp.src('./src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('js', () => {
    return gulp.src('./src/js/*.js')
        .pipe(js())
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('scss', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('./dist/css'))
})