'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const concatCss = require('gulp-concat-css');
const uglifycss = require('gulp-uglifycss');


gulp.task('default', () => {
    return gulp.src(['js/!(app)*.js','js/app.js'])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
    return gulp.src('./style/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', () => {
    gulp.watch('./js/*.js', ['default']);
    gulp.watch('./style/*.css', ['default']);
})