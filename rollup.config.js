/** @type {import("rollup".RollupOptions)} */
const config = {
    input: './pdfparser.js',
    output: {
        file: './dist/pdfparser.cjs',
        format: 'cjs',
        exports: 'default',
        sourcemap: true,
    },
};

export default config;
