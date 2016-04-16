/* eslint max-len: 0 */
/*
 * babel-plugin-transform-mill - index.js
 * Copyright(c) 2016 xeodou <xeodou@gmail.com>
 * MIT Licensed
 */

'use strict';

import template from 'babel-template';

let buildExports = template(`
module.exports = function(React, props) {
  DECLARE
  return BODY
};
`);

export default function ({ types: t }) {

  const assign = (obj) => {
    const keys = Object.keys(obj);
    if (keys.length === 0) return t.identifier('');
    return t.variableDeclaration('var',
      keys.map(k => {
        return t.variableDeclarator(t.identifier(k), t.memberExpression(
          t.identifier('props'),
          t.identifier(k)
        ));
      })
    );
  }

  let visitor = {
    Program: {
      exit(path) {
        let {node, scope} = path;
        let ex = buildExports({
          DECLARE: assign(scope.globals),
          BODY: node.body
        });
        node.directives = [t.stringLiteral('use strict;')]
        node.body = [ex];
      }
    }
  }

  return {
    inherits: require('babel-plugin-transform-react-jsx'),
    visitor
  };
}
