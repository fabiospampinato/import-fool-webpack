
/* IMPORT */

import type {Import} from './types';

/* MAIN */

const importFoolWebpack = new Function ( 'url', 'return import ( url );' ) as Import;

/* EXPORT */

export default importFoolWebpack;
