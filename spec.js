'use strict';

var jsonSchemaTest = require('json-schema-test');
var glob = require('glob');
var assert = require('assert');
var Fjv = require('./index');

var fjv = new Fjv;

jsonSchemaTest(fjv, {
  description: 'Test suite',
  suites: {
    'draft-04': './JSON-Schema-Test-Suite/tests/draft4/{**/,}*.json'
  },
  cwd: __dirname,
  skip: [ 'optional/zeroTerminatedFloats' ],
  hideFolder: 'tests/'
});
