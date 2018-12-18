import {src, series, parallel, watch as gwatch} from 'gulp';
import browserSync from 'browser-sync';
import {styles} from './styles.babel';

const server = browserSync.create();

const startServer = () => {
    server.init({
        notify: false,
        server: {
            baseDir: './app'
        }
    });
};

const watchHTML = () => {
    gwatch('./app/index.html', done => {
        server.reload();
        done();
    });
};

const injectCSS = () => {
    return src('./app/temp/styles/styles.css')
        .pipe(server.stream());
};

const watchCSS = () => {
    gwatch('./app/assets/styles/**/*.css', series(styles, injectCSS));
};

export const watch = parallel(startServer, watchHTML, watchCSS);

