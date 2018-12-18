import{src, dest} from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssvars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssImport from 'postcss-import';
import mixins from 'postcss-mixins';
import conditionals from 'postcss-conditionals';
import sourcemaps from 'gulp-sourcemaps';

const postCssPlugins = [
    cssImport,
    mixins,
    cssvars,
    conditionals,
    nested,
    autoprefixer
];

export const styles = () => {

    return src('./app/assets/styles/styles.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(postCssPlugins))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(sourcemaps.write())
        .pipe(dest('./app/temp/styles'));

};

