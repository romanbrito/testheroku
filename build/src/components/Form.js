'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      topic: '',
      startYear: '',
      endYear: ''
    }, _this.handleChange = function (key) {
      return function (event) {
        var state = {};
        state[key] = event.target.value;
        _this.setState(state);
      };
    }, _this.handleSubmit = function (event) {
      // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
      // clicking the button
      event.preventDefault();

      console.log('submit');
      console.log(_this.state);
      _this.props.getArtTerm(_this.state);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // When a user submits...


  _createClass(Form, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'h4',
              { className: '' },
              _react2.default.createElement(
                'strong',
                null,
                'Topic'
              )
            ),
            _react2.default.createElement('input', {
              value: this.state.topic,
              type: 'text',
              className: 'form-control',
              id: 'topic',
              onChange: this.handleChange('topic'),
              required: true
            }),
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'Start Date'
              )
            ),
            _react2.default.createElement('input', {
              value: this.state.startYear,
              type: 'date',
              className: 'form-control',
              id: 'start-Year',
              onChange: this.handleChange('startYear'),
              required: true, pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}'
            }),
            _react2.default.createElement(
              'h4',
              null,
              _react2.default.createElement(
                'strong',
                null,
                'End Date'
              )
            ),
            _react2.default.createElement('input', {
              value: this.state.endYear,
              type: 'date',
              className: 'form-control',
              id: 'end-Year',
              onChange: this.handleChange('endYear'),
              required: true, pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}'
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-primary',
                type: 'submit'
              },
              'Submit'
            )
          )
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;
//# sourceMappingURL=Form.js.map