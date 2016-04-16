/*
 * babel-plugin-transform-mill - index.js
 * Copyright(c) 2016 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict';

import assert from 'assert';
import { transformFileSync } from 'babel-core';
import fs from 'fs';
import path from 'path';
import plugin from '../src/index';

describe('Mill transform builds', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');

  fs.readdirSync(fixturesDir).map(caseName => {
    const fixtureDir = path.join(fixturesDir, caseName);
    const actualFile = path.join(fixtureDir, 'actual.js');
    const expectedFile = path.join(fixtureDir, 'expected.js');

    it(`should work with ${caseName.split('-').join(' ')}`, () => {
      const actual = transformFileSync(actualFile, {
        'plugins': [plugin]
      }).code;
      const expected = fs.readFileSync(expectedFile, 'utf8');
      assert.equal(actual.trim(), expected.trim());
    });
  });
});
