import {src, dest, series, parallel} from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import rename from 'gulp-rename';
import del from 'del';

const config = {
    mode: {
        css: {
            sprite: 'svg/sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprites.css'
                }
            }
        }
    }
};

const beginClean = () => {
    return del(['./app/temp/sprites/', './app/assets/images/sprites']);
};

const endClean = () => {
    return del('./app/temp/sprites/');
};

const copySpriteCSS = () => {
    return src('./app/temp/sprites/css/*.css')
        .pipe(rename('_sprites.css'))
        .pipe(dest('./app/assets/styles/modules'));
};

const copySpriteGraphic = () => {
    return src('./app/temp/sprites/css/**/*.svg')
        .pipe(dest('./app/assets/images/sprites'));
};

export const sprites = series(beginClean, () => {
    return src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(dest('./app/temp/sprites/'))
}, parallel(copySpriteCSS, copySpriteGraphic), endClean);

