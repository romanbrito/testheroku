'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../utils/helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saved = function (_Component) {
  _inherits(Saved, _Component);

  function Saved() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Saved);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Saved.__proto__ || Object.getPrototypeOf(Saved)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      articleID: ''
    }, _this.handleDelete = function (IDarticle) {
      console.log(IDarticle);

      // Set the parent to have the search term
      _this.props.deletefunc(IDarticle);
      //this.setState({ articleID: IDarticle });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Saved, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'h2',
          null,
          'Saved Articles'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'list-group' },
          this.props.savedArticles.map(function (item) {
            return _react2.default.createElement(
              'li',
              { key: item._id, className: 'list-group-item' },
              item.url,
              _react2.default.createElement('hr', null),
              item.title,
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-danger',
                  type: 'button',
                  onClick: function onClick() {
                    _this2.handleDelete(item._id);
                  }
                },
                'delete'
              ),
              _react2.default.createElement('hr', null),
              item.date
            );
          })
        )
      );
    }
  }]);

  return Saved;
}(_react.Component);

exports.default = Saved;
//# sourceMappingURL=Saved.js.map