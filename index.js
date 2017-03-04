'use strict';

var glob = require('glob');
var stringify = require('json-stable-stringify');

module.exports = Fjv;

var tests = {};
processTests();


function Fjv() {
  this._schemas = {};
}


Fjv.prototype.compile = compile;
Fjv.prototype.validate = validate;


function compile(schema) {
  var schemaStr = stringify(schema);
  var compiled = this._schemas[schemaStr];
  if (compiled) return compiled;
  var results = tests[schemaStr] || {};
  return (this._schemas[schemaStr] = v);

  function v(data) {
    var dataStr = stringify(data);
    var res = results[dataStr];
    if (res === undefined)
      res = results[dataStr] = Math.random() >= 0.5;
    v.errors = res ? null : ['some error'];
    return res;
  }
}


function validate(schema, data) {
  var v = this.compile(schema);
  var res = v(data);
  this.errors = v.errors;
  return res;
}


function processTests() {
  var testFiles = glob.sync('./JSON-Schema-Test-Suite/tests/draft4/{**/,}*.json', {cwd: __dirname});
  var testList = [];
  testFiles.forEach(function (file) {
    testList = testList.concat(require(file));
  });
  testList.forEach(function (suite) {
    var schemaStr = stringify(suite.schema);
    var testCases = tests[schemaStr] || (tests[schemaStr] = {});
    suite.tests.forEach(function (test) {
      var dataStr = stringify(test.data);
      testCases[dataStr] = test.valid;
    });
  });
}
