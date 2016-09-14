module.exports = function(grunt) {

    var babel = require('rollup-plugin-babel'),
        nodeResolve = require('rollup-plugin-node-resolve'),
        commonJs = require('rollup-plugin-commonjs'),
        replace = require('rollup-plugin-replace');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserSync: {
            bsFiles: {
                src: ['_public/css/*.css', '_public/js/*.js']
            },
            options: {
                server: {
                    baseDir: '_public',
                    directory: true
                },
                watchTask: true
            }
        },

        sass: {
            options: {
                sourceMap: 'none',
                outputStyle: 'compressed'
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '_source/css',
                        src: ['app.scss'],
                        dest: '_public/css',
                        ext: '.css'
                    }
                ]
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', '> 1%']
                    })
                ]
            },
            dist: {
                src: '_public/css/*.css'
            }
        },

        mochaTest: {
            options: {
                reporter: 'landing',
                require: ['babel-register']
            },
            src: ['_source/**/*.spec.js', '_source/**/*.spec.jsx']
        },

        rollup: {
            options: {
                plugins: function() {
                    return [
                        nodeResolve({ jsnext: true }),
                        commonJs({
                            include: 'node_modules/**'
                        }),
                        replace({
                            'process.env.NODE_ENV': JSON.stringify('production')
                        }),
                        babel({
                            babelrc: false,
                            exclude: './node_modules/**',
                            presets: [
                                ['es2015', { 'modules': false }],
                                'react'
                            ],
                            plugins: [
                                'external-helpers'
                            ]
                        })
                    ];
                }
            },
            files: {
                'dest': '_public/js/app.js',
                'src': '_source/js/app.jsx'
            }
        },

        watch: {
            scss: {
                files: ['**/*.scss'],
                tasks: ['sass', 'postcss']
            },
            js: {
                files: ['_source/js/**/*.js',
                        '_source/js/**/*.jsx',
                        '!_source/js/**/*.spec.js',
                        '!_source/js/**/*.spec.jsx'],
                tasks: ['rollup']
            },
            specs: {
                files: ['_source/js/**/*.spec.js',
                        '_source/js/**/*.spec.jsx'],
                tasks: ['mochaTest']
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.registerTask('default', ['sass', 'postcss', 'rollup']);
    grunt.registerTask('dev', ['browserSync', 'watch']);
    grunt.registerTask('qa', ['mochaTest']);
};
