(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pm2"), require("ramda"), require("uuid"), require("ws"));
	else if(typeof define === 'function' && define.amd)
		define("@notabug/gun-receiver", ["pm2", "ramda", "uuid", "ws"], factory);
	else if(typeof exports === 'object')
		exports["@notabug/gun-receiver"] = factory(require("pm2"), require("ramda"), require("uuid"), require("ws"));
	else
		root["@notabug/gun-receiver"] = factory(root["pm2"], root["ramda"], root["uuid"], root["ws"]);
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


  var msgId = db.msgId;

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

    return db.processIn({ ...opts,
      db: db,
      json: { ...json,
        "#": json["#"] || msgId()
      },
      from: connection
    }).catch(function (err) {
      return console.error("PISTOL receive err", err, raw || json);
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

  var msgId = function msgId() {
    return _uuid.default.v4();
  };

  var stringify = JSON.stringify;

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
    msgId: msgId,
    onIn: onIn,
    onOut: onOut,
    processIn: processIn,
    processOut: processOut,
    stringify: stringify,
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
    var raw = msg.raw || db.stringify(msg.json);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1yZWNlaXZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9ub2RlX21vZHVsZXMvcmVjb25uZWN0aW5nLXdlYnNvY2tldC9kaXN0L3JlY29ubmVjdGluZy13ZWJzb2NrZXQubWpzIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1yZWNlaXZlci8uL3NyYy9jaGFpbi5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9zcmMvY2x1c3Rlci5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9zcmMvZGVkdXAuanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXJlY2VpdmVyLy4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXJlY2VpdmVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1yZWNlaXZlci8uL3NyYy9sZWVjaC5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9zcmMvcmVsYXkuanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXJlY2VpdmVyLy4vc3JjL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJwbTJcIiIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJyYW1kYVwiIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJ3c1wiIl0sIm5hbWVzIjpbImRiIiwiZ2V0UGF0aCIsImtleUxpc3QiLCJvcHRzIiwidGhpc0NoYWluIiwib24iLCJmbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJoYXNSZXNwb25zZSIsImJvdW5kIiwiYmluZCIsInJlY2VpdmVkIiwidmFsIiwicmVxdWVzdGVkIiwicmVxdWVzdHMiLCJncmFwaCIsImNvbm5lY3Rpb24iLCJjb25uZWN0ZWQiLCJtc2ciLCJqc29uIiwiYXQiLCJSIiwicHJvcCIsImF0U291bCIsInNvdWxzIiwia2V5cyIsInB1c2giLCJsZW5ndGgiLCJ1bmlxIiwiZm9yRWFjaCIsInNvdWwiLCJub2RlIiwicGF0aCIsIm1lcmdlRGVlcExlZnQiLCJuZXh0VmFsdWUiLCJnZXROb2RlIiwiaWQiLCJ2NCIsInJlY2VpdmUiLCJnZXQiLCJza2lwVmFsaWRhdGlvbiIsImtsIiwibGFzdEtleSIsInBhcmVudFZhbHVlIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJsZWVjaCIsImRpc2Nvbm5lY3RlZCIsInRoZW4iLCJpZGVudGl0eSIsIlByb21pc2UiLCJyZXNvbHZlIiwidW5zdWJzY3JpYmUiLCJvbmNlIiwia2V5IiwiZ2V0RGlmZiIsInB1dCIsImRpZmZzIiwiYWxsIiwibWFwIiwibm9SZWxheSIsImV4aXN0aW5nIiwiZGlmZiIsImRpZmZOb2RlIiwiTVNHX1RPUElDIiwibW9kdWxlIiwiZXhwb3J0cyIsInBtMiIsInJlcXVpcmUiLCJsYXVuY2hCdXMiLCJlcnIiLCJidXMiLCJjb25zb2xlIiwicGFja2V0IiwicmF3IiwiZnJvbUNsdXN0ZXIiLCJ0b3BpYyIsInByb2Nlc3NJbiIsImFzc29jIiwiY2F0Y2giLCJlcnJvciIsIm9uSW4iLCJwcm9jZXNzIiwic2VuZCIsIm1lcmdlTGVmdCIsInByb2Nlc3NRdWV1ZSIsImZucyIsInF1ZXVlIiwiZGVxdWV1ZSIsImV4ZWN1dGUiLCJyZW1haW5pbmdGbnMiLCJyZXZlcnNlIiwiZXhlY3V0ZU5leHQiLCJwb3AiLCJlIiwicmVqZWN0IiwicGlzdG9sQ29ubmVjdGlvbiIsInNlbmRGbiIsInN0YXRlIiwiaGFzUmVwb3J0ZWRFcnJvciIsInAiLCJzZXQiLCJ2IiwibXNnSWQiLCJwcm9jZXNzT3V0IiwidG8iLCJyIiwiSlNPTiIsInN0cmluZ2lmeSIsImZyb20iLCJSZWNlaXZlciIsInBlZXIiLCJjb25uZWN0aW9ucyIsIm9uT3V0IiwiY29ubmVjdGlvbklkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJNQVhfTVNHX0lEX0NBQ0hFIiwiR0FSQkFHRV9JTlRFUlZBTCIsInJlY2VpdmVkSWRzIiwiY29sbGVjdEdhcmJhZ2UiLCJpZHMiLCJzZXRJbnRlcnZhbCIsIkdSQUNFIiwiTGV4aWNhbCIsInVwZGF0ZWQiLCJtYWNoaW5lU3RhdGUiLCJtYXhTdGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiZXhpc3RpbmdTdGF0ZSIsInVwZGF0ZWRTdGF0ZSIsImNvbXBvc2UiLCJ2YWxzIiwicGljayIsIl8iLCJyZWR1Y2UiLCJ1cGRhdGVzIiwiZXhpc3RpbmdLZXlTdGF0ZSIsInVwZGF0ZWRLZXlTdGF0ZSIsImV4aXN0aW5nVmFsIiwidXBkYXRlZFZhbCIsIndlYnNvY2tldFRyYW5zcG9ydCIsIndlYnNvY2tldCIsImFza2luZ0ZvciIsImlnbm9yZUxlZWNoaW5nIiwiYXNrZWRQdXRzIiwiZmlsdGVyIiwic291bERlbHRhcyIsImhhc1VwZGF0ZXMiLCJrbm93biIsImRlbHRhIiwicGFyc2VGbG9hdCIsIndpdGhvdXQiLCJjIiwiUElORyIsIndzQ29ubmVjdGlvbiIsIndzIiwiaGFzTG9nZ2VkRXJyIiwid2FybiIsInBpbmdJbnRlcnZhbCIsInBpbmciLCJkYXRhIiwicGFyc2UiLCJBcnJheSIsImlzQXJyYXkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVjb25uZWN0IiwiY2xlYXJJbnRlcnZhbCIsInNlcnZlciIsIndlYiIsInBvcnQiLCJTZXJ2ZXIiLCJjbGllbnQiLCJ1cmwiLCJXZWJTb2NrZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYseUJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsYUFBYTtBQUMzQyxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1EQUFtRDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsNEJBQTRCLEVBQUU7QUFDekY7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGdDQUFnQyxFQUFFO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGtEQUFrRCxFQUFFO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxrREFBa0QsRUFBRTtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtEQUFrRCxFQUFFO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0RBQWtELEVBQUU7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSx1QkFBdUIsRUFBRTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0NBQXNDLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdDQUF3QztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCwrQkFBK0IsRUFBRTtBQUM3RixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RmQ7QUFJQSxTQUFPQSxFQUFQO0FBQ0QsQ0FOcUIsQ0FBZjs7QUFRQSxJQUFNOEssTUFBTSxHQUFHLGtCQUFNLFVBQUNDLEdBQUQsRUFBTS9LLEVBQU4sRUFBYTtBQUN2QyxNQUFNOEosRUFBRSxHQUFHLG1DQUEwQmlCLEdBQTFCLEVBQStCLEVBQS9CLEVBQW1DO0FBQUVDLGFBQVM7QUFBWCxHQUFuQyxDQUFYO0FBRUFsQixJQUFFLENBQUNTLGdCQUFILENBQW9CLE1BQXBCLEVBQTRCO0FBQUEsV0FBTVYsWUFBWSxDQUFDN0osRUFBRCxFQUFLOEosRUFBTCxDQUFsQjtBQUFBLEdBQTVCO0FBQ0EsU0FBTzlKLEVBQVA7QUFDRCxDQUxxQixDQUFmOzs7Ozs7Ozs7Ozs7QUMxRFAsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoiQG5vdGFidWcvZ3VuLXJlY2VpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicG0yXCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ1dWlkXCIpLCByZXF1aXJlKFwid3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAbm90YWJ1Zy9ndW4tcmVjZWl2ZXJcIiwgW1wicG0yXCIsIFwicmFtZGFcIiwgXCJ1dWlkXCIsIFwid3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQG5vdGFidWcvZ3VuLXJlY2VpdmVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicG0yXCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ1dWlkXCIpLCByZXF1aXJlKFwid3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBub3RhYnVnL2d1bi1yZWNlaXZlclwiXSA9IGZhY3Rvcnkocm9vdFtcInBtMlwiXSwgcm9vdFtcInJhbWRhXCJdLCByb290W1widXVpZFwiXSwgcm9vdFtcIndzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BtMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdXVpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cblxudmFyIEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnQodHlwZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIHJldHVybiBFdmVudDtcclxufSgpKTtcclxudmFyIEVycm9yRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRXJyb3JFdmVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEVycm9yRXZlbnQoZXJyb3IsIHRhcmdldCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdlcnJvcicsIHRhcmdldCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICBfdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBFcnJvckV2ZW50O1xyXG59KEV2ZW50KSk7XHJcbnZhciBDbG9zZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENsb3NlRXZlbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDbG9zZUV2ZW50KGNvZGUsIHJlYXNvbiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gMTAwMDsgfVxyXG4gICAgICAgIGlmIChyZWFzb24gPT09IHZvaWQgMCkgeyByZWFzb24gPSAnJzsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdjbG9zZScsIHRhcmdldCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy53YXNDbGVhbiA9IHRydWU7XHJcbiAgICAgICAgX3RoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgX3RoaXMucmVhc29uID0gcmVhc29uO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDbG9zZUV2ZW50O1xyXG59KEV2ZW50KSk7XG5cbi8qIVxyXG4gKiBSZWNvbm5lY3RpbmcgV2ViU29ja2V0XHJcbiAqIGJ5IFBlZHJvIExhZGFyaWEgPHBlZHJvLmxhZGFyaWFAZ21haWwuY29tPlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGxhZGFyaWEvcmVjb25uZWN0aW5nLXdlYnNvY2tldFxyXG4gKiBMaWNlbnNlIE1JVFxyXG4gKi9cclxudmFyIGdldEdsb2JhbFdlYlNvY2tldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gV2ViU29ja2V0O1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIGdpdmVuIGFyZ3VtZW50IGxvb2tzIGxpa2UgYSBXZWJTb2NrZXQgY2xhc3NcclxuICovXHJcbnZhciBpc1dlYlNvY2tldCA9IGZ1bmN0aW9uICh3KSB7IHJldHVybiB0eXBlb2YgdyA9PT0gJ2Z1bmN0aW9uJyAmJiB3LkNMT1NJTkcgPT09IDI7IH07XHJcbnZhciBERUZBVUxUID0ge1xyXG4gICAgbWF4UmVjb25uZWN0aW9uRGVsYXk6IDEwMDAwLFxyXG4gICAgbWluUmVjb25uZWN0aW9uRGVsYXk6IDEwMDAgKyBNYXRoLnJhbmRvbSgpICogNDAwMCxcclxuICAgIG1pblVwdGltZTogNTAwMCxcclxuICAgIHJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvcjogMS4zLFxyXG4gICAgY29ubmVjdGlvblRpbWVvdXQ6IDQwMDAsXHJcbiAgICBtYXhSZXRyaWVzOiBJbmZpbml0eSxcclxuICAgIGRlYnVnOiBmYWxzZSxcclxufTtcclxudmFyIFJlY29ubmVjdGluZ1dlYlNvY2tldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlY29ubmVjdGluZ1dlYlNvY2tldCh1cmwsIHByb3RvY29scywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBbXSxcclxuICAgICAgICAgICAgbWVzc2FnZTogW10sXHJcbiAgICAgICAgICAgIG9wZW46IFtdLFxyXG4gICAgICAgICAgICBjbG9zZTogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50ID0gLTE7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkUmVjb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2JpbmFyeVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlUXVldWUgPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24ncyByZWFkeVN0YXRlIGNoYW5nZXMgdG8gQ0xPU0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGFuIGVycm9yIG9jY3Vyc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiBhIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uJ3MgcmVhZHlTdGF0ZSBjaGFuZ2VzIHRvIE9QRU47XHJcbiAgICAgICAgICogdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGUgY29ubmVjdGlvbiBpcyByZWFkeSB0byBzZW5kIGFuZCByZWNlaXZlIGRhdGFcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9oYW5kbGVPcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1Zygnb3BlbiBldmVudCcpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5fb3B0aW9ucy5taW5VcHRpbWUsIG1pblVwdGltZSA9IF9hID09PSB2b2lkIDAgPyBERUZBVUxULm1pblVwdGltZSA6IF9hO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuX2Nvbm5lY3RUaW1lb3V0KTtcclxuICAgICAgICAgICAgX3RoaXMuX3VwdGltZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9hY2NlcHRPcGVuKCk7IH0sIG1pblVwdGltZSk7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgX3RoaXMuX3dzLmJpbmFyeVR5cGUgPSBfdGhpcy5fYmluYXJ5VHlwZTtcclxuICAgICAgICAgICAgLy8gc2VuZCBlbnF1ZXVlZCBtZXNzYWdlcyAobWVzc2FnZXMgc2VudCBiZWZvcmUgd2Vic29ja2V0IG9wZW4gZXZlbnQpXHJcbiAgICAgICAgICAgIF90aGlzLl9tZXNzYWdlUXVldWUuZm9yRWFjaChmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMuX3dzLnNlbmQobWVzc2FnZSk7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5fbWVzc2FnZVF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbm9wZW4pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9ub3BlbihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5vcGVuLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnbWVzc2FnZSBldmVudCcpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbm1lc3NhZ2UoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMubWVzc2FnZS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdlcnJvciBldmVudCcsIGV2ZW50Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBfdGhpcy5fZGlzY29ubmVjdCh1bmRlZmluZWQsIGV2ZW50Lm1lc3NhZ2UgPT09ICdUSU1FT1VUJyA/ICd0aW1lb3V0JyA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbmVycm9yKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2V4ZWMgZXJyb3IgbGlzdGVuZXJzJyk7XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMuZXJyb3IuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnY2xvc2UgZXZlbnQnKTtcclxuICAgICAgICAgICAgX3RoaXMuX2NsZWFyVGltZW91dHMoKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLl9zaG91bGRSZWNvbm5lY3QpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uY2xvc2UoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMuY2xvc2UuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wcm90b2NvbHMgPSBwcm90b2NvbHM7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJDT05ORUNUSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIk9QRU5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiQ0xPU0lOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJDTE9TRURcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIkNPTk5FQ1RJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0LkNPTk5FQ1RJTkc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJPUEVOXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5PUEVOO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiQ0xPU0lOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ0xPU0lORztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIkNMT1NFRFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ0xPU0VEO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiYmluYXJ5VHlwZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLmJpbmFyeVR5cGUgOiB0aGlzLl9iaW5hcnlUeXBlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmluYXJ5VHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dzLmJpbmFyeVR5cGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwicmV0cnlDb3VudFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9yIGNvbm5lY3Rpb24gcmV0cmllc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5fcmV0cnlDb3VudCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJidWZmZXJlZEFtb3VudFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG51bWJlciBvZiBieXRlcyBvZiBkYXRhIHRoYXQgaGF2ZSBiZWVuIHF1ZXVlZCB1c2luZyBjYWxscyB0byBzZW5kKCkgYnV0IG5vdCB5ZXRcclxuICAgICAgICAgKiB0cmFuc21pdHRlZCB0byB0aGUgbmV0d29yay4gVGhpcyB2YWx1ZSByZXNldHMgdG8gemVybyBvbmNlIGFsbCBxdWV1ZWQgZGF0YSBoYXMgYmVlbiBzZW50LlxyXG4gICAgICAgICAqIFRoaXMgdmFsdWUgZG9lcyBub3QgcmVzZXQgdG8gemVybyB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZDsgaWYgeW91IGtlZXAgY2FsbGluZyBzZW5kKCksXHJcbiAgICAgICAgICogdGhpcyB3aWxsIGNvbnRpbnVlIHRvIGNsaW1iLiBSZWFkIG9ubHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5fbWVzc2FnZVF1ZXVlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICs9IG1lc3NhZ2UubGVuZ3RoOyAvLyBub3QgYnl0ZSBzaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYyArPSBtZXNzYWdlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2MgKz0gbWVzc2FnZS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBieXRlcyArICh0aGlzLl93cyA/IHRoaXMuX3dzLmJ1ZmZlcmVkQW1vdW50IDogMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJleHRlbnNpb25zXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZXh0ZW5zaW9ucyBzZWxlY3RlZCBieSB0aGUgc2VydmVyLiBUaGlzIGlzIGN1cnJlbnRseSBvbmx5IHRoZSBlbXB0eSBzdHJpbmcgb3IgYSBsaXN0IG9mXHJcbiAgICAgICAgICogZXh0ZW5zaW9ucyBhcyBuZWdvdGlhdGVkIGJ5IHRoZSBjb25uZWN0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLmV4dGVuc2lvbnMgOiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInByb3RvY29sXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSBuYW1lIG9mIHRoZSBzdWItcHJvdG9jb2wgdGhlIHNlcnZlciBzZWxlY3RlZDtcclxuICAgICAgICAgKiB0aGlzIHdpbGwgYmUgb25lIG9mIHRoZSBzdHJpbmdzIHNwZWNpZmllZCBpbiB0aGUgcHJvdG9jb2xzIHBhcmFtZXRlciB3aGVuIGNyZWF0aW5nIHRoZVxyXG4gICAgICAgICAqIFdlYlNvY2tldCBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MucHJvdG9jb2wgOiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInJlYWR5U3RhdGVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjb25uZWN0aW9uOyB0aGlzIGlzIG9uZSBvZiB0aGUgUmVhZHkgc3RhdGUgY29uc3RhbnRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLnJlYWR5U3RhdGUgOiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ09OTkVDVElORztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInVybFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIFVSTCBhcyByZXNvbHZlZCBieSB0aGUgY29uc3RydWN0b3JcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MudXJsIDogJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24gb3IgY29ubmVjdGlvbiBhdHRlbXB0LCBpZiBhbnkuIElmIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHlcclxuICAgICAqIENMT1NFRCwgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gMTAwMDsgfVxyXG4gICAgICAgIHRoaXMuX2Nsb3NlQ2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zaG91bGRSZWNvbm5lY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnY2xvc2UgZW5xdWV1ZWQ6IG5vIHdzIGluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IHRoaXMuQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdjbG9zZTogYWxyZWFkeSBjbG9zZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93cy5jbG9zZShjb2RlLCByZWFzb24pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbiBvciBjb25uZWN0aW9uIGF0dGVtcHQgYW5kIGNvbm5lY3RzIGFnYWluLlxyXG4gICAgICogUmVzZXRzIHJldHJ5IGNvdW50ZXI7XHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xyXG4gICAgICAgIHRoaXMuX3Nob3VsZFJlY29ubmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50ID0gLTE7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cyB8fCB0aGlzLl93cy5yZWFkeVN0YXRlID09PSB0aGlzLkNMT1NFRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNjb25uZWN0KGNvZGUsIHJlYXNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnF1ZXVlIHNwZWNpZmllZCBkYXRhIHRvIGJlIHRyYW5zbWl0dGVkIHRvIHRoZSBzZXJ2ZXIgb3ZlciB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5fd3MgJiYgdGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gdGhpcy5PUEVOKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdzZW5kJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dzLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnZW5xdWV1ZScsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlUXVldWUucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgdHlwZVxyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5maWx0ZXIoZnVuY3Rpb24gKGwpIHsgcmV0dXJuIGwgIT09IGxpc3RlbmVyOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIC8vIG5vdCB1c2luZyBzcHJlYWQgYmVjYXVzZSBjb21waWxlZCB2ZXJzaW9uIHVzZXMgU3ltYm9sc1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydSV1M+J10uY29uY2F0KGFyZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZ2V0TmV4dERlbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuX29wdGlvbnMsIF9iID0gX2EucmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yLCByZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVC5yZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IgOiBfYiwgX2MgPSBfYS5taW5SZWNvbm5lY3Rpb25EZWxheSwgbWluUmVjb25uZWN0aW9uRGVsYXkgPSBfYyA9PT0gdm9pZCAwID8gREVGQVVMVC5taW5SZWNvbm5lY3Rpb25EZWxheSA6IF9jLCBfZCA9IF9hLm1heFJlY29ubmVjdGlvbkRlbGF5LCBtYXhSZWNvbm5lY3Rpb25EZWxheSA9IF9kID09PSB2b2lkIDAgPyBERUZBVUxULm1heFJlY29ubmVjdGlvbkRlbGF5IDogX2Q7XHJcbiAgICAgICAgdmFyIGRlbGF5ID0gbWluUmVjb25uZWN0aW9uRGVsYXk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JldHJ5Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGRlbGF5ID1cclxuICAgICAgICAgICAgICAgIG1pblJlY29ubmVjdGlvbkRlbGF5ICogTWF0aC5wb3cocmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yLCB0aGlzLl9yZXRyeUNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIGlmIChkZWxheSA+IG1heFJlY29ubmVjdGlvbkRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBkZWxheSA9IG1heFJlY29ubmVjdGlvbkRlbGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RlYnVnKCduZXh0IGRlbGF5JywgZGVsYXkpO1xyXG4gICAgICAgIHJldHVybiBkZWxheTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl93YWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgX3RoaXMuX2dldE5leHREZWxheSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9nZXROZXh0VXJsID0gZnVuY3Rpb24gKHVybFByb3ZpZGVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmxQcm92aWRlciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmxQcm92aWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsUHJvdmlkZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHVybFByb3ZpZGVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1cmwudGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBVUkwnKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RMb2NrIHx8ICF0aGlzLl9zaG91bGRSZWNvbm5lY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0TG9jayA9IHRydWU7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fb3B0aW9ucywgX2IgPSBfYS5tYXhSZXRyaWVzLCBtYXhSZXRyaWVzID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFQubWF4UmV0cmllcyA6IF9iLCBfYyA9IF9hLmNvbm5lY3Rpb25UaW1lb3V0LCBjb25uZWN0aW9uVGltZW91dCA9IF9jID09PSB2b2lkIDAgPyBERUZBVUxULmNvbm5lY3Rpb25UaW1lb3V0IDogX2MsIF9kID0gX2EuV2ViU29ja2V0LCBXZWJTb2NrZXQgPSBfZCA9PT0gdm9pZCAwID8gZ2V0R2xvYmFsV2ViU29ja2V0KCkgOiBfZDtcclxuICAgICAgICBpZiAodGhpcy5fcmV0cnlDb3VudCA+PSBtYXhSZXRyaWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdtYXggcmV0cmllcyByZWFjaGVkJywgdGhpcy5fcmV0cnlDb3VudCwgJz49JywgbWF4UmV0cmllcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdjb25uZWN0JywgdGhpcy5fcmV0cnlDb3VudCk7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgaWYgKCFpc1dlYlNvY2tldChXZWJTb2NrZXQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdObyB2YWxpZCBXZWJTb2NrZXQgY2xhc3MgcHJvdmlkZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2FpdCgpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9nZXROZXh0VXJsKF90aGlzLl91cmwpOyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgICAgIC8vIGNsb3NlIGNvdWxkIGJlIGNhbGxlZCBiZWZvcmUgY3JlYXRpbmcgdGhlIHdzXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fY2xvc2VDYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnY29ubmVjdCcsIHsgdXJsOiB1cmwsIHByb3RvY29sczogX3RoaXMuX3Byb3RvY29scyB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX3dzID0gX3RoaXMuX3Byb3RvY29sc1xyXG4gICAgICAgICAgICAgICAgPyBuZXcgV2ViU29ja2V0KHVybCwgX3RoaXMuX3Byb3RvY29scylcclxuICAgICAgICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIF90aGlzLl93cy5iaW5hcnlUeXBlID0gX3RoaXMuX2JpbmFyeVR5cGU7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5fYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb25uZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2hhbmRsZVRpbWVvdXQoKTsgfSwgY29ubmVjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2hhbmRsZVRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ3RpbWVvdXQgZXZlbnQnKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihuZXcgRXJyb3JFdmVudChFcnJvcignVElNRU9VVCcpLCB0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcclxuICAgICAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7IGNvZGUgPSAxMDAwOyB9XHJcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl93cy5jbG9zZShjb2RlLCByZWFzb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVDbG9zZShuZXcgQ2xvc2VFdmVudChjb2RlLCByZWFzb24sIHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9hY2NlcHRPcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdhY2NlcHQgb3BlbicpO1xyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQgPSAwO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2NhbGxFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICgnaGFuZGxlRXZlbnQnIGluIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsaXN0ZW5lcihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX3JlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ3JlbW92ZUxpc3RlbmVycycpO1xyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLl9oYW5kbGVPcGVuKTtcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX2hhbmRsZUNsb3NlKTtcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5faGFuZGxlTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5faGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2FkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ2FkZExpc3RlbmVycycpO1xyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLl9oYW5kbGVPcGVuKTtcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX2hhbmRsZUNsb3NlKTtcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5faGFuZGxlTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5faGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2NsZWFyVGltZW91dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Nvbm5lY3RUaW1lb3V0KTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdXB0aW1lVGltZW91dCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldDtcclxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjb25uZWN0aW5nV2ViU29ja2V0O1xuIiwiLyogZ2xvYmFscyBQcm9taXNlICovXG5pbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBjb25zdCBnZXRQYXRoID0gKGtleUxpc3QsIG9wdHMgPSB7fSkgPT4ge1xuICAgIGxldCB0aGlzQ2hhaW47XG4gICAgY29uc3Qgb24gPSBmbiA9PiB7XG4gICAgICBsZXQgdmFsdWUsIGdldFZhbHVlO1xuICAgICAgbGV0IGhhc1Jlc3BvbnNlID0gZmFsc2U7XG4gICAgICBjb25zdCBib3VuZCA9IGZuLmJpbmQodGhpc0NoYWluKTtcbiAgICAgIGNvbnN0IHJlY2VpdmVkID0gdmFsID0+IChoYXNSZXNwb25zZSA9IHRydWUpICYmIGJvdW5kKCh2YWx1ZSA9IHZhbCkpO1xuICAgICAgY29uc3QgcmVxdWVzdGVkID0ge307XG4gICAgICBjb25zdCByZXF1ZXN0cyA9IHt9O1xuICAgICAgY29uc3QgZ3JhcGggPSB7fTtcblxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGRiLmNvbm5lY3RlZChtc2cgPT4ge1xuICAgICAgICBjb25zdCB7IGpzb24gfSA9IG1zZztcbiAgICAgICAgY29uc3QgYXQgPSBSLnByb3AoXCJAXCIsIGpzb24pO1xuICAgICAgICBjb25zdCBhdFNvdWwgPSByZXF1ZXN0c1thdF07XG4gICAgICAgIGNvbnN0IHNvdWxzID0gUi5rZXlzKFIucHJvcChcInB1dFwiLCBqc29uKSk7XG5cbiAgICAgICAgaWYgKGF0U291bCkgc291bHMucHVzaChhdFNvdWwpO1xuICAgICAgICBpZiAoIXNvdWxzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBSLnVuaXEoc291bHMpLmZvckVhY2goc291bCA9PiB7XG4gICAgICAgICAgaWYgKCFyZXF1ZXN0ZWRbc291bF0pIHJldHVybjtcbiAgICAgICAgICBjb25zdCBub2RlID0gUi5wYXRoKFtcInB1dFwiLCBzb3VsXSwganNvbik7XG5cbiAgICAgICAgICBpZiAoIW5vZGUgJiYgIWhhc1Jlc3BvbnNlKSByZWNlaXZlZCgpO1xuICAgICAgICAgIGlmIChub2RlKSBncmFwaFtzb3VsXSA9IFIubWVyZ2VEZWVwTGVmdChub2RlLCBncmFwaFtzb3VsXSB8fCB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBnZXRWYWx1ZShrZXlMaXN0KTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlICE9PSB2YWx1ZSkgcmVjZWl2ZWQobmV4dFZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBnZXROb2RlID0gc291bCA9PiB7XG4gICAgICAgIGlmIChyZXF1ZXN0ZWRbc291bF0pIHJldHVybiBncmFwaFtzb3VsXTtcbiAgICAgICAgY29uc3QgaWQgPSB1dWlkLnY0KCk7XG5cbiAgICAgICAgcmVxdWVzdGVkW3NvdWxdID0gaWQ7XG4gICAgICAgIHJlcXVlc3RzW2lkXSA9IHNvdWw7XG4gICAgICAgIGNvbm5lY3Rpb24ucmVjZWl2ZSh7XG4gICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgICBqc29uOiB7IFwiI1wiOiBpZCwgZ2V0OiB7IFwiI1wiOiBzb3VsIH0gfSxcbiAgICAgICAgICBza2lwVmFsaWRhdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyYXBoW3NvdWxdO1xuICAgICAgfTtcblxuICAgICAgZ2V0VmFsdWUgPSBrbCA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBrbFtrbC5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoa2wubGVuZ3RoID09PSAxKSByZXR1cm4gZ2V0Tm9kZShsYXN0S2V5KTtcbiAgICAgICAgY29uc3QgcGFyZW50VmFsdWUgPSBnZXRWYWx1ZShrbC5zbGljZSgwLCBrbC5sZW5ndGggLSAxKSk7XG5cbiAgICAgICAgaWYgKCFwYXJlbnRWYWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBSLnByb3AobGFzdEtleSwgcGFyZW50VmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZVtcIiNcIl0pIHJldHVybiBnZXROb2RlKHZhbHVlW1wiI1wiXSk7XG4gICAgICAgIGlmIChrbCA9PT0ga2V5TGlzdCkgcmVjZWl2ZWQodmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9O1xuXG4gICAgICBjb25uZWN0aW9uLnJlY2VpdmUoeyBqc29uOiB7IGxlZWNoOiB0cnVlIH0gfSk7XG4gICAgICBnZXRWYWx1ZShrZXlMaXN0KTtcbiAgICAgIHJldHVybiAoKSA9PiBkYi5kaXNjb25uZWN0ZWQoY29ubmVjdGlvbik7XG4gICAgfTtcblxuICAgIGNvbnN0IHRoZW4gPSAoZm4gPSBSLmlkZW50aXR5KSA9PlxuICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb24odmFsID0+IHtcbiAgICAgICAgICByZXNvbHZlKHZhbCk7XG4gICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS50aGVuKGZuKTtcblxuICAgIGNvbnN0IG9uY2UgPSBmbiA9PiB0aGVuKGZuLmJpbmQodGhpc0NoYWluKSkgJiYgdGhpc0NoYWluO1xuICAgIGNvbnN0IGdldCA9IChrZXksIG9wdHMgPSB7fSkgPT4gZ2V0UGF0aChbLi4ua2V5TGlzdCwga2V5XSwgb3B0cyk7XG5cbiAgICB0aGlzQ2hhaW4gPSB7IGdldCwgb24sIHRoZW4sIG9uY2UgfTtcbiAgICByZXR1cm4gdGhpc0NoYWluO1xuICB9O1xuXG4gIGNvbnN0IGdldERpZmYgPSBwdXQgPT4ge1xuICAgIGNvbnN0IHNvdWxzID0gUi5rZXlzKHB1dCk7XG4gICAgY29uc3QgZGlmZnMgPSB7fTtcblxuICAgIGlmICghc291bHMubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICBzb3Vscy5tYXAoc291bCA9PlxuICAgICAgICBkYi5nZXQoc291bCwgeyBub1JlbGF5OiB0cnVlIH0pLnRoZW4oZXhpc3RpbmcgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpZmYgPSBkYi5kaWZmTm9kZShleGlzdGluZywgcHV0W3NvdWxdKTtcblxuICAgICAgICAgIGlmIChkaWZmKSBkaWZmc1tzb3VsXSA9IGRpZmY7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKS50aGVuKCgpID0+IHtcbiAgICAgIGlmICghUi5rZXlzKGRpZmZzKS5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIGRpZmZzO1xuICAgIH0pO1xuICB9O1xuXG4gIGRiLmdldCA9IChrZXksIG9wdHMgPSB7fSkgPT4gZ2V0UGF0aChba2V5XSwgb3B0cyk7XG4gIGRiLmdldERpZmYgPSBnZXREaWZmO1xuICByZXR1cm4gZGI7XG59O1xuIiwiaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCB1dWlkIGZyb20gXCJ1dWlkXCI7XG5cbmNvbnN0IE1TR19UT1BJQyA9IFwiZ3VuOm1zZ1wiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRiID0+IHtcbiAgY29uc3QgcG0yID0gcmVxdWlyZShcInBtMlwiKTtcbiAgY29uc3QgaWQgPSB1dWlkLnY0KCk7XG5cbiAgcG0yLmxhdW5jaEJ1cygoZXJyLCBidXMpID0+IHtcbiAgICBpZiAoZXJyKSBjb25zb2xlLmVycihlcnIpO1xuICAgIGJ1cy5vbihcInByb2Nlc3M6bXNnXCIsIHBhY2tldCA9PiB7XG4gICAgICBpZiAocGFja2V0LnJhdy5tc2cuZnJvbUNsdXN0ZXIgPT09IGlkKSByZXR1cm47XG4gICAgICBpZiAocGFja2V0LnJhdy50b3BpYyA9PT0gTVNHX1RPUElDKSB7XG4gICAgICAgIGRiLnByb2Nlc3NJbihSLmFzc29jKFwiZGJcIiwgZGIsIHBhY2tldC5yYXcubXNnKSkuY2F0Y2goZXJyID0+XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBJU1RPTCBjbHVzdGVyIGVyclwiLCBlcnIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCB7IGZyb21DbHVzdGVyLCBub1JlbGF5IH0gPSBtc2c7XG5cbiAgICBpZiAobm9SZWxheSB8fCBmcm9tQ2x1c3RlcikgcmV0dXJuIG1zZztcbiAgICBpZiAocHJvY2Vzcy5zZW5kKSB7XG4gICAgICBwcm9jZXNzLnNlbmQoe1xuICAgICAgICB0b3BpYzogTVNHX1RPUElDLFxuICAgICAgICBtc2c6IFIubWVyZ2VMZWZ0KHsgZnJvbUNsdXN0ZXI6IGlkLCBza2lwVmFsaWRhdGlvbjogdHJ1ZSB9LCBtc2cpXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsgYXNzb2NQYXRoLCBwYXRoLCB3aXRob3V0IH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgZGlmZk5vZGUgfSBmcm9tIFwiLi9kaWZmXCI7XG5cbmZ1bmN0aW9uIHByb2Nlc3NRdWV1ZSgpIHtcbiAgbGV0IGZucyA9IFtdO1xuICBjb25zdCBxdWV1ZSA9IGZuID0+IGZucy5wdXNoKGZuKTtcbiAgY29uc3QgZGVxdWV1ZSA9IGZuID0+IChmbnMgPSB3aXRob3V0KFtmbl0sIGZucykpO1xuXG4gIGZ1bmN0aW9uIGV4ZWN1dGUobXNnKSB7XG4gICAgY29uc3QgcmVtYWluaW5nRm5zID0gZm5zLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGV4ZWN1dGVOZXh0ID0gbXNnID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVtYWluaW5nRm5zLnBvcCgpO1xuXG4gICAgICAgIGlmIChtc2cgJiYgZm4pIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm4obXNnKSkudGhlbihleGVjdXRlTmV4dCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobXNnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gZXhlY3V0ZU5leHQobXNnKTtcbiAgfVxuXG4gIHJldHVybiBbcXVldWUsIGV4ZWN1dGUsIGRlcXVldWVdO1xufVxuXG5mdW5jdGlvbiBwaXN0b2xDb25uZWN0aW9uKHsgZGIsIHNlbmQ6IHNlbmRGbiB9KSB7XG4gIGxldCBjb25uZWN0aW9uO1xuICBsZXQgc3RhdGUgPSB7fTtcbiAgbGV0IGhhc1JlcG9ydGVkRXJyb3IgPSBmYWxzZTtcbiAgY29uc3QgZ2V0ID0gcCA9PiBwYXRoKHAsIHN0YXRlKTtcbiAgY29uc3Qgc2V0ID0gKHAsIHYpID0+IChzdGF0ZSA9IGFzc29jUGF0aChwLCB2LCBzdGF0ZSkpOyAvLyAmJiBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gIGNvbnN0IHsgbXNnSWQgfSA9IGRiO1xuICBjb25zdCBzZW5kID0gbXNnID0+XG4gICAgZGJcbiAgICAgIC5wcm9jZXNzT3V0KHsgLi4ubXNnLCB0bzogY29ubmVjdGlvbiB9KVxuICAgICAgLnRoZW4ociA9PiByICYmIHNlbmRGbihyKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBpZiAoIWhhc1JlcG9ydGVkRXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJQSVNUT0wgc2VuZCBlcnJcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1zZywgbnVsbCwgMiksXG4gICAgICAgICAgICBtc2cuanNvbi5wdXQsXG4gICAgICAgICAgICBlcnJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGhhc1JlcG9ydGVkRXJyb3IgPSB0cnVlO1xuICAgICAgfSk7XG4gIGNvbnN0IHJlY2VpdmUgPSAoeyBqc29uLCByYXcsIC4uLm9wdHMgfSkgPT4ge1xuICAgIHJldHVybiBkYlxuICAgICAgLnByb2Nlc3NJbih7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIGRiLFxuICAgICAgICBqc29uOiB7IC4uLmpzb24sIFwiI1wiOiBqc29uW1wiI1wiXSB8fCBtc2dJZCgpIH0sXG4gICAgICAgIGZyb206IGNvbm5lY3Rpb25cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJQSVNUT0wgcmVjZWl2ZSBlcnJcIiwgZXJyLCByYXcgfHwganNvbikpO1xuICB9O1xuXG4gIGNvbm5lY3Rpb24gPSB7IHNlbmQsIHJlY2VpdmUsIGdldCwgc2V0LCBtc2dJZCB9O1xuICByZXR1cm4gY29ubmVjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZWl2ZXIoKSB7XG4gIGxldCBwZWVyO1xuICBjb25zdCBjb25uZWN0aW9ucyA9IFtdO1xuICBjb25zdCBbb25JbiwgcHJvY2Vzc0luXSA9IHByb2Nlc3NRdWV1ZSgpO1xuICBjb25zdCBbb25PdXQsIHByb2Nlc3NPdXRdID0gcHJvY2Vzc1F1ZXVlKCk7XG4gIGNvbnN0IG1zZ0lkID0gKCkgPT4gdXVpZC52NCgpO1xuICBjb25zdCBzdHJpbmdpZnkgPSBKU09OLnN0cmluZ2lmeTtcblxuICBmdW5jdGlvbiBjb25uZWN0ZWQoc2VuZCkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBwaXN0b2xDb25uZWN0aW9uKHsgZGI6IHBlZXIsIHNlbmQgfSk7XG5cbiAgICBjb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pO1xuICAgIHJldHVybiBjb25uZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pIHtcbiAgICBjb25zdCBjb25uZWN0aW9uSWR4ID0gY29ubmVjdGlvbnMuaW5kZXhPZihjb25uZWN0aW9uKTtcblxuICAgIGlmIChjb25uZWN0aW9uSWR4ICE9PSAtMSkgY29ubmVjdGlvbnMuc3BsaWNlKGNvbm5lY3Rpb25JZHgsIDEpO1xuICB9XG5cbiAgcGVlciA9IHtcbiAgICBjb25uZWN0aW9ucyxcbiAgICBjb25uZWN0ZWQsXG4gICAgZGlzY29ubmVjdGVkLFxuICAgIG1zZ0lkLFxuICAgIG9uSW4sXG4gICAgb25PdXQsXG4gICAgcHJvY2Vzc0luLFxuICAgIHByb2Nlc3NPdXQsXG4gICAgc3RyaW5naWZ5LFxuICAgIGRpZmZOb2RlXG4gIH07XG4gIHJldHVybiBwZWVyO1xufVxuIiwiaW1wb3J0IHsgcGF0aCwga2V5cyB9IGZyb20gXCJyYW1kYVwiO1xuY29uc3QgTUFYX01TR19JRF9DQUNIRSA9IDUwMDAwO1xuY29uc3QgR0FSQkFHRV9JTlRFUlZBTCA9IDYwMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGNvbnN0IHJlY2VpdmVkSWRzID0ge307XG5cbiAgZnVuY3Rpb24gY29sbGVjdEdhcmJhZ2UoKSB7XG4gICAgbGV0IGlkcyA9IGtleXMocmVjZWl2ZWRJZHMpLnJldmVyc2UoKTtcblxuICAgIHdoaWxlIChpZHMubGVuZ3RoID4gTUFYX01TR19JRF9DQUNIRSkge1xuICAgICAgZGVsZXRlIHJlY2VpdmVkSWRzW2lkcy5wb3AoKV07XG4gICAgfVxuICB9XG5cbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGNvbnN0IGlkID0gcGF0aChbXCJqc29uXCIsIFwiI1wiXSwgbXNnKTtcblxuICAgIGlmICghaWQgfHwgcmVjZWl2ZWRJZHNbaWRdKSByZXR1cm4gbnVsbDtcbiAgICByZWNlaXZlZElkc1tpZF0gPSB0cnVlO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIHNldEludGVydmFsKGNvbGxlY3RHYXJiYWdlLCBHQVJCQUdFX0lOVEVSVkFMKTtcblxuICByZXR1cm4gZGI7XG59O1xuIiwiaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcblxuY29uc3QgR1JBQ0UgPSAxMCAqIDYwICogMTAwMDsgLy8gSG93IGZhciBhaGVhZCBjbG9jayBjYW4gYmUsIHVubGlrZSBndW4gd2UganVzdCBkaXNjYXJkIG5vdCBkZWZlclxuY29uc3QgTGV4aWNhbCA9IEpTT04uc3RyaW5naWZ5OyAvLyBUaGlzIGlzIHdoYXQgR3VuIHVzZXNcblxuZXhwb3J0IGNvbnN0IGRpZmZOb2RlID0gKGV4aXN0aW5nLCB1cGRhdGVkLCBtYWNoaW5lU3RhdGUgPSBudWxsKSA9PiB7XG4gIGxldCBtYXhTdGF0ZSA9IChtYWNoaW5lU3RhdGUgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkpICsgR1JBQ0U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgY29uc3QgZXhpc3RpbmdTdGF0ZSA9IFIucGF0aChbXCJfXCIsIFwiPlwiXSwgZXhpc3RpbmcpIHx8IHt9O1xuICBjb25zdCB1cGRhdGVkU3RhdGUgPSBSLnBhdGgoW1wiX1wiLCBcIj5cIl0sIHVwZGF0ZWQpIHx8IHt9O1xuXG4gIHJldHVybiBSLmNvbXBvc2UoXG4gICAgdmFscyA9PiB7XG4gICAgICBjb25zdCBrZXlzID0gUi5rZXlzKHZhbHMpO1xuXG4gICAgICBpZiAoIWtleXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBSLmFzc29jKFxuICAgICAgICBcIl9cIixcbiAgICAgICAgUi5hc3NvYyhcIj5cIiwgUi5waWNrKGtleXMsIHVwZGF0ZWRTdGF0ZSksIHVwZGF0ZWQuXyksXG4gICAgICAgIHZhbHNcbiAgICAgICk7XG4gICAgfSxcbiAgICBSLnJlZHVjZSgodXBkYXRlcywga2V5KSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ0tleVN0YXRlID0gZXhpc3RpbmdTdGF0ZVtrZXldO1xuICAgICAgY29uc3QgdXBkYXRlZEtleVN0YXRlID0gdXBkYXRlZFN0YXRlW2tleV07XG5cbiAgICAgIGlmICh1cGRhdGVkS2V5U3RhdGUgPiBtYXhTdGF0ZSB8fCAhdXBkYXRlZEtleVN0YXRlKSByZXR1cm4gdXBkYXRlcztcbiAgICAgIGlmIChleGlzdGluZ0tleVN0YXRlICYmIGV4aXN0aW5nS2V5U3RhdGUgPj0gdXBkYXRlZEtleVN0YXRlKVxuICAgICAgICByZXR1cm4gdXBkYXRlcztcblxuICAgICAgaWYgKGV4aXN0aW5nS2V5U3RhdGUgPT09IHVwZGF0ZWRLZXlTdGF0ZSkge1xuICAgICAgICBjb25zdCBleGlzdGluZ1ZhbCA9IFIucHJvcChrZXksIGV4aXN0aW5nKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFZhbCA9IFIucHJvcChrZXksIHVwZGF0ZWQpO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgYmFzZWQgb24gR3VuJ3MgbG9naWNcbiAgICAgICAgaWYgKExleGljYWwodXBkYXRlZFZhbCkgPD0gTGV4aWNhbChleGlzdGluZ1ZhbCkpIHJldHVybiB1cGRhdGVkO1xuICAgICAgfVxuICAgICAgdXBkYXRlc1trZXldID0gdXBkYXRlZFtrZXldO1xuICAgICAgcmV0dXJuIHVwZGF0ZXM7XG4gICAgfSwge30pLFxuICAgIFIua2V5c1xuICApKHVwZGF0ZWRTdGF0ZSk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGFpbkludGVyZmFjZSB9IGZyb20gXCIuL2NoYWluXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlY2VpdmVyIH0gZnJvbSBcIi4vY29yZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWR1cGxpY2F0ZU1lc3NhZ2VzIH0gZnJvbSBcIi4vZGVkdXBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsb3dMZWVjaCB9IGZyb20gXCIuL2xlZWNoXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlbGF5TWVzc2FnZXMgfSBmcm9tIFwiLi9yZWxheVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbHVzdGVyIH0gZnJvbSBcIi4vY2x1c3RlclwiO1xuaW1wb3J0ICogYXMgd2Vic29ja2V0IGZyb20gXCIuL3dlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgd2Vic29ja2V0VHJhbnNwb3J0ID0gd2Vic29ja2V0O1xuIiwiaW1wb3J0IHsgcGF0aCwga2V5cyB9IGZyb20gXCJyYW1kYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBpZiAoIW1zZy5mcm9tIHx8ICFtc2cuZnJvbS5zZXQpIHJldHVybiBtc2c7XG4gICAgaWYgKHBhdGgoW1wianNvblwiLCBcImxlZWNoXCJdLCBtc2cpKSB7XG4gICAgICBtc2cuZnJvbS5zZXQoW1wiaXNMZWVjaGluZ1wiXSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBhc2tpbmdGb3IgPSBwYXRoKFtcImpzb25cIiwgXCJnZXRcIiwgXCIjXCJdLCBtc2cpO1xuXG4gICAgW2Fza2luZ0ZvciwgLi4ua2V5cyhwYXRoKFtcImpzb25cIiwgXCJwdXRcIl0sIG1zZykpXS5mb3JFYWNoKFxuICAgICAgc291bCA9PiBzb3VsICYmIG1zZy5mcm9tLnNldChbXCJoYXNBc2tlZEZvclwiLCBzb3VsXSwgdHJ1ZSlcbiAgICApO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIGRiLm9uT3V0KG1zZyA9PiB7XG4gICAgY29uc3QgeyB0bywganNvbiwgaWdub3JlTGVlY2hpbmcgfSA9IG1zZztcblxuICAgIGlmICghdG8uZ2V0KFtcImlzTGVlY2hpbmdcIl0pIHx8IGlnbm9yZUxlZWNoaW5nKSByZXR1cm4gbXNnO1xuICAgIGNvbnN0IGFza2VkUHV0cyA9IGtleXMoanNvbi5wdXQpLmZpbHRlcihzb3VsID0+IHtcbiAgICAgIGlmICghdG8uZ2V0KFtcImhhc0Fza2VkRm9yXCIsIHNvdWxdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3Qgc291bERlbHRhcyA9IHBhdGgoW3NvdWwsIFwiX1wiLCBcIj5cIl0sIGpzb24ucHV0KTtcbiAgICAgIGxldCBoYXNVcGRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGlmICgha2V5cyhzb3VsRGVsdGFzKS5sZW5ndGgpIHJldHVybiB0cnVlO1xuXG4gICAgICBrZXlzKHNvdWxEZWx0YXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3Qga25vd24gPSB0by5nZXQoW1wia25vd25EZWx0YXNcIiwgc291bCwga2V5XSkgfHwgMDtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBwYXJzZUZsb2F0KHNvdWxEZWx0YXNba2V5XSkgfHwgMDtcblxuICAgICAgICBpZiAoa25vd24gJiYgZGVsdGEgPD0ga25vd24pIHJldHVybjtcbiAgICAgICAgdG8uc2V0KFtcImtub3duRGVsdGFzXCIsIHNvdWwsIGtleV0sIGRlbHRhKTtcbiAgICAgICAgaGFzVXBkYXRlcyA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoYXNVcGRhdGVzO1xuICAgIH0pO1xuXG4gICAgaWYgKGFza2VkUHV0cy5sZW5ndGgpIHJldHVybiBtc2c7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZGIgPT4ge1xuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgY29uc3QgeyBmcm9tLCBub1JlbGF5IH0gPSBtc2c7XG5cbiAgICBpZiAobm9SZWxheSkgcmV0dXJuIG1zZztcbiAgICBSLndpdGhvdXQoW2Zyb21dLCBkYi5jb25uZWN0aW9ucykuZm9yRWFjaChjID0+XG4gICAgICBjLnNlbmQoUi5hc3NvYyhcInNraXBWYWxpZGF0aW9uXCIsIHRydWUsIG1zZykpXG4gICAgKTtcbiAgICByZXR1cm4gbXNnO1xuICB9KTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCB7IGN1cnJ5IH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgV1MgZnJvbSBcIndzXCI7XG5pbXBvcnQgUmVjb25uZWN0aW5nV2ViU29ja2V0IGZyb20gXCJyZWNvbm5lY3Rpbmctd2Vic29ja2V0XCI7XG5cbmNvbnN0IFBJTkcgPSA2MDAwMDtcblxuY29uc3Qgd3NDb25uZWN0aW9uID0gY3VycnkoKGRiLCB3cykgPT4ge1xuICBsZXQgaGFzTG9nZ2VkRXJyID0gZmFsc2U7XG4gIGxldCBjb25uZWN0ZWQgPSB0cnVlO1xuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBkYi5jb25uZWN0ZWQobXNnID0+IHtcbiAgICBpZiAoIW1zZyB8fCAhKG1zZy5qc29uIHx8IG1zZy5yYXcpIHx8ICFjb25uZWN0ZWQpIHJldHVybjtcbiAgICBjb25zdCByYXcgPSBtc2cucmF3IHx8IGRiLnN0cmluZ2lmeShtc2cuanNvbik7XG5cbiAgICB3cy5zZW5kKHJhdywgZXJyID0+IHtcbiAgICAgIGlmICghZXJyIHx8IGhhc0xvZ2dlZEVycikgcmV0dXJuO1xuICAgICAgY29uc29sZS53YXJuKFwid3Mgc2VuZCBlcnJcIiwgZXJyKTtcbiAgICAgIGhhc0xvZ2dlZEVyciA9IHRydWU7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICgpID0+IGNvbm5lY3Rpb24uc2VuZCh7IGpzb246IHsgcGluZzogdHJ1ZSB9LCBza2lwVmFsaWRhdGlvbjogdHJ1ZSB9KSxcbiAgICBQSU5HXG4gICk7XG5cbiAgY29uc3QgcmVjZWl2ZSA9IG1zZyA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJhdyA9IG1zZy5kYXRhIHx8IG1zZztcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIEFycmF5LmlzQXJyYXkoanNvbilcbiAgICAgICAgPyBqc29uLmZvckVhY2gocmVjZWl2ZSlcbiAgICAgICAgOiBjb25uZWN0aW9uLnJlY2VpdmUoeyBqc29uLCByYXcgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJFQ0VJVkVSIGludmFsaWQgd3MgbXNnXCIsIGUsIG1zZy5kYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHtcbiAgICBpZiAod3MucmVjb25uZWN0KSByZXR1cm47XG4gICAgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbChwaW5nSW50ZXJ2YWwpO1xuICAgIGRiLmRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKTtcbiAgfSk7XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZSk7XG4gIHJldHVybiBjb25uZWN0aW9uO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBjdXJyeSgoeyB3ZWIsIHBvcnQgfSwgZGIpID0+IHtcbiAgbmV3IFdTLlNlcnZlcih7IHBvcnQ6ICF3ZWIgPyBwb3J0IDogdW5kZWZpbmVkLCBzZXJ2ZXI6IHdlYiB9KS5vbihcbiAgICBcImNvbm5lY3Rpb25cIixcbiAgICB3c0Nvbm5lY3Rpb24oZGIpXG4gICk7XG4gIHJldHVybiBkYjtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3VycnkoKHVybCwgZGIpID0+IHtcbiAgY29uc3Qgd3MgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCwgW10sIHsgV2ViU29ja2V0OiBXUyB9KTtcblxuICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB3c0Nvbm5lY3Rpb24oZGIsIHdzKSk7XG4gIHJldHVybiBkYjtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BtMl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV91dWlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX187Il0sInNvdXJjZVJvb3QiOiIifQ==