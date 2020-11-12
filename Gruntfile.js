const { task } = require('grunt');
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
          './dist/dist/main.css': './css/*.scss'
        }
      }
    }, 
    watch:{
      files:['css/*.scss'],
      tasks:['css']
    },

    browserSync:{
      dev:{
        bsFiles:{
          src:[
            'css/*.css',
            '*.html',
            'js/.js'
          ]
        },
        options:{
          watchTash:true,
          server:{
            baseDir:'./'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('css', ['sass'])
  grunt.registerTask('default', ['browserSync', 'watch'])
};
