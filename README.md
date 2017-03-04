# fjv
Fake JSON-Schema validator

[![Build Status](https://travis-ci.org/epoberezkin/fjv.svg?branch=master)](https://travis-ci.org/epoberezkin/fjv)
[![npm version](https://badge.fury.io/js/fjv.svg)](https://www.npmjs.com/package/fjv)


## DO NOT USE IT!

It was created as an illustration that passing all tests from  the "official" [JSON-Schema-Test-Suite](https://github.com/json-schema-org/JSON-Schema-Test-Suite) means that the validator can be used - this one always returns `true` in all other cases, not covered by tests.

Use [Ajv](https://github.com/epoberezkin/ajv) instead.


## Install

```
npm install fjv
```


## Usage

The fastest validation call:

```javascript
var Fjv = require('fjv');
var fjv = new Fjv;
var validate = fjv.compile(schema);
var valid = validate(data);
if (!valid) console.log(validate.errors);
```

or with less code

```javascript
// ...
var valid = fjv.validate(schema, data);
if (!valid) console.log(fjv.errors);
// ...
```


## License

[MIT](https://github.com/epoberezkin/fjv/blob/master/LICENSE)
