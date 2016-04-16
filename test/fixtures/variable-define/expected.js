"use strict;"

module.exports = function (React, props) {
  var post = props.post;
  return React.createElement(
    "div",
    null,
    post.name
  );
};
