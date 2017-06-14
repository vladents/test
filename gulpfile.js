var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
     .pipe(sass({includePaths: require('node-bourbon').includePaths}))
     .pipe(gulp.dest('app/css'))
     .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('gulp-cssmin', function () {
    gulp.src('app/css/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['browser-sync', 'sass', 'gulp-cssmin'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/css/main.css', browserSync.reload);
    gulp.watch('app/css/main.css', ['gulp-cssmin']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});