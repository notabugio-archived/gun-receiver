(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("flat"), require("ramda"), require("redis"), require("uuid"), require("ws"));
	else if(typeof define === 'function' && define.amd)
		define("gun-receiver", ["flat", "ramda", "redis", "uuid", "ws"], factory);
	else if(typeof exports === 'object')
		exports["gun-receiver"] = factory(require("flat"), require("ramda"), require("redis"), require("uuid"), require("ws"));
	else
		root["gun-receiver"] = factory(root["flat"], root["ramda"], root["redis"], root["uuid"], root["ws"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_flat__, __WEBPACK_EXTERNAL_MODULE_ramda__, __WEBPACK_EXTERNAL_MODULE_redis__, __WEBPACK_EXTERNAL_MODULE_uuid__, __WEBPACK_EXTERNAL_MODULE_ws__) {
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
    set: set
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
exports.websocketTransport = exports.redisBackend = void 0;

var _chain = _interopRequireDefault(__webpack_require__(/*! ./chain */ "./src/chain.js"));

var _conflicts = _interopRequireDefault(__webpack_require__(/*! ./conflicts */ "./src/conflicts.js"));

var _core = _interopRequireDefault(__webpack_require__(/*! ./core */ "./src/core.js"));

var _dedup = _interopRequireDefault(__webpack_require__(/*! ./dedup */ "./src/dedup.js"));

var _leech = _interopRequireDefault(__webpack_require__(/*! ./leech */ "./src/leech.js"));

var redis = _interopRequireWildcard(__webpack_require__(/*! ./redis */ "./src/redis.js"));

var _relay = _interopRequireDefault(__webpack_require__(/*! ./relay */ "./src/relay.js"));

var websocket = _interopRequireWildcard(__webpack_require__(/*! ./websocket */ "./src/websocket.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redisBackend = redis;
exports.redisBackend = redisBackend;
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

/***/ "./src/redis.js":
/*!**********************!*\
  !*** ./src/redis.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.respondToGets = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var uuid = __webpack_require__(/*! uuid */ "uuid");

var flatten = __webpack_require__(/*! flat */ "flat");

var FIELD_SIZE_LIMIT = 100000;

var unfuck = function unfuck(obj) {
  // This is probably only necessary if you are stupid like me and use the default . delimiter for flatten
  if (!obj) return obj;
  var arrow = obj._ && obj._[">"] || {};
  (0, _ramda.keys)(arrow).forEach(function (key) {
    var value = arrow[key];

    if (_typeof(value) === "object") {
      var valKeys = (0, _ramda.keys)(value);
      var remainder = valKeys[0];

      if (remainder) {
        var realKey = [key, valKeys].join(".");
        var realValue = value[remainder];
        delete arrow[key];
        arrow[realKey] = realValue;
        realValue = obj[key] && obj[key][remainder] || null;
        delete obj[key];
        obj[realKey] = realValue;
      }
    }
  });
  (0, _ramda.keys)(obj).forEach(function (key) {
    if (key[0] === ".") delete [key];
  });
  return obj;
};

function fromRedis(obj) {
  if (!obj) return obj;
  var sorted = {};
  Object.keys(obj).forEach(function (key) {
    if (key[0] === ".") delete obj[key];

    if (obj[key] === "|NULL|") {
      obj[key] = null;
    }

    if (obj[key] === "|UNDEFINED|") {
      obj[key] = undefined;
    }

    if (/>\./.test(key)) {
      obj[key] = parseFloat(obj[key], 10) || obj[key];
    }

    if (obj[key] && obj[key].length > FIELD_SIZE_LIMIT) {
      obj[key] = obj[key].slice(0, FIELD_SIZE_LIMIT);
      console.log("truncated", key);
    }
  });
  obj = unfuck(flatten.unflatten(obj));
  Object.keys(obj).sort().forEach(function (key) {
    return sorted[key] = obj[key];
  });
  return sorted;
}

var respondToGets = function respondToGets(db) {
  var redis = __webpack_require__(/*! redis */ "redis").createClient();

  var readFullNode = function readFullNode(soul) {
    return new Promise(function (resolve, reject) {
      if (!soul) return resolve(null);
      return redis.hgetall(soul, function (err, res) {
        if (err) {
          console.error("get error", err);
          reject(err);
        } else {
          var data = fromRedis(res);
          resolve(data);
        }
      });
    });
  };

  db.onIn(function (msg) {
    var from = msg.from,
        json = msg.json;
    var soul = (0, _ramda.path)(["get", "#"], json);
    var dedupId = (0, _ramda.prop)("#", json);
    if (!soul) return msg;
    return readFullNode(soul).then(function (result) {
      var json = {
        "#": uuid.v4(),
        "@": dedupId,
        put: _defineProperty({}, soul, result || undefined)
      }; // Skip validation to avoid losing undefined when no result

      from.send({
        json: json,
        ignoreLeeching: true,
        skipValidation: !result
      });
      if (!result) return msg; // allow next handler
      // Pass through oracle queries

      return soul.indexOf("@~") === -1 ? null : msg;
    });
  });
  return db;
};

exports.respondToGets = respondToGets;

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
exports.server = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

var PING = 60000;
var server = (0, _ramda.curry)(function (_ref, db) {
  var web = _ref.web,
      port = _ref.port;
  new (__webpack_require__(/*! ws */ "ws").Server)({
    port: !web ? port : undefined,
    server: web
  }).on("connection", function (ws) {
    var connected = true;
    var hasLoggedErr = false;
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

    var receive = function receive(raw) {
      try {
        var json = JSON.parse(raw);
        Array.isArray(json) ? json.forEach(receive) : connection.receive({
          json: json
        });
      } catch (e) {
        console.error("PISTOL invalid ws msg", e);
      }
    };

    ws.on("message", receive);
    ws.on("close", function () {
      connected = false;
      clearInterval(pingInterval);
      db.disconnected(connection);
    });
  });
  return db;
});
exports.server = server;

/***/ }),

/***/ "flat":
/*!***********************!*\
  !*** external "flat" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_flat__;

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ramda__;

/***/ }),

/***/ "redis":
/*!************************!*\
  !*** external "redis" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_redis__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2d1bi1yZWNlaXZlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY2hhaW4uanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL2NvbmZsaWN0cy5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvZGVkdXAuanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy9sZWVjaC5qcyIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvLi9zcmMvcmVkaXMuanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyLy4vc3JjL3JlbGF5LmpzIiwid2VicGFjazovL2d1bi1yZWNlaXZlci8uL3NyYy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyL2V4dGVybmFsIFwiZmxhdFwiIiwid2VicGFjazovL2d1bi1yZWNlaXZlci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyL2V4dGVybmFsIFwicmVkaXNcIiIsIndlYnBhY2s6Ly9ndW4tcmVjZWl2ZXIvZXh0ZXJuYWwgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vZ3VuLXJlY2VpdmVyL2V4dGVybmFsIFwid3NcIiJdLCJuYW1lcyI6WyJkYiIsImdldFBhdGgiLCJrZXlMaXN0Iiwib3B0cyIsInRoaXNDaGFpbiIsIm9uIiwiZm4iLCJ2YWx1ZSIsImdldFZhbHVlIiwiaGFzUmVzcG9uc2UiLCJib3VuZCIsImJpbmQiLCJyZWNlaXZlZCIsInZhbCIsInJlcXVlc3RlZCIsImdyYXBoIiwiY29ubmVjdGlvbiIsImNvbm5lY3RlZCIsIm1zZyIsImpzb24iLCJmb3JFYWNoIiwic291bCIsIm5vZGUiLCJuZXh0VmFsdWUiLCJnZXROb2RlIiwicmVjZWl2ZSIsImdldCIsInNraXBWYWxpZGF0aW9uIiwia2wiLCJsYXN0S2V5IiwibGVuZ3RoIiwicGFyZW50VmFsdWUiLCJzbGljZSIsInVuZGVmaW5lZCIsImxlZWNoIiwiZGlzY29ubmVjdGVkIiwidGhlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwidW5zdWJzY3JpYmUiLCJvbmNlIiwia2V5Iiwib25JbiIsInVwZGF0ZWRWZWN0b3JzIiwicHV0S2V5cyIsImFsbCIsIm1hcCIsInB1dFZlY3RvcnMiLCJub1JlbGF5Iiwia25vd25WZWN0b3JzIiwicHVzaCIsInByb2Nlc3NRdWV1ZSIsImZucyIsInF1ZXVlIiwiZGVxdWV1ZSIsImV4ZWN1dGUiLCJyZW1haW5pbmdGbnMiLCJyZXZlcnNlIiwiZXhlY3V0ZU5leHQiLCJwb3AiLCJlIiwicmVqZWN0IiwicGlzdG9sQ29ubmVjdGlvbiIsInNlbmRGbiIsInNlbmQiLCJzdGF0ZSIsImhhc1JlcG9ydGVkRXJyb3IiLCJwIiwic2V0IiwidiIsInByb2Nlc3NPdXQiLCJ0byIsInIiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXQiLCJwcmVzZXJ2ZWQiLCJwcm9jZXNzSW4iLCJ2NCIsImZyb20iLCJSZWNlaXZlciIsInBlZXIiLCJjb25uZWN0aW9ucyIsIm9uT3V0IiwiY29ubmVjdGlvbklkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJNQVhfTVNHX0lEX0NBQ0hFIiwicmVjZWl2ZWRJZHMiLCJjb2xsZWN0R2FyYmFnZSIsImlkcyIsIk9iamVjdCIsImtleXMiLCJpZCIsInJlZGlzQmFja2VuZCIsInJlZGlzIiwid2Vic29ja2V0VHJhbnNwb3J0Iiwid2Vic29ja2V0IiwiYXNraW5nRm9yIiwiaWdub3JlTGVlY2hpbmciLCJhc2tlZFB1dHMiLCJmaWx0ZXIiLCJzb3VsRGVsdGFzIiwiaGFzVXBkYXRlcyIsImtub3duIiwiZGVsdGEiLCJwYXJzZUZsb2F0IiwidXVpZCIsInJlcXVpcmUiLCJmbGF0dGVuIiwiRklFTERfU0laRV9MSU1JVCIsInVuZnVjayIsIm9iaiIsImFycm93IiwiXyIsInZhbEtleXMiLCJyZW1haW5kZXIiLCJyZWFsS2V5Iiwiam9pbiIsInJlYWxWYWx1ZSIsImZyb21SZWRpcyIsInNvcnRlZCIsInRlc3QiLCJsb2ciLCJ1bmZsYXR0ZW4iLCJzb3J0IiwicmVzcG9uZFRvR2V0cyIsImNyZWF0ZUNsaWVudCIsInJlYWRGdWxsTm9kZSIsImhnZXRhbGwiLCJyZXMiLCJkYXRhIiwiZGVkdXBJZCIsInJlc3VsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjIiwiUElORyIsInNlcnZlciIsIndlYiIsInBvcnQiLCJTZXJ2ZXIiLCJ3cyIsImhhc0xvZ2dlZEVyciIsIndhcm4iLCJwaW5nSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInBpbmciLCJyYXciLCJwYXJzZSIsIkFycmF5IiwiaXNBcnJheSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1D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WjtBQUNBMkksbUJBQWEsQ0FBQ1AsWUFBRCxDQUFiO0FBQ0FySixRQUFFLENBQUNtQyxZQUFILENBQWdCbkIsVUFBaEI7QUFDRCxLQUpEO0FBS0QsR0FyQ0g7QUF1Q0EsU0FBT2hCLEVBQVA7QUFDRCxDQXpDcUIsQ0FBZjs7Ozs7Ozs7Ozs7O0FDSFAsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0QiLCJmaWxlIjoiZ3VuLXJlY2VpdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZmxhdFwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicmVkaXNcIiksIHJlcXVpcmUoXCJ1dWlkXCIpLCByZXF1aXJlKFwid3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJndW4tcmVjZWl2ZXJcIiwgW1wiZmxhdFwiLCBcInJhbWRhXCIsIFwicmVkaXNcIiwgXCJ1dWlkXCIsIFwid3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3VuLXJlY2VpdmVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZmxhdFwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicmVkaXNcIiksIHJlcXVpcmUoXCJ1dWlkXCIpLCByZXF1aXJlKFwid3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImd1bi1yZWNlaXZlclwiXSA9IGZhY3Rvcnkocm9vdFtcImZsYXRcIl0sIHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInJlZGlzXCJdLCByb290W1widXVpZFwiXSwgcm9vdFtcIndzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZsYXRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlZGlzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdXVpZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsgaWRlbnRpdHksIGtleXMsIHByb3AsIHBhdGggfSBmcm9tIFwicmFtZGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBjb25zdCBnZXRQYXRoID0gKGtleUxpc3QsIG9wdHMgPSB7fSkgPT4ge1xuICAgIGxldCB0aGlzQ2hhaW47XG4gICAgY29uc3Qgb24gPSBmbiA9PiB7XG4gICAgICBsZXQgdmFsdWUsIGdldFZhbHVlO1xuICAgICAgbGV0IGhhc1Jlc3BvbnNlID0gZmFsc2U7XG4gICAgICBjb25zdCBib3VuZCA9IGZuLmJpbmQodGhpc0NoYWluKTtcbiAgICAgIGNvbnN0IHJlY2VpdmVkID0gdmFsID0+IChoYXNSZXNwb25zZSA9IHRydWUpICYmIGJvdW5kKCh2YWx1ZSA9IHZhbCkpO1xuICAgICAgY29uc3QgcmVxdWVzdGVkID0ge307XG4gICAgICBjb25zdCBncmFwaCA9IHt9O1xuXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gZGIuY29ubmVjdGVkKG1zZyA9PiB7XG4gICAgICAgIGNvbnN0IHsganNvbiB9ID0gbXNnO1xuXG4gICAgICAgIGtleXMocHJvcChcInB1dFwiLCBqc29uKSkuZm9yRWFjaChzb3VsID0+IHtcbiAgICAgICAgICBpZiAoIXJlcXVlc3RlZFtzb3VsXSkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IG5vZGUgPSBwYXRoKFtcInB1dFwiLCBzb3VsXSwganNvbik7XG5cbiAgICAgICAgICBpZiAoIW5vZGUgJiYgIWhhc1Jlc3BvbnNlKSByZWNlaXZlZCgpO1xuICAgICAgICAgIGlmIChub2RlKSBncmFwaFtzb3VsXSA9IG5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBnZXRWYWx1ZShrZXlMaXN0KTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlICE9PSB2YWx1ZSkgcmVjZWl2ZWQobmV4dFZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBnZXROb2RlID0gc291bCA9PiB7XG4gICAgICAgIGlmIChyZXF1ZXN0ZWRbc291bF0pIHJldHVybiBncmFwaFtzb3VsXTtcbiAgICAgICAgcmVxdWVzdGVkW3NvdWxdID0gdHJ1ZTtcbiAgICAgICAgY29ubmVjdGlvbi5yZWNlaXZlKHtcbiAgICAgICAgICAuLi5vcHRzLFxuICAgICAgICAgIGpzb246IHsgZ2V0OiB7IFwiI1wiOiBzb3VsIH0gfSxcbiAgICAgICAgICBza2lwVmFsaWRhdGlvbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyYXBoW3NvdWxdO1xuICAgICAgfTtcblxuICAgICAgZ2V0VmFsdWUgPSBrbCA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RLZXkgPSBrbFtrbC5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoa2wubGVuZ3RoID09PSAxKSByZXR1cm4gZ2V0Tm9kZShsYXN0S2V5KTtcbiAgICAgICAgY29uc3QgcGFyZW50VmFsdWUgPSBnZXRWYWx1ZShrbC5zbGljZSgwLCBrbC5sZW5ndGggLSAxKSk7XG5cbiAgICAgICAgaWYgKCFwYXJlbnRWYWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wKGxhc3RLZXksIHBhcmVudFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWVbXCIjXCJdKSByZXR1cm4gZ2V0Tm9kZSh2YWx1ZVtcIiNcIl0pO1xuICAgICAgICBpZiAoa2wgPT09IGtleUxpc3QpIHJlY2VpdmVkKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcblxuICAgICAgY29ubmVjdGlvbi5yZWNlaXZlKHsganNvbjogeyBsZWVjaDogdHJ1ZSB9IH0pO1xuICAgICAgZ2V0VmFsdWUoa2V5TGlzdCk7XG4gICAgICByZXR1cm4gKCkgPT4gZGIuZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pO1xuICAgIH07XG5cbiAgICBjb25zdCB0aGVuID0gKGZuID0gaWRlbnRpdHkpID0+XG4gICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbih2YWwgPT4ge1xuICAgICAgICAgIHJlc29sdmUodmFsKTtcbiAgICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLnRoZW4oZm4pO1xuXG4gICAgY29uc3Qgb25jZSA9IGZuID0+IHRoZW4oZm4uYmluZCh0aGlzQ2hhaW4pKSAmJiB0aGlzQ2hhaW47XG4gICAgY29uc3QgZ2V0ID0gKGtleSwgb3B0cyA9IHt9KSA9PiBnZXRQYXRoKFsuLi5rZXlMaXN0LCBrZXldLCBvcHRzKTtcblxuICAgIHRoaXNDaGFpbiA9IHsgZ2V0LCBvbiwgdGhlbiwgb25jZSB9O1xuICAgIHJldHVybiB0aGlzQ2hhaW47XG4gIH07XG5cbiAgZGIuZ2V0ID0gKGtleSwgb3B0cyA9IHt9KSA9PiBnZXRQYXRoKFtrZXldLCBvcHRzKTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsga2V5cywgcHJvcCwgcGF0aCB9IGZyb20gXCJyYW1kYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkYiA9PiB7XG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCB7IGpzb24gfSA9IG1zZztcbiAgICBjb25zdCB1cGRhdGVkVmVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IHB1dEtleXMgPSBrZXlzKHByb3AoXCJwdXRcIiwganNvbikpO1xuXG4gICAgaWYgKCFwdXRLZXlzLmxlbmd0aCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtc2cpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgIHB1dEtleXMubWFwKHNvdWwgPT4ge1xuICAgICAgICBjb25zdCBwdXRWZWN0b3JzID0gcGF0aChbXCJwdXRcIiwgc291bCwgXCJfXCIsIFwiPlwiXSwganNvbikgfHwge307XG5cbiAgICAgICAgcmV0dXJuIGRiLmdldChzb3VsLCB7IG5vUmVsYXk6IHRydWUgfSkudGhlbihub2RlID0+IHtcbiAgICAgICAgICBjb25zdCBrbm93blZlY3RvcnMgPSBwYXRoKFtcIl9cIiwgXCI+XCJdLCBub2RlKSB8fCB7fTtcblxuICAgICAgICAgIGtleXMocHV0VmVjdG9ycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGtub3duVmVjdG9yc1trZXldICYmIGtub3duVmVjdG9yc1trZXldID4gcHV0VmVjdG9yc1trZXldKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZWRWZWN0b3JzLnB1c2gocHV0VmVjdG9yc1trZXldKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICkudGhlbigoKSA9PiAodXBkYXRlZFZlY3RvcnMubGVuZ3RoIHx8IGpzb24uZ2V0ID8gbXNnIDogbnVsbCkpO1xuICB9KTtcbiAgcmV0dXJuIGRiO1xufTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsgYXNzb2NQYXRoLCBwYXRoLCB3aXRob3V0IH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgdXVpZCBmcm9tIFwidXVpZFwiO1xuXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUoKSB7XG4gIGxldCBmbnMgPSBbXTtcbiAgY29uc3QgcXVldWUgPSBmbiA9PiBmbnMucHVzaChmbik7XG4gIGNvbnN0IGRlcXVldWUgPSBmbiA9PiAoZm5zID0gd2l0aG91dChbZm5dLCBmbnMpKTtcblxuICBmdW5jdGlvbiBleGVjdXRlKG1zZykge1xuICAgIGNvbnN0IHJlbWFpbmluZ0ZucyA9IGZucy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICBjb25zdCBleGVjdXRlTmV4dCA9IG1zZyA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmbiA9IHJlbWFpbmluZ0Zucy5wb3AoKTtcblxuICAgICAgICBpZiAobXNnICYmIGZuKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZuKG1zZykpLnRoZW4oZXhlY3V0ZU5leHQpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1zZyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4ZWN1dGVOZXh0KG1zZyk7XG4gIH1cblxuICByZXR1cm4gW3F1ZXVlLCBleGVjdXRlLCBkZXF1ZXVlXTtcbn1cblxuZnVuY3Rpb24gcGlzdG9sQ29ubmVjdGlvbih7IGRiLCBzZW5kOiBzZW5kRm4gfSkge1xuICBsZXQgY29ubmVjdGlvbjtcbiAgbGV0IHN0YXRlID0ge307XG4gIGxldCBoYXNSZXBvcnRlZEVycm9yID0gZmFsc2U7XG4gIGNvbnN0IGdldCA9IHAgPT4gcGF0aChwLCBzdGF0ZSk7XG4gIGNvbnN0IHNldCA9IChwLCB2KSA9PiAoc3RhdGUgPSBhc3NvY1BhdGgocCwgdiwgc3RhdGUpKTsgLy8gJiYgY29uc29sZS5sb2coc3RhdGUpO1xuICBjb25zdCBzZW5kID0gbXNnID0+XG4gICAgZGJcbiAgICAgIC5wcm9jZXNzT3V0KHsgLi4ubXNnLCB0bzogY29ubmVjdGlvbiB9KVxuICAgICAgLnRoZW4ociA9PiByICYmIHNlbmRGbihyKSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBpZiAoIWhhc1JlcG9ydGVkRXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJQSVNUT0wgc2VuZCBlcnJcIixcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KG1zZywgbnVsbCwgMiksXG4gICAgICAgICAgICBtc2cuanNvbi5wdXQsXG4gICAgICAgICAgICBlcnJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGhhc1JlcG9ydGVkRXJyb3IgPSB0cnVlO1xuICAgICAgfSk7XG4gIGNvbnN0IHJlY2VpdmUgPSAoeyBqc29uLCAuLi5vcHRzIH0pID0+IHtcbiAgICBjb25zdCBwcmVzZXJ2ZWQgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKTtcblxuICAgIHJldHVybiBkYlxuICAgICAgLnByb2Nlc3NJbih7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIGRiLFxuICAgICAgICBqc29uOiB7IC4uLmpzb24sIFwiI1wiOiBqc29uW1wiI1wiXSB8fCB1dWlkLnY0KCkgfSxcbiAgICAgICAgZnJvbTogY29ubmVjdGlvblxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihcIlBJU1RPTCByZWNlaXZlIGVyclwiLCBlcnIsIHByZXNlcnZlZCkpO1xuICB9O1xuXG4gIGNvbm5lY3Rpb24gPSB7IHNlbmQsIHJlY2VpdmUsIGdldCwgc2V0IH07XG4gIHJldHVybiBjb25uZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNlaXZlcigpIHtcbiAgbGV0IHBlZXI7XG4gIGNvbnN0IGNvbm5lY3Rpb25zID0gW107XG4gIGNvbnN0IFtvbkluLCBwcm9jZXNzSW5dID0gcHJvY2Vzc1F1ZXVlKCk7XG4gIGNvbnN0IFtvbk91dCwgcHJvY2Vzc091dF0gPSBwcm9jZXNzUXVldWUoKTtcblxuICBmdW5jdGlvbiBjb25uZWN0ZWQoc2VuZCkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBwaXN0b2xDb25uZWN0aW9uKHsgZGI6IHBlZXIsIHNlbmQgfSk7XG5cbiAgICBjb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pO1xuICAgIHJldHVybiBjb25uZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzY29ubmVjdGVkKGNvbm5lY3Rpb24pIHtcbiAgICBjb25zdCBjb25uZWN0aW9uSWR4ID0gY29ubmVjdGlvbnMuaW5kZXhPZihjb25uZWN0aW9uKTtcblxuICAgIGlmIChjb25uZWN0aW9uSWR4ICE9PSAtMSkgY29ubmVjdGlvbnMuc3BsaWNlKGNvbm5lY3Rpb25JZHgsIDEpO1xuICB9XG5cbiAgcGVlciA9IHtcbiAgICBjb25uZWN0aW9ucyxcbiAgICBjb25uZWN0ZWQsXG4gICAgZGlzY29ubmVjdGVkLFxuICAgIG9uSW4sXG4gICAgb25PdXQsXG4gICAgcHJvY2Vzc0luLFxuICAgIHByb2Nlc3NPdXRcbiAgfTtcbiAgcmV0dXJuIHBlZXI7XG59XG4iLCJpbXBvcnQgeyBwYXRoIH0gZnJvbSBcInJhbWRhXCI7XG5jb25zdCBNQVhfTVNHX0lEX0NBQ0hFID0gMTAwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGRiID0+IHtcbiAgY29uc3QgcmVjZWl2ZWRJZHMgPSB7fTtcblxuICBmdW5jdGlvbiBjb2xsZWN0R2FyYmFnZSgpIHtcbiAgICBsZXQgaWRzO1xuXG4gICAgd2hpbGUgKChpZHMgPSBPYmplY3Qua2V5cyhyZWNlaXZlZElkcykpLmxlbmd0aCA+IE1BWF9NU0dfSURfQ0FDSEUpIHtcbiAgICAgIGRlbGV0ZSByZWNlaXZlZElkc1tpZHNbMF1dO1xuICAgIH1cbiAgfVxuXG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCBpZCA9IHBhdGgoW1wianNvblwiLCBcIiNcIl0sIG1zZyk7XG5cbiAgICBpZiAoIWlkIHx8IGlkIGluIHJlY2VpdmVkSWRzKSByZXR1cm4gbnVsbDtcbiAgICByZWNlaXZlZElkc1tpZF0gPSB0cnVlO1xuICAgIGNvbGxlY3RHYXJiYWdlKCk7XG4gICAgcmV0dXJuIG1zZztcbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2hhaW5JbnRlcmZhY2UgfSBmcm9tIFwiLi9jaGFpblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcmV2ZW50Q29uZmxpY3RzIH0gZnJvbSBcIi4vY29uZmxpY3RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlY2VpdmVyIH0gZnJvbSBcIi4vY29yZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWR1cGxpY2F0ZU1lc3NhZ2VzIH0gZnJvbSBcIi4vZGVkdXBcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWxsb3dMZWVjaCB9IGZyb20gXCIuL2xlZWNoXCI7XG5pbXBvcnQgKiBhcyByZWRpcyBmcm9tIFwiLi9yZWRpc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWxheU1lc3NhZ2VzIH0gZnJvbSBcIi4vcmVsYXlcIjtcbmltcG9ydCAqIGFzIHdlYnNvY2tldCBmcm9tIFwiLi93ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGNvbnN0IHJlZGlzQmFja2VuZCA9IHJlZGlzO1xuZXhwb3J0IGNvbnN0IHdlYnNvY2tldFRyYW5zcG9ydCA9IHdlYnNvY2tldDtcbiIsImltcG9ydCB7IHBhdGgsIGtleXMgfSBmcm9tIFwicmFtZGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGIgPT4ge1xuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgaWYgKHBhdGgoW1wianNvblwiLCBcImxlZWNoXCJdLCBtc2cpKSB7XG4gICAgICBtc2cuZnJvbS5zZXQoW1wiaXNMZWVjaGluZ1wiXSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBhc2tpbmdGb3IgPSBwYXRoKFtcImpzb25cIiwgXCJnZXRcIiwgXCIjXCJdLCBtc2cpO1xuXG4gICAgW2Fza2luZ0ZvciwgLi4ua2V5cyhwYXRoKFtcImpzb25cIiwgXCJwdXRcIl0sIG1zZykpXS5mb3JFYWNoKFxuICAgICAgc291bCA9PiBzb3VsICYmIG1zZy5mcm9tLnNldChbXCJoYXNBc2tlZEZvclwiLCBzb3VsXSwgdHJ1ZSlcbiAgICApO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuXG4gIGRiLm9uT3V0KG1zZyA9PiB7XG4gICAgY29uc3QgeyB0bywganNvbiwgaWdub3JlTGVlY2hpbmcgfSA9IG1zZztcblxuICAgIGlmICghdG8uZ2V0KFtcImlzTGVlY2hpbmdcIl0pIHx8IGlnbm9yZUxlZWNoaW5nKSByZXR1cm4gbXNnO1xuICAgIGNvbnN0IGFza2VkUHV0cyA9IGtleXMoanNvbi5wdXQpLmZpbHRlcihzb3VsID0+IHtcbiAgICAgIGlmICghdG8uZ2V0KFtcImhhc0Fza2VkRm9yXCIsIHNvdWxdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3Qgc291bERlbHRhcyA9IHBhdGgoW3NvdWwsIFwiX1wiLCBcIj5cIl0sIGpzb24ucHV0KTtcbiAgICAgIGxldCBoYXNVcGRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGlmICgha2V5cyhzb3VsRGVsdGFzKS5sZW5ndGgpIHJldHVybiB0cnVlO1xuXG4gICAgICBrZXlzKHNvdWxEZWx0YXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3Qga25vd24gPSB0by5nZXQoW1wia25vd25EZWx0YXNcIiwgc291bCwga2V5XSkgfHwgMDtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBwYXJzZUZsb2F0KHNvdWxEZWx0YXNba2V5XSkgfHwgMDtcblxuICAgICAgICBpZiAoa25vd24gJiYgZGVsdGEgPD0ga25vd24pIHJldHVybjtcbiAgICAgICAgdG8uc2V0KFtcImtub3duRGVsdGFzXCIsIHNvdWwsIGtleV0sIGRlbHRhKTtcbiAgICAgICAgaGFzVXBkYXRlcyA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoYXNVcGRhdGVzO1xuICAgIH0pO1xuXG4gICAgaWYgKGFza2VkUHV0cy5sZW5ndGgpIHJldHVybiBtc2c7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsga2V5cywgcGF0aCwgcHJvcCB9IGZyb20gXCJyYW1kYVwiO1xuY29uc3QgdXVpZCA9IHJlcXVpcmUoXCJ1dWlkXCIpO1xuY29uc3QgZmxhdHRlbiA9IHJlcXVpcmUoXCJmbGF0XCIpO1xuXG5jb25zdCBGSUVMRF9TSVpFX0xJTUlUID0gMTAwMDAwO1xuXG5jb25zdCB1bmZ1Y2sgPSBvYmogPT4ge1xuICAvLyBUaGlzIGlzIHByb2JhYmx5IG9ubHkgbmVjZXNzYXJ5IGlmIHlvdSBhcmUgc3R1cGlkIGxpa2UgbWUgYW5kIHVzZSB0aGUgZGVmYXVsdCAuIGRlbGltaXRlciBmb3IgZmxhdHRlblxuICBpZiAoIW9iaikgcmV0dXJuIG9iajtcbiAgbGV0IGFycm93ID0gKG9iai5fICYmIG9iai5fW1wiPlwiXSkgfHwge307XG5cbiAga2V5cyhhcnJvdykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBsZXQgdmFsdWUgPSBhcnJvd1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbGV0IHZhbEtleXMgPSBrZXlzKHZhbHVlKTtcbiAgICAgIGxldCByZW1haW5kZXIgPSB2YWxLZXlzWzBdO1xuXG4gICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgIGxldCByZWFsS2V5ID0gW2tleSwgdmFsS2V5c10uam9pbihcIi5cIik7XG4gICAgICAgIGxldCByZWFsVmFsdWUgPSB2YWx1ZVtyZW1haW5kZXJdO1xuXG4gICAgICAgIGRlbGV0ZSBhcnJvd1trZXldO1xuICAgICAgICBhcnJvd1tyZWFsS2V5XSA9IHJlYWxWYWx1ZTtcbiAgICAgICAgcmVhbFZhbHVlID0gKG9ialtrZXldICYmIG9ialtrZXldW3JlbWFpbmRlcl0pIHx8IG51bGw7XG4gICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgICAgb2JqW3JlYWxLZXldID0gcmVhbFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGtleVswXSA9PT0gXCIuXCIpIGRlbGV0ZSBba2V5XTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59O1xuXG5mdW5jdGlvbiBmcm9tUmVkaXMob2JqKSB7XG4gIGlmICghb2JqKSByZXR1cm4gb2JqO1xuICBjb25zdCBzb3J0ZWQgPSB7fTtcblxuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGtleVswXSA9PT0gXCIuXCIpIGRlbGV0ZSBvYmpba2V5XTtcblxuICAgIGlmIChvYmpba2V5XSA9PT0gXCJ8TlVMTHxcIikge1xuICAgICAgb2JqW2tleV0gPSBudWxsO1xuICAgIH1cbiAgICBpZiAob2JqW2tleV0gPT09IFwifFVOREVGSU5FRHxcIikge1xuICAgICAgb2JqW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKC8+XFwuLy50ZXN0KGtleSkpIHtcbiAgICAgIG9ialtrZXldID0gcGFyc2VGbG9hdChvYmpba2V5XSwgMTApIHx8IG9ialtrZXldO1xuICAgIH1cbiAgICBpZiAob2JqW2tleV0gJiYgb2JqW2tleV0ubGVuZ3RoID4gRklFTERfU0laRV9MSU1JVCkge1xuICAgICAgb2JqW2tleV0gPSBvYmpba2V5XS5zbGljZSgwLCBGSUVMRF9TSVpFX0xJTUlUKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidHJ1bmNhdGVkXCIsIGtleSk7XG4gICAgfVxuICB9KTtcblxuICBvYmogPSB1bmZ1Y2soZmxhdHRlbi51bmZsYXR0ZW4ob2JqKSk7XG5cbiAgT2JqZWN0LmtleXMob2JqKVxuICAgIC5zb3J0KClcbiAgICAuZm9yRWFjaChrZXkgPT4gKHNvcnRlZFtrZXldID0gb2JqW2tleV0pKTtcblxuICByZXR1cm4gc29ydGVkO1xufVxuXG5leHBvcnQgY29uc3QgcmVzcG9uZFRvR2V0cyA9IGRiID0+IHtcbiAgY29uc3QgcmVkaXMgPSByZXF1aXJlKFwicmVkaXNcIikuY3JlYXRlQ2xpZW50KCk7XG5cbiAgY29uc3QgcmVhZEZ1bGxOb2RlID0gc291bCA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghc291bCkgcmV0dXJuIHJlc29sdmUobnVsbCk7XG4gICAgICByZXR1cm4gcmVkaXMuaGdldGFsbChzb3VsLCBmdW5jdGlvbihlcnIsIHJlcykge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcImdldCBlcnJvclwiLCBlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBmcm9tUmVkaXMocmVzKTtcblxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIGRiLm9uSW4obXNnID0+IHtcbiAgICBjb25zdCB7IGZyb20sIGpzb24gfSA9IG1zZztcbiAgICBjb25zdCBzb3VsID0gcGF0aChbXCJnZXRcIiwgXCIjXCJdLCBqc29uKTtcbiAgICBjb25zdCBkZWR1cElkID0gcHJvcChcIiNcIiwganNvbik7XG5cbiAgICBpZiAoIXNvdWwpIHJldHVybiBtc2c7XG4gICAgcmV0dXJuIHJlYWRGdWxsTm9kZShzb3VsKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBcIiNcIjogdXVpZC52NCgpLFxuICAgICAgICBcIkBcIjogZGVkdXBJZCxcbiAgICAgICAgcHV0OiB7IFtzb3VsXTogcmVzdWx0IHx8IHVuZGVmaW5lZCB9XG4gICAgICB9O1xuXG4gICAgICAvLyBTa2lwIHZhbGlkYXRpb24gdG8gYXZvaWQgbG9zaW5nIHVuZGVmaW5lZCB3aGVuIG5vIHJlc3VsdFxuICAgICAgZnJvbS5zZW5kKHsganNvbiwgaWdub3JlTGVlY2hpbmc6IHRydWUsIHNraXBWYWxpZGF0aW9uOiAhcmVzdWx0IH0pO1xuICAgICAgaWYgKCFyZXN1bHQpIHJldHVybiBtc2c7IC8vIGFsbG93IG5leHQgaGFuZGxlclxuICAgICAgLy8gUGFzcyB0aHJvdWdoIG9yYWNsZSBxdWVyaWVzXG4gICAgICByZXR1cm4gc291bC5pbmRleE9mKFwiQH5cIikgPT09IC0xID8gbnVsbCA6IG1zZztcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRiO1xufTtcbiIsImltcG9ydCB7IHdpdGhvdXQgfSBmcm9tIFwicmFtZGFcIjtcbm1vZHVsZS5leHBvcnRzID0gZGIgPT4ge1xuICBkYi5vbkluKG1zZyA9PiB7XG4gICAgY29uc3QgeyBmcm9tLCBqc29uLCBub1JlbGF5IH0gPSBtc2c7XG5cbiAgICBpZiAobm9SZWxheSkgcmV0dXJuIG1zZztcbiAgICB3aXRob3V0KFtmcm9tXSwgZGIuY29ubmVjdGlvbnMpLmZvckVhY2goYyA9PlxuICAgICAgYy5zZW5kKHsgZnJvbSwganNvbiwgc2tpcFZhbGlkYXRpb246IHRydWUgfSlcbiAgICApO1xuICAgIHJldHVybiBtc2c7XG4gIH0pO1xuICByZXR1cm4gZGI7XG59O1xuIiwiaW1wb3J0IHsgY3VycnkgfSBmcm9tIFwicmFtZGFcIjtcbmNvbnN0IFBJTkcgPSA2MDAwMDtcblxuZXhwb3J0IGNvbnN0IHNlcnZlciA9IGN1cnJ5KCh7IHdlYiwgcG9ydCB9LCBkYikgPT4ge1xuICBuZXcgKHJlcXVpcmUoXCJ3c1wiKSkuU2VydmVyKHsgcG9ydDogIXdlYiA/IHBvcnQgOiB1bmRlZmluZWQsIHNlcnZlcjogd2ViIH0pLm9uKFxuICAgIFwiY29ubmVjdGlvblwiLFxuICAgIHdzID0+IHtcbiAgICAgIGxldCBjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgbGV0IGhhc0xvZ2dlZEVyciA9IGZhbHNlO1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGRiLmNvbm5lY3RlZChtc2cgPT4ge1xuICAgICAgICBpZiAoIW1zZyB8fCAhbXNnLmpzb24gfHwgIWNvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgICB3cy5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZy5qc29uKSwgZXJyID0+IHtcbiAgICAgICAgICBpZiAoIWVyciB8fCBoYXNMb2dnZWRFcnIpIHJldHVybjtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJ3cyBzZW5kIGVyclwiLCBlcnIpO1xuICAgICAgICAgIGhhc0xvZ2dlZEVyciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAoKSA9PiBjb25uZWN0aW9uLnNlbmQoeyBqc29uOiB7IHBpbmc6IHRydWUgfSwgc2tpcFZhbGlkYXRpb246IHRydWUgfSksXG4gICAgICAgIFBJTkdcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHJlY2VpdmUgPSByYXcgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgICAgICBBcnJheS5pc0FycmF5KGpzb24pXG4gICAgICAgICAgICA/IGpzb24uZm9yRWFjaChyZWNlaXZlKVxuICAgICAgICAgICAgOiBjb25uZWN0aW9uLnJlY2VpdmUoeyBqc29uIH0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIlBJU1RPTCBpbnZhbGlkIHdzIG1zZ1wiLCBlKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgd3Mub24oXCJtZXNzYWdlXCIsIHJlY2VpdmUpO1xuICAgICAgd3Mub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4gICAgICAgIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICBjbGVhckludGVydmFsKHBpbmdJbnRlcnZhbCk7XG4gICAgICAgIGRiLmRpc2Nvbm5lY3RlZChjb25uZWN0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcbiAgcmV0dXJuIGRiO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZmxhdF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWRpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV91dWlkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3dzX187Il0sInNvdXJjZVJvb3QiOiIifQ==