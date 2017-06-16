'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactBootstrap = require('react-bootstrap');

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Saved = require('./Saved');

var _Saved2 = _interopRequireDefault(_Saved);

var _Results = require('./Results');

var _Results2 = _interopRequireDefault(_Results);

var _helpers = require('../utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// could move to routes


var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Main);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      saved: [],
      searchTerm: {},
      results: [],
      deleteArticleID: ''
    }, _this.getArtTerm = function (Term) {
      console.log(Term);
      // Run query for the article
      _helpers2.default.runQuery(Term).then(function (data) {
        if (data !== _this.state.results) {
          _this.setState({ results: data });
          console.log('Articles');
          console.log(_this.state.results);
        }
      });
    }, _this.deleteArticle = function (articleID) {

      console.log(articleID);
      _helpers2.default.deleteArticle(articleID);

      _helpers2.default.getSaved().then(function (response) {
        if (response !== _this.state.saved) {
          _this.setState({
            saved: response.data
          });
          console.log("saved after delete " + _this.state.saved);
        }
      });
    }, _this.saveArticle = function (articleID) {

      console.log(articleID);

      _helpers2.default.getSaved().then(function (response) {
        if (response !== _this.state.saved) {
          _this.setState({
            saved: response.data
          });
          console.log("saved after saved " + _this.state.saved);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Main, [{
    key: 'componentDidMount',


    // The moment the page renders get the saved articles
    value: function componentDidMount() {
      var _this2 = this;

      // Get saved articles.
      _helpers2.default.getSaved().then(function (response) {
        //console.log(response);
        if (response !== _this2.state.saved) {
          //console.log('saved', response.data);
          _this2.setState({ saved: response.data });
        }
      }); //.bind(this)
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      // this avoids continuous calling to api

      if (prevState.saved.map(function (item) {
        return item._id;
      }).join() !== this.state.saved.map(function (item) {
        return item._id;
      }).join()) {
        console.log(prevState.saved.map(function (item) {
          return item._id;
        }).join() + " ---- " + this.state.saved.map(function (item) {
          return item._id;
        }).join());
        // Get saved articles.
        _helpers2.default.getSaved().then(function (response) {
          console.log(response);
          if (response !== _this3.state.saved) {
            _this3.setState({ saved: response.data });
            console.log('saved', _this3.state.saved);
          }
        }); //.bind(this)
      }
    }

    // This function allows childrens to update the parent saved
    // search articles in nyt articles


    // This function allows childrens to update the parent saved
    // search term

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          _reactBootstrap.Jumbotron,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'New York Times Article Scrubber'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Search for and annotate articles of interest!'
          )
        ),
        _react2.default.createElement(_Form2.default, { getArtTerm: this.getArtTerm }),
        _react2.default.createElement(_Results2.default, {
          results: this.state.results, savefunc: this.saveArticle
        }),
        _react2.default.createElement(_Saved2.default, { savedArticles: this.state.saved, deletefunc: this.deleteArticle })
      );
    }
  }]);

  return Main;
}(_react.Component);

;

exports.default = Main;
//# sourceMappingURL=Main.js.map