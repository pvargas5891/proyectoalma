'use strict';
module.exports = function (grunt) {
    
    grunt.loadNpmTasks('grunt-connect');

    grunt.initConfig({
        connect: {
           server: {
                port: 9090                
            }
        }
    });

    grunt.registerTask('live', [
        'connect:server'
    ]);

};
