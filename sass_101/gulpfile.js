//gulp interpreta 

const gulp = require('gulp'); //require es para traer una dependencia
const uglify = require('gulp-uglify'); 
const sass = require('gulp-sass');

gulp.task('message', function(){
    return console.log('gulp is running');
});

// como crear dist files
gulp.task('htmlfiles', function() {
    gulp.src('src/*.html').pipe(gulp.dest('dist')); //dist (o static o public) es la carpeta de todos los archivos que va a interpretar el browset
});

gulp.task('minify', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function(){
    gulp.src('src/sass/style.scss').pipe(sass().on('error',sass.logError)).pipe(gulp.dest('dist/css'));
});


//watch es la acción (método) de gulp que refreshea los documentos de source 
gulp.task('watch', function(){
	gulp.watch('src/js/*.js',['minify']); 
	gulp.watch('src/sass/*.scss',['sass']);
	gulp.watch('src/*.html',['htmlfiles']);
});