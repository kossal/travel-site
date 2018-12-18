import {series} from 'gulp';
import {styles} from './gulp/task/styles.babel';
import {watch} from './gulp/task/watch.babel';

export {styles, watch};

module.exports.default = series(styles, watch);  





