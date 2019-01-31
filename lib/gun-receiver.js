(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pm2"), require("ramda"), require("uuid"), require("ws"));
	else if(typeof define === 'function' && define.amd)
		define("gun-receiver", ["pm2", "ramda", "uuid", "ws"], factory);
	else if(typeof exports === 'object')
		exports["gun-receiver"] = factory(require("pm2"), require("ramda"), require("uuid"), require("ws"));
	else
		root["gun-receiver"] = factory(root["pm2"], root["ramda"], root["uuid"], root["ws"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_pm2__, __WEBPACK_EXTERNAL_MODULE_ramda__, __WEBPACK_EXTERNAL_MODULE_uuid__, __WEBPACK_EXTERNAL_MODULE_ws__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/reconnecting-websocket/dist/reconnecting-websocket.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/reconnecting-websocket/dist/reconnecting-websocket.mjs ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Event = /** @class */ (function () {
    function Event(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event;
}());
var ErrorEvent = /** @class */ (function (_super) {
    __extends(ErrorEvent, _super);
    function ErrorEvent(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(Event));
var CloseEvent = /** @class */ (function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(code, reason, target) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(Event));

/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */
var getGlobalWebSocket = function () {
    if (typeof WebSocket !== 'undefined') {
        // @ts-ignore
        return WebSocket;
    }
};
/**
 * Returns true if given argument looks like a WebSocket class
 */
var isWebSocket = function (w) { return typeof w === 'function' && w.CLOSING === 2; };
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    debug: false,
};
var ReconnectingWebSocket = /** @class */ (function () {
    function ReconnectingWebSocket(url, protocols, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: [],
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */
        this.onclose = undefined;
        /**
         * An event listener to be called when an error occurs
         */
        this.onerror = undefined;
        /**
         * An event listener to be called when a message is received from the server
         */
        this.onmessage = undefined;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */
        this.onopen = undefined;
        this._handleOpen = function (event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function () { return _this._acceptOpen(); }, minUptime);
            // @ts-ignore
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function (message) { return _this._ws.send(message); });
            _this._messageQueue = [];
            if (_this.onopen) {
                _this.onopen(event);
            }
            _this._listeners.open.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleMessage = function (event) {
            _this._debug('message event');
            if (_this.onmessage) {
                _this.onmessage(event);
            }
            _this._listeners.message.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleError = function (event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) {
                _this.onerror(event);
            }
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function (listener) { return _this._callEventListener(event, listener); });
            _this._connect();
        };
        this._handleClose = function (event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) {
                _this._connect();
            }
            if (_this.onclose) {
                _this.onclose(event);
            }
            _this._listeners.close.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket, "CONNECTING", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "OPEN", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSING", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSED", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CONNECTING", {
        get: function () {
            return ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "OPEN", {
        get: function () {
            return ReconnectingWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSING", {
        get: function () {
            return ReconnectingWebSocket.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSED", {
        get: function () {
            return ReconnectingWebSocket.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "binaryType", {
        get: function () {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function (value) {
            this._binaryType = value;
            if (this._ws) {
                // @ts-ignore
                this._ws.binaryType = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */
        get: function () {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */
        get: function () {
            var bytes = this._messageQueue.reduce(function (acc, message) {
                if (typeof message === 'string') {
                    acc += message.length; // not byte size
                }
                else if (message instanceof Blob) {
                    acc += message.size;
                }
                else {
                    acc += message.byteLength;
                }
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */
        get: function () {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */
        get: function () {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */
        get: function () {
            return this._ws ? this._ws.readyState : ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */
        get: function () {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    ReconnectingWebSocket.prototype.close = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    ReconnectingWebSocket.prototype.reconnect = function (code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        }
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    ReconnectingWebSocket.prototype.send = function (data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        }
        else {
            this._debug('enqueue', data);
            this._messageQueue.push(data);
        }
    };
    /**
     * Register an event handler of a specific event type
     */
    ReconnectingWebSocket.prototype.addEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    };
    /**
     * Removes an event listener
     */
    ReconnectingWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    ReconnectingWebSocket.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            console.log.apply(console, ['RWS>'].concat(args));
        }
    };
    ReconnectingWebSocket.prototype._getNextDelay = function () {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = minReconnectionDelay;
        if (this._retryCount > 0) {
            delay =
                minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket.prototype._wait = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket.prototype._getNextUrl = function (urlProvider) {
        if (typeof urlProvider === 'string') {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') {
                return Promise.resolve(url);
            }
            if (url.then) {
                return url;
            }
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket.prototype._connect = function () {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error('No valid WebSocket class provided');
        }
        this._wait()
            .then(function () { return _this._getNextUrl(_this._url); })
            .then(function (url) {
            // close could be called before creating the ws
            if (_this._closeCalled) {
                _this._connectLock = false;
                return;
            }
            _this._debug('connect', { url: url, protocols: _this._protocols });
            _this._ws = _this._protocols
                ? new WebSocket(url, _this._protocols)
                : new WebSocket(url);
            // @ts-ignore
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function () { return _this._handleTimeout(); }, connectionTimeout);
        });
    };
    ReconnectingWebSocket.prototype._handleTimeout = function () {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket.prototype._disconnect = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        }
        catch (error) {
            // ignore
        }
    };
    ReconnectingWebSocket.prototype._acceptOpen = function () {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket.prototype._callEventListener = function (event, listener) {
        if ('handleEvent' in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        }
        else {
            // @ts-ignore
            listener(event);
        }
    };
    ReconnectingWebSocket.prototype._removeListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._addListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._clearTimeouts = function () {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket;
}());

/* harmony default export */ __webpack_exports__["default"] = (ReconnectingWebSocket);


/***/ }),

/***/ "./src/chain.js":
/*!**********************!*\
  !*** ./src/chain.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = function _default(db) {
  var getPath = function getPath(keyList) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var thisChain;

    var on = function on(fn) {
      var value, _getValue;

      var hasResponse = false;
      var bound = fn.bind(thisChain);

      var received = function received(val) {
        return (hasResponse = true) && bound(value = val);
      };

      var requested = {};
      var graph = {};
      var connection = db.connected(function (msg) {
        var json = msg.json;
        (0, _ramda.keys)((0, _ramda.prop)("put", json)).forEach(function (soul) {
          if (!requested[soul]) return;
          var node = (0, _ramda.path)(["put", soul], json);
          if (!node && !hasResponse) received();
          if (node) graph[soul] = node;
        });

        var nextValue = _getValue(keyList);

        if (nextValue !== value) received(nextValue);
      });

      var getNode = function getNode(soul) {
        if (requested[soul]) return graph[soul];
        requested[soul] = true;
        connection.receive({ ...opts,
          json: {
            get: {
              "#": soul
            }
          },
          skipValidation: true
        });
        return graph[soul];
      };

      _getValue = function getValue(kl) {
        var lastKey = kl[kl.length - 1];
        if (kl.length === 1) return getNode(lastKey);

        var parentValue = _getValue(kl.slice(0, kl.length - 1));

        if (!parentValue) return undefined;
        var value = (0, _ramda.prop)(lastKey, parentValue);
        if (value && value["#"]) return getNode(value["#"]);
        if (kl === keyList) received(value);
        return value;
      };

      connection.receive({
        json: {
          leech: true
        }
      });

      _getValue(keyList);

      return function () {
        return db.disconnected(connection);
      };
    };

    var then = function then() {
      var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _ramda.identity;
      return new Promise(function (resolve) {
        var unsubscribe = on(function (val) {
          resolve(val);
          unsubscribe();
        });
      }).then(fn);
    };

    var once = function once(fn) {
      return then(fn.bind(thisChain)) && thisChain;
    };

    var get = function get(key) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return getPath([].concat(_toConsumableArray(keyList), [key]), opts);
    };

    thisChain = {
      get: get,
      on: on,
      then: then,
      once: once
    };
    return thisChain;
  };

  db.get = function (key) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return getPath([key], opts);
  };

  return db;
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/cluster.js":
/*!************************!*\
  !*** ./src/cluster.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var R = _interopRequireWildcard(__webpack_require__(/*! ramda */ "ramda"));

var _uuid = _interopRequireDefault(__webpack_require__(/*! uuid */ "uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var MSG_TOPIC = "gun:msg";

module.exports = function (db) {
  var pm2 = __webpack_require__(/*! pm2 */ "pm2");

  var id = _uuid.default.v4();

  pm2.launchBus(function (err, bus) {
    if (err) console.err(err);
    bus.on("process:msg", function (packet) {
      if (packet.raw.fromCluster === id) return;

      if (packet.raw.topic === MSG_TOPIC) {
        db.processIn(R.assoc("db", db, packet.raw.msg)).catch(function (err) {
          return console.error("PISTOL cluster err", err);
        });
      }
    });
  });
  db.onIn(function (msg) {
    var fromCluster = msg.fromCluster,
        noRelay = msg.noRelay;
    if (noRelay || fromCluster) return msg;

    if (process.send) {
      process.send({
        fromCluster: id,
        topic: MSG_TOPIC,
        msg: R.mergeLeft({
          fromCluster: true,
          skipValidation: true
        }, msg)
      });
    }

    return msg;
  });
  return db;
};

/***/ }),

/***/ "./src/conflicts.js":
/*!**************************!*\
  !*** ./src/conflicts.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

/* globals Promise */
var _default = function _default(db) {
  db.onIn(function (msg) {
    var json = msg.json;
    var updatedVectors = [];
    var putKeys = (0, _ramda.keys)((0, _ramda.prop)("put", json));
    if (!putKeys.length) return Promise.resolve(msg);
    return Promise.all(putKeys.map(function (soul) {
      var putVectors = (0, _ramda.path)(["put", soul, "_", ">"], json) || {};
      return db.get(soul, {
        noRelay: true
      }).then(function (node) {
        var knownVectors = (0, _ramda.path)(["_", ">"], node) || {};
        (0, _ramda.keys)(putVectors).forEach(function (key) {
          if (knownVectors[key] && knownVectors[key] > putVectors[key]) {
            return;
          }

          updatedVectors.push(putVectors[key]);
        });
      });
    })).then(function () {
      return updatedVectors.length || json.get ? msg : null;
    });
  });
  return db;
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Receiver;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

var _uuid = _interopRequireDefault(__webpack_require__(/*! uuid */ "uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function processQueue() {
  var fns = [];

  var queue = function queue(fn) {
    return fns.push(fn);
  };

  var dequeue = function dequeue(fn) {
    return fns = (0, _ramda.without)([fn], fns);
  };

  function execute(msg) {
    var remainingFns = fns.slice().reverse();

    var executeNext = function executeNext(msg) {
      try {
        var fn = remainingFns.pop();
        if (msg && fn) return Promise.resolve(fn(msg)).then(executeNext);
        return Promise.resolve(msg);
      } catch (e) {
        return Promise.reject(e);
      }
    };

    return executeNext(msg);
  }

  return [queue, execute, dequeue];
}

function pistolConnection(_ref) {
  var db = _ref.db,
      sendFn = _ref.send;
  var connection;
  var state = {};
  var hasReportedError = false;

  var get = function get(p) {
    return (0, _ramda.path)(p, state);
  };

  var set = function set(p, v) {
    return state = (0, _ramda.assocPath)(p, v, state);
  }; // && console.log(state);


  var msgId = function msgId() {
    return _uuid.default.v4();
  };

  var send = function send(msg) {
    return db.processOut({ ...msg,
      to: connection
    }).then(function (r) {
      return r && sendFn(r);
    }).catch(function (err) {
      if (!hasReportedError) {
        console.error("PISTOL send err", JSON.stringify(msg, null, 2), msg.json.put, err);
      }

      hasReportedError = true;
    });
  };

  var receive = function receive(_ref2) {
    var json = _ref2.json,
        raw = _ref2.raw,
        opts = _objectWithoutProperties(_ref2, ["json", "raw"]);

    var preserved = raw || JSON.stringify(json, null, 2);
    return db.processIn({ ...opts,
      db: db,
      json: { ...json,
        "#": json["#"] || _uuid.default.v4()
      },
      from: connection
    }).catch(function (err) {
      return console.error("PISTOL receive err", err, preserved);
    });
  };

  connection = {
    send: send,
    receive: receive,
    get: get,
    set: set,
    msgId: msgId
  };
  return connection;
}

function Receiver() {
  var peer;
  var connections = [];

  var _processQueue = processQueue(),
      _processQueue2 = _slicedToArray(_processQueue, 2),
      onIn = _processQueue2[0],
      processIn = _processQueue2[1];

  var _processQueue3 = processQueue(),
      _processQueue4 = _slicedToArray(_processQueue3, 2),
      onOut = _processQueue4[0],
      processOut = _processQueue4[1];

  function connected(send) {
    var connection = pistolConnection({
      db: peer,
      send: send
    });
    connections.push(connection);
    return connection;
  }

  function disconnected(connection) {
    var connectionIdx = connections.indexOf(connection);
    if (connectionIdx !== -1) connections.splice(connectionIdx, 1);
  }

  peer = {
    connections: connections,
    connected: connected,
    disconnected: disconnected,
    onIn: onIn,
    onOut: onOut,
    processIn: processIn,
    processOut: processOut
  };
  return peer;
}

module.exports = exports["default"];

/***/ }),

/***/ "./src/dedup.js":
/*!**********************!*\
  !*** ./src/dedup.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

var MAX_MSG_ID_CACHE = 50000;
var GARBAGE_INTERVAL = 60000;

var _default = function _default(db) {
  var receivedIds = {};

  function collectGarbage() {
    var ids = (0, _ramda.keys)(receivedIds).reverse();

    while (ids.length > MAX_MSG_ID_CACHE) {
      delete receivedIds[ids.pop()];
    }
  }

  db.onIn(function (msg) {
    var id = (0, _ramda.path)(["json", "#"], msg);
    if (!id || id in receivedIds) return null;
    receivedIds[id] = true;
    return msg;
  });
  setInterval(collectGarbage, GARBAGE_INTERVAL);
  return db;
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "chainInterface", {
  enumerable: true,
  get: function get() {
    return _chain.default;
  }
});
Object.defineProperty(exports, "preventConflicts", {
  enumerable: true,
  get: function get() {
    return _conflicts.default;
  }
});
Object.defineProperty(exports, "Receiver", {
  enumerable: true,
  get: function get() {
    return _core.default;
  }
});
Object.defineProperty(exports, "deduplicateMessages", {
  enumerable: true,
  get: function get() {
    return _dedup.default;
  }
});
Object.defineProperty(exports, "allowLeech", {
  enumerable: true,
  get: function get() {
    return _leech.default;
  }
});
Object.defineProperty(exports, "relayMessages", {
  enumerable: true,
  get: function get() {
    return _relay.default;
  }
});
Object.defineProperty(exports, "cluster", {
  enumerable: true,
  get: function get() {
    return _cluster.default;
  }
});
exports.websocketTransport = void 0;

var _chain = _interopRequireDefault(__webpack_require__(/*! ./chain */ "./src/chain.js"));

var _conflicts = _interopRequireDefault(__webpack_require__(/*! ./conflicts */ "./src/conflicts.js"));

var _core = _interopRequireDefault(__webpack_require__(/*! ./core */ "./src/core.js"));

var _dedup = _interopRequireDefault(__webpack_require__(/*! ./dedup */ "./src/dedup.js"));

var _leech = _interopRequireDefault(__webpack_require__(/*! ./leech */ "./src/leech.js"));

var _relay = _interopRequireDefault(__webpack_require__(/*! ./relay */ "./src/relay.js"));

var _cluster = _interopRequireDefault(__webpack_require__(/*! ./cluster */ "./src/cluster.js"));

var websocket = _interopRequireWildcard(__webpack_require__(/*! ./websocket */ "./src/websocket.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var websocketTransport = websocket;
exports.websocketTransport = websocketTransport;

/***/ }),

/***/ "./src/leech.js":
/*!**********************!*\
  !*** ./src/leech.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = function _default(db) {
  db.onIn(function (msg) {
    if (!msg.from || !msg.from.set) return msg;

    if ((0, _ramda.path)(["json", "leech"], msg)) {
      msg.from.set(["isLeeching"], true);
      return undefined;
    }

    var askingFor = (0, _ramda.path)(["json", "get", "#"], msg);
    [askingFor].concat(_toConsumableArray((0, _ramda.keys)((0, _ramda.path)(["json", "put"], msg)))).forEach(function (soul) {
      return soul && msg.from.set(["hasAskedFor", soul], true);
    });
    return msg;
  });
  db.onOut(function (msg) {
    var to = msg.to,
        json = msg.json,
        ignoreLeeching = msg.ignoreLeeching;
    if (!to.get(["isLeeching"]) || ignoreLeeching) return msg;
    var askedPuts = (0, _ramda.keys)(json.put).filter(function (soul) {
      if (!to.get(["hasAskedFor", soul])) return false;
      var soulDeltas = (0, _ramda.path)([soul, "_", ">"], json.put);
      var hasUpdates = false;
      if (!(0, _ramda.keys)(soulDeltas).length) return true;
      (0, _ramda.keys)(soulDeltas).forEach(function (key) {
        var known = to.get(["knownDeltas", soul, key]) || 0;
        var delta = parseFloat(soulDeltas[key]) || 0;
        if (known && delta <= known) return;
        to.set(["knownDeltas", soul, key], delta);
        hasUpdates = true;
      });
      return hasUpdates;
    });
    if (askedPuts.length) return msg;
    return undefined;
  });
  return db;
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/relay.js":
/*!**********************!*\
  !*** ./src/relay.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var R = _interopRequireWildcard(__webpack_require__(/*! ramda */ "ramda"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

module.exports = function (db) {
  db.onIn(function (msg) {
    var from = msg.from,
        noRelay = msg.noRelay;
    if (noRelay) return msg;
    R.without([from], db.connections).forEach(function (c) {
      return c.send(R.assoc("skipValidation", true, msg));
    });
    return msg;
  });
  return db;
};

/***/ }),

/***/ "./src/websocket.js":
/*!**************************!*\
  !*** ./src/websocket.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = exports.server = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

var _ws = _interopRequireDefault(__webpack_require__(/*! ws */ "ws"));

var _reconnectingWebsocket = _interopRequireDefault(__webpack_require__(/*! reconnecting-websocket */ "./node_modules/reconnecting-websocket/dist/reconnecting-websocket.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PING = 60000;
var wsConnection = (0, _ramda.curry)(function (db, ws) {
  var hasLoggedErr = false;
  var connected = true;
  var connection = db.connected(function (msg) {
    if (!msg || !(msg.json || msg.raw) || !connected) return;
    var raw = msg.raw || JSON.stringify(msg.json);
    ws.send(raw, function (err) {
      if (!err || hasLoggedErr) return;
      console.warn("ws send err", err);
      hasLoggedErr = true;
    });
  });
  var pingInterval = setInterval(function () {
    return connection.send({
      json: {
        ping: true
      },
      skipValidation: true
    });
  }, PING);

  var receive = function receive(msg) {
    try {
      var raw = msg.data || msg;
      var json = JSON.parse(raw);
      Array.isArray(json) ? json.forEach(receive) : connection.receive({
        json: json,
        raw: raw
      });
    } catch (e) {
      console.error("RECEIVER invalid ws msg", e, msg.data);
    }
  };

  ws.addEventListener("close", function () {
    if (ws.reconnect) return;
    connected = false;
    clearInterval(pingInterval);
    db.disconnected(connection);
  });
  ws.addEventListener("message", receive);
  return connection;
});
var server = (0, _ramda.curry)(function (_ref, db) {
  var web = _ref.web,
      port = _ref.port;
  new _ws.default.Server({
    port: !web ? port : undefined,
    server: web
  }).on("connection", wsConnection(db));
  return db;
});
exports.server = server;
var client = (0, _ramda.curry)(function (url, db) {
  var ws = new _reconnectingWebsocket.default(url, [], {
    WebSocket: _ws.default
  });
  ws.addEventListener("open", function () {
    return wsConnection(db, ws);
  });
  return db;
});
exports.client = client;

/***/ }),

/***/ "pm2":
/*!**********************!*\
  !*** external "pm2" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pm2__;

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ramda__;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_uuid__;

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ws__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1yZWNlaXZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9ub2RlX21vZHVsZXMvcmVjb25uZWN0aW5nLXdlYnNvY2tldC9kaXN0L3JlY29ubmVjdGluZy13ZWJzb2NrZXQubWpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jaGFpbi5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY2x1c3Rlci5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY29uZmxpY3RzLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9kZWR1cC5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL2xlZWNoLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9yZWxheS5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvd2Vic29ja2V0LmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInBtMlwiIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcIndzXCIiXSwibmFtZXMiOlsiZGIiLCJnZXRQYXRoIiwia2V5TGlzdCIsIm9wdHMiLCJ0aGlzQ2hhaW4iLCJvbiIsImZuIiwidmFsdWUiLCJnZXRWYWx1ZSIsImhhc1Jlc3BvbnNlIiwiYm91bmQiLCJiaW5kIiwicmVjZWl2ZWQiLCJ2YWwiLCJyZXF1ZXN0ZWQiLCJncmFwaCIsImNvbm5lY3Rpb24iLCJjb25uZWN0ZWQiLCJtc2ciLCJqc29uIiwiZm9yRWFjaCIsInNvdWwiLCJub2RlIiwibmV4dFZhbHVlIiwiZ2V0Tm9kZSIsInJlY2VpdmUiLCJnZXQiLCJza2lwVmFsaWRhdGlvbiIsImtsIiwibGFzdEtleSIsImxlbmd0aCIsInBhcmVudFZhbHVlIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJsZWVjaCIsImRpc2Nvbm5lY3RlZCIsInRoZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuc3Vic2NyaWJlIiwib25jZSIsImtleSIsIk1TR19UT1BJQyIsIm1vZHVsZSIsImV4cG9ydHMiLCJwbTIiLCJyZXF1aXJlIiwiaWQiLCJ2NCIsImxhdW5jaEJ1cyIsImVyciIsImJ1cyIsImNvbnNvbGUiLCJwYWNrZXQiLCJyYXciLCJmcm9tQ2x1c3RlciIsInRvcGljIiwicHJvY2Vzc0luIiwiUiIsImFzc29jIiwiY2F0Y2giLCJlcnJvciIsIm9uSW4iLCJub1JlbGF5IiwicHJvY2VzcyIsInNlbmQiLCJtZXJnZUxlZnQiLCJ1cGRhdGVkVmVjdG9ycyIsInB1dEtleXMiLCJhbGwiLCJtYXAiLCJwdXRWZWN0b3JzIiwia25vd25WZWN0b3JzIiwicHVzaCIsInByb2Nlc3NRdWV1ZSIsImZucyIsInF1ZXVlIiwiZGVxdWV1ZSIsImV4ZWN1dGUiLCJyZW1haW5pbmdGbnMiLCJyZXZlcnNlIiwiZXhlY3V0ZU5leHQiLCJwb3AiLCJlIiwicmVqZWN0IiwicGlzdG9sQ29ubmVjdGlvbiIsInNlbmRGbiIsInN0YXRlIiwiaGFzUmVwb3J0ZWRFcnJvciIsInAiLCJzZXQiLCJ2IiwibXNnSWQiLCJwcm9jZXNzT3V0IiwidG8iLCJyIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1dCIsInByZXNlcnZlZCIsImZyb20iLCJSZWNlaXZlciIsInBlZXIiLCJjb25uZWN0aW9ucyIsIm9uT3V0IiwiY29ubmVjdGlvbklkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJNQVhfTVNHX0lEX0NBQ0hFIiwiR0FSQkFHRV9JTlRFUlZBTCIsInJlY2VpdmVkSWRzIiwiY29sbGVjdEdhcmJhZ2UiLCJpZHMiLCJzZXRJbnRlcnZhbCIsIndlYnNvY2tldFRyYW5zcG9ydCIsIndlYnNvY2tldCIsImFza2luZ0ZvciIsImlnbm9yZUxlZWNoaW5nIiwiYXNrZWRQdXRzIiwiZmlsdGVyIiwic291bERlbHRhcyIsImhhc1VwZGF0ZXMiLCJrbm93biIsImRlbHRhIiwicGFyc2VGbG9hdCIsIndpdGhvdXQiLCJjIiwiUElORyIsIndzQ29ubmVjdGlvbiIsIndzIiwiaGFzTG9nZ2VkRXJyIiwid2FybiIsInBpbmdJbnRlcnZhbCIsInBpbmciLCJkYXRhIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVjb25uZWN0IiwiY2xlYXJJbnRlcnZhbCIsInNlcnZlciIsIndlYiIsInBvcnQiLCJTZXJ2ZXIiLCJjbGllbnQiLCJ1cmwiLCJXZWJTb2NrZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5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QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSx1QkFBdUIsRUFBRTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LGFBQVMsR0FBRyxLQUFaO0FBQ0EySCxpQkFBYSxDQUFDUixZQUFELENBQWI7QUFDQXBJLE1BQUUsQ0FBQ21DLFlBQUgsQ0FBZ0JuQixVQUFoQjtBQUNELEdBTEQ7QUFPQWlILElBQUUsQ0FBQ1MsZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0JqSCxPQUEvQjtBQUNBLFNBQU9ULFVBQVA7QUFDRCxDQTFDb0IsQ0FBckI7QUE0Q08sSUFBTTZILE1BQU0sR0FBRyxrQkFBTSxnQkFBZ0I3SSxFQUFoQixFQUF1QjtBQUFBLE1BQXBCOEksR0FBb0IsUUFBcEJBLEdBQW9CO0FBQUEsTUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQ2pELE1BQUksWUFBR0MsTUFBUCxDQUFjO0FBQUVELFFBQUksRUFBRSxDQUFDRCxHQUFELEdBQU9DLElBQVAsR0FBYzlHLFNBQXRCO0FBQWlDNEcsVUFBTSxFQUFFQztBQUF6QyxHQUFkLEVBQThEekksRUFBOUQsQ0FDRSxZQURGLEVBRUUySCxZQUFZLENBQUNoSSxFQUFELENBRmQ7QUFJQSxTQUFPQSxFQUFQO0FBQ0QsQ0FOcUIsQ0FBZjs7QUFRQSxJQUFNaUosTUFBTSxHQUFHLGtCQUFNLFVBQUNDLEdBQUQsRUFBTWxKLEVBQU4sRUFBYTtBQUN2QyxNQUFNaUksRUFBRSxHQUFHLG1DQUEwQmlCLEdBQTFCLEVBQStCLEVBQS9CLEVBQW1DO0FBQUVDLGFBQVM7QUFBWCxHQUFuQyxDQUFYO0FBRUFsQixJQUFFLENBQUNTLGdCQUFILENBQW9CLE1BQXBCLEVBQTRCO0FBQUEsV0FBTVYsWUFBWSxDQUFDaEksRUFBRCxFQUFLaUksRUFBTCxDQUFsQjtBQUFBLEdBQTVCO0FBQ0EsU0FBT2pJLEVBQVA7QUFDRCxDQUxxQixDQUFmOzs7Ozs7Ozs7Ozs7QUMxRFAsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoiZ3VuLXJlY2VpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicG0yXCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ1dWlkXCIpLCByZXF1aXJlKFwid3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJndW4tcmVjZWl2ZXJcIiwgW1wicG0yXCIsIFwicmFtZGFcIiwgXCJ1dWlkXCIsIFwid3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3VuLXJlY2VpdmVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicG0yXCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ1dWlkXCIpLCByZXF1aXJlKFwid3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImd1bi1yZWNlaXZlclwiXSA9IGZhY3Rvcnkocm9vdFtcInBtMlwiXSwgcm9vdFtcInJhbWRhXCJdLCByb290W1widXVpZFwiXSwgcm9vdFtcIndzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BtMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdXVpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cblxudmFyIEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnQodHlwZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIHJldHVybiBFdmVudDtcclxufSgpKTtcclxudmFyIEVycm9yRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRXJyb3JFdmVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEVycm9yRXZlbnQoZXJyb3IsIHRhcmdldCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdlcnJvcicsIHRhcmdldCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICBfdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBFcnJvckV2ZW50O1xyXG59KEV2ZW50KSk7XHJcbnZhciBDbG9zZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENsb3NlRXZlbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDbG9zZUV2ZW50KGNvZGUsIHJlYXNvbiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gMTAwMDsgfVxyXG4gICAgICAgIGlmIChyZWFzb24gPT09IHZvaWQgMCkgeyByZWFzb24gPSAnJzsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdjbG9zZScsIHRhcmdldCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy53YXNDbGVhbiA9IHRydWU7XHJcbiAgICAgICAgX3RoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgX3RoaXMucmVhc29uID0gcmVhc29uO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDbG9zZUV2ZW50O1xyXG59KEV2ZW50KSk7XG5cbi8qIVxyXG4gKiBSZWNvbm5lY3RpbmcgV2ViU29ja2V0XHJcbiAqIGJ5IFBlZHJvIExhZGFyaWEgPHBlZHJvLmxhZGFyaWFAZ21haWwuY29tPlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGxhZGFyaWEvcmVjb25uZWN0aW5nLXdlYnNvY2tldFxyXG4gKiBMaWNlbnNlIE1JVFxyXG4gKi9cclxudmFyIGdldEdsb2JhbFdlYlNvY2tldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gV2ViU29ja2V0O1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIGdpdmVuIGFyZ3VtZW50IGxvb2tzIGxpa2UgYSBXZWJTb2NrZXQgY2xhc3NcclxuICovXHJcbnZhciBpc1dlYlNvY2tldCA9IGZ1bmN0aW9uICh3KSB7IHJldHVybiB0eXBlb2YgdyA9PT0gJ2Z1bmN0aW9uJyAmJiB3LkNMT1NJTkcgPT09IDI7IH07XHJcbnZhciBERUZBVUxUID0ge1xyXG4gICAgbWF4UmVjb25uZWN0aW9uRGVsYXk6IDEwMDAwLFxyXG4gICAgbWluUmVjb25uZWN0aW9uRGVsYXk6IDEwMDAgKyBNYXRoLnJhbmRvbSgpICogNDAwMCxcclxuICAgIG1pblVwdGltZTogNTAwMCxcclxuICAgIHJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvcjogMS4zLFxyXG4gICAgY29ubmVjdGlvblRpbWVvdXQ6IDQwMDAsXHJcbiAgICBtYXhSZXRyaWVzOiBJbmZpbml0eSxcclxuICAgIGRlYnVnOiBmYWxzZSxcclxufTtcclxudmFyIFJlY29ubmVjdGluZ1dlYlNvY2tldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlY29ubmVjdGluZ1dlYlNvY2tldCh1cmwsIHByb3RvY29scywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBbXSxcclxuICAgICAgICAgICAgbWVzc2FnZTogW10sXHJcbiAgICAgICAgICAgIG9wZW46IFtdLFxyXG4gICAgICAgICAgICBjbG9zZTogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50ID0gLTE7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkUmVjb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2JpbmFyeVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlUXVldWUgPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24ncyByZWFkeVN0YXRlIGNoYW5nZXMgdG8gQ0xPU0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGFuIGVycm9yIG9jY3Vyc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiBhIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uJ3MgcmVhZHlTdGF0ZSBjaGFuZ2VzIHRvIE9QRU47XHJcbiAgICAgICAgICogdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGUgY29ubmVjdGlvbiBpcyByZWFkeSB0byBzZW5kIGFuZCByZWNlaXZlIGRhdGFcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9oYW5kbGVPcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1Zygnb3BlbiBldmVudCcpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5fb3B0aW9ucy5taW5VcHRpbWUsIG1pblVwdGltZSA9IF9hID09PSB2b2lkIDAgPyBERUZBVUxULm1pblVwdGltZSA6IF9hO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuX2Nvbm5lY3RUaW1lb3V0KTtcclxuICAgICAgICAgICAgX3RoaXMuX3VwdGltZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9hY2NlcHRPcGVuKCk7IH0sIG1pblVwdGltZSk7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgX3RoaXMuX3dzLmJpbmFyeVR5cGUgPSBfdGhpcy5fYmluYXJ5VHlwZTtcclxuICAgICAgICAgICAgLy8gc2VuZCBlbnF1ZXVlZCBtZXNzYWdlcyAobWVzc2FnZXMgc2VudCBiZWZvcmUgd2Vic29ja2V0IG9wZW4gZXZlbnQpXHJcbiAgICAgICAgICAgIF90aGlzLl9tZXNzYWdlUXVldWUuZm9yRWFjaChmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMuX3dzLnNlbmQobWVzc2FnZSk7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5fbWVzc2FnZVF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbm9wZW4pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9ub3BlbihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5vcGVuLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnbWVzc2FnZSBldmVudCcpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbm1lc3NhZ2UoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMubWVzc2FnZS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdlcnJvciBldmVudCcsIGV2ZW50Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBfdGhpcy5fZGlzY29ubmVjdCh1bmRlZmluZWQsIGV2ZW50Lm1lc3NhZ2UgPT09ICdUSU1FT1VUJyA/ICd0aW1lb3V0JyA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbmVycm9yKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2V4ZWMgZXJyb3IgbGlzdGVuZXJzJyk7XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMuZXJyb3IuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnY2xvc2UgZXZlbnQnKTtcclxuICAgICAgICAgICAgX3RoaXMuX2NsZWFyVGltZW91dHMoKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLl9zaG91bGRSZWNvbm5lY3QpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uY2xvc2UoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMuY2xvc2UuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wcm90b2NvbHMgPSBwcm90b2NvbHM7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJDT05ORUNUSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIk9QRU5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiQ0xPU0lOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJDTE9TRURcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIkNPTk5FQ1RJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0LkNPTk5FQ1RJTkc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJPUEVOXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5PUEVOO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiQ0xPU0lOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ0xPU0lORztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIkNMT1NFRFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ0xPU0VEO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiYmluYXJ5VHlwZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLmJpbmFyeVR5cGUgOiB0aGlzLl9iaW5hcnlUeXBlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmluYXJ5VHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dzLmJpbmFyeVR5cGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwicmV0cnlDb3VudFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9yIGNvbm5lY3Rpb24gcmV0cmllc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5fcmV0cnlDb3VudCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJidWZmZXJlZEFtb3VudFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG51bWJlciBvZiBieXRlcyBvZiBkYXRhIHRoYXQgaGF2ZSBiZWVuIHF1ZXVlZCB1c2luZyBjYWxscyB0byBzZW5kKCkgYnV0IG5vdCB5ZXRcclxuICAgICAgICAgKiB0cmFuc21pdHRlZCB0byB0aGUgbmV0d29yay4gVGhpcyB2YWx1ZSByZXNldHMgdG8gemVybyBvbmNlIGFsbCBxdWV1ZWQgZGF0YSBoYXMgYmVlbiBzZW50LlxyXG4gICAgICAgICAqIFRoaXMgdmFsdWUgZG9lcyBub3QgcmVzZXQgdG8gemVybyB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZDsgaWYgeW91IGtlZXAgY2FsbGluZyBzZW5kKCksXHJcbiAgICAgICAgICogdGhpcyB3aWxsIGNvbnRpbnVlIHRvIGNsaW1iLiBSZWFkIG9ubHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5fbWVzc2FnZVF1ZXVlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICs9IG1lc3NhZ2UubGVuZ3RoOyAvLyBub3QgYnl0ZSBzaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYyArPSBtZXNzYWdlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2MgKz0gbWVzc2FnZS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBieXRlcyArICh0aGlzLl93cyA/IHRoaXMuX3dzLmJ1ZmZlcmVkQW1vdW50IDogMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJleHRlbnNpb25zXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZXh0ZW5zaW9ucyBzZWxlY3RlZCBieSB0aGUgc2VydmVyLiBUaGlzIGlzIGN1cnJlbnRseSBvbmx5IHRoZSBlbXB0eSBzdHJpbmcgb3IgYSBsaXN0IG9mXHJcbiAgICAgICAgICogZXh0ZW5zaW9ucyBhcyBuZWdvdGlhdGVkIGJ5IHRoZSBjb25uZWN0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLmV4dGVuc2lvbnMgOiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInByb3RvY29sXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSBuYW1lIG9mIHRoZSBzdWItcHJvdG9jb2wgdGhlIHNlcnZlciBzZWxlY3RlZDtcclxuICAgICAgICAgKiB0aGlzIHdpbGwgYmUgb25lIG9mIHRoZSBzdHJpbmdzIHNwZWNpZmllZCBpbiB0aGUgcHJvdG9jb2xzIHBhcmFtZXRlciB3aGVuIGNyZWF0aW5nIHRoZVxyXG4gICAgICAgICAqIFdlYlNvY2tldCBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MucHJvdG9jb2wgOiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInJlYWR5U3RhdGVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjb25uZWN0aW9uOyB0aGlzIGlzIG9uZSBvZiB0aGUgUmVhZHkgc3RhdGUgY29uc3RhbnRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLnJlYWR5U3RhdGUgOiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ09OTkVDVElORztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInVybFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIFVSTCBhcyByZXNvbHZlZCBieSB0aGUgY29uc3RydWN0b3JcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MudXJsIDogJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24gb3IgY29ubmVjdGlvbiBhdHRlbXB0LCBpZiBhbnkuIElmIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHlcclxuICAgICAqIENMT1NFRCwgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gMTAwMDsgfVxyXG4gICAgICAgIHRoaXMuX2Nsb3NlQ2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zaG91bGRSZWNvbm5lY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnY2xvc2UgZW5xdWV1ZWQ6IG5vIHdzIGluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IHRoaXMuQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdjbG9zZTogYWxyZWFkeSBjbG9zZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93cy5jbG9zZShjb2RlLCByZWFzb24pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbiBvciBjb25uZWN0aW9uIGF0dGVtcHQgYW5kIGNvbm5lY3RzIGFnYWluLlxyXG4gICAgICogUmVzZXRzIHJldHJ5IGNvdW50ZXI7XHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xyXG4gICAgICAgIHRoaXMuX3Nob3VsZFJlY29ubmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50ID0gLTE7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cyB8fCB0aGlzLl93cy5yZWFkeVN0YXRlID09PSB0aGlzLkNMT1NFRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNjb25uZWN0KGNvZGUsIHJlYXNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnF1ZXVlIHNwZWNpZmllZCBkYXRhIHRvIGJlIHRyYW5zbWl0dGVkIHRvIHRoZSBzZXJ2ZXIgb3ZlciB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5fd3MgJiYgdGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gdGhpcy5PUEVOKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdzZW5kJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dzLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnZW5xdWV1ZScsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlUXVldWUucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgdHlwZVxyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5maWx0ZXIoZnVuY3Rpb24gKGwpIHsgcmV0dXJuIGwgIT09IGxpc3RlbmVyOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIC8vIG5vdCB1c2luZyBzcHJlYWQgYmVjYXVzZSBjb21waWxlZCB2ZXJzaW9uIHVzZXMgU3ltYm9sc1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydSV1M+J10uY29uY2F0KGFyZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZ2V0TmV4dERlbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuX29wdGlvbnMsIF9iID0gX2EucmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yLCByZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVC5yZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IgOiBfYiwgX2MgPSBfYS5taW5SZWNvbm5lY3Rpb25EZWxheSwgbWluUmVjb25uZWN0aW9uRGVsYXkgPSBfYyA9PT0gdm9pZCAwID8gREVGQVVMVC5taW5SZWNvbm5lY3Rpb25EZWxheSA6IF9jLCBfZCA9IF9hLm1heFJlY29ubmVjdGlvbkRlbGF5LCBtYXhSZWNvbm5lY3Rpb25EZWxheSA9IF9kID09PSB2b2lkIDAgPyBERUZBVUxULm1heFJlY29ubmVjdGlvbkRlbGF5IDogX2Q7XHJcbiAgICAgICAgdmFyIGRlbGF5ID0gbWluUmVjb25uZWN0aW9uRGVsYXk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JldHJ5Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGRlbGF5ID1cclxuICAgICAgICAgICAgICAgIG1pblJlY29ubmVjdGlvbkRlbGF5ICogTWF0aC5wb3cocmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yLCB0aGlzLl9yZXRyeUNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIGlmIChkZWxheSA+IG1heFJlY29ubmVjdGlvbkRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBkZWxheSA9IG1heFJlY29ubmVjdGlvbkRlbGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RlYnVnKCduZXh0IGRlbGF5JywgZGVsYXkpO1xyXG4gICAgICAgIHJldHVybiBkZWxheTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl93YWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgX3RoaXMuX2dldE5leHREZWxheSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9nZXROZXh0VXJsID0gZnVuY3Rpb24gKHVybFByb3ZpZGVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmxQcm92aWRlciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmxQcm92aWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsUHJvdmlkZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHVybFByb3ZpZGVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1cmwudGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBVUkwnKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RMb2NrIHx8ICF0aGlzLl9zaG91bGRSZWNvbm5lY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0TG9jayA9IHRydWU7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fb3B0aW9ucywgX2IgPSBfYS5tYXhSZXRyaWVzLCBtYXhSZXRyaWVzID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFQubWF4UmV0cmllcyA6IF9iLCBfYyA9IF9hLmNvbm5lY3Rpb25UaW1lb3V0LCBjb25uZWN0aW9uVGltZW91dCA9IF9jID09PSB2b2lkIDAgPyBERUZBVUxULmNvbm5lY3Rpb25UaW1lb3V0IDogX2MsIF9kID0gX2EuV2ViU29ja2V0LCBXZWJTb2NrZXQgPSBfZCA9PT0gdm9pZCAwID8gZ2V0R2xvYmFsV2ViU29ja2V0KCkgOiBfZDtcclxuICAgICAgICBpZiAodGhpcy5fcmV0cnlDb3VudCA+PSBtYXhSZXRyaWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdtYXggcmV0cmllcyByZWFjaGVkJywgdGhpcy5fcmV0cnlDb3VudCwgJz49JywgbWF4UmV0cmllcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdjb25uZWN0JywgdGhpcy5fcmV0cnlDb3VudCk7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgaWYgKCFpc1dlYlNvY2tldChXZWJTb2NrZXQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdObyB2YWxpZCBXZWJTb2NrZXQgY2xhc3MgcHJvdmlkZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2FpdCgpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9nZXROZXh0VXJsKF90aGlzLl91cmwpOyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgICAgIC8vIGNsb3NlIGNvdWxkIGJlIGNhbGxlZCBiZWZvcmUgY3JlYXRpbmcgdGhlIHdzXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fY2xvc2VDYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnY29ubmVjdCcsIHsgdXJsOiB1cmwsIHByb3RvY29sczogX3RoaXMuX3Byb3RvY29scyB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX3dzID0gX3RoaXMuX3Byb3RvY29sc1xyXG4gICAgICAgICAgICAgICAgPyBuZXcgV2ViU29ja2V0KHVybCwgX3RoaXMuX3Byb3RvY29scylcclxuICAgICAgICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIF90aGlzLl93cy5iaW5hcnlUeXBlID0gX3RoaXMuX2JpbmFyeVR5cGU7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5fYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb25uZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2hhbmRsZVRpbWVvdXQoKTsgfSwgY29ubmVjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2hhbmRsZVRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ3RpbWVvdXQgZXZlbnQnKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihuZXcgRXJyb3JFdmVudChFcnJvcignVElNRU9VVCcpLCB0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcclxuICAgICAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7IGNvZGUgPSAxMDAwOyB9XHJcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl93cy5jbG9zZShjb2RlLCByZWFzb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVDbG9zZShuZXcgQ2xvc2VFdmVudChjb2RlLCByZWFzb24sIHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9hY2NlcHRPcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdhY2NlcHQgb3BlbicpO1xyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQgPSAwO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2NhbGxFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICgnaGFuZGxlRXZlbnQnIGluIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsaXN0ZW5lcihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX3JlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ3JlbW92ZUxpc3RlbmVycycpO1xyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLl9oYW5kbGVPcGVuKTtcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX2hhbmRsZUNsb3NlKTtcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5faGFuZGxlTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5faGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2FkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ2FkZExpc3RlbmVycycpO1xyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLl9oYW5kbGVPcGVuKTtcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX2hhbmRsZUNsb3NlKTtcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5faGFuZGxlTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5faGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2NsZWFyVGltZW91dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Nvbm5lY3RUaW1lb3V0KTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdXB0aW1lVGltZW91dCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldDtcclxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjb25uZWN0aW5nV2ViU29ja2V0O1xuIiwiLyogZ2xvYmFscyBQcm9taXNlICovXG5pbXBvcnQgeyBpZGVudGl0eSwga2V5cywgcHJvcCwgcGF0aCB9IGZyb20gXCJyYW1kYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGNvbnN0IGdldFBhdGggPSAoa2V5TGlzdCwgb3B0cyA9IHt9KSA9PiB7XG4gICAgbGV0IHRoaXNDaGFpbjtcbiAgICBjb25zdCBvbiA9IGZuID0+IHtcbiAgICAgIGxldCB2YWx1ZSwgZ2V0VmFsdWU7XG4gICAgICBsZXQgaGFzUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGJvdW5kID0gZm4uYmluZCh0aGlzQ2hhaW4pO1xuICAgICAgY29uc3QgcmVjZWl2ZWQgPSB2YWwgPT4gKGhhc1Jlc3BvbnNlID0gdHJ1ZSkgJiYgYm91bmQoKHZhbHVlID0gdmFsKSk7XG4gICAgICBjb25zdCByZXF1ZXN0ZWQgPSB7fTtcbiAgICAgIGNvbnN0IGdyYXBoID0ge307XG5cbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBkYi5jb25uZWN0ZWQobXNnID0+IHtcbiAgICAgICAgY29uc3QgeyBqc29uIH0gPSBtc2c7XG5cbiAgICAgICAga2V5cyhwcm9wKFwicHV0XCIsIGpzb24pKS5mb3JFYWNoKHNvdWwgPT4ge1xuICAgICAgICAgIGlmICghcmVxdWVzdGVkW3NvdWxdKSByZXR1cm47XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IHBhdGgoW1wicHV0XCIsIHNvdWxdLCBqc29uKTtcblxuICAgICAgICAgIGlmICghbm9kZSAmJiAhaGFzUmVzcG9uc2UpIHJlY2VpdmVkKCk7XG4gICAgICAgICAgaWYgKG5vZGUpIGdyYXBoW3NvdWxdID0gbm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGdldFZhbHVlKGtleUxpc3QpO1xuXG4gICAgICAgIGlmIChuZXh0VmFsdWUgIT09IHZhbHVlKSByZWNlaXZlZChuZXh0VmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdldE5vZGUgPSBzb3VsID0+IHtcbiAgICAgICAgaWYgKHJlcXVlc3RlZFtzb3VsXSkgcmV0dXJuIGdyYXBoW3NvdWxdO1xuICAgICAgICByZXF1ZXN0ZWRbc291bF0gPSB0cnVlO1xuICAgICAgICBjb25uZWN0aW9uLnJlY2VpdmUoe1xuICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgICAganNvbjogeyBnZXQ6IHsgXCIjXCI6IHNvdWwgfSB9LFxuICAgICAgICAgIHNraXBWYWxpZGF0aW9uOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ3JhcGhbc291bF07XG4gICAgICB9O1xuXG4gICAgICBnZXRWYWx1ZSA9IGtsID0+IHtcbiAgICAgICAgY29uc3QgbGFzdEtleSA9IGtsW2tsLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChrbC5sZW5ndGggPT09IDEpIHJldHVybiBnZXROb2RlKGxhc3RLZXkpO1xuICAgICAgICBjb25zdCBwYXJlbnRWYWx1ZSA9IGdldFZhbHVlKGtsLnNsaWNlKDAsIGtsLmxlbmd0aCAtIDEpKTtcblxuICAgICAgICBpZiAoIXBhcmVudFZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3AobGFzdEtleSwgcGFyZW50VmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZVtcIiNcIl0pIHJldHVybiBnZXROb2RlKHZhbHVlW1wiI1wiXSk7XG4gICAgICAgIGlmIChrbCA9PT0ga2V5TGlzdCkgcmVjZWl2ZWQodmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9O1xuXG4gICAgICBjb25uZWN0aW9uLnJlY2VpdmUoeyBqc29uOiB7IGxlZWNoOiB0cnVlIH0gfSk7XG4gICAgICBnZXRWYWx1ZShrZXlMaXN0KTtcbiAgICAgIHJldHVybiAoKSA9PiBkYi5kaXNjb25uZWN0ZWQoY29ubmVjdGlvbik7XG4gICAgfTtcblxuICAgIGNvbnN0IHRoZW4gPSAoZm4gPSBpZGVudGl0eSkgPT5cbiAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uKHZhbCA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkudGhlbihmbik7XG5cbiAgICBjb25zdCBvbmNlID0gZm4gPT4gdGhlbihmbi5iaW5kKHRoaXNDaGFpbikpICYmIHRoaXNDaGFpbjtcbiAgICBjb25zdCBnZXQgPSAoa2V5LCBvcHRzID0ge30pID0+IGdldFBhdGgoWy4uLmtleUxpc3QsIGtleV0sIG9wdHMpO1xuXG4gICAgdGhpc0NoYWluID0geyBnZXQsIG9uLCB0aGVuLCBvbmNlIH07XG4gICAgcmV0dXJuIHRoaXNDaGFpbjtcbiAgfTtcblxuICBkYi5nZXQgPSAoa2V5LCBvcHRzID0ge30pID0+IGdldFBhdGgoW2tleV0sIG9wdHMpO1xuICByZXR1cm4gZGI7XG59O1xuIiwiaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkXCI7XG5cbmNvbnN0IE1TR19UT1BJQyA9IFwiZ3VuOm1zZ1wiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRiID0+IHtcbiAgY29uc3QgcG0yID0gcmVxdWlyZShcInBtMlwiKTtcbiAgY29uc3QgaWQgPSB1dWlkLnY0KCk7XG5cbiAgcG0yLmxhdW5jaEJ1cygoZXJyLCBidXMpID0+IHtcbiAgICBpZiAoZXJyKSBjb25zb2xlLmVycihlcnIpO1xuICAgIGJ1cy5vbihcInByb2Nlc3M6bXNnXCIsIHBhY2tldCA9PiB7XG4gICAgICBpZiAocGFja2V0LnJhdy5mcm9tQ2x1c3RlciA9PT0gaWQpIHJldHVybjtcbiAgICAgIGlmIChwYWNrZXQucmF3LnRvcGljID09PSBNU0dfVE9QSUMpIHtcbiAgICAgICAgZGIucHJvY2Vzc0luKFIuYXNzb2MoXCJkYlwiLCBkYiwgcGFja2V0LnJhdy5tc2cpKS5jYXRjaChlcnIgPT5cbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUElTVE9MIGNsdXN0ZXIgZXJyXCIsIGVycilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGNvbnN0IHsgZnJvbUNsdXN0ZXIsIG5vUmVsYXkgfSA9IG1zZztcblxuICAgIGlmIChub1JlbGF5IHx8IGZyb21DbHVzdGVyKSByZXR1cm4gbXNnO1xuICAgIGlmIChwcm9jZXNzLnNlbmQpIHtcbiAgICAgIHByb2Nlc3Muc2VuZCh7XG4gICAgICAgIGZyb21DbHVzdGVyOiBpZCxcbiAgICAgICAgdG9waWM6IE1TR19UT1BJQyxcbiAgICAgICAgbXNnOiBSLm1lcmdlTGVmdCh7IGZyb21DbHVzdGVyOiB0cnVlLCBza2lwVmFsaWRhdGlvbjogdHJ1ZSB9LCBtc2cpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsga2V5cywgcHJvcCwgcGF0aCB9IGZyb20gXCJyYW1kYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCB7IGpzb24gfSA9IG1zZztcbiAgICBjb25zdCB1cGRhdGVkVmVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IHB1dEtleXMgPSBrZXlzKHByb3AoXCJwdXRcIiwganNvbikpO1xuXG4gICAgaWYgKCFwdXRLZXlzLmxlbmd0aCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtc2cpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIHB1dEtleXMubWFwKHNvdWwgPT4ge1xuICAgICAgICBjb25zdCBwdXRWZWN0b3JzID0gcGF0aChbXCJwdXRcIiwgc291bCwgXCJfXCIsIFwiPlwiXSwganNvbikgfHwge307XG5cbiAgICAgICAgcmV0dXJuIGRiLmdldChzb3VsLCB7IG5vUmVsYXk6IHRydWUgfSkudGhlbihub2RlID0+IHtcbiAgICAgICAgICBjb25zdCBrbm93blZlY3RvcnMgPSBwYXRoKFtcIl9cIiwgXCI+XCJdLCBub2RlKSB8fCB7fTtcblxuICAgICAgICAgIGtleXMocHV0VmVjdG9ycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtub3duVmVjdG9yc1trZXldICYmIGtub3duVmVjdG9yc1trZXldID4gcHV0VmVjdG9yc1trZXldKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZWRWZWN0b3JzLnB1c2gocHV0VmVjdG9yc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICkudGhlbigoKSA9PiAodXBkYXRlZFZlY3RvcnMubGVuZ3RoIHx8IGpzb24uZ2V0ID8gbXNnIDogbnVsbCkpO1xuICB9KTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsgYXNzb2NQYXRoLCBwYXRoLCB3aXRob3V0IH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZFwiO1xuXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUoKSB7XG4gIGxldCBmbnMgPSBbXTtcbiAgY29uc3QgcXVldWUgPSBmbiA9PiBmbnMucHVzaChmbik7XG4gIGNvbnN0IGRlcXVldWUgPSBmbiA9PiAoZm5zID0gd2l0aG91dChbZm5dLCBmbnMpKTtcblxuICBmdW5jdGlvbiBleGVjdXRlKG1zZykge1xuICAgIGNvbnN0IHJlbWFpbmluZ0ZucyA9IGZucy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICBjb25zdCBleGVjdXRlTmV4dCA9IG1zZyA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmbiA9IHJlbWFpbmluZ0Zucy5wb3AoKTtcblxuICAgICAgICBpZiAobXNnICYmIGZuKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZuKG1zZykpLnRoZW4oZXhlY3V0ZU5leHQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1zZyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4ZWN1dGVOZXh0KG1zZyk7XG4gIH1cblxuICByZXR1cm4gW3F1ZXVlLCBleGVjdXRlLCBkZXF1ZXVlXTtcbn1cblxuZnVuY3Rpb24gcGlzdG9sQ29ubmVjdGlvbih7IGRiLCBzZW5kOiBzZW5kRm4gfSkge1xuICBsZXQgY29ubmVjdGlvbjtcbiAgbGV0IHN0YXRlID0ge307XG4gIGxldCBoYXNSZXBvcnRlZEVycm9yID0gZmFsc2U7XG4gIGNvbnN0IGdldCA9IHAgPT4gcGF0aChwLCBzdGF0ZSk7XG4gIGNvbnN0IHNldCA9IChwLCB2KSA9PiAoc3RhdGUgPSBhc3NvY1BhdGgocCwgdiwgc3RhdGUpKTsgLy8gJiYgY29uc29sZS5sb2coc3RhdGUpO1xuICBjb25zdCBtc2dJZCA9ICgpID0+IHV1aWQudjQoKTtcbiAgY29uc3Qgc2VuZCA9IG1zZyA9PlxuICAgIGRiXG4gICAgICAucHJvY2Vzc091dCh7IC4uLm1zZywgdG86IGNvbm5lY3Rpb24gfSlcbiAgICAgIC50aGVuKHIgPT4gciAmJiBzZW5kRm4ocikpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgaWYgKCFoYXNSZXBvcnRlZEVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiUElTVE9MIHNlbmQgZXJyXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShtc2csIG51bGwsIDIpLFxuICAgICAgICAgICAgbXNnLmpzb24ucHV0LFxuICAgICAgICAgICAgZXJyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNSZXBvcnRlZEVycm9yID0gdHJ1ZTtcbiAgICAgIH0pO1xuICBjb25zdCByZWNlaXZlID0gKHsganNvbiwgcmF3LCAuLi5vcHRzIH0pID0+IHtcbiAgICBjb25zdCBwcmVzZXJ2ZWQgPSByYXcgfHwgSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMik7XG5cbiAgICByZXR1cm4gZGJcbiAgICAgIC5wcm9jZXNzSW4oe1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBkYixcbiAgICAgICAganNvbjogeyAuLi5qc29uLCBcIiNcIjoganNvbltcIiNcIl0gfHwgdXVpZC52NCgpIH0sXG4gICAgICAgIGZyb206IGNvbm5lY3Rpb25cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJQSVNUT0wgcmVjZWl2ZSBlcnJcIiwgZXJyLCBwcmVzZXJ2ZWQpKTtcbiAgfTtcblxuICBjb25uZWN0aW9uID0geyBzZW5kLCByZWNlaXZlLCBnZXQsIHNldCwgbXNnSWQgfTtcbiAgcmV0dXJuIGNvbm5lY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2VpdmVyKCkge1xuICBsZXQgcGVlcjtcbiAgY29uc3QgY29ubmVjdGlvbnMgPSBbXTtcbiAgY29uc3QgW29uSW4sIHByb2Nlc3NJbl0gPSBwcm9jZXNzUXVldWUoKTtcbiAgY29uc3QgW29uT3V0LCBwcm9jZXNzT3V0XSA9IHByb2Nlc3NRdWV1ZSgpO1xuXG4gIGZ1bmN0aW9uIGNvbm5lY3RlZChzZW5kKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IHBpc3RvbENvbm5lY3Rpb24oeyBkYjogcGVlciwgc2VuZCB9KTtcblxuICAgIGNvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbik7XG4gICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBkaXNjb25uZWN0ZWQoY29ubmVjdGlvbikge1xuICAgIGNvbnN0IGNvbm5lY3Rpb25JZHggPSBjb25uZWN0aW9ucy5pbmRleE9mKGNvbm5lY3Rpb24pO1xuXG4gICAgaWYgKGNvbm5lY3Rpb25JZHggIT09IC0xKSBjb25uZWN0aW9ucy5zcGxpY2UoY29ubmVjdGlvbklkeCwgMSk7XG4gIH1cblxuICBwZWVyID0ge1xuICAgIGNvbm5lY3Rpb25zLFxuICAgIGNvbm5lY3RlZCxcbiAgICBkaXNjb25uZWN0ZWQsXG4gICAgb25JbixcbiAgICBvbk91dCxcbiAgICBwcm9jZXNzSW4sXG4gICAgcHJvY2Vzc091dFxuICB9O1xuICByZXR1cm4gcGVlcjtcbn1cbiIsImltcG9ydCB7IHBhdGgsIGtleXMgfSBmcm9tIFwicmFtZGFcIjtcbmNvbnN0IE1BWF9NU0dfSURfQ0FDSEUgPSA1MDAwMDtcbmNvbnN0IEdBUkJBR0VfSU5URVJWQUwgPSA2MDAwMDtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBjb25zdCByZWNlaXZlZElkcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3RHYXJiYWdlKCkge1xuICAgIGxldCBpZHMgPSBrZXlzKHJlY2VpdmVkSWRzKS5yZXZlcnNlKCk7XG5cbiAgICB3aGlsZSAoaWRzLmxlbmd0aCA+IE1BWF9NU0dfSURfQ0FDSEUpIHtcbiAgICAgIGRlbGV0ZSByZWNlaXZlZElkc1tpZHMucG9wKCldO1xuICAgIH1cbiAgfVxuXG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCBpZCA9IHBhdGgoW1wianNvblwiLCBcIiNcIl0sIG1zZyk7XG5cbiAgICBpZiAoIWlkIHx8IGlkIGluIHJlY2VpdmVkSWRzKSByZXR1cm4gbnVsbDtcbiAgICByZWNlaXZlZElkc1tpZF0gPSB0cnVlO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIHNldEludGVydmFsKGNvbGxlY3RHYXJiYWdlLCBHQVJCQUdFX0lOVEVSVkFMKTtcblxuICByZXR1cm4gZGI7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFpbkludGVyZmFjZSB9IGZyb20gXCIuL2NoYWluXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXZlbnRDb25mbGljdHMgfSBmcm9tIFwiLi9jb25mbGljdHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVjZWl2ZXIgfSBmcm9tIFwiLi9jb3JlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZHVwbGljYXRlTWVzc2FnZXMgfSBmcm9tIFwiLi9kZWR1cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGxvd0xlZWNoIH0gZnJvbSBcIi4vbGVlY2hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVsYXlNZXNzYWdlcyB9IGZyb20gXCIuL3JlbGF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsdXN0ZXIgfSBmcm9tIFwiLi9jbHVzdGVyXCI7XG5pbXBvcnQgKiBhcyB3ZWJzb2NrZXQgZnJvbSBcIi4vd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRUcmFuc3BvcnQgPSB3ZWJzb2NrZXQ7XG4iLCJpbXBvcnQgeyBwYXRoLCBrZXlzIH0gZnJvbSBcInJhbWRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRiID0+IHtcbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGlmICghbXNnLmZyb20gfHwgIW1zZy5mcm9tLnNldCkgcmV0dXJuIG1zZztcbiAgICBpZiAocGF0aChbXCJqc29uXCIsIFwibGVlY2hcIl0sIG1zZykpIHtcbiAgICAgIG1zZy5mcm9tLnNldChbXCJpc0xlZWNoaW5nXCJdLCB0cnVlKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGFza2luZ0ZvciA9IHBhdGgoW1wianNvblwiLCBcImdldFwiLCBcIiNcIl0sIG1zZyk7XG5cbiAgICBbYXNraW5nRm9yLCAuLi5rZXlzKHBhdGgoW1wianNvblwiLCBcInB1dFwiXSwgbXNnKSldLmZvckVhY2goXG4gICAgICBzb3VsID0+IHNvdWwgJiYgbXNnLmZyb20uc2V0KFtcImhhc0Fza2VkRm9yXCIsIHNvdWxdLCB0cnVlKVxuICAgICk7XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG5cbiAgZGIub25PdXQobXNnID0+IHtcbiAgICBjb25zdCB7IHRvLCBqc29uLCBpZ25vcmVMZWVjaGluZyB9ID0gbXNnO1xuXG4gICAgaWYgKCF0by5nZXQoW1wiaXNMZWVjaGluZ1wiXSkgfHwgaWdub3JlTGVlY2hpbmcpIHJldHVybiBtc2c7XG4gICAgY29uc3QgYXNrZWRQdXRzID0ga2V5cyhqc29uLnB1dCkuZmlsdGVyKHNvdWwgPT4ge1xuICAgICAgaWYgKCF0by5nZXQoW1wiaGFzQXNrZWRGb3JcIiwgc291bF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBzb3VsRGVsdGFzID0gcGF0aChbc291bCwgXCJfXCIsIFwiPlwiXSwganNvbi5wdXQpO1xuICAgICAgbGV0IGhhc1VwZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgaWYgKCFrZXlzKHNvdWxEZWx0YXMpLmxlbmd0aCkgcmV0dXJuIHRydWU7XG5cbiAgICAgIGtleXMoc291bERlbHRhcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBrbm93biA9IHRvLmdldChbXCJrbm93bkRlbHRhc1wiLCBzb3VsLCBrZXldKSB8fCAwO1xuICAgICAgICBjb25zdCBkZWx0YSA9IHBhcnNlRmxvYXQoc291bERlbHRhc1trZXldKSB8fCAwO1xuXG4gICAgICAgIGlmIChrbm93biAmJiBkZWx0YSA8PSBrbm93bikgcmV0dXJuO1xuICAgICAgICB0by5zZXQoW1wia25vd25EZWx0YXNcIiwgc291bCwga2V5XSwgZGVsdGEpO1xuICAgICAgICBoYXNVcGRhdGVzID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhhc1VwZGF0ZXM7XG4gICAgfSk7XG5cbiAgICBpZiAoYXNrZWRQdXRzLmxlbmd0aCkgcmV0dXJuIG1zZztcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9KTtcblxuICByZXR1cm4gZGI7XG59O1xuIiwiaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBkYiA9PiB7XG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCB7IGZyb20sIG5vUmVsYXkgfSA9IG1zZztcblxuICAgIGlmIChub1JlbGF5KSByZXR1cm4gbXNnO1xuICAgIFIud2l0aG91dChbZnJvbV0sIGRiLmNvbm5lY3Rpb25zKS5mb3JFYWNoKGMgPT5cbiAgICAgIGMuc2VuZChSLmFzc29jKFwic2tpcFZhbGlkYXRpb25cIiwgdHJ1ZSwgbXNnKSlcbiAgICApO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuICByZXR1cm4gZGI7XG59O1xuIiwiaW1wb3J0IHsgY3VycnkgfSBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCBXUyBmcm9tIFwid3NcIjtcbmltcG9ydCBSZWNvbm5lY3RpbmdXZWJTb2NrZXQgZnJvbSBcInJlY29ubmVjdGluZy13ZWJzb2NrZXRcIjtcblxuY29uc3QgUElORyA9IDYwMDAwO1xuXG5jb25zdCB3c0Nvbm5lY3Rpb24gPSBjdXJyeSgoZGIsIHdzKSA9PiB7XG4gIGxldCBoYXNMb2dnZWRFcnIgPSBmYWxzZTtcbiAgbGV0IGNvbm5lY3RlZCA9IHRydWU7XG5cbiAgY29uc3QgY29ubmVjdGlvbiA9IGRiLmNvbm5lY3RlZChtc2cgPT4ge1xuICAgIGlmICghbXNnIHx8ICEobXNnLmpzb24gfHwgbXNnLnJhdykgfHwgIWNvbm5lY3RlZCkgcmV0dXJuO1xuICAgIGNvbnN0IHJhdyA9IG1zZy5yYXcgfHwgSlNPTi5zdHJpbmdpZnkobXNnLmpzb24pO1xuXG4gICAgd3Muc2VuZChyYXcsIGVyciA9PiB7XG4gICAgICBpZiAoIWVyciB8fCBoYXNMb2dnZWRFcnIpIHJldHVybjtcbiAgICAgIGNvbnNvbGUud2FybihcIndzIHNlbmQgZXJyXCIsIGVycik7XG4gICAgICBoYXNMb2dnZWRFcnIgPSB0cnVlO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBwaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAoKSA9PiBjb25uZWN0aW9uLnNlbmQoeyBqc29uOiB7IHBpbmc6IHRydWUgfSwgc2tpcFZhbGlkYXRpb246IHRydWUgfSksXG4gICAgUElOR1xuICApO1xuXG4gIGNvbnN0IHJlY2VpdmUgPSBtc2cgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByYXcgPSBtc2cuZGF0YSB8fCBtc2c7XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyYXcpO1xuXG4gICAgICBBcnJheS5pc0FycmF5KGpzb24pXG4gICAgICAgID8ganNvbi5mb3JFYWNoKHJlY2VpdmUpXG4gICAgICAgIDogY29ubmVjdGlvbi5yZWNlaXZlKHsganNvbiwgcmF3IH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJSRUNFSVZFUiBpbnZhbGlkIHdzIG1zZ1wiLCBlLCBtc2cuZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgaWYgKHdzLnJlY29ubmVjdCkgcmV0dXJuO1xuICAgIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgIGNsZWFySW50ZXJ2YWwocGluZ0ludGVydmFsKTtcbiAgICBkYi5kaXNjb25uZWN0ZWQoY29ubmVjdGlvbik7XG4gIH0pO1xuXG4gIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmUpO1xuICByZXR1cm4gY29ubmVjdGlvbjtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VydmVyID0gY3VycnkoKHsgd2ViLCBwb3J0IH0sIGRiKSA9PiB7XG4gIG5ldyBXUy5TZXJ2ZXIoeyBwb3J0OiAhd2ViID8gcG9ydCA6IHVuZGVmaW5lZCwgc2VydmVyOiB3ZWIgfSkub24oXG4gICAgXCJjb25uZWN0aW9uXCIsXG4gICAgd3NDb25uZWN0aW9uKGRiKVxuICApO1xuICByZXR1cm4gZGI7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGN1cnJ5KCh1cmwsIGRiKSA9PiB7XG4gIGNvbnN0IHdzID0gbmV3IFJlY29ubmVjdGluZ1dlYlNvY2tldCh1cmwsIFtdLCB7IFdlYlNvY2tldDogV1MgfSk7XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgKCkgPT4gd3NDb25uZWN0aW9uKGRiLCB3cykpO1xuICByZXR1cm4gZGI7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wbTJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdXVpZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV93c19fOyJdLCJzb3VyY2VSb290IjoiIn0=