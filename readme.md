# Import Fool Webpack

Use dynamic `import()` without webpack finding out.

## Install

```sh
npm install --save import-fool-webpack
```

## Usage

```ts
import importFoolWebpack from 'import-fool-webpack';

const os = await importFoolWebpack ( 'node:os' ); // It's hust like "import ( 'node:os' )";

console.log ( os.platform () ); // => 'darwin'
```

## License

MIT © Fabio Spampinato
