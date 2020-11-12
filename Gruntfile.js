const sass = require('node-sass');

module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          './css/main.css': './css/*.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('css',['sass'])
};
