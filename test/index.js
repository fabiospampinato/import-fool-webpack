
/* IMPORT */

import {describe} from 'fava';
import os from 'node:os';
import importFoolWebpack from '../dist/index.js';

/* MAIN */

describe ( 'Import Fool Webpack', it => {

  it ( 'works just like import ()', async t => {

    const result = importFoolWebpack ( 'node:os' );

    t.true ( result instanceof Promise );

    const {default: os2} = await result;

    t.is ( os.platform (), os2.platform () );

  });

});
