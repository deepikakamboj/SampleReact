module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-serve');

    srcDir = 'src/client';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || srcDir,
            dist: 'src/client/webapp'
        },

        clean: {
            js: {
                files: [
                    {
                        dot: true,
                        src: ["<%= yeoman.dist %>/*.js"]
                    }
                ]
            },
            css: {
                files: [
                    {
                        dot: true,
                        src: ["<%= yeoman.dist %>/css/*"]
                    }
                ]
            },
            html: {
                files: [
                    {
                        dot: true,
                        src: ["<%= yeoman.dist %>/*.html"]
                    }
                ]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: "<%= yeoman.app %>",
                    src: ['css/*', 'index.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/client/js/*'],
                dest: 'src/client/webapp/main.js',
            },
        },

        serve: {
            options: {
                port: 1234,
                path: 'src/client/webapp/index.html'
            }
        }


    });


    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy', 'concat']);

};