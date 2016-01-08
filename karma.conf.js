module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '.',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jspm','jasmine'],

        jspm: {
            config: 'config.js',
            packages: 'jspm_packages/',
            serveFiles: ['src/**/*.js'],
            loadFiles: ['test/**/*.js']
        },

        proxies: {
            '/src': '/base/src',
            '/test': '/base/test',
            '/jspm_packages': '/base/jspm_packages'
        },


        // list of files to exclude
        exclude: [
        ],

        files: [
            'node_modules/babel-polyfill/dist/polyfill.js'
        ],

        preprocessors: {
            'src/**/*.js': ['babel'],
            'test/**/*.js': ['babel']
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015', 'react', 'stage-0'],
                sourceMap: 'inline'
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS2'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        // files: [
        //     'node_modules/babel/node_modules/babel-core/browser-polyfill.js'
        // ],

        

    });
};