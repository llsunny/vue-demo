/**
 * @file:
 * @author: llsunny
 * @lastEditor: llsunny
 * @update: 2022-11-08 17:45:41
 */
var path = require('path')
var gulp = require('gulp')
var cleanCSS = require('gulp-clean-css')
var cssWrap = require('gulp-css-wrap')
var sass = require('gulp-sass')(require('sass'))
gulp.task('css-wrap', function() {
  return gulp.src(path.resolve('./theme/index.css'))
    // .pipe(cssWrap({
    //   selector: '.custom-eb507e'
    // }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('src/theme/default'))
})

gulp.task('move-font', function() {
  return gulp
    .src(path.resolve('./theme/default/fonts/**'))
    .pipe(gulp.dest('src/theme/default/fonts'))
})

gulp.task('default', gulp.series('css-wrap', 'move-font'))
// gulp.task('sass', function() {
//   return gulp.src(path.resolve('./element-var.scss'))
//     .pipe(sass())
//     .pipe(gulp.dest('./'))
// })
// let watch = require('gulp-watch')
// gulp.task('wch', function() {
//   watch('./element-var.scss', gulp.series(['sass']))
// })
