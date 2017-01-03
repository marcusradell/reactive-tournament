module.exports =
webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	(function webpackMissingModule() { throw new Error("Cannot find module \"next/dist/client/webpack-hot-middleware-client\""); }());
	module.exports = __webpack_require__(49);


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(29);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(30);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(31);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(33);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(32);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(48);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(47);
	
	var _css2 = _interopRequireDefault(_css);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var Error = function (_React$Component) {
	  (0, _inherits3.default)(Error, _React$Component);
	
	  function Error() {
	    (0, _classCallCheck3.default)(this, Error);
	    return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Error, [{
	    key: 'render',
	    value: function render() {
	      var statusCode = this.props.statusCode;
	
	      var title = statusCode === 404 ? 'This page could not be found' : statusCode ? 'Internal Server Error' : 'An unexpected error has occurred';
	
	      return _react2.default.createElement('div', { className: styles.error }, _react2.default.createElement('div', { className: styles.text }, statusCode ? _react2.default.createElement('h1', { className: styles.h1 }, statusCode) : null, _react2.default.createElement('div', { className: styles.desc }, _react2.default.createElement('h2', { className: styles.h2 }, title, '.'))));
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function getInitialProps(_ref) {
	      var res = _ref.res,
	          xhr = _ref.xhr;
	
	      var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
	      return { statusCode: statusCode };
	    }
	  }]);
	  return Error;
	}(_react2.default.Component);
	
	exports.default = Error;
	
	var styles = {
	  error: (0, _css2.default)({
	    color: '#000',
	    background: '#fff',
	    top: 0,
	    bottom: 0,
	    left: 0,
	    right: 0,
	    position: 'absolute',
	    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
	    textAlign: 'center',
	    paddingTop: '20%'
	  }),
	
	  desc: (0, _css2.default)({
	    display: 'inline-block',
	    textAlign: 'left',
	    lineHeight: '49px',
	    height: '49px',
	    verticalAlign: 'middle'
	  }),
	
	  h1: (0, _css2.default)({
	    display: 'inline-block',
	    borderRight: '1px solid rgba(0, 0, 0,.3)',
	    margin: 0,
	    marginRight: '20px',
	    padding: '10px 23px',
	    fontSize: '24px',
	    fontWeight: 500,
	    verticalAlign: 'top'
	  }),
	
	  h2: (0, _css2.default)({
	    fontSize: '14px',
	    fontWeight: 'normal',
	    margin: 0,
	    padding: 0
	  })
	};
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/_error"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/_error") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL21uLy5udm0vdmVyc2lvbnMvbm9kZS92Ny4yLjEvbGliL34vbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz9iYzkyYjBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7S0FFcUI7Ozs7Ozs7Ozs7OEJBTVQ7V0FDQSxhQUFlLEtBQUssTUFDNUI7O1dBQU0sUUFBUSxlQUFlLE1BQ3pCLGlDQUNDLGFBQWEsMEJBRWxCOztjQUFPLHVDQUFLLFdBQVcsT0FDckIsZ0RBQUssV0FBVyxPQUNiLHFCQUFhLHNDQUFJLFdBQVcsT0FBWSxNQUEzQixjQUNkLDZDQUFLLFdBQVcsT0FDZCw4Q0FBSSxXQUFXLE9BQVksTUFBM0IsT0FJUDs7OzsyQ0FuQnFDO1dBQUE7V0FBQSxXQUNwQzs7V0FBTSxhQUFhLE1BQU0sSUFBSSxhQUFjLE1BQU0sSUFBSSxTQUNyRDtjQUFPLEVBQUUsWUFDVjs7OztHQUpnQyxnQkFBTTs7bUJBQXBCOztBQXVCckIsS0FBTTs7WUFHRjtpQkFDQTtVQUNBO2FBQ0E7V0FDQTtZQUNBO2VBQ0E7aUJBQ0E7Z0JBQ0E7aUJBR0Y7QUFaRSxJQURLOzs7Y0FlTDtnQkFDQTtpQkFDQTthQUNBO29CQUdGO0FBUEUsSUFESTs7O2NBVUo7a0JBQ0E7YUFDQTtrQkFDQTtjQUNBO2VBQ0E7aUJBQ0E7b0JBR0Y7QUFWRSxJQURFOzs7ZUFhRjtpQkFDQTthQUNBO2NBQVM7QUFIVCxJQURFO0FBaENKIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvX2Vycm9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlIGZyb20gJ25leHQvY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVzLCB4aHIgfSkge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6ICh4aHIgPyB4aHIuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGl0bGUgPSBzdGF0dXNDb2RlID09PSA0MDRcbiAgICAgID8gJ1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnXG4gICAgICA6IChzdGF0dXNDb2RlID8gJ0ludGVybmFsIFNlcnZlciBFcnJvcicgOiAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXMgb2NjdXJyZWQnKVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAge3N0YXR1c0NvZGUgPyA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaDF9PntzdGF0dXNDb2RlfTwvaDE+IDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjfT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaDJ9Pnt0aXRsZX0uPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGVycm9yOiBzdHlsZSh7XG4gICAgY29sb3I6ICcjMDAwJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGZvbnRGYW1pbHk6ICctYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFJvYm90bywgXCJTZWdvZSBVSVwiLCBcIkZpcmEgU2Fuc1wiLCBBdmVuaXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWYnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcGFkZGluZ1RvcDogJzIwJSdcbiAgfSksXG5cbiAgZGVzYzogc3R5bGUoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICBoZWlnaHQ6ICc0OXB4JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICB9KSxcblxuICBoMTogc3R5bGUoe1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwuMyknLFxuICAgIG1hcmdpbjogMCxcbiAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcxMHB4IDIzcHgnLFxuICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnXG4gIH0pLFxuXG4gIGgyOiBzdHlsZSh7XG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBtYXJnaW46IDAsXG4gICAgcGFkZGluZzogMFxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9tbi8ubnZtL3ZlcnNpb25zL25vZGUvdjcuMi4xL2xpYi9+L25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanMiXSwic291cmNlUm9vdCI6IiJ9