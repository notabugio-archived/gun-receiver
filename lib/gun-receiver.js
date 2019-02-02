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
      if (packet.raw.msg.fromCluster === id) return;

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
        topic: MSG_TOPIC,
        msg: R.mergeLeft({
          fromCluster: id,
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
    if (!id || receivedIds[id]) return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1yZWNlaXZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9ub2RlX21vZHVsZXMvcmVjb25uZWN0aW5nLXdlYnNvY2tldC9kaXN0L3JlY29ubmVjdGluZy13ZWJzb2NrZXQubWpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jaGFpbi5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY2x1c3Rlci5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY29uZmxpY3RzLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9kZWR1cC5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL2xlZWNoLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9yZWxheS5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvd2Vic29ja2V0LmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInBtMlwiIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcIndzXCIiXSwibmFtZXMiOlsiZGIiLCJnZXRQYXRoIiwia2V5TGlzdCIsIm9wdHMiLCJ0aGlzQ2hhaW4iLCJvbiIsImZuIiwidmFsdWUiLCJnZXRWYWx1ZSIsImhhc1Jlc3BvbnNlIiwiYm91bmQiLCJiaW5kIiwicmVjZWl2ZWQiLCJ2YWwiLCJyZXF1ZXN0ZWQiLCJncmFwaCIsImNvbm5lY3Rpb24iLCJjb25uZWN0ZWQiLCJtc2ciLCJqc29uIiwiZm9yRWFjaCIsInNvdWwiLCJub2RlIiwibmV4dFZhbHVlIiwiZ2V0Tm9kZSIsInJlY2VpdmUiLCJnZXQiLCJza2lwVmFsaWRhdGlvbiIsImtsIiwibGFzdEtleSIsImxlbmd0aCIsInBhcmVudFZhbHVlIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJsZWVjaCIsImRpc2Nvbm5lY3RlZCIsInRoZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuc3Vic2NyaWJlIiwib25jZSIsImtleSIsIk1TR19UT1BJQyIsIm1vZHVsZSIsImV4cG9ydHMiLCJwbTIiLCJyZXF1aXJlIiwiaWQiLCJ2NCIsImxhdW5jaEJ1cyIsImVyciIsImJ1cyIsImNvbnNvbGUiLCJwYWNrZXQiLCJyYXciLCJmcm9tQ2x1c3RlciIsInRvcGljIiwicHJvY2Vzc0luIiwiUiIsImFzc29jIiwiY2F0Y2giLCJlcnJvciIsIm9uSW4iLCJub1JlbGF5IiwicHJvY2VzcyIsInNlbmQiLCJtZXJnZUxlZnQiLCJ1cGRhdGVkVmVjdG9ycyIsInB1dEtleXMiLCJhbGwiLCJtYXAiLCJwdXRWZWN0b3JzIiwia25vd25WZWN0b3JzIiwicHVzaCIsInByb2Nlc3NRdWV1ZSIsImZucyIsInF1ZXVlIiwiZGVxdWV1ZSIsImV4ZWN1dGUiLCJyZW1haW5pbmdGbnMiLCJyZXZlcnNlIiwiZXhlY3V0ZU5leHQiLCJwb3AiLCJlIiwicmVqZWN0IiwicGlzdG9sQ29ubmVjdGlvbiIsInNlbmRGbiIsInN0YXRlIiwiaGFzUmVwb3J0ZWRFcnJvciIsInAiLCJzZXQiLCJ2IiwibXNnSWQiLCJwcm9jZXNzT3V0IiwidG8iLCJyIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1dCIsInByZXNlcnZlZCIsImZyb20iLCJSZWNlaXZlciIsInBlZXIiLCJjb25uZWN0aW9ucyIsIm9uT3V0IiwiY29ubmVjdGlvbklkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJNQVhfTVNHX0lEX0NBQ0hFIiwiR0FSQkFHRV9JTlRFUlZBTCIsInJlY2VpdmVkSWRzIiwiY29sbGVjdEdhcmJhZ2UiLCJpZHMiLCJzZXRJbnRlcnZhbCIsIndlYnNvY2tldFRyYW5zcG9ydCIsIndlYnNvY2tldCIsImFza2luZ0ZvciIsImlnbm9yZUxlZWNoaW5nIiwiYXNrZWRQdXRzIiwiZmlsdGVyIiwic291bERlbHRhcyIsImhhc1VwZGF0ZXMiLCJrbm93biIsImRlbHRhIiwicGFyc2VGbG9hdCIsIndpdGhvdXQiLCJjIiwiUElORyIsIndzQ29ubmVjdGlvbiIsIndzIiwiaGFzTG9nZ2VkRXJyIiwid2FybiIsInBpbmdJbnRlcnZhbCIsInBpbmciLCJkYXRhIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVjb25uZWN0IiwiY2xlYXJJbnRlcnZhbCIsInNlcnZlciIsIndlYiIsInBvcnQiLCJTZXJ2ZXIiLCJjbGllbnQiLCJ1cmwiLCJXZWJTb2NrZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5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QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSx1QkFBdUIsRUFBRTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFTLEdBQUcsS0FBWjtBQUNBMkgsaUJBQWEsQ0FBQ1IsWUFBRCxDQUFiO0FBQ0FwSSxNQUFFLENBQUNtQyxZQUFILENBQWdCbkIsVUFBaEI7QUFDRCxHQUxEO0FBT0FpSCxJQUFFLENBQUNTLGdCQUFILENBQW9CLFNBQXBCLEVBQStCakgsT0FBL0I7QUFDQSxTQUFPVCxVQUFQO0FBQ0QsQ0ExQ29CLENBQXJCO0FBNENPLElBQU02SCxNQUFNLEdBQUcsa0JBQU0sZ0JBQWdCN0ksRUFBaEIsRUFBdUI7QUFBQSxNQUFwQjhJLEdBQW9CLFFBQXBCQSxHQUFvQjtBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUNqRCxNQUFJLFlBQUdDLE1BQVAsQ0FBYztBQUFFRCxRQUFJLEVBQUUsQ0FBQ0QsR0FBRCxHQUFPQyxJQUFQLEdBQWM5RyxTQUF0QjtBQUFpQzRHLFVBQU0sRUFBRUM7QUFBekMsR0FBZCxFQUE4RHpJLEVBQTlELENBQ0UsWUFERixFQUVFMkgsWUFBWSxDQUFDaEksRUFBRCxDQUZkO0FBSUEsU0FBT0EsRUFBUDtBQUNELENBTnFCLENBQWY7O0FBUUEsSUFBTWlKLE1BQU0sR0FBRyxrQkFBTSxVQUFDQyxHQUFELEVBQU1sSixFQUFOLEVBQWE7QUFDdkMsTUFBTWlJLEVBQUUsR0FBRyxtQ0FBMEJpQixHQUExQixFQUErQixFQUEvQixFQUFtQztBQUFFQyxhQUFTO0FBQVgsR0FBbkMsQ0FBWDtBQUVBbEIsSUFBRSxDQUFDUyxnQkFBSCxDQUFvQixNQUFwQixFQUE0QjtBQUFBLFdBQU1WLFlBQVksQ0FBQ2hJLEVBQUQsRUFBS2lJLEVBQUwsQ0FBbEI7QUFBQSxHQUE1QjtBQUNBLFNBQU9qSSxFQUFQO0FBQ0QsQ0FMcUIsQ0FBZjs7Ozs7Ozs7Ozs7O0FDMURQLGlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6Imd1bi1yZWNlaXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInBtMlwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwidXVpZFwiKSwgcmVxdWlyZShcIndzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZ3VuLXJlY2VpdmVyXCIsIFtcInBtMlwiLCBcInJhbWRhXCIsIFwidXVpZFwiLCBcIndzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImd1bi1yZWNlaXZlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInBtMlwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwidXVpZFwiKSwgcmVxdWlyZShcIndzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndW4tcmVjZWl2ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJwbTJcIl0sIHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInV1aWRcIl0sIHJvb3RbXCJ3c1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9wbTJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3V1aWRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV93c19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XG5cbnZhciBFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50KHR5cGUsIHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRXZlbnQ7XHJcbn0oKSk7XHJcbnZhciBFcnJvckV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEVycm9yRXZlbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBFcnJvckV2ZW50KGVycm9yLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnZXJyb3InLCB0YXJnZXQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgX3RoaXMuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRXJyb3JFdmVudDtcclxufShFdmVudCkpO1xyXG52YXIgQ2xvc2VFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDbG9zZUV2ZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ2xvc2VFdmVudChjb2RlLCByZWFzb24sIHRhcmdldCkge1xyXG4gICAgICAgIGlmIChjb2RlID09PSB2b2lkIDApIHsgY29kZSA9IDEwMDA7IH1cclxuICAgICAgICBpZiAocmVhc29uID09PSB2b2lkIDApIHsgcmVhc29uID0gJyc7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnY2xvc2UnLCB0YXJnZXQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMud2FzQ2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIF90aGlzLnJlYXNvbiA9IHJlYXNvbjtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2xvc2VFdmVudDtcclxufShFdmVudCkpO1xuXG4vKiFcclxuICogUmVjb25uZWN0aW5nIFdlYlNvY2tldFxyXG4gKiBieSBQZWRybyBMYWRhcmlhIDxwZWRyby5sYWRhcmlhQGdtYWlsLmNvbT5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL3BsYWRhcmlhL3JlY29ubmVjdGluZy13ZWJzb2NrZXRcclxuICogTGljZW5zZSBNSVRcclxuICovXHJcbnZhciBnZXRHbG9iYWxXZWJTb2NrZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIFdlYlNvY2tldDtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBnaXZlbiBhcmd1bWVudCBsb29rcyBsaWtlIGEgV2ViU29ja2V0IGNsYXNzXHJcbiAqL1xyXG52YXIgaXNXZWJTb2NrZXQgPSBmdW5jdGlvbiAodykgeyByZXR1cm4gdHlwZW9mIHcgPT09ICdmdW5jdGlvbicgJiYgdy5DTE9TSU5HID09PSAyOyB9O1xyXG52YXIgREVGQVVMVCA9IHtcclxuICAgIG1heFJlY29ubmVjdGlvbkRlbGF5OiAxMDAwMCxcclxuICAgIG1pblJlY29ubmVjdGlvbkRlbGF5OiAxMDAwICsgTWF0aC5yYW5kb20oKSAqIDQwMDAsXHJcbiAgICBtaW5VcHRpbWU6IDUwMDAsXHJcbiAgICByZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3I6IDEuMyxcclxuICAgIGNvbm5lY3Rpb25UaW1lb3V0OiA0MDAwLFxyXG4gICAgbWF4UmV0cmllczogSW5maW5pdHksXHJcbiAgICBkZWJ1ZzogZmFsc2UsXHJcbn07XHJcbnZhciBSZWNvbm5lY3RpbmdXZWJTb2NrZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQodXJsLCBwcm90b2NvbHMsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0ge1xyXG4gICAgICAgICAgICBlcnJvcjogW10sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFtdLFxyXG4gICAgICAgICAgICBvcGVuOiBbXSxcclxuICAgICAgICAgICAgY2xvc2U6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCA9IC0xO1xyXG4gICAgICAgIHRoaXMuX3Nob3VsZFJlY29ubmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdExvY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9iaW5hcnlUeXBlID0gJ2Jsb2InO1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlQ2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbWVzc2FnZVF1ZXVlID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uJ3MgcmVhZHlTdGF0ZSBjaGFuZ2VzIHRvIENMT1NFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiBhbiBlcnJvciBvY2N1cnNcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbidzIHJlYWR5U3RhdGUgY2hhbmdlcyB0byBPUEVOO1xyXG4gICAgICAgICAqIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlIGNvbm5lY3Rpb24gaXMgcmVhZHkgdG8gc2VuZCBhbmQgcmVjZWl2ZSBkYXRhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbm9wZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlT3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ29wZW4gZXZlbnQnKTtcclxuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMuX29wdGlvbnMubWluVXB0aW1lLCBtaW5VcHRpbWUgPSBfYSA9PT0gdm9pZCAwID8gREVGQVVMVC5taW5VcHRpbWUgOiBfYTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLl9jb25uZWN0VGltZW91dCk7XHJcbiAgICAgICAgICAgIF90aGlzLl91cHRpbWVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fYWNjZXB0T3BlbigpOyB9LCBtaW5VcHRpbWUpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIF90aGlzLl93cy5iaW5hcnlUeXBlID0gX3RoaXMuX2JpbmFyeVR5cGU7XHJcbiAgICAgICAgICAgIC8vIHNlbmQgZW5xdWV1ZWQgbWVzc2FnZXMgKG1lc3NhZ2VzIHNlbnQgYmVmb3JlIHdlYnNvY2tldCBvcGVuIGV2ZW50KVxyXG4gICAgICAgICAgICBfdGhpcy5fbWVzc2FnZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIF90aGlzLl93cy5zZW5kKG1lc3NhZ2UpOyB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX21lc3NhZ2VRdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbm9wZW4oZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMub3Blbi5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faGFuZGxlTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ21lc3NhZ2UgZXZlbnQnKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9ubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25tZXNzYWdlKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLm1lc3NhZ2UuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnZXJyb3IgZXZlbnQnLCBldmVudC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgX3RoaXMuX2Rpc2Nvbm5lY3QodW5kZWZpbmVkLCBldmVudC5tZXNzYWdlID09PSAnVElNRU9VVCcgPyAndGltZW91dCcgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25lcnJvcihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdleGVjIGVycm9yIGxpc3RlbmVycycpO1xyXG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLmVycm9yLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVDbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2Nsb3NlIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIF90aGlzLl9jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fc2hvdWxkUmVjb25uZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbmNsb3NlKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLmNsb3NlLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fcHJvdG9jb2xzID0gcHJvdG9jb2xzO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiQ09OTkVDVElOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJPUEVOXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIkNMT1NJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiQ0xPU0VEXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJDT05ORUNUSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5DT05ORUNUSU5HO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiT1BFTlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuT1BFTjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIkNMT1NJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0LkNMT1NJTkc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJDTE9TRURcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0LkNMT1NFRDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcImJpbmFyeVR5cGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy5iaW5hcnlUeXBlIDogdGhpcy5fYmluYXJ5VHlwZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JpbmFyeVR5cGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93cy5iaW5hcnlUeXBlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInJldHJ5Q291bnRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvciBjb25uZWN0aW9uIHJldHJpZXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuX3JldHJ5Q291bnQsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiYnVmZmVyZWRBbW91bnRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgZGF0YSB0aGF0IGhhdmUgYmVlbiBxdWV1ZWQgdXNpbmcgY2FsbHMgdG8gc2VuZCgpIGJ1dCBub3QgeWV0XHJcbiAgICAgICAgICogdHJhbnNtaXR0ZWQgdG8gdGhlIG5ldHdvcmsuIFRoaXMgdmFsdWUgcmVzZXRzIHRvIHplcm8gb25jZSBhbGwgcXVldWVkIGRhdGEgaGFzIGJlZW4gc2VudC5cclxuICAgICAgICAgKiBUaGlzIHZhbHVlIGRvZXMgbm90IHJlc2V0IHRvIHplcm8gd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQ7IGlmIHlvdSBrZWVwIGNhbGxpbmcgc2VuZCgpLFxyXG4gICAgICAgICAqIHRoaXMgd2lsbCBjb250aW51ZSB0byBjbGltYi4gUmVhZCBvbmx5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlcyA9IHRoaXMuX21lc3NhZ2VRdWV1ZS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYyArPSBtZXNzYWdlLmxlbmd0aDsgLy8gbm90IGJ5dGUgc2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEJsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2MgKz0gbWVzc2FnZS5zaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICs9IG1lc3NhZ2UuYnl0ZUxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gYnl0ZXMgKyAodGhpcy5fd3MgPyB0aGlzLl93cy5idWZmZXJlZEFtb3VudCA6IDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiZXh0ZW5zaW9uc1wiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGV4dGVuc2lvbnMgc2VsZWN0ZWQgYnkgdGhlIHNlcnZlci4gVGhpcyBpcyBjdXJyZW50bHkgb25seSB0aGUgZW1wdHkgc3RyaW5nIG9yIGEgbGlzdCBvZlxyXG4gICAgICAgICAqIGV4dGVuc2lvbnMgYXMgbmVnb3RpYXRlZCBieSB0aGUgY29ubmVjdGlvblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy5leHRlbnNpb25zIDogJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJwcm90b2NvbFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBzdHJpbmcgaW5kaWNhdGluZyB0aGUgbmFtZSBvZiB0aGUgc3ViLXByb3RvY29sIHRoZSBzZXJ2ZXIgc2VsZWN0ZWQ7XHJcbiAgICAgICAgICogdGhpcyB3aWxsIGJlIG9uZSBvZiB0aGUgc3RyaW5ncyBzcGVjaWZpZWQgaW4gdGhlIHByb3RvY29scyBwYXJhbWV0ZXIgd2hlbiBjcmVhdGluZyB0aGVcclxuICAgICAgICAgKiBXZWJTb2NrZXQgb2JqZWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLnByb3RvY29sIDogJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJyZWFkeVN0YXRlXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgY29ubmVjdGlvbjsgdGhpcyBpcyBvbmUgb2YgdGhlIFJlYWR5IHN0YXRlIGNvbnN0YW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy5yZWFkeVN0YXRlIDogUmVjb25uZWN0aW5nV2ViU29ja2V0LkNPTk5FQ1RJTkc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJ1cmxcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBVUkwgYXMgcmVzb2x2ZWQgYnkgdGhlIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLnVybCA6ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uIG9yIGNvbm5lY3Rpb24gYXR0ZW1wdCwgaWYgYW55LiBJZiB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5XHJcbiAgICAgKiBDTE9TRUQsIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZ1xyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xyXG4gICAgICAgIGlmIChjb2RlID09PSB2b2lkIDApIHsgY29kZSA9IDEwMDA7IH1cclxuICAgICAgICB0aGlzLl9jbG9zZUNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkUmVjb25uZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ2Nsb3NlIGVucXVldWVkOiBubyB3cyBpbnN0YW5jZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl93cy5yZWFkeVN0YXRlID09PSB0aGlzLkNMT1NFRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnY2xvc2U6IGFscmVhZHkgY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd3MuY2xvc2UoY29kZSwgcmVhc29uKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24gb3IgY29ubmVjdGlvbiBhdHRlbXB0IGFuZCBjb25uZWN0cyBhZ2Fpbi5cclxuICAgICAqIFJlc2V0cyByZXRyeSBjb3VudGVyO1xyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcclxuICAgICAgICB0aGlzLl9zaG91bGRSZWNvbm5lY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlQ2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCA9IC0xO1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MgfHwgdGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gdGhpcy5DTE9TRUQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzY29ubmVjdChjb2RlLCByZWFzb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRW5xdWV1ZSBzcGVjaWZpZWQgZGF0YSB0byBiZSB0cmFuc21pdHRlZCB0byB0aGUgc2VydmVyIG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dzICYmIHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IHRoaXMuT1BFTikge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1Zygnc2VuZCcsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl93cy5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ2VucXVldWUnLCBkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVF1ZXVlLnB1c2goZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBvZiBhIHNwZWNpZmljIGV2ZW50IHR5cGVcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0uZmlsdGVyKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsICE9PSBsaXN0ZW5lcjsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2RlYnVnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5kZWJ1Zykge1xyXG4gICAgICAgICAgICAvLyBub3QgdXNpbmcgc3ByZWFkIGJlY2F1c2UgY29tcGlsZWQgdmVyc2lvbiB1c2VzIFN5bWJvbHNcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnUldTPiddLmNvbmNhdChhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2dldE5leHREZWxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLl9vcHRpb25zLCBfYiA9IF9hLnJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvciwgcmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFQucmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yIDogX2IsIF9jID0gX2EubWluUmVjb25uZWN0aW9uRGVsYXksIG1pblJlY29ubmVjdGlvbkRlbGF5ID0gX2MgPT09IHZvaWQgMCA/IERFRkFVTFQubWluUmVjb25uZWN0aW9uRGVsYXkgOiBfYywgX2QgPSBfYS5tYXhSZWNvbm5lY3Rpb25EZWxheSwgbWF4UmVjb25uZWN0aW9uRGVsYXkgPSBfZCA9PT0gdm9pZCAwID8gREVGQVVMVC5tYXhSZWNvbm5lY3Rpb25EZWxheSA6IF9kO1xyXG4gICAgICAgIHZhciBkZWxheSA9IG1pblJlY29ubmVjdGlvbkRlbGF5O1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXRyeUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBkZWxheSA9XHJcbiAgICAgICAgICAgICAgICBtaW5SZWNvbm5lY3Rpb25EZWxheSAqIE1hdGgucG93KHJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvciwgdGhpcy5fcmV0cnlDb3VudCAtIDEpO1xyXG4gICAgICAgICAgICBpZiAoZGVsYXkgPiBtYXhSZWNvbm5lY3Rpb25EZWxheSkge1xyXG4gICAgICAgICAgICAgICAgZGVsYXkgPSBtYXhSZWNvbm5lY3Rpb25EZWxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kZWJ1ZygnbmV4dCBkZWxheScsIGRlbGF5KTtcclxuICAgICAgICByZXR1cm4gZGVsYXk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fd2FpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIF90aGlzLl9nZXROZXh0RGVsYXkoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZ2V0TmV4dFVybCA9IGZ1bmN0aW9uICh1cmxQcm92aWRlcikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsUHJvdmlkZXIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXJsUHJvdmlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVybFByb3ZpZGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB1cmxQcm92aWRlcigpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXJsLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgVVJMJyk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0TG9jayB8fCAhdGhpcy5fc2hvdWxkUmVjb25uZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdExvY2sgPSB0cnVlO1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuX29wdGlvbnMsIF9iID0gX2EubWF4UmV0cmllcywgbWF4UmV0cmllcyA9IF9iID09PSB2b2lkIDAgPyBERUZBVUxULm1heFJldHJpZXMgOiBfYiwgX2MgPSBfYS5jb25uZWN0aW9uVGltZW91dCwgY29ubmVjdGlvblRpbWVvdXQgPSBfYyA9PT0gdm9pZCAwID8gREVGQVVMVC5jb25uZWN0aW9uVGltZW91dCA6IF9jLCBfZCA9IF9hLldlYlNvY2tldCwgV2ViU29ja2V0ID0gX2QgPT09IHZvaWQgMCA/IGdldEdsb2JhbFdlYlNvY2tldCgpIDogX2Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JldHJ5Q291bnQgPj0gbWF4UmV0cmllcykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnbWF4IHJldHJpZXMgcmVhY2hlZCcsIHRoaXMuX3JldHJ5Q291bnQsICc+PScsIG1heFJldHJpZXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQrKztcclxuICAgICAgICB0aGlzLl9kZWJ1ZygnY29ubmVjdCcsIHRoaXMuX3JldHJ5Q291bnQpO1xyXG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgIGlmICghaXNXZWJTb2NrZXQoV2ViU29ja2V0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTm8gdmFsaWQgV2ViU29ja2V0IGNsYXNzIHByb3ZpZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3dhaXQoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fZ2V0TmV4dFVybChfdGhpcy5fdXJsKTsgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICAvLyBjbG9zZSBjb3VsZCBiZSBjYWxsZWQgYmVmb3JlIGNyZWF0aW5nIHRoZSB3c1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX2Nsb3NlQ2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fY29ubmVjdExvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2Nvbm5lY3QnLCB7IHVybDogdXJsLCBwcm90b2NvbHM6IF90aGlzLl9wcm90b2NvbHMgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLl93cyA9IF90aGlzLl9wcm90b2NvbHNcclxuICAgICAgICAgICAgICAgID8gbmV3IFdlYlNvY2tldCh1cmwsIF90aGlzLl9wcm90b2NvbHMpXHJcbiAgICAgICAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJsKTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBfdGhpcy5fd3MuYmluYXJ5VHlwZSA9IF90aGlzLl9iaW5hcnlUeXBlO1xyXG4gICAgICAgICAgICBfdGhpcy5fY29ubmVjdExvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgX3RoaXMuX2FkZExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICBfdGhpcy5fY29ubmVjdFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9oYW5kbGVUaW1lb3V0KCk7IH0sIGNvbm5lY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9oYW5kbGVUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnKCd0aW1lb3V0IGV2ZW50Jyk7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IobmV3IEVycm9yRXZlbnQoRXJyb3IoJ1RJTUVPVVQnKSwgdGhpcykpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2Rpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gMTAwMDsgfVxyXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5fd3MuY2xvc2UoY29kZSwgcmVhc29uKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2xvc2UobmV3IENsb3NlRXZlbnQoY29kZSwgcmVhc29uLCB0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBpZ25vcmVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fYWNjZXB0T3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1ZygnYWNjZXB0IG9wZW4nKTtcclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50ID0gMDtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9jYWxsRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgbGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAoJ2hhbmRsZUV2ZW50JyBpbiBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGlzdGVuZXIoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9yZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdyZW1vdmVMaXN0ZW5lcnMnKTtcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuJywgdGhpcy5faGFuZGxlT3Blbik7XHJcbiAgICAgICAgdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLl9oYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX2hhbmRsZU1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX2hhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdhZGRMaXN0ZW5lcnMnKTtcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgdGhpcy5faGFuZGxlT3Blbik7XHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLl9oYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX2hhbmRsZU1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX2hhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9jbGVhclRpbWVvdXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jb25uZWN0VGltZW91dCk7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3VwdGltZVRpbWVvdXQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQ7XHJcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29ubmVjdGluZ1dlYlNvY2tldDtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsgaWRlbnRpdHksIGtleXMsIHByb3AsIHBhdGggfSBmcm9tIFwicmFtZGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBjb25zdCBnZXRQYXRoID0gKGtleUxpc3QsIG9wdHMgPSB7fSkgPT4ge1xuICAgIGxldCB0aGlzQ2hhaW47XG4gICAgY29uc3Qgb24gPSBmbiA9PiB7XG4gICAgICBsZXQgdmFsdWUsIGdldFZhbHVlO1xuICAgICAgbGV0IGhhc1Jlc3BvbnNlID0gZmFsc2U7XG4gICAgICBjb25zdCBib3VuZCA9IGZuLmJpbmQodGhpc0NoYWluKTtcbiAgICAgIGNvbnN0IHJlY2VpdmVkID0gdmFsID0+IChoYXNSZXNwb25zZSA9IHRydWUpICYmIGJvdW5kKCh2YWx1ZSA9IHZhbCkpO1xuICAgICAgY29uc3QgcmVxdWVzdGVkID0ge307XG4gICAgICBjb25zdCBncmFwaCA9IHt9O1xuXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gZGIuY29ubmVjdGVkKG1zZyA9PiB7XG4gICAgICAgIGNvbnN0IHsganNvbiB9ID0gbXNnO1xuXG4gICAgICAgIGtleXMocHJvcChcInB1dFwiLCBqc29uKSkuZm9yRWFjaChzb3VsID0+IHtcbiAgICAgICAgICBpZiAoIXJlcXVlc3RlZFtzb3VsXSkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBwYXRoKFtcInB1dFwiLCBzb3VsXSwganNvbik7XG5cbiAgICAgICAgICBpZiAoIW5vZGUgJiYgIWhhc1Jlc3BvbnNlKSByZWNlaXZlZCgpO1xuICAgICAgICAgIGlmIChub2RlKSBncmFwaFtzb3VsXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBnZXRWYWx1ZShrZXlMaXN0KTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlICE9PSB2YWx1ZSkgcmVjZWl2ZWQobmV4dFZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBnZXROb2RlID0gc291bCA9PiB7XG4gICAgICAgIGlmIChyZXF1ZXN0ZWRbc291bF0pIHJldHVybiBncmFwaFtzb3VsXTtcbiAgICAgICAgcmVxdWVzdGVkW3NvdWxdID0gdHJ1ZTtcbiAgICAgICAgY29ubmVjdGlvbi5yZWNlaXZlKHtcbiAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICAgIGpzb246IHsgZ2V0OiB7IFwiI1wiOiBzb3VsIH0gfSxcbiAgICAgICAgICBza2lwVmFsaWRhdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyYXBoW3NvdWxdO1xuICAgICAgfTtcblxuICAgICAgZ2V0VmFsdWUgPSBrbCA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBrbFtrbC5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoa2wubGVuZ3RoID09PSAxKSByZXR1cm4gZ2V0Tm9kZShsYXN0S2V5KTtcbiAgICAgICAgY29uc3QgcGFyZW50VmFsdWUgPSBnZXRWYWx1ZShrbC5zbGljZSgwLCBrbC5sZW5ndGggLSAxKSk7XG5cbiAgICAgICAgaWYgKCFwYXJlbnRWYWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wKGxhc3RLZXksIHBhcmVudFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWVbXCIjXCJdKSByZXR1cm4gZ2V0Tm9kZSh2YWx1ZVtcIiNcIl0pO1xuICAgICAgICBpZiAoa2wgPT09IGtleUxpc3QpIHJlY2VpdmVkKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcblxuICAgICAgY29ubmVjdGlvbi5yZWNlaXZlKHsganNvbjogeyBsZWVjaDogdHJ1ZSB9IH0pO1xuICAgICAgZ2V0VmFsdWUoa2V5TGlzdCk7XG4gICAgICByZXR1cm4gKCkgPT4gZGIuZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pO1xuICAgIH07XG5cbiAgICBjb25zdCB0aGVuID0gKGZuID0gaWRlbnRpdHkpID0+XG4gICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbih2YWwgPT4ge1xuICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLnRoZW4oZm4pO1xuXG4gICAgY29uc3Qgb25jZSA9IGZuID0+IHRoZW4oZm4uYmluZCh0aGlzQ2hhaW4pKSAmJiB0aGlzQ2hhaW47XG4gICAgY29uc3QgZ2V0ID0gKGtleSwgb3B0cyA9IHt9KSA9PiBnZXRQYXRoKFsuLi5rZXlMaXN0LCBrZXldLCBvcHRzKTtcblxuICAgIHRoaXNDaGFpbiA9IHsgZ2V0LCBvbiwgdGhlbiwgb25jZSB9O1xuICAgIHJldHVybiB0aGlzQ2hhaW47XG4gIH07XG5cbiAgZGIuZ2V0ID0gKGtleSwgb3B0cyA9IHt9KSA9PiBnZXRQYXRoKFtrZXldLCBvcHRzKTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZFwiO1xuXG5jb25zdCBNU0dfVE9QSUMgPSBcImd1bjptc2dcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBkYiA9PiB7XG4gIGNvbnN0IHBtMiA9IHJlcXVpcmUoXCJwbTJcIik7XG4gIGNvbnN0IGlkID0gdXVpZC52NCgpO1xuXG4gIHBtMi5sYXVuY2hCdXMoKGVyciwgYnVzKSA9PiB7XG4gICAgaWYgKGVycikgY29uc29sZS5lcnIoZXJyKTtcbiAgICBidXMub24oXCJwcm9jZXNzOm1zZ1wiLCBwYWNrZXQgPT4ge1xuICAgICAgaWYgKHBhY2tldC5yYXcubXNnLmZyb21DbHVzdGVyID09PSBpZCkgcmV0dXJuO1xuICAgICAgaWYgKHBhY2tldC5yYXcudG9waWMgPT09IE1TR19UT1BJQykge1xuICAgICAgICBkYi5wcm9jZXNzSW4oUi5hc3NvYyhcImRiXCIsIGRiLCBwYWNrZXQucmF3Lm1zZykpLmNhdGNoKGVyciA9PlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQSVNUT0wgY2x1c3RlciBlcnJcIiwgZXJyKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgY29uc3QgeyBmcm9tQ2x1c3Rlciwgbm9SZWxheSB9ID0gbXNnO1xuXG4gICAgaWYgKG5vUmVsYXkgfHwgZnJvbUNsdXN0ZXIpIHJldHVybiBtc2c7XG4gICAgaWYgKHByb2Nlc3Muc2VuZCkge1xuICAgICAgcHJvY2Vzcy5zZW5kKHtcbiAgICAgICAgdG9waWM6IE1TR19UT1BJQyxcbiAgICAgICAgbXNnOiBSLm1lcmdlTGVmdCh7IGZyb21DbHVzdGVyOiBpZCwgc2tpcFZhbGlkYXRpb246IHRydWUgfSwgbXNnKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIHJldHVybiBkYjtcbn07XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCB7IGtleXMsIHByb3AsIHBhdGggfSBmcm9tIFwicmFtZGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgY29uc3QgeyBqc29uIH0gPSBtc2c7XG4gICAgY29uc3QgdXBkYXRlZFZlY3RvcnMgPSBbXTtcbiAgICBjb25zdCBwdXRLZXlzID0ga2V5cyhwcm9wKFwicHV0XCIsIGpzb24pKTtcblxuICAgIGlmICghcHV0S2V5cy5sZW5ndGgpIHJldHVybiBQcm9taXNlLnJlc29sdmUobXNnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICBwdXRLZXlzLm1hcChzb3VsID0+IHtcbiAgICAgICAgY29uc3QgcHV0VmVjdG9ycyA9IHBhdGgoW1wicHV0XCIsIHNvdWwsIFwiX1wiLCBcIj5cIl0sIGpzb24pIHx8IHt9O1xuXG4gICAgICAgIHJldHVybiBkYi5nZXQoc291bCwgeyBub1JlbGF5OiB0cnVlIH0pLnRoZW4obm9kZSA9PiB7XG4gICAgICAgICAgY29uc3Qga25vd25WZWN0b3JzID0gcGF0aChbXCJfXCIsIFwiPlwiXSwgbm9kZSkgfHwge307XG5cbiAgICAgICAgICBrZXlzKHB1dFZlY3RvcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrbm93blZlY3RvcnNba2V5XSAmJiBrbm93blZlY3RvcnNba2V5XSA+IHB1dFZlY3RvcnNba2V5XSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVkVmVjdG9ycy5wdXNoKHB1dFZlY3RvcnNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApLnRoZW4oKCkgPT4gKHVwZGF0ZWRWZWN0b3JzLmxlbmd0aCB8fCBqc29uLmdldCA/IG1zZyA6IG51bGwpKTtcbiAgfSk7XG4gIHJldHVybiBkYjtcbn07XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCB7IGFzc29jUGF0aCwgcGF0aCwgd2l0aG91dCB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcblxuZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKCkge1xuICBsZXQgZm5zID0gW107XG4gIGNvbnN0IHF1ZXVlID0gZm4gPT4gZm5zLnB1c2goZm4pO1xuICBjb25zdCBkZXF1ZXVlID0gZm4gPT4gKGZucyA9IHdpdGhvdXQoW2ZuXSwgZm5zKSk7XG5cbiAgZnVuY3Rpb24gZXhlY3V0ZShtc2cpIHtcbiAgICBjb25zdCByZW1haW5pbmdGbnMgPSBmbnMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgZXhlY3V0ZU5leHQgPSBtc2cgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZm4gPSByZW1haW5pbmdGbnMucG9wKCk7XG5cbiAgICAgICAgaWYgKG1zZyAmJiBmbikgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmbihtc2cpKS50aGVuKGV4ZWN1dGVOZXh0KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtc2cpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBleGVjdXRlTmV4dChtc2cpO1xuICB9XG5cbiAgcmV0dXJuIFtxdWV1ZSwgZXhlY3V0ZSwgZGVxdWV1ZV07XG59XG5cbmZ1bmN0aW9uIHBpc3RvbENvbm5lY3Rpb24oeyBkYiwgc2VuZDogc2VuZEZuIH0pIHtcbiAgbGV0IGNvbm5lY3Rpb247XG4gIGxldCBzdGF0ZSA9IHt9O1xuICBsZXQgaGFzUmVwb3J0ZWRFcnJvciA9IGZhbHNlO1xuICBjb25zdCBnZXQgPSBwID0+IHBhdGgocCwgc3RhdGUpO1xuICBjb25zdCBzZXQgPSAocCwgdikgPT4gKHN0YXRlID0gYXNzb2NQYXRoKHAsIHYsIHN0YXRlKSk7IC8vICYmIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgY29uc3QgbXNnSWQgPSAoKSA9PiB1dWlkLnY0KCk7XG4gIGNvbnN0IHNlbmQgPSBtc2cgPT5cbiAgICBkYlxuICAgICAgLnByb2Nlc3NPdXQoeyAuLi5tc2csIHRvOiBjb25uZWN0aW9uIH0pXG4gICAgICAudGhlbihyID0+IHIgJiYgc2VuZEZuKHIpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGlmICghaGFzUmVwb3J0ZWRFcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIlBJU1RPTCBzZW5kIGVyclwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobXNnLCBudWxsLCAyKSxcbiAgICAgICAgICAgIG1zZy5qc29uLnB1dCxcbiAgICAgICAgICAgIGVyclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaGFzUmVwb3J0ZWRFcnJvciA9IHRydWU7XG4gICAgICB9KTtcbiAgY29uc3QgcmVjZWl2ZSA9ICh7IGpzb24sIHJhdywgLi4ub3B0cyB9KSA9PiB7XG4gICAgY29uc3QgcHJlc2VydmVkID0gcmF3IHx8IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpO1xuXG4gICAgcmV0dXJuIGRiXG4gICAgICAucHJvY2Vzc0luKHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgZGIsXG4gICAgICAgIGpzb246IHsgLi4uanNvbiwgXCIjXCI6IGpzb25bXCIjXCJdIHx8IHV1aWQudjQoKSB9LFxuICAgICAgICBmcm9tOiBjb25uZWN0aW9uXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiUElTVE9MIHJlY2VpdmUgZXJyXCIsIGVyciwgcHJlc2VydmVkKSk7XG4gIH07XG5cbiAgY29ubmVjdGlvbiA9IHsgc2VuZCwgcmVjZWl2ZSwgZ2V0LCBzZXQsIG1zZ0lkIH07XG4gIHJldHVybiBjb25uZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNlaXZlcigpIHtcbiAgbGV0IHBlZXI7XG4gIGNvbnN0IGNvbm5lY3Rpb25zID0gW107XG4gIGNvbnN0IFtvbkluLCBwcm9jZXNzSW5dID0gcHJvY2Vzc1F1ZXVlKCk7XG4gIGNvbnN0IFtvbk91dCwgcHJvY2Vzc091dF0gPSBwcm9jZXNzUXVldWUoKTtcblxuICBmdW5jdGlvbiBjb25uZWN0ZWQoc2VuZCkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBwaXN0b2xDb25uZWN0aW9uKHsgZGI6IHBlZXIsIHNlbmQgfSk7XG5cbiAgICBjb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pO1xuICAgIHJldHVybiBjb25uZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pIHtcbiAgICBjb25zdCBjb25uZWN0aW9uSWR4ID0gY29ubmVjdGlvbnMuaW5kZXhPZihjb25uZWN0aW9uKTtcblxuICAgIGlmIChjb25uZWN0aW9uSWR4ICE9PSAtMSkgY29ubmVjdGlvbnMuc3BsaWNlKGNvbm5lY3Rpb25JZHgsIDEpO1xuICB9XG5cbiAgcGVlciA9IHtcbiAgICBjb25uZWN0aW9ucyxcbiAgICBjb25uZWN0ZWQsXG4gICAgZGlzY29ubmVjdGVkLFxuICAgIG9uSW4sXG4gICAgb25PdXQsXG4gICAgcHJvY2Vzc0luLFxuICAgIHByb2Nlc3NPdXRcbiAgfTtcbiAgcmV0dXJuIHBlZXI7XG59XG4iLCJpbXBvcnQgeyBwYXRoLCBrZXlzIH0gZnJvbSBcInJhbWRhXCI7XG5jb25zdCBNQVhfTVNHX0lEX0NBQ0hFID0gNTAwMDA7XG5jb25zdCBHQVJCQUdFX0lOVEVSVkFMID0gNjAwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGRiID0+IHtcbiAgY29uc3QgcmVjZWl2ZWRJZHMgPSB7fTtcblxuICBmdW5jdGlvbiBjb2xsZWN0R2FyYmFnZSgpIHtcbiAgICBsZXQgaWRzID0ga2V5cyhyZWNlaXZlZElkcykucmV2ZXJzZSgpO1xuXG4gICAgd2hpbGUgKGlkcy5sZW5ndGggPiBNQVhfTVNHX0lEX0NBQ0hFKSB7XG4gICAgICBkZWxldGUgcmVjZWl2ZWRJZHNbaWRzLnBvcCgpXTtcbiAgICB9XG4gIH1cblxuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgY29uc3QgaWQgPSBwYXRoKFtcImpzb25cIiwgXCIjXCJdLCBtc2cpO1xuXG4gICAgaWYgKCFpZCB8fCByZWNlaXZlZElkc1tpZF0pIHJldHVybiBudWxsO1xuICAgIHJlY2VpdmVkSWRzW2lkXSA9IHRydWU7XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG5cbiAgc2V0SW50ZXJ2YWwoY29sbGVjdEdhcmJhZ2UsIEdBUkJBR0VfSU5URVJWQUwpO1xuXG4gIHJldHVybiBkYjtcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNoYWluSW50ZXJmYWNlIH0gZnJvbSBcIi4vY2hhaW5cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJldmVudENvbmZsaWN0cyB9IGZyb20gXCIuL2NvbmZsaWN0c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWNlaXZlciB9IGZyb20gXCIuL2NvcmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVkdXBsaWNhdGVNZXNzYWdlcyB9IGZyb20gXCIuL2RlZHVwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbG93TGVlY2ggfSBmcm9tIFwiLi9sZWVjaFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWxheU1lc3NhZ2VzIH0gZnJvbSBcIi4vcmVsYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2x1c3RlciB9IGZyb20gXCIuL2NsdXN0ZXJcIjtcbmltcG9ydCAqIGFzIHdlYnNvY2tldCBmcm9tIFwiLi93ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IHdlYnNvY2tldFRyYW5zcG9ydCA9IHdlYnNvY2tldDtcbiIsImltcG9ydCB7IHBhdGgsIGtleXMgfSBmcm9tIFwicmFtZGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgaWYgKCFtc2cuZnJvbSB8fCAhbXNnLmZyb20uc2V0KSByZXR1cm4gbXNnO1xuICAgIGlmIChwYXRoKFtcImpzb25cIiwgXCJsZWVjaFwiXSwgbXNnKSkge1xuICAgICAgbXNnLmZyb20uc2V0KFtcImlzTGVlY2hpbmdcIl0sIHRydWUpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgYXNraW5nRm9yID0gcGF0aChbXCJqc29uXCIsIFwiZ2V0XCIsIFwiI1wiXSwgbXNnKTtcblxuICAgIFthc2tpbmdGb3IsIC4uLmtleXMocGF0aChbXCJqc29uXCIsIFwicHV0XCJdLCBtc2cpKV0uZm9yRWFjaChcbiAgICAgIHNvdWwgPT4gc291bCAmJiBtc2cuZnJvbS5zZXQoW1wiaGFzQXNrZWRGb3JcIiwgc291bF0sIHRydWUpXG4gICAgKTtcbiAgICByZXR1cm4gbXNnO1xuICB9KTtcblxuICBkYi5vbk91dChtc2cgPT4ge1xuICAgIGNvbnN0IHsgdG8sIGpzb24sIGlnbm9yZUxlZWNoaW5nIH0gPSBtc2c7XG5cbiAgICBpZiAoIXRvLmdldChbXCJpc0xlZWNoaW5nXCJdKSB8fCBpZ25vcmVMZWVjaGluZykgcmV0dXJuIG1zZztcbiAgICBjb25zdCBhc2tlZFB1dHMgPSBrZXlzKGpzb24ucHV0KS5maWx0ZXIoc291bCA9PiB7XG4gICAgICBpZiAoIXRvLmdldChbXCJoYXNBc2tlZEZvclwiLCBzb3VsXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IHNvdWxEZWx0YXMgPSBwYXRoKFtzb3VsLCBcIl9cIiwgXCI+XCJdLCBqc29uLnB1dCk7XG4gICAgICBsZXQgaGFzVXBkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBpZiAoIWtleXMoc291bERlbHRhcykubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcblxuICAgICAga2V5cyhzb3VsRGVsdGFzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGtub3duID0gdG8uZ2V0KFtcImtub3duRGVsdGFzXCIsIHNvdWwsIGtleV0pIHx8IDA7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gcGFyc2VGbG9hdChzb3VsRGVsdGFzW2tleV0pIHx8IDA7XG5cbiAgICAgICAgaWYgKGtub3duICYmIGRlbHRhIDw9IGtub3duKSByZXR1cm47XG4gICAgICAgIHRvLnNldChbXCJrbm93bkRlbHRhc1wiLCBzb3VsLCBrZXldLCBkZWx0YSk7XG4gICAgICAgIGhhc1VwZGF0ZXMgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGFzVXBkYXRlcztcbiAgICB9KTtcblxuICAgIGlmIChhc2tlZFB1dHMubGVuZ3RoKSByZXR1cm4gbXNnO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBkYjtcbn07XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRiID0+IHtcbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGNvbnN0IHsgZnJvbSwgbm9SZWxheSB9ID0gbXNnO1xuXG4gICAgaWYgKG5vUmVsYXkpIHJldHVybiBtc2c7XG4gICAgUi53aXRob3V0KFtmcm9tXSwgZGIuY29ubmVjdGlvbnMpLmZvckVhY2goYyA9PlxuICAgICAgYy5zZW5kKFIuYXNzb2MoXCJza2lwVmFsaWRhdGlvblwiLCB0cnVlLCBtc2cpKVxuICAgICk7XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG4gIHJldHVybiBkYjtcbn07XG4iLCJpbXBvcnQgeyBjdXJyeSB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IFdTIGZyb20gXCJ3c1wiO1xuaW1wb3J0IFJlY29ubmVjdGluZ1dlYlNvY2tldCBmcm9tIFwicmVjb25uZWN0aW5nLXdlYnNvY2tldFwiO1xuXG5jb25zdCBQSU5HID0gNjAwMDA7XG5cbmNvbnN0IHdzQ29ubmVjdGlvbiA9IGN1cnJ5KChkYiwgd3MpID0+IHtcbiAgbGV0IGhhc0xvZ2dlZEVyciA9IGZhbHNlO1xuICBsZXQgY29ubmVjdGVkID0gdHJ1ZTtcblxuICBjb25zdCBjb25uZWN0aW9uID0gZGIuY29ubmVjdGVkKG1zZyA9PiB7XG4gICAgaWYgKCFtc2cgfHwgIShtc2cuanNvbiB8fCBtc2cucmF3KSB8fCAhY29ubmVjdGVkKSByZXR1cm47XG4gICAgY29uc3QgcmF3ID0gbXNnLnJhdyB8fCBKU09OLnN0cmluZ2lmeShtc2cuanNvbik7XG5cbiAgICB3cy5zZW5kKHJhdywgZXJyID0+IHtcbiAgICAgIGlmICghZXJyIHx8IGhhc0xvZ2dlZEVycikgcmV0dXJuO1xuICAgICAgY29uc29sZS53YXJuKFwid3Mgc2VuZCBlcnJcIiwgZXJyKTtcbiAgICAgIGhhc0xvZ2dlZEVyciA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICgpID0+IGNvbm5lY3Rpb24uc2VuZCh7IGpzb246IHsgcGluZzogdHJ1ZSB9LCBza2lwVmFsaWRhdGlvbjogdHJ1ZSB9KSxcbiAgICBQSU5HXG4gICk7XG5cbiAgY29uc3QgcmVjZWl2ZSA9IG1zZyA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJhdyA9IG1zZy5kYXRhIHx8IG1zZztcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIEFycmF5LmlzQXJyYXkoanNvbilcbiAgICAgICAgPyBqc29uLmZvckVhY2gocmVjZWl2ZSlcbiAgICAgICAgOiBjb25uZWN0aW9uLnJlY2VpdmUoeyBqc29uLCByYXcgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJFQ0VJVkVSIGludmFsaWQgd3MgbXNnXCIsIGUsIG1zZy5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHtcbiAgICBpZiAod3MucmVjb25uZWN0KSByZXR1cm47XG4gICAgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbChwaW5nSW50ZXJ2YWwpO1xuICAgIGRiLmRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKTtcbiAgfSk7XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZSk7XG4gIHJldHVybiBjb25uZWN0aW9uO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBjdXJyeSgoeyB3ZWIsIHBvcnQgfSwgZGIpID0+IHtcbiAgbmV3IFdTLlNlcnZlcih7IHBvcnQ6ICF3ZWIgPyBwb3J0IDogdW5kZWZpbmVkLCBzZXJ2ZXI6IHdlYiB9KS5vbihcbiAgICBcImNvbm5lY3Rpb25cIixcbiAgICB3c0Nvbm5lY3Rpb24oZGIpXG4gICk7XG4gIHJldHVybiBkYjtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3VycnkoKHVybCwgZGIpID0+IHtcbiAgY29uc3Qgd3MgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCwgW10sIHsgV2ViU29ja2V0OiBXUyB9KTtcblxuICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB3c0Nvbm5lY3Rpb24oZGIsIHdzKSk7XG4gIHJldHVybiBkYjtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BtMl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV91dWlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX187Il0sInNvdXJjZVJvb3QiOiIifQ==