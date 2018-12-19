import {series} from 'gulp';
import {styles} from './gulp/task/styles.babel';
import {watch} from './gulp/task/watch.babel';
import {sprites} from './gulp/task/sprites.babel';

export {styles, watch, sprites};

module.exports.default = series(styles, watch);  





