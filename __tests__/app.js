'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tuba-react:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });
  it('creates server files', () => {
    assert.file(['server/index.js', 'server/app.js']);
  });
  it('creates public files', () => {
    assert.file('public/index.html');
  });
  it('creates client files', () => {
    assert.file([
      'client/src/index.jsx',
      'client/src/components/App.jsx'
    ]);
  });
  it('creates db files', () => {
    assert.file('db/index.js');
  });
  it('creates other root level files', () => {
    assert.file([
      'bower.json',
      'package.json',
      '.gitignore',
      '.bowerrc',
      'webpack.config.js'
    ]);
  });
  it('replaces .npmignore file', () => {
    assert.noFile('.npmignore');
  });
});
