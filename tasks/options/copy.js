module.exports = function(config) {
  return {
    // copy source to temp, we will minify in place for the dist build
    everything_but_less_to_temp: {
      cwd: '<%= srcDir %>',
      expand: true,
      src: ['**/*', '!**/*.less'],
      dest: '<%= tempDir %>'
    },

    public_to_gen: {
      cwd: '<%= srcDir %>',
      expand: true,
      src: ['**/*', '!**/*.less'],
      dest: '<%= genDir %>'
    },

    node_modules: {
      cwd: './node_modules',
      expand: true,
      src: [
        'angular/angular.js',
        'angular/package.json',
        'angular-mocks/angular-mocks.js',
        'angular-mocks/package.json',
        'angular-route/*.js',
        'angular-route/package.json',
        'angular-sanitize/*.js',
        'angular-sanitize/package.json',
        'jquery/dist/jquery.js',
        'jquery/package.json',
        'lodash/**/*.js',
        'lodash/package.json',
        'ace-builds/src-noconflict/ace.js',
        'ace-builds/src-noconflict/ext-language_tools.js',
        'ace-builds/package.json',
        'eventemitter3/*.js',
        'eventemitter3/package.json',
        'systemjs/dist/*.js',
        'systemjs/package.json',
        'es6-promise/**/*',
        'es6-shim/*.js',
        'es6-shim/package.json',
        'rxjs/**/*.js',
        'rxjs/**/*.d.ts',
        'rxjs/package.json',
        'tether/**/*.s',
        'tether-drop/**/*',
        'tether-drop/**/*',
        'remarkable/dist/*',
        'remarkable/package.json',
        'mousetrap/**/*.js',
        'mousetrap/package.json',
        'react/**/*.js',
        'react/package.json',
        'react-dom/**/*.js',
        'react-dom/package.json',
        'ngreact/ngReact.js',
        'ngreact/package.json',
        'angular-bindonce/bindonce.js',
        'angular-bindonce/package.json',
        'angular-native-dragdrop/draganddrop.js',
        'angular-native-dragdrop/package.json',
        'clipboard/dist/clipboard.js',
        'clipboard/package.json',
        'react-test-renderer/**/*.js',
        'react-test-renderer/package.json',
        'file-saver/*.js',
        'file-saver/*.json',
      ],
      dest: '<%= srcDir %>/vendor/npm'
    }
  };
};
