import babel from 'rollup-plugin-babel';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'src/index.js',
    dest: 'dist/example-api-connector.js',
    format: 'cjs',
    plugins:[
        resolve(),
        commonjs({
            include: 'node_modules/**'
        }),
        babel({
            runtimeHelpers: true,
            externalHelpers: true,
            exclude: 'node_modules/**'
        }),
    ]
};