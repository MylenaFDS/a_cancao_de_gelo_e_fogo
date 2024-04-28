//Importações:

const gulp = require('gulp'); // Importa o pacote Gulp para automatização de tarefas
const sass = require('gulp-sass')(require('sass')); // Importa o plugin Gulp Sass para compilar arquivos SCSS
const imagemin = require('gulp-imagemin'); // Importa o plugin Gulp Imagemin para otimizar imagens

//Funções:

function styles() {
    return gulp.src('./src/styles/*.scss') // Seleciona todos os arquivos SCSS na pasta styles
        .pipe(sass({ outputStyle: 'compressed' })) // Compila os arquivos SCSS para CSS comprimido
        .pipe(gulp.dest('./dist/css')); // Salva os arquivos compilados na pasta css dentro de dist
}

function images() {
    return gulp.src('./src/images/**/*') // Seleciona todas as imagens na pasta images e suas subpastas
        .pipe(imagemin()) // Otimiza as imagens
        .pipe(gulp.dest('./dist/images')); // Salva as imagens otimizadas na pasta images dentro de dist
}

//Exportações:

exports.default = gulp.parallel(styles, images); // Define a tarefa padrão que executa as funções styles e images em paralelo

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); // Monitora mudanças nos arquivos SCSS e executa a função styles
}
