import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/index.js',
    dest: '../../example-app/src/lib/api-connector/dist/api-connector.js',
    format: 'cjs',
    plugins:[
        babel({

        })
    ]
};