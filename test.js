/*!
 * lazy-glob <https://github.com/jonschlinkert/lazy-glob>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var lazyGlob = require('./');

describe('lazyGlob', function () {
  it('should:', function () {
    assert.equal(typeof lazyGlob, 'function');
    assert.equal(lazyGlob().hasOwnProperty('sync'), true);
  });
});
