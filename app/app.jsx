var React = require("react");
var ReactDOM = require("react-dom");
var Main = require("Main");

require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

require("style!css!applicationStyles");

ReactDOM.render(
  <Main/>,
  document.getElementById("app")
);
