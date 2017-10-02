'use strict';
var generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = generator.extend({
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.name
      }
    ]).then(answers => {
      this.log('app name', answers);
    });
  },
  writing: {
    config: function() {
      this.fs.copy(this.templatePath('.npmignore'), this.destinationPath('.npmignore'));
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          name: this.props
        }
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(this.templatePath('.gitignore'), this.destinationPath('.gitignore'));
    },
    app: function() {
      this.fs.copy(
        this.templatePath('_server/index.js'),
        this.destinationPath('server/index.js')
      );
      this.fs.copy(
        this.templatePath('_server/app.js'),
        this.destinationPath('server/app.js')
      );
      this.fs.copy(
        this.templatePath('_public/index.html'),
        this.destinationPath('public/index.html')
      );
      this.fs.copy(
        this.templatePath('_client/_src/index.jsx'),
        this.destinationPath('client/src/index.jsx')
      );
      this.fs.copy(
        this.templatePath('_client/_src/_components/App.jsx'),
        this.destinationPath('client/src/components/App.jsx')
      );
    }
  },
  install: function() {
    this.installDependencies();
  }
});
