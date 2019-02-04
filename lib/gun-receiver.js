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

var R = _interopRequireWildcard(__webpack_require__(/*! ramda */ "ramda"));

var _uuid = _interopRequireDefault(__webpack_require__(/*! uuid */ "uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
      var requests = {};
      var graph = {};
      var connection = db.connected(function (msg) {
        var json = msg.json;
        var at = R.prop("@", json);
        var atSoul = requests[at];
        var souls = R.keys(R.prop("put", json));
        if (atSoul) souls.push(atSoul);
        if (!souls.length) return;
        R.uniq(souls).forEach(function (soul) {
          if (!requested[soul]) return;
          var node = R.path(["put", soul], json);
          if (!node && !hasResponse) received();
          if (node) graph[soul] = R.mergeDeepLeft(node, graph[soul] || {});
        });

        var nextValue = _getValue(keyList);

        if (nextValue !== value) received(nextValue);
      });

      var getNode = function getNode(soul) {
        if (requested[soul]) return graph[soul];

        var id = _uuid.default.v4();

        requested[soul] = id;
        requests[id] = soul;
        connection.receive({ ...opts,
          json: {
            "#": id,
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
        var value = R.prop(lastKey, parentValue);
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
      var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : R.identity;
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

  var getDiff = function getDiff(put) {
    var souls = R.keys(put);
    var diffs = {};
    if (!souls.length) return Promise.resolve({});
    return Promise.all(souls.map(function (soul) {
      return db.get(soul, {
        noRelay: true
      }).then(function (existing) {
        var diff = db.diffNode(existing, put[soul]);
        if (diff) diffs[soul] = diff;
      });
    })).then(function () {
      if (!R.keys(diffs).length) return null;
      return diffs;
    });
  };

  db.get = function (key) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return getPath([key], opts);
  };

  db.getDiff = getDiff;
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

var _diff = __webpack_require__(/*! ./diff */ "./src/diff.js");

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
        "#": json["#"] || msgId()
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
    processOut: processOut,
    diffNode: _diff.diffNode
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

/***/ "./src/diff.js":
/*!*********************!*\
  !*** ./src/diff.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffNode = void 0;

var R = _interopRequireWildcard(__webpack_require__(/*! ramda */ "ramda"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var GRACE = 10 * 60 * 1000; // How far ahead clock can be, unlike gun we just discard not defer

var Lexical = JSON.stringify; // This is what Gun uses

var diffNode = function diffNode(existing, updated) {
  var machineState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxState = (machineState || new Date().getTime()) + GRACE; // eslint-disable-line

  var existingState = R.path(["_", ">"], existing) || {};
  var updatedState = R.path(["_", ">"], updated) || {};
  return R.compose(function (vals) {
    var keys = R.keys(vals);
    if (!keys.length) return null;
    return R.assoc("_", R.assoc(">", R.pick(keys, updatedState), updated._), vals);
  }, R.reduce(function (updates, key) {
    var existingKeyState = existingState[key];
    var updatedKeyState = updatedState[key];
    if (updatedKeyState > maxState || !updatedKeyState) return updates;
    if (existingKeyState && existingKeyState >= updatedKeyState) return updates;

    if (existingKeyState === updatedKeyState) {
      var existingVal = R.prop(key, existing);
      var updatedVal = R.prop(key, updated); // This is based on Gun's logic

      if (Lexical(updatedVal) <= Lexical(existingVal)) return updated;
    }

    updates[key] = updated[key];
    return updates;
  }, {}), R.keys)(updatedState);
};

exports.diffNode = diffNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1yZWNlaXZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9ub2RlX21vZHVsZXMvcmVjb25uZWN0aW5nLXdlYnNvY2tldC9kaXN0L3JlY29ubmVjdGluZy13ZWJzb2NrZXQubWpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9jaGFpbi5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY2x1c3Rlci5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvZGVkdXAuanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9sZWVjaC5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvcmVsYXkuanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJwbTJcIiIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJyYW1kYVwiIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJ3c1wiIl0sIm5hbWVzIjpbImRiIiwiZ2V0UGF0aCIsImtleUxpc3QiLCJvcHRzIiwidGhpc0NoYWluIiwib24iLCJmbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJoYXNSZXNwb25zZSIsImJvdW5kIiwiYmluZCIsInJlY2VpdmVkIiwidmFsIiwicmVxdWVzdGVkIiwicmVxdWVzdHMiLCJncmFwaCIsImNvbm5lY3Rpb24iLCJjb25uZWN0ZWQiLCJtc2ciLCJqc29uIiwiYXQiLCJSIiwicHJvcCIsImF0U291bCIsInNvdWxzIiwia2V5cyIsInB1c2giLCJsZW5ndGgiLCJ1bmlxIiwiZm9yRWFjaCIsInNvdWwiLCJub2RlIiwicGF0aCIsIm1lcmdlRGVlcExlZnQiLCJuZXh0VmFsdWUiLCJnZXROb2RlIiwiaWQiLCJ2NCIsInJlY2VpdmUiLCJnZXQiLCJza2lwVmFsaWRhdGlvbiIsImtsIiwibGFzdEtleSIsInBhcmVudFZhbHVlIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJsZWVjaCIsImRpc2Nvbm5lY3RlZCIsInRoZW4iLCJpZGVudGl0eSIsIlByb21pc2UiLCJyZXNvbHZlIiwidW5zdWJzY3JpYmUiLCJvbmNlIiwia2V5IiwiZ2V0RGlmZiIsInB1dCIsImRpZmZzIiwiYWxsIiwibWFwIiwibm9SZWxheSIsImV4aXN0aW5nIiwiZGlmZiIsImRpZmZOb2RlIiwiTVNHX1RPUElDIiwibW9kdWxlIiwiZXhwb3J0cyIsInBtMiIsInJlcXVpcmUiLCJsYXVuY2hCdXMiLCJlcnIiLCJidXMiLCJjb25zb2xlIiwicGFja2V0IiwicmF3IiwiZnJvbUNsdXN0ZXIiLCJ0b3BpYyIsInByb2Nlc3NJbiIsImFzc29jIiwiY2F0Y2giLCJlcnJvciIsIm9uSW4iLCJwcm9jZXNzIiwic2VuZCIsIm1lcmdlTGVmdCIsInByb2Nlc3NRdWV1ZSIsImZucyIsInF1ZXVlIiwiZGVxdWV1ZSIsImV4ZWN1dGUiLCJyZW1haW5pbmdGbnMiLCJyZXZlcnNlIiwiZXhlY3V0ZU5leHQiLCJwb3AiLCJlIiwicmVqZWN0IiwicGlzdG9sQ29ubmVjdGlvbiIsInNlbmRGbiIsInN0YXRlIiwiaGFzUmVwb3J0ZWRFcnJvciIsInAiLCJzZXQiLCJ2IiwibXNnSWQiLCJwcm9jZXNzT3V0IiwidG8iLCJyIiwiSlNPTiIsInN0cmluZ2lmeSIsInByZXNlcnZlZCIsImZyb20iLCJSZWNlaXZlciIsInBlZXIiLCJjb25uZWN0aW9ucyIsIm9uT3V0IiwiY29ubmVjdGlvbklkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJNQVhfTVNHX0lEX0NBQ0hFIiwiR0FSQkFHRV9JTlRFUlZBTCIsInJlY2VpdmVkSWRzIiwiY29sbGVjdEdhcmJhZ2UiLCJpZHMiLCJzZXRJbnRlcnZhbCIsIkdSQUNFIiwiTGV4aWNhbCIsInVwZGF0ZWQiLCJtYWNoaW5lU3RhdGUiLCJtYXhTdGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiZXhpc3RpbmdTdGF0ZSIsInVwZGF0ZWRTdGF0ZSIsImNvbXBvc2UiLCJ2YWxzIiwicGljayIsIl8iLCJyZWR1Y2UiLCJ1cGRhdGVzIiwiZXhpc3RpbmdLZXlTdGF0ZSIsInVwZGF0ZWRLZXlTdGF0ZSIsImV4aXN0aW5nVmFsIiwidXBkYXRlZFZhbCIsIndlYnNvY2tldFRyYW5zcG9ydCIsIndlYnNvY2tldCIsImFza2luZ0ZvciIsImlnbm9yZUxlZWNoaW5nIiwiYXNrZWRQdXRzIiwiZmlsdGVyIiwic291bERlbHRhcyIsImhhc1VwZGF0ZXMiLCJrbm93biIsImRlbHRhIiwicGFyc2VGbG9hdCIsIndpdGhvdXQiLCJjIiwiUElORyIsIndzQ29ubmVjdGlvbiIsIndzIiwiaGFzTG9nZ2VkRXJyIiwid2FybiIsInBpbmdJbnRlcnZhbCIsInBpbmciLCJkYXRhIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVjb25uZWN0IiwiY2xlYXJJbnRlcnZhbCIsInNlcnZlciIsIndlYiIsInBvcnQiLCJTZXJ2ZXIiLCJjbGllbnQiLCJ1cmwiLCJXZWJTb2NrZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztB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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LElBQUUsQ0FBQ1MsZ0JBQUgsQ0FBb0IsTUFBcEIsRUFBNEI7QUFBQSxXQUFNVixZQUFZLENBQUM5SixFQUFELEVBQUsrSixFQUFMLENBQWxCO0FBQUEsR0FBNUI7QUFDQSxTQUFPL0osRUFBUDtBQUNELENBTHFCLENBQWY7Ozs7Ozs7Ozs7OztBQzFEUCxpRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxnRCIsImZpbGUiOiJndW4tcmVjZWl2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJwbTJcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInV1aWRcIiksIHJlcXVpcmUoXCJ3c1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImd1bi1yZWNlaXZlclwiLCBbXCJwbTJcIiwgXCJyYW1kYVwiLCBcInV1aWRcIiwgXCJ3c1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJndW4tcmVjZWl2ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJwbTJcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInV1aWRcIiksIHJlcXVpcmUoXCJ3c1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ3VuLXJlY2VpdmVyXCJdID0gZmFjdG9yeShyb290W1wicG0yXCJdLCByb290W1wicmFtZGFcIl0sIHJvb3RbXCJ1dWlkXCJdLCByb290W1wid3NcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcG0yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV91dWlkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxuXG52YXIgRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFdmVudCh0eXBlLCB0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEV2ZW50O1xyXG59KCkpO1xyXG52YXIgRXJyb3JFdmVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhFcnJvckV2ZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRXJyb3JFdmVudChlcnJvciwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ2Vycm9yJywgdGFyZ2V0KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIF90aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEVycm9yRXZlbnQ7XHJcbn0oRXZlbnQpKTtcclxudmFyIENsb3NlRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoQ2xvc2VFdmVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIENsb3NlRXZlbnQoY29kZSwgcmVhc29uLCB0YXJnZXQpIHtcclxuICAgICAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7IGNvZGUgPSAxMDAwOyB9XHJcbiAgICAgICAgaWYgKHJlYXNvbiA9PT0gdm9pZCAwKSB7IHJlYXNvbiA9ICcnOyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgJ2Nsb3NlJywgdGFyZ2V0KSB8fCB0aGlzO1xyXG4gICAgICAgIF90aGlzLndhc0NsZWFuID0gdHJ1ZTtcclxuICAgICAgICBfdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICBfdGhpcy5yZWFzb24gPSByZWFzb247XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENsb3NlRXZlbnQ7XHJcbn0oRXZlbnQpKTtcblxuLyohXHJcbiAqIFJlY29ubmVjdGluZyBXZWJTb2NrZXRcclxuICogYnkgUGVkcm8gTGFkYXJpYSA8cGVkcm8ubGFkYXJpYUBnbWFpbC5jb20+XHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wbGFkYXJpYS9yZWNvbm5lY3Rpbmctd2Vic29ja2V0XHJcbiAqIExpY2Vuc2UgTUlUXHJcbiAqL1xyXG52YXIgZ2V0R2xvYmFsV2ViU29ja2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHJldHVybiBXZWJTb2NrZXQ7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRydWUgaWYgZ2l2ZW4gYXJndW1lbnQgbG9va3MgbGlrZSBhIFdlYlNvY2tldCBjbGFzc1xyXG4gKi9cclxudmFyIGlzV2ViU29ja2V0ID0gZnVuY3Rpb24gKHcpIHsgcmV0dXJuIHR5cGVvZiB3ID09PSAnZnVuY3Rpb24nICYmIHcuQ0xPU0lORyA9PT0gMjsgfTtcclxudmFyIERFRkFVTFQgPSB7XHJcbiAgICBtYXhSZWNvbm5lY3Rpb25EZWxheTogMTAwMDAsXHJcbiAgICBtaW5SZWNvbm5lY3Rpb25EZWxheTogMTAwMCArIE1hdGgucmFuZG9tKCkgKiA0MDAwLFxyXG4gICAgbWluVXB0aW1lOiA1MDAwLFxyXG4gICAgcmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yOiAxLjMsXHJcbiAgICBjb25uZWN0aW9uVGltZW91dDogNDAwMCxcclxuICAgIG1heFJldHJpZXM6IEluZmluaXR5LFxyXG4gICAgZGVidWc6IGZhbHNlLFxyXG59O1xyXG52YXIgUmVjb25uZWN0aW5nV2ViU29ja2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCwgcHJvdG9jb2xzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHtcclxuICAgICAgICAgICAgZXJyb3I6IFtdLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBbXSxcclxuICAgICAgICAgICAgb3BlbjogW10sXHJcbiAgICAgICAgICAgIGNsb3NlOiBbXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQgPSAtMTtcclxuICAgICAgICB0aGlzLl9zaG91bGRSZWNvbm5lY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fYmluYXJ5VHlwZSA9ICdibG9iJztcclxuICAgICAgICB0aGlzLl9jbG9zZUNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX21lc3NhZ2VRdWV1ZSA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbidzIHJlYWR5U3RhdGUgY2hhbmdlcyB0byBDTE9TRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9uY2xvc2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24ncyByZWFkeVN0YXRlIGNoYW5nZXMgdG8gT1BFTjtcclxuICAgICAgICAgKiB0aGlzIGluZGljYXRlcyB0aGF0IHRoZSBjb25uZWN0aW9uIGlzIHJlYWR5IHRvIHNlbmQgYW5kIHJlY2VpdmUgZGF0YVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25vcGVuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZU9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdvcGVuIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLl9vcHRpb25zLm1pblVwdGltZSwgbWluVXB0aW1lID0gX2EgPT09IHZvaWQgMCA/IERFRkFVTFQubWluVXB0aW1lIDogX2E7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5fY29ubmVjdFRpbWVvdXQpO1xyXG4gICAgICAgICAgICBfdGhpcy5fdXB0aW1lVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2FjY2VwdE9wZW4oKTsgfSwgbWluVXB0aW1lKTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBfdGhpcy5fd3MuYmluYXJ5VHlwZSA9IF90aGlzLl9iaW5hcnlUeXBlO1xyXG4gICAgICAgICAgICAvLyBzZW5kIGVucXVldWVkIG1lc3NhZ2VzIChtZXNzYWdlcyBzZW50IGJlZm9yZSB3ZWJzb2NrZXQgb3BlbiBldmVudClcclxuICAgICAgICAgICAgX3RoaXMuX21lc3NhZ2VRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiBfdGhpcy5fd3Muc2VuZChtZXNzYWdlKTsgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9tZXNzYWdlUXVldWUgPSBbXTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9ub3Blbikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25vcGVuKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fbGlzdGVuZXJzLm9wZW4uZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdtZXNzYWdlIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9ubWVzc2FnZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5tZXNzYWdlLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2Vycm9yIGV2ZW50JywgZXZlbnQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIF90aGlzLl9kaXNjb25uZWN0KHVuZGVmaW5lZCwgZXZlbnQubWVzc2FnZSA9PT0gJ1RJTUVPVVQnID8gJ3RpbWVvdXQnIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLm9uZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uZXJyb3IoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnZXhlYyBlcnJvciBsaXN0ZW5lcnMnKTtcclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5lcnJvci5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdjbG9zZSBldmVudCcpO1xyXG4gICAgICAgICAgICBfdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuX3Nob3VsZFJlY29ubmVjdCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25jbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25jbG9zZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5jbG9zZS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX3Byb3RvY29scyA9IHByb3RvY29scztcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLl9jb25uZWN0KCk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIkNPTk5FQ1RJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiT1BFTlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJDTE9TSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIkNMT1NFRFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiQ09OTkVDVElOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ09OTkVDVElORztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIk9QRU5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0Lk9QRU47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJDTE9TSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5DTE9TSU5HO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiQ0xPU0VEXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5DTE9TRUQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJiaW5hcnlUeXBlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MuYmluYXJ5VHlwZSA6IHRoaXMuX2JpbmFyeVR5cGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iaW5hcnlUeXBlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl93cykge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fd3MuYmluYXJ5VHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJyZXRyeUNvdW50XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb3IgY29ubmVjdGlvbiByZXRyaWVzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCh0aGlzLl9yZXRyeUNvdW50LCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcImJ1ZmZlcmVkQW1vdW50XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIG9mIGRhdGEgdGhhdCBoYXZlIGJlZW4gcXVldWVkIHVzaW5nIGNhbGxzIHRvIHNlbmQoKSBidXQgbm90IHlldFxyXG4gICAgICAgICAqIHRyYW5zbWl0dGVkIHRvIHRoZSBuZXR3b3JrLiBUaGlzIHZhbHVlIHJlc2V0cyB0byB6ZXJvIG9uY2UgYWxsIHF1ZXVlZCBkYXRhIGhhcyBiZWVuIHNlbnQuXHJcbiAgICAgICAgICogVGhpcyB2YWx1ZSBkb2VzIG5vdCByZXNldCB0byB6ZXJvIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgY2xvc2VkOyBpZiB5b3Uga2VlcCBjYWxsaW5nIHNlbmQoKSxcclxuICAgICAgICAgKiB0aGlzIHdpbGwgY29udGludWUgdG8gY2xpbWIuIFJlYWQgb25seVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYnl0ZXMgPSB0aGlzLl9tZXNzYWdlUXVldWUucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2MgKz0gbWVzc2FnZS5sZW5ndGg7IC8vIG5vdCBieXRlIHNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBCbG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICs9IG1lc3NhZ2Uuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYyArPSBtZXNzYWdlLmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ5dGVzICsgKHRoaXMuX3dzID8gdGhpcy5fd3MuYnVmZmVyZWRBbW91bnQgOiAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcImV4dGVuc2lvbnNcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBleHRlbnNpb25zIHNlbGVjdGVkIGJ5IHRoZSBzZXJ2ZXIuIFRoaXMgaXMgY3VycmVudGx5IG9ubHkgdGhlIGVtcHR5IHN0cmluZyBvciBhIGxpc3Qgb2ZcclxuICAgICAgICAgKiBleHRlbnNpb25zIGFzIG5lZ290aWF0ZWQgYnkgdGhlIGNvbm5lY3Rpb25cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MuZXh0ZW5zaW9ucyA6ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwicHJvdG9jb2xcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIG5hbWUgb2YgdGhlIHN1Yi1wcm90b2NvbCB0aGUgc2VydmVyIHNlbGVjdGVkO1xyXG4gICAgICAgICAqIHRoaXMgd2lsbCBiZSBvbmUgb2YgdGhlIHN0cmluZ3Mgc3BlY2lmaWVkIGluIHRoZSBwcm90b2NvbHMgcGFyYW1ldGVyIHdoZW4gY3JlYXRpbmcgdGhlXHJcbiAgICAgICAgICogV2ViU29ja2V0IG9iamVjdFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy5wcm90b2NvbCA6ICcnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwicmVhZHlTdGF0ZVwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNvbm5lY3Rpb247IHRoaXMgaXMgb25lIG9mIHRoZSBSZWFkeSBzdGF0ZSBjb25zdGFudHNcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MucmVhZHlTdGF0ZSA6IFJlY29ubmVjdGluZ1dlYlNvY2tldC5DT05ORUNUSU5HO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwidXJsXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgVVJMIGFzIHJlc29sdmVkIGJ5IHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd3MgPyB0aGlzLl93cy51cmwgOiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbiBvciBjb25uZWN0aW9uIGF0dGVtcHQsIGlmIGFueS4gSWYgdGhlIGNvbm5lY3Rpb24gaXMgYWxyZWFkeVxyXG4gICAgICogQ0xPU0VELCB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmdcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcclxuICAgICAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7IGNvZGUgPSAxMDAwOyB9XHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3Nob3VsZFJlY29ubmVjdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2NsZWFyVGltZW91dHMoKTtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdjbG9zZSBlbnF1ZXVlZDogbm8gd3MgaW5zdGFuY2UnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gdGhpcy5DTE9TRUQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ2Nsb3NlOiBhbHJlYWR5IGNsb3NlZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3dzLmNsb3NlKGNvZGUsIHJlYXNvbik7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZXMgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uIG9yIGNvbm5lY3Rpb24gYXR0ZW1wdCBhbmQgY29ubmVjdHMgYWdhaW4uXHJcbiAgICAgKiBSZXNldHMgcmV0cnkgY291bnRlcjtcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5yZWNvbm5lY3QgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkUmVjb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jbG9zZUNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQgPSAtMTtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzIHx8IHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IHRoaXMuQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3QoY29kZSwgcmVhc29uKTtcclxuICAgICAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEVucXVldWUgc3BlY2lmaWVkIGRhdGEgdG8gYmUgdHJhbnNtaXR0ZWQgdG8gdGhlIHNlcnZlciBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvblxyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLl93cyAmJiB0aGlzLl93cy5yZWFkeVN0YXRlID09PSB0aGlzLk9QRU4pIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ3NlbmQnLCBkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5fd3Muc2VuZChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdlbnF1ZXVlJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VRdWV1ZS5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgb2YgYSBzcGVjaWZpYyBldmVudCB0eXBlXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbdHlwZV0pIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdID0gdGhpcy5fbGlzdGVuZXJzW3R5cGVdLmZpbHRlcihmdW5jdGlvbiAobCkgeyByZXR1cm4gbCAhPT0gbGlzdGVuZXI7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuZGVidWcpIHtcclxuICAgICAgICAgICAgLy8gbm90IHVzaW5nIHNwcmVhZCBiZWNhdXNlIGNvbXBpbGVkIHZlcnNpb24gdXNlcyBTeW1ib2xzXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ1JXUz4nXS5jb25jYXQoYXJncykpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9nZXROZXh0RGVsYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fb3B0aW9ucywgX2IgPSBfYS5yZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IsIHJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvciA9IF9iID09PSB2b2lkIDAgPyBERUZBVUxULnJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvciA6IF9iLCBfYyA9IF9hLm1pblJlY29ubmVjdGlvbkRlbGF5LCBtaW5SZWNvbm5lY3Rpb25EZWxheSA9IF9jID09PSB2b2lkIDAgPyBERUZBVUxULm1pblJlY29ubmVjdGlvbkRlbGF5IDogX2MsIF9kID0gX2EubWF4UmVjb25uZWN0aW9uRGVsYXksIG1heFJlY29ubmVjdGlvbkRlbGF5ID0gX2QgPT09IHZvaWQgMCA/IERFRkFVTFQubWF4UmVjb25uZWN0aW9uRGVsYXkgOiBfZDtcclxuICAgICAgICB2YXIgZGVsYXkgPSBtaW5SZWNvbm5lY3Rpb25EZWxheTtcclxuICAgICAgICBpZiAodGhpcy5fcmV0cnlDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgZGVsYXkgPVxyXG4gICAgICAgICAgICAgICAgbWluUmVjb25uZWN0aW9uRGVsYXkgKiBNYXRoLnBvdyhyZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IsIHRoaXMuX3JldHJ5Q291bnQgLSAxKTtcclxuICAgICAgICAgICAgaWYgKGRlbGF5ID4gbWF4UmVjb25uZWN0aW9uRGVsYXkpIHtcclxuICAgICAgICAgICAgICAgIGRlbGF5ID0gbWF4UmVjb25uZWN0aW9uRGVsYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ25leHQgZGVsYXknLCBkZWxheSk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGF5O1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX3dhaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBfdGhpcy5fZ2V0TmV4dERlbGF5KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2dldE5leHRVcmwgPSBmdW5jdGlvbiAodXJsUHJvdmlkZXIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybFByb3ZpZGVyID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVybFByb3ZpZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmxQcm92aWRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gdXJsUHJvdmlkZXIoKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHVybC50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIFVSTCcpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5fY29ubmVjdExvY2sgfHwgIXRoaXMuX3Nob3VsZFJlY29ubmVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Nvbm5lY3RMb2NrID0gdHJ1ZTtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLl9vcHRpb25zLCBfYiA9IF9hLm1heFJldHJpZXMsIG1heFJldHJpZXMgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVC5tYXhSZXRyaWVzIDogX2IsIF9jID0gX2EuY29ubmVjdGlvblRpbWVvdXQsIGNvbm5lY3Rpb25UaW1lb3V0ID0gX2MgPT09IHZvaWQgMCA/IERFRkFVTFQuY29ubmVjdGlvblRpbWVvdXQgOiBfYywgX2QgPSBfYS5XZWJTb2NrZXQsIFdlYlNvY2tldCA9IF9kID09PSB2b2lkIDAgPyBnZXRHbG9iYWxXZWJTb2NrZXQoKSA6IF9kO1xyXG4gICAgICAgIGlmICh0aGlzLl9yZXRyeUNvdW50ID49IG1heFJldHJpZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVidWcoJ21heCByZXRyaWVzIHJlYWNoZWQnLCB0aGlzLl9yZXRyeUNvdW50LCAnPj0nLCBtYXhSZXRyaWVzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50Kys7XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ2Nvbm5lY3QnLCB0aGlzLl9yZXRyeUNvdW50KTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICBpZiAoIWlzV2ViU29ja2V0KFdlYlNvY2tldCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vIHZhbGlkIFdlYlNvY2tldCBjbGFzcyBwcm92aWRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93YWl0KClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2dldE5leHRVcmwoX3RoaXMuX3VybCk7IH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICAgICAgLy8gY2xvc2UgY291bGQgYmUgY2FsbGVkIGJlZm9yZSBjcmVhdGluZyB0aGUgd3NcclxuICAgICAgICAgICAgaWYgKF90aGlzLl9jbG9zZUNhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3RMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdjb25uZWN0JywgeyB1cmw6IHVybCwgcHJvdG9jb2xzOiBfdGhpcy5fcHJvdG9jb2xzIH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5fd3MgPSBfdGhpcy5fcHJvdG9jb2xzXHJcbiAgICAgICAgICAgICAgICA/IG5ldyBXZWJTb2NrZXQodXJsLCBfdGhpcy5fcHJvdG9jb2xzKVxyXG4gICAgICAgICAgICAgICAgOiBuZXcgV2ViU29ja2V0KHVybCk7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgX3RoaXMuX3dzLmJpbmFyeVR5cGUgPSBfdGhpcy5fYmluYXJ5VHlwZTtcclxuICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3RMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLl9hZGRMaXN0ZW5lcnMoKTtcclxuICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3RUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5faGFuZGxlVGltZW91dCgpOyB9LCBjb25uZWN0aW9uVGltZW91dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5faGFuZGxlVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1ZygndGltZW91dCBldmVudCcpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKG5ldyBFcnJvckV2ZW50KEVycm9yKCdUSU1FT1VUJyksIHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9kaXNjb25uZWN0ID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xyXG4gICAgICAgIGlmIChjb2RlID09PSB2b2lkIDApIHsgY29kZSA9IDEwMDA7IH1cclxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycygpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dzLmNsb3NlKGNvZGUsIHJlYXNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlKG5ldyBDbG9zZUV2ZW50KGNvZGUsIHJlYXNvbiwgdGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2FjY2VwdE9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ2FjY2VwdCBvcGVuJyk7XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCA9IDA7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fY2FsbEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKCdoYW5kbGVFdmVudCcgaW4gbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGxpc3RlbmVyKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fcmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kZWJ1ZygncmVtb3ZlTGlzdGVuZXJzJyk7XHJcbiAgICAgICAgdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMuX2hhbmRsZU9wZW4pO1xyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5faGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9oYW5kbGVNZXNzYWdlKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fd3MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kZWJ1ZygnYWRkTGlzdGVuZXJzJyk7XHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsIHRoaXMuX2hhbmRsZU9wZW4pO1xyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5faGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9oYW5kbGVNZXNzYWdlKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgdGhpcy5fd3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCB0aGlzLl9oYW5kbGVFcnJvcik7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fY2xlYXJUaW1lb3V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fY29ubmVjdFRpbWVvdXQpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl91cHRpbWVUaW1lb3V0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0O1xyXG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBSZWNvbm5lY3RpbmdXZWJTb2NrZXQ7XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGNvbnN0IGdldFBhdGggPSAoa2V5TGlzdCwgb3B0cyA9IHt9KSA9PiB7XG4gICAgbGV0IHRoaXNDaGFpbjtcbiAgICBjb25zdCBvbiA9IGZuID0+IHtcbiAgICAgIGxldCB2YWx1ZSwgZ2V0VmFsdWU7XG4gICAgICBsZXQgaGFzUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGJvdW5kID0gZm4uYmluZCh0aGlzQ2hhaW4pO1xuICAgICAgY29uc3QgcmVjZWl2ZWQgPSB2YWwgPT4gKGhhc1Jlc3BvbnNlID0gdHJ1ZSkgJiYgYm91bmQoKHZhbHVlID0gdmFsKSk7XG4gICAgICBjb25zdCByZXF1ZXN0ZWQgPSB7fTtcbiAgICAgIGNvbnN0IHJlcXVlc3RzID0ge307XG4gICAgICBjb25zdCBncmFwaCA9IHt9O1xuXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gZGIuY29ubmVjdGVkKG1zZyA9PiB7XG4gICAgICAgIGNvbnN0IHsganNvbiB9ID0gbXNnO1xuICAgICAgICBjb25zdCBhdCA9IFIucHJvcChcIkBcIiwganNvbik7XG4gICAgICAgIGNvbnN0IGF0U291bCA9IHJlcXVlc3RzW2F0XTtcbiAgICAgICAgY29uc3Qgc291bHMgPSBSLmtleXMoUi5wcm9wKFwicHV0XCIsIGpzb24pKTtcblxuICAgICAgICBpZiAoYXRTb3VsKSBzb3Vscy5wdXNoKGF0U291bCk7XG4gICAgICAgIGlmICghc291bHMubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIFIudW5pcShzb3VscykuZm9yRWFjaChzb3VsID0+IHtcbiAgICAgICAgICBpZiAoIXJlcXVlc3RlZFtzb3VsXSkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBSLnBhdGgoW1wicHV0XCIsIHNvdWxdLCBqc29uKTtcblxuICAgICAgICAgIGlmICghbm9kZSAmJiAhaGFzUmVzcG9uc2UpIHJlY2VpdmVkKCk7XG4gICAgICAgICAgaWYgKG5vZGUpIGdyYXBoW3NvdWxdID0gUi5tZXJnZURlZXBMZWZ0KG5vZGUsIGdyYXBoW3NvdWxdIHx8IHt9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGdldFZhbHVlKGtleUxpc3QpO1xuXG4gICAgICAgIGlmIChuZXh0VmFsdWUgIT09IHZhbHVlKSByZWNlaXZlZChuZXh0VmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGdldE5vZGUgPSBzb3VsID0+IHtcbiAgICAgICAgaWYgKHJlcXVlc3RlZFtzb3VsXSkgcmV0dXJuIGdyYXBoW3NvdWxdO1xuICAgICAgICBjb25zdCBpZCA9IHV1aWQudjQoKTtcblxuICAgICAgICByZXF1ZXN0ZWRbc291bF0gPSBpZDtcbiAgICAgICAgcmVxdWVzdHNbaWRdID0gc291bDtcbiAgICAgICAgY29ubmVjdGlvbi5yZWNlaXZlKHtcbiAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICAgIGpzb246IHsgXCIjXCI6IGlkLCBnZXQ6IHsgXCIjXCI6IHNvdWwgfSB9LFxuICAgICAgICAgIHNraXBWYWxpZGF0aW9uOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ3JhcGhbc291bF07XG4gICAgICB9O1xuXG4gICAgICBnZXRWYWx1ZSA9IGtsID0+IHtcbiAgICAgICAgY29uc3QgbGFzdEtleSA9IGtsW2tsLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChrbC5sZW5ndGggPT09IDEpIHJldHVybiBnZXROb2RlKGxhc3RLZXkpO1xuICAgICAgICBjb25zdCBwYXJlbnRWYWx1ZSA9IGdldFZhbHVlKGtsLnNsaWNlKDAsIGtsLmxlbmd0aCAtIDEpKTtcblxuICAgICAgICBpZiAoIXBhcmVudFZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IFIucHJvcChsYXN0S2V5LCBwYXJlbnRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlW1wiI1wiXSkgcmV0dXJuIGdldE5vZGUodmFsdWVbXCIjXCJdKTtcbiAgICAgICAgaWYgKGtsID09PSBrZXlMaXN0KSByZWNlaXZlZCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIGNvbm5lY3Rpb24ucmVjZWl2ZSh7IGpzb246IHsgbGVlY2g6IHRydWUgfSB9KTtcbiAgICAgIGdldFZhbHVlKGtleUxpc3QpO1xuICAgICAgcmV0dXJuICgpID0+IGRiLmRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGhlbiA9IChmbiA9IFIuaWRlbnRpdHkpID0+XG4gICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbih2YWwgPT4ge1xuICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLnRoZW4oZm4pO1xuXG4gICAgY29uc3Qgb25jZSA9IGZuID0+IHRoZW4oZm4uYmluZCh0aGlzQ2hhaW4pKSAmJiB0aGlzQ2hhaW47XG4gICAgY29uc3QgZ2V0ID0gKGtleSwgb3B0cyA9IHt9KSA9PiBnZXRQYXRoKFsuLi5rZXlMaXN0LCBrZXldLCBvcHRzKTtcblxuICAgIHRoaXNDaGFpbiA9IHsgZ2V0LCBvbiwgdGhlbiwgb25jZSB9O1xuICAgIHJldHVybiB0aGlzQ2hhaW47XG4gIH07XG5cbiAgY29uc3QgZ2V0RGlmZiA9IHB1dCA9PiB7XG4gICAgY29uc3Qgc291bHMgPSBSLmtleXMocHV0KTtcbiAgICBjb25zdCBkaWZmcyA9IHt9O1xuXG4gICAgaWYgKCFzb3Vscy5sZW5ndGgpIHJldHVybiBQcm9taXNlLnJlc29sdmUoe30pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIHNvdWxzLm1hcChzb3VsID0+XG4gICAgICAgIGRiLmdldChzb3VsLCB7IG5vUmVsYXk6IHRydWUgfSkudGhlbihleGlzdGluZyA9PiB7XG4gICAgICAgICAgY29uc3QgZGlmZiA9IGRiLmRpZmZOb2RlKGV4aXN0aW5nLCBwdXRbc291bF0pO1xuXG4gICAgICAgICAgaWYgKGRpZmYpIGRpZmZzW3NvdWxdID0gZGlmZjtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKCFSLmtleXMoZGlmZnMpLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gZGlmZnM7XG4gICAgfSk7XG4gIH07XG5cbiAgZGIuZ2V0ID0gKGtleSwgb3B0cyA9IHt9KSA9PiBnZXRQYXRoKFtrZXldLCBvcHRzKTtcbiAgZGIuZ2V0RGlmZiA9IGdldERpZmY7XG4gIHJldHVybiBkYjtcbn07XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcblxuY29uc3QgTVNHX1RPUElDID0gXCJndW46bXNnXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZGIgPT4ge1xuICBjb25zdCBwbTIgPSByZXF1aXJlKFwicG0yXCIpO1xuICBjb25zdCBpZCA9IHV1aWQudjQoKTtcblxuICBwbTIubGF1bmNoQnVzKChlcnIsIGJ1cykgPT4ge1xuICAgIGlmIChlcnIpIGNvbnNvbGUuZXJyKGVycik7XG4gICAgYnVzLm9uKFwicHJvY2Vzczptc2dcIiwgcGFja2V0ID0+IHtcbiAgICAgIGlmIChwYWNrZXQucmF3Lm1zZy5mcm9tQ2x1c3RlciA9PT0gaWQpIHJldHVybjtcbiAgICAgIGlmIChwYWNrZXQucmF3LnRvcGljID09PSBNU0dfVE9QSUMpIHtcbiAgICAgICAgZGIucHJvY2Vzc0luKFIuYXNzb2MoXCJkYlwiLCBkYiwgcGFja2V0LnJhdy5tc2cpKS5jYXRjaChlcnIgPT5cbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUElTVE9MIGNsdXN0ZXIgZXJyXCIsIGVycilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGNvbnN0IHsgZnJvbUNsdXN0ZXIsIG5vUmVsYXkgfSA9IG1zZztcblxuICAgIGlmIChub1JlbGF5IHx8IGZyb21DbHVzdGVyKSByZXR1cm4gbXNnO1xuICAgIGlmIChwcm9jZXNzLnNlbmQpIHtcbiAgICAgIHByb2Nlc3Muc2VuZCh7XG4gICAgICAgIHRvcGljOiBNU0dfVE9QSUMsXG4gICAgICAgIG1zZzogUi5tZXJnZUxlZnQoeyBmcm9tQ2x1c3RlcjogaWQsIHNraXBWYWxpZGF0aW9uOiB0cnVlIH0sIG1zZylcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbXNnO1xuICB9KTtcblxuICByZXR1cm4gZGI7XG59O1xuIiwiLyogZ2xvYmFscyBQcm9taXNlICovXG5pbXBvcnQgeyBhc3NvY1BhdGgsIHBhdGgsIHdpdGhvdXQgfSBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBkaWZmTm9kZSB9IGZyb20gXCIuL2RpZmZcIjtcblxuZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKCkge1xuICBsZXQgZm5zID0gW107XG4gIGNvbnN0IHF1ZXVlID0gZm4gPT4gZm5zLnB1c2goZm4pO1xuICBjb25zdCBkZXF1ZXVlID0gZm4gPT4gKGZucyA9IHdpdGhvdXQoW2ZuXSwgZm5zKSk7XG5cbiAgZnVuY3Rpb24gZXhlY3V0ZShtc2cpIHtcbiAgICBjb25zdCByZW1haW5pbmdGbnMgPSBmbnMuc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgY29uc3QgZXhlY3V0ZU5leHQgPSBtc2cgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZm4gPSByZW1haW5pbmdGbnMucG9wKCk7XG5cbiAgICAgICAgaWYgKG1zZyAmJiBmbikgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmbihtc2cpKS50aGVuKGV4ZWN1dGVOZXh0KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtc2cpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBleGVjdXRlTmV4dChtc2cpO1xuICB9XG5cbiAgcmV0dXJuIFtxdWV1ZSwgZXhlY3V0ZSwgZGVxdWV1ZV07XG59XG5cbmZ1bmN0aW9uIHBpc3RvbENvbm5lY3Rpb24oeyBkYiwgc2VuZDogc2VuZEZuIH0pIHtcbiAgbGV0IGNvbm5lY3Rpb247XG4gIGxldCBzdGF0ZSA9IHt9O1xuICBsZXQgaGFzUmVwb3J0ZWRFcnJvciA9IGZhbHNlO1xuICBjb25zdCBnZXQgPSBwID0+IHBhdGgocCwgc3RhdGUpO1xuICBjb25zdCBzZXQgPSAocCwgdikgPT4gKHN0YXRlID0gYXNzb2NQYXRoKHAsIHYsIHN0YXRlKSk7IC8vICYmIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgY29uc3QgbXNnSWQgPSAoKSA9PiB1dWlkLnY0KCk7XG4gIGNvbnN0IHNlbmQgPSBtc2cgPT5cbiAgICBkYlxuICAgICAgLnByb2Nlc3NPdXQoeyAuLi5tc2csIHRvOiBjb25uZWN0aW9uIH0pXG4gICAgICAudGhlbihyID0+IHIgJiYgc2VuZEZuKHIpKVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGlmICghaGFzUmVwb3J0ZWRFcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcIlBJU1RPTCBzZW5kIGVyclwiLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkobXNnLCBudWxsLCAyKSxcbiAgICAgICAgICAgIG1zZy5qc29uLnB1dCxcbiAgICAgICAgICAgIGVyclxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaGFzUmVwb3J0ZWRFcnJvciA9IHRydWU7XG4gICAgICB9KTtcbiAgY29uc3QgcmVjZWl2ZSA9ICh7IGpzb24sIHJhdywgLi4ub3B0cyB9KSA9PiB7XG4gICAgY29uc3QgcHJlc2VydmVkID0gcmF3IHx8IEpTT04uc3RyaW5naWZ5KGpzb24sIG51bGwsIDIpO1xuXG4gICAgcmV0dXJuIGRiXG4gICAgICAucHJvY2Vzc0luKHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgZGIsXG4gICAgICAgIGpzb246IHsgLi4uanNvbiwgXCIjXCI6IGpzb25bXCIjXCJdIHx8IG1zZ0lkKCkgfSxcbiAgICAgICAgZnJvbTogY29ubmVjdGlvblxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIlBJU1RPTCByZWNlaXZlIGVyclwiLCBlcnIsIHByZXNlcnZlZCkpO1xuICB9O1xuXG4gIGNvbm5lY3Rpb24gPSB7IHNlbmQsIHJlY2VpdmUsIGdldCwgc2V0LCBtc2dJZCB9O1xuICByZXR1cm4gY29ubmVjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZWl2ZXIoKSB7XG4gIGxldCBwZWVyO1xuICBjb25zdCBjb25uZWN0aW9ucyA9IFtdO1xuICBjb25zdCBbb25JbiwgcHJvY2Vzc0luXSA9IHByb2Nlc3NRdWV1ZSgpO1xuICBjb25zdCBbb25PdXQsIHByb2Nlc3NPdXRdID0gcHJvY2Vzc1F1ZXVlKCk7XG5cbiAgZnVuY3Rpb24gY29ubmVjdGVkKHNlbmQpIHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gcGlzdG9sQ29ubmVjdGlvbih7IGRiOiBwZWVyLCBzZW5kIH0pO1xuXG4gICAgY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcbiAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbklkeCA9IGNvbm5lY3Rpb25zLmluZGV4T2YoY29ubmVjdGlvbik7XG5cbiAgICBpZiAoY29ubmVjdGlvbklkeCAhPT0gLTEpIGNvbm5lY3Rpb25zLnNwbGljZShjb25uZWN0aW9uSWR4LCAxKTtcbiAgfVxuXG4gIHBlZXIgPSB7XG4gICAgY29ubmVjdGlvbnMsXG4gICAgY29ubmVjdGVkLFxuICAgIGRpc2Nvbm5lY3RlZCxcbiAgICBvbkluLFxuICAgIG9uT3V0LFxuICAgIHByb2Nlc3NJbixcbiAgICBwcm9jZXNzT3V0LFxuICAgIGRpZmZOb2RlXG4gIH07XG4gIHJldHVybiBwZWVyO1xufVxuIiwiaW1wb3J0IHsgcGF0aCwga2V5cyB9IGZyb20gXCJyYW1kYVwiO1xuY29uc3QgTUFYX01TR19JRF9DQUNIRSA9IDUwMDAwO1xuY29uc3QgR0FSQkFHRV9JTlRFUlZBTCA9IDYwMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGNvbnN0IHJlY2VpdmVkSWRzID0ge307XG5cbiAgZnVuY3Rpb24gY29sbGVjdEdhcmJhZ2UoKSB7XG4gICAgbGV0IGlkcyA9IGtleXMocmVjZWl2ZWRJZHMpLnJldmVyc2UoKTtcblxuICAgIHdoaWxlIChpZHMubGVuZ3RoID4gTUFYX01TR19JRF9DQUNIRSkge1xuICAgICAgZGVsZXRlIHJlY2VpdmVkSWRzW2lkcy5wb3AoKV07XG4gICAgfVxuICB9XG5cbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGNvbnN0IGlkID0gcGF0aChbXCJqc29uXCIsIFwiI1wiXSwgbXNnKTtcblxuICAgIGlmICghaWQgfHwgcmVjZWl2ZWRJZHNbaWRdKSByZXR1cm4gbnVsbDtcbiAgICByZWNlaXZlZElkc1tpZF0gPSB0cnVlO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIHNldEludGVydmFsKGNvbGxlY3RHYXJiYWdlLCBHQVJCQUdFX0lOVEVSVkFMKTtcblxuICByZXR1cm4gZGI7XG59O1xuIiwiaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcblxuY29uc3QgR1JBQ0UgPSAxMCAqIDYwICogMTAwMDsgLy8gSG93IGZhciBhaGVhZCBjbG9jayBjYW4gYmUsIHVubGlrZSBndW4gd2UganVzdCBkaXNjYXJkIG5vdCBkZWZlclxuY29uc3QgTGV4aWNhbCA9IEpTT04uc3RyaW5naWZ5OyAvLyBUaGlzIGlzIHdoYXQgR3VuIHVzZXNcblxuZXhwb3J0IGNvbnN0IGRpZmZOb2RlID0gKGV4aXN0aW5nLCB1cGRhdGVkLCBtYWNoaW5lU3RhdGUgPSBudWxsKSA9PiB7XG4gIGxldCBtYXhTdGF0ZSA9IChtYWNoaW5lU3RhdGUgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkpICsgR1JBQ0U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgY29uc3QgZXhpc3RpbmdTdGF0ZSA9IFIucGF0aChbXCJfXCIsIFwiPlwiXSwgZXhpc3RpbmcpIHx8IHt9O1xuICBjb25zdCB1cGRhdGVkU3RhdGUgPSBSLnBhdGgoW1wiX1wiLCBcIj5cIl0sIHVwZGF0ZWQpIHx8IHt9O1xuXG4gIHJldHVybiBSLmNvbXBvc2UoXG4gICAgdmFscyA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gUi5rZXlzKHZhbHMpO1xuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBSLmFzc29jKFxuICAgICAgICBcIl9cIixcbiAgICAgICAgUi5hc3NvYyhcIj5cIiwgUi5waWNrKGtleXMsIHVwZGF0ZWRTdGF0ZSksIHVwZGF0ZWQuXyksXG4gICAgICAgIHZhbHNcbiAgICAgICk7XG4gICAgfSxcbiAgICBSLnJlZHVjZSgodXBkYXRlcywga2V5KSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ0tleVN0YXRlID0gZXhpc3RpbmdTdGF0ZVtrZXldO1xuICAgICAgY29uc3QgdXBkYXRlZEtleVN0YXRlID0gdXBkYXRlZFN0YXRlW2tleV07XG5cbiAgICAgIGlmICh1cGRhdGVkS2V5U3RhdGUgPiBtYXhTdGF0ZSB8fCAhdXBkYXRlZEtleVN0YXRlKSByZXR1cm4gdXBkYXRlcztcbiAgICAgIGlmIChleGlzdGluZ0tleVN0YXRlICYmIGV4aXN0aW5nS2V5U3RhdGUgPj0gdXBkYXRlZEtleVN0YXRlKVxuICAgICAgICByZXR1cm4gdXBkYXRlcztcblxuICAgICAgaWYgKGV4aXN0aW5nS2V5U3RhdGUgPT09IHVwZGF0ZWRLZXlTdGF0ZSkge1xuICAgICAgICBjb25zdCBleGlzdGluZ1ZhbCA9IFIucHJvcChrZXksIGV4aXN0aW5nKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFZhbCA9IFIucHJvcChrZXksIHVwZGF0ZWQpO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgYmFzZWQgb24gR3VuJ3MgbG9naWNcbiAgICAgICAgaWYgKExleGljYWwodXBkYXRlZFZhbCkgPD0gTGV4aWNhbChleGlzdGluZ1ZhbCkpIHJldHVybiB1cGRhdGVkO1xuICAgICAgfVxuICAgICAgdXBkYXRlc1trZXldID0gdXBkYXRlZFtrZXldO1xuICAgICAgcmV0dXJuIHVwZGF0ZXM7XG4gICAgfSwge30pLFxuICAgIFIua2V5c1xuICApKHVwZGF0ZWRTdGF0ZSk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFpbkludGVyZmFjZSB9IGZyb20gXCIuL2NoYWluXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlY2VpdmVyIH0gZnJvbSBcIi4vY29yZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWR1cGxpY2F0ZU1lc3NhZ2VzIH0gZnJvbSBcIi4vZGVkdXBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsb3dMZWVjaCB9IGZyb20gXCIuL2xlZWNoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGF5TWVzc2FnZXMgfSBmcm9tIFwiLi9yZWxheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbHVzdGVyIH0gZnJvbSBcIi4vY2x1c3RlclwiO1xuaW1wb3J0ICogYXMgd2Vic29ja2V0IGZyb20gXCIuL3dlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgd2Vic29ja2V0VHJhbnNwb3J0ID0gd2Vic29ja2V0O1xuIiwiaW1wb3J0IHsgcGF0aCwga2V5cyB9IGZyb20gXCJyYW1kYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBpZiAoIW1zZy5mcm9tIHx8ICFtc2cuZnJvbS5zZXQpIHJldHVybiBtc2c7XG4gICAgaWYgKHBhdGgoW1wianNvblwiLCBcImxlZWNoXCJdLCBtc2cpKSB7XG4gICAgICBtc2cuZnJvbS5zZXQoW1wiaXNMZWVjaGluZ1wiXSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBhc2tpbmdGb3IgPSBwYXRoKFtcImpzb25cIiwgXCJnZXRcIiwgXCIjXCJdLCBtc2cpO1xuXG4gICAgW2Fza2luZ0ZvciwgLi4ua2V5cyhwYXRoKFtcImpzb25cIiwgXCJwdXRcIl0sIG1zZykpXS5mb3JFYWNoKFxuICAgICAgc291bCA9PiBzb3VsICYmIG1zZy5mcm9tLnNldChbXCJoYXNBc2tlZEZvclwiLCBzb3VsXSwgdHJ1ZSlcbiAgICApO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIGRiLm9uT3V0KG1zZyA9PiB7XG4gICAgY29uc3QgeyB0bywganNvbiwgaWdub3JlTGVlY2hpbmcgfSA9IG1zZztcblxuICAgIGlmICghdG8uZ2V0KFtcImlzTGVlY2hpbmdcIl0pIHx8IGlnbm9yZUxlZWNoaW5nKSByZXR1cm4gbXNnO1xuICAgIGNvbnN0IGFza2VkUHV0cyA9IGtleXMoanNvbi5wdXQpLmZpbHRlcihzb3VsID0+IHtcbiAgICAgIGlmICghdG8uZ2V0KFtcImhhc0Fza2VkRm9yXCIsIHNvdWxdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3Qgc291bERlbHRhcyA9IHBhdGgoW3NvdWwsIFwiX1wiLCBcIj5cIl0sIGpzb24ucHV0KTtcbiAgICAgIGxldCBoYXNVcGRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGlmICgha2V5cyhzb3VsRGVsdGFzKS5sZW5ndGgpIHJldHVybiB0cnVlO1xuXG4gICAgICBrZXlzKHNvdWxEZWx0YXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3Qga25vd24gPSB0by5nZXQoW1wia25vd25EZWx0YXNcIiwgc291bCwga2V5XSkgfHwgMDtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBwYXJzZUZsb2F0KHNvdWxEZWx0YXNba2V5XSkgfHwgMDtcblxuICAgICAgICBpZiAoa25vd24gJiYgZGVsdGEgPD0ga25vd24pIHJldHVybjtcbiAgICAgICAgdG8uc2V0KFtcImtub3duRGVsdGFzXCIsIHNvdWwsIGtleV0sIGRlbHRhKTtcbiAgICAgICAgaGFzVXBkYXRlcyA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoYXNVcGRhdGVzO1xuICAgIH0pO1xuXG4gICAgaWYgKGFza2VkUHV0cy5sZW5ndGgpIHJldHVybiBtc2c7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZGIgPT4ge1xuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgY29uc3QgeyBmcm9tLCBub1JlbGF5IH0gPSBtc2c7XG5cbiAgICBpZiAobm9SZWxheSkgcmV0dXJuIG1zZztcbiAgICBSLndpdGhvdXQoW2Zyb21dLCBkYi5jb25uZWN0aW9ucykuZm9yRWFjaChjID0+XG4gICAgICBjLnNlbmQoUi5hc3NvYyhcInNraXBWYWxpZGF0aW9uXCIsIHRydWUsIG1zZykpXG4gICAgKTtcbiAgICByZXR1cm4gbXNnO1xuICB9KTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCB7IGN1cnJ5IH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgV1MgZnJvbSBcIndzXCI7XG5pbXBvcnQgUmVjb25uZWN0aW5nV2ViU29ja2V0IGZyb20gXCJyZWNvbm5lY3Rpbmctd2Vic29ja2V0XCI7XG5cbmNvbnN0IFBJTkcgPSA2MDAwMDtcblxuY29uc3Qgd3NDb25uZWN0aW9uID0gY3VycnkoKGRiLCB3cykgPT4ge1xuICBsZXQgaGFzTG9nZ2VkRXJyID0gZmFsc2U7XG4gIGxldCBjb25uZWN0ZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBkYi5jb25uZWN0ZWQobXNnID0+IHtcbiAgICBpZiAoIW1zZyB8fCAhKG1zZy5qc29uIHx8IG1zZy5yYXcpIHx8ICFjb25uZWN0ZWQpIHJldHVybjtcbiAgICBjb25zdCByYXcgPSBtc2cucmF3IHx8IEpTT04uc3RyaW5naWZ5KG1zZy5qc29uKTtcblxuICAgIHdzLnNlbmQocmF3LCBlcnIgPT4ge1xuICAgICAgaWYgKCFlcnIgfHwgaGFzTG9nZ2VkRXJyKSByZXR1cm47XG4gICAgICBjb25zb2xlLndhcm4oXCJ3cyBzZW5kIGVyclwiLCBlcnIpO1xuICAgICAgaGFzTG9nZ2VkRXJyID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG4gICAgKCkgPT4gY29ubmVjdGlvbi5zZW5kKHsganNvbjogeyBwaW5nOiB0cnVlIH0sIHNraXBWYWxpZGF0aW9uOiB0cnVlIH0pLFxuICAgIFBJTkdcbiAgKTtcblxuICBjb25zdCByZWNlaXZlID0gbXNnID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmF3ID0gbXNnLmRhdGEgfHwgbXNnO1xuICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmF3KTtcblxuICAgICAgQXJyYXkuaXNBcnJheShqc29uKVxuICAgICAgICA/IGpzb24uZm9yRWFjaChyZWNlaXZlKVxuICAgICAgICA6IGNvbm5lY3Rpb24ucmVjZWl2ZSh7IGpzb24sIHJhdyB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUkVDRUlWRVIgaW52YWxpZCB3cyBtc2dcIiwgZSwgbXNnLmRhdGEpO1xuICAgIH1cbiAgfTtcblxuICB3cy5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgKCkgPT4ge1xuICAgIGlmICh3cy5yZWNvbm5lY3QpIHJldHVybjtcbiAgICBjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBjbGVhckludGVydmFsKHBpbmdJbnRlcnZhbCk7XG4gICAgZGIuZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pO1xuICB9KTtcblxuICB3cy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCByZWNlaXZlKTtcbiAgcmV0dXJuIGNvbm5lY3Rpb247XG59KTtcblxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IGN1cnJ5KCh7IHdlYiwgcG9ydCB9LCBkYikgPT4ge1xuICBuZXcgV1MuU2VydmVyKHsgcG9ydDogIXdlYiA/IHBvcnQgOiB1bmRlZmluZWQsIHNlcnZlcjogd2ViIH0pLm9uKFxuICAgIFwiY29ubmVjdGlvblwiLFxuICAgIHdzQ29ubmVjdGlvbihkYilcbiAgKTtcbiAgcmV0dXJuIGRiO1xufSk7XG5cbmV4cG9ydCBjb25zdCBjbGllbnQgPSBjdXJyeSgodXJsLCBkYikgPT4ge1xuICBjb25zdCB3cyA9IG5ldyBSZWNvbm5lY3RpbmdXZWJTb2NrZXQodXJsLCBbXSwgeyBXZWJTb2NrZXQ6IFdTIH0pO1xuXG4gIHdzLmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsICgpID0+IHdzQ29ubmVjdGlvbihkYiwgd3MpKTtcbiAgcmV0dXJuIGRiO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcG0yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3V1aWRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfd3NfXzsiXSwic291cmNlUm9vdCI6IiJ9