# babel-plugin-transform-mill

This plugin is build for [Mill Blog](https://graffie.github.io/mill/#/).

## Example

**In**

```html
<div>
  <span onClick={onClick}>
    {post.name}
    {a.b}
  </span>
</div>
```

**Out**

```javascript
"use strict;"

module.exports = function (React, props) {
  var onClick = props.onClick,
      post = props.post,
      a = props.a;
  return React.createElement("div", null, React.createElement("span", {
    onClick: onClick
  }, post.name, a.b));
};
```

## Installation

```sh
$ npm install babel-plugin-transform-mill
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-mill"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-transform-mill script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-mill"]
});
```

## LICENSE

[LICENSE](LICENSE)
