import eslint from 'rollup-plugin-eslint'
import babel from 'rollup-plugin-babel'
import sass from 'rollup-plugin-sass'
import vue from 'rollup-plugin-vue'

import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import resolve from 'rollup-plugin-node-resolve'

export default {
    input: './src/main.js',
    output: {
        file: './build/js/app.bundle.js',
        name: 'app',
        format: 'iife'
    },
    plugins: [
        eslint(),
        globals(),
        builtins(),
        resolve(),
        babel({
            plugins: ['external-helpers'],
            externalHelpers: true
        }),
        {{#sass}}
        sass({
            output: './build/css/app.bundle.css',
            options: {
                indentedSyntax: true,
                outputStyle: 'expanded'
            }
        }),
        {{/sass}}
        vue()
    ]
}