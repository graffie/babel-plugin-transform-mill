"use strict;"

module.exports = function (React, props) {
  var onClick = props.onClick,
      post = props.post;
  return React.createElement(
    "div",
    { onClick: onClick },
    post.name
  );
};
