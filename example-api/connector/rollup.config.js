import babel from 'rollup-plugin-babel';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const prodDestination = 'dist/example-api-connector.js';
const devDestination = '../../example-app/node_modules/example-api-connector/dist/example-api-connector.js';

export default {
    entry: 'src/index.js',
    dest: process.env.NODE_ENV === 'production' ? prodDestination : devDestination,
    format: 'cjs',
    external: ['redux-saga/effects', 'crypto'],
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