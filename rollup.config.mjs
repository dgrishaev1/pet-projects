import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const config = [
    {
        input: 'src/package.ts',
        output: {
            dir: 'dist',
            format: 'esm',
        },
        external: ['react', 'bem-cn'],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json',
            }),
            postcss({
                extract: true,
                use: ['sass'],
                // minimize: true, // todo(min)
            }),
            url(),
            svgr({ icon: true }),
            // terser(), // todo(min)
        ],
    },
    {
        input: 'dist/types/package.d.ts',
        output: [{ file: 'dist/package.d.ts', format: 'esm' }],
        external: [/\.(css|scss)$/],
        plugins: [dts()],
    },
];

export default config;
