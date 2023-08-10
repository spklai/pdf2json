/** @type {import("rollup".RollupOptions)} */
const config = {
    input: './pdfparser.js',
    output: {
        file: './pdfparser.cjs',
        format: 'cjs',
        exports: 'default',
        sourcemap: false,
    },
};

export default config;