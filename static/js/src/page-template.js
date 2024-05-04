'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement("div", { id: "logo" }),
        React.createElement(
          "span",
          { id: "header_text" },
          "\u0411\u041B\u041E\u0413"
        ),
        React.createElement(Log, null)
      );
    }
  }]);

  return Header;
}(React.Component);

var Log = function (_React$Component2) {
  _inherits(Log, _React$Component2);

  function Log(props) {
    _classCallCheck(this, Log);

    var _this2 = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, props));

    _this2.state = {
      c: false
    };
    return _this2;
  }

  _createClass(Log, [{
    key: "render",
    value: function render() {
      if (this.state.login) {
        return React.createElement("div", { id: "log_user", classname: "log_in" });
      }
      return React.createElement("div", { id: "log_user", classname: "log_in" });
    }
  }]);

  return Log;
}(React.Component);

var Footer = function (_React$Component3) {
  _inherits(Footer, _React$Component3);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "footer",
        null,
        React.createElement(
          "span",
          { id: "footer_text" },
          "\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043B"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var Main = function (_React$Component4) {
  _inherits(Main, _React$Component4);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { id: "main" });
    }
  }]);

  return Main;
}(React.Component);

var Page = function (_React$Component5) {
  _inherits(Page, _React$Component5);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(Main, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return Page;
}(React.Component);

var rootElement = document.querySelector('#root');
ReactDOM.render(React.createElement(Page, null), rootElement);