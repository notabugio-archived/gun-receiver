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

var MAX_MSG_ID_CACHE = 10000;

var _default = function _default(db) {
  var receivedIds = {};

  function collectGarbage() {
    var ids;

    while ((ids = Object.keys(receivedIds)).length > MAX_MSG_ID_CACHE) {
      delete receivedIds[ids[0]];
    }
  }

  db.onIn(function (msg) {
    var id = (0, _ramda.path)(["json", "#"], msg);
    if (!id || id in receivedIds) return null;
    receivedIds[id] = true;
    collectGarbage();
    return msg;
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1yZWNlaXZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9ub2RlX21vZHVsZXMvcmVjb25uZWN0aW5nLXdlYnNvY2tldC9kaXN0L3JlY29ubmVjdGluZy13ZWJzb2NrZXQubWpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jaGFpbi5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY29uZmxpY3RzLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9kZWR1cC5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL2xlZWNoLmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9yZWxheS5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvd2Vic29ja2V0LmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcIndzXCIiXSwibmFtZXMiOlsiZGIiLCJnZXRQYXRoIiwia2V5TGlzdCIsIm9wdHMiLCJ0aGlzQ2hhaW4iLCJvbiIsImZuIiwidmFsdWUiLCJnZXRWYWx1ZSIsImhhc1Jlc3BvbnNlIiwiYm91bmQiLCJiaW5kIiwicmVjZWl2ZWQiLCJ2YWwiLCJyZXF1ZXN0ZWQiLCJncmFwaCIsImNvbm5lY3Rpb24iLCJjb25uZWN0ZWQiLCJtc2ciLCJqc29uIiwiZm9yRWFjaCIsInNvdWwiLCJub2RlIiwibmV4dFZhbHVlIiwiZ2V0Tm9kZSIsInJlY2VpdmUiLCJnZXQiLCJza2lwVmFsaWRhdGlvbiIsImtsIiwibGFzdEtleSIsImxlbmd0aCIsInBhcmVudFZhbHVlIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJsZWVjaCIsImRpc2Nvbm5lY3RlZCIsInRoZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuc3Vic2NyaWJlIiwib25jZSIsImtleSIsIm9uSW4iLCJ1cGRhdGVkVmVjdG9ycyIsInB1dEtleXMiLCJhbGwiLCJtYXAiLCJwdXRWZWN0b3JzIiwibm9SZWxheSIsImtub3duVmVjdG9ycyIsInB1c2giLCJwcm9jZXNzUXVldWUiLCJmbnMiLCJxdWV1ZSIsImRlcXVldWUiLCJleGVjdXRlIiwicmVtYWluaW5nRm5zIiwicmV2ZXJzZSIsImV4ZWN1dGVOZXh0IiwicG9wIiwiZSIsInJlamVjdCIsInBpc3RvbENvbm5lY3Rpb24iLCJzZW5kRm4iLCJzZW5kIiwic3RhdGUiLCJoYXNSZXBvcnRlZEVycm9yIiwicCIsInNldCIsInYiLCJtc2dJZCIsInY0IiwicHJvY2Vzc091dCIsInRvIiwiciIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1dCIsInByZXNlcnZlZCIsInByb2Nlc3NJbiIsImZyb20iLCJSZWNlaXZlciIsInBlZXIiLCJjb25uZWN0aW9ucyIsIm9uT3V0IiwiY29ubmVjdGlvbklkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJNQVhfTVNHX0lEX0NBQ0hFIiwicmVjZWl2ZWRJZHMiLCJjb2xsZWN0R2FyYmFnZSIsImlkcyIsIk9iamVjdCIsImtleXMiLCJpZCIsIndlYnNvY2tldFRyYW5zcG9ydCIsIndlYnNvY2tldCIsImFza2luZ0ZvciIsImlnbm9yZUxlZWNoaW5nIiwiYXNrZWRQdXRzIiwiZmlsdGVyIiwic291bERlbHRhcyIsImhhc1VwZGF0ZXMiLCJrbm93biIsImRlbHRhIiwicGFyc2VGbG9hdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjIiwiUElORyIsIndzQ29ubmVjdGlvbiIsIndzIiwiaGFzTG9nZ2VkRXJyIiwid2FybiIsInBpbmdJbnRlcnZhbCIsInNldEludGVydmFsIiwicGluZyIsInBhcnNlIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWNvbm5lY3QiLCJjbGVhckludGVydmFsIiwic2VydmVyIiwid2ViIiwicG9ydCIsIlNlcnZlciIsImNsaWVudCIsInVybCIsIldlYlNvY2tldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUNuRix5QkFBeUIsdURBQXVEO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDLGdDQUFnQyxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbURBQW1EO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw0QkFBNEIsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsZ0NBQWdDLEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Qsa0RBQWtELEVBQUU7QUFDbkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLGtEQUFrRCxFQUFFO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0RBQWtELEVBQUU7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrREFBa0QsRUFBRTtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLHVCQUF1QixFQUFFO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQ0FBc0MsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsd0NBQXdDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELCtCQUErQixFQUFF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QSxnRCIsImZpbGUiOiJndW4tcmVjZWl2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInV1aWRcIiksIHJlcXVpcmUoXCJ3c1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImd1bi1yZWNlaXZlclwiLCBbXCJyYW1kYVwiLCBcInV1aWRcIiwgXCJ3c1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJndW4tcmVjZWl2ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInV1aWRcIiksIHJlcXVpcmUoXCJ3c1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ3VuLXJlY2VpdmVyXCJdID0gZmFjdG9yeShyb290W1wicmFtZGFcIl0sIHJvb3RbXCJ1dWlkXCJdLCByb290W1wid3NcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV91dWlkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxuXG52YXIgRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudCh0eXBlLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEV2ZW50O1xyXG59KCkpO1xyXG52YXIgRXJyb3JFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhFcnJvckV2ZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRXJyb3JFdmVudChlcnJvciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ2Vycm9yJywgdGFyZ2V0KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIF90aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEVycm9yRXZlbnQ7XHJcbn0oRXZlbnQpKTtcclxudmFyIENsb3NlRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2xvc2VFdmVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENsb3NlRXZlbnQoY29kZSwgcmVhc29uLCB0YXJnZXQpIHtcclxuICAgICAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7IGNvZGUgPSAxMDAwOyB9XHJcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gdm9pZCAwKSB7IHJlYXNvbiA9ICcnOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ2Nsb3NlJywgdGFyZ2V0KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLndhc0NsZWFuID0gdHJ1ZTtcclxuICAgICAgICBfdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICBfdGhpcy5yZWFzb24gPSByZWFzb247XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENsb3NlRXZlbnQ7XHJcbn0oRXZlbnQpKTtcblxuLyohXHJcbiAqIFJlY29ubmVjdGluZyBXZWJTb2NrZXRcclxuICogYnkgUGVkcm8gTGFkYXJpYSA8cGVkcm8ubGFkYXJpYUBnbWFpbC5jb20+XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wbGFkYXJpYS9yZWNvbm5lY3Rpbmctd2Vic29ja2V0XHJcbiAqIExpY2Vuc2UgTUlUXHJcbiAqL1xyXG52YXIgZ2V0R2xvYmFsV2ViU29ja2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBXZWJTb2NrZXQ7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgZ2l2ZW4gYXJndW1lbnQgbG9va3MgbGlrZSBhIFdlYlNvY2tldCBjbGFzc1xyXG4gKi9cclxudmFyIGlzV2ViU29ja2V0ID0gZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHR5cGVvZiB3ID09PSAnZnVuY3Rpb24nICYmIHcuQ0xPU0lORyA9PT0gMjsgfTtcclxudmFyIERFRkFVTFQgPSB7XHJcbiAgICBtYXhSZWNvbm5lY3Rpb25EZWxheTogMTAwMDAsXHJcbiAgICBtaW5SZWNvbm5lY3Rpb25EZWxheTogMTAwMCArIE1hdGgucmFuZG9tKCkgKiA0MDAwLFxyXG4gICAgbWluVXB0aW1lOiA1MDAwLFxyXG4gICAgcmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yOiAxLjMsXHJcbiAgICBjb25uZWN0aW9uVGltZW91dDogNDAwMCxcclxuICAgIG1heFJldHJpZXM6IEluZmluaXR5LFxyXG4gICAgZGVidWc6IGZhbHNlLFxyXG59O1xyXG52YXIgUmVjb25uZWN0aW5nV2ViU29ja2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCwgcHJvdG9jb2xzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IFtdLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBbXSxcclxuICAgICAgICAgICAgb3BlbjogW10sXHJcbiAgICAgICAgICAgIGNsb3NlOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQgPSAtMTtcclxuICAgICAgICB0aGlzLl9zaG91bGRSZWNvbm5lY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fYmluYXJ5VHlwZSA9ICdibG9iJztcclxuICAgICAgICB0aGlzLl9jbG9zZUNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VRdWV1ZSA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbidzIHJlYWR5U3RhdGUgY2hhbmdlcyB0byBDTE9TRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24ncyByZWFkeVN0YXRlIGNoYW5nZXMgdG8gT1BFTjtcclxuICAgICAgICAgKiB0aGlzIGluZGljYXRlcyB0aGF0IHRoZSBjb25uZWN0aW9uIGlzIHJlYWR5IHRvIHNlbmQgYW5kIHJlY2VpdmUgZGF0YVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25vcGVuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZU9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdvcGVuIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLl9vcHRpb25zLm1pblVwdGltZSwgbWluVXB0aW1lID0gX2EgPT09IHZvaWQgMCA/IERFRkFVTFQubWluVXB0aW1lIDogX2E7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5fY29ubmVjdFRpbWVvdXQpO1xyXG4gICAgICAgICAgICBfdGhpcy5fdXB0aW1lVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2FjY2VwdE9wZW4oKTsgfSwgbWluVXB0aW1lKTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBfdGhpcy5fd3MuYmluYXJ5VHlwZSA9IF90aGlzLl9iaW5hcnlUeXBlO1xyXG4gICAgICAgICAgICAvLyBzZW5kIGVucXVldWVkIG1lc3NhZ2VzIChtZXNzYWdlcyBzZW50IGJlZm9yZSB3ZWJzb2NrZXQgb3BlbiBldmVudClcclxuICAgICAgICAgICAgX3RoaXMuX21lc3NhZ2VRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiBfdGhpcy5fd3Muc2VuZChtZXNzYWdlKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9tZXNzYWdlUXVldWUgPSBbXTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9ub3Blbikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25vcGVuKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLm9wZW4uZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdtZXNzYWdlIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9ubWVzc2FnZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5tZXNzYWdlLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2Vycm9yIGV2ZW50JywgZXZlbnQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9kaXNjb25uZWN0KHVuZGVmaW5lZCwgZXZlbnQubWVzc2FnZSA9PT0gJ1RJTUVPVVQnID8gJ3RpbWVvdXQnIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uZXJyb3IoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnZXhlYyBlcnJvciBsaXN0ZW5lcnMnKTtcclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5lcnJvci5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdjbG9zZSBldmVudCcpO1xyXG4gICAgICAgICAgICBfdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX3Nob3VsZFJlY29ubmVjdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25jbG9zZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5jbG9zZS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX3Byb3RvY29scyA9IHByb3RvY29scztcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLl9jb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIkNPTk5FQ1RJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiT1BFTlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJDTE9TSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIkNMT1NFRFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiQ09OTkVDVElOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ09OTkVDVElORztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIk9QRU5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0Lk9QRU47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJDTE9TSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5DTE9TSU5HO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiQ0xPU0VEXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5DTE9TRUQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJiaW5hcnlUeXBlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MuYmluYXJ5VHlwZSA6IHRoaXMuX2JpbmFyeVR5cGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iaW5hcnlUeXBlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl93cykge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd3MuYmluYXJ5VHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJyZXRyeUNvdW50XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb3IgY29ubmVjdGlvbiByZXRyaWVzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLl9yZXRyeUNvdW50LCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcImJ1ZmZlcmVkQW1vdW50XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIG9mIGRhdGEgdGhhdCBoYXZlIGJlZW4gcXVldWVkIHVzaW5nIGNhbGxzIHRvIHNlbmQoKSBidXQgbm90IHlldFxyXG4gICAgICAgICAqIHRyYW5zbWl0dGVkIHRvIHRoZSBuZXR3b3JrLiBUaGlzIHZhbHVlIHJlc2V0cyB0byB6ZXJvIG9uY2UgYWxsIHF1ZXVlZCBkYXRhIGhhcyBiZWVuIHNlbnQuXHJcbiAgICAgICAgICogVGhpcyB2YWx1ZSBkb2VzIG5vdCByZXNldCB0byB6ZXJvIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkOyBpZiB5b3Uga2VlcCBjYWxsaW5nIHNlbmQoKSxcclxuICAgICAgICAgKiB0aGlzIHdpbGwgY29udGludWUgdG8gY2xpbWIuIFJlYWQgb25seVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYnl0ZXMgPSB0aGlzLl9tZXNzYWdlUXVldWUucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2MgKz0gbWVzc2FnZS5sZW5ndGg7IC8vIG5vdCBieXRlIHNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBCbG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICs9IG1lc3NhZ2Uuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYyArPSBtZXNzYWdlLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ5dGVzICsgKHRoaXMuX3dzID8gdGhpcy5fd3MuYnVmZmVyZWRBbW91bnQgOiAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcImV4dGVuc2lvbnNcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBleHRlbnNpb25zIHNlbGVjdGVkIGJ5IHRoZSBzZXJ2ZXIuIFRoaXMgaXMgY3VycmVudGx5IG9ubHkgdGhlIGVtcHR5IHN0cmluZyBvciBhIGxpc3Qgb2ZcclxuICAgICAgICAgKiBleHRlbnNpb25zIGFzIG5lZ290aWF0ZWQgYnkgdGhlIGNvbm5lY3Rpb25cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MuZXh0ZW5zaW9ucyA6ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwicHJvdG9jb2xcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIG5hbWUgb2YgdGhlIHN1Yi1wcm90b2NvbCB0aGUgc2VydmVyIHNlbGVjdGVkO1xyXG4gICAgICAgICAqIHRoaXMgd2lsbCBiZSBvbmUgb2YgdGhlIHN0cmluZ3Mgc3BlY2lmaWVkIGluIHRoZSBwcm90b2NvbHMgcGFyYW1ldGVyIHdoZW4gY3JlYXRpbmcgdGhlXHJcbiAgICAgICAgICogV2ViU29ja2V0IG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy5wcm90b2NvbCA6ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwicmVhZHlTdGF0ZVwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNvbm5lY3Rpb247IHRoaXMgaXMgb25lIG9mIHRoZSBSZWFkeSBzdGF0ZSBjb25zdGFudHNcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MucmVhZHlTdGF0ZSA6IFJlY29ubmVjdGluZ1dlYlNvY2tldC5DT05ORUNUSU5HO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwidXJsXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgVVJMIGFzIHJlc29sdmVkIGJ5IHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy51cmwgOiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbiBvciBjb25uZWN0aW9uIGF0dGVtcHQsIGlmIGFueS4gSWYgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeVxyXG4gICAgICogQ0xPU0VELCB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmdcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcclxuICAgICAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7IGNvZGUgPSAxMDAwOyB9XHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Nob3VsZFJlY29ubmVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdjbG9zZSBlbnF1ZXVlZDogbm8gd3MgaW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gdGhpcy5DTE9TRUQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ2Nsb3NlOiBhbHJlYWR5IGNsb3NlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3dzLmNsb3NlKGNvZGUsIHJlYXNvbik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uIG9yIGNvbm5lY3Rpb24gYXR0ZW1wdCBhbmQgY29ubmVjdHMgYWdhaW4uXHJcbiAgICAgKiBSZXNldHMgcmV0cnkgY291bnRlcjtcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5yZWNvbm5lY3QgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkUmVjb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jbG9zZUNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQgPSAtMTtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzIHx8IHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IHRoaXMuQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3QoY29kZSwgcmVhc29uKTtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEVucXVldWUgc3BlY2lmaWVkIGRhdGEgdG8gYmUgdHJhbnNtaXR0ZWQgdG8gdGhlIHNlcnZlciBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLl93cyAmJiB0aGlzLl93cy5yZWFkeVN0YXRlID09PSB0aGlzLk9QRU4pIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ3NlbmQnLCBkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fd3Muc2VuZChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdlbnF1ZXVlJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VRdWV1ZS5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgb2YgYSBzcGVjaWZpYyBldmVudCB0eXBlXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLmZpbHRlcihmdW5jdGlvbiAobCkgeyByZXR1cm4gbCAhPT0gbGlzdGVuZXI7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZGVidWcpIHtcclxuICAgICAgICAgICAgLy8gbm90IHVzaW5nIHNwcmVhZCBiZWNhdXNlIGNvbXBpbGVkIHZlcnNpb24gdXNlcyBTeW1ib2xzXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ1JXUz4nXS5jb25jYXQoYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9nZXROZXh0RGVsYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fb3B0aW9ucywgX2IgPSBfYS5yZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IsIHJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvciA9IF9iID09PSB2b2lkIDAgPyBERUZBVUxULnJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvciA6IF9iLCBfYyA9IF9hLm1pblJlY29ubmVjdGlvbkRlbGF5LCBtaW5SZWNvbm5lY3Rpb25EZWxheSA9IF9jID09PSB2b2lkIDAgPyBERUZBVUxULm1pblJlY29ubmVjdGlvbkRlbGF5IDogX2MsIF9kID0gX2EubWF4UmVjb25uZWN0aW9uRGVsYXksIG1heFJlY29ubmVjdGlvbkRlbGF5ID0gX2QgPT09IHZvaWQgMCA/IERFRkFVTFQubWF4UmVjb25uZWN0aW9uRGVsYXkgOiBfZDtcclxuICAgICAgICB2YXIgZGVsYXkgPSBtaW5SZWNvbm5lY3Rpb25EZWxheTtcclxuICAgICAgICBpZiAodGhpcy5fcmV0cnlDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZGVsYXkgPVxyXG4gICAgICAgICAgICAgICAgbWluUmVjb25uZWN0aW9uRGVsYXkgKiBNYXRoLnBvdyhyZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IsIHRoaXMuX3JldHJ5Q291bnQgLSAxKTtcclxuICAgICAgICAgICAgaWYgKGRlbGF5ID4gbWF4UmVjb25uZWN0aW9uRGVsYXkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5ID0gbWF4UmVjb25uZWN0aW9uRGVsYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ25leHQgZGVsYXknLCBkZWxheSk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGF5O1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX3dhaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBfdGhpcy5fZ2V0TmV4dERlbGF5KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2dldE5leHRVcmwgPSBmdW5jdGlvbiAodXJsUHJvdmlkZXIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybFByb3ZpZGVyID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVybFByb3ZpZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmxQcm92aWRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gdXJsUHJvdmlkZXIoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVybC50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIFVSTCcpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdExvY2sgfHwgIXRoaXMuX3Nob3VsZFJlY29ubmVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RMb2NrID0gdHJ1ZTtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLl9vcHRpb25zLCBfYiA9IF9hLm1heFJldHJpZXMsIG1heFJldHJpZXMgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVC5tYXhSZXRyaWVzIDogX2IsIF9jID0gX2EuY29ubmVjdGlvblRpbWVvdXQsIGNvbm5lY3Rpb25UaW1lb3V0ID0gX2MgPT09IHZvaWQgMCA/IERFRkFVTFQuY29ubmVjdGlvblRpbWVvdXQgOiBfYywgX2QgPSBfYS5XZWJTb2NrZXQsIFdlYlNvY2tldCA9IF9kID09PSB2b2lkIDAgPyBnZXRHbG9iYWxXZWJTb2NrZXQoKSA6IF9kO1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXRyeUNvdW50ID49IG1heFJldHJpZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ21heCByZXRyaWVzIHJlYWNoZWQnLCB0aGlzLl9yZXRyeUNvdW50LCAnPj0nLCBtYXhSZXRyaWVzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ2Nvbm5lY3QnLCB0aGlzLl9yZXRyeUNvdW50KTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICBpZiAoIWlzV2ViU29ja2V0KFdlYlNvY2tldCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vIHZhbGlkIFdlYlNvY2tldCBjbGFzcyBwcm92aWRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93YWl0KClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2dldE5leHRVcmwoX3RoaXMuX3VybCk7IH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICAgICAgLy8gY2xvc2UgY291bGQgYmUgY2FsbGVkIGJlZm9yZSBjcmVhdGluZyB0aGUgd3NcclxuICAgICAgICAgICAgaWYgKF90aGlzLl9jbG9zZUNhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3RMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdjb25uZWN0JywgeyB1cmw6IHVybCwgcHJvdG9jb2xzOiBfdGhpcy5fcHJvdG9jb2xzIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5fd3MgPSBfdGhpcy5fcHJvdG9jb2xzXHJcbiAgICAgICAgICAgICAgICA/IG5ldyBXZWJTb2NrZXQodXJsLCBfdGhpcy5fcHJvdG9jb2xzKVxyXG4gICAgICAgICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVybCk7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgX3RoaXMuX3dzLmJpbmFyeVR5cGUgPSBfdGhpcy5fYmluYXJ5VHlwZTtcclxuICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3RMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLl9hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3RUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5faGFuZGxlVGltZW91dCgpOyB9LCBjb25uZWN0aW9uVGltZW91dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5faGFuZGxlVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1ZygndGltZW91dCBldmVudCcpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKG5ldyBFcnJvckV2ZW50KEVycm9yKCdUSU1FT1VUJyksIHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9kaXNjb25uZWN0ID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xyXG4gICAgICAgIGlmIChjb2RlID09PSB2b2lkIDApIHsgY29kZSA9IDEwMDA7IH1cclxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dzLmNsb3NlKGNvZGUsIHJlYXNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlKG5ldyBDbG9zZUV2ZW50KGNvZGUsIHJlYXNvbiwgdGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2FjY2VwdE9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ2FjY2VwdCBvcGVuJyk7XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCA9IDA7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fY2FsbEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKCdoYW5kbGVFdmVudCcgaW4gbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxpc3RlbmVyKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fcmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kZWJ1ZygncmVtb3ZlTGlzdGVuZXJzJyk7XHJcbiAgICAgICAgdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMuX2hhbmRsZU9wZW4pO1xyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5faGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9oYW5kbGVNZXNzYWdlKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kZWJ1ZygnYWRkTGlzdGVuZXJzJyk7XHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMuX2hhbmRsZU9wZW4pO1xyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5faGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9oYW5kbGVNZXNzYWdlKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fY2xlYXJUaW1lb3V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fY29ubmVjdFRpbWVvdXQpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl91cHRpbWVUaW1lb3V0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0O1xyXG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWNvbm5lY3RpbmdXZWJTb2NrZXQ7XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCB7IGlkZW50aXR5LCBrZXlzLCBwcm9wLCBwYXRoIH0gZnJvbSBcInJhbWRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRiID0+IHtcbiAgY29uc3QgZ2V0UGF0aCA9IChrZXlMaXN0LCBvcHRzID0ge30pID0+IHtcbiAgICBsZXQgdGhpc0NoYWluO1xuICAgIGNvbnN0IG9uID0gZm4gPT4ge1xuICAgICAgbGV0IHZhbHVlLCBnZXRWYWx1ZTtcbiAgICAgIGxldCBoYXNSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgY29uc3QgYm91bmQgPSBmbi5iaW5kKHRoaXNDaGFpbik7XG4gICAgICBjb25zdCByZWNlaXZlZCA9IHZhbCA9PiAoaGFzUmVzcG9uc2UgPSB0cnVlKSAmJiBib3VuZCgodmFsdWUgPSB2YWwpKTtcbiAgICAgIGNvbnN0IHJlcXVlc3RlZCA9IHt9O1xuICAgICAgY29uc3QgZ3JhcGggPSB7fTtcblxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGRiLmNvbm5lY3RlZChtc2cgPT4ge1xuICAgICAgICBjb25zdCB7IGpzb24gfSA9IG1zZztcblxuICAgICAgICBrZXlzKHByb3AoXCJwdXRcIiwganNvbikpLmZvckVhY2goc291bCA9PiB7XG4gICAgICAgICAgaWYgKCFyZXF1ZXN0ZWRbc291bF0pIHJldHVybjtcbiAgICAgICAgICBjb25zdCBub2RlID0gcGF0aChbXCJwdXRcIiwgc291bF0sIGpzb24pO1xuXG4gICAgICAgICAgaWYgKCFub2RlICYmICFoYXNSZXNwb25zZSkgcmVjZWl2ZWQoKTtcbiAgICAgICAgICBpZiAobm9kZSkgZ3JhcGhbc291bF0gPSBub2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gZ2V0VmFsdWUoa2V5TGlzdCk7XG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAhPT0gdmFsdWUpIHJlY2VpdmVkKG5leHRWYWx1ZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZ2V0Tm9kZSA9IHNvdWwgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdGVkW3NvdWxdKSByZXR1cm4gZ3JhcGhbc291bF07XG4gICAgICAgIHJlcXVlc3RlZFtzb3VsXSA9IHRydWU7XG4gICAgICAgIGNvbm5lY3Rpb24ucmVjZWl2ZSh7XG4gICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgICBqc29uOiB7IGdldDogeyBcIiNcIjogc291bCB9IH0sXG4gICAgICAgICAgc2tpcFZhbGlkYXRpb246IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncmFwaFtzb3VsXTtcbiAgICAgIH07XG5cbiAgICAgIGdldFZhbHVlID0ga2wgPT4ge1xuICAgICAgICBjb25zdCBsYXN0S2V5ID0ga2xba2wubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGtsLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGdldE5vZGUobGFzdEtleSk7XG4gICAgICAgIGNvbnN0IHBhcmVudFZhbHVlID0gZ2V0VmFsdWUoa2wuc2xpY2UoMCwga2wubGVuZ3RoIC0gMSkpO1xuXG4gICAgICAgIGlmICghcGFyZW50VmFsdWUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcChsYXN0S2V5LCBwYXJlbnRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlW1wiI1wiXSkgcmV0dXJuIGdldE5vZGUodmFsdWVbXCIjXCJdKTtcbiAgICAgICAgaWYgKGtsID09PSBrZXlMaXN0KSByZWNlaXZlZCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIGNvbm5lY3Rpb24ucmVjZWl2ZSh7IGpzb246IHsgbGVlY2g6IHRydWUgfSB9KTtcbiAgICAgIGdldFZhbHVlKGtleUxpc3QpO1xuICAgICAgcmV0dXJuICgpID0+IGRiLmRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGhlbiA9IChmbiA9IGlkZW50aXR5KSA9PlxuICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb24odmFsID0+IHtcbiAgICAgICAgICByZXNvbHZlKHZhbCk7XG4gICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS50aGVuKGZuKTtcblxuICAgIGNvbnN0IG9uY2UgPSBmbiA9PiB0aGVuKGZuLmJpbmQodGhpc0NoYWluKSkgJiYgdGhpc0NoYWluO1xuICAgIGNvbnN0IGdldCA9IChrZXksIG9wdHMgPSB7fSkgPT4gZ2V0UGF0aChbLi4ua2V5TGlzdCwga2V5XSwgb3B0cyk7XG5cbiAgICB0aGlzQ2hhaW4gPSB7IGdldCwgb24sIHRoZW4sIG9uY2UgfTtcbiAgICByZXR1cm4gdGhpc0NoYWluO1xuICB9O1xuXG4gIGRiLmdldCA9IChrZXksIG9wdHMgPSB7fSkgPT4gZ2V0UGF0aChba2V5XSwgb3B0cyk7XG4gIHJldHVybiBkYjtcbn07XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCB7IGtleXMsIHByb3AsIHBhdGggfSBmcm9tIFwicmFtZGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgY29uc3QgeyBqc29uIH0gPSBtc2c7XG4gICAgY29uc3QgdXBkYXRlZFZlY3RvcnMgPSBbXTtcbiAgICBjb25zdCBwdXRLZXlzID0ga2V5cyhwcm9wKFwicHV0XCIsIGpzb24pKTtcblxuICAgIGlmICghcHV0S2V5cy5sZW5ndGgpIHJldHVybiBQcm9taXNlLnJlc29sdmUobXNnKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICBwdXRLZXlzLm1hcChzb3VsID0+IHtcbiAgICAgICAgY29uc3QgcHV0VmVjdG9ycyA9IHBhdGgoW1wicHV0XCIsIHNvdWwsIFwiX1wiLCBcIj5cIl0sIGpzb24pIHx8IHt9O1xuXG4gICAgICAgIHJldHVybiBkYi5nZXQoc291bCwgeyBub1JlbGF5OiB0cnVlIH0pLnRoZW4obm9kZSA9PiB7XG4gICAgICAgICAgY29uc3Qga25vd25WZWN0b3JzID0gcGF0aChbXCJfXCIsIFwiPlwiXSwgbm9kZSkgfHwge307XG5cbiAgICAgICAgICBrZXlzKHB1dFZlY3RvcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChrbm93blZlY3RvcnNba2V5XSAmJiBrbm93blZlY3RvcnNba2V5XSA+IHB1dFZlY3RvcnNba2V5XSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVkVmVjdG9ycy5wdXNoKHB1dFZlY3RvcnNba2V5XSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICApLnRoZW4oKCkgPT4gKHVwZGF0ZWRWZWN0b3JzLmxlbmd0aCB8fCBqc29uLmdldCA/IG1zZyA6IG51bGwpKTtcbiAgfSk7XG4gIHJldHVybiBkYjtcbn07XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCB7IGFzc29jUGF0aCwgcGF0aCwgd2l0aG91dCB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcblxuZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKCkge1xuICBsZXQgZm5zID0gW107XG4gIGNvbnN0IHF1ZXVlID0gZm4gPT4gZm5zLnB1c2goZm4pO1xuICBjb25zdCBkZXF1ZXVlID0gZm4gPT4gKGZucyA9IHdpdGhvdXQoW2ZuXSwgZm5zKSk7XG5cbiAgZnVuY3Rpb24gZXhlY3V0ZShtc2cpIHtcbiAgICBjb25zdCByZW1haW5pbmdGbnMgPSBmbnMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgZXhlY3V0ZU5leHQgPSBtc2cgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZm4gPSByZW1haW5pbmdGbnMucG9wKCk7XG5cbiAgICAgICAgaWYgKG1zZyAmJiBmbikgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmbihtc2cpKS50aGVuKGV4ZWN1dGVOZXh0KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtc2cpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBleGVjdXRlTmV4dChtc2cpO1xuICB9XG5cbiAgcmV0dXJuIFtxdWV1ZSwgZXhlY3V0ZSwgZGVxdWV1ZV07XG59XG5cbmZ1bmN0aW9uIHBpc3RvbENvbm5lY3Rpb24oeyBkYiwgc2VuZDogc2VuZEZuIH0pIHtcbiAgbGV0IGNvbm5lY3Rpb247XG4gIGxldCBzdGF0ZSA9IHt9O1xuICBsZXQgaGFzUmVwb3J0ZWRFcnJvciA9IGZhbHNlO1xuICBjb25zdCBnZXQgPSBwID0+IHBhdGgocCwgc3RhdGUpO1xuICBjb25zdCBzZXQgPSAocCwgdikgPT4gKHN0YXRlID0gYXNzb2NQYXRoKHAsIHYsIHN0YXRlKSk7IC8vICYmIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgY29uc3QgbXNnSWQgPSAoKSA9PiB1dWlkLnY0KCk7XG4gIGNvbnN0IHNlbmQgPSBtc2cgPT5cbiAgICBkYlxuICAgICAgLnByb2Nlc3NPdXQoeyAuLi5tc2csIHRvOiBjb25uZWN0aW9uIH0pXG4gICAgICAudGhlbihyID0+IHIgJiYgc2VuZEZuKHIpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGlmICghaGFzUmVwb3J0ZWRFcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIlBJU1RPTCBzZW5kIGVyclwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobXNnLCBudWxsLCAyKSxcbiAgICAgICAgICAgIG1zZy5qc29uLnB1dCxcbiAgICAgICAgICAgIGVyclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaGFzUmVwb3J0ZWRFcnJvciA9IHRydWU7XG4gICAgICB9KTtcbiAgY29uc3QgcmVjZWl2ZSA9ICh7IGpzb24sIC4uLm9wdHMgfSkgPT4ge1xuICAgIGNvbnN0IHByZXNlcnZlZCA9IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpO1xuXG4gICAgcmV0dXJuIGRiXG4gICAgICAucHJvY2Vzc0luKHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgZGIsXG4gICAgICAgIGpzb246IHsgLi4uanNvbiwgXCIjXCI6IGpzb25bXCIjXCJdIHx8IHV1aWQudjQoKSB9LFxuICAgICAgICBmcm9tOiBjb25uZWN0aW9uXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiUElTVE9MIHJlY2VpdmUgZXJyXCIsIGVyciwgcHJlc2VydmVkKSk7XG4gIH07XG5cbiAgY29ubmVjdGlvbiA9IHsgc2VuZCwgcmVjZWl2ZSwgZ2V0LCBzZXQsIG1zZ0lkIH07XG4gIHJldHVybiBjb25uZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNlaXZlcigpIHtcbiAgbGV0IHBlZXI7XG4gIGNvbnN0IGNvbm5lY3Rpb25zID0gW107XG4gIGNvbnN0IFtvbkluLCBwcm9jZXNzSW5dID0gcHJvY2Vzc1F1ZXVlKCk7XG4gIGNvbnN0IFtvbk91dCwgcHJvY2Vzc091dF0gPSBwcm9jZXNzUXVldWUoKTtcblxuICBmdW5jdGlvbiBjb25uZWN0ZWQoc2VuZCkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBwaXN0b2xDb25uZWN0aW9uKHsgZGI6IHBlZXIsIHNlbmQgfSk7XG5cbiAgICBjb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pO1xuICAgIHJldHVybiBjb25uZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pIHtcbiAgICBjb25zdCBjb25uZWN0aW9uSWR4ID0gY29ubmVjdGlvbnMuaW5kZXhPZihjb25uZWN0aW9uKTtcblxuICAgIGlmIChjb25uZWN0aW9uSWR4ICE9PSAtMSkgY29ubmVjdGlvbnMuc3BsaWNlKGNvbm5lY3Rpb25JZHgsIDEpO1xuICB9XG5cbiAgcGVlciA9IHtcbiAgICBjb25uZWN0aW9ucyxcbiAgICBjb25uZWN0ZWQsXG4gICAgZGlzY29ubmVjdGVkLFxuICAgIG9uSW4sXG4gICAgb25PdXQsXG4gICAgcHJvY2Vzc0luLFxuICAgIHByb2Nlc3NPdXRcbiAgfTtcbiAgcmV0dXJuIHBlZXI7XG59XG4iLCJpbXBvcnQgeyBwYXRoIH0gZnJvbSBcInJhbWRhXCI7XG5jb25zdCBNQVhfTVNHX0lEX0NBQ0hFID0gMTAwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGRiID0+IHtcbiAgY29uc3QgcmVjZWl2ZWRJZHMgPSB7fTtcblxuICBmdW5jdGlvbiBjb2xsZWN0R2FyYmFnZSgpIHtcbiAgICBsZXQgaWRzO1xuXG4gICAgd2hpbGUgKChpZHMgPSBPYmplY3Qua2V5cyhyZWNlaXZlZElkcykpLmxlbmd0aCA+IE1BWF9NU0dfSURfQ0FDSEUpIHtcbiAgICAgIGRlbGV0ZSByZWNlaXZlZElkc1tpZHNbMF1dO1xuICAgIH1cbiAgfVxuXG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCBpZCA9IHBhdGgoW1wianNvblwiLCBcIiNcIl0sIG1zZyk7XG5cbiAgICBpZiAoIWlkIHx8IGlkIGluIHJlY2VpdmVkSWRzKSByZXR1cm4gbnVsbDtcbiAgICByZWNlaXZlZElkc1tpZF0gPSB0cnVlO1xuICAgIGNvbGxlY3RHYXJiYWdlKCk7XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2hhaW5JbnRlcmZhY2UgfSBmcm9tIFwiLi9jaGFpblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV2ZW50Q29uZmxpY3RzIH0gZnJvbSBcIi4vY29uZmxpY3RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlY2VpdmVyIH0gZnJvbSBcIi4vY29yZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWR1cGxpY2F0ZU1lc3NhZ2VzIH0gZnJvbSBcIi4vZGVkdXBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsb3dMZWVjaCB9IGZyb20gXCIuL2xlZWNoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGF5TWVzc2FnZXMgfSBmcm9tIFwiLi9yZWxheVwiO1xuaW1wb3J0ICogYXMgd2Vic29ja2V0IGZyb20gXCIuL3dlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgd2Vic29ja2V0VHJhbnNwb3J0ID0gd2Vic29ja2V0O1xuIiwiaW1wb3J0IHsgcGF0aCwga2V5cyB9IGZyb20gXCJyYW1kYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBpZiAocGF0aChbXCJqc29uXCIsIFwibGVlY2hcIl0sIG1zZykpIHtcbiAgICAgIG1zZy5mcm9tLnNldChbXCJpc0xlZWNoaW5nXCJdLCB0cnVlKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGFza2luZ0ZvciA9IHBhdGgoW1wianNvblwiLCBcImdldFwiLCBcIiNcIl0sIG1zZyk7XG5cbiAgICBbYXNraW5nRm9yLCAuLi5rZXlzKHBhdGgoW1wianNvblwiLCBcInB1dFwiXSwgbXNnKSldLmZvckVhY2goXG4gICAgICBzb3VsID0+IHNvdWwgJiYgbXNnLmZyb20uc2V0KFtcImhhc0Fza2VkRm9yXCIsIHNvdWxdLCB0cnVlKVxuICAgICk7XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG5cbiAgZGIub25PdXQobXNnID0+IHtcbiAgICBjb25zdCB7IHRvLCBqc29uLCBpZ25vcmVMZWVjaGluZyB9ID0gbXNnO1xuXG4gICAgaWYgKCF0by5nZXQoW1wiaXNMZWVjaGluZ1wiXSkgfHwgaWdub3JlTGVlY2hpbmcpIHJldHVybiBtc2c7XG4gICAgY29uc3QgYXNrZWRQdXRzID0ga2V5cyhqc29uLnB1dCkuZmlsdGVyKHNvdWwgPT4ge1xuICAgICAgaWYgKCF0by5nZXQoW1wiaGFzQXNrZWRGb3JcIiwgc291bF0pKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBzb3VsRGVsdGFzID0gcGF0aChbc291bCwgXCJfXCIsIFwiPlwiXSwganNvbi5wdXQpO1xuICAgICAgbGV0IGhhc1VwZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgaWYgKCFrZXlzKHNvdWxEZWx0YXMpLmxlbmd0aCkgcmV0dXJuIHRydWU7XG5cbiAgICAgIGtleXMoc291bERlbHRhcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBrbm93biA9IHRvLmdldChbXCJrbm93bkRlbHRhc1wiLCBzb3VsLCBrZXldKSB8fCAwO1xuICAgICAgICBjb25zdCBkZWx0YSA9IHBhcnNlRmxvYXQoc291bERlbHRhc1trZXldKSB8fCAwO1xuXG4gICAgICAgIGlmIChrbm93biAmJiBkZWx0YSA8PSBrbm93bikgcmV0dXJuO1xuICAgICAgICB0by5zZXQoW1wia25vd25EZWx0YXNcIiwgc291bCwga2V5XSwgZGVsdGEpO1xuICAgICAgICBoYXNVcGRhdGVzID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhhc1VwZGF0ZXM7XG4gICAgfSk7XG5cbiAgICBpZiAoYXNrZWRQdXRzLmxlbmd0aCkgcmV0dXJuIG1zZztcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9KTtcblxuICByZXR1cm4gZGI7XG59O1xuIiwiaW1wb3J0IHsgd2l0aG91dCB9IGZyb20gXCJyYW1kYVwiO1xubW9kdWxlLmV4cG9ydHMgPSBkYiA9PiB7XG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCB7IGZyb20sIGpzb24sIG5vUmVsYXkgfSA9IG1zZztcblxuICAgIGlmIChub1JlbGF5KSByZXR1cm4gbXNnO1xuICAgIHdpdGhvdXQoW2Zyb21dLCBkYi5jb25uZWN0aW9ucykuZm9yRWFjaChjID0+XG4gICAgICBjLnNlbmQoeyBmcm9tLCBqc29uLCBza2lwVmFsaWRhdGlvbjogdHJ1ZSB9KVxuICAgICk7XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG4gIHJldHVybiBkYjtcbn07XG4iLCJpbXBvcnQgeyBjdXJyeSB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IFdTIGZyb20gXCJ3c1wiO1xuaW1wb3J0IFJlY29ubmVjdGluZ1dlYlNvY2tldCBmcm9tIFwicmVjb25uZWN0aW5nLXdlYnNvY2tldFwiO1xuXG5jb25zdCBQSU5HID0gNjAwMDA7XG5cbmNvbnN0IHdzQ29ubmVjdGlvbiA9IGN1cnJ5KChkYiwgd3MpID0+IHtcbiAgbGV0IGhhc0xvZ2dlZEVyciA9IGZhbHNlO1xuICBsZXQgY29ubmVjdGVkID0gdHJ1ZTtcblxuICBjb25zdCBjb25uZWN0aW9uID0gZGIuY29ubmVjdGVkKG1zZyA9PiB7XG4gICAgaWYgKCFtc2cgfHwgIW1zZy5qc29uIHx8ICFjb25uZWN0ZWQpIHJldHVybjtcbiAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZy5qc29uKSwgZXJyID0+IHtcbiAgICAgIGlmICghZXJyIHx8IGhhc0xvZ2dlZEVycikgcmV0dXJuO1xuICAgICAgY29uc29sZS53YXJuKFwid3Mgc2VuZCBlcnJcIiwgZXJyKTtcbiAgICAgIGhhc0xvZ2dlZEVyciA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICgpID0+IGNvbm5lY3Rpb24uc2VuZCh7IGpzb246IHsgcGluZzogdHJ1ZSB9LCBza2lwVmFsaWRhdGlvbjogdHJ1ZSB9KSxcbiAgICBQSU5HXG4gICk7XG5cbiAgY29uc3QgcmVjZWl2ZSA9IG1zZyA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKG1zZy5kYXRhIHx8IG1zZyk7XG5cbiAgICAgIEFycmF5LmlzQXJyYXkoanNvbilcbiAgICAgICAgPyBqc29uLmZvckVhY2gocmVjZWl2ZSlcbiAgICAgICAgOiBjb25uZWN0aW9uLnJlY2VpdmUoeyBqc29uIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJSRUNFSVZFUiBpbnZhbGlkIHdzIG1zZ1wiLCBlLCBtc2cuZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgaWYgKHdzLnJlY29ubmVjdCkgcmV0dXJuO1xuICAgIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgIGNsZWFySW50ZXJ2YWwocGluZ0ludGVydmFsKTtcbiAgICBkYi5kaXNjb25uZWN0ZWQoY29ubmVjdGlvbik7XG4gIH0pO1xuXG4gIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIHJlY2VpdmUpO1xuICByZXR1cm4gY29ubmVjdGlvbjtcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VydmVyID0gY3VycnkoKHsgd2ViLCBwb3J0IH0sIGRiKSA9PiB7XG4gIG5ldyBXUy5TZXJ2ZXIoeyBwb3J0OiAhd2ViID8gcG9ydCA6IHVuZGVmaW5lZCwgc2VydmVyOiB3ZWIgfSkub24oXG4gICAgXCJjb25uZWN0aW9uXCIsXG4gICAgd3NDb25uZWN0aW9uKGRiKVxuICApO1xuICByZXR1cm4gZGI7XG59KTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IGN1cnJ5KCh1cmwsIGRiKSA9PiB7XG4gIGNvbnN0IHdzID0gbmV3IFJlY29ubmVjdGluZ1dlYlNvY2tldCh1cmwsIFtdLCB7IFdlYlNvY2tldDogV1MgfSk7XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgKCkgPT4gd3NDb25uZWN0aW9uKGRiLCB3cykpO1xuICByZXR1cm4gZGI7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV91dWlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX187Il0sInNvdXJjZVJvb3QiOiIifQ==