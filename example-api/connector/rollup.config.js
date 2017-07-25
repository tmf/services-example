import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    dest: 'dist/example-api-connector.js',
    format: 'cjs',
    plugins:[
        babel({

        })
    ]
};