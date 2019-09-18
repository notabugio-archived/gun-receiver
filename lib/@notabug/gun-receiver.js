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
        if (!json && msg.raw) json = JSON.parse(msg.raw);
        msg.json = json;
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
      json: [],
      skipValidation: true
    });
  }, PING);

  var receive = function receive(msg) {
    try {
      var raw = msg.data || msg;
      var json = typeof raw === "string" ? JSON.parse(raw) : raw;
      Array.isArray(json) ? json.forEach(receive) : connection.receive({
        json: json,
        raw: raw
      });
    } catch (e) {
      console.error("RECEIVER invalid ws msg", e, msg.data || msg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1yZWNlaXZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9ub2RlX21vZHVsZXMvcmVjb25uZWN0aW5nLXdlYnNvY2tldC9kaXN0L3JlY29ubmVjdGluZy13ZWJzb2NrZXQubWpzIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1yZWNlaXZlci8uL3NyYy9jaGFpbi5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9zcmMvY2x1c3Rlci5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9zcmMvZGVkdXAuanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXJlY2VpdmVyLy4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXJlY2VpdmVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1yZWNlaXZlci8uL3NyYy9sZWVjaC5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvLi9zcmMvcmVsYXkuanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXJlY2VpdmVyLy4vc3JjL3dlYnNvY2tldC5qcyIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJwbTJcIiIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJyYW1kYVwiIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJ3c1wiIl0sIm5hbWVzIjpbImRiIiwiZ2V0UGF0aCIsImtleUxpc3QiLCJvcHRzIiwidGhpc0NoYWluIiwib24iLCJmbiIsInZhbHVlIiwiZ2V0VmFsdWUiLCJoYXNSZXNwb25zZSIsImJvdW5kIiwiYmluZCIsInJlY2VpdmVkIiwidmFsIiwicmVxdWVzdGVkIiwicmVxdWVzdHMiLCJncmFwaCIsImNvbm5lY3Rpb24iLCJjb25uZWN0ZWQiLCJtc2ciLCJqc29uIiwicmF3IiwiSlNPTiIsInBhcnNlIiwiYXQiLCJSIiwicHJvcCIsImF0U291bCIsInNvdWxzIiwia2V5cyIsInB1c2giLCJsZW5ndGgiLCJ1bmlxIiwiZm9yRWFjaCIsInNvdWwiLCJub2RlIiwicGF0aCIsIm1lcmdlRGVlcExlZnQiLCJuZXh0VmFsdWUiLCJnZXROb2RlIiwiaWQiLCJ2NCIsInJlY2VpdmUiLCJnZXQiLCJza2lwVmFsaWRhdGlvbiIsImtsIiwibGFzdEtleSIsInBhcmVudFZhbHVlIiwic2xpY2UiLCJ1bmRlZmluZWQiLCJsZWVjaCIsImRpc2Nvbm5lY3RlZCIsInRoZW4iLCJpZGVudGl0eSIsIlByb21pc2UiLCJyZXNvbHZlIiwidW5zdWJzY3JpYmUiLCJvbmNlIiwia2V5IiwiZ2V0RGlmZiIsInB1dCIsImRpZmZzIiwiYWxsIiwibWFwIiwibm9SZWxheSIsImV4aXN0aW5nIiwiZGlmZiIsImRpZmZOb2RlIiwiTVNHX1RPUElDIiwibW9kdWxlIiwiZXhwb3J0cyIsInBtMiIsInJlcXVpcmUiLCJsYXVuY2hCdXMiLCJlcnIiLCJidXMiLCJjb25zb2xlIiwicGFja2V0IiwiZnJvbUNsdXN0ZXIiLCJ0b3BpYyIsInByb2Nlc3NJbiIsImFzc29jIiwiY2F0Y2giLCJlcnJvciIsIm9uSW4iLCJwcm9jZXNzIiwic2VuZCIsIm1lcmdlTGVmdCIsInByb2Nlc3NRdWV1ZSIsImZucyIsInF1ZXVlIiwiZGVxdWV1ZSIsImV4ZWN1dGUiLCJyZW1haW5pbmdGbnMiLCJyZXZlcnNlIiwiZXhlY3V0ZU5leHQiLCJwb3AiLCJlIiwicmVqZWN0IiwicGlzdG9sQ29ubmVjdGlvbiIsInNlbmRGbiIsInN0YXRlIiwiaGFzUmVwb3J0ZWRFcnJvciIsInAiLCJzZXQiLCJ2IiwibXNnSWQiLCJwcm9jZXNzT3V0IiwidG8iLCJyIiwic3RyaW5naWZ5IiwiZnJvbSIsIlJlY2VpdmVyIiwicGVlciIsImNvbm5lY3Rpb25zIiwib25PdXQiLCJjb25uZWN0aW9uSWR4IiwiaW5kZXhPZiIsInNwbGljZSIsIk1BWF9NU0dfSURfQ0FDSEUiLCJHQVJCQUdFX0lOVEVSVkFMIiwicmVjZWl2ZWRJZHMiLCJjb2xsZWN0R2FyYmFnZSIsImlkcyIsInNldEludGVydmFsIiwiR1JBQ0UiLCJMZXhpY2FsIiwidXBkYXRlZCIsIm1hY2hpbmVTdGF0ZSIsIm1heFN0YXRlIiwiRGF0ZSIsImdldFRpbWUiLCJleGlzdGluZ1N0YXRlIiwidXBkYXRlZFN0YXRlIiwiY29tcG9zZSIsInZhbHMiLCJwaWNrIiwiXyIsInJlZHVjZSIsInVwZGF0ZXMiLCJleGlzdGluZ0tleVN0YXRlIiwidXBkYXRlZEtleVN0YXRlIiwiZXhpc3RpbmdWYWwiLCJ1cGRhdGVkVmFsIiwid2Vic29ja2V0VHJhbnNwb3J0Iiwid2Vic29ja2V0IiwiYXNraW5nRm9yIiwiaWdub3JlTGVlY2hpbmciLCJhc2tlZFB1dHMiLCJmaWx0ZXIiLCJzb3VsRGVsdGFzIiwiaGFzVXBkYXRlcyIsImtub3duIiwiZGVsdGEiLCJwYXJzZUZsb2F0Iiwid2l0aG91dCIsImMiLCJQSU5HIiwid3NDb25uZWN0aW9uIiwid3MiLCJoYXNMb2dnZWRFcnIiLCJ3YXJuIiwicGluZ0ludGVydmFsIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZWNvbm5lY3QiLCJjbGVhckludGVydmFsIiwic2VydmVyIiwid2ViIiwicG9ydCIsIlNlcnZlciIsImNsaWVudCIsInVybCIsIldlYlNvY2tldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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TDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGFBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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ZkEsSUFBZTtBQUNqRCxNQUFJLFlBQUdDLE1BQVAsQ0FBYztBQUFFRCxRQUFJLEVBQUUsQ0FBQ0QsR0FBRCxHQUFPQyxJQUFQLEdBQWMxSCxTQUF0QjtBQUFpQ3dILFVBQU0sRUFBRUM7QUFBekMsR0FBZCxFQUE4RHJLLEVBQTlELENBQ0UsWUFERixFQUVFeUosWUFBWSxDQUFDOUosRUFBRCxDQUZkO0FBSUEsU0FBT0EsRUFBUDtBQUNELENBTnFCLENBQWY7O0FBUUEsSUFBTTZLLE1BQU0sR0FBRyxrQkFBTSxVQUFDQyxHQUFELEVBQU05SyxFQUFOLEVBQWE7QUFDdkMsTUFBTStKLEVBQUUsR0FBRyxtQ0FBMEJlLEdBQTFCLEVBQStCLEVBQS9CLEVBQW1DO0FBQUVDLGFBQVM7QUFBWCxHQUFuQyxDQUFYO0FBRUFoQixJQUFFLENBQUNPLGdCQUFILENBQW9CLE1BQXBCLEVBQTRCO0FBQUEsV0FBTVIsWUFBWSxDQUFDOUosRUFBRCxFQUFLK0osRUFBTCxDQUFsQjtBQUFBLEdBQTVCO0FBQ0EsU0FBTy9KLEVBQVA7QUFDRCxDQUxxQixDQUFmOzs7Ozs7Ozs7Ozs7QUMxRFAsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoiQG5vdGFidWcvZ3VuLXJlY2VpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicG0yXCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ1dWlkXCIpLCByZXF1aXJlKFwid3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJAbm90YWJ1Zy9ndW4tcmVjZWl2ZXJcIiwgW1wicG0yXCIsIFwicmFtZGFcIiwgXCJ1dWlkXCIsIFwid3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQG5vdGFidWcvZ3VuLXJlY2VpdmVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicG0yXCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJ1dWlkXCIpLCByZXF1aXJlKFwid3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBub3RhYnVnL2d1bi1yZWNlaXZlclwiXSA9IGZhY3Rvcnkocm9vdFtcInBtMlwiXSwgcm9vdFtcInJhbWRhXCJdLCByb290W1widXVpZFwiXSwgcm9vdFtcIndzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BtMl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdXVpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cblxudmFyIEV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXZlbnQodHlwZSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIHJldHVybiBFdmVudDtcclxufSgpKTtcclxudmFyIEVycm9yRXZlbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRXJyb3JFdmVudCwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEVycm9yRXZlbnQoZXJyb3IsIHRhcmdldCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdlcnJvcicsIHRhcmdldCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5tZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICBfdGhpcy5lcnJvciA9IGVycm9yO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBFcnJvckV2ZW50O1xyXG59KEV2ZW50KSk7XHJcbnZhciBDbG9zZUV2ZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKENsb3NlRXZlbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBDbG9zZUV2ZW50KGNvZGUsIHJlYXNvbiwgdGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gMTAwMDsgfVxyXG4gICAgICAgIGlmIChyZWFzb24gPT09IHZvaWQgMCkgeyByZWFzb24gPSAnJzsgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsICdjbG9zZScsIHRhcmdldCkgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy53YXNDbGVhbiA9IHRydWU7XHJcbiAgICAgICAgX3RoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgX3RoaXMucmVhc29uID0gcmVhc29uO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIHJldHVybiBDbG9zZUV2ZW50O1xyXG59KEV2ZW50KSk7XG5cbi8qIVxyXG4gKiBSZWNvbm5lY3RpbmcgV2ViU29ja2V0XHJcbiAqIGJ5IFBlZHJvIExhZGFyaWEgPHBlZHJvLmxhZGFyaWFAZ21haWwuY29tPlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcGxhZGFyaWEvcmVjb25uZWN0aW5nLXdlYnNvY2tldFxyXG4gKiBMaWNlbnNlIE1JVFxyXG4gKi9cclxudmFyIGdldEdsb2JhbFdlYlNvY2tldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICByZXR1cm4gV2ViU29ja2V0O1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogUmV0dXJucyB0cnVlIGlmIGdpdmVuIGFyZ3VtZW50IGxvb2tzIGxpa2UgYSBXZWJTb2NrZXQgY2xhc3NcclxuICovXHJcbnZhciBpc1dlYlNvY2tldCA9IGZ1bmN0aW9uICh3KSB7IHJldHVybiB0eXBlb2YgdyA9PT0gJ2Z1bmN0aW9uJyAmJiB3LkNMT1NJTkcgPT09IDI7IH07XHJcbnZhciBERUZBVUxUID0ge1xyXG4gICAgbWF4UmVjb25uZWN0aW9uRGVsYXk6IDEwMDAwLFxyXG4gICAgbWluUmVjb25uZWN0aW9uRGVsYXk6IDEwMDAgKyBNYXRoLnJhbmRvbSgpICogNDAwMCxcclxuICAgIG1pblVwdGltZTogNTAwMCxcclxuICAgIHJlY29ubmVjdGlvbkRlbGF5R3Jvd0ZhY3RvcjogMS4zLFxyXG4gICAgY29ubmVjdGlvblRpbWVvdXQ6IDQwMDAsXHJcbiAgICBtYXhSZXRyaWVzOiBJbmZpbml0eSxcclxuICAgIGRlYnVnOiBmYWxzZSxcclxufTtcclxudmFyIFJlY29ubmVjdGluZ1dlYlNvY2tldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlY29ubmVjdGluZ1dlYlNvY2tldCh1cmwsIHByb3RvY29scywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7XHJcbiAgICAgICAgICAgIGVycm9yOiBbXSxcclxuICAgICAgICAgICAgbWVzc2FnZTogW10sXHJcbiAgICAgICAgICAgIG9wZW46IFtdLFxyXG4gICAgICAgICAgICBjbG9zZTogW10sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50ID0gLTE7XHJcbiAgICAgICAgdGhpcy5fc2hvdWxkUmVjb25uZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2JpbmFyeVR5cGUgPSAnYmxvYic7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9tZXNzYWdlUXVldWUgPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24ncyByZWFkeVN0YXRlIGNoYW5nZXMgdG8gQ0xPU0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbmNsb3NlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGFuIGVycm9yIG9jY3Vyc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiBhIG1lc3NhZ2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uJ3MgcmVhZHlTdGF0ZSBjaGFuZ2VzIHRvIE9QRU47XHJcbiAgICAgICAgICogdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGUgY29ubmVjdGlvbiBpcyByZWFkeSB0byBzZW5kIGFuZCByZWNlaXZlIGRhdGFcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9oYW5kbGVPcGVuID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1Zygnb3BlbiBldmVudCcpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5fb3B0aW9ucy5taW5VcHRpbWUsIG1pblVwdGltZSA9IF9hID09PSB2b2lkIDAgPyBERUZBVUxULm1pblVwdGltZSA6IF9hO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuX2Nvbm5lY3RUaW1lb3V0KTtcclxuICAgICAgICAgICAgX3RoaXMuX3VwdGltZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9hY2NlcHRPcGVuKCk7IH0sIG1pblVwdGltZSk7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgX3RoaXMuX3dzLmJpbmFyeVR5cGUgPSBfdGhpcy5fYmluYXJ5VHlwZTtcclxuICAgICAgICAgICAgLy8gc2VuZCBlbnF1ZXVlZCBtZXNzYWdlcyAobWVzc2FnZXMgc2VudCBiZWZvcmUgd2Vic29ja2V0IG9wZW4gZXZlbnQpXHJcbiAgICAgICAgICAgIF90aGlzLl9tZXNzYWdlUXVldWUuZm9yRWFjaChmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gX3RoaXMuX3dzLnNlbmQobWVzc2FnZSk7IH0pO1xyXG4gICAgICAgICAgICBfdGhpcy5fbWVzc2FnZVF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbm9wZW4pIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9ub3BlbihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX3RoaXMuX2xpc3RlbmVycy5vcGVuLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7IHJldHVybiBfdGhpcy5fY2FsbEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTsgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVNZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnbWVzc2FnZSBldmVudCcpO1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMub25tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbm1lc3NhZ2UoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMubWVzc2FnZS5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gX3RoaXMuX2NhbGxFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7IH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgX3RoaXMuX2RlYnVnKCdlcnJvciBldmVudCcsIGV2ZW50Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBfdGhpcy5fZGlzY29ubmVjdCh1bmRlZmluZWQsIGV2ZW50Lm1lc3NhZ2UgPT09ICdUSU1FT1VUJyA/ICd0aW1lb3V0JyA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vbmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbmVycm9yKGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5fZGVidWcoJ2V4ZWMgZXJyb3IgbGlzdGVuZXJzJyk7XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMuZXJyb3IuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnY2xvc2UgZXZlbnQnKTtcclxuICAgICAgICAgICAgX3RoaXMuX2NsZWFyVGltZW91dHMoKTtcclxuICAgICAgICAgICAgaWYgKF90aGlzLl9zaG91bGRSZWNvbm5lY3QpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKF90aGlzLm9uY2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uY2xvc2UoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMuY2xvc2UuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIF90aGlzLl9jYWxsRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpOyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wcm90b2NvbHMgPSBwcm90b2NvbHM7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJDT05ORUNUSU5HXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LCBcIk9QRU5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQsIFwiQ0xPU0lOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldCwgXCJDTE9TRURcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIkNPTk5FQ1RJTkdcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0LkNPTk5FQ1RJTkc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJPUEVOXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldC5PUEVOO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiQ0xPU0lOR1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ0xPU0lORztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcIkNMT1NFRFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ0xPU0VEO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwiYmluYXJ5VHlwZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLmJpbmFyeVR5cGUgOiB0aGlzLl9iaW5hcnlUeXBlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYmluYXJ5VHlwZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIHRoaXMuX3dzLmJpbmFyeVR5cGUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUsIFwicmV0cnlDb3VudFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9yIGNvbm5lY3Rpb24gcmV0cmllc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5fcmV0cnlDb3VudCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJidWZmZXJlZEFtb3VudFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG51bWJlciBvZiBieXRlcyBvZiBkYXRhIHRoYXQgaGF2ZSBiZWVuIHF1ZXVlZCB1c2luZyBjYWxscyB0byBzZW5kKCkgYnV0IG5vdCB5ZXRcclxuICAgICAgICAgKiB0cmFuc21pdHRlZCB0byB0aGUgbmV0d29yay4gVGhpcyB2YWx1ZSByZXNldHMgdG8gemVybyBvbmNlIGFsbCBxdWV1ZWQgZGF0YSBoYXMgYmVlbiBzZW50LlxyXG4gICAgICAgICAqIFRoaXMgdmFsdWUgZG9lcyBub3QgcmVzZXQgdG8gemVybyB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIGNsb3NlZDsgaWYgeW91IGtlZXAgY2FsbGluZyBzZW5kKCksXHJcbiAgICAgICAgICogdGhpcyB3aWxsIGNvbnRpbnVlIHRvIGNsaW1iLiBSZWFkIG9ubHlcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5fbWVzc2FnZVF1ZXVlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjICs9IG1lc3NhZ2UubGVuZ3RoOyAvLyBub3QgYnl0ZSBzaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjYyArPSBtZXNzYWdlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2MgKz0gbWVzc2FnZS5ieXRlTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBieXRlcyArICh0aGlzLl93cyA/IHRoaXMuX3dzLmJ1ZmZlcmVkQW1vdW50IDogMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZSwgXCJleHRlbnNpb25zXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZXh0ZW5zaW9ucyBzZWxlY3RlZCBieSB0aGUgc2VydmVyLiBUaGlzIGlzIGN1cnJlbnRseSBvbmx5IHRoZSBlbXB0eSBzdHJpbmcgb3IgYSBsaXN0IG9mXHJcbiAgICAgICAgICogZXh0ZW5zaW9ucyBhcyBuZWdvdGlhdGVkIGJ5IHRoZSBjb25uZWN0aW9uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLmV4dGVuc2lvbnMgOiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInByb3RvY29sXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSBuYW1lIG9mIHRoZSBzdWItcHJvdG9jb2wgdGhlIHNlcnZlciBzZWxlY3RlZDtcclxuICAgICAgICAgKiB0aGlzIHdpbGwgYmUgb25lIG9mIHRoZSBzdHJpbmdzIHNwZWNpZmllZCBpbiB0aGUgcHJvdG9jb2xzIHBhcmFtZXRlciB3aGVuIGNyZWF0aW5nIHRoZVxyXG4gICAgICAgICAqIFdlYlNvY2tldCBvYmplY3RcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MucHJvdG9jb2wgOiAnJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInJlYWR5U3RhdGVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjb25uZWN0aW9uOyB0aGlzIGlzIG9uZSBvZiB0aGUgUmVhZHkgc3RhdGUgY29uc3RhbnRzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93cyA/IHRoaXMuX3dzLnJlYWR5U3RhdGUgOiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ09OTkVDVElORztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLCBcInVybFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIFVSTCBhcyByZXNvbHZlZCBieSB0aGUgY29uc3RydWN0b3JcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dzID8gdGhpcy5fd3MudXJsIDogJyc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24gb3IgY29ubmVjdGlvbiBhdHRlbXB0LCBpZiBhbnkuIElmIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHlcclxuICAgICAqIENMT1NFRCwgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nXHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY29kZSwgcmVhc29uKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT09IHZvaWQgMCkgeyBjb2RlID0gMTAwMDsgfVxyXG4gICAgICAgIHRoaXMuX2Nsb3NlQ2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zaG91bGRSZWNvbm5lY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cykge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnY2xvc2UgZW5xdWV1ZWQ6IG5vIHdzIGluc3RhbmNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3dzLnJlYWR5U3RhdGUgPT09IHRoaXMuQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdjbG9zZTogYWxyZWFkeSBjbG9zZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93cy5jbG9zZShjb2RlLCByZWFzb24pO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbiBvciBjb25uZWN0aW9uIGF0dGVtcHQgYW5kIGNvbm5lY3RzIGFnYWluLlxyXG4gICAgICogUmVzZXRzIHJldHJ5IGNvdW50ZXI7XHJcbiAgICAgKi9cclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xyXG4gICAgICAgIHRoaXMuX3Nob3VsZFJlY29ubmVjdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9yZXRyeUNvdW50ID0gLTE7XHJcbiAgICAgICAgaWYgKCF0aGlzLl93cyB8fCB0aGlzLl93cy5yZWFkeVN0YXRlID09PSB0aGlzLkNMT1NFRCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kaXNjb25uZWN0KGNvZGUsIHJlYXNvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbnF1ZXVlIHNwZWNpZmllZCBkYXRhIHRvIGJlIHRyYW5zbWl0dGVkIHRvIHRoZSBzZXJ2ZXIgb3ZlciB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb25cclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5fd3MgJiYgdGhpcy5fd3MucmVhZHlTdGF0ZSA9PT0gdGhpcy5PUEVOKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdzZW5kJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3dzLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWJ1ZygnZW5xdWV1ZScsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlUXVldWUucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgdHlwZVxyXG4gICAgICovXHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5fbGlzdGVuZXJzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAqL1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyc1t0eXBlXSA9IHRoaXMuX2xpc3RlbmVyc1t0eXBlXS5maWx0ZXIoZnVuY3Rpb24gKGwpIHsgcmV0dXJuIGwgIT09IGxpc3RlbmVyOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9vcHRpb25zLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIC8vIG5vdCB1c2luZyBzcHJlYWQgYmVjYXVzZSBjb21waWxlZCB2ZXJzaW9uIHVzZXMgU3ltYm9sc1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydSV1M+J10uY29uY2F0KGFyZ3MpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZ2V0TmV4dERlbGF5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMuX29wdGlvbnMsIF9iID0gX2EucmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yLCByZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IgPSBfYiA9PT0gdm9pZCAwID8gREVGQVVMVC5yZWNvbm5lY3Rpb25EZWxheUdyb3dGYWN0b3IgOiBfYiwgX2MgPSBfYS5taW5SZWNvbm5lY3Rpb25EZWxheSwgbWluUmVjb25uZWN0aW9uRGVsYXkgPSBfYyA9PT0gdm9pZCAwID8gREVGQVVMVC5taW5SZWNvbm5lY3Rpb25EZWxheSA6IF9jLCBfZCA9IF9hLm1heFJlY29ubmVjdGlvbkRlbGF5LCBtYXhSZWNvbm5lY3Rpb25EZWxheSA9IF9kID09PSB2b2lkIDAgPyBERUZBVUxULm1heFJlY29ubmVjdGlvbkRlbGF5IDogX2Q7XHJcbiAgICAgICAgdmFyIGRlbGF5ID0gbWluUmVjb25uZWN0aW9uRGVsYXk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3JldHJ5Q291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGRlbGF5ID1cclxuICAgICAgICAgICAgICAgIG1pblJlY29ubmVjdGlvbkRlbGF5ICogTWF0aC5wb3cocmVjb25uZWN0aW9uRGVsYXlHcm93RmFjdG9yLCB0aGlzLl9yZXRyeUNvdW50IC0gMSk7XHJcbiAgICAgICAgICAgIGlmIChkZWxheSA+IG1heFJlY29ubmVjdGlvbkRlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBkZWxheSA9IG1heFJlY29ubmVjdGlvbkRlbGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RlYnVnKCduZXh0IGRlbGF5JywgZGVsYXkpO1xyXG4gICAgICAgIHJldHVybiBkZWxheTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl93YWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgX3RoaXMuX2dldE5leHREZWxheSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9nZXROZXh0VXJsID0gZnVuY3Rpb24gKHVybFByb3ZpZGVyKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmxQcm92aWRlciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmxQcm92aWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsUHJvdmlkZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHVybFByb3ZpZGVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh1cmwudGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBFcnJvcignSW52YWxpZCBVUkwnKTtcclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Nvbm5lY3RMb2NrIHx8ICF0aGlzLl9zaG91bGRSZWNvbm5lY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25uZWN0TG9jayA9IHRydWU7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fb3B0aW9ucywgX2IgPSBfYS5tYXhSZXRyaWVzLCBtYXhSZXRyaWVzID0gX2IgPT09IHZvaWQgMCA/IERFRkFVTFQubWF4UmV0cmllcyA6IF9iLCBfYyA9IF9hLmNvbm5lY3Rpb25UaW1lb3V0LCBjb25uZWN0aW9uVGltZW91dCA9IF9jID09PSB2b2lkIDAgPyBERUZBVUxULmNvbm5lY3Rpb25UaW1lb3V0IDogX2MsIF9kID0gX2EuV2ViU29ja2V0LCBXZWJTb2NrZXQgPSBfZCA9PT0gdm9pZCAwID8gZ2V0R2xvYmFsV2ViU29ja2V0KCkgOiBfZDtcclxuICAgICAgICBpZiAodGhpcy5fcmV0cnlDb3VudCA+PSBtYXhSZXRyaWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlYnVnKCdtYXggcmV0cmllcyByZWFjaGVkJywgdGhpcy5fcmV0cnlDb3VudCwgJz49JywgbWF4UmV0cmllcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmV0cnlDb3VudCsrO1xyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdjb25uZWN0JywgdGhpcy5fcmV0cnlDb3VudCk7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgaWYgKCFpc1dlYlNvY2tldChXZWJTb2NrZXQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdObyB2YWxpZCBXZWJTb2NrZXQgY2xhc3MgcHJvdmlkZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2FpdCgpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9nZXROZXh0VXJsKF90aGlzLl91cmwpOyB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgICAgIC8vIGNsb3NlIGNvdWxkIGJlIGNhbGxlZCBiZWZvcmUgY3JlYXRpbmcgdGhlIHdzXHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5fY2xvc2VDYWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLl9kZWJ1ZygnY29ubmVjdCcsIHsgdXJsOiB1cmwsIHByb3RvY29sczogX3RoaXMuX3Byb3RvY29scyB9KTtcclxuICAgICAgICAgICAgX3RoaXMuX3dzID0gX3RoaXMuX3Byb3RvY29sc1xyXG4gICAgICAgICAgICAgICAgPyBuZXcgV2ViU29ja2V0KHVybCwgX3RoaXMuX3Byb3RvY29scylcclxuICAgICAgICAgICAgICAgIDogbmV3IFdlYlNvY2tldCh1cmwpO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIF90aGlzLl93cy5iaW5hcnlUeXBlID0gX3RoaXMuX2JpbmFyeVR5cGU7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb25uZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5fYWRkTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgICAgIF90aGlzLl9jb25uZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2hhbmRsZVRpbWVvdXQoKTsgfSwgY29ubmVjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2hhbmRsZVRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ3RpbWVvdXQgZXZlbnQnKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihuZXcgRXJyb3JFdmVudChFcnJvcignVElNRU9VVCcpLCB0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5fZGlzY29ubmVjdCA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcclxuICAgICAgICBpZiAoY29kZSA9PT0gdm9pZCAwKSB7IGNvZGUgPSAxMDAwOyB9XHJcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpO1xyXG4gICAgICAgIGlmICghdGhpcy5fd3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLl93cy5jbG9zZShjb2RlLCByZWFzb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVDbG9zZShuZXcgQ2xvc2VFdmVudChjb2RlLCByZWFzb24sIHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGlnbm9yZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLl9hY2NlcHRPcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnKCdhY2NlcHQgb3BlbicpO1xyXG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQgPSAwO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2NhbGxFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCBsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICgnaGFuZGxlRXZlbnQnIGluIGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBsaXN0ZW5lcihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX3JlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ3JlbW92ZUxpc3RlbmVycycpO1xyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLl9oYW5kbGVPcGVuKTtcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX2hhbmRsZUNsb3NlKTtcclxuICAgICAgICB0aGlzLl93cy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5faGFuZGxlTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3dzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5faGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2FkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGVidWcoJ2FkZExpc3RlbmVycycpO1xyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCB0aGlzLl9oYW5kbGVPcGVuKTtcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX2hhbmRsZUNsb3NlKTtcclxuICAgICAgICB0aGlzLl93cy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5faGFuZGxlTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuX3dzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGhpcy5faGFuZGxlRXJyb3IpO1xyXG4gICAgfTtcclxuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUuX2NsZWFyVGltZW91dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Nvbm5lY3RUaW1lb3V0KTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fdXB0aW1lVGltZW91dCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlY29ubmVjdGluZ1dlYlNvY2tldDtcclxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjb25uZWN0aW5nV2ViU29ja2V0O1xuIiwiLyogZ2xvYmFscyBQcm9taXNlICovXG5pbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBjb25zdCBnZXRQYXRoID0gKGtleUxpc3QsIG9wdHMgPSB7fSkgPT4ge1xuICAgIGxldCB0aGlzQ2hhaW47XG4gICAgY29uc3Qgb24gPSBmbiA9PiB7XG4gICAgICBsZXQgdmFsdWUsIGdldFZhbHVlO1xuICAgICAgbGV0IGhhc1Jlc3BvbnNlID0gZmFsc2U7XG4gICAgICBjb25zdCBib3VuZCA9IGZuLmJpbmQodGhpc0NoYWluKTtcbiAgICAgIGNvbnN0IHJlY2VpdmVkID0gdmFsID0+IChoYXNSZXNwb25zZSA9IHRydWUpICYmIGJvdW5kKCh2YWx1ZSA9IHZhbCkpO1xuICAgICAgY29uc3QgcmVxdWVzdGVkID0ge307XG4gICAgICBjb25zdCByZXF1ZXN0cyA9IHt9O1xuICAgICAgY29uc3QgZ3JhcGggPSB7fTtcblxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGRiLmNvbm5lY3RlZChtc2cgPT4ge1xuICAgICAgICBsZXQgeyBqc29uIH0gPSBtc2c7XG5cbiAgICAgICAgaWYgKCFqc29uICYmIG1zZy5yYXcpIGpzb24gPSBKU09OLnBhcnNlKG1zZy5yYXcpO1xuICAgICAgICBtc2cuanNvbiA9IGpzb247XG4gICAgICAgIGNvbnN0IGF0ID0gUi5wcm9wKFwiQFwiLCBqc29uKTtcbiAgICAgICAgY29uc3QgYXRTb3VsID0gcmVxdWVzdHNbYXRdO1xuICAgICAgICBjb25zdCBzb3VscyA9IFIua2V5cyhSLnByb3AoXCJwdXRcIiwganNvbikpO1xuXG4gICAgICAgIGlmIChhdFNvdWwpIHNvdWxzLnB1c2goYXRTb3VsKTtcbiAgICAgICAgaWYgKCFzb3Vscy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgUi51bmlxKHNvdWxzKS5mb3JFYWNoKHNvdWwgPT4ge1xuICAgICAgICAgIGlmICghcmVxdWVzdGVkW3NvdWxdKSByZXR1cm47XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IFIucGF0aChbXCJwdXRcIiwgc291bF0sIGpzb24pO1xuXG4gICAgICAgICAgaWYgKCFub2RlICYmICFoYXNSZXNwb25zZSkgcmVjZWl2ZWQoKTtcbiAgICAgICAgICBpZiAobm9kZSkgZ3JhcGhbc291bF0gPSBSLm1lcmdlRGVlcExlZnQobm9kZSwgZ3JhcGhbc291bF0gfHwge30pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gZ2V0VmFsdWUoa2V5TGlzdCk7XG5cbiAgICAgICAgaWYgKG5leHRWYWx1ZSAhPT0gdmFsdWUpIHJlY2VpdmVkKG5leHRWYWx1ZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZ2V0Tm9kZSA9IHNvdWwgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdGVkW3NvdWxdKSByZXR1cm4gZ3JhcGhbc291bF07XG4gICAgICAgIGNvbnN0IGlkID0gdXVpZC52NCgpO1xuXG4gICAgICAgIHJlcXVlc3RlZFtzb3VsXSA9IGlkO1xuICAgICAgICByZXF1ZXN0c1tpZF0gPSBzb3VsO1xuICAgICAgICBjb25uZWN0aW9uLnJlY2VpdmUoe1xuICAgICAgICAgIC4uLm9wdHMsXG4gICAgICAgICAganNvbjogeyBcIiNcIjogaWQsIGdldDogeyBcIiNcIjogc291bCB9IH0sXG4gICAgICAgICAgc2tpcFZhbGlkYXRpb246IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncmFwaFtzb3VsXTtcbiAgICAgIH07XG5cbiAgICAgIGdldFZhbHVlID0ga2wgPT4ge1xuICAgICAgICBjb25zdCBsYXN0S2V5ID0ga2xba2wubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGtsLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGdldE5vZGUobGFzdEtleSk7XG4gICAgICAgIGNvbnN0IHBhcmVudFZhbHVlID0gZ2V0VmFsdWUoa2wuc2xpY2UoMCwga2wubGVuZ3RoIC0gMSkpO1xuXG4gICAgICAgIGlmICghcGFyZW50VmFsdWUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gUi5wcm9wKGxhc3RLZXksIHBhcmVudFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWVbXCIjXCJdKSByZXR1cm4gZ2V0Tm9kZSh2YWx1ZVtcIiNcIl0pO1xuICAgICAgICBpZiAoa2wgPT09IGtleUxpc3QpIHJlY2VpdmVkKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcblxuICAgICAgY29ubmVjdGlvbi5yZWNlaXZlKHsganNvbjogeyBsZWVjaDogdHJ1ZSB9IH0pO1xuICAgICAgZ2V0VmFsdWUoa2V5TGlzdCk7XG4gICAgICByZXR1cm4gKCkgPT4gZGIuZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pO1xuICAgIH07XG5cbiAgICBjb25zdCB0aGVuID0gKGZuID0gUi5pZGVudGl0eSkgPT5cbiAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uKHZhbCA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWwpO1xuICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkudGhlbihmbik7XG5cbiAgICBjb25zdCBvbmNlID0gZm4gPT4gdGhlbihmbi5iaW5kKHRoaXNDaGFpbikpICYmIHRoaXNDaGFpbjtcbiAgICBjb25zdCBnZXQgPSAoa2V5LCBvcHRzID0ge30pID0+IGdldFBhdGgoWy4uLmtleUxpc3QsIGtleV0sIG9wdHMpO1xuXG4gICAgdGhpc0NoYWluID0geyBnZXQsIG9uLCB0aGVuLCBvbmNlIH07XG4gICAgcmV0dXJuIHRoaXNDaGFpbjtcbiAgfTtcblxuICBjb25zdCBnZXREaWZmID0gcHV0ID0+IHtcbiAgICBjb25zdCBzb3VscyA9IFIua2V5cyhwdXQpO1xuICAgIGNvbnN0IGRpZmZzID0ge307XG5cbiAgICBpZiAoIXNvdWxzLmxlbmd0aCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7fSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgc291bHMubWFwKHNvdWwgPT5cbiAgICAgICAgZGIuZ2V0KHNvdWwsIHsgbm9SZWxheTogdHJ1ZSB9KS50aGVuKGV4aXN0aW5nID0+IHtcbiAgICAgICAgICBjb25zdCBkaWZmID0gZGIuZGlmZk5vZGUoZXhpc3RpbmcsIHB1dFtzb3VsXSk7XG5cbiAgICAgICAgICBpZiAoZGlmZikgZGlmZnNbc291bF0gPSBkaWZmO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoIVIua2V5cyhkaWZmcykubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBkaWZmcztcbiAgICB9KTtcbiAgfTtcblxuICBkYi5nZXQgPSAoa2V5LCBvcHRzID0ge30pID0+IGdldFBhdGgoW2tleV0sIG9wdHMpO1xuICBkYi5nZXREaWZmID0gZ2V0RGlmZjtcbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZFwiO1xuXG5jb25zdCBNU0dfVE9QSUMgPSBcImd1bjptc2dcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBkYiA9PiB7XG4gIGNvbnN0IHBtMiA9IHJlcXVpcmUoXCJwbTJcIik7XG4gIGNvbnN0IGlkID0gdXVpZC52NCgpO1xuXG4gIHBtMi5sYXVuY2hCdXMoKGVyciwgYnVzKSA9PiB7XG4gICAgaWYgKGVycikgY29uc29sZS5lcnIoZXJyKTtcbiAgICBidXMub24oXCJwcm9jZXNzOm1zZ1wiLCBwYWNrZXQgPT4ge1xuICAgICAgaWYgKHBhY2tldC5yYXcubXNnLmZyb21DbHVzdGVyID09PSBpZCkgcmV0dXJuO1xuICAgICAgaWYgKHBhY2tldC5yYXcudG9waWMgPT09IE1TR19UT1BJQykge1xuICAgICAgICBkYi5wcm9jZXNzSW4oUi5hc3NvYyhcImRiXCIsIGRiLCBwYWNrZXQucmF3Lm1zZykpLmNhdGNoKGVyciA9PlxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQSVNUT0wgY2x1c3RlciBlcnJcIiwgZXJyKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgY29uc3QgeyBmcm9tQ2x1c3Rlciwgbm9SZWxheSB9ID0gbXNnO1xuXG4gICAgaWYgKG5vUmVsYXkgfHwgZnJvbUNsdXN0ZXIpIHJldHVybiBtc2c7XG4gICAgaWYgKHByb2Nlc3Muc2VuZCkge1xuICAgICAgcHJvY2Vzcy5zZW5kKHtcbiAgICAgICAgdG9waWM6IE1TR19UT1BJQyxcbiAgICAgICAgbXNnOiBSLm1lcmdlTGVmdCh7IGZyb21DbHVzdGVyOiBpZCwgc2tpcFZhbGlkYXRpb246IHRydWUgfSwgbXNnKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIHJldHVybiBkYjtcbn07XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCB7IGFzc29jUGF0aCwgcGF0aCwgd2l0aG91dCB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGRpZmZOb2RlIH0gZnJvbSBcIi4vZGlmZlwiO1xuXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUoKSB7XG4gIGxldCBmbnMgPSBbXTtcbiAgY29uc3QgcXVldWUgPSBmbiA9PiBmbnMucHVzaChmbik7XG4gIGNvbnN0IGRlcXVldWUgPSBmbiA9PiAoZm5zID0gd2l0aG91dChbZm5dLCBmbnMpKTtcblxuICBmdW5jdGlvbiBleGVjdXRlKG1zZykge1xuICAgIGNvbnN0IHJlbWFpbmluZ0ZucyA9IGZucy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICBjb25zdCBleGVjdXRlTmV4dCA9IG1zZyA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmbiA9IHJlbWFpbmluZ0Zucy5wb3AoKTtcblxuICAgICAgICBpZiAobXNnICYmIGZuKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZuKG1zZykpLnRoZW4oZXhlY3V0ZU5leHQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1zZyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4ZWN1dGVOZXh0KG1zZyk7XG4gIH1cblxuICByZXR1cm4gW3F1ZXVlLCBleGVjdXRlLCBkZXF1ZXVlXTtcbn1cblxuZnVuY3Rpb24gcGlzdG9sQ29ubmVjdGlvbih7IGRiLCBzZW5kOiBzZW5kRm4gfSkge1xuICBsZXQgY29ubmVjdGlvbjtcbiAgbGV0IHN0YXRlID0ge307XG4gIGxldCBoYXNSZXBvcnRlZEVycm9yID0gZmFsc2U7XG4gIGNvbnN0IGdldCA9IHAgPT4gcGF0aChwLCBzdGF0ZSk7XG4gIGNvbnN0IHNldCA9IChwLCB2KSA9PiAoc3RhdGUgPSBhc3NvY1BhdGgocCwgdiwgc3RhdGUpKTsgLy8gJiYgY29uc29sZS5sb2coc3RhdGUpO1xuICBjb25zdCB7IG1zZ0lkIH0gPSBkYjtcbiAgY29uc3Qgc2VuZCA9IG1zZyA9PlxuICAgIGRiXG4gICAgICAucHJvY2Vzc091dCh7IC4uLm1zZywgdG86IGNvbm5lY3Rpb24gfSlcbiAgICAgIC50aGVuKHIgPT4gciAmJiBzZW5kRm4ocikpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgaWYgKCFoYXNSZXBvcnRlZEVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiUElTVE9MIHNlbmQgZXJyXCIsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShtc2csIG51bGwsIDIpLFxuICAgICAgICAgICAgbXNnLmpzb24ucHV0LFxuICAgICAgICAgICAgZXJyXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNSZXBvcnRlZEVycm9yID0gdHJ1ZTtcbiAgICAgIH0pO1xuICBjb25zdCByZWNlaXZlID0gKHsganNvbiwgcmF3LCAuLi5vcHRzIH0pID0+IHtcbiAgICByZXR1cm4gZGJcbiAgICAgIC5wcm9jZXNzSW4oe1xuICAgICAgICAuLi5vcHRzLFxuICAgICAgICBkYixcbiAgICAgICAganNvbjogeyAuLi5qc29uLCBcIiNcIjoganNvbltcIiNcIl0gfHwgbXNnSWQoKSB9LFxuICAgICAgICBmcm9tOiBjb25uZWN0aW9uXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiUElTVE9MIHJlY2VpdmUgZXJyXCIsIGVyciwgcmF3IHx8IGpzb24pKTtcbiAgfTtcblxuICBjb25uZWN0aW9uID0geyBzZW5kLCByZWNlaXZlLCBnZXQsIHNldCwgbXNnSWQgfTtcbiAgcmV0dXJuIGNvbm5lY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2VpdmVyKCkge1xuICBsZXQgcGVlcjtcbiAgY29uc3QgY29ubmVjdGlvbnMgPSBbXTtcbiAgY29uc3QgW29uSW4sIHByb2Nlc3NJbl0gPSBwcm9jZXNzUXVldWUoKTtcbiAgY29uc3QgW29uT3V0LCBwcm9jZXNzT3V0XSA9IHByb2Nlc3NRdWV1ZSgpO1xuICBjb25zdCBtc2dJZCA9ICgpID0+IHV1aWQudjQoKTtcbiAgY29uc3Qgc3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnk7XG5cbiAgZnVuY3Rpb24gY29ubmVjdGVkKHNlbmQpIHtcbiAgICBjb25zdCBjb25uZWN0aW9uID0gcGlzdG9sQ29ubmVjdGlvbih7IGRiOiBwZWVyLCBzZW5kIH0pO1xuXG4gICAgY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKTtcbiAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKSB7XG4gICAgY29uc3QgY29ubmVjdGlvbklkeCA9IGNvbm5lY3Rpb25zLmluZGV4T2YoY29ubmVjdGlvbik7XG5cbiAgICBpZiAoY29ubmVjdGlvbklkeCAhPT0gLTEpIGNvbm5lY3Rpb25zLnNwbGljZShjb25uZWN0aW9uSWR4LCAxKTtcbiAgfVxuXG4gIHBlZXIgPSB7XG4gICAgY29ubmVjdGlvbnMsXG4gICAgY29ubmVjdGVkLFxuICAgIGRpc2Nvbm5lY3RlZCxcbiAgICBtc2dJZCxcbiAgICBvbkluLFxuICAgIG9uT3V0LFxuICAgIHByb2Nlc3NJbixcbiAgICBwcm9jZXNzT3V0LFxuICAgIHN0cmluZ2lmeSxcbiAgICBkaWZmTm9kZVxuICB9O1xuICByZXR1cm4gcGVlcjtcbn1cbiIsImltcG9ydCB7IHBhdGgsIGtleXMgfSBmcm9tIFwicmFtZGFcIjtcbmNvbnN0IE1BWF9NU0dfSURfQ0FDSEUgPSA1MDAwMDtcbmNvbnN0IEdBUkJBR0VfSU5URVJWQUwgPSA2MDAwMDtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBjb25zdCByZWNlaXZlZElkcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3RHYXJiYWdlKCkge1xuICAgIGxldCBpZHMgPSBrZXlzKHJlY2VpdmVkSWRzKS5yZXZlcnNlKCk7XG5cbiAgICB3aGlsZSAoaWRzLmxlbmd0aCA+IE1BWF9NU0dfSURfQ0FDSEUpIHtcbiAgICAgIGRlbGV0ZSByZWNlaXZlZElkc1tpZHMucG9wKCldO1xuICAgIH1cbiAgfVxuXG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCBpZCA9IHBhdGgoW1wianNvblwiLCBcIiNcIl0sIG1zZyk7XG5cbiAgICBpZiAoIWlkIHx8IHJlY2VpdmVkSWRzW2lkXSkgcmV0dXJuIG51bGw7XG4gICAgcmVjZWl2ZWRJZHNbaWRdID0gdHJ1ZTtcbiAgICByZXR1cm4gbXNnO1xuICB9KTtcblxuICBzZXRJbnRlcnZhbChjb2xsZWN0R2FyYmFnZSwgR0FSQkFHRV9JTlRFUlZBTCk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XG5cbmNvbnN0IEdSQUNFID0gMTAgKiA2MCAqIDEwMDA7IC8vIEhvdyBmYXIgYWhlYWQgY2xvY2sgY2FuIGJlLCB1bmxpa2UgZ3VuIHdlIGp1c3QgZGlzY2FyZCBub3QgZGVmZXJcbmNvbnN0IExleGljYWwgPSBKU09OLnN0cmluZ2lmeTsgLy8gVGhpcyBpcyB3aGF0IEd1biB1c2VzXG5cbmV4cG9ydCBjb25zdCBkaWZmTm9kZSA9IChleGlzdGluZywgdXBkYXRlZCwgbWFjaGluZVN0YXRlID0gbnVsbCkgPT4ge1xuICBsZXQgbWF4U3RhdGUgPSAobWFjaGluZVN0YXRlIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSArIEdSQUNFOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGNvbnN0IGV4aXN0aW5nU3RhdGUgPSBSLnBhdGgoW1wiX1wiLCBcIj5cIl0sIGV4aXN0aW5nKSB8fCB7fTtcbiAgY29uc3QgdXBkYXRlZFN0YXRlID0gUi5wYXRoKFtcIl9cIiwgXCI+XCJdLCB1cGRhdGVkKSB8fCB7fTtcblxuICByZXR1cm4gUi5jb21wb3NlKFxuICAgIHZhbHMgPT4ge1xuICAgICAgY29uc3Qga2V5cyA9IFIua2V5cyh2YWxzKTtcblxuICAgICAgaWYgKCFrZXlzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gUi5hc3NvYyhcbiAgICAgICAgXCJfXCIsXG4gICAgICAgIFIuYXNzb2MoXCI+XCIsIFIucGljayhrZXlzLCB1cGRhdGVkU3RhdGUpLCB1cGRhdGVkLl8pLFxuICAgICAgICB2YWxzXG4gICAgICApO1xuICAgIH0sXG4gICAgUi5yZWR1Y2UoKHVwZGF0ZXMsIGtleSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdLZXlTdGF0ZSA9IGV4aXN0aW5nU3RhdGVba2V5XTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRLZXlTdGF0ZSA9IHVwZGF0ZWRTdGF0ZVtrZXldO1xuXG4gICAgICBpZiAodXBkYXRlZEtleVN0YXRlID4gbWF4U3RhdGUgfHwgIXVwZGF0ZWRLZXlTdGF0ZSkgcmV0dXJuIHVwZGF0ZXM7XG4gICAgICBpZiAoZXhpc3RpbmdLZXlTdGF0ZSAmJiBleGlzdGluZ0tleVN0YXRlID49IHVwZGF0ZWRLZXlTdGF0ZSlcbiAgICAgICAgcmV0dXJuIHVwZGF0ZXM7XG5cbiAgICAgIGlmIChleGlzdGluZ0tleVN0YXRlID09PSB1cGRhdGVkS2V5U3RhdGUpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdWYWwgPSBSLnByb3Aoa2V5LCBleGlzdGluZyk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRWYWwgPSBSLnByb3Aoa2V5LCB1cGRhdGVkKTtcblxuICAgICAgICAvLyBUaGlzIGlzIGJhc2VkIG9uIEd1bidzIGxvZ2ljXG4gICAgICAgIGlmIChMZXhpY2FsKHVwZGF0ZWRWYWwpIDw9IExleGljYWwoZXhpc3RpbmdWYWwpKSByZXR1cm4gdXBkYXRlZDtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZXNba2V5XSA9IHVwZGF0ZWRba2V5XTtcbiAgICAgIHJldHVybiB1cGRhdGVzO1xuICAgIH0sIHt9KSxcbiAgICBSLmtleXNcbiAgKSh1cGRhdGVkU3RhdGUpO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2hhaW5JbnRlcmZhY2UgfSBmcm9tIFwiLi9jaGFpblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWNlaXZlciB9IGZyb20gXCIuL2NvcmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGVkdXBsaWNhdGVNZXNzYWdlcyB9IGZyb20gXCIuL2RlZHVwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFsbG93TGVlY2ggfSBmcm9tIFwiLi9sZWVjaFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWxheU1lc3NhZ2VzIH0gZnJvbSBcIi4vcmVsYXlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2x1c3RlciB9IGZyb20gXCIuL2NsdXN0ZXJcIjtcbmltcG9ydCAqIGFzIHdlYnNvY2tldCBmcm9tIFwiLi93ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IHdlYnNvY2tldFRyYW5zcG9ydCA9IHdlYnNvY2tldDtcbiIsImltcG9ydCB7IHBhdGgsIGtleXMgfSBmcm9tIFwicmFtZGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgaWYgKCFtc2cuZnJvbSB8fCAhbXNnLmZyb20uc2V0KSByZXR1cm4gbXNnO1xuICAgIGlmIChwYXRoKFtcImpzb25cIiwgXCJsZWVjaFwiXSwgbXNnKSkge1xuICAgICAgbXNnLmZyb20uc2V0KFtcImlzTGVlY2hpbmdcIl0sIHRydWUpO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgYXNraW5nRm9yID0gcGF0aChbXCJqc29uXCIsIFwiZ2V0XCIsIFwiI1wiXSwgbXNnKTtcblxuICAgIFthc2tpbmdGb3IsIC4uLmtleXMocGF0aChbXCJqc29uXCIsIFwicHV0XCJdLCBtc2cpKV0uZm9yRWFjaChcbiAgICAgIHNvdWwgPT4gc291bCAmJiBtc2cuZnJvbS5zZXQoW1wiaGFzQXNrZWRGb3JcIiwgc291bF0sIHRydWUpXG4gICAgKTtcbiAgICByZXR1cm4gbXNnO1xuICB9KTtcblxuICBkYi5vbk91dChtc2cgPT4ge1xuICAgIGNvbnN0IHsgdG8sIGpzb24sIGlnbm9yZUxlZWNoaW5nIH0gPSBtc2c7XG5cbiAgICBpZiAoIXRvLmdldChbXCJpc0xlZWNoaW5nXCJdKSB8fCBpZ25vcmVMZWVjaGluZykgcmV0dXJuIG1zZztcbiAgICBjb25zdCBhc2tlZFB1dHMgPSBrZXlzKGpzb24ucHV0KS5maWx0ZXIoc291bCA9PiB7XG4gICAgICBpZiAoIXRvLmdldChbXCJoYXNBc2tlZEZvclwiLCBzb3VsXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IHNvdWxEZWx0YXMgPSBwYXRoKFtzb3VsLCBcIl9cIiwgXCI+XCJdLCBqc29uLnB1dCk7XG4gICAgICBsZXQgaGFzVXBkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBpZiAoIWtleXMoc291bERlbHRhcykubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcblxuICAgICAga2V5cyhzb3VsRGVsdGFzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGtub3duID0gdG8uZ2V0KFtcImtub3duRGVsdGFzXCIsIHNvdWwsIGtleV0pIHx8IDA7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gcGFyc2VGbG9hdChzb3VsRGVsdGFzW2tleV0pIHx8IDA7XG5cbiAgICAgICAgaWYgKGtub3duICYmIGRlbHRhIDw9IGtub3duKSByZXR1cm47XG4gICAgICAgIHRvLnNldChbXCJrbm93bkRlbHRhc1wiLCBzb3VsLCBrZXldLCBkZWx0YSk7XG4gICAgICAgIGhhc1VwZGF0ZXMgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGFzVXBkYXRlcztcbiAgICB9KTtcblxuICAgIGlmIChhc2tlZFB1dHMubGVuZ3RoKSByZXR1cm4gbXNnO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIHJldHVybiBkYjtcbn07XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gXCJyYW1kYVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRiID0+IHtcbiAgZGIub25Jbihtc2cgPT4ge1xuICAgIGNvbnN0IHsgZnJvbSwgbm9SZWxheSB9ID0gbXNnO1xuXG4gICAgaWYgKG5vUmVsYXkpIHJldHVybiBtc2c7XG4gICAgUi53aXRob3V0KFtmcm9tXSwgZGIuY29ubmVjdGlvbnMpLmZvckVhY2goYyA9PlxuICAgICAgYy5zZW5kKFIuYXNzb2MoXCJza2lwVmFsaWRhdGlvblwiLCB0cnVlLCBtc2cpKVxuICAgICk7XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG4gIHJldHVybiBkYjtcbn07XG4iLCJpbXBvcnQgeyBjdXJyeSB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IFdTIGZyb20gXCJ3c1wiO1xuaW1wb3J0IFJlY29ubmVjdGluZ1dlYlNvY2tldCBmcm9tIFwicmVjb25uZWN0aW5nLXdlYnNvY2tldFwiO1xuXG5jb25zdCBQSU5HID0gNjAwMDA7XG5cbmNvbnN0IHdzQ29ubmVjdGlvbiA9IGN1cnJ5KChkYiwgd3MpID0+IHtcbiAgbGV0IGhhc0xvZ2dlZEVyciA9IGZhbHNlO1xuICBsZXQgY29ubmVjdGVkID0gdHJ1ZTtcblxuICBjb25zdCBjb25uZWN0aW9uID0gZGIuY29ubmVjdGVkKG1zZyA9PiB7XG4gICAgaWYgKCFtc2cgfHwgIShtc2cuanNvbiB8fCBtc2cucmF3KSB8fCAhY29ubmVjdGVkKSByZXR1cm47XG4gICAgY29uc3QgcmF3ID0gbXNnLnJhdyB8fCBkYi5zdHJpbmdpZnkobXNnLmpzb24pO1xuXG4gICAgd3Muc2VuZChyYXcsIGVyciA9PiB7XG4gICAgICBpZiAoIWVyciB8fCBoYXNMb2dnZWRFcnIpIHJldHVybjtcbiAgICAgIGNvbnNvbGUud2FybihcIndzIHNlbmQgZXJyXCIsIGVycik7XG4gICAgICBoYXNMb2dnZWRFcnIgPSB0cnVlO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBwaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcbiAgICAoKSA9PiBjb25uZWN0aW9uLnNlbmQoeyBqc29uOiBbXSwgc2tpcFZhbGlkYXRpb246IHRydWUgfSksXG4gICAgUElOR1xuICApO1xuXG4gIGNvbnN0IHJlY2VpdmUgPSBtc2cgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByYXcgPSBtc2cuZGF0YSB8fCBtc2c7XG4gICAgICBjb25zdCBqc29uID0gdHlwZW9mIHJhdyA9PT0gXCJzdHJpbmdcIiA/IEpTT04ucGFyc2UocmF3KSA6IHJhdztcblxuICAgICAgQXJyYXkuaXNBcnJheShqc29uKVxuICAgICAgICA/IGpzb24uZm9yRWFjaChyZWNlaXZlKVxuICAgICAgICA6IGNvbm5lY3Rpb24ucmVjZWl2ZSh7IGpzb24sIHJhdyB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUkVDRUlWRVIgaW52YWxpZCB3cyBtc2dcIiwgZSwgbXNnLmRhdGEgfHwgbXNnKTtcbiAgICB9XG4gIH07XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsICgpID0+IHtcbiAgICBpZiAod3MucmVjb25uZWN0KSByZXR1cm47XG4gICAgY29ubmVjdGVkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbChwaW5nSW50ZXJ2YWwpO1xuICAgIGRiLmRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKTtcbiAgfSk7XG5cbiAgd3MuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgcmVjZWl2ZSk7XG4gIHJldHVybiBjb25uZWN0aW9uO1xufSk7XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBjdXJyeSgoeyB3ZWIsIHBvcnQgfSwgZGIpID0+IHtcbiAgbmV3IFdTLlNlcnZlcih7IHBvcnQ6ICF3ZWIgPyBwb3J0IDogdW5kZWZpbmVkLCBzZXJ2ZXI6IHdlYiB9KS5vbihcbiAgICBcImNvbm5lY3Rpb25cIixcbiAgICB3c0Nvbm5lY3Rpb24oZGIpXG4gICk7XG4gIHJldHVybiBkYjtcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gY3VycnkoKHVybCwgZGIpID0+IHtcbiAgY29uc3Qgd3MgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCwgW10sIHsgV2ViU29ja2V0OiBXUyB9KTtcblxuICB3cy5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCAoKSA9PiB3c0Nvbm5lY3Rpb24oZGIsIHdzKSk7XG4gIHJldHVybiBkYjtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3BtMl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV91dWlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX187Il0sInNvdXJjZVJvb3QiOiIifQ==