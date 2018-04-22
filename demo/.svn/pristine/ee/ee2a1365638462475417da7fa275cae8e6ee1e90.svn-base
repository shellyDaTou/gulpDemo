'use strict';

var url = require('url');
var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");
var proxy = require('proxy-middleware');

var config = require('./gulp/config');

gulp.task('html', function () {
    return gulp.src(config.app + '/**/*.html')
        .pipe(gulp.dest(config.dist));
});

gulp.task('js', function () {
    return gulp.src(config.app + '/**/*.js')
        .pipe(gulp.dest(config.dist));
});

// 编译sass
gulp.task('sass', function () {
    return gulp.src(config.app + '/content/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.tmp + '/content/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('serve', function () {
    var proxyOptions = url.parse(config.apiUrl + '/k12-app');
    proxyOptions.route = '/third';
    browserSync.init({
        open: false,
        port: config.port,
        server: {
            baseDir: ["./src"]
        },
        serveStatic: [
            {
                route: '/node_modules',
                dir: 'node_modules'
            },
            {
                route: '/content/css',
                dir: 'tmp/content/css'
            }
        ],
        middleware: [proxy(proxyOptions)],
        injectChanges: true
    });

    gulp.watch(config.app + '/content/sass/**/*.scss', ['sass']);
});