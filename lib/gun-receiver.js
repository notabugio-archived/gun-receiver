(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ramda"), require("uuid"), require("ws"));
	else if(typeof define === 'function' && define.amd)
		define("gun-receiver", ["ramda", "uuid", "ws"], factory);
	else if(typeof exports === 'object')
		exports["gun-receiver"] = factory(require("ramda"), require("uuid"), require("ws"));
	else
		root["gun-receiver"] = factory(root["ramda"], root["uuid"], root["ws"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_ramda__, __WEBPACK_EXTERNAL_MODULE_uuid__, __WEBPACK_EXTERNAL_MODULE_ws__) {
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
        opts = _objectWithoutProperties(_ref2, ["json"]);

    var preserved = JSON.stringify(json, null, 2);
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
exports.websocketTransport = void 0;

var _chain = _interopRequireDefault(__webpack_require__(/*! ./chain */ "./src/chain.js"));

var _conflicts = _interopRequireDefault(__webpack_require__(/*! ./conflicts */ "./src/conflicts.js"));

var _core = _interopRequireDefault(__webpack_require__(/*! ./core */ "./src/core.js"));

var _dedup = _interopRequireDefault(__webpack_require__(/*! ./dedup */ "./src/dedup.js"));

var _leech = _interopRequireDefault(__webpack_require__(/*! ./leech */ "./src/leech.js"));

var _relay = _interopRequireDefault(__webpack_require__(/*! ./relay */ "./src/relay.js"));

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


var _ramda = __webpack_require__(/*! ramda */ "ramda");

module.exports = function (db) {
  db.onIn(function (msg) {
    var from = msg.from,
        json = msg.json,
        noRelay = msg.noRelay;
    if (noRelay) return msg;
    (0, _ramda.without)([from], db.connections).forEach(function (c) {
      return c.send({
        from: from,
        json: json,
        skipValidation: true
      });
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
    if (!msg || !msg.json || !connected) return;
    ws.send(JSON.stringify(msg.json), function (err) {
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
      var json = JSON.parse(msg.data || msg);
      Array.isArray(json) ? json.forEach(receive) : connection.receive({
        json: json
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1yZWNlaXZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9ub2RlX21vZHVsZXMvcmVjb25uZWN0aW5nLXdlYnNvY2tldC9kaXN0L3JlY29ubmVjdGluZy13ZWJzb2NrZXQubWpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jaGFpbi5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY29uZmxpY3RzLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9kZWR1cC5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL2xlZWNoLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9yZWxheS5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvd2Vic29ja2V0LmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcIndzXCIiXSwibmFtZXMiOlsiZGIiLCJnZXRQYXRoIiwia2V5TGlzdCIsIm9wdHMiLCJ0aGlzQ2hhaW4iLCJvbiIsImZuIiwidmFsdWUiLCJnZXRWYWx1ZSIsImhhc1Jlc3BvbnNlIiwiYm91bmQiLCJiaW5kIiwicmVjZWl2ZWQiLCJ2YWwiLCJyZXF1ZXN0ZWQiLCJncmFwaCIsImNvbm5lY3Rpb24iLCJjb25uZWN0ZWQiLCJtc2ciLCJqc29uIiwiZm9yRWFjaCIsInNvdWwiLCJub2RlIiwibmV4dFZhbHVlIiwiZ2V0Tm9kZSIsInJlY2VpdmUiLCJnZXQiLCJza2lwVmFsaWRhdGlvbiIsImtsIiwibGFzdEtleSIsImxlbmd0aCIsInBhcmVudFZhbHVlIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJsZWVjaCIsImRpc2Nvbm5lY3RlZCIsInRoZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuc3Vic2NyaWJlIiwib25jZSIsImtleSIsIm9uSW4iLCJ1cGRhdGVkVmVjdG9ycyIsInB1dEtleXMiLCJhbGwiLCJtYXAiLCJwdXRWZWN0b3JzIiwibm9SZWxheSIsImtub3duVmVjdG9ycyIsInB1c2giLCJwcm9jZXNzUXVldWUiLCJmbnMiLCJxdWV1ZSIsImRlcXVldWUiLCJleGVjdXRlIiwicmVtYWluaW5nRm5zIiwicmV2ZXJzZSIsImV4ZWN1dGVOZXh0IiwicG9wIiwiZSIsInJlamVjdCIsInBpc3RvbENvbm5lY3Rpb24iLCJzZW5kRm4iLCJzZW5kIiwic3RhdGUiLCJoYXNSZXBvcnRlZEVycm9yIiwicCIsInNldCIsInYiLCJtc2dJZCIsInY0IiwicHJvY2Vzc091dCIsInRvIiwiciIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1dCIsInByZXNlcnZlZCIsInByb2Nlc3NJbiIsImZyb20iLCJSZWNlaXZlciIsInBlZXIiLCJjb25uZWN0aW9ucyIsIm9uT3V0IiwiY29ubmVjdGlvbklkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJNQVhfTVNHX0lEX0NBQ0hFIiwiR0FSQkFHRV9JTlRFUlZBTCIsInJlY2VpdmVkSWRzIiwiY29sbGVjdEdhcmJhZ2UiLCJpZHMiLCJpZCIsInNldEludGVydmFsIiwid2Vic29ja2V0VHJhbnNwb3J0Iiwid2Vic29ja2V0IiwiYXNraW5nRm9yIiwiaWdub3JlTGVlY2hpbmciLCJhc2tlZFB1dHMiLCJmaWx0ZXIiLCJzb3VsRGVsdGFzIiwiaGFzVXBkYXRlcyIsImtub3duIiwiZGVsdGEiLCJwYXJzZUZsb2F0IiwibW9kdWxlIiwiZXhwb3J0cyIsImMiLCJQSU5HIiwid3NDb25uZWN0aW9uIiwid3MiLCJoYXNMb2dnZWRFcnIiLCJ3YXJuIiwicGluZ0ludGVydmFsIiwicGluZyIsInBhcnNlIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWNvbm5lY3QiLCJjbGVhckludGVydmFsIiwic2VydmVyIiwid2ViIiwicG9ydCIsIlNlcnZlciIsImNsaWVudCIsInVybCIsIldlYlNvY2tldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbURBQW1EO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw0QkFBNEIsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZ0NBQWdDLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Qsa0RBQWtELEVBQUU7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGtEQUFrRCxFQUFFO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0RBQWtELEVBQUU7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrREFBa0QsRUFBRTtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHVCQUF1QixFQUFFO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQ0FBc0MsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsd0NBQXdDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELCtCQUErQixF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Q0FBZjs7Ozs7Ozs7Ozs7O0FDdkRQLG1EOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGdEIiwiZmlsZSI6Imd1bi1yZWNlaXZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwidXVpZFwiKSwgcmVxdWlyZShcIndzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZ3VuLXJlY2VpdmVyXCIsIFtcInJhbWRhXCIsIFwidXVpZFwiLCBcIndzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImd1bi1yZWNlaXZlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwidXVpZFwiKSwgcmVxdWlyZShcIndzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndW4tcmVjZWl2ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInV1aWRcIl0sIHJvb3RbXCJ3c1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3V1aWRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV93c19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XG5cbnZhciBFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEV2ZW50KHR5cGUsIHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRXZlbnQ7XHJcbn0oKSk7XHJcbnZhciBFcnJvckV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEVycm9yRXZlbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBFcnJvckV2ZW50KGVycm9yLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnZXJyb3InLCB0YXJnZXQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgX3RoaXMuZXJyb3IgPSBlcnJvcjtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRXJyb3JFdmVudDtcclxufShFdmVudCkpO1xyXG52YXIgQ2xvc2VFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhDbG9zZUV2ZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gQ2xvc2VFdmVudChjb2RlLCByZWFzb24sIHRhcmdldCkge1xyXG4gICAgICAgIGlmIChjb2RlID09PSB2b2lkIDApIHsgY29kZSA9IDEwMDA7IH1cclxuICAgICAgICBpZiAocmVhc29uID09PSB2b2lkIDApIHsgcmVhc29uID0gJyc7IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCAnY2xvc2UnLCB0YXJnZXQpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMud2FzQ2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIF90aGlzLnJlYXNvbiA9IHJlYXNvbjtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQ2xvc2VFdmVudDtcclxufShFdmVudCkpO1xuXG4vKiFcclxuICogUmVjb25uZWN0aW5nIFdlYlNvY2tldFxyXG4gKiBieSBQZWRybyBMYWRhcmlhIDxwZWRyby5sYWRhcmlhQGdtYWlsLmNvbT5cclxuICogaHR0cHM6Ly9naXRodWIuY29tL3BsYWRhcmlhL3JlY29ubmVjdGluZy13ZWJzb2NrZXRcclxuICogTGljZW5zZSBNSVRcclxuICovXHJcbnZhciBnZXRHbG9iYWxXZWJTb2NrZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgcmV0dXJuIFdlYlNvY2tldDtcclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiBnaXZlbiBhcmd1bWVudCBsb29rcyBsaWtlIGEgV2ViU29ja2V0IGNsYXNzXHJcbiAqL1xyXG52YXIgaXNXZWJTb2NrZXQgPSBmdW5jdGlvbiAodykgeyByZXR1cm4gdHlwZW9mIHcgPT09ICdmdW5jdGlvbicgJiYgdy5DTE9TSU5HID09PSAyOyB9O1xyXG52YXIgREVGQVVMVCA9IHtcclxuICAgIG1heFJlY29ubmVjdGlvbkRlbGF5OiAxMDAwMCxcclxuICAgIG1pblJlY29ubmVjdGlvbkRlbGF5OiAxMDAwICsgTWF0aC5yYW5kb20oKSAqIDQwMDAsXHJcbiAgICBtaW5VcHRpbWU6IDUwMDAsXHJcbiAgICByZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3I6IDEuMyxcclxuICAgIGNvbm5lY3Rpb25UaW1lb3V0OiA0MDAwLFxyXG4gICAgbWF4UmV0cmllczogSW5maW5pdHksXHJcbiAgICBkZWJ1ZzogZmFsc2UsXHJcbn07XHJcbnZhciBSZWNvbm5lY3RpbmdXZWJTb2NrZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQodXJsLCBwcm90b2NvbHMsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0ge1xyXG4gICAgICAgICAgICBlcnJvcjogW10sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFtdLFxyXG4gICAgICAgICAgICBvcGVuOiBbXSxcclxuICAgICAgICAgICAgY2xvc2U6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCA9IC0xO1xyXG4gICAgICAgIHRoaXMuX3Nob3VsZFJlY29ubmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdExvY2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9iaW5hcnlUeXBlID0gJ2Jsb2InO1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlQ2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbWVzc2FnZVF1ZXVlID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uJ3MgcmVhZHlTdGF0ZSBjaGFuZ2VzIHRvIENMT1NFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25jbG9zZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiBhbiBlcnJvciBvY2N1cnNcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbidzIHJlYWR5U3RhdGUgY2hhbmdlcyB0byBPUEVOO1xyXG4gICAgICAgICAqIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlIGNvbm5lY3Rpb24gaXMgcmVhZHkgdG8gc2VuZCBhbmQgcmVjZWl2ZSBkYXRhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbm9wZW4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlT3BlbiA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ29wZW4gZXZlbnQnKTtcclxuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMuX29wdGlvbnMubWluVXB0aW1lLCBtaW5VcHRpbWUgPSBfYSA9PT0gdm9pZCAwID8gREVGQVVMVC5taW5VcHRpbWUgOiBfYTtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLl9jb25uZWN0VGltZW91dCk7XHJcbiAgICAgICAgICAgIF90aGlzLl91cHRpbWVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fYWNjZXB0T3BlbigpOyB9LCBtaW5VcHRpbWUpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIF90aGlzLl93cy5iaW5hcnlUeXBlID0gX3RoaXMuX2JpbmFyeVR5cGU7XHJcbiAgICAgICAgICAgIC8vIHNlbmQgZW5xdWV1ZWQgbWVzc2FnZXMgKG1lc3NhZ2VzIHNlbnQgYmVmb3JlIHdlYnNvY2tldCBvcGVuIGV2ZW50KVxyXG4gICAgICAgICAgICBfdGhpcy5fbWVzc2FnZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIF90aGlzLl93cy5zZW5kKG1lc3NhZ2UpOyB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX21lc3NhZ2VRdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbm9wZW4oZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMub3Blbi5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faGFuZGxlTWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ21lc3NhZ2UgZXZlbnQnKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9ubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25tZXNzYWdlKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLm1lc3NhZ2UuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnZXJyb3IgZXZlbnQnLCBldmVudC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgX3RoaXMuX2Rpc2Nvbm5lY3QodW5kZWZpbmVkLCBldmVudC5tZXNzYWdlID09PSAnVElNRU9VVCcgPyAndGltZW91dCcgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25lcnJvcihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdleGVjIGVycm9yIGxpc3RlbmVycycpO1xyXG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLmVycm9yLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVDbG9zZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2Nsb3NlIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIF90aGlzLl9jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fc2hvdWxkUmVjb25uZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbmNsb3NlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbmNsb3NlKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLmNsb3NlLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fcHJvdG9jb2xzID0gcHJvdG9jb2xzO1xyXG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiQ09OTkVDVElOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJPUEVOXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIkNMT1NJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiQ0xPU0VEXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJDT05ORUNUSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5DT05ORUNUSU5HO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiT1BFTlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuT1BFTjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIkNMT1NJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0LkNMT1NJTkc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJDTE9TRURcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0LkNMT1NFRDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcImJpbmFyeVR5cGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy5iaW5hcnlUeXBlIDogdGhpcy5fYmluYXJ5VHlwZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JpbmFyeVR5cGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93cy5iaW5hcnlUeXBlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInJldHJ5Q291bnRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvciBjb25uZWN0aW9uIHJldHJpZXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuX3JldHJ5Q291bnQsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiYnVmZmVyZWRBbW91bnRcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgZGF0YSB0aGF0IGhhdmUgYmVlbiBxdWV1ZWQgdXNpbmcgY2FsbHMgdG8gc2VuZCgpIGJ1dCBub3QgeWV0XHJcbiAgICAgICAgICogdHJhbnNtaXR0ZWQgdG8gdGhlIG5ldHdvcmsuIFRoaXMgdmFsdWUgcmVzZXRzIHRvIHplcm8gb25jZSBhbGwgcXVldWVkIGRhdGEgaGFzIGJlZW4gc2VudC5cclxuICAgICAgICAgKiBUaGlzIHZhbHVlIGRvZXMgbm90IHJlc2V0IHRvIHplcm8gd2hlbiB0aGUgY29ubmVjdGlvbiBpcyBjbG9zZWQ7IGlmIHlvdSBrZWVwIGNhbGxpbmcgc2VuZCgpLFxyXG4gICAgICAgICAqIHRoaXMgd2lsbCBjb250aW51ZSB0byBjbGltYi4gUmVhZCBvbmx5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBieXRlcyA9IHRoaXMuX21lc3NhZ2VRdWV1ZS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYyArPSBtZXNzYWdlLmxlbmd0aDsgLy8gbm90IGJ5dGUgc2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZSBpbnN0YW5jZW9mIEJsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2MgKz0gbWVzc2FnZS5zaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICs9IG1lc3NhZ2UuYnl0ZUxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICByZXR1cm4gYnl0ZXMgKyAodGhpcy5fd3MgPyB0aGlzLl93cy5idWZmZXJlZEFtb3VudCA6IDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiZXh0ZW5zaW9uc1wiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGV4dGVuc2lvbnMgc2VsZWN0ZWQgYnkgdGhlIHNlcnZlci4gVGhpcyBpcyBjdXJyZW50bHkgb25seSB0aGUgZW1wdHkgc3RyaW5nIG9yIGEgbGlzdCBvZlxyXG4gICAgICAgICAqIGV4dGVuc2lvbnMgYXMgbmVnb3RpYXRlZCBieSB0aGUgY29ubmVjdGlvblxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy5leHRlbnNpb25zIDogJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJwcm90b2NvbFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBzdHJpbmcgaW5kaWNhdGluZyB0aGUgbmFtZSBvZiB0aGUgc3ViLXByb3RvY29sIHRoZSBzZXJ2ZXIgc2VsZWN0ZWQ7XHJcbiAgICAgICAgICogdGhpcyB3aWxsIGJlIG9uZSBvZiB0aGUgc3RyaW5ncyBzcGVjaWZpZWQgaW4gdGhlIHByb3RvY29scyBwYXJhbWV0ZXIgd2hlbiBjcmVhdGluZyB0aGVcclxuICAgICAgICAgKiBXZWJTb2NrZXQgb2JqZWN0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLnByb3RvY29sIDogJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJyZWFkeVN0YXRlXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgY29ubmVjdGlvbjsgdGhpcyBpcyBvbmUgb2YgdGhlIFJlYWR5IHN0YXRlIGNvbnN0YW50c1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy5yZWFkeVN0YXRlIDogUmVjb25uZWN0aW5nV2ViU29ja2V0LkNPTk5FQ1RJTkc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJ1cmxcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBVUkwgYXMgcmVzb2x2ZWQgYnkgdGhlIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLnVybCA6ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uIG9yIGNvbm5lY3Rpb24gYXR0ZW1wdCwgaWYgYW55LiBJZiB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5XHJcbiAgICAgKiBDTE9TRUQsIHRoaXMgbWV0aG9kIGRvZXMgbm90aGluZ1xyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xyXG4gICAgICAgIGlmIChjb2RlID09PSB2b2lkIDApIHsgY29kZSA9IDEwMDA7IH1cclxuICAgICAgICB0aGlzLl9jbG9zZUNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkUmVjb25uZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ2Nsb3NlIGVucXVldWVkOiBubyB3cyBpbnN0YW5jZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl93cy5yZWFkeVN0YXRlID09PSB0aGlzLkNMT1NFRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnY2xvc2U6IGFscmVhZHkgY2xvc2VkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd3MuY2xvc2UoY29kZSwgcmVhc29uKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24gb3IgY29ubmVjdGlvbiBhdHRlbXB0IGFuZCBjb25uZWN0cyBhZ2Fpbi5cclxuICAgICAqIFJlc2V0cyByZXRyeSBjb3VudGVyO1xyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcclxuICAgICAgICB0aGlzLl9zaG91bGRSZWNvbm5lY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlQ2FsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCA9IC0xO1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MgfHwgdGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gdGhpcy5DTE9TRUQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzY29ubmVjdChjb2RlLCByZWFzb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogRW5xdWV1ZSBzcGVjaWZpZWQgZGF0YSB0byBiZSB0cmFuc21pdHRlZCB0byB0aGUgc2VydmVyIG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dzICYmIHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IHRoaXMuT1BFTikge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1Zygnc2VuZCcsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl93cy5zZW5kKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ2VucXVldWUnLCBkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVF1ZXVlLnB1c2goZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBvZiBhIHNwZWNpZmljIGV2ZW50IHR5cGVcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0gPSB0aGlzLl9saXN0ZW5lcnNbdHlwZV0uZmlsdGVyKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsICE9PSBsaXN0ZW5lcjsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2RlYnVnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fb3B0aW9ucy5kZWJ1Zykge1xyXG4gICAgICAgICAgICAvLyBub3QgdXNpbmcgc3ByZWFkIGJlY2F1c2UgY29tcGlsZWQgdmVyc2lvbiB1c2VzIFN5bWJvbHNcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnUldTPiddLmNvbmNhdChhcmdzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2dldE5leHREZWxheSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLl9vcHRpb25zLCBfYiA9IF9hLnJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvciwgcmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFQucmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yIDogX2IsIF9jID0gX2EubWluUmVjb25uZWN0aW9uRGVsYXksIG1pblJlY29ubmVjdGlvbkRlbGF5ID0gX2MgPT09IHZvaWQgMCA/IERFRkFVTFQubWluUmVjb25uZWN0aW9uRGVsYXkgOiBfYywgX2QgPSBfYS5tYXhSZWNvbm5lY3Rpb25EZWxheSwgbWF4UmVjb25uZWN0aW9uRGVsYXkgPSBfZCA9PT0gdm9pZCAwID8gREVGQVVMVC5tYXhSZWNvbm5lY3Rpb25EZWxheSA6IF9kO1xyXG4gICAgICAgIHZhciBkZWxheSA9IG1pblJlY29ubmVjdGlvbkRlbGF5O1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXRyeUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBkZWxheSA9XHJcbiAgICAgICAgICAgICAgICBtaW5SZWNvbm5lY3Rpb25EZWxheSAqIE1hdGgucG93KHJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvciwgdGhpcy5fcmV0cnlDb3VudCAtIDEpO1xyXG4gICAgICAgICAgICBpZiAoZGVsYXkgPiBtYXhSZWNvbm5lY3Rpb25EZWxheSkge1xyXG4gICAgICAgICAgICAgICAgZGVsYXkgPSBtYXhSZWNvbm5lY3Rpb25EZWxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kZWJ1ZygnbmV4dCBkZWxheScsIGRlbGF5KTtcclxuICAgICAgICByZXR1cm4gZGVsYXk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fd2FpdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIF90aGlzLl9nZXROZXh0RGVsYXkoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZ2V0TmV4dFVybCA9IGZ1bmN0aW9uICh1cmxQcm92aWRlcikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsUHJvdmlkZXIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXJsUHJvdmlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVybFByb3ZpZGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB1cmxQcm92aWRlcigpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodXJsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodXJsLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0ludmFsaWQgVVJMJyk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb25uZWN0TG9jayB8fCAhdGhpcy5fc2hvdWxkUmVjb25uZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdExvY2sgPSB0cnVlO1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuX29wdGlvbnMsIF9iID0gX2EubWF4UmV0cmllcywgbWF4UmV0cmllcyA9IF9iID09PSB2b2lkIDAgPyBERUZBVUxULm1heFJldHJpZXMgOiBfYiwgX2MgPSBfYS5jb25uZWN0aW9uVGltZW91dCwgY29ubmVjdGlvblRpbWVvdXQgPSBfYyA9PT0gdm9pZCAwID8gREVGQVVMVC5jb25uZWN0aW9uVGltZW91dCA6IF9jLCBfZCA9IF9hLldlYlNvY2tldCwgV2ViU29ja2V0ID0gX2QgPT09IHZvaWQgMCA/IGdldEdsb2JhbFdlYlNvY2tldCgpIDogX2Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JldHJ5Q291bnQgPj0gbWF4UmV0cmllcykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnbWF4IHJldHJpZXMgcmVhY2hlZCcsIHRoaXMuX3JldHJ5Q291bnQsICc+PScsIG1heFJldHJpZXMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQrKztcclxuICAgICAgICB0aGlzLl9kZWJ1ZygnY29ubmVjdCcsIHRoaXMuX3JldHJ5Q291bnQpO1xyXG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgIGlmICghaXNXZWJTb2NrZXQoV2ViU29ja2V0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTm8gdmFsaWQgV2ViU29ja2V0IGNsYXNzIHByb3ZpZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3dhaXQoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fZ2V0TmV4dFVybChfdGhpcy5fdXJsKTsgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgICAgICAvLyBjbG9zZSBjb3VsZCBiZSBjYWxsZWQgYmVmb3JlIGNyZWF0aW5nIHRoZSB3c1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX2Nsb3NlQ2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5fY29ubmVjdExvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2Nvbm5lY3QnLCB7IHVybDogdXJsLCBwcm90b2NvbHM6IF90aGlzLl9wcm90b2NvbHMgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLl93cyA9IF90aGlzLl9wcm90b2NvbHNcclxuICAgICAgICAgICAgICAgID8gbmV3IFdlYlNvY2tldCh1cmwsIF90aGlzLl9wcm90b2NvbHMpXHJcbiAgICAgICAgICAgICAgICA6IG5ldyBXZWJTb2NrZXQodXJsKTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBfdGhpcy5fd3MuYmluYXJ5VHlwZSA9IF90aGlzLl9iaW5hcnlUeXBlO1xyXG4gICAgICAgICAgICBfdGhpcy5fY29ubmVjdExvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgX3RoaXMuX2FkZExpc3RlbmVycygpO1xyXG4gICAgICAgICAgICBfdGhpcy5fY29ubmVjdFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9oYW5kbGVUaW1lb3V0KCk7IH0sIGNvbm5lY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9oYW5kbGVUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnKCd0aW1lb3V0IGV2ZW50Jyk7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IobmV3IEVycm9yRXZlbnQoRXJyb3IoJ1RJTUVPVVQnKSwgdGhpcykpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2Rpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gMTAwMDsgfVxyXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5fd3MuY2xvc2UoY29kZSwgcmVhc29uKTtcclxuICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2xvc2UobmV3IENsb3NlRXZlbnQoY29kZSwgcmVhc29uLCB0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBpZ25vcmVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fYWNjZXB0T3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1ZygnYWNjZXB0IG9wZW4nKTtcclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50ID0gMDtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9jYWxsRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgbGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAoJ2hhbmRsZUV2ZW50JyBpbiBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGlzdGVuZXIoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9yZW1vdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdyZW1vdmVMaXN0ZW5lcnMnKTtcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdvcGVuJywgdGhpcy5faGFuZGxlT3Blbik7XHJcbiAgICAgICAgdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLl9oYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX2hhbmRsZU1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX2hhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdhZGRMaXN0ZW5lcnMnKTtcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgdGhpcy5faGFuZGxlT3Blbik7XHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLl9oYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX2hhbmRsZU1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHRoaXMuX2hhbmRsZUVycm9yKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9jbGVhclRpbWVvdXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jb25uZWN0VGltZW91dCk7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3VwdGltZVRpbWVvdXQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQ7XHJcbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29ubmVjdGluZ1dlYlNvY2tldDtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsgaWRlbnRpdHksIGtleXMsIHByb3AsIHBhdGggfSBmcm9tIFwicmFtZGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBjb25zdCBnZXRQYXRoID0gKGtleUxpc3QsIG9wdHMgPSB7fSkgPT4ge1xuICAgIGxldCB0aGlzQ2hhaW47XG4gICAgY29uc3Qgb24gPSBmbiA9PiB7XG4gICAgICBsZXQgdmFsdWUsIGdldFZhbHVlO1xuICAgICAgbGV0IGhhc1Jlc3BvbnNlID0gZmFsc2U7XG4gICAgICBjb25zdCBib3VuZCA9IGZuLmJpbmQodGhpc0NoYWluKTtcbiAgICAgIGNvbnN0IHJlY2VpdmVkID0gdmFsID0+IChoYXNSZXNwb25zZSA9IHRydWUpICYmIGJvdW5kKCh2YWx1ZSA9IHZhbCkpO1xuICAgICAgY29uc3QgcmVxdWVzdGVkID0ge307XG4gICAgICBjb25zdCBncmFwaCA9IHt9O1xuXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gZGIuY29ubmVjdGVkKG1zZyA9PiB7XG4gICAgICAgIGNvbnN0IHsganNvbiB9ID0gbXNnO1xuXG4gICAgICAgIGtleXMocHJvcChcInB1dFwiLCBqc29uKSkuZm9yRWFjaChzb3VsID0+IHtcbiAgICAgICAgICBpZiAoIXJlcXVlc3RlZFtzb3VsXSkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBwYXRoKFtcInB1dFwiLCBzb3VsXSwganNvbik7XG5cbiAgICAgICAgICBpZiAoIW5vZGUgJiYgIWhhc1Jlc3BvbnNlKSByZWNlaXZlZCgpO1xuICAgICAgICAgIGlmIChub2RlKSBncmFwaFtzb3VsXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBnZXRWYWx1ZShrZXlMaXN0KTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlICE9PSB2YWx1ZSkgcmVjZWl2ZWQobmV4dFZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBnZXROb2RlID0gc291bCA9PiB7XG4gICAgICAgIGlmIChyZXF1ZXN0ZWRbc291bF0pIHJldHVybiBncmFwaFtzb3VsXTtcbiAgICAgICAgcmVxdWVzdGVkW3NvdWxdID0gdHJ1ZTtcbiAgICAgICAgY29ubmVjdGlvbi5yZWNlaXZlKHtcbiAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICAgIGpzb246IHsgZ2V0OiB7IFwiI1wiOiBzb3VsIH0gfSxcbiAgICAgICAgICBza2lwVmFsaWRhdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyYXBoW3NvdWxdO1xuICAgICAgfTtcblxuICAgICAgZ2V0VmFsdWUgPSBrbCA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBrbFtrbC5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoa2wubGVuZ3RoID09PSAxKSByZXR1cm4gZ2V0Tm9kZShsYXN0S2V5KTtcbiAgICAgICAgY29uc3QgcGFyZW50VmFsdWUgPSBnZXRWYWx1ZShrbC5zbGljZSgwLCBrbC5sZW5ndGggLSAxKSk7XG5cbiAgICAgICAgaWYgKCFwYXJlbnRWYWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wKGxhc3RLZXksIHBhcmVudFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWVbXCIjXCJdKSByZXR1cm4gZ2V0Tm9kZSh2YWx1ZVtcIiNcIl0pO1xuICAgICAgICBpZiAoa2wgPT09IGtleUxpc3QpIHJlY2VpdmVkKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcblxuICAgICAgY29ubmVjdGlvbi5yZWNlaXZlKHsganNvbjogeyBsZWVjaDogdHJ1ZSB9IH0pO1xuICAgICAgZ2V0VmFsdWUoa2V5TGlzdCk7XG4gICAgICByZXR1cm4gKCkgPT4gZGIuZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pO1xuICAgIH07XG5cbiAgICBjb25zdCB0aGVuID0gKGZuID0gaWRlbnRpdHkpID0+XG4gICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbih2YWwgPT4ge1xuICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLnRoZW4oZm4pO1xuXG4gICAgY29uc3Qgb25jZSA9IGZuID0+IHRoZW4oZm4uYmluZCh0aGlzQ2hhaW4pKSAmJiB0aGlzQ2hhaW47XG4gICAgY29uc3QgZ2V0ID0gKGtleSwgb3B0cyA9IHt9KSA9PiBnZXRQYXRoKFsuLi5rZXlMaXN0LCBrZXldLCBvcHRzKTtcblxuICAgIHRoaXNDaGFpbiA9IHsgZ2V0LCBvbiwgdGhlbiwgb25jZSB9O1xuICAgIHJldHVybiB0aGlzQ2hhaW47XG4gIH07XG5cbiAgZGIuZ2V0ID0gKGtleSwgb3B0cyA9IHt9KSA9PiBnZXRQYXRoKFtrZXldLCBvcHRzKTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsga2V5cywgcHJvcCwgcGF0aCB9IGZyb20gXCJyYW1kYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCB7IGpzb24gfSA9IG1zZztcbiAgICBjb25zdCB1cGRhdGVkVmVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IHB1dEtleXMgPSBrZXlzKHByb3AoXCJwdXRcIiwganNvbikpO1xuXG4gICAgaWYgKCFwdXRLZXlzLmxlbmd0aCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtc2cpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIHB1dEtleXMubWFwKHNvdWwgPT4ge1xuICAgICAgICBjb25zdCBwdXRWZWN0b3JzID0gcGF0aChbXCJwdXRcIiwgc291bCwgXCJfXCIsIFwiPlwiXSwganNvbikgfHwge307XG5cbiAgICAgICAgcmV0dXJuIGRiLmdldChzb3VsLCB7IG5vUmVsYXk6IHRydWUgfSkudGhlbihub2RlID0+IHtcbiAgICAgICAgICBjb25zdCBrbm93blZlY3RvcnMgPSBwYXRoKFtcIl9cIiwgXCI+XCJdLCBub2RlKSB8fCB7fTtcblxuICAgICAgICAgIGtleXMocHV0VmVjdG9ycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtub3duVmVjdG9yc1trZXldICYmIGtub3duVmVjdG9yc1trZXldID4gcHV0VmVjdG9yc1trZXldKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZWRWZWN0b3JzLnB1c2gocHV0VmVjdG9yc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICkudGhlbigoKSA9PiAodXBkYXRlZFZlY3RvcnMubGVuZ3RoIHx8IGpzb24uZ2V0ID8gbXNnIDogbnVsbCkpO1xuICB9KTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsgYXNzb2NQYXRoLCBwYXRoLCB3aXRob3V0IH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZFwiO1xuXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUoKSB7XG4gIGxldCBmbnMgPSBbXTtcbiAgY29uc3QgcXVldWUgPSBmbiA9PiBmbnMucHVzaChmbik7XG4gIGNvbnN0IGRlcXVldWUgPSBmbiA9PiAoZm5zID0gd2l0aG91dChbZm5dLCBmbnMpKTtcblxuICBmdW5jdGlvbiBleGVjdXRlKG1zZykge1xuICAgIGNvbnN0IHJlbWFpbmluZ0ZucyA9IGZucy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICBjb25zdCBleGVjdXRlTmV4dCA9IG1zZyA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmbiA9IHJlbWFpbmluZ0Zucy5wb3AoKTtcblxuICAgICAgICBpZiAobXNnICYmIGZuKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZuKG1zZykpLnRoZW4oZXhlY3V0ZU5leHQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1zZyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4ZWN1dGVOZXh0KG1zZyk7XG4gIH1cblxuICByZXR1cm4gW3F1ZXVlLCBleGVjdXRlLCBkZXF1ZXVlXTtcbn1cblxuZnVuY3Rpb24gcGlzdG9sQ29ubmVjdGlvbih7IGRiLCBzZW5kOiBzZW5kRm4gfSkge1xuICBsZXQgY29ubmVjdGlvbjtcbiAgbGV0IHN0YXRlID0ge307XG4gIGxldCBoYXNSZXBvcnRlZEVycm9yID0gZmFsc2U7XG4gIGNvbnN0IGdldCA9IHAgPT4gcGF0aChwLCBzdGF0ZSk7XG4gIGNvbnN0IHNldCA9IChwLCB2KSA9PiAoc3RhdGUgPSBhc3NvY1BhdGgocCwgdiwgc3RhdGUpKTsgLy8gJiYgY29uc29sZS5sb2coc3RhdGUpO1xuICBjb25zdCBtc2dJZCA9ICgpID0+IHV1aWQudjQoKTtcbiAgY29uc3Qgc2VuZCA9IG1zZyA9PlxuICAgIGRiXG4gICAgICAucHJvY2Vzc091dCh7IC4uLm1zZywgdG86IGNvbm5lY3Rpb24gfSlcbiAgICAgIC50aGVuKHIgPT4gciAmJiBzZW5kRm4ocikpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgaWYgKCFoYXNSZXBvcnRlZEVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiUElTVE9MIHNlbmQgZXJyXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShtc2csIG51bGwsIDIpLFxuICAgICAgICAgICAgbXNnLmpzb24ucHV0LFxuICAgICAgICAgICAgZXJyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNSZXBvcnRlZEVycm9yID0gdHJ1ZTtcbiAgICAgIH0pO1xuICBjb25zdCByZWNlaXZlID0gKHsganNvbiwgLi4ub3B0cyB9KSA9PiB7XG4gICAgY29uc3QgcHJlc2VydmVkID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgbnVsbCwgMik7XG5cbiAgICByZXR1cm4gZGJcbiAgICAgIC5wcm9jZXNzSW4oe1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBkYixcbiAgICAgICAganNvbjogeyAuLi5qc29uLCBcIiNcIjoganNvbltcIiNcIl0gfHwgdXVpZC52NCgpIH0sXG4gICAgICAgIGZyb206IGNvbm5lY3Rpb25cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJQSVNUT0wgcmVjZWl2ZSBlcnJcIiwgZXJyLCBwcmVzZXJ2ZWQpKTtcbiAgfTtcblxuICBjb25uZWN0aW9uID0geyBzZW5kLCByZWNlaXZlLCBnZXQsIHNldCwgbXNnSWQgfTtcbiAgcmV0dXJuIGNvbm5lY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2VpdmVyKCkge1xuICBsZXQgcGVlcjtcbiAgY29uc3QgY29ubmVjdGlvbnMgPSBbXTtcbiAgY29uc3QgW29uSW4sIHByb2Nlc3NJbl0gPSBwcm9jZXNzUXVldWUoKTtcbiAgY29uc3QgW29uT3V0LCBwcm9jZXNzT3V0XSA9IHByb2Nlc3NRdWV1ZSgpO1xuXG4gIGZ1bmN0aW9uIGNvbm5lY3RlZChzZW5kKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IHBpc3RvbENvbm5lY3Rpb24oeyBkYjogcGVlciwgc2VuZCB9KTtcblxuICAgIGNvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbik7XG4gICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBkaXNjb25uZWN0ZWQoY29ubmVjdGlvbikge1xuICAgIGNvbnN0IGNvbm5lY3Rpb25JZHggPSBjb25uZWN0aW9ucy5pbmRleE9mKGNvbm5lY3Rpb24pO1xuXG4gICAgaWYgKGNvbm5lY3Rpb25JZHggIT09IC0xKSBjb25uZWN0aW9ucy5zcGxpY2UoY29ubmVjdGlvbklkeCwgMSk7XG4gIH1cblxuICBwZWVyID0ge1xuICAgIGNvbm5lY3Rpb25zLFxuICAgIGNvbm5lY3RlZCxcbiAgICBkaXNjb25uZWN0ZWQsXG4gICAgb25JbixcbiAgICBvbk91dCxcbiAgICBwcm9jZXNzSW4sXG4gICAgcHJvY2Vzc091dFxuICB9O1xuICByZXR1cm4gcGVlcjtcbn1cbiIsImltcG9ydCB7IHBhdGgsIGtleXMgfSBmcm9tIFwicmFtZGFcIjtcbmNvbnN0IE1BWF9NU0dfSURfQ0FDSEUgPSA1MDAwMDtcbmNvbnN0IEdBUkJBR0VfSU5URVJWQUwgPSA2MDAwMDtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBjb25zdCByZWNlaXZlZElkcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3RHYXJiYWdlKCkge1xuICAgIGxldCBpZHMgPSBrZXlzKHJlY2VpdmVkSWRzKS5yZXZlcnNlKCk7XG5cbiAgICB3aGlsZSAoaWRzLmxlbmd0aCA+IE1BWF9NU0dfSURfQ0FDSEUpIHtcbiAgICAgIGRlbGV0ZSByZWNlaXZlZElkc1tpZHMucG9wKCldO1xuICAgIH1cbiAgfVxuXG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCBpZCA9IHBhdGgoW1wianNvblwiLCBcIiNcIl0sIG1zZyk7XG5cbiAgICBpZiAoIWlkIHx8IGlkIGluIHJlY2VpdmVkSWRzKSByZXR1cm4gbnVsbDtcbiAgICByZWNlaXZlZElkc1tpZF0gPSB0cnVlO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIHNldEludGVydmFsKGNvbGxlY3RHYXJiYWdlLCBHQVJCQUdFX0lOVEVSVkFMKTtcblxuICByZXR1cm4gZGI7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFpbkludGVyZmFjZSB9IGZyb20gXCIuL2NoYWluXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZXZlbnRDb25mbGljdHMgfSBmcm9tIFwiLi9jb25mbGljdHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVjZWl2ZXIgfSBmcm9tIFwiLi9jb3JlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlZHVwbGljYXRlTWVzc2FnZXMgfSBmcm9tIFwiLi9kZWR1cFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbGxvd0xlZWNoIH0gZnJvbSBcIi4vbGVlY2hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVsYXlNZXNzYWdlcyB9IGZyb20gXCIuL3JlbGF5XCI7XG5pbXBvcnQgKiBhcyB3ZWJzb2NrZXQgZnJvbSBcIi4vd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCB3ZWJzb2NrZXRUcmFuc3BvcnQgPSB3ZWJzb2NrZXQ7XG4iLCJpbXBvcnQgeyBwYXRoLCBrZXlzIH0gZnJvbSBcInJhbWRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRiID0+IHtcbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGlmIChwYXRoKFtcImpzb25cIiwgXCJsZWVjaFwiXSwgbXNnKSkge1xuICAgICAgbXNnLmZyb20uc2V0KFtcImlzTGVlY2hpbmdcIl0sIHRydWUpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgYXNraW5nRm9yID0gcGF0aChbXCJqc29uXCIsIFwiZ2V0XCIsIFwiI1wiXSwgbXNnKTtcblxuICAgIFthc2tpbmdGb3IsIC4uLmtleXMocGF0aChbXCJqc29uXCIsIFwicHV0XCJdLCBtc2cpKV0uZm9yRWFjaChcbiAgICAgIHNvdWwgPT4gc291bCAmJiBtc2cuZnJvbS5zZXQoW1wiaGFzQXNrZWRGb3JcIiwgc291bF0sIHRydWUpXG4gICAgKTtcbiAgICByZXR1cm4gbXNnO1xuICB9KTtcblxuICBkYi5vbk91dChtc2cgPT4ge1xuICAgIGNvbnN0IHsgdG8sIGpzb24sIGlnbm9yZUxlZWNoaW5nIH0gPSBtc2c7XG5cbiAgICBpZiAoIXRvLmdldChbXCJpc0xlZWNoaW5nXCJdKSB8fCBpZ25vcmVMZWVjaGluZykgcmV0dXJuIG1zZztcbiAgICBjb25zdCBhc2tlZFB1dHMgPSBrZXlzKGpzb24ucHV0KS5maWx0ZXIoc291bCA9PiB7XG4gICAgICBpZiAoIXRvLmdldChbXCJoYXNBc2tlZEZvclwiLCBzb3VsXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IHNvdWxEZWx0YXMgPSBwYXRoKFtzb3VsLCBcIl9cIiwgXCI+XCJdLCBqc29uLnB1dCk7XG4gICAgICBsZXQgaGFzVXBkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBpZiAoIWtleXMoc291bERlbHRhcykubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcblxuICAgICAga2V5cyhzb3VsRGVsdGFzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGtub3duID0gdG8uZ2V0KFtcImtub3duRGVsdGFzXCIsIHNvdWwsIGtleV0pIHx8IDA7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gcGFyc2VGbG9hdChzb3VsRGVsdGFzW2tleV0pIHx8IDA7XG5cbiAgICAgICAgaWYgKGtub3duICYmIGRlbHRhIDw9IGtub3duKSByZXR1cm47XG4gICAgICAgIHRvLnNldChbXCJrbm93bkRlbHRhc1wiLCBzb3VsLCBrZXldLCBkZWx0YSk7XG4gICAgICAgIGhhc1VwZGF0ZXMgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGFzVXBkYXRlcztcbiAgICB9KTtcblxuICAgIGlmIChhc2tlZFB1dHMubGVuZ3RoKSByZXR1cm4gbXNnO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBkYjtcbn07XG4iLCJpbXBvcnQgeyB3aXRob3V0IH0gZnJvbSBcInJhbWRhXCI7XG5tb2R1bGUuZXhwb3J0cyA9IGRiID0+IHtcbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGNvbnN0IHsgZnJvbSwganNvbiwgbm9SZWxheSB9ID0gbXNnO1xuXG4gICAgaWYgKG5vUmVsYXkpIHJldHVybiBtc2c7XG4gICAgd2l0aG91dChbZnJvbV0sIGRiLmNvbm5lY3Rpb25zKS5mb3JFYWNoKGMgPT5cbiAgICAgIGMuc2VuZCh7IGZyb20sIGpzb24sIHNraXBWYWxpZGF0aW9uOiB0cnVlIH0pXG4gICAgKTtcbiAgICByZXR1cm4gbXNnO1xuICB9KTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCB7IGN1cnJ5IH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgV1MgZnJvbSBcIndzXCI7XG5pbXBvcnQgUmVjb25uZWN0aW5nV2ViU29ja2V0IGZyb20gXCJyZWNvbm5lY3Rpbmctd2Vic29ja2V0XCI7XG5cbmNvbnN0IFBJTkcgPSA2MDAwMDtcblxuY29uc3Qgd3NDb25uZWN0aW9uID0gY3VycnkoKGRiLCB3cykgPT4ge1xuICBsZXQgaGFzTG9nZ2VkRXJyID0gZmFsc2U7XG4gIGxldCBjb25uZWN0ZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBkYi5jb25uZWN0ZWQobXNnID0+IHtcbiAgICBpZiAoIW1zZyB8fCAhbXNnLmpzb24gfHwgIWNvbm5lY3RlZCkgcmV0dXJuO1xuICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnLmpzb24pLCBlcnIgPT4ge1xuICAgICAgaWYgKCFlcnIgfHwgaGFzTG9nZ2VkRXJyKSByZXR1cm47XG4gICAgICBjb25zb2xlLndhcm4oXCJ3cyBzZW5kIGVyclwiLCBlcnIpO1xuICAgICAgaGFzTG9nZ2VkRXJyID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgKCkgPT4gY29ubmVjdGlvbi5zZW5kKHsganNvbjogeyBwaW5nOiB0cnVlIH0sIHNraXBWYWxpZGF0aW9uOiB0cnVlIH0pLFxuICAgIFBJTkdcbiAgKTtcblxuICBjb25zdCByZWNlaXZlID0gbXNnID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UobXNnLmRhdGEgfHwgbXNnKTtcblxuICAgICAgQXJyYXkuaXNBcnJheShqc29uKVxuICAgICAgICA/IGpzb24uZm9yRWFjaChyZWNlaXZlKVxuICAgICAgICA6IGNvbm5lY3Rpb24ucmVjZWl2ZSh7IGpzb24gfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJFQ0VJVkVSIGludmFsaWQgd3MgbXNnXCIsIGUsIG1zZy5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHtcbiAgICBpZiAod3MucmVjb25uZWN0KSByZXR1cm47XG4gICAgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbChwaW5nSW50ZXJ2YWwpO1xuICAgIGRiLmRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKTtcbiAgfSk7XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZSk7XG4gIHJldHVybiBjb25uZWN0aW9uO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBjdXJyeSgoeyB3ZWIsIHBvcnQgfSwgZGIpID0+IHtcbiAgbmV3IFdTLlNlcnZlcih7IHBvcnQ6ICF3ZWIgPyBwb3J0IDogdW5kZWZpbmVkLCBzZXJ2ZXI6IHdlYiB9KS5vbihcbiAgICBcImNvbm5lY3Rpb25cIixcbiAgICB3c0Nvbm5lY3Rpb24oZGIpXG4gICk7XG4gIHJldHVybiBkYjtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3VycnkoKHVybCwgZGIpID0+IHtcbiAgY29uc3Qgd3MgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCwgW10sIHsgV2ViU29ja2V0OiBXUyB9KTtcblxuICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB3c0Nvbm5lY3Rpb24oZGIsIHdzKSk7XG4gIHJldHVybiBkYjtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3V1aWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd3NfXzsiXSwic291cmNlUm9vdCI6IiJ9