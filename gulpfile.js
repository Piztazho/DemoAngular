var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var postcss = require('gulp-postcss');
//var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');

var connect = require('gulp-connect');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');


gulp.task('browserify', function() {
	// Grabs the app.js file
    return browserify('./app/main.js')
    	// bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('sass', function() {
	var processors = [
		autoprefixer({browser: ['last 2 versions']}),
	];
	return sass('sass/style.scss')
		//.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./public/css/'))
})


gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('app/**/*.js', ['browserify']);
	gulp.watch('**/*.scss', ['sass']);
});

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 4000
	});
});

gulp.task('default', ['connect', 'watch']);