webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(178);

	var _Home = __webpack_require__(216);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: _Home.store },
	    _react2.default.createElement(_Home2.default, null)
	), document.getElementById('app'));

	/*import React from 'react';
	import {render} from 'react-dom';
	import { createStore,bindActionCreators } from 'redux';
	import { Provider ,connect} from 'react-redux';

	//action
	function changeText(){
	    return {
	        type:'CHANGE_TEXT'
	    }
	}

	function buttonClick(){
	    return {
	        type:'BUTTON_CLICK'
	    }
	}

	//reducer
	const initialState = {
	    text: 'Hello'
	}
	function myApp(state = initialState, action) {
	    switch (action.type) {
	        case 'CHANGE_TEXT':
	            return {
	                text:state.text=='Hello'?'Stark':'Hello'
	            }
	        case 'BUTTON_CLICK':
	            return {
	                text: 'You just click button'
	            }
	        default:
	          return {
	            text:'Hello'
	        };
	    }
	}

	//store
	let store = createStore(myApp);


	class Hello extends React.Component{
	    constructor(props) {
	        super(props);
	        this.handleClick = this.handleClick.bind(this);
	    }

	    handleClick(){
	        this.props.actions.changeText();
	    }

	    render() {
	        return (
	            <h1 onClick={this.handleClick}> {this.props.text} </h1>
	        );
	    }
	}

	class Change extends React.Component{
	    constructor(props) {
	        super(props);
	        this.handleClick = this.handleClick.bind(this);
	    }

	    handleClick(){
	        this.props.actions.buttonClick();
	    }

	    render() {
	        return (
	            <button onClick={this.handleClick} >change</button>
	        );
	    }
	}

	class App extends React.Component{

	    constructor(props) {
	        super(props);
	    }

	    render() {
	        const { actions, text} = this.props;
	        return (
	            <div>
	                <Hello actions={actions} text={text}/>
	                <Change actions={actions}/>
	            </div>
	        );
	    }
	}

	function mapStateToProps(state) {
	  return { text: state.text }
	}

	function mapDispatchToProps(dispatch){
	    return{
	        actions : bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
	    }
	}

	App = connect(mapStateToProps,mapDispatchToProps)(App)

	render(
	    <Provider store={store}>
	        <App />
	    </Provider>,
	    document.getElementById('app')
	)*/

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.connectAdvanced = exports.Provider = undefined;

	var _Provider = __webpack_require__(179);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connectAdvanced = __webpack_require__(182);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _connect = __webpack_require__(186);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Provider = _Provider2.default;
	exports.connectAdvanced = _connectAdvanced2.default;
	exports.connect = _connect2.default;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _react = __webpack_require__(1);

	var _PropTypes = __webpack_require__(180);

	var _warning = __webpack_require__(181);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store, storeSubscription: null };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports.default = Provider;


	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _PropTypes.storeShape.isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _PropTypes.storeShape.isRequired,
	  storeSubscription: _PropTypes.subscriptionShape
	};
	Provider.displayName = 'Provider';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.storeShape = exports.subscriptionShape = undefined;

	var _react = __webpack_require__(1);

	var subscriptionShape = exports.subscriptionShape = _react.PropTypes.shape({
	  trySubscribe: _react.PropTypes.func.isRequired,
	  tryUnsubscribe: _react.PropTypes.func.isRequired,
	  notifyNestedSubs: _react.PropTypes.func.isRequired,
	  isSubscribed: _react.PropTypes.func.isRequired
	});

	var storeShape = exports.storeShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },

/***/ 181:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = connectAdvanced;

	var _hoistNonReactStatics = __webpack_require__(183);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(184);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(1);

	var _Subscription = __webpack_require__(185);

	var _Subscription2 = _interopRequireDefault(_Subscription);

	var _PropTypes = __webpack_require__(180);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var hotReloadingVersion = 0;
	var dummyState = {};
	function noop() {}
	function makeSelectorStateful(sourceSelector, store) {
	  // wrap the selector in an object that tracks its results between runs.
	  var selector = {
	    run: function runComponentSelector(props) {
	      try {
	        var nextProps = sourceSelector(store.getState(), props);
	        if (nextProps !== selector.props || selector.error) {
	          selector.shouldComponentUpdate = true;
	          selector.props = nextProps;
	          selector.error = null;
	        }
	      } catch (error) {
	        selector.shouldComponentUpdate = true;
	        selector.error = error;
	      }
	    }
	  };

	  return selector;
	}

	function connectAdvanced(
	/*
	  selectorFactory is a func that is responsible for returning the selector function used to
	  compute new props from state, props, and dispatch. For example:
	     export default connectAdvanced((dispatch, options) => (state, props) => ({
	      thing: state.things[props.thingId],
	      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
	    }))(YourComponent)
	   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
	  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
	  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
	   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
	  props. Do not use connectAdvanced directly without memoizing results between calls to your
	  selector, otherwise the Connect component will re-render on every state or props change.
	*/
	selectorFactory) {
	  var _contextTypes, _childContextTypes;

	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$getDisplayName = _ref.getDisplayName,
	      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
	    return 'ConnectAdvanced(' + name + ')';
	  } : _ref$getDisplayName,
	      _ref$methodName = _ref.methodName,
	      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
	      _ref$renderCountProp = _ref.renderCountProp,
	      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
	      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
	      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
	      _ref$storeKey = _ref.storeKey,
	      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
	      _ref$withRef = _ref.withRef,
	      withRef = _ref$withRef === undefined ? false : _ref$withRef,
	      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

	  var subscriptionKey = storeKey + 'Subscription';
	  var version = hotReloadingVersion++;

	  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
	  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

	  return function wrapWithConnect(WrappedComponent) {
	    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

	    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	    var displayName = getDisplayName(wrappedComponentName);

	    var selectorFactoryOptions = _extends({}, connectOptions, {
	      getDisplayName: getDisplayName,
	      methodName: methodName,
	      renderCountProp: renderCountProp,
	      shouldHandleStateChanges: shouldHandleStateChanges,
	      storeKey: storeKey,
	      withRef: withRef,
	      displayName: displayName,
	      wrappedComponentName: wrappedComponentName,
	      WrappedComponent: WrappedComponent
	    });

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.state = {};
	        _this.renderCount = 0;
	        _this.store = props[storeKey] || context[storeKey];
	        _this.propsMode = Boolean(props[storeKey]);
	        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

	        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

	        _this.initSelector();
	        _this.initSubscription();
	        return _this;
	      }

	      Connect.prototype.getChildContext = function getChildContext() {
	        var _ref2;

	        // If this component received store from props, its subscription should be transparent
	        // to any descendants receiving store+subscription from context; it passes along
	        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
	        // Connect to control ordering of notifications to flow top-down.
	        var subscription = this.propsMode ? null : this.subscription;
	        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        if (!shouldHandleStateChanges) return;

	        // componentWillMount fires during server side rendering, but componentDidMount and
	        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
	        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
	        // To handle the case where a child component may have triggered a state change by
	        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
	        // re-render.
	        this.subscription.trySubscribe();
	        this.selector.run(this.props);
	        if (this.selector.shouldComponentUpdate) this.forceUpdate();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.selector.run(nextProps);
	      };

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return this.selector.shouldComponentUpdate;
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.subscription) this.subscription.tryUnsubscribe();
	        this.subscription = null;
	        this.notifyNestedSubs = noop;
	        this.store = null;
	        this.selector.run = noop;
	        this.selector.shouldComponentUpdate = false;
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
	        return this.wrappedInstance;
	      };

	      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
	        this.wrappedInstance = ref;
	      };

	      Connect.prototype.initSelector = function initSelector() {
	        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
	        this.selector = makeSelectorStateful(sourceSelector, this.store);
	        this.selector.run(this.props);
	      };

	      Connect.prototype.initSubscription = function initSubscription() {
	        if (!shouldHandleStateChanges) return;

	        // parentSub's source should match where store came from: props vs. context. A component
	        // connected to the store via props shouldn't use subscription from context, or vice versa.
	        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
	        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

	        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
	        // the middle of the notification loop, where `this.subscription` will then be null. An
	        // extra null check every change can be avoided by copying the method onto `this` and then
	        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
	        // listeners logic is changed to not call listeners that have been unsubscribed in the
	        // middle of the notification loop.
	        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
	      };

	      Connect.prototype.onStateChange = function onStateChange() {
	        this.selector.run(this.props);

	        if (!this.selector.shouldComponentUpdate) {
	          this.notifyNestedSubs();
	        } else {
	          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
	          this.setState(dummyState);
	        }
	      };

	      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
	        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
	        // needs to notify nested subs. Once called, it unimplements itself until further state
	        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
	        // a boolean check every time avoids an extra method call most of the time, resulting
	        // in some perf boost.
	        this.componentDidUpdate = undefined;
	        this.notifyNestedSubs();
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return Boolean(this.subscription) && this.subscription.isSubscribed();
	      };

	      Connect.prototype.addExtraProps = function addExtraProps(props) {
	        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
	        // make a shallow copy so that fields added don't leak to the original selector.
	        // this is especially important for 'ref' since that's a reference back to the component
	        // instance. a singleton memoized selector would then be holding a reference to the
	        // instance, preventing the instance from being garbage collected, and that would be bad
	        var withExtras = _extends({}, props);
	        if (withRef) withExtras.ref = this.setWrappedInstance;
	        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
	        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
	        return withExtras;
	      };

	      Connect.prototype.render = function render() {
	        var selector = this.selector;
	        selector.shouldComponentUpdate = false;

	        if (selector.error) {
	          throw selector.error;
	        } else {
	          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
	        }
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.WrappedComponent = WrappedComponent;
	    Connect.displayName = displayName;
	    Connect.childContextTypes = childContextTypes;
	    Connect.contextTypes = contextTypes;
	    Connect.propTypes = contextTypes;

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        // We are hot reloading!
	        if (this.version !== version) {
	          this.version = version;
	          this.initSelector();

	          if (this.subscription) this.subscription.tryUnsubscribe();
	          this.initSubscription();
	          if (shouldHandleStateChanges) this.subscription.trySubscribe();
	        }
	      };
	    }

	    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 185:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// encapsulates the subscription logic for connecting a component to the redux store, as
	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	var CLEARED = null;
	var nullListeners = {
	  notify: function notify() {}
	};

	function createListenerCollection() {
	  // the current/next pattern is copied from redux's createStore code.
	  // TODO: refactor+expose that code to be reusable here?
	  var current = [];
	  var next = [];

	  return {
	    clear: function clear() {
	      next = CLEARED;
	      current = CLEARED;
	    },
	    notify: function notify() {
	      var listeners = current = next;
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i]();
	      }
	    },
	    subscribe: function subscribe(listener) {
	      var isSubscribed = true;
	      if (next === current) next = current.slice();
	      next.push(listener);

	      return function unsubscribe() {
	        if (!isSubscribed || current === CLEARED) return;
	        isSubscribed = false;

	        if (next === current) next = current.slice();
	        next.splice(next.indexOf(listener), 1);
	      };
	    }
	  };
	}

	var Subscription = function () {
	  function Subscription(store, parentSub, onStateChange) {
	    _classCallCheck(this, Subscription);

	    this.store = store;
	    this.parentSub = parentSub;
	    this.onStateChange = onStateChange;
	    this.unsubscribe = null;
	    this.listeners = nullListeners;
	  }

	  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
	    this.trySubscribe();
	    return this.listeners.subscribe(listener);
	  };

	  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
	    this.listeners.notify();
	  };

	  Subscription.prototype.isSubscribed = function isSubscribed() {
	    return Boolean(this.unsubscribe);
	  };

	  Subscription.prototype.trySubscribe = function trySubscribe() {
	    if (!this.unsubscribe) {
	      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

	      this.listeners = createListenerCollection();
	    }
	  };

	  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
	    if (this.unsubscribe) {
	      this.unsubscribe();
	      this.unsubscribe = null;
	      this.listeners.clear();
	      this.listeners = nullListeners;
	    }
	  };

	  return Subscription;
	}();

	exports.default = Subscription;

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createConnect = createConnect;

	var _connectAdvanced = __webpack_require__(182);

	var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

	var _shallowEqual = __webpack_require__(187);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _mapDispatchToProps = __webpack_require__(188);

	var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

	var _mapStateToProps = __webpack_require__(212);

	var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

	var _mergeProps = __webpack_require__(213);

	var _mergeProps2 = _interopRequireDefault(_mergeProps);

	var _selectorFactory = __webpack_require__(214);

	var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/*
	  connect is a facade over connectAdvanced. It turns its args into a compatible
	  selectorFactory, which has the signature:

	    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
	  
	  connect passes its args to connectAdvanced as options, which will in turn pass them to
	  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

	  selectorFactory returns a final props selector from its mapStateToProps,
	  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
	  mergePropsFactories, and pure args.

	  The resulting final props selector is called by the Connect component instance whenever
	  it receives new props or store state.
	 */

	function match(arg, factories, name) {
	  for (var i = factories.length - 1; i >= 0; i--) {
	    var result = factories[i](arg);
	    if (result) return result;
	  }

	  return function (dispatch, options) {
	    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
	  };
	}

	function strictEqual(a, b) {
	  return a === b;
	}

	// createConnect with default args builds the 'official' connect behavior. Calling it with
	// different options opens up some testing and extensibility scenarios
	function createConnect() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	      _ref$connectHOC = _ref.connectHOC,
	      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
	      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
	      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
	      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
	      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
	      _ref$mergePropsFactor = _ref.mergePropsFactories,
	      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
	      _ref$selectorFactory = _ref.selectorFactory,
	      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
	        _ref2$pure = _ref2.pure,
	        pure = _ref2$pure === undefined ? true : _ref2$pure,
	        _ref2$areStatesEqual = _ref2.areStatesEqual,
	        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
	        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
	        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
	        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
	        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
	        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
	        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
	        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

	    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
	    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
	    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

	    return connectHOC(selectorFactory, _extends({
	      // used in error messages
	      methodName: 'connect',

	      // used to compute Connect's displayName from the wrapped component's displayName.
	      getDisplayName: function getDisplayName(name) {
	        return 'Connect(' + name + ')';
	      },

	      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
	      shouldHandleStateChanges: Boolean(mapStateToProps),

	      // passed through to selectorFactory
	      initMapStateToProps: initMapStateToProps,
	      initMapDispatchToProps: initMapDispatchToProps,
	      initMergeProps: initMergeProps,
	      pure: pure,
	      areStatesEqual: areStatesEqual,
	      areOwnPropsEqual: areOwnPropsEqual,
	      areStatePropsEqual: areStatePropsEqual,
	      areMergedPropsEqual: areMergedPropsEqual

	    }, extraOptions));
	  };
	}

	exports.default = createConnect();

/***/ },

/***/ 187:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = shallowEqual;
	var hasOwn = Object.prototype.hasOwnProperty;

	function is(x, y) {
	  if (x === y) {
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    return x !== x && y !== y;
	  }
	}

	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) return true;

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) return false;

	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
	exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
	exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

	var _redux = __webpack_require__(189);

	var _wrapMapToProps = __webpack_require__(210);

	function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
	  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
	}

	function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
	  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return { dispatch: dispatch };
	  }) : undefined;
	}

	function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
	  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
	    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
	  }) : undefined;
	}

	exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(190);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(205);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(207);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(208);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(209);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(206);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(191);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(201);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(192),
	    getPrototype = __webpack_require__(198),
	    isObjectLike = __webpack_require__(200);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(193),
	    getRawTag = __webpack_require__(196),
	    objectToString = __webpack_require__(197);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(194);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(195);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },

/***/ 195:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(193);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },

/***/ 197:
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(199);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },

/***/ 199:
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },

/***/ 200:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202);


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(204);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var root; /* global window */


	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(203)(module)))

/***/ },

/***/ 203:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 204:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(190);

	var _isPlainObject = __webpack_require__(191);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(206);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 206:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },

/***/ 207:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(209);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },

/***/ 209:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
	exports.getDependsOnOwnProps = getDependsOnOwnProps;
	exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

	var _verifyPlainObject = __webpack_require__(211);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function wrapMapToPropsConstant(getConstant) {
	  return function initConstantSelector(dispatch, options) {
	    var constant = getConstant(dispatch, options);

	    function constantSelector() {
	      return constant;
	    }
	    constantSelector.dependsOnOwnProps = false;
	    return constantSelector;
	  };
	}

	// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
	// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
	// whether mapToProps needs to be invoked when props have changed.
	// 
	// A length of one signals that mapToProps does not depend on props from the parent component.
	// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
	// therefore not reporting its length accurately..
	function getDependsOnOwnProps(mapToProps) {
	  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
	}

	// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
	// this function wraps mapToProps in a proxy function which does several things:
	// 
	//  * Detects whether the mapToProps function being called depends on props, which
	//    is used by selectorFactory to decide if it should reinvoke on props changes.
	//    
	//  * On first call, handles mapToProps if returns another function, and treats that
	//    new function as the true mapToProps for subsequent calls.
	//    
	//  * On first call, verifies the first result is a plain object, in order to warn
	//    the developer that their mapToProps function is not returning a valid result.
	//    
	function wrapMapToPropsFunc(mapToProps, methodName) {
	  return function initProxySelector(dispatch, _ref) {
	    var displayName = _ref.displayName;

	    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
	      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
	    };

	    // allow detectFactoryAndVerify to get ownProps
	    proxy.dependsOnOwnProps = true;

	    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
	      proxy.mapToProps = mapToProps;
	      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
	      var props = proxy(stateOrDispatch, ownProps);

	      if (typeof props === 'function') {
	        proxy.mapToProps = props;
	        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
	        props = proxy(stateOrDispatch, ownProps);
	      }

	      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);

	      return props;
	    };

	    return proxy;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifyPlainObject;

	var _isPlainObject = __webpack_require__(191);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(181);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verifyPlainObject(value, displayName, methodName) {
	  if (!(0, _isPlainObject2.default)(value)) {
	    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
	  }
	}

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
	exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

	var _wrapMapToProps = __webpack_require__(210);

	function whenMapStateToPropsIsFunction(mapStateToProps) {
	  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
	}

	function whenMapStateToPropsIsMissing(mapStateToProps) {
	  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
	    return {};
	  }) : undefined;
	}

	exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.defaultMergeProps = defaultMergeProps;
	exports.wrapMergePropsFunc = wrapMergePropsFunc;
	exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
	exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

	var _verifyPlainObject = __webpack_require__(211);

	var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function defaultMergeProps(stateProps, dispatchProps, ownProps) {
	  return _extends({}, ownProps, stateProps, dispatchProps);
	}

	function wrapMergePropsFunc(mergeProps) {
	  return function initMergePropsProxy(dispatch, _ref) {
	    var displayName = _ref.displayName,
	        pure = _ref.pure,
	        areMergedPropsEqual = _ref.areMergedPropsEqual;

	    var hasRunOnce = false;
	    var mergedProps = void 0;

	    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
	      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	      if (hasRunOnce) {
	        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
	      } else {
	        hasRunOnce = true;
	        mergedProps = nextMergedProps;

	        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
	      }

	      return mergedProps;
	    };
	  };
	}

	function whenMergePropsIsFunction(mergeProps) {
	  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
	}

	function whenMergePropsIsOmitted(mergeProps) {
	  return !mergeProps ? function () {
	    return defaultMergeProps;
	  } : undefined;
	}

	exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
	exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
	exports.default = finalPropsSelectorFactory;

	var _verifySubselectors = __webpack_require__(215);

	var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
	  return function impureFinalPropsSelector(state, ownProps) {
	    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
	  };
	}

	function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
	  var areStatesEqual = _ref.areStatesEqual,
	      areOwnPropsEqual = _ref.areOwnPropsEqual,
	      areStatePropsEqual = _ref.areStatePropsEqual;

	  var hasRunAtLeastOnce = false;
	  var state = void 0;
	  var ownProps = void 0;
	  var stateProps = void 0;
	  var dispatchProps = void 0;
	  var mergedProps = void 0;

	  function handleFirstCall(firstState, firstOwnProps) {
	    state = firstState;
	    ownProps = firstOwnProps;
	    stateProps = mapStateToProps(state, ownProps);
	    dispatchProps = mapDispatchToProps(dispatch, ownProps);
	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    hasRunAtLeastOnce = true;
	    return mergedProps;
	  }

	  function handleNewPropsAndNewState() {
	    stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewProps() {
	    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

	    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

	    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
	    return mergedProps;
	  }

	  function handleNewState() {
	    var nextStateProps = mapStateToProps(state, ownProps);
	    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
	    stateProps = nextStateProps;

	    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

	    return mergedProps;
	  }

	  function handleSubsequentCalls(nextState, nextOwnProps) {
	    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
	    var stateChanged = !areStatesEqual(nextState, state);
	    state = nextState;
	    ownProps = nextOwnProps;

	    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
	    if (propsChanged) return handleNewProps();
	    if (stateChanged) return handleNewState();
	    return mergedProps;
	  }

	  return function pureFinalPropsSelector(nextState, nextOwnProps) {
	    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
	  };
	}

	// TODO: Add more comments

	// If pure is true, the selector returned by selectorFactory will memoize its results,
	// allowing connectAdvanced's shouldComponentUpdate to return false if final
	// props have not changed. If false, the selector will always return a new
	// object and shouldComponentUpdate will always return true.

	function finalPropsSelectorFactory(dispatch, _ref2) {
	  var initMapStateToProps = _ref2.initMapStateToProps,
	      initMapDispatchToProps = _ref2.initMapDispatchToProps,
	      initMergeProps = _ref2.initMergeProps,
	      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

	  var mapStateToProps = initMapStateToProps(dispatch, options);
	  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
	  var mergeProps = initMergeProps(dispatch, options);

	  if (process.env.NODE_ENV !== 'production') {
	    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
	  }

	  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

	  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = verifySubselectors;

	var _warning = __webpack_require__(181);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function verify(selector, methodName, displayName) {
	  if (!selector) {
	    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
	  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
	    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
	      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
	    }
	  }
	}

	function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
	  verify(mapStateToProps, 'mapStateToProps', displayName);
	  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
	  verify(mergeProps, 'mergeProps', displayName);
	}

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.store = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(189);

	var _reactRedux = __webpack_require__(178);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//1. Action
	function changeText() {
	    return {
	        type: 'CHANGE_TEXT'
	    };
	}

	function buttonClick() {
	    return {
	        type: 'BUTTON_CLICK'
	    };
	}

	//2. Reducer
	var initialState = {
	    text: 'Helllllo'
	};
	function myApp() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    switch (action.type) {
	        case 'CHANGE_TEXT':
	            return {
	                text: state.text == 'Helllllo' ? 'Stark' : 'Helllllo'
	            };
	        case 'BUTTON_CLICK':
	            return {
	                text: 'You just click button'
	            };
	        default:
	            return {
	                text: 'Helllllo'
	            };
	    }
	}

	//3. Store
	var store = exports.store = (0, _redux.createStore)(myApp);

	//4. Components

	var Hello = function (_Component) {
	    _inherits(Hello, _Component);

	    function Hello(props) {
	        _classCallCheck(this, Hello);

	        var _this = _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).call(this, props));

	        _this.handleClick = _this.handleClick.bind(_this);
	        return _this;
	    }

	    _createClass(Hello, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.actions.changeText();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'h1',
	                { onClick: this.handleClick },
	                ' ',
	                this.props.text,
	                ' '
	            );
	        }
	    }]);

	    return Hello;
	}(_react.Component);

	var Change = function (_Component2) {
	    _inherits(Change, _Component2);

	    function Change(props) {
	        _classCallCheck(this, Change);

	        var _this2 = _possibleConstructorReturn(this, (Change.__proto__ || Object.getPrototypeOf(Change)).call(this, props));

	        _this2.handleClick = _this2.handleClick.bind(_this2);
	        return _this2;
	    }

	    _createClass(Change, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.actions.buttonClick();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'button',
	                { onClick: this.handleClick },
	                'change'
	            );
	        }
	    }]);

	    return Change;
	}(_react.Component);

	var App = function (_Component3) {
	    _inherits(App, _Component3);

	    function App(props) {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                actions = _props.actions,
	                text = _props.text; //见后面的connect方法

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(Hello, { actions: actions, text: text }),
	                _react2.default.createElement(Change, { actions: actions })
	            );
	        }
	    }]);

	    return App;
	}(_react.Component);

	//5. 连接React组件和Redux


	function mapStateToProps(state) {
	    //声明当state树变化时，哪些属性我们关心
	    return { text: state.text };
	}

	function mapDispatchToProps(dispatch) {
	    //把store里的dispatch方法注入组件
	    return {
	        actions: (0, _redux.bindActionCreators)({
	            changeText: changeText,
	            buttonClick: buttonClick
	        }, dispatch)
	    };
	}

	App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App); //这里给了App两个props：text和actions


	exports.default = App;

/***/ }

});