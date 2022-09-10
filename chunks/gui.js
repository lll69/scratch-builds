var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./node_modules/@sentry/browser/esm/backend.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/backend.js ***!
  \*****************************************************/
/*! exports provided: BrowserBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserBackend", function() { return BrowserBackend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports */ "./node_modules/@sentry/browser/esm/transports/index.js");






/**
 * The Sentry Browser SDK Backend.
 * @hidden
 */
var BrowserBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserBackend, _super);
    function BrowserBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromException = function (exception, hint) {
        return Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromException"])(exception, hint, this._options.attachStacktrace);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Info; }
        return Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromMessage"])(message, level, hint, this._options.attachStacktrace);
    };
    /**
     * @inheritDoc
     */
    BrowserBackend.prototype._setupTransport = function () {
        if (!this._options.dsn) {
            // We return the noop transport here in case there is no Dsn.
            return _super.prototype._setupTransport.call(this);
        }
        var transportOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._options.transportOptions), { dsn: this._options.dsn, tunnel: this._options.tunnel, sendClientReports: this._options.sendClientReports, _metadata: this._options._metadata });
        var api = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["initAPIDetails"])(transportOptions.dsn, transportOptions._metadata, transportOptions.tunnel);
        var url = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getEnvelopeEndpointWithUrlEncodedAuth"])(api.dsn, api.tunnel);
        if (this._options.transport) {
            return new this._options.transport(transportOptions);
        }
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["supportsFetch"])()) {
            var requestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transportOptions.fetchParameters);
            this._newTransport = Object(_transports__WEBPACK_IMPORTED_MODULE_5__["makeNewFetchTransport"])({ requestOptions: requestOptions, url: url });
            return new _transports__WEBPACK_IMPORTED_MODULE_5__["FetchTransport"](transportOptions);
        }
        this._newTransport = Object(_transports__WEBPACK_IMPORTED_MODULE_5__["makeNewXHRTransport"])({
            url: url,
            headers: transportOptions.headers,
        });
        return new _transports__WEBPACK_IMPORTED_MODULE_5__["XHRTransport"](transportOptions);
    };
    return BrowserBackend;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["BaseBackend"]));

//# sourceMappingURL=backend.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/client.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/client.js ***!
  \****************************************************/
/*! exports provided: BrowserClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return BrowserClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend */ "./node_modules/@sentry/browser/esm/backend.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/browser/esm/flags.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/index.js");







/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
var BrowserClient = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserClient, _super);
    /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
    function BrowserClient(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        options._metadata = options._metadata || {};
        options._metadata.sdk = options._metadata.sdk || {
            name: 'sentry.javascript.browser',
            packages: [
                {
                    name: 'npm:@sentry/browser',
                    version: _sentry_core__WEBPACK_IMPORTED_MODULE_1__["SDK_VERSION"],
                },
            ],
            version: _sentry_core__WEBPACK_IMPORTED_MODULE_1__["SDK_VERSION"],
        };
        _this = _super.call(this, _backend__WEBPACK_IMPORTED_MODULE_3__["BrowserBackend"], options) || this;
        return _this;
    }
    /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
    BrowserClient.prototype.showReportDialog = function (options) {
        if (options === void 0) { options = {}; }
        // doesn't work without a document (React Native)
        var document = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])().document;
        if (!document) {
            return;
        }
        if (!this._isEnabled()) {
            _flags__WEBPACK_IMPORTED_MODULE_4__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Trying to call showReportDialog with Sentry Client disabled');
            return;
        }
        Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["injectReportDialog"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { dsn: options.dsn || this.getDsn() }));
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._prepareEvent = function (event, scope, hint) {
        event.platform = event.platform || 'javascript';
        return _super.prototype._prepareEvent.call(this, event, scope, hint);
    };
    /**
     * @inheritDoc
     */
    BrowserClient.prototype._sendEvent = function (event) {
        var integration = this.getIntegration(_integrations__WEBPACK_IMPORTED_MODULE_6__["Breadcrumbs"]);
        if (integration) {
            integration.addSentryBreadcrumb(event);
        }
        _super.prototype._sendEvent.call(this, event);
    };
    return BrowserClient;
}(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["BaseClient"]));

//# sourceMappingURL=client.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/eventbuilder.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/eventbuilder.js ***!
  \**********************************************************/
/*! exports provided: exceptionFromError, eventFromPlainObject, eventFromError, parseStackFrames, eventFromException, eventFromMessage, eventFromUnknownInput, eventFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exceptionFromError", function() { return exceptionFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromPlainObject", function() { return eventFromPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromError", function() { return eventFromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStackFrames", function() { return parseStackFrames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromException", function() { return eventFromException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return eventFromMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromUnknownInput", function() { return eventFromUnknownInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFromString", function() { return eventFromString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _stack_parsers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stack-parsers */ "./node_modules/@sentry/browser/esm/stack-parsers.js");




/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromError(ex) {
    // Get the frames first since Opera can lose the stack if we touch anything else first
    var frames = parseStackFrames(ex);
    var exception = {
        type: ex && ex.name,
        value: extractMessage(ex),
    };
    if (frames.length) {
        exception.stacktrace = { frames: frames };
    }
    if (exception.type === undefined && exception.value === '') {
        exception.value = 'Unrecoverable error caught';
    }
    return exception;
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException, isUnhandledRejection) {
    var event = {
        exception: {
            values: [
                {
                    type: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isEvent"])(exception) ? exception.constructor.name : isUnhandledRejection ? 'UnhandledRejection' : 'Error',
                    value: "Non-Error " + (isUnhandledRejection ? 'promise rejection' : 'exception') + " captured with keys: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["extractExceptionKeysForMessage"])(exception),
                },
            ],
        },
        extra: {
            __serialized__: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalizeToSize"])(exception),
        },
    };
    if (syntheticException) {
        var frames_1 = parseStackFrames(syntheticException);
        if (frames_1.length) {
            event.stacktrace = { frames: frames_1 };
        }
    }
    return event;
}
/**
 * @hidden
 */
function eventFromError(ex) {
    return {
        exception: {
            values: [exceptionFromError(ex)],
        },
    };
}
/** Parses stack frames from an error */
function parseStackFrames(ex) {
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    var stacktrace = ex.stacktrace || ex.stack || '';
    var popSize = getPopSize(ex);
    try {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["createStackParser"])(_stack_parsers__WEBPACK_IMPORTED_MODULE_3__["opera10StackParser"], _stack_parsers__WEBPACK_IMPORTED_MODULE_3__["opera11StackParser"], _stack_parsers__WEBPACK_IMPORTED_MODULE_3__["chromeStackParser"], _stack_parsers__WEBPACK_IMPORTED_MODULE_3__["winjsStackParser"], _stack_parsers__WEBPACK_IMPORTED_MODULE_3__["geckoStackParser"])(stacktrace, popSize);
    }
    catch (e) {
        // no-empty
    }
    return [];
}
// Based on our own mapping pattern - https://github.com/getsentry/sentry/blob/9f08305e09866c8bd6d0c24f5b0aabdd7dd6c59c/src/sentry/lang/javascript/errormapping.py#L83-L108
var reactMinifiedRegexp = /Minified React error #\d+;/i;
function getPopSize(ex) {
    if (ex) {
        if (typeof ex.framesToPop === 'number') {
            return ex.framesToPop;
        }
        if (reactMinifiedRegexp.test(ex.message)) {
            return 1;
        }
    }
    return 0;
}
/**
 * There are cases where stacktrace.message is an Event object
 * https://github.com/getsentry/sentry-javascript/issues/1949
 * In this specific case we try to extract stacktrace.message.error.message
 */
function extractMessage(ex) {
    var message = ex && ex.message;
    if (!message) {
        return 'No error message';
    }
    if (message.error && typeof message.error.message === 'string') {
        return message.error.message;
    }
    return message;
}
/**
 * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
 * @hidden
 */
function eventFromException(exception, hint, attachStacktrace) {
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromUnknownInput(exception, syntheticException, attachStacktrace);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(event); // defaults to { type: 'generic', handled: true }
    event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_1__["Severity"].Error;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(event);
}
/**
 * Builds and Event from a Message
 * @hidden
 */
function eventFromMessage(message, level, hint, attachStacktrace) {
    if (level === void 0) { level = _sentry_types__WEBPACK_IMPORTED_MODULE_1__["Severity"].Info; }
    var syntheticException = (hint && hint.syntheticException) || undefined;
    var event = eventFromString(message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) {
        event.event_id = hint.event_id;
    }
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(event);
}
/**
 * @hidden
 */
function eventFromUnknownInput(exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    var event;
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isErrorEvent"])(exception) && exception.error) {
        // If it is an ErrorEvent with `error` property, extract it to get actual Error
        var errorEvent = exception;
        return eventFromError(errorEvent.error);
    }
    // If it is a `DOMError` (which is a legacy API, but still supported in some browsers) then we just extract the name
    // and message, as it doesn't provide anything else. According to the spec, all `DOMExceptions` should also be
    // `Error`s, but that's not the case in IE11, so in that case we treat it the same as we do a `DOMError`.
    //
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMError
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMException
    // https://webidl.spec.whatwg.org/#es-DOMException-specialness
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isDOMError"])(exception) || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isDOMException"])(exception)) {
        var domException = exception;
        if ('stack' in exception) {
            event = eventFromError(exception);
        }
        else {
            var name_1 = domException.name || (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isDOMError"])(domException) ? 'DOMError' : 'DOMException');
            var message = domException.message ? name_1 + ": " + domException.message : name_1;
            event = eventFromString(message, syntheticException, attachStacktrace);
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionTypeValue"])(event, message);
        }
        if ('code' in domException) {
            event.tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.tags), { 'DOMException.code': "" + domException.code });
        }
        return event;
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isError"])(exception)) {
        // we have a real Error object, do nothing
        return eventFromError(exception);
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(exception) || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isEvent"])(exception)) {
        // If it's a plain object or an instance of `Event` (the built-in JS kind, not this SDK's `Event` type), serialize
        // it manually. This will allow us to group events based on top-level keys which is much better than creating a new
        // group on any key/value change.
        var objectException = exception;
        event = eventFromPlainObject(objectException, syntheticException, isUnhandledRejection);
        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(event, {
            synthetic: true,
        });
        return event;
    }
    // If none of previous checks were valid, then it means that it's not:
    // - an instance of DOMError
    // - an instance of DOMException
    // - an instance of Event
    // - an instance of Error
    // - a valid ErrorEvent (one with an error property)
    // - a plain Object
    //
    // So bail out and capture it as a simple message:
    event = eventFromString(exception, syntheticException, attachStacktrace);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionTypeValue"])(event, "" + exception, undefined);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(event, {
        synthetic: true,
    });
    return event;
}
/**
 * @hidden
 */
function eventFromString(input, syntheticException, attachStacktrace) {
    var event = {
        message: input,
    };
    if (attachStacktrace && syntheticException) {
        var frames_2 = parseStackFrames(syntheticException);
        if (frames_2.length) {
            event.stacktrace = { frames: frames_2 };
        }
    }
    return event;
}
//# sourceMappingURL=eventbuilder.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/exports.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/exports.js ***!
  \*****************************************************/
/*! exports provided: Severity, addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, makeMain, Scope, Session, startTransaction, SDK_VERSION, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, BrowserClient, injectReportDialog, eventFromException, eventFromMessage, defaultIntegrations, forceLoad, init, lastEventId, onLoad, showReportDialog, flush, close, wrap, SDK_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Severity"]; });

/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Session"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["SDK_VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_core__WEBPACK_IMPORTED_MODULE_1__["withScope"]; });

/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _client__WEBPACK_IMPORTED_MODULE_2__["BrowserClient"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectReportDialog", function() { return _helpers__WEBPACK_IMPORTED_MODULE_3__["injectReportDialog"]; });

/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromException", function() { return _eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return _eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromMessage"]; });

/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sdk */ "./node_modules/@sentry/browser/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _sdk__WEBPACK_IMPORTED_MODULE_5__["wrap"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./version */ "./node_modules/@sentry/browser/esm/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return _version__WEBPACK_IMPORTED_MODULE_6__["SDK_NAME"]; });








//# sourceMappingURL=exports.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/flags.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/flags.js ***!
  \***************************************************/
/*! exports provided: IS_DEBUG_BUILD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEBUG_BUILD", function() { return IS_DEBUG_BUILD; });
/*
 * This file defines flags and constants that can be modified during compile time in order to facilitate tree shaking
 * for users.
 *
 * Debug flags need to be declared in each package individually and must not be imported across package boundaries,
 * because some build tools have trouble tree-shaking imported guards.
 *
 * As a convention, we define debug flags in a `flags.ts` file in the root of a package's `src` folder.
 *
 * Debug flag files will contain "magic strings" like `__SENTRY_DEBUG__` that may get replaced with actual values during
 * our, or the user's build process. Take care when introducing new flags - they must not throw if they are not
 * replaced.
 */
/** Flag that is true for debug builds, false otherwise. */
var IS_DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' ? true : __SENTRY_DEBUG__;
//# sourceMappingURL=flags.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/helpers.js ***!
  \*****************************************************/
/*! exports provided: shouldIgnoreOnError, ignoreNextOnError, wrap, injectReportDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldIgnoreOnError", function() { return shouldIgnoreOnError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ignoreNextOnError", function() { return ignoreNextOnError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectReportDialog", function() { return injectReportDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/browser/esm/flags.js");




var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
var ignoreOnError = 0;
/**
 * @hidden
 */
function shouldIgnoreOnError() {
    return ignoreOnError > 0;
}
/**
 * @hidden
 */
function ignoreNextOnError() {
    // onerror should trigger before setTimeout
    ignoreOnError += 1;
    setTimeout(function () {
        ignoreOnError -= 1;
    });
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(fn, options, before) {
    // for future readers what this does is wrap a function and then create
    // a bi-directional wrapping between them.
    //
    // example: wrapped = wrap(original);
    //  original.__sentry_wrapped__ -> wrapped
    //  wrapped.__sentry_original__ -> original
    if (options === void 0) { options = {}; }
    if (typeof fn !== 'function') {
        return fn;
    }
    try {
        // if we're dealing with a function that was previously wrapped, return
        // the original wrapper.
        var wrapper = fn.__sentry_wrapped__;
        if (wrapper) {
            return wrapper;
        }
        // We don't wanna wrap it twice
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getOriginalFunction"])(fn)) {
            return fn;
        }
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        // Bail on wrapping and return the function as-is (defers to window.onerror).
        return fn;
    }
    /* eslint-disable prefer-rest-params */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var sentryWrapped = function () {
        var args = Array.prototype.slice.call(arguments);
        try {
            if (before && typeof before === 'function') {
                before.apply(this, arguments);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
            var wrappedArguments = args.map(function (arg) { return wrap(arg, options); });
            // Attempt to invoke user-land function
            // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
            //       means the sentry.javascript SDK caught an error invoking your application code. This
            //       is expected behavior and NOT indicative of a bug with sentry.javascript.
            return fn.apply(this, wrappedArguments);
        }
        catch (ex) {
            ignoreNextOnError();
            Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["withScope"])(function (scope) {
                scope.addEventProcessor(function (event) {
                    if (options.mechanism) {
                        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionTypeValue"])(event, undefined, undefined);
                        Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addExceptionMechanism"])(event, options.mechanism);
                    }
                    event.extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event.extra), { arguments: args });
                    return event;
                });
                Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["captureException"])(ex);
            });
            throw ex;
        }
    };
    /* eslint-enable prefer-rest-params */
    // Accessing some objects may throw
    // ref: https://github.com/getsentry/sentry-javascript/issues/1168
    try {
        for (var property in fn) {
            if (Object.prototype.hasOwnProperty.call(fn, property)) {
                sentryWrapped[property] = fn[property];
            }
        }
    }
    catch (_oO) { } // eslint-disable-line no-empty
    // Signal that this function has been wrapped/filled already
    // for both debugging and to prevent it to being wrapped/filled twice
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["markFunctionWrapped"])(sentryWrapped, fn);
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addNonEnumerableProperty"])(fn, '__sentry_wrapped__', sentryWrapped);
    // Restore original function name (not all browsers allow that)
    try {
        var descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name');
        if (descriptor.configurable) {
            Object.defineProperty(sentryWrapped, 'name', {
                get: function () {
                    return fn.name;
                },
            });
        }
        // eslint-disable-next-line no-empty
    }
    catch (_oO) { }
    return sentryWrapped;
}
/**
 * Injects the Report Dialog script
 * @hidden
 */
function injectReportDialog(options) {
    if (options === void 0) { options = {}; }
    if (!global.document) {
        return;
    }
    if (!options.eventId) {
        _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Missing eventId option in showReportDialog call');
        return;
    }
    if (!options.dsn) {
        _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Missing dsn option in showReportDialog call');
        return;
    }
    var script = global.document.createElement('script');
    script.async = true;
    script.src = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getReportDialogEndpoint"])(options.dsn, options);
    if (options.onLoad) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        script.onload = options.onLoad;
    }
    var injectionPoint = global.document.head || global.document.body;
    if (injectionPoint) {
        injectionPoint.appendChild(script);
    }
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/index.js ***!
  \***************************************************/
/*! exports provided: Severity, addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, makeMain, Scope, Session, startTransaction, SDK_VERSION, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, BrowserClient, injectReportDialog, eventFromException, eventFromMessage, defaultIntegrations, forceLoad, init, lastEventId, onLoad, showReportDialog, flush, close, wrap, SDK_NAME, Integrations, Transports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return INTEGRATIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exports */ "./node_modules/@sentry/browser/esm/exports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Severity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["Session"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["SDK_VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["withScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["BrowserClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectReportDialog", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["injectReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromException", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["eventFromException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["eventFromMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return _exports__WEBPACK_IMPORTED_MODULE_1__["SDK_NAME"]; });

/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/index.js");
/* harmony import */ var _transports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports */ "./node_modules/@sentry/browser/esm/transports/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Transports", function() { return _transports__WEBPACK_IMPORTED_MODULE_5__; });






var windowIntegrations = {};
// This block is needed to add compatibility with the integrations packages when used with a CDN
var _window = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
if (_window.Sentry && _window.Sentry.Integrations) {
    windowIntegrations = _window.Sentry.Integrations;
}
var INTEGRATIONS = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, windowIntegrations), _sentry_core__WEBPACK_IMPORTED_MODULE_2__["Integrations"]), _integrations__WEBPACK_IMPORTED_MODULE_4__);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js ***!
  \**********************************************************************/
/*! exports provided: Breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable max-lines */



/**
 * Default Breadcrumbs instrumentations
 * TODO: Deprecated - with v6, this will be renamed to `Instrument`
 */
var Breadcrumbs = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function Breadcrumbs(options) {
        /**
         * @inheritDoc
         */
        this.name = Breadcrumbs.id;
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ console: true, dom: true, fetch: true, history: true, sentry: true, xhr: true }, options);
    }
    /**
     * Create a breadcrumb of `sentry` from the events themselves
     */
    Breadcrumbs.prototype.addSentryBreadcrumb = function (event) {
        if (!this._options.sentry) {
            return;
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: "sentry." + (event.type === 'transaction' ? 'transaction' : 'event'),
            event_id: event.event_id,
            level: event.level,
            message: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getEventDescription"])(event),
        }, {
            event: event,
        });
    };
    /**
     * Instrument browser built-ins w/ breadcrumb capturing
     *  - Console API
     *  - DOM API (click/typing)
     *  - XMLHttpRequest API
     *  - Fetch API
     *  - History API
     */
    Breadcrumbs.prototype.setupOnce = function () {
        if (this._options.console) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])('console', _consoleBreadcrumb);
        }
        if (this._options.dom) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])('dom', _domBreadcrumb(this._options.dom));
        }
        if (this._options.xhr) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])('xhr', _xhrBreadcrumb);
        }
        if (this._options.fetch) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])('fetch', _fetchBreadcrumb);
        }
        if (this._options.history) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])('history', _historyBreadcrumb);
        }
    };
    /**
     * @inheritDoc
     */
    Breadcrumbs.id = 'Breadcrumbs';
    return Breadcrumbs;
}());

/**
 * A HOC that creaes a function that creates breadcrumbs from DOM API calls.
 * This is a HOC so that we get access to dom options in the closure.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _domBreadcrumb(dom) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function _innerDomBreadcrumb(handlerData) {
        var target;
        var keyAttrs = typeof dom === 'object' ? dom.serializeAttribute : undefined;
        if (typeof keyAttrs === 'string') {
            keyAttrs = [keyAttrs];
        }
        // Accessing event.target can throw (see getsentry/raven-js#838, #768)
        try {
            target = handlerData.event.target
                ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(handlerData.event.target, keyAttrs)
                : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["htmlTreeAsString"])(handlerData.event, keyAttrs);
        }
        catch (e) {
            target = '<unknown>';
        }
        if (target.length === 0) {
            return;
        }
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: "ui." + handlerData.name,
            message: target,
        }, {
            event: handlerData.event,
            name: handlerData.name,
            global: handlerData.global,
        });
    }
    return _innerDomBreadcrumb;
}
/**
 * Creates breadcrumbs from console API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _consoleBreadcrumb(handlerData) {
    var breadcrumb = {
        category: 'console',
        data: {
            arguments: handlerData.args,
            logger: 'console',
        },
        level: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["severityFromString"])(handlerData.level),
        message: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["safeJoin"])(handlerData.args, ' '),
    };
    if (handlerData.level === 'assert') {
        if (handlerData.args[0] === false) {
            breadcrumb.message = "Assertion failed: " + (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["safeJoin"])(handlerData.args.slice(1), ' ') || 'console.assert');
            breadcrumb.data.arguments = handlerData.args.slice(1);
        }
        else {
            // Don't capture a breadcrumb for passed assertions
            return;
        }
    }
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb(breadcrumb, {
        input: handlerData.args,
        level: handlerData.level,
    });
}
/**
 * Creates breadcrumbs from XHR API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _xhrBreadcrumb(handlerData) {
    if (handlerData.endTimestamp) {
        // We only capture complete, non-sentry requests
        if (handlerData.xhr.__sentry_own_request__) {
            return;
        }
        var _a = handlerData.xhr.__sentry_xhr__ || {}, method = _a.method, url = _a.url, status_code = _a.status_code, body = _a.body;
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: 'xhr',
            data: {
                method: method,
                url: url,
                status_code: status_code,
            },
            type: 'http',
        }, {
            xhr: handlerData.xhr,
            input: body,
        });
        return;
    }
}
/**
 * Creates breadcrumbs from fetch API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _fetchBreadcrumb(handlerData) {
    // We only capture complete fetch requests
    if (!handlerData.endTimestamp) {
        return;
    }
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === 'POST') {
        // We will not create breadcrumbs for fetch requests that contain `sentry_key` (internal sentry requests)
        return;
    }
    if (handlerData.error) {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: 'fetch',
            data: handlerData.fetchData,
            level: _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error,
            type: 'http',
        }, {
            data: handlerData.error,
            input: handlerData.args,
        });
    }
    else {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
            category: 'fetch',
            data: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData.fetchData), { status_code: handlerData.response.status }),
            type: 'http',
        }, {
            input: handlerData.args,
            response: handlerData.response,
        });
    }
}
/**
 * Creates breadcrumbs from history API calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _historyBreadcrumb(handlerData) {
    var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getGlobalObject"])();
    var from = handlerData.from;
    var to = handlerData.to;
    var parsedLoc = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(global.location.href);
    var parsedFrom = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(from);
    var parsedTo = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrl"])(to);
    // Initial pushState doesn't provide `from` information
    if (!parsedFrom.path) {
        parsedFrom = parsedLoc;
    }
    // Use only the path component of the URL if the URL matches the current
    // document (almost all the time when using pushState)
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
        to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
        from = parsedFrom.relative;
    }
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().addBreadcrumb({
        category: 'navigation',
        data: {
            from: from,
            to: to,
        },
    });
}
//# sourceMappingURL=breadcrumbs.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/dedupe.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/dedupe.js ***!
  \*****************************************************************/
/*! exports provided: Dedupe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dedupe", function() { return Dedupe; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flags */ "./node_modules/@sentry/browser/esm/flags.js");


/** Deduplication filter */
var Dedupe = /** @class */ (function () {
    function Dedupe() {
        /**
         * @inheritDoc
         */
        this.name = Dedupe.id;
    }
    /**
     * @inheritDoc
     */
    Dedupe.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (currentEvent) {
            var self = getCurrentHub().getIntegration(Dedupe);
            if (self) {
                // Juuust in case something goes wrong
                try {
                    if (_shouldDropEvent(currentEvent, self._previousEvent)) {
                        _flags__WEBPACK_IMPORTED_MODULE_1__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Event dropped due to being a duplicate of previously captured event.');
                        return null;
                    }
                }
                catch (_oO) {
                    return (self._previousEvent = currentEvent);
                }
                return (self._previousEvent = currentEvent);
            }
            return currentEvent;
        });
    };
    /**
     * @inheritDoc
     */
    Dedupe.id = 'Dedupe';
    return Dedupe;
}());

/** JSDoc */
function _shouldDropEvent(currentEvent, previousEvent) {
    if (!previousEvent) {
        return false;
    }
    if (_isSameMessageEvent(currentEvent, previousEvent)) {
        return true;
    }
    if (_isSameExceptionEvent(currentEvent, previousEvent)) {
        return true;
    }
    return false;
}
/** JSDoc */
function _isSameMessageEvent(currentEvent, previousEvent) {
    var currentMessage = currentEvent.message;
    var previousMessage = previousEvent.message;
    // If neither event has a message property, they were both exceptions, so bail out
    if (!currentMessage && !previousMessage) {
        return false;
    }
    // If only one event has a stacktrace, but not the other one, they are not the same
    if ((currentMessage && !previousMessage) || (!currentMessage && previousMessage)) {
        return false;
    }
    if (currentMessage !== previousMessage) {
        return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
        return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
        return false;
    }
    return true;
}
/** JSDoc */
function _isSameExceptionEvent(currentEvent, previousEvent) {
    var previousException = _getExceptionFromEvent(previousEvent);
    var currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) {
        return false;
    }
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
        return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
        return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
        return false;
    }
    return true;
}
/** JSDoc */
function _isSameStacktrace(currentEvent, previousEvent) {
    var currentFrames = _getFramesFromEvent(currentEvent);
    var previousFrames = _getFramesFromEvent(previousEvent);
    // If neither event has a stacktrace, they are assumed to be the same
    if (!currentFrames && !previousFrames) {
        return true;
    }
    // If only one event has a stacktrace, but not the other one, they are not the same
    if ((currentFrames && !previousFrames) || (!currentFrames && previousFrames)) {
        return false;
    }
    currentFrames = currentFrames;
    previousFrames = previousFrames;
    // If number of frames differ, they are not the same
    if (previousFrames.length !== currentFrames.length) {
        return false;
    }
    // Otherwise, compare the two
    for (var i = 0; i < previousFrames.length; i++) {
        var frameA = previousFrames[i];
        var frameB = currentFrames[i];
        if (frameA.filename !== frameB.filename ||
            frameA.lineno !== frameB.lineno ||
            frameA.colno !== frameB.colno ||
            frameA.function !== frameB.function) {
            return false;
        }
    }
    return true;
}
/** JSDoc */
function _isSameFingerprint(currentEvent, previousEvent) {
    var currentFingerprint = currentEvent.fingerprint;
    var previousFingerprint = previousEvent.fingerprint;
    // If neither event has a fingerprint, they are assumed to be the same
    if (!currentFingerprint && !previousFingerprint) {
        return true;
    }
    // If only one event has a fingerprint, but not the other one, they are not the same
    if ((currentFingerprint && !previousFingerprint) || (!currentFingerprint && previousFingerprint)) {
        return false;
    }
    currentFingerprint = currentFingerprint;
    previousFingerprint = previousFingerprint;
    // Otherwise, compare the two
    try {
        return !!(currentFingerprint.join('') === previousFingerprint.join(''));
    }
    catch (_oO) {
        return false;
    }
}
/** JSDoc */
function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
}
/** JSDoc */
function _getFramesFromEvent(event) {
    var exception = event.exception;
    if (exception) {
        try {
            // @ts-ignore Object could be undefined
            return exception.values[0].stacktrace.frames;
        }
        catch (_oO) {
            return undefined;
        }
    }
    else if (event.stacktrace) {
        return event.stacktrace.frames;
    }
    return undefined;
}
//# sourceMappingURL=dedupe.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/globalhandlers.js ***!
  \*************************************************************************/
/*! exports provided: GlobalHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return GlobalHandlers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../flags */ "./node_modules/@sentry/browser/esm/flags.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ "./node_modules/@sentry/browser/esm/helpers.js");

/* eslint-disable @typescript-eslint/no-unsafe-member-access */






/** Global handlers */
var GlobalHandlers = /** @class */ (function () {
    /** JSDoc */
    function GlobalHandlers(options) {
        /**
         * @inheritDoc
         */
        this.name = GlobalHandlers.id;
        /**
         * Stores references functions to installing handlers. Will set to undefined
         * after they have been run so that they are not used twice.
         */
        this._installFunc = {
            onerror: _installGlobalOnErrorHandler,
            onunhandledrejection: _installGlobalOnUnhandledRejectionHandler,
        };
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ onerror: true, onunhandledrejection: true }, options);
    }
    /**
     * @inheritDoc
     */
    GlobalHandlers.prototype.setupOnce = function () {
        Error.stackTraceLimit = 50;
        var options = this._options;
        // We can disable guard-for-in as we construct the options object above + do checks against
        // `this._installFunc` for the property.
        // eslint-disable-next-line guard-for-in
        for (var key in options) {
            var installFunc = this._installFunc[key];
            if (installFunc && options[key]) {
                globalHandlerLog(key);
                installFunc();
                this._installFunc[key] = undefined;
            }
        }
    };
    /**
     * @inheritDoc
     */
    GlobalHandlers.id = 'GlobalHandlers';
    return GlobalHandlers;
}());

/** JSDoc */
function _installGlobalOnErrorHandler() {
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])('error', 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (data) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(getHubAndAttachStacktrace(), 2), hub = _a[0], attachStacktrace = _a[1];
        if (!hub.getIntegration(GlobalHandlers)) {
            return;
        }
        var msg = data.msg, url = data.url, line = data.line, column = data.column, error = data.error;
        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["shouldIgnoreOnError"])() || (error && error.__sentry_own_request__)) {
            return;
        }
        var event = error === undefined && Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(msg)
            ? _eventFromIncompleteOnError(msg, url, line, column)
            : _enhanceEventWithInitialFrame(Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromUnknownInput"])(error || msg, undefined, attachStacktrace, false), url, line, column);
        event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error;
        addMechanismAndCapture(hub, error, event, 'onerror');
    });
}
/** JSDoc */
function _installGlobalOnUnhandledRejectionHandler() {
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addInstrumentationHandler"])('unhandledrejection', 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (e) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(getHubAndAttachStacktrace(), 2), hub = _a[0], attachStacktrace = _a[1];
        if (!hub.getIntegration(GlobalHandlers)) {
            return;
        }
        var error = e;
        // dig the object of the rejection out of known event types
        try {
            // PromiseRejectionEvents store the object of the rejection under 'reason'
            // see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
            if ('reason' in e) {
                error = e.reason;
            }
            // something, somewhere, (likely a browser extension) effectively casts PromiseRejectionEvents
            // to CustomEvents, moving the `promise` and `reason` attributes of the PRE into
            // the CustomEvent's `detail` attribute, since they're not part of CustomEvent's spec
            // see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent and
            // https://github.com/getsentry/sentry-javascript/issues/2380
            else if ('detail' in e && 'reason' in e.detail) {
                error = e.detail.reason;
            }
        }
        catch (_oO) {
            // no-empty
        }
        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["shouldIgnoreOnError"])() || (error && error.__sentry_own_request__)) {
            return true;
        }
        var event = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isPrimitive"])(error)
            ? _eventFromRejectionWithPrimitive(error)
            : Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_4__["eventFromUnknownInput"])(error, undefined, attachStacktrace, true);
        event.level = _sentry_types__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error;
        addMechanismAndCapture(hub, error, event, 'onunhandledrejection');
        return;
    });
}
/**
 * Create an event from a promise rejection where the `reason` is a primitive.
 *
 * @param reason: The `reason` property of the promise rejection
 * @returns An Event object with an appropriate `exception` value
 */
function _eventFromRejectionWithPrimitive(reason) {
    return {
        exception: {
            values: [
                {
                    type: 'UnhandledRejection',
                    // String() is needed because the Primitive type includes symbols (which can't be automatically stringified)
                    value: "Non-Error promise rejection captured with value: " + String(reason),
                },
            ],
        },
    };
}
/**
 * This function creates a stack from an old, error-less onerror handler.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _eventFromIncompleteOnError(msg, url, line, column) {
    var ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    // If 'message' is ErrorEvent, get real message from inside
    var message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isErrorEvent"])(msg) ? msg.message : msg;
    var name = 'Error';
    var groups = message.match(ERROR_TYPES_RE);
    if (groups) {
        name = groups[1];
        message = groups[2];
    }
    var event = {
        exception: {
            values: [
                {
                    type: name,
                    value: message,
                },
            ],
        },
    };
    return _enhanceEventWithInitialFrame(event, url, line, column);
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _enhanceEventWithInitialFrame(event, url, line, column) {
    // event.exception
    var e = (event.exception = event.exception || {});
    // event.exception.values
    var ev = (e.values = e.values || []);
    // event.exception.values[0]
    var ev0 = (ev[0] = ev[0] || {});
    // event.exception.values[0].stacktrace
    var ev0s = (ev0.stacktrace = ev0.stacktrace || {});
    // event.exception.values[0].stacktrace.frames
    var ev0sf = (ev0s.frames = ev0s.frames || []);
    var colno = isNaN(parseInt(column, 10)) ? undefined : column;
    var lineno = isNaN(parseInt(line, 10)) ? undefined : line;
    var filename = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["isString"])(url) && url.length > 0 ? url : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["getLocationHref"])();
    // event.exception.values[0].stacktrace.frames
    if (ev0sf.length === 0) {
        ev0sf.push({
            colno: colno,
            filename: filename,
            function: '?',
            in_app: true,
            lineno: lineno,
        });
    }
    return event;
}
function globalHandlerLog(type) {
    _flags__WEBPACK_IMPORTED_MODULE_5__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_3__["logger"].log("Global Handler attached: " + type);
}
function addMechanismAndCapture(hub, error, event, type) {
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_3__["addExceptionMechanism"])(event, {
        handled: false,
        type: type,
    });
    hub.captureEvent(event, {
        originalException: error,
    });
}
function getHubAndAttachStacktrace() {
    var hub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
    var client = hub.getClient();
    var attachStacktrace = client && client.getOptions().attachStacktrace;
    return [hub, attachStacktrace];
}
//# sourceMappingURL=globalhandlers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/index.js ***!
  \****************************************************************/
/*! exports provided: GlobalHandlers, TryCatch, Breadcrumbs, LinkedErrors, UserAgent, Dedupe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalhandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalhandlers */ "./node_modules/@sentry/browser/esm/integrations/globalhandlers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalHandlers", function() { return _globalhandlers__WEBPACK_IMPORTED_MODULE_0__["GlobalHandlers"]; });

/* harmony import */ var _trycatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trycatch */ "./node_modules/@sentry/browser/esm/integrations/trycatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return _trycatch__WEBPACK_IMPORTED_MODULE_1__["TryCatch"]; });

/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumbs */ "./node_modules/@sentry/browser/esm/integrations/breadcrumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return _breadcrumbs__WEBPACK_IMPORTED_MODULE_2__["Breadcrumbs"]; });

/* harmony import */ var _linkederrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkederrors */ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return _linkederrors__WEBPACK_IMPORTED_MODULE_3__["LinkedErrors"]; });

/* harmony import */ var _useragent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useragent */ "./node_modules/@sentry/browser/esm/integrations/useragent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAgent", function() { return _useragent__WEBPACK_IMPORTED_MODULE_4__["UserAgent"]; });

/* harmony import */ var _dedupe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dedupe */ "./node_modules/@sentry/browser/esm/integrations/dedupe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dedupe", function() { return _dedupe__WEBPACK_IMPORTED_MODULE_5__["Dedupe"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/linkederrors.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/linkederrors.js ***!
  \***********************************************************************/
/*! exports provided: LinkedErrors, _handler, _walkErrorTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedErrors", function() { return LinkedErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_handler", function() { return _handler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_walkErrorTree", function() { return _walkErrorTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _eventbuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventbuilder */ "./node_modules/@sentry/browser/esm/eventbuilder.js");




var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this._key = options.key || DEFAULT_KEY;
        this._limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event, hint) {
            var self = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getIntegration(LinkedErrors);
            return self ? _handler(self._key, self._limit, event, hint) : event;
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());

/**
 * @inheritDoc
 */
function _handler(key, limit, event, hint) {
    if (!event.exception || !event.exception.values || !hint || !Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(hint.originalException, Error)) {
        return event;
    }
    var linkedErrors = _walkErrorTree(limit, hint.originalException, key);
    event.exception.values = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(linkedErrors, event.exception.values);
    return event;
}
/**
 * JSDOC
 */
function _walkErrorTree(limit, error, key, stack) {
    if (stack === void 0) { stack = []; }
    if (!Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(error[key], Error) || stack.length + 1 >= limit) {
        return stack;
    }
    var exception = Object(_eventbuilder__WEBPACK_IMPORTED_MODULE_3__["exceptionFromError"])(error[key]);
    return _walkErrorTree(limit, error[key], key, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([exception], stack));
}
//# sourceMappingURL=linkederrors.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/trycatch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/trycatch.js ***!
  \*******************************************************************/
/*! exports provided: TryCatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCatch", function() { return TryCatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./node_modules/@sentry/browser/esm/helpers.js");



var DEFAULT_EVENT_TARGET = [
    'EventTarget',
    'Window',
    'Node',
    'ApplicationCache',
    'AudioTrackList',
    'ChannelMergerNode',
    'CryptoOperation',
    'EventSource',
    'FileReader',
    'HTMLUnknownElement',
    'IDBDatabase',
    'IDBRequest',
    'IDBTransaction',
    'KeyOperation',
    'MediaController',
    'MessagePort',
    'ModalWindow',
    'Notification',
    'SVGElementInstance',
    'Screen',
    'TextTrack',
    'TextTrackCue',
    'TextTrackList',
    'WebSocket',
    'WebSocketWorker',
    'Worker',
    'XMLHttpRequest',
    'XMLHttpRequestEventTarget',
    'XMLHttpRequestUpload',
];
/** Wrap timer functions and event targets to catch errors and provide better meta data */
var TryCatch = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function TryCatch(options) {
        /**
         * @inheritDoc
         */
        this.name = TryCatch.id;
        this._options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ XMLHttpRequest: true, eventTarget: true, requestAnimationFrame: true, setInterval: true, setTimeout: true }, options);
    }
    /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
    TryCatch.prototype.setupOnce = function () {
        var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
        if (this._options.setTimeout) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(global, 'setTimeout', _wrapTimeFunction);
        }
        if (this._options.setInterval) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(global, 'setInterval', _wrapTimeFunction);
        }
        if (this._options.requestAnimationFrame) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(global, 'requestAnimationFrame', _wrapRAF);
        }
        if (this._options.XMLHttpRequest && 'XMLHttpRequest' in global) {
            Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(XMLHttpRequest.prototype, 'send', _wrapXHR);
        }
        var eventTargetOption = this._options.eventTarget;
        if (eventTargetOption) {
            var eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
            eventTarget.forEach(_wrapEventTarget);
        }
    };
    /**
     * @inheritDoc
     */
    TryCatch.id = 'TryCatch';
    return TryCatch;
}());

/** JSDoc */
function _wrapTimeFunction(original) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var originalCallback = args[0];
        args[0] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(originalCallback, {
            mechanism: {
                data: { function: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(original) },
                handled: true,
                type: 'instrument',
            },
        });
        return original.apply(this, args);
    };
}
/** JSDoc */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _wrapRAF(original) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (callback) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return original.apply(this, [
            Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(callback, {
                mechanism: {
                    data: {
                        function: 'requestAnimationFrame',
                        handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(original),
                    },
                    handled: true,
                    type: 'instrument',
                },
            }),
        ]);
    };
}
/** JSDoc */
function _wrapXHR(originalSend) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var xhr = this;
        var xmlHttpRequestProps = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
        xmlHttpRequestProps.forEach(function (prop) {
            if (prop in xhr && typeof xhr[prop] === 'function') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(xhr, prop, function (original) {
                    var wrapOptions = {
                        mechanism: {
                            data: {
                                function: prop,
                                handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(original),
                            },
                            handled: true,
                            type: 'instrument',
                        },
                    };
                    // If Instrument integration has been called before TryCatch, get the name of original function
                    var originalFunction = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getOriginalFunction"])(original);
                    if (originalFunction) {
                        wrapOptions.mechanism.data.handler = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(originalFunction);
                    }
                    // Otherwise wrap directly
                    return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(original, wrapOptions);
                });
            }
        });
        return originalSend.apply(this, args);
    };
}
/** JSDoc */
function _wrapEventTarget(target) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var proto = global[target] && global[target].prototype;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
        return;
    }
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(proto, 'addEventListener', function (original) {
        return function (eventName, fn, options) {
            try {
                if (typeof fn.handleEvent === 'function') {
                    fn.handleEvent = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(fn.handleEvent.bind(fn), {
                        mechanism: {
                            data: {
                                function: 'handleEvent',
                                handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(fn),
                                target: target,
                            },
                            handled: true,
                            type: 'instrument',
                        },
                    });
                }
            }
            catch (err) {
                // can sometimes get 'Permission denied to access property "handle Event'
            }
            return original.apply(this, [
                eventName,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["wrap"])(fn, {
                    mechanism: {
                        data: {
                            function: 'addEventListener',
                            handler: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getFunctionName"])(fn),
                            target: target,
                        },
                        handled: true,
                        type: 'instrument',
                    },
                }),
                options,
            ]);
        };
    });
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(proto, 'removeEventListener', function (originalRemoveEventListener) {
        return function (eventName, fn, options) {
            /**
             * There are 2 possible scenarios here:
             *
             * 1. Someone passes a callback, which was attached prior to Sentry initialization, or by using unmodified
             * method, eg. `document.addEventListener.call(el, name, handler). In this case, we treat this function
             * as a pass-through, and call original `removeEventListener` with it.
             *
             * 2. Someone passes a callback, which was attached after Sentry was initialized, which means that it was using
             * our wrapped version of `addEventListener`, which internally calls `wrap` helper.
             * This helper "wraps" whole callback inside a try/catch statement, and attached appropriate metadata to it,
             * in order for us to make a distinction between wrapped/non-wrapped functions possible.
             * If a function was wrapped, it has additional property of `__sentry_wrapped__`, holding the handler.
             *
             * When someone adds a handler prior to initialization, and then do it again, but after,
             * then we have to detach both of them. Otherwise, if we'd detach only wrapped one, it'd be impossible
             * to get rid of the initial handler and it'd stick there forever.
             */
            var wrappedEventHandler = fn;
            try {
                var originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
                if (originalEventHandler) {
                    originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
                }
            }
            catch (e) {
                // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
            }
            return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
    });
}
//# sourceMappingURL=trycatch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/integrations/useragent.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/integrations/useragent.js ***!
  \********************************************************************/
/*! exports provided: UserAgent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAgent", function() { return UserAgent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");



var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
/** UserAgent */
var UserAgent = /** @class */ (function () {
    function UserAgent() {
        /**
         * @inheritDoc
         */
        this.name = UserAgent.id;
    }
    /**
     * @inheritDoc
     */
    UserAgent.prototype.setupOnce = function () {
        Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event) {
            if (Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getIntegration(UserAgent)) {
                // if none of the information we want exists, don't bother
                if (!global.navigator && !global.location && !global.document) {
                    return event;
                }
                // grab as much info as exists and add it to the event
                var url = (event.request && event.request.url) || (global.location && global.location.href);
                var referrer = (global.document || {}).referrer;
                var userAgent = (global.navigator || {}).userAgent;
                var headers = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (event.request && event.request.headers)), (referrer && { Referer: referrer })), (userAgent && { 'User-Agent': userAgent }));
                var request = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (url && { url: url })), { headers: headers });
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { request: request });
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    UserAgent.id = 'UserAgent';
    return UserAgent;
}());

//# sourceMappingURL=useragent.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/sdk.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/sdk.js ***!
  \*************************************************/
/*! exports provided: defaultIntegrations, init, showReportDialog, lastEventId, forceLoad, onLoad, flush, close, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return defaultIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return showReportDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return lastEventId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return forceLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return flush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "close", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client */ "./node_modules/@sentry/browser/esm/client.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/browser/esm/flags.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./node_modules/@sentry/browser/esm/helpers.js");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/browser/esm/integrations/index.js");







var defaultIntegrations = [
    new _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Integrations"].InboundFilters(),
    new _sentry_core__WEBPACK_IMPORTED_MODULE_1__["Integrations"].FunctionToString(),
    new _integrations__WEBPACK_IMPORTED_MODULE_6__["TryCatch"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_6__["Breadcrumbs"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_6__["GlobalHandlers"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_6__["LinkedErrors"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_6__["Dedupe"](),
    new _integrations__WEBPACK_IMPORTED_MODULE_6__["UserAgent"](),
];
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init(options) {
    if (options === void 0) { options = {}; }
    if (options.defaultIntegrations === undefined) {
        options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === undefined) {
        var window_1 = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
        // This supports the variable that sentry-webpack-plugin injects
        if (window_1.SENTRY_RELEASE && window_1.SENTRY_RELEASE.id) {
            options.release = window_1.SENTRY_RELEASE.id;
        }
    }
    if (options.autoSessionTracking === undefined) {
        options.autoSessionTracking = true;
    }
    if (options.sendClientReports === undefined) {
        options.sendClientReports = true;
    }
    Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["initAndBind"])(_client__WEBPACK_IMPORTED_MODULE_3__["BrowserClient"], options);
    if (options.autoSessionTracking) {
        startSessionTracking();
    }
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog(options) {
    if (options === void 0) { options = {}; }
    var hub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
    var scope = hub.getScope();
    if (scope) {
        options.user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, scope.getUser()), options.user);
    }
    if (!options.eventId) {
        options.eventId = hub.lastEventId();
    }
    var client = hub.getClient();
    if (client) {
        client.showReportDialog(options);
    }
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
    return Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().lastEventId();
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function forceLoad() {
    // Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function onLoad(callback) {
    callback();
}
/**
 * Call `flush()` on the current client, if there is one. See {@link Client.flush}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue. Omitting this parameter will cause
 * the client to wait until all events are sent before resolving the promise.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
function flush(timeout) {
    var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getClient();
    if (client) {
        return client.flush(timeout);
    }
    _flags__WEBPACK_IMPORTED_MODULE_4__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Cannot flush events. No client defined.');
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(false);
}
/**
 * Call `close()` on the current client, if there is one. See {@link Client.close}.
 *
 * @param timeout Maximum time in ms the client should wait to flush its event queue before shutting down. Omitting this
 * parameter will cause the client to wait until all events are sent before disabling itself.
 * @returns A promise which resolves to `true` if the queue successfully drains before the timeout, or `false` if it
 * doesn't (or if there's no client defined).
 */
function close(timeout) {
    var client = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getClient();
    if (client) {
        return client.close(timeout);
    }
    _flags__WEBPACK_IMPORTED_MODULE_4__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Cannot flush events and disable SDK. No client defined.');
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(false);
}
/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 *
 * @returns The result of wrapped function call.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrap(fn) {
    return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["wrap"])(fn)();
}
function startSessionOnHub(hub) {
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
}
/**
 * Enable automatic Session Tracking for the initial page load.
 */
function startSessionTracking() {
    var window = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
    var document = window.document;
    if (typeof document === 'undefined') {
        _flags__WEBPACK_IMPORTED_MODULE_4__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Session tracking in non-browser environment with @sentry/browser is not supported.');
        return;
    }
    var hub = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
    // The only way for this to be false is for there to be a version mismatch between @sentry/browser (>= 6.0.0) and
    // @sentry/hub (< 5.27.0). In the simple case, there won't ever be such a mismatch, because the two packages are
    // pinned at the same version in package.json, but there are edge cases where it's possible. See
    // https://github.com/getsentry/sentry-javascript/issues/3207 and
    // https://github.com/getsentry/sentry-javascript/issues/3234 and
    // https://github.com/getsentry/sentry-javascript/issues/3278.
    if (!hub.captureSession) {
        return;
    }
    // The session duration for browser sessions does not track a meaningful
    // concept that can be used as a metric.
    // Automatically captured sessions are akin to page views, and thus we
    // discard their duration.
    startSessionOnHub(hub);
    // We want to create a session for every navigation as well
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addInstrumentationHandler"])('history', function (_a) {
        var from = _a.from, to = _a.to;
        // Don't create an additional session for the initial route or if the location did not change
        if (!(from === undefined || from === to)) {
            startSessionOnHub(Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])());
        }
    });
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/stack-parsers.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/stack-parsers.js ***!
  \***********************************************************/
/*! exports provided: chromeStackParser, geckoStackParser, winjsStackParser, opera10StackParser, opera11StackParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chromeStackParser", function() { return chromeStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geckoStackParser", function() { return geckoStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "winjsStackParser", function() { return winjsStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opera10StackParser", function() { return opera10StackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opera11StackParser", function() { return opera11StackParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// global reference to slice
var UNKNOWN_FUNCTION = '?';
var OPERA10_PRIORITY = 10;
var OPERA11_PRIORITY = 20;
var CHROME_PRIORITY = 30;
var WINJS_PRIORITY = 40;
var GECKO_PRIORITY = 50;
function createFrame(filename, func, lineno, colno) {
    var frame = {
        filename: filename,
        function: func,
        // All browser frames are considered in_app
        in_app: true,
    };
    if (lineno !== undefined) {
        frame.lineno = lineno;
    }
    if (colno !== undefined) {
        frame.colno = colno;
    }
    return frame;
}
// Chromium based browsers: Chrome, Brave, new Opera, new Edge
var chromeRegex = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var chrome = function (line) {
    var parts = chromeRegex.exec(line);
    if (parts) {
        var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line
        if (isEval) {
            var subMatch = chromeEvalRegex.exec(parts[2]);
            if (subMatch) {
                // throw out eval line/column and use top-most line/column number
                parts[2] = subMatch[1]; // url
                parts[3] = subMatch[2]; // line
                parts[4] = subMatch[3]; // column
            }
        }
        // Kamil: One more hack won't hurt us right? Understanding and adding more rules on top of these regexps right now
        // would be way too time consuming. (TODO: Rewrite whole RegExp to be more readable)
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]), 2), func = _a[0], filename = _a[1];
        return createFrame(filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
    }
    return;
};
var chromeStackParser = [CHROME_PRIORITY, chrome];
// gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
// generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
// We need this specific case for now because we want no other regex to match.
var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var gecko = function (line) {
    var _a;
    var parts = geckoREgex.exec(line);
    if (parts) {
        var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
        if (isEval) {
            var subMatch = geckoEvalRegex.exec(parts[3]);
            if (subMatch) {
                // throw out eval line/column and use top-most line number
                parts[1] = parts[1] || 'eval';
                parts[3] = subMatch[1];
                parts[4] = subMatch[2];
                parts[5] = ''; // no column when eval
            }
        }
        var filename = parts[3];
        var func = parts[1] || UNKNOWN_FUNCTION;
        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(extractSafariExtensionDetails(func, filename), 2), func = _a[0], filename = _a[1];
        return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
    }
    return;
};
var geckoStackParser = [GECKO_PRIORITY, gecko];
var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var winjs = function (line) {
    var parts = winjsRegex.exec(line);
    return parts
        ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : undefined)
        : undefined;
};
var winjsStackParser = [WINJS_PRIORITY, winjs];
var opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
var opera10 = function (line) {
    var parts = opera10Regex.exec(line);
    return parts ? createFrame(parts[2], parts[3] || UNKNOWN_FUNCTION, +parts[1]) : undefined;
};
var opera10StackParser = [OPERA10_PRIORITY, opera10];
var opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
var opera11 = function (line) {
    var parts = opera11Regex.exec(line);
    return parts ? createFrame(parts[5], parts[3] || parts[4] || UNKNOWN_FUNCTION, +parts[1], +parts[2]) : undefined;
};
var opera11StackParser = [OPERA11_PRIORITY, opera11];
/**
 * Safari web extensions, starting version unknown, can produce "frames-only" stacktraces.
 * What it means, is that instead of format like:
 *
 * Error: wat
 *   at function@url:row:col
 *   at function@url:row:col
 *   at function@url:row:col
 *
 * it produces something like:
 *
 *   function@url:row:col
 *   function@url:row:col
 *   function@url:row:col
 *
 * Because of that, it won't be captured by `chrome` RegExp and will fall into `Gecko` branch.
 * This function is extracted so that we can use it in both places without duplicating the logic.
 * Unfortunately "just" changing RegExp is too complicated now and making it pass all tests
 * and fix this case seems like an impossible, or at least way too time-consuming task.
 */
var extractSafariExtensionDetails = function (func, filename) {
    var isSafariExtension = func.indexOf('safari-extension') !== -1;
    var isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
    return isSafariExtension || isSafariWebExtension
        ? [
            func.indexOf('@') !== -1 ? func.split('@')[0] : UNKNOWN_FUNCTION,
            isSafariExtension ? "safari-extension:" + filename : "safari-web-extension:" + filename,
        ]
        : [func, filename];
};
//# sourceMappingURL=stack-parsers.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/base.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/base.js ***!
  \*************************************************************/
/*! exports provided: BaseTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTransport", function() { return BaseTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flags */ "./node_modules/@sentry/browser/esm/flags.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/browser/esm/transports/utils.js");





function requestTypeToCategory(ty) {
    var tyStr = ty;
    return tyStr === 'event' ? 'error' : tyStr;
}
var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
/** Base Transport class implementation */
var BaseTransport = /** @class */ (function () {
    function BaseTransport(options) {
        var _this = this;
        this.options = options;
        /** A simple buffer holding all requests. */
        this._buffer = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["makePromiseBuffer"])(30);
        /** Locks transport after receiving rate limits in a response */
        this._rateLimits = {};
        this._outcomes = {};
        this._api = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["initAPIDetails"])(options.dsn, options._metadata, options.tunnel);
        // eslint-disable-next-line deprecation/deprecation
        this.url = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getStoreEndpointWithUrlEncodedAuth"])(this._api.dsn);
        if (this.options.sendClientReports && global.document) {
            global.document.addEventListener('visibilitychange', function () {
                if (global.document.visibilityState === 'hidden') {
                    _this._flushOutcomes();
                }
            });
        }
    }
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendEvent = function (event) {
        return this._sendRequest(Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["eventToSentryRequest"])(event, this._api), event);
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.sendSession = function (session) {
        return this._sendRequest(Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["sessionToSentryRequest"])(session, this._api), session);
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.close = function (timeout) {
        return this._buffer.drain(timeout);
    };
    /**
     * @inheritDoc
     */
    BaseTransport.prototype.recordLostEvent = function (reason, category) {
        var _a;
        if (!this.options.sendClientReports) {
            return;
        }
        // We want to track each category (event, transaction, session) separately
        // but still keep the distinction between different type of outcomes.
        // We could use nested maps, but it's much easier to read and type this way.
        // A correct type for map-based implementation if we want to go that route
        // would be `Partial<Record<SentryRequestType, Partial<Record<Outcome, number>>>>`
        var key = requestTypeToCategory(category) + ":" + reason;
        _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Adding outcome: " + key);
        this._outcomes[key] = (_a = this._outcomes[key], (_a !== null && _a !== void 0 ? _a : 0)) + 1;
    };
    /**
     * Send outcomes as an envelope
     */
    BaseTransport.prototype._flushOutcomes = function () {
        if (!this.options.sendClientReports) {
            return;
        }
        var outcomes = this._outcomes;
        this._outcomes = {};
        // Nothing to send
        if (!Object.keys(outcomes).length) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log('No outcomes to flush');
            return;
        }
        _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Flushing outcomes:\n" + JSON.stringify(outcomes, null, 2));
        var url = Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["getEnvelopeEndpointWithUrlEncodedAuth"])(this._api.dsn, this._api.tunnel);
        var discardedEvents = Object.keys(outcomes).map(function (key) {
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(key.split(':'), 2), category = _a[0], reason = _a[1];
            return {
                reason: reason,
                category: category,
                quantity: outcomes[key],
            };
            // TODO: Improve types on discarded_events to get rid of cast
        });
        var envelope = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["createClientReportEnvelope"])(discardedEvents, this._api.tunnel && Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["dsnToString"])(this._api.dsn));
        try {
            Object(_utils__WEBPACK_IMPORTED_MODULE_4__["sendReport"])(url, Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["serializeEnvelope"])(envelope));
        }
        catch (e) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error(e);
        }
    };
    /**
     * Handle Sentry repsonse for promise-based transports.
     */
    BaseTransport.prototype._handleResponse = function (_a) {
        var requestType = _a.requestType, response = _a.response, headers = _a.headers, resolve = _a.resolve, reject = _a.reject;
        var status = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["eventStatusFromHttpCode"])(response.status);
        this._rateLimits = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["updateRateLimits"])(this._rateLimits, headers);
        // eslint-disable-next-line deprecation/deprecation
        if (this._isRateLimited(requestType)) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] &&
                // eslint-disable-next-line deprecation/deprecation
                _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Too many " + requestType + " requests, backing off until: " + this._disabledUntil(requestType));
        }
        if (status === 'success') {
            resolve({ status: status });
            return;
        }
        reject(response);
    };
    /**
     * Gets the time that given category is disabled until for rate limiting
     *
     * @deprecated Please use `disabledUntil` from @sentry/utils
     */
    BaseTransport.prototype._disabledUntil = function (requestType) {
        var category = requestTypeToCategory(requestType);
        return new Date(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["disabledUntil"])(this._rateLimits, category));
    };
    /**
     * Checks if a category is rate limited
     *
     * @deprecated Please use `isRateLimited` from @sentry/utils
     */
    BaseTransport.prototype._isRateLimited = function (requestType) {
        var category = requestTypeToCategory(requestType);
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isRateLimited"])(this._rateLimits, category);
    };
    return BaseTransport;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/fetch.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/fetch.js ***!
  \**************************************************************/
/*! exports provided: FetchTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTransport", function() { return FetchTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/browser/esm/transports/utils.js");




/** `fetch` based transport */
var FetchTransport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FetchTransport, _super);
    function FetchTransport(options, fetchImpl) {
        if (fetchImpl === void 0) { fetchImpl = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getNativeFetchImplementation"])(); }
        var _this = _super.call(this, options) || this;
        _this._fetch = fetchImpl;
        return _this;
    }
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    FetchTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        // eslint-disable-next-line deprecation/deprecation
        if (this._isRateLimited(sentryRequest.type)) {
            this.recordLostEvent('ratelimit_backoff', sentryRequest.type);
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                // eslint-disable-next-line deprecation/deprecation
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        var options = {
            body: sentryRequest.body,
            method: 'POST',
            // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
            // (see https://caniuse.com/#feat=referrer-policy),
            // it doesn't. And it throws an exception instead of ignoring this parameter...
            // REF: https://github.com/getsentry/raven-js/issues/1233
            referrerPolicy: (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["supportsReferrerPolicy"])() ? 'origin' : ''),
        };
        if (this.options.fetchParameters !== undefined) {
            Object.assign(options, this.options.fetchParameters);
        }
        if (this.options.headers !== undefined) {
            options.headers = this.options.headers;
        }
        return this._buffer
            .add(function () {
            return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
                void _this._fetch(sentryRequest.url, options)
                    .then(function (response) {
                    var headers = {
                        'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                        'retry-after': response.headers.get('Retry-After'),
                    };
                    _this._handleResponse({
                        requestType: sentryRequest.type,
                        response: response,
                        headers: headers,
                        resolve: resolve,
                        reject: reject,
                    });
                })
                    .catch(reject);
            });
        })
            .then(undefined, function (reason) {
            // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
            if (reason instanceof _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SentryError"]) {
                _this.recordLostEvent('queue_overflow', sentryRequest.type);
            }
            else {
                _this.recordLostEvent('network_error', sentryRequest.type);
            }
            throw reason;
        });
    };
    return FetchTransport;
}(_base__WEBPACK_IMPORTED_MODULE_2__["BaseTransport"]));

//# sourceMappingURL=fetch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/index.js ***!
  \**************************************************************/
/*! exports provided: BaseTransport, FetchTransport, XHRTransport, makeNewFetchTransport, makeNewXHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseTransport", function() { return _base__WEBPACK_IMPORTED_MODULE_0__["BaseTransport"]; });

/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ "./node_modules/@sentry/browser/esm/transports/fetch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchTransport", function() { return _fetch__WEBPACK_IMPORTED_MODULE_1__["FetchTransport"]; });

/* harmony import */ var _xhr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xhr */ "./node_modules/@sentry/browser/esm/transports/xhr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHRTransport", function() { return _xhr__WEBPACK_IMPORTED_MODULE_2__["XHRTransport"]; });

/* harmony import */ var _new_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-fetch */ "./node_modules/@sentry/browser/esm/transports/new-fetch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeNewFetchTransport", function() { return _new_fetch__WEBPACK_IMPORTED_MODULE_3__["makeNewFetchTransport"]; });

/* harmony import */ var _new_xhr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-xhr */ "./node_modules/@sentry/browser/esm/transports/new-xhr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeNewXHRTransport", function() { return _new_xhr__WEBPACK_IMPORTED_MODULE_4__["makeNewXHRTransport"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/new-fetch.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/new-fetch.js ***!
  \******************************************************************/
/*! exports provided: makeNewFetchTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeNewFetchTransport", function() { return makeNewFetchTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@sentry/browser/esm/transports/utils.js");



/**
 * Creates a Transport that uses the Fetch API to send events to Sentry.
 */
function makeNewFetchTransport(options, nativeFetch) {
    if (nativeFetch === void 0) { nativeFetch = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getNativeFetchImplementation"])(); }
    function makeRequest(request) {
        var requestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ body: request.body, method: 'POST', referrerPolicy: 'origin' }, options.requestOptions);
        return nativeFetch(options.url, requestOptions).then(function (response) {
            return response.text().then(function (body) { return ({
                body: body,
                headers: {
                    'x-sentry-rate-limits': response.headers.get('X-Sentry-Rate-Limits'),
                    'retry-after': response.headers.get('Retry-After'),
                },
                reason: response.statusText,
                statusCode: response.status,
            }); });
        });
    }
    return Object(_sentry_core__WEBPACK_IMPORTED_MODULE_1__["createTransport"])({ bufferSize: options.bufferSize }, makeRequest);
}
//# sourceMappingURL=new-fetch.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/new-xhr.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/new-xhr.js ***!
  \****************************************************************/
/*! exports provided: makeNewXHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeNewXHRTransport", function() { return makeNewXHRTransport; });
/* harmony import */ var _sentry_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/core */ "./node_modules/@sentry/core/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/**
 * The DONE ready state for XmlHttpRequest
 *
 * Defining it here as a constant b/c XMLHttpRequest.DONE is not always defined
 * (e.g. during testing, it is `undefined`)
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState}
 */
var XHR_READYSTATE_DONE = 4;
/**
 * Creates a Transport that uses the XMLHttpRequest API to send events to Sentry.
 */
function makeNewXHRTransport(options) {
    function makeRequest(request) {
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, _reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XHR_READYSTATE_DONE) {
                    var response = {
                        body: xhr.response,
                        headers: {
                            'x-sentry-rate-limits': xhr.getResponseHeader('X-Sentry-Rate-Limits'),
                            'retry-after': xhr.getResponseHeader('Retry-After'),
                        },
                        reason: xhr.statusText,
                        statusCode: xhr.status,
                    };
                    resolve(response);
                }
            };
            xhr.open('POST', options.url);
            for (var header in options.headers) {
                if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
                    xhr.setRequestHeader(header, options.headers[header]);
                }
            }
            xhr.send(request.body);
        });
    }
    return Object(_sentry_core__WEBPACK_IMPORTED_MODULE_0__["createTransport"])({ bufferSize: options.bufferSize }, makeRequest);
}
//# sourceMappingURL=new-xhr.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/utils.js ***!
  \**************************************************************/
/*! exports provided: getNativeFetchImplementation, sendReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeFetchImplementation", function() { return getNativeFetchImplementation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendReport", function() { return sendReport; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flags */ "./node_modules/@sentry/browser/esm/flags.js");


var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
var cachedFetchImpl;
/**
 * A special usecase for incorrectly wrapped Fetch APIs in conjunction with ad-blockers.
 * Whenever someone wraps the Fetch API and returns the wrong promise chain,
 * this chain becomes orphaned and there is no possible way to capture it's rejections
 * other than allowing it bubble up to this very handler. eg.
 *
 * const f = window.fetch;
 * window.fetch = function () {
 *   const p = f.apply(this, arguments);
 *
 *   p.then(function() {
 *     console.log('hi.');
 *   });
 *
 *   return p;
 * }
 *
 * `p.then(function () { ... })` is producing a completely separate promise chain,
 * however, what's returned is `p` - the result of original `fetch` call.
 *
 * This mean, that whenever we use the Fetch API to send our own requests, _and_
 * some ad-blocker blocks it, this orphaned chain will _always_ reject,
 * effectively causing another event to be captured.
 * This makes a whole process become an infinite loop, which we need to somehow
 * deal with, and break it in one way or another.
 *
 * To deal with this issue, we are making sure that we _always_ use the real
 * browser Fetch API, instead of relying on what `window.fetch` exposes.
 * The only downside to this would be missing our own requests as breadcrumbs,
 * but because we are already not doing this, it should be just fine.
 *
 * Possible failed fetch error messages per-browser:
 *
 * Chrome:  Failed to fetch
 * Edge:    Failed to Fetch
 * Firefox: NetworkError when attempting to fetch resource
 * Safari:  resource blocked by content blocker
 */
function getNativeFetchImplementation() {
    if (cachedFetchImpl) {
        return cachedFetchImpl;
    }
    /* eslint-disable @typescript-eslint/unbound-method */
    // Fast path to avoid DOM I/O
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isNativeFetch"])(global.fetch)) {
        return (cachedFetchImpl = global.fetch.bind(global));
    }
    var document = global.document;
    var fetchImpl = global.fetch;
    // eslint-disable-next-line deprecation/deprecation
    if (document && typeof document.createElement === 'function') {
        try {
            var sandbox = document.createElement('iframe');
            sandbox.hidden = true;
            document.head.appendChild(sandbox);
            var contentWindow = sandbox.contentWindow;
            if (contentWindow && contentWindow.fetch) {
                fetchImpl = contentWindow.fetch;
            }
            document.head.removeChild(sandbox);
        }
        catch (e) {
            _flags__WEBPACK_IMPORTED_MODULE_1__["IS_DEBUG_BUILD"] &&
                _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', e);
        }
    }
    return (cachedFetchImpl = fetchImpl.bind(global));
    /* eslint-enable @typescript-eslint/unbound-method */
}
/**
 * Sends sdk client report using sendBeacon or fetch as a fallback if available
 *
 * @param url report endpoint
 * @param body report payload
 */
function sendReport(url, body) {
    var isRealNavigator = Object.prototype.toString.call(global && global.navigator) === '[object Navigator]';
    var hasSendBeacon = isRealNavigator && typeof global.navigator.sendBeacon === 'function';
    if (hasSendBeacon) {
        // Prevent illegal invocations - https://xgwang.me/posts/you-may-not-know-beacon/#it-may-throw-error%2C-be-sure-to-catch
        var sendBeacon = global.navigator.sendBeacon.bind(global.navigator);
        return sendBeacon(url, body);
    }
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["supportsFetch"])()) {
        var fetch_1 = getNativeFetchImplementation();
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["forget"])(fetch_1(url, {
            body: body,
            method: 'POST',
            credentials: 'omit',
            keepalive: true,
        }));
    }
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/transports/xhr.js":
/*!************************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/transports/xhr.js ***!
  \************************************************************/
/*! exports provided: XHRTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRTransport", function() { return XHRTransport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./node_modules/@sentry/browser/esm/transports/base.js");



/** `XHR` based transport */
var XHRTransport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(XHRTransport, _super);
    function XHRTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param sentryRequest Prepared SentryRequest to be delivered
     * @param originalPayload Original payload used to create SentryRequest
     */
    XHRTransport.prototype._sendRequest = function (sentryRequest, originalPayload) {
        var _this = this;
        // eslint-disable-next-line deprecation/deprecation
        if (this._isRateLimited(sentryRequest.type)) {
            this.recordLostEvent('ratelimit_backoff', sentryRequest.type);
            return Promise.reject({
                event: originalPayload,
                type: sentryRequest.type,
                // eslint-disable-next-line deprecation/deprecation
                reason: "Transport for " + sentryRequest.type + " requests locked till " + this._disabledUntil(sentryRequest.type) + " due to too many requests.",
                status: 429,
            });
        }
        return this._buffer
            .add(function () {
            return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (request.readyState === 4) {
                        var headers = {
                            'x-sentry-rate-limits': request.getResponseHeader('X-Sentry-Rate-Limits'),
                            'retry-after': request.getResponseHeader('Retry-After'),
                        };
                        _this._handleResponse({ requestType: sentryRequest.type, response: request, headers: headers, resolve: resolve, reject: reject });
                    }
                };
                request.open('POST', sentryRequest.url);
                for (var header in _this.options.headers) {
                    if (Object.prototype.hasOwnProperty.call(_this.options.headers, header)) {
                        request.setRequestHeader(header, _this.options.headers[header]);
                    }
                }
                request.send(sentryRequest.body);
            });
        })
            .then(undefined, function (reason) {
            // It's either buffer rejection or any other xhr/fetch error, which are treated as NetworkError.
            if (reason instanceof _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SentryError"]) {
                _this.recordLostEvent('queue_overflow', sentryRequest.type);
            }
            else {
                _this.recordLostEvent('network_error', sentryRequest.type);
            }
            throw reason;
        });
    };
    return XHRTransport;
}(_base__WEBPACK_IMPORTED_MODULE_2__["BaseTransport"]));

//# sourceMappingURL=xhr.js.map

/***/ }),

/***/ "./node_modules/@sentry/browser/esm/version.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/browser/esm/version.js ***!
  \*****************************************************/
/*! exports provided: SDK_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return SDK_NAME; });
// TODO: Remove in the next major release and rely only on @sentry/core SDK_VERSION and SdkInfo metadata
var SDK_NAME = 'sentry.javascript.browser';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/api.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/api.js ***!
  \**********************************************/
/*! exports provided: API, initAPIDetails, getStoreEndpointWithUrlEncodedAuth, getEnvelopeEndpointWithUrlEncodedAuth, getRequestHeaders, getReportDialogEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAPIDetails", function() { return initAPIDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreEndpointWithUrlEncodedAuth", function() { return getStoreEndpointWithUrlEncodedAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeEndpointWithUrlEncodedAuth", function() { return getEnvelopeEndpointWithUrlEncodedAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestHeaders", function() { return getRequestHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReportDialogEndpoint", function() { return getReportDialogEndpoint; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

var SENTRY_API_VERSION = '7';
/**
 * Helper class to provide urls, headers and metadata that can be used to form
 * different types of requests to Sentry endpoints.
 * Supports both envelopes and regular event requests.
 *
 * @deprecated Please use APIDetails
 **/
var API = /** @class */ (function () {
    /** Create a new instance of API */
    function API(dsn, metadata, tunnel) {
        if (metadata === void 0) { metadata = {}; }
        this.dsn = dsn;
        this._dsnObject = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["makeDsn"])(dsn);
        this.metadata = metadata;
        this._tunnel = tunnel;
    }
    /** Returns the Dsn object. */
    API.prototype.getDsn = function () {
        return this._dsnObject;
    };
    /** Does this transport force envelopes? */
    API.prototype.forceEnvelope = function () {
        return !!this._tunnel;
    };
    /** Returns the prefix to construct Sentry ingestion API endpoints. */
    API.prototype.getBaseApiEndpoint = function () {
        return getBaseApiEndpoint(this._dsnObject);
    };
    /** Returns the store endpoint URL. */
    API.prototype.getStoreEndpoint = function () {
        return getStoreEndpoint(this._dsnObject);
    };
    /**
     * Returns the store endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        return getStoreEndpointWithUrlEncodedAuth(this._dsnObject);
    };
    /**
     * Returns the envelope endpoint URL with auth in the query string.
     *
     * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
     */
    API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
        return getEnvelopeEndpointWithUrlEncodedAuth(this._dsnObject, this._tunnel);
    };
    return API;
}());

/** Initializes API Details */
function initAPIDetails(dsn, metadata, tunnel) {
    return {
        initDsn: dsn,
        metadata: metadata || {},
        dsn: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["makeDsn"])(dsn),
        tunnel: tunnel,
    };
}
/** Returns the prefix to construct Sentry ingestion API endpoints. */
function getBaseApiEndpoint(dsn) {
    var protocol = dsn.protocol ? dsn.protocol + ":" : '';
    var port = dsn.port ? ":" + dsn.port : '';
    return protocol + "//" + dsn.host + port + (dsn.path ? "/" + dsn.path : '') + "/api/";
}
/** Returns the ingest API endpoint for target. */
function _getIngestEndpoint(dsn, target) {
    return "" + getBaseApiEndpoint(dsn) + dsn.projectId + "/" + target + "/";
}
/** Returns a URL-encoded string with auth config suitable for a query string. */
function _encodedAuth(dsn) {
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["urlEncode"])({
        // We send only the minimum set of required information. See
        // https://github.com/getsentry/sentry-javascript/issues/2572.
        sentry_key: dsn.publicKey,
        sentry_version: SENTRY_API_VERSION,
    });
}
/** Returns the store endpoint URL. */
function getStoreEndpoint(dsn) {
    return _getIngestEndpoint(dsn, 'store');
}
/**
 * Returns the store endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */
function getStoreEndpointWithUrlEncodedAuth(dsn) {
    return getStoreEndpoint(dsn) + "?" + _encodedAuth(dsn);
}
/** Returns the envelope endpoint URL. */
function _getEnvelopeEndpoint(dsn) {
    return _getIngestEndpoint(dsn, 'envelope');
}
/**
 * Returns the envelope endpoint URL with auth in the query string.
 *
 * Sending auth as part of the query string and not as custom HTTP headers avoids CORS preflight requests.
 */
function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnel) {
    return tunnel ? tunnel : _getEnvelopeEndpoint(dsn) + "?" + _encodedAuth(dsn);
}
/**
 * Returns an object that can be used in request headers.
 * This is needed for node and the old /store endpoint in sentry
 */
function getRequestHeaders(dsn, clientName, clientVersion) {
    // CHANGE THIS to use metadata but keep clientName and clientVersion compatible
    var header = ["Sentry sentry_version=" + SENTRY_API_VERSION];
    header.push("sentry_client=" + clientName + "/" + clientVersion);
    header.push("sentry_key=" + dsn.publicKey);
    if (dsn.pass) {
        header.push("sentry_secret=" + dsn.pass);
    }
    return {
        'Content-Type': 'application/json',
        'X-Sentry-Auth': header.join(', '),
    };
}
/** Returns the url to the report dialog endpoint. */
function getReportDialogEndpoint(dsnLike, dialogOptions) {
    var dsn = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["makeDsn"])(dsnLike);
    var endpoint = getBaseApiEndpoint(dsn) + "embed/error-page/";
    var encodedOptions = "dsn=" + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["dsnToString"])(dsn);
    for (var key in dialogOptions) {
        if (key === 'dsn') {
            continue;
        }
        if (key === 'user') {
            if (!dialogOptions.user) {
                continue;
            }
            if (dialogOptions.user.name) {
                encodedOptions += "&name=" + encodeURIComponent(dialogOptions.user.name);
            }
            if (dialogOptions.user.email) {
                encodedOptions += "&email=" + encodeURIComponent(dialogOptions.user.email);
            }
        }
        else {
            encodedOptions += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(dialogOptions[key]);
        }
    }
    return endpoint + "?" + encodedOptions;
}
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/basebackend.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/basebackend.js ***!
  \******************************************************/
/*! exports provided: BaseBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseBackend", function() { return BaseBackend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/@sentry/core/esm/api.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/core/esm/flags.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ "./node_modules/@sentry/core/esm/request.js");
/* harmony import */ var _transports_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transports/noop */ "./node_modules/@sentry/core/esm/transports/noop.js");






/**
 * This is the base implemention of a Backend.
 * @hidden
 */
var BaseBackend = /** @class */ (function () {
    /** Creates a new backend instance. */
    function BaseBackend(options) {
        this._options = options;
        if (!this._options.dsn) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('No DSN provided, backend will not do anything.');
        }
        this._transport = this._setupTransport();
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseBackend.prototype.eventFromException = function (_exception, _hint) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SentryError"]('Backend has to implement `eventFromException` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SentryError"]('Backend has to implement `eventFromMessage` method');
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendEvent = function (event) {
        // TODO(v7): Remove the if-else
        if (this._newTransport &&
            this._options.dsn &&
            this._options._experiments &&
            this._options._experiments.newTransport) {
            var api = Object(_api__WEBPACK_IMPORTED_MODULE_2__["initAPIDetails"])(this._options.dsn, this._options._metadata, this._options.tunnel);
            var env = Object(_request__WEBPACK_IMPORTED_MODULE_4__["createEventEnvelope"])(event, api);
            void this._newTransport.send(env).then(null, function (reason) {
                _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('Error while sending event:', reason);
            });
        }
        else {
            void this._transport.sendEvent(event).then(null, function (reason) {
                _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('Error while sending event:', reason);
            });
        }
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.sendSession = function (session) {
        if (!this._transport.sendSession) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Dropping session because custom transport doesn't implement sendSession");
            return;
        }
        // TODO(v7): Remove the if-else
        if (this._newTransport &&
            this._options.dsn &&
            this._options._experiments &&
            this._options._experiments.newTransport) {
            var api = Object(_api__WEBPACK_IMPORTED_MODULE_2__["initAPIDetails"])(this._options.dsn, this._options._metadata, this._options.tunnel);
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_request__WEBPACK_IMPORTED_MODULE_4__["createSessionEnvelope"])(session, api), 1), env = _a[0];
            void this._newTransport.send(env).then(null, function (reason) {
                _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('Error while sending session:', reason);
            });
        }
        else {
            void this._transport.sendSession(session).then(null, function (reason) {
                _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error('Error while sending session:', reason);
            });
        }
    };
    /**
     * @inheritDoc
     */
    BaseBackend.prototype.getTransport = function () {
        return this._transport;
    };
    /**
     * Sets up the transport so it can be used later to send requests.
     */
    BaseBackend.prototype._setupTransport = function () {
        return new _transports_noop__WEBPACK_IMPORTED_MODULE_5__["NoopTransport"]();
    };
    return BaseBackend;
}());

//# sourceMappingURL=basebackend.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/baseclient.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/core/esm/baseclient.js ***!
  \*****************************************************/
/*! exports provided: BaseClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return BaseClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/core/esm/flags.js");
/* harmony import */ var _integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./integration */ "./node_modules/@sentry/core/esm/integration.js");

/* eslint-disable max-lines */




var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
var BaseClient = /** @class */ (function () {
    /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
    function BaseClient(backendClass, options) {
        /** Array of used integrations. */
        this._integrations = {};
        /** Number of calls being processed */
        this._numProcessing = 0;
        this._backend = new backendClass(options);
        this._options = options;
        if (options.dsn) {
            this._dsn = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["makeDsn"])(options.dsn);
        }
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    BaseClient.prototype.captureException = function (exception, hint, scope) {
        var _this = this;
        // ensure we haven't captured this very object before
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["checkOrSetAlreadyCaught"])(exception)) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log(ALREADY_SEEN_ERROR);
            return;
        }
        var eventId = hint && hint.event_id;
        this._process(this._getBackend()
            .eventFromException(exception, hint)
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
        var _this = this;
        var eventId = hint && hint.event_id;
        var promisedEvent = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"])(message)
            ? this._getBackend().eventFromMessage(String(message), level, hint)
            : this._getBackend().eventFromException(message, hint);
        this._process(promisedEvent
            .then(function (event) { return _this._captureEvent(event, hint, scope); })
            .then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureEvent = function (event, hint, scope) {
        // ensure we haven't captured this very object before
        if (hint && hint.originalException && Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["checkOrSetAlreadyCaught"])(hint.originalException)) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log(ALREADY_SEEN_ERROR);
            return;
        }
        var eventId = hint && hint.event_id;
        this._process(this._captureEvent(event, hint, scope).then(function (result) {
            eventId = result;
        }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.captureSession = function (session) {
        if (!this._isEnabled()) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('SDK not enabled, will not capture session.');
            return;
        }
        if (!(typeof session.release === 'string')) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Discarded session because of missing or non-string release');
        }
        else {
            this._sendSession(session);
            // After sending, we set init false to indicate it's not the first occurrence
            session.update({ init: false });
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getDsn = function () {
        return this._dsn;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getOptions = function () {
        return this._options;
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getTransport = function () {
        return this._getBackend().getTransport();
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.flush = function (timeout) {
        var _this = this;
        return this._isClientDoneProcessing(timeout).then(function (clientFinished) {
            return _this.getTransport()
                .close(timeout)
                .then(function (transportFlushed) { return clientFinished && transportFlushed; });
        });
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.close = function (timeout) {
        var _this = this;
        return this.flush(timeout).then(function (result) {
            _this.getOptions().enabled = false;
            return result;
        });
    };
    /**
     * Sets up the integrations
     */
    BaseClient.prototype.setupIntegrations = function () {
        if (this._isEnabled() && !this._integrations.initialized) {
            this._integrations = Object(_integration__WEBPACK_IMPORTED_MODULE_4__["setupIntegrations"])(this._options);
        }
    };
    /**
     * @inheritDoc
     */
    BaseClient.prototype.getIntegration = function (integration) {
        try {
            return this._integrations[integration.id] || null;
        }
        catch (_oO) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Cannot retrieve integration " + integration.id + " from the current Client");
            return null;
        }
    };
    /** Updates existing session based on the provided event */
    BaseClient.prototype._updateSessionFromEvent = function (session, event) {
        var e_1, _a;
        var crashed = false;
        var errored = false;
        var exceptions = event.exception && event.exception.values;
        if (exceptions) {
            errored = true;
            try {
                for (var exceptions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(exceptions), exceptions_1_1 = exceptions_1.next(); !exceptions_1_1.done; exceptions_1_1 = exceptions_1.next()) {
                    var ex = exceptions_1_1.value;
                    var mechanism = ex.mechanism;
                    if (mechanism && mechanism.handled === false) {
                        crashed = true;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (exceptions_1_1 && !exceptions_1_1.done && (_a = exceptions_1.return)) _a.call(exceptions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        // A session is updated and that session update is sent in only one of the two following scenarios:
        // 1. Session with non terminal status and 0 errors + an error occurred -> Will set error count to 1 and send update
        // 2. Session with non terminal status and 1 error + a crash occurred -> Will set status crashed and send update
        var sessionNonTerminal = session.status === 'ok';
        var shouldUpdateAndSend = (sessionNonTerminal && session.errors === 0) || (sessionNonTerminal && crashed);
        if (shouldUpdateAndSend) {
            session.update(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (crashed && { status: 'crashed' })), { errors: session.errors || Number(errored || crashed) }));
            this.captureSession(session);
        }
    };
    /** Deliver captured session to Sentry */
    BaseClient.prototype._sendSession = function (session) {
        this._getBackend().sendSession(session);
    };
    /**
     * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
     * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
     * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
     * `false` otherwise
     */
    BaseClient.prototype._isClientDoneProcessing = function (timeout) {
        var _this = this;
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SyncPromise"](function (resolve) {
            var ticked = 0;
            var tick = 1;
            var interval = setInterval(function () {
                if (_this._numProcessing == 0) {
                    clearInterval(interval);
                    resolve(true);
                }
                else {
                    ticked += tick;
                    if (timeout && ticked >= timeout) {
                        clearInterval(interval);
                        resolve(false);
                    }
                }
            }, tick);
        });
    };
    /** Returns the current backend. */
    BaseClient.prototype._getBackend = function () {
        return this._backend;
    };
    /** Determines whether this SDK is enabled and a valid Dsn is present. */
    BaseClient.prototype._isEnabled = function () {
        return this.getOptions().enabled !== false && this._dsn !== undefined;
    };
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
    BaseClient.prototype._prepareEvent = function (event, scope, hint) {
        var _this = this;
        var _a = this.getOptions(), _b = _a.normalizeDepth, normalizeDepth = _b === void 0 ? 3 : _b, _c = _a.normalizeMaxBreadth, normalizeMaxBreadth = _c === void 0 ? 1000 : _c;
        var prepared = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { event_id: event.event_id || (hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["uuid4"])()), timestamp: event.timestamp || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["dateTimestampInSeconds"])() });
        this._applyClientOptions(prepared);
        this._applyIntegrationsMetadata(prepared);
        // If we have scope given to us, use it as the base for further modifications.
        // This allows us to prevent unnecessary copying of data if `captureContext` is not provided.
        var finalScope = scope;
        if (hint && hint.captureContext) {
            finalScope = _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Scope"].clone(finalScope).update(hint.captureContext);
        }
        // We prepare the result here with a resolved Event.
        var result = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["resolvedSyncPromise"])(prepared);
        // This should be the last thing called, since we want that
        // {@link Hub.addEventProcessor} gets the finished prepared event.
        if (finalScope) {
            // In case we have a hub we reassign it.
            result = finalScope.applyToEvent(prepared, hint);
        }
        return result.then(function (evt) {
            if (evt) {
                // TODO this is more of the hack trying to solve https://github.com/getsentry/sentry-javascript/issues/2809
                // it is only attached as extra data to the event if the event somehow skips being normalized
                evt.sdkProcessingMetadata = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, evt.sdkProcessingMetadata), { normalizeDepth: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(normalizeDepth) + " (" + typeof normalizeDepth + ")" });
            }
            if (typeof normalizeDepth === 'number' && normalizeDepth > 0) {
                return _this._normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
            }
            return evt;
        });
    };
    /**
     * Applies `normalize` function on necessary `Event` attributes to make them safe for serialization.
     * Normalized keys:
     * - `breadcrumbs.data`
     * - `user`
     * - `contexts`
     * - `extra`
     * @param event Event
     * @returns Normalized event
     */
    BaseClient.prototype._normalizeEvent = function (event, depth, maxBreadth) {
        if (!event) {
            return null;
        }
        var normalized = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), (event.breadcrumbs && {
            breadcrumbs: event.breadcrumbs.map(function (b) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, b), (b.data && {
                data: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(b.data, depth, maxBreadth),
            }))); }),
        })), (event.user && {
            user: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(event.user, depth, maxBreadth),
        })), (event.contexts && {
            contexts: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(event.contexts, depth, maxBreadth),
        })), (event.extra && {
            extra: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["normalize"])(event.extra, depth, maxBreadth),
        }));
        // event.contexts.trace stores information about a Transaction. Similarly,
        // event.spans[] stores information about child Spans. Given that a
        // Transaction is conceptually a Span, normalization should apply to both
        // Transactions and Spans consistently.
        // For now the decision is to skip normalization of Transactions and Spans,
        // so this block overwrites the normalized event to add back the original
        // Transaction information prior to normalization.
        if (event.contexts && event.contexts.trace) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            normalized.contexts.trace = event.contexts.trace;
        }
        normalized.sdkProcessingMetadata = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, normalized.sdkProcessingMetadata), { baseClientNormalized: true });
        return normalized;
    };
    /**
     *  Enhances event using the client configuration.
     *  It takes care of all "static" values like environment, release and `dist`,
     *  as well as truncating overly long values.
     * @param event event instance to be enhanced
     */
    BaseClient.prototype._applyClientOptions = function (event) {
        var options = this.getOptions();
        var environment = options.environment, release = options.release, dist = options.dist, _a = options.maxValueLength, maxValueLength = _a === void 0 ? 250 : _a;
        if (!('environment' in event)) {
            event.environment = 'environment' in options ? environment : 'production';
        }
        if (event.release === undefined && release !== undefined) {
            event.release = release;
        }
        if (event.dist === undefined && dist !== undefined) {
            event.dist = dist;
        }
        if (event.message) {
            event.message = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["truncate"])(event.message, maxValueLength);
        }
        var exception = event.exception && event.exception.values && event.exception.values[0];
        if (exception && exception.value) {
            exception.value = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["truncate"])(exception.value, maxValueLength);
        }
        var request = event.request;
        if (request && request.url) {
            request.url = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["truncate"])(request.url, maxValueLength);
        }
    };
    /**
     * This function adds all used integrations to the SDK info in the event.
     * @param event The event that will be filled with all integrations.
     */
    BaseClient.prototype._applyIntegrationsMetadata = function (event) {
        var integrationsArray = Object.keys(this._integrations);
        if (integrationsArray.length > 0) {
            event.sdk = event.sdk || {};
            event.sdk.integrations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((event.sdk.integrations || []), integrationsArray);
        }
    };
    /**
     * Tells the backend to send this event
     * @param event The Sentry event to send
     */
    BaseClient.prototype._sendEvent = function (event) {
        this._getBackend().sendEvent(event);
    };
    /**
     * Processes the event and logs an error in case of rejection
     * @param event
     * @param hint
     * @param scope
     */
    BaseClient.prototype._captureEvent = function (event, hint, scope) {
        return this._processEvent(event, hint, scope).then(function (finalEvent) {
            return finalEvent.event_id;
        }, function (reason) {
            _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].error(reason);
            return undefined;
        });
    };
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
    BaseClient.prototype._processEvent = function (event, hint, scope) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate;
        var transport = this.getTransport();
        function recordLostEvent(outcome, category) {
            if (transport.recordLostEvent) {
                transport.recordLostEvent(outcome, category);
            }
        }
        if (!this._isEnabled()) {
            return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["rejectedSyncPromise"])(new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"]('SDK not enabled, will not capture event.'));
        }
        var isTransaction = event.type === 'transaction';
        // 1.0 === 100% events are sent
        // 0.0 === 0% events are sent
        // Sampling for transaction happens somewhere else
        if (!isTransaction && typeof sampleRate === 'number' && Math.random() > sampleRate) {
            recordLostEvent('sample_rate', 'event');
            return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["rejectedSyncPromise"])(new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"]("Discarding event because it's not included in the random sample (sampling rate = " + sampleRate + ")"));
        }
        return this._prepareEvent(event, scope, hint)
            .then(function (prepared) {
            if (prepared === null) {
                recordLostEvent('event_processor', event.type || 'event');
                throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"]('An event processor returned null, will not send event.');
            }
            var isInternalException = hint && hint.data && hint.data.__sentry__ === true;
            if (isInternalException || isTransaction || !beforeSend) {
                return prepared;
            }
            var beforeSendResult = beforeSend(prepared, hint);
            return _ensureBeforeSendRv(beforeSendResult);
        })
            .then(function (processedEvent) {
            if (processedEvent === null) {
                recordLostEvent('before_send', event.type || 'event');
                throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"]('`beforeSend` returned `null`, will not send event.');
            }
            var session = scope && scope.getSession && scope.getSession();
            if (!isTransaction && session) {
                _this._updateSessionFromEvent(session, processedEvent);
            }
            _this._sendEvent(processedEvent);
            return processedEvent;
        })
            .then(null, function (reason) {
            if (reason instanceof _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"]) {
                throw reason;
            }
            _this.captureException(reason, {
                data: {
                    __sentry__: true,
                },
                originalException: reason,
            });
            throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"]("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + reason);
        });
    };
    /**
     * Occupies the client with processing and event
     */
    BaseClient.prototype._process = function (promise) {
        var _this = this;
        this._numProcessing += 1;
        void promise.then(function (value) {
            _this._numProcessing -= 1;
            return value;
        }, function (reason) {
            _this._numProcessing -= 1;
            return reason;
        });
    };
    return BaseClient;
}());

/**
 * Verifies that return value of configured `beforeSend` is of expected type.
 */
function _ensureBeforeSendRv(rv) {
    var nullErr = '`beforeSend` method has to return `null` or a valid event.';
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isThenable"])(rv)) {
        return rv.then(function (event) {
            if (!(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(event) || event === null)) {
                throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"](nullErr);
            }
            return event;
        }, function (e) {
            throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"]("beforeSend rejected with " + e);
        });
    }
    else if (!(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(rv) || rv === null)) {
        throw new _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["SentryError"](nullErr);
    }
    return rv;
}
//# sourceMappingURL=baseclient.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/flags.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/core/esm/flags.js ***!
  \************************************************/
/*! exports provided: IS_DEBUG_BUILD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEBUG_BUILD", function() { return IS_DEBUG_BUILD; });
/*
 * This file defines flags and constants that can be modified during compile time in order to facilitate tree shaking
 * for users.
 *
 * Debug flags need to be declared in each package individually and must not be imported across package boundaries,
 * because some build tools have trouble tree-shaking imported guards.
 *
 * As a convention, we define debug flags in a `flags.ts` file in the root of a package's `src` folder.
 *
 * Debug flag files will contain "magic strings" like `__SENTRY_DEBUG__` that may get replaced with actual values during
 * our, or the user's build process. Take care when introducing new flags - they must not throw if they are not
 * replaced.
 */
/** Flag that is true for debug builds, false otherwise. */
var IS_DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' ? true : __SENTRY_DEBUG__;
//# sourceMappingURL=flags.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/core/esm/index.js ***!
  \************************************************/
/*! exports provided: addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, startTransaction, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, addGlobalEventProcessor, getCurrentHub, getHubFromCarrier, Hub, makeMain, Scope, Session, API, getEnvelopeEndpointWithUrlEncodedAuth, getStoreEndpointWithUrlEncodedAuth, getRequestHeaders, initAPIDetails, getReportDialogEndpoint, BaseClient, BaseBackend, eventToSentryRequest, sessionToSentryRequest, initAndBind, NoopTransport, createTransport, SDK_VERSION, Integrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/minimal */ "./node_modules/@sentry/minimal/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_minimal__WEBPACK_IMPORTED_MODULE_0__["withScope"]; });

/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["Session"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/@sentry/core/esm/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["API"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeEndpointWithUrlEncodedAuth", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["getEnvelopeEndpointWithUrlEncodedAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStoreEndpointWithUrlEncodedAuth", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["getStoreEndpointWithUrlEncodedAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRequestHeaders", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["getRequestHeaders"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initAPIDetails", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["initAPIDetails"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReportDialogEndpoint", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["getReportDialogEndpoint"]; });

/* harmony import */ var _baseclient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./baseclient */ "./node_modules/@sentry/core/esm/baseclient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseClient", function() { return _baseclient__WEBPACK_IMPORTED_MODULE_3__["BaseClient"]; });

/* harmony import */ var _basebackend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basebackend */ "./node_modules/@sentry/core/esm/basebackend.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseBackend", function() { return _basebackend__WEBPACK_IMPORTED_MODULE_4__["BaseBackend"]; });

/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request */ "./node_modules/@sentry/core/esm/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventToSentryRequest", function() { return _request__WEBPACK_IMPORTED_MODULE_5__["eventToSentryRequest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sessionToSentryRequest", function() { return _request__WEBPACK_IMPORTED_MODULE_5__["sessionToSentryRequest"]; });

/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sdk */ "./node_modules/@sentry/core/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return _sdk__WEBPACK_IMPORTED_MODULE_6__["initAndBind"]; });

/* harmony import */ var _transports_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transports/noop */ "./node_modules/@sentry/core/esm/transports/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoopTransport", function() { return _transports_noop__WEBPACK_IMPORTED_MODULE_7__["NoopTransport"]; });

/* harmony import */ var _transports_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transports/base */ "./node_modules/@sentry/core/esm/transports/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return _transports_base__WEBPACK_IMPORTED_MODULE_8__["createTransport"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./version */ "./node_modules/@sentry/core/esm/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_9__["SDK_VERSION"]; });

/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./integrations */ "./node_modules/@sentry/core/esm/integrations/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return _integrations__WEBPACK_IMPORTED_MODULE_10__; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integration.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integration.js ***!
  \******************************************************/
/*! exports provided: installedIntegrations, getIntegrationsToSetup, setupIntegration, setupIntegrations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installedIntegrations", function() { return installedIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntegrationsToSetup", function() { return getIntegrationsToSetup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupIntegration", function() { return setupIntegration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupIntegrations", function() { return setupIntegrations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/core/esm/flags.js");




var installedIntegrations = [];
/**
 * @private
 */
function filterDuplicates(integrations) {
    return integrations.reduce(function (acc, integrations) {
        if (acc.every(function (accIntegration) { return integrations.name !== accIntegration.name; })) {
            acc.push(integrations);
        }
        return acc;
    }, []);
}
/** Gets integration to install */
function getIntegrationsToSetup(options) {
    var defaultIntegrations = (options.defaultIntegrations && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(options.defaultIntegrations)) || [];
    var userIntegrations = options.integrations;
    var integrations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(filterDuplicates(defaultIntegrations));
    if (Array.isArray(userIntegrations)) {
        // Filter out integrations that are also included in user options
        integrations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(integrations.filter(function (integrations) {
            return userIntegrations.every(function (userIntegration) { return userIntegration.name !== integrations.name; });
        }), filterDuplicates(userIntegrations));
    }
    else if (typeof userIntegrations === 'function') {
        integrations = userIntegrations(integrations);
        integrations = Array.isArray(integrations) ? integrations : [integrations];
    }
    // Make sure that if present, `Debug` integration will always run last
    var integrationsNames = integrations.map(function (i) { return i.name; });
    var alwaysLastToRun = 'Debug';
    if (integrationsNames.indexOf(alwaysLastToRun) !== -1) {
        integrations.push.apply(integrations, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(integrations.splice(integrationsNames.indexOf(alwaysLastToRun), 1)));
    }
    return integrations;
}
/** Setup given integration */
function setupIntegration(integration) {
    if (installedIntegrations.indexOf(integration.name) !== -1) {
        return;
    }
    integration.setupOnce(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"], _sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"]);
    installedIntegrations.push(integration.name);
    _flags__WEBPACK_IMPORTED_MODULE_3__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Integration installed: " + integration.name);
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
    var integrations = {};
    getIntegrationsToSetup(options).forEach(function (integration) {
        integrations[integration.name] = integration;
        setupIntegration(integration);
    });
    // set the `initialized` flag so we don't run through the process again unecessarily; use `Object.defineProperty`
    // because by default it creates a property which is nonenumerable, which we want since `initialized` shouldn't be
    // considered a member of the index the way the actual integrations are
    Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["addNonEnumerableProperty"])(integrations, 'initialized', true);
    return integrations;
}
//# sourceMappingURL=integration.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/functiontostring.js":
/*!************************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/functiontostring.js ***!
  \************************************************************************/
/*! exports provided: FunctionToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return FunctionToString; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

var originalFunctionToString;
/** Patch toString calls to return proper name for wrapped functions */
var FunctionToString = /** @class */ (function () {
    function FunctionToString() {
        /**
         * @inheritDoc
         */
        this.name = FunctionToString.id;
    }
    /**
     * @inheritDoc
     */
    FunctionToString.prototype.setupOnce = function () {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        originalFunctionToString = Function.prototype.toString;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Function.prototype.toString = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getOriginalFunction"])(this) || this;
            return originalFunctionToString.apply(context, args);
        };
    };
    /**
     * @inheritDoc
     */
    FunctionToString.id = 'FunctionToString';
    return FunctionToString;
}());

//# sourceMappingURL=functiontostring.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/inboundfilters.js ***!
  \**********************************************************************/
/*! exports provided: InboundFilters, _mergeOptions, _shouldDropEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return InboundFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mergeOptions", function() { return _mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_shouldDropEvent", function() { return _shouldDropEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flags */ "./node_modules/@sentry/core/esm/flags.js");



// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
/** Inbound filters configurable by the user */
var InboundFilters = /** @class */ (function () {
    function InboundFilters(_options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
        /**
         * @inheritDoc
         */
        this.name = InboundFilters.id;
    }
    /**
     * @inheritDoc
     */
    InboundFilters.prototype.setupOnce = function (addGlobalEventProcessor, getCurrentHub) {
        addGlobalEventProcessor(function (event) {
            var hub = getCurrentHub();
            if (hub) {
                var self_1 = hub.getIntegration(InboundFilters);
                if (self_1) {
                    var client = hub.getClient();
                    var clientOptions = client ? client.getOptions() : {};
                    var options = _mergeOptions(self_1._options, clientOptions);
                    return _shouldDropEvent(event, options) ? null : event;
                }
            }
            return event;
        });
    };
    /**
     * @inheritDoc
     */
    InboundFilters.id = 'InboundFilters';
    return InboundFilters;
}());

/** JSDoc */
function _mergeOptions(internalOptions, clientOptions) {
    if (internalOptions === void 0) { internalOptions = {}; }
    if (clientOptions === void 0) { clientOptions = {}; }
    return {
        allowUrls: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((internalOptions.whitelistUrls || []), (internalOptions.allowUrls || []), (clientOptions.whitelistUrls || []), (clientOptions.allowUrls || [])),
        denyUrls: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((internalOptions.blacklistUrls || []), (internalOptions.denyUrls || []), (clientOptions.blacklistUrls || []), (clientOptions.denyUrls || [])),
        ignoreErrors: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((internalOptions.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
        ignoreInternal: internalOptions.ignoreInternal !== undefined ? internalOptions.ignoreInternal : true,
    };
}
/** JSDoc */
function _shouldDropEvent(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
        _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] &&
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getEventDescription"])(event));
        return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
        _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] &&
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getEventDescription"])(event));
        return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
        _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] &&
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getEventDescription"])(event) + ".\nUrl: " + _getEventFilterUrl(event));
        return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
        _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] &&
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getEventDescription"])(event) + ".\nUrl: " + _getEventFilterUrl(event));
        return true;
    }
    return false;
}
function _isIgnoredError(event, ignoreErrors) {
    if (!ignoreErrors || !ignoreErrors.length) {
        return false;
    }
    return _getPossibleEventMessages(event).some(function (message) {
        return ignoreErrors.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isMatchingPattern"])(message, pattern); });
    });
}
function _isDeniedUrl(event, denyUrls) {
    // TODO: Use Glob instead?
    if (!denyUrls || !denyUrls.length) {
        return false;
    }
    var url = _getEventFilterUrl(event);
    return !url ? false : denyUrls.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isMatchingPattern"])(url, pattern); });
}
function _isAllowedUrl(event, allowUrls) {
    // TODO: Use Glob instead?
    if (!allowUrls || !allowUrls.length) {
        return true;
    }
    var url = _getEventFilterUrl(event);
    return !url ? true : allowUrls.some(function (pattern) { return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isMatchingPattern"])(url, pattern); });
}
function _getPossibleEventMessages(event) {
    if (event.message) {
        return [event.message];
    }
    if (event.exception) {
        try {
            var _a = (event.exception.values && event.exception.values[0]) || {}, _b = _a.type, type = _b === void 0 ? '' : _b, _c = _a.value, value = _c === void 0 ? '' : _c;
            return ["" + value, type + ": " + value];
        }
        catch (oO) {
            _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error("Cannot extract message for event " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getEventDescription"])(event));
            return [];
        }
    }
    return [];
}
function _isSentryError(event) {
    try {
        // @ts-ignore can't be a sentry error if undefined
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return event.exception.values[0].type === 'SentryError';
    }
    catch (e) {
        // ignore
    }
    return false;
}
function _getLastValidUrl(frames) {
    if (frames === void 0) { frames = []; }
    for (var i = frames.length - 1; i >= 0; i--) {
        var frame = frames[i];
        if (frame && frame.filename !== '<anonymous>' && frame.filename !== '[native code]') {
            return frame.filename || null;
        }
    }
    return null;
}
function _getEventFilterUrl(event) {
    try {
        if (event.stacktrace) {
            return _getLastValidUrl(event.stacktrace.frames);
        }
        var frames_1;
        try {
            // @ts-ignore we only care about frames if the whole thing here is defined
            frames_1 = event.exception.values[0].stacktrace.frames;
        }
        catch (e) {
            // ignore
        }
        return frames_1 ? _getLastValidUrl(frames_1) : null;
    }
    catch (oO) {
        _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].error("Cannot extract url for event " + Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getEventDescription"])(event));
        return null;
    }
}
//# sourceMappingURL=inboundfilters.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/integrations/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sentry/core/esm/integrations/index.js ***!
  \*************************************************************/
/*! exports provided: FunctionToString, InboundFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functiontostring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functiontostring */ "./node_modules/@sentry/core/esm/integrations/functiontostring.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionToString", function() { return _functiontostring__WEBPACK_IMPORTED_MODULE_0__["FunctionToString"]; });

/* harmony import */ var _inboundfilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboundfilters */ "./node_modules/@sentry/core/esm/integrations/inboundfilters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InboundFilters", function() { return _inboundfilters__WEBPACK_IMPORTED_MODULE_1__["InboundFilters"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/request.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/core/esm/request.js ***!
  \**************************************************/
/*! exports provided: createSessionEnvelope, sessionToSentryRequest, createEventEnvelope, eventToSentryRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSessionEnvelope", function() { return createSessionEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionToSentryRequest", function() { return sessionToSentryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventEnvelope", function() { return createEventEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventToSentryRequest", function() { return eventToSentryRequest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/@sentry/core/esm/api.js");



/** Extract sdk info from from the API metadata */
function getSdkMetadataForEnvelopeHeader(api) {
    if (!api.metadata || !api.metadata.sdk) {
        return;
    }
    var _a = api.metadata.sdk, name = _a.name, version = _a.version;
    return { name: name, version: version };
}
/**
 * Apply SdkInfo (name, version, packages, integrations) to the corresponding event key.
 * Merge with existing data if any.
 **/
function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
        return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((event.sdk.integrations || []), (sdkInfo.integrations || []));
    event.sdk.packages = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((event.sdk.packages || []), (sdkInfo.packages || []));
    return event;
}
/** Creates an envelope from a Session */
function createSessionEnvelope(session, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var envelopeHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (!!api.tunnel && { dsn: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["dsnToString"])(api.dsn) }));
    // I know this is hacky but we don't want to add `sessions` to request type since it's never rate limited
    var type = 'aggregates' in session ? 'sessions' : 'session';
    // TODO (v7) Have to cast type because envelope items do not accept a `SentryRequestType`
    var envelopeItem = [{ type: type }, session];
    var envelope = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["createEnvelope"])(envelopeHeaders, [envelopeItem]);
    return [envelope, type];
}
/** Creates a SentryRequest from a Session. */
function sessionToSentryRequest(session, api) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(createSessionEnvelope(session, api), 2), envelope = _a[0], type = _a[1];
    return {
        body: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["serializeEnvelope"])(envelope),
        type: type,
        url: Object(_api__WEBPACK_IMPORTED_MODULE_2__["getEnvelopeEndpointWithUrlEncodedAuth"])(api.dsn, api.tunnel),
    };
}
/**
 * Create an Envelope from an event. Note that this is duplicated from below,
 * but on purpose as this will be refactored in v7.
 */
function createEventEnvelope(event, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var eventType = event.type || 'event';
    var transactionSampling = (event.sdkProcessingMetadata || {}).transactionSampling;
    var _a = transactionSampling || {}, samplingMethod = _a.method, sampleRate = _a.rate;
    // TODO: Below is a temporary hack in order to debug a serialization error - see
    // https://github.com/getsentry/sentry-javascript/issues/2809,
    // https://github.com/getsentry/sentry-javascript/pull/4425, and
    // https://github.com/getsentry/sentry-javascript/pull/4574.
    //
    // TL; DR: even though we normalize all events (which should prevent this), something is causing `JSON.stringify` to
    // throw a circular reference error.
    //
    // When it's time to remove it:
    // 1. Delete everything between here and where the request object `req` is created, EXCEPT the line deleting
    //    `sdkProcessingMetadata`
    // 2. Restore the original version of the request body, which is commented out
    // 3. Search for either of the PR URLs above and pull out the companion hacks in the browser playwright tests and the
    //    baseClient tests in this package
    enhanceEventWithSdkInfo(event, api.metadata.sdk);
    event.tags = event.tags || {};
    event.extra = event.extra || {};
    // In theory, all events should be marked as having gone through normalization and so
    // we should never set this tag/extra data
    if (!(event.sdkProcessingMetadata && event.sdkProcessingMetadata.baseClientNormalized)) {
        event.tags.skippedNormalization = true;
        event.extra.normalizeDepth = event.sdkProcessingMetadata ? event.sdkProcessingMetadata.normalizeDepth : 'unset';
    }
    // prevent this data from being sent to sentry
    // TODO: This is NOT part of the hack - DO NOT DELETE
    delete event.sdkProcessingMetadata;
    var envelopeHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ event_id: event.event_id, sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (!!api.tunnel && { dsn: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["dsnToString"])(api.dsn) }));
    var eventItem = [
        {
            type: eventType,
            sample_rates: [{ id: samplingMethod, rate: sampleRate }],
        },
        event,
    ];
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["createEnvelope"])(envelopeHeaders, [eventItem]);
}
/** Creates a SentryRequest from an event. */
function eventToSentryRequest(event, api) {
    var sdkInfo = getSdkMetadataForEnvelopeHeader(api);
    var eventType = event.type || 'event';
    var useEnvelope = eventType === 'transaction' || !!api.tunnel;
    var transactionSampling = (event.sdkProcessingMetadata || {}).transactionSampling;
    var _a = transactionSampling || {}, samplingMethod = _a.method, sampleRate = _a.rate;
    // TODO: Below is a temporary hack in order to debug a serialization error - see
    // https://github.com/getsentry/sentry-javascript/issues/2809,
    // https://github.com/getsentry/sentry-javascript/pull/4425, and
    // https://github.com/getsentry/sentry-javascript/pull/4574.
    //
    // TL; DR: even though we normalize all events (which should prevent this), something is causing `JSON.stringify` to
    // throw a circular reference error.
    //
    // When it's time to remove it:
    // 1. Delete everything between here and where the request object `req` is created, EXCEPT the line deleting
    //    `sdkProcessingMetadata`
    // 2. Restore the original version of the request body, which is commented out
    // 3. Search for either of the PR URLs above and pull out the companion hacks in the browser playwright tests and the
    //    baseClient tests in this package
    enhanceEventWithSdkInfo(event, api.metadata.sdk);
    event.tags = event.tags || {};
    event.extra = event.extra || {};
    // In theory, all events should be marked as having gone through normalization and so
    // we should never set this tag/extra data
    if (!(event.sdkProcessingMetadata && event.sdkProcessingMetadata.baseClientNormalized)) {
        event.tags.skippedNormalization = true;
        event.extra.normalizeDepth = event.sdkProcessingMetadata ? event.sdkProcessingMetadata.normalizeDepth : 'unset';
    }
    // prevent this data from being sent to sentry
    // TODO: This is NOT part of the hack - DO NOT DELETE
    delete event.sdkProcessingMetadata;
    var body;
    try {
        // 99.9% of events should get through just fine - no change in behavior for them
        body = JSON.stringify(event);
    }
    catch (err) {
        // Record data about the error without replacing original event data, then force renormalization
        event.tags.JSONStringifyError = true;
        event.extra.JSONStringifyError = err;
        try {
            body = JSON.stringify(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["normalize"])(event));
        }
        catch (newErr) {
            // At this point even renormalization hasn't worked, meaning something about the event data has gone very wrong.
            // Time to cut our losses and record only the new error. With luck, even in the problematic cases we're trying to
            // debug with this hack, we won't ever land here.
            var innerErr = newErr;
            body = JSON.stringify({
                message: 'JSON.stringify error after renormalization',
                // setting `extra: { innerErr }` here for some reason results in an empty object, so unpack manually
                extra: { message: innerErr.message, stack: innerErr.stack },
            });
        }
    }
    var req = {
        // this is the relevant line of code before the hack was added, to make it easy to undo said hack once we've solved
        // the mystery
        // body: JSON.stringify(sdkInfo ? enhanceEventWithSdkInfo(event, api.metadata.sdk) : event),
        body: body,
        type: eventType,
        url: useEnvelope
            ? Object(_api__WEBPACK_IMPORTED_MODULE_2__["getEnvelopeEndpointWithUrlEncodedAuth"])(api.dsn, api.tunnel)
            : Object(_api__WEBPACK_IMPORTED_MODULE_2__["getStoreEndpointWithUrlEncodedAuth"])(api.dsn),
    };
    // https://develop.sentry.dev/sdk/envelopes/
    // Since we don't need to manipulate envelopes nor store them, there is no
    // exported concept of an Envelope with operations including serialization and
    // deserialization. Instead, we only implement a minimal subset of the spec to
    // serialize events inline here.
    if (useEnvelope) {
        var envelopeHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ event_id: event.event_id, sent_at: new Date().toISOString() }, (sdkInfo && { sdk: sdkInfo })), (!!api.tunnel && { dsn: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["dsnToString"])(api.dsn) }));
        var eventItem = [
            {
                type: eventType,
                sample_rates: [{ id: samplingMethod, rate: sampleRate }],
            },
            req.body,
        ];
        var envelope = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["createEnvelope"])(envelopeHeaders, [eventItem]);
        req.body = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["serializeEnvelope"])(envelope);
    }
    return req;
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/sdk.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/core/esm/sdk.js ***!
  \**********************************************/
/*! exports provided: initAndBind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAndBind", function() { return initAndBind; });
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/core/esm/flags.js");



/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
    if (options.debug === true) {
        if (_flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"]) {
            _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].enable();
        }
        else {
            // use `console.warn` rather than `logger.warn` since by non-debug bundles have all `logger.x` statements stripped
            // eslint-disable-next-line no-console
            console.warn('[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.');
        }
    }
    var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"])();
    var scope = hub.getScope();
    if (scope) {
        scope.update(options.initialScope);
    }
    var client = new clientClass(options);
    hub.bindClient(client);
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/transports/base.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/core/esm/transports/base.js ***!
  \**********************************************************/
/*! exports provided: ERROR_TRANSPORT_CATEGORY, TRANSACTION_TRANSPORT_CATEGORY, ATTACHMENT_TRANSPORT_CATEGORY, SESSION_TRANSPORT_CATEGORY, DEFAULT_TRANSPORT_BUFFER_SIZE, createTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TRANSPORT_CATEGORY", function() { return ERROR_TRANSPORT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_TRANSPORT_CATEGORY", function() { return TRANSACTION_TRANSPORT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TRANSPORT_CATEGORY", function() { return ATTACHMENT_TRANSPORT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_TRANSPORT_CATEGORY", function() { return SESSION_TRANSPORT_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TRANSPORT_BUFFER_SIZE", function() { return DEFAULT_TRANSPORT_BUFFER_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransport", function() { return createTransport; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

var ERROR_TRANSPORT_CATEGORY = 'error';
var TRANSACTION_TRANSPORT_CATEGORY = 'transaction';
var ATTACHMENT_TRANSPORT_CATEGORY = 'attachment';
var SESSION_TRANSPORT_CATEGORY = 'session';
var DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
/**
 * Creates a `NewTransport`
 *
 * @param options
 * @param makeRequest
 */
function createTransport(options, makeRequest, buffer) {
    if (buffer === void 0) { buffer = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["makePromiseBuffer"])(options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE); }
    var rateLimits = {};
    var flush = function (timeout) { return buffer.drain(timeout); };
    function send(envelope) {
        var envCategory = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getEnvelopeType"])(envelope);
        var category = envCategory === 'event' ? 'error' : envCategory;
        var request = {
            category: category,
            body: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["serializeEnvelope"])(envelope),
        };
        // Don't add to buffer if transport is already rate-limited
        if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["isRateLimited"])(rateLimits, category)) {
            return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["rejectedSyncPromise"])({
                status: 'rate_limit',
                reason: getRateLimitReason(rateLimits, category),
            });
        }
        var requestTask = function () {
            return makeRequest(request).then(function (_a) {
                var body = _a.body, headers = _a.headers, reason = _a.reason, statusCode = _a.statusCode;
                var status = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["eventStatusFromHttpCode"])(statusCode);
                if (headers) {
                    rateLimits = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["updateRateLimits"])(rateLimits, headers);
                }
                if (status === 'success') {
                    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["resolvedSyncPromise"])({ status: status, reason: reason });
                }
                return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["rejectedSyncPromise"])({
                    status: status,
                    reason: reason ||
                        body ||
                        (status === 'rate_limit' ? getRateLimitReason(rateLimits, category) : 'Unknown transport error'),
                });
            });
        };
        return buffer.add(requestTask);
    }
    return {
        send: send,
        flush: flush,
    };
}
function getRateLimitReason(rateLimits, category) {
    return "Too many " + category + " requests, backing off until: " + new Date(Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["disabledUntil"])(rateLimits, category)).toISOString();
}
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/transports/noop.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sentry/core/esm/transports/noop.js ***!
  \**********************************************************/
/*! exports provided: NoopTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopTransport", function() { return NoopTransport; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

/** Noop transport */
var NoopTransport = /** @class */ (function () {
    function NoopTransport() {
    }
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.sendEvent = function (_) {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["resolvedSyncPromise"])({
            reason: 'NoopTransport: Event has been skipped because no Dsn is configured.',
            status: 'skipped',
        });
    };
    /**
     * @inheritDoc
     */
    NoopTransport.prototype.close = function (_) {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["resolvedSyncPromise"])(true);
    };
    return NoopTransport;
}());

//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/@sentry/core/esm/version.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/core/esm/version.js ***!
  \**************************************************/
/*! exports provided: SDK_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return SDK_VERSION; });
var SDK_VERSION = '6.19.7';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/flags.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/flags.js ***!
  \***********************************************/
/*! exports provided: IS_DEBUG_BUILD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEBUG_BUILD", function() { return IS_DEBUG_BUILD; });
/*
 * This file defines flags and constants that can be modified during compile time in order to facilitate tree shaking
 * for users.
 *
 * Debug flags need to be declared in each package individually and must not be imported across package boundaries,
 * because some build tools have trouble tree-shaking imported guards.
 *
 * As a convention, we define debug flags in a `flags.ts` file in the root of a package's `src` folder.
 *
 * Debug flag files will contain "magic strings" like `__SENTRY_DEBUG__` that may get replaced with actual values during
 * our, or the user's build process. Take care when introducing new flags - they must not throw if they are not
 * replaced.
 */
/** Flag that is true for debug builds, false otherwise. */
var IS_DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' ? true : __SENTRY_DEBUG__;
//# sourceMappingURL=flags.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/hub.js":
/*!*********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/hub.js ***!
  \*********************************************/
/*! exports provided: API_VERSION, Hub, getMainCarrier, makeMain, getCurrentHub, getActiveDomain, getHubFromCarrier, setHubOnCarrier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_VERSION", function() { return API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return Hub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return getMainCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return makeMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return getCurrentHub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveDomain", function() { return getActiveDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return getHubFromCarrier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return setHubOnCarrier; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/hub/esm/flags.js");
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scope */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session */ "./node_modules/@sentry/hub/esm/session.js");





/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be increased when the global interface
 * changes and new methods are introduced.
 *
 * @hidden
 */
var API_VERSION = 4;
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
var DEFAULT_BREADCRUMBS = 100;
/**
 * @inheritDoc
 */
var Hub = /** @class */ (function () {
    /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
    function Hub(client, scope, _version) {
        if (scope === void 0) { scope = new _scope__WEBPACK_IMPORTED_MODULE_3__["Scope"](); }
        if (_version === void 0) { _version = API_VERSION; }
        this._version = _version;
        /** Is a {@link Layer}[] containing the client and scope */
        this._stack = [{}];
        this.getStackTop().scope = scope;
        if (client) {
            this.bindClient(client);
        }
    }
    /**
     * @inheritDoc
     */
    Hub.prototype.isOlderThan = function (version) {
        return this._version < version;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.bindClient = function (client) {
        var top = this.getStackTop();
        top.client = client;
        if (client && client.setupIntegrations) {
            client.setupIntegrations();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.pushScope = function () {
        // We want to clone the content of prev scope
        var scope = _scope__WEBPACK_IMPORTED_MODULE_3__["Scope"].clone(this.getScope());
        this.getStack().push({
            client: this.getClient(),
            scope: scope,
        });
        return scope;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.popScope = function () {
        if (this.getStack().length <= 1)
            return false;
        return !!this.getStack().pop();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.withScope = function (callback) {
        var scope = this.pushScope();
        try {
            callback(scope);
        }
        finally {
            this.popScope();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getClient = function () {
        return this.getStackTop().client;
    };
    /** Returns the scope of the top stack. */
    Hub.prototype.getScope = function () {
        return this.getStackTop().scope;
    };
    /** Returns the scope stack for domains or the process. */
    Hub.prototype.getStack = function () {
        return this._stack;
    };
    /** Returns the topmost scope layer in the order domain > local > process. */
    Hub.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
    Hub.prototype.captureException = function (exception, hint) {
        var eventId = (this._lastEventId = hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error('Sentry syntheticException');
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: exception,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureException', exception, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureMessage = function (message, level, hint) {
        var eventId = (this._lastEventId = hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])());
        var finalHint = hint;
        // If there's no explicit hint provided, mimic the same thing that would happen
        // in the minimal itself to create a consistent behavior.
        // We don't do this in the client, as it's the lowest level API, and doing this,
        // would prevent user from having full control over direct calls.
        if (!hint) {
            var syntheticException = void 0;
            try {
                throw new Error(message);
            }
            catch (exception) {
                syntheticException = exception;
            }
            finalHint = {
                originalException: message,
                syntheticException: syntheticException,
            };
        }
        this._invokeClient('captureMessage', message, level, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, finalHint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureEvent = function (event, hint) {
        var eventId = hint && hint.event_id ? hint.event_id : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["uuid4"])();
        if (event.type !== 'transaction') {
            this._lastEventId = eventId;
        }
        this._invokeClient('captureEvent', event, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, hint), { event_id: eventId }));
        return eventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.lastEventId = function () {
        return this._lastEventId;
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope || !client)
            return;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        var _b = (client.getOptions && client.getOptions()) || {}, _c = _b.beforeBreadcrumb, beforeBreadcrumb = _c === void 0 ? null : _c, _d = _b.maxBreadcrumbs, maxBreadcrumbs = _d === void 0 ? DEFAULT_BREADCRUMBS : _d;
        if (maxBreadcrumbs <= 0)
            return;
        var timestamp = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["dateTimestampInSeconds"])();
        var mergedBreadcrumb = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ timestamp: timestamp }, breadcrumb);
        var finalBreadcrumb = beforeBreadcrumb
            ? Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["consoleSandbox"])(function () { return beforeBreadcrumb(mergedBreadcrumb, hint); })
            : mergedBreadcrumb;
        if (finalBreadcrumb === null)
            return;
        scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setUser = function (user) {
        var scope = this.getScope();
        if (scope)
            scope.setUser(user);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTags = function (tags) {
        var scope = this.getScope();
        if (scope)
            scope.setTags(tags);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtras = function (extras) {
        var scope = this.getScope();
        if (scope)
            scope.setExtras(extras);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setTag = function (key, value) {
        var scope = this.getScope();
        if (scope)
            scope.setTag(key, value);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.setExtra = function (key, extra) {
        var scope = this.getScope();
        if (scope)
            scope.setExtra(key, extra);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype.setContext = function (name, context) {
        var scope = this.getScope();
        if (scope)
            scope.setContext(name, context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.configureScope = function (callback) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (scope && client) {
            callback(scope);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.run = function (callback) {
        var oldHub = makeMain(this);
        try {
            callback(this);
        }
        finally {
            makeMain(oldHub);
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.getIntegration = function (integration) {
        var client = this.getClient();
        if (!client)
            return null;
        try {
            return client.getIntegration(integration);
        }
        catch (_oO) {
            _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Cannot retrieve integration " + integration.id + " from the current Hub");
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSpan = function (context) {
        return this._callExtensionMethod('startSpan', context);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startTransaction = function (context, customSamplingContext) {
        return this._callExtensionMethod('startTransaction', context, customSamplingContext);
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.traceHeaders = function () {
        return this._callExtensionMethod('traceHeaders');
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.captureSession = function (endSession) {
        if (endSession === void 0) { endSession = false; }
        // both send the update and pull the session from the scope
        if (endSession) {
            return this.endSession();
        }
        // only send the update
        this._sendSessionUpdate();
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.endSession = function () {
        var layer = this.getStackTop();
        var scope = layer && layer.scope;
        var session = scope && scope.getSession();
        if (session) {
            session.close();
        }
        this._sendSessionUpdate();
        // the session is over; take it off of the scope
        if (scope) {
            scope.setSession();
        }
    };
    /**
     * @inheritDoc
     */
    Hub.prototype.startSession = function (context) {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        var _b = (client && client.getOptions()) || {}, release = _b.release, environment = _b.environment;
        // Will fetch userAgent if called from browser sdk
        var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
        var userAgent = (global.navigator || {}).userAgent;
        var session = new _session__WEBPACK_IMPORTED_MODULE_4__["Session"](Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ release: release,
            environment: environment }, (scope && { user: scope.getUser() })), (userAgent && { userAgent: userAgent })), context));
        if (scope) {
            // End existing session if there's one
            var currentSession = scope.getSession && scope.getSession();
            if (currentSession && currentSession.status === 'ok') {
                currentSession.update({ status: 'exited' });
            }
            this.endSession();
            // Afterwards we set the new session on the scope
            scope.setSession(session);
        }
        return session;
    };
    /**
     * Sends the current Session on the scope
     */
    Hub.prototype._sendSessionUpdate = function () {
        var _a = this.getStackTop(), scope = _a.scope, client = _a.client;
        if (!scope)
            return;
        var session = scope.getSession && scope.getSession();
        if (session) {
            if (client && client.captureSession) {
                client.captureSession(session);
            }
        }
    };
    /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._invokeClient = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _b = this.getStackTop(), scope = _b.scope, client = _b.client;
        if (client && client[method]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
            (_a = client)[method].apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args, [scope]));
        }
    };
    /**
     * Calls global extension method and binding current instance to the function call
     */
    // @ts-ignore Function lacks ending return statement and return type does not include 'undefined'. ts(2366)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Hub.prototype._callExtensionMethod = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var carrier = getMainCarrier();
        var sentry = carrier.__SENTRY__;
        if (sentry && sentry.extensions && typeof sentry.extensions[method] === 'function') {
            return sentry.extensions[method].apply(this, args);
        }
        _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Extension method " + method + " couldn't be found, doing nothing.");
    };
    return Hub;
}());

/**
 * Returns the global shim registry.
 *
 * FIXME: This function is problematic, because despite always returning a valid Carrier,
 * it has an optional `__SENTRY__` property, which then in turn requires us to always perform an unnecessary check
 * at the call-site. We always access the carrier through this function, so we can guarantee that `__SENTRY__` is there.
 **/
function getMainCarrier() {
    var carrier = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    carrier.__SENTRY__ = carrier.__SENTRY__ || {
        extensions: {},
        hub: undefined,
    };
    return carrier;
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
    var registry = getMainCarrier();
    var oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
    // Get main carrier (global for every environment)
    var registry = getMainCarrier();
    // If there's no hub, or its an old API, assign a new one
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
        setHubOnCarrier(registry, new Hub());
    }
    // Prefer domains over global if they are there (applicable only to Node environment)
    if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isNodeEnv"])()) {
        return getHubFromActiveDomain(registry);
    }
    // Return hub that lives on a global object
    return getHubFromCarrier(registry);
}
/**
 * Returns the active domain, if one exists
 * @deprecated No longer used; remove in v7
 * @returns The domain, or undefined if there is no active domain
 */
// eslint-disable-next-line deprecation/deprecation
function getActiveDomain() {
    _flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["logger"].warn('Function `getActiveDomain` is deprecated and will be removed in a future version.');
    var sentry = getMainCarrier().__SENTRY__;
    return sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
}
/**
 * Try to read the hub from an active domain, and fallback to the registry if one doesn't exist
 * @returns discovered hub
 */
function getHubFromActiveDomain(registry) {
    try {
        var sentry = getMainCarrier().__SENTRY__;
        var activeDomain = sentry && sentry.extensions && sentry.extensions.domain && sentry.extensions.domain.active;
        // If there's no active domain, just return global hub
        if (!activeDomain) {
            return getHubFromCarrier(registry);
        }
        // If there's no hub on current domain, or it's an old API, assign a new one
        if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
            var registryHubTopStack = getHubFromCarrier(registry).getStackTop();
            setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, _scope__WEBPACK_IMPORTED_MODULE_3__["Scope"].clone(registryHubTopStack.scope)));
        }
        // Return hub that lives on a domain
        return getHubFromCarrier(activeDomain);
    }
    catch (_Oo) {
        // Return hub that lives on a global object
        return getHubFromCarrier(registry);
    }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalSingleton"])('hub', function () { return new Hub(); }, carrier);
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 * @returns A boolean indicating success or failure
 */
function setHubOnCarrier(carrier, hub) {
    if (!carrier)
        return false;
    var __SENTRY__ = (carrier.__SENTRY__ = carrier.__SENTRY__ || {});
    __SENTRY__.hub = hub;
    return true;
}
//# sourceMappingURL=hub.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/index.js ***!
  \***********************************************/
/*! exports provided: addGlobalEventProcessor, Scope, Session, SessionFlusher, getActiveDomain, getCurrentHub, getHubFromCarrier, getMainCarrier, Hub, makeMain, setHubOnCarrier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "./node_modules/@sentry/hub/esm/scope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _scope__WEBPACK_IMPORTED_MODULE_0__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"]; });

/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session */ "./node_modules/@sentry/hub/esm/session.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return _session__WEBPACK_IMPORTED_MODULE_1__["Session"]; });

/* harmony import */ var _sessionflusher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessionflusher */ "./node_modules/@sentry/hub/esm/sessionflusher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionFlusher", function() { return _sessionflusher__WEBPACK_IMPORTED_MODULE_2__["SessionFlusher"]; });

/* harmony import */ var _hub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hub */ "./node_modules/@sentry/hub/esm/hub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getActiveDomain", function() { return _hub__WEBPACK_IMPORTED_MODULE_3__["getActiveDomain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _hub__WEBPACK_IMPORTED_MODULE_3__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_3__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_3__["getMainCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _hub__WEBPACK_IMPORTED_MODULE_3__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _hub__WEBPACK_IMPORTED_MODULE_3__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setHubOnCarrier", function() { return _hub__WEBPACK_IMPORTED_MODULE_3__["setHubOnCarrier"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/scope.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/hub/esm/scope.js ***!
  \***********************************************/
/*! exports provided: Scope, addGlobalEventProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return addGlobalEventProcessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");


/**
 * Absolute maximum number of breadcrumbs added to an event.
 * The `maxBreadcrumbs` option cannot be higher than this value.
 */
var MAX_BREADCRUMBS = 100;
/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
var Scope = /** @class */ (function () {
    function Scope() {
        /** Flag if notifying is happening. */
        this._notifyingListeners = false;
        /** Callback for client to receive scope changes. */
        this._scopeListeners = [];
        /** Callback list that will be called after {@link applyToEvent}. */
        this._eventProcessors = [];
        /** Array of breadcrumbs. */
        this._breadcrumbs = [];
        /** User */
        this._user = {};
        /** Tags */
        this._tags = {};
        /** Extra */
        this._extra = {};
        /** Contexts */
        this._contexts = {};
        /**
         * A place to stash data which is needed at some point in the SDK's event processing pipeline but which shouldn't get
         * sent to Sentry
         */
        this._sdkProcessingMetadata = {};
    }
    /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
    Scope.clone = function (scope) {
        var newScope = new Scope();
        if (scope) {
            newScope._breadcrumbs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(scope._breadcrumbs);
            newScope._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, scope._tags);
            newScope._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, scope._extra);
            newScope._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, scope._contexts);
            newScope._user = scope._user;
            newScope._level = scope._level;
            newScope._span = scope._span;
            newScope._session = scope._session;
            newScope._transactionName = scope._transactionName;
            newScope._fingerprint = scope._fingerprint;
            newScope._eventProcessors = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(scope._eventProcessors);
            newScope._requestSession = scope._requestSession;
        }
        return newScope;
    };
    /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
    Scope.prototype.addScopeListener = function (callback) {
        this._scopeListeners.push(callback);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addEventProcessor = function (callback) {
        this._eventProcessors.push(callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setUser = function (user) {
        this._user = user || {};
        if (this._session) {
            this._session.update({ user: user });
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getUser = function () {
        return this._user;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getRequestSession = function () {
        return this._requestSession;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setRequestSession = function (requestSession) {
        this._requestSession = requestSession;
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTags = function (tags) {
        this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), tags);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTag = function (key, value) {
        var _a;
        this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), (_a = {}, _a[key] = value, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtras = function (extras) {
        this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), extras);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setExtra = function (key, extra) {
        var _a;
        this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), (_a = {}, _a[key] = extra, _a));
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setFingerprint = function (fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setLevel = function (level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setTransactionName = function (name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Can be removed in major version.
     * @deprecated in favor of {@link this.setTransactionName}
     */
    Scope.prototype.setTransaction = function (name) {
        return this.setTransactionName(name);
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setContext = function (key, context) {
        var _a;
        if (context === null) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete this._contexts[key];
        }
        else {
            this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._contexts), (_a = {}, _a[key] = context, _a));
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSpan = function (span) {
        this._span = span;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSpan = function () {
        return this._span;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getTransaction = function () {
        // Often, this span (if it exists at all) will be a transaction, but it's not guaranteed to be. Regardless, it will
        // have a pointer to the currently-active transaction.
        var span = this.getSpan();
        return span && span.transaction;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.setSession = function (session) {
        if (!session) {
            delete this._session;
        }
        else {
            this._session = session;
        }
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.getSession = function () {
        return this._session;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.update = function (captureContext) {
        if (!captureContext) {
            return this;
        }
        if (typeof captureContext === 'function') {
            var updatedScope = captureContext(this);
            return updatedScope instanceof Scope ? updatedScope : this;
        }
        if (captureContext instanceof Scope) {
            this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), captureContext._tags);
            this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), captureContext._extra);
            this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._contexts), captureContext._contexts);
            if (captureContext._user && Object.keys(captureContext._user).length) {
                this._user = captureContext._user;
            }
            if (captureContext._level) {
                this._level = captureContext._level;
            }
            if (captureContext._fingerprint) {
                this._fingerprint = captureContext._fingerprint;
            }
            if (captureContext._requestSession) {
                this._requestSession = captureContext._requestSession;
            }
        }
        else if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isPlainObject"])(captureContext)) {
            // eslint-disable-next-line no-param-reassign
            captureContext = captureContext;
            this._tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), captureContext.tags);
            this._extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), captureContext.extra);
            this._contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._contexts), captureContext.contexts);
            if (captureContext.user) {
                this._user = captureContext.user;
            }
            if (captureContext.level) {
                this._level = captureContext.level;
            }
            if (captureContext.fingerprint) {
                this._fingerprint = captureContext.fingerprint;
            }
            if (captureContext.requestSession) {
                this._requestSession = captureContext.requestSession;
            }
        }
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = undefined;
        this._transactionName = undefined;
        this._fingerprint = undefined;
        this._requestSession = undefined;
        this._span = undefined;
        this._session = undefined;
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
        var maxCrumbs = typeof maxBreadcrumbs === 'number' ? Math.min(maxBreadcrumbs, MAX_BREADCRUMBS) : MAX_BREADCRUMBS;
        // No data has been changed, so don't notify scope listeners
        if (maxCrumbs <= 0) {
            return this;
        }
        var mergedBreadcrumb = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ timestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["dateTimestampInSeconds"])() }, breadcrumb);
        this._breadcrumbs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this._breadcrumbs, [mergedBreadcrumb]).slice(-maxCrumbs);
        this._notifyScopeListeners();
        return this;
    };
    /**
     * @inheritDoc
     */
    Scope.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    };
    /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional information about the original exception.
     * @hidden
     */
    Scope.prototype.applyToEvent = function (event, hint) {
        if (this._extra && Object.keys(this._extra).length) {
            event.extra = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._extra), event.extra);
        }
        if (this._tags && Object.keys(this._tags).length) {
            event.tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._tags), event.tags);
        }
        if (this._user && Object.keys(this._user).length) {
            event.user = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._user), event.user);
        }
        if (this._contexts && Object.keys(this._contexts).length) {
            event.contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._contexts), event.contexts);
        }
        if (this._level) {
            event.level = this._level;
        }
        if (this._transactionName) {
            event.transaction = this._transactionName;
        }
        // We want to set the trace context for normal events only if there isn't already
        // a trace context on the event. There is a product feature in place where we link
        // errors with transaction and it relies on that.
        if (this._span) {
            event.contexts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ trace: this._span.getTraceContext() }, event.contexts);
            var transactionName = this._span.transaction && this._span.transaction.name;
            if (transactionName) {
                event.tags = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ transaction: transactionName }, event.tags);
            }
        }
        this._applyFingerprint(event);
        event.breadcrumbs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])((event.breadcrumbs || []), this._breadcrumbs);
        event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined;
        event.sdkProcessingMetadata = this._sdkProcessingMetadata;
        return this._notifyEventProcessors(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(getGlobalEventProcessors(), this._eventProcessors), event, hint);
    };
    /**
     * Add data which will be accessible during event processing but won't get sent to Sentry
     */
    Scope.prototype.setSDKProcessingMetadata = function (newData) {
        this._sdkProcessingMetadata = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._sdkProcessingMetadata), newData);
        return this;
    };
    /**
     * This will be called after {@link applyToEvent} is finished.
     */
    Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        return new _sentry_utils__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
            var processor = processors[index];
            if (event === null || typeof processor !== 'function') {
                resolve(event);
            }
            else {
                var result = processor(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), hint);
                if (Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["isThenable"])(result)) {
                    void result
                        .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve); })
                        .then(null, reject);
                }
                else {
                    void _this._notifyEventProcessors(processors, result, hint, index + 1)
                        .then(resolve)
                        .then(null, reject);
                }
            }
        });
    };
    /**
     * This will be called on every set call.
     */
    Scope.prototype._notifyScopeListeners = function () {
        var _this = this;
        // We need this check for this._notifyingListeners to be able to work on scope during updates
        // If this check is not here we'll produce endless recursion when something is done with the scope
        // during the callback.
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach(function (callback) {
                callback(_this);
            });
            this._notifyingListeners = false;
        }
    };
    /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
    Scope.prototype._applyFingerprint = function (event) {
        // Make sure it's an array first and we actually have something in place
        event.fingerprint = event.fingerprint
            ? Array.isArray(event.fingerprint)
                ? event.fingerprint
                : [event.fingerprint]
            : [];
        // If we have something on the scope, then merge it with event
        if (this._fingerprint) {
            event.fingerprint = event.fingerprint.concat(this._fingerprint);
        }
        // If we have no data at all, remove empty array default
        if (event.fingerprint && !event.fingerprint.length) {
            delete event.fingerprint;
        }
    };
    return Scope;
}());

/**
 * Returns the global event processors.
 */
function getGlobalEventProcessors() {
    return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalSingleton"])('globalEventProcessors', function () { return []; });
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
}
//# sourceMappingURL=scope.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/session.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/hub/esm/session.js ***!
  \*************************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

/**
 * @inheritdoc
 */
var Session = /** @class */ (function () {
    function Session(context) {
        this.errors = 0;
        this.sid = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["uuid4"])();
        this.duration = 0;
        this.status = 'ok';
        this.init = true;
        this.ignoreDuration = false;
        // Both timestamp and started are in seconds since the UNIX epoch.
        var startingTime = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["timestampInSeconds"])();
        this.timestamp = startingTime;
        this.started = startingTime;
        if (context) {
            this.update(context);
        }
    }
    /** JSDoc */
    // eslint-disable-next-line complexity
    Session.prototype.update = function (context) {
        if (context === void 0) { context = {}; }
        if (context.user) {
            if (!this.ipAddress && context.user.ip_address) {
                this.ipAddress = context.user.ip_address;
            }
            if (!this.did && !context.did) {
                this.did = context.user.id || context.user.email || context.user.username;
            }
        }
        this.timestamp = context.timestamp || Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["timestampInSeconds"])();
        if (context.ignoreDuration) {
            this.ignoreDuration = context.ignoreDuration;
        }
        if (context.sid) {
            // Good enough uuid validation. — Kamil
            this.sid = context.sid.length === 32 ? context.sid : Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["uuid4"])();
        }
        if (context.init !== undefined) {
            this.init = context.init;
        }
        if (!this.did && context.did) {
            this.did = "" + context.did;
        }
        if (typeof context.started === 'number') {
            this.started = context.started;
        }
        if (this.ignoreDuration) {
            this.duration = undefined;
        }
        else if (typeof context.duration === 'number') {
            this.duration = context.duration;
        }
        else {
            var duration = this.timestamp - this.started;
            this.duration = duration >= 0 ? duration : 0;
        }
        if (context.release) {
            this.release = context.release;
        }
        if (context.environment) {
            this.environment = context.environment;
        }
        if (!this.ipAddress && context.ipAddress) {
            this.ipAddress = context.ipAddress;
        }
        if (!this.userAgent && context.userAgent) {
            this.userAgent = context.userAgent;
        }
        if (typeof context.errors === 'number') {
            this.errors = context.errors;
        }
        if (context.status) {
            this.status = context.status;
        }
    };
    /** JSDoc */
    Session.prototype.close = function (status) {
        if (status) {
            this.update({ status: status });
        }
        else if (this.status === 'ok') {
            this.update({ status: 'exited' });
        }
        else {
            this.update();
        }
    };
    /** JSDoc */
    Session.prototype.toJSON = function () {
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["dropUndefinedKeys"])({
            sid: "" + this.sid,
            init: this.init,
            // Make sure that sec is converted to ms for date constructor
            started: new Date(this.started * 1000).toISOString(),
            timestamp: new Date(this.timestamp * 1000).toISOString(),
            status: this.status,
            errors: this.errors,
            did: typeof this.did === 'number' || typeof this.did === 'string' ? "" + this.did : undefined,
            duration: this.duration,
            attrs: {
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent,
            },
        });
    };
    return Session;
}());

//# sourceMappingURL=session.js.map

/***/ }),

/***/ "./node_modules/@sentry/hub/esm/sessionflusher.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/hub/esm/sessionflusher.js ***!
  \********************************************************/
/*! exports provided: SessionFlusher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionFlusher", function() { return SessionFlusher; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/hub/esm/flags.js");
/* harmony import */ var _hub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hub */ "./node_modules/@sentry/hub/esm/hub.js");



/**
 * @inheritdoc
 */
var SessionFlusher = /** @class */ (function () {
    function SessionFlusher(transport, attrs) {
        var _this = this;
        this.flushTimeout = 60;
        this._pendingAggregates = {};
        this._isEnabled = true;
        this._transport = transport;
        // Call to setInterval, so that flush is called every 60 seconds
        this._intervalId = setInterval(function () { return _this.flush(); }, this.flushTimeout * 1000);
        this._sessionAttrs = attrs;
    }
    /** Sends session aggregates to Transport */
    SessionFlusher.prototype.sendSessionAggregates = function (sessionAggregates) {
        if (!this._transport.sendSession) {
            _flags__WEBPACK_IMPORTED_MODULE_1__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].warn("Dropping session because custom transport doesn't implement sendSession");
            return;
        }
        void this._transport.sendSession(sessionAggregates).then(null, function (reason) {
            _flags__WEBPACK_IMPORTED_MODULE_1__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_0__["logger"].error('Error while sending session:', reason);
        });
    };
    /** Checks if `pendingAggregates` has entries, and if it does flushes them by calling `sendSessions` */
    SessionFlusher.prototype.flush = function () {
        var sessionAggregates = this.getSessionAggregates();
        if (sessionAggregates.aggregates.length === 0) {
            return;
        }
        this._pendingAggregates = {};
        this.sendSessionAggregates(sessionAggregates);
    };
    /** Massages the entries in `pendingAggregates` and returns aggregated sessions */
    SessionFlusher.prototype.getSessionAggregates = function () {
        var _this = this;
        var aggregates = Object.keys(this._pendingAggregates).map(function (key) {
            return _this._pendingAggregates[parseInt(key)];
        });
        var sessionAggregates = {
            attrs: this._sessionAttrs,
            aggregates: aggregates,
        };
        return Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["dropUndefinedKeys"])(sessionAggregates);
    };
    /** JSDoc */
    SessionFlusher.prototype.close = function () {
        clearInterval(this._intervalId);
        this._isEnabled = false;
        this.flush();
    };
    /**
     * Wrapper function for _incrementSessionStatusCount that checks if the instance of SessionFlusher is enabled then
     * fetches the session status of the request from `Scope.getRequestSession().status` on the scope and passes them to
     * `_incrementSessionStatusCount` along with the start date
     */
    SessionFlusher.prototype.incrementSessionStatusCount = function () {
        if (!this._isEnabled) {
            return;
        }
        var scope = Object(_hub__WEBPACK_IMPORTED_MODULE_2__["getCurrentHub"])().getScope();
        var requestSession = scope && scope.getRequestSession();
        if (requestSession && requestSession.status) {
            this._incrementSessionStatusCount(requestSession.status, new Date());
            // This is not entirely necessarily but is added as a safe guard to indicate the bounds of a request and so in
            // case captureRequestSession is called more than once to prevent double count
            if (scope) {
                scope.setRequestSession(undefined);
            }
            /* eslint-enable @typescript-eslint/no-unsafe-member-access */
        }
    };
    /**
     * Increments status bucket in pendingAggregates buffer (internal state) corresponding to status of
     * the session received
     */
    SessionFlusher.prototype._incrementSessionStatusCount = function (status, date) {
        // Truncate minutes and seconds on Session Started attribute to have one minute bucket keys
        var sessionStartedTrunc = new Date(date).setSeconds(0, 0);
        this._pendingAggregates[sessionStartedTrunc] = this._pendingAggregates[sessionStartedTrunc] || {};
        // corresponds to aggregated sessions in one specific minute bucket
        // for example, {"started":"2021-03-16T08:00:00.000Z","exited":4, "errored": 1}
        var aggregationCounts = this._pendingAggregates[sessionStartedTrunc];
        if (!aggregationCounts.started) {
            aggregationCounts.started = new Date(sessionStartedTrunc).toISOString();
        }
        switch (status) {
            case 'errored':
                aggregationCounts.errored = (aggregationCounts.errored || 0) + 1;
                return aggregationCounts.errored;
            case 'ok':
                aggregationCounts.exited = (aggregationCounts.exited || 0) + 1;
                return aggregationCounts.exited;
            default:
                aggregationCounts.crashed = (aggregationCounts.crashed || 0) + 1;
                return aggregationCounts.crashed;
        }
    };
    return SessionFlusher;
}());

//# sourceMappingURL=sessionflusher.js.map

/***/ }),

/***/ "./node_modules/@sentry/minimal/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/minimal/esm/index.js ***!
  \***************************************************/
/*! exports provided: captureException, captureMessage, captureEvent, configureScope, addBreadcrumb, setContext, setExtras, setTags, setExtra, setTag, setUser, withScope, _callOnClient, startTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return captureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return captureMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return captureEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return configureScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return addBreadcrumb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return setContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return setExtras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return setTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return setExtra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return setTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return withScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_callOnClient", function() { return _callOnClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return startTransaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_hub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/hub */ "./node_modules/@sentry/hub/esm/index.js");


/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function callOnHub(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var hub = Object(_sentry_hub__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])();
    if (hub && hub[method]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return hub[method].apply(hub, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args));
    }
    throw new Error("No hub defined or " + method + " was not found on the hub, please open a bug report.");
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
function captureException(exception, captureContext) {
    var syntheticException = new Error('Sentry syntheticException');
    return callOnHub('captureException', exception, {
        captureContext: captureContext,
        originalException: exception,
        syntheticException: syntheticException,
    });
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param Severity Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, captureContext) {
    var syntheticException = new Error(message);
    // This is necessary to provide explicit scopes upgrade, without changing the original
    // arity of the `captureMessage(message, level)` method.
    var level = typeof captureContext === 'string' ? captureContext : undefined;
    var context = typeof captureContext !== 'string' ? { captureContext: captureContext } : undefined;
    return callOnHub('captureMessage', message, level, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ originalException: message, syntheticException: syntheticException }, context));
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event) {
    return callOnHub('captureEvent', event);
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
    callOnHub('configureScope', callback);
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
    callOnHub('addBreadcrumb', breadcrumb);
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normalized.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setContext(name, context) {
    callOnHub('setContext', name, context);
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
    callOnHub('setExtras', extras);
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
    callOnHub('setTags', tags);
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normalized.
 */
function setExtra(key, extra) {
    callOnHub('setExtra', key, extra);
}
/**
 * Set key:value that will be sent as tags data with the event.
 *
 * Can also be used to unset a tag, by passing `undefined`.
 *
 * @param key String key of tag
 * @param value Value of tag
 */
function setTag(key, value) {
    callOnHub('setTag', key, value);
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
    callOnHub('setUser', user);
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
    callOnHub('withScope', callback);
}
/**
 * Calls a function on the latest client. Use this with caution, it's meant as
 * in "internal" helper so we don't need to expose every possible function in
 * the shim. It is not guaranteed that the client actually implements the
 * function.
 *
 * @param method The method to call on the client/client.
 * @param args Arguments to pass to the client/fontend.
 * @hidden
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _callOnClient(method) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    callOnHub.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(['_invokeClient', method], args));
}
/**
 * Starts a new `Transaction` and returns it. This is the entry point to manual tracing instrumentation.
 *
 * A tree structure can be built by adding child spans to the transaction, and child spans to other spans. To start a
 * new child span within the transaction or any span, call the respective `.startChild()` method.
 *
 * Every child span must be finished before the transaction is finished, otherwise the unfinished spans are discarded.
 *
 * The transaction must be finished with a call to its `.finish()` method, at which point the transaction with all its
 * finished child spans will be sent to Sentry.
 *
 * @param context Properties of the new `Transaction`.
 * @param customSamplingContext Information given to the transaction sampling function (along with context-dependent
 * default values). See {@link Options.tracesSampler}.
 *
 * @returns The transaction which was just started
 */
function startTransaction(context, customSamplingContext) {
    return callOnHub('startTransaction', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), customSamplingContext);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/react/esm/constants.js ***!
  \*****************************************************/
/*! exports provided: REACT_RENDER_OP, REACT_UPDATE_OP, REACT_MOUNT_OP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_RENDER_OP", function() { return REACT_RENDER_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_UPDATE_OP", function() { return REACT_UPDATE_OP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_MOUNT_OP", function() { return REACT_MOUNT_OP; });
var REACT_RENDER_OP = 'ui.react.render';
var REACT_UPDATE_OP = 'ui.react.update';
var REACT_MOUNT_OP = 'ui.react.mount';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/errorboundary.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/react/esm/errorboundary.js ***!
  \*********************************************************/
/*! exports provided: isAtLeastReact17, UNKNOWN_COMPONENT, ErrorBoundary, withErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAtLeastReact17", function() { return isAtLeastReact17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_COMPONENT", function() { return UNKNOWN_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withErrorBoundary", function() { return withErrorBoundary; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/react/esm/flags.js");






function isAtLeastReact17(version) {
    var major = version.match(/^([^.]+)/);
    return major !== null && parseInt(major[0]) >= 17;
}
var UNKNOWN_COMPONENT = 'unknown';
var INITIAL_STATE = {
    componentStack: null,
    error: null,
    eventId: null,
};
/**
 * A ErrorBoundary component that logs errors to Sentry. Requires React >= 16.
 * NOTE: If you are a Sentry user, and you are seeing this stack frame, it means the
 * Sentry React SDK ErrorBoundary caught an error invoking your application code. This
 * is expected behavior and NOT indicative of a bug with the Sentry React SDK.
 */
var ErrorBoundary = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = INITIAL_STATE;
        _this.resetErrorBoundary = function () {
            var onReset = _this.props.onReset;
            var _a = _this.state, error = _a.error, componentStack = _a.componentStack, eventId = _a.eventId;
            if (onReset) {
                onReset(error, componentStack, eventId);
            }
            _this.setState(INITIAL_STATE);
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, _a) {
        var _this = this;
        var componentStack = _a.componentStack;
        var _b = this.props, beforeCapture = _b.beforeCapture, onError = _b.onError, showDialog = _b.showDialog, dialogOptions = _b.dialogOptions;
        Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["withScope"])(function (scope) {
            // If on React version >= 17, create stack trace from componentStack param and links
            // to to the original error using `error.cause` otherwise relies on error param for stacktrace.
            // Linking errors requires the `LinkedErrors` integration be enabled.
            if (isAtLeastReact17(react__WEBPACK_IMPORTED_MODULE_4__["version"])) {
                var errorBoundaryError = new Error(error.message);
                errorBoundaryError.name = "React ErrorBoundary " + errorBoundaryError.name;
                errorBoundaryError.stack = componentStack;
                // Using the `LinkedErrors` integration to link the errors together.
                error.cause = errorBoundaryError;
            }
            if (beforeCapture) {
                beforeCapture(scope, error, componentStack);
            }
            var eventId = Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["captureException"])(error, { contexts: { react: { componentStack: componentStack } } });
            if (onError) {
                onError(error, componentStack, eventId);
            }
            if (showDialog) {
                Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["showReportDialog"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dialogOptions), { eventId: eventId }));
            }
            // componentDidCatch is used over getDerivedStateFromError
            // so that componentStack is accessible through state.
            _this.setState({ error: error, componentStack: componentStack, eventId: eventId });
        });
    };
    ErrorBoundary.prototype.componentDidMount = function () {
        var onMount = this.props.onMount;
        if (onMount) {
            onMount();
        }
    };
    ErrorBoundary.prototype.componentWillUnmount = function () {
        var _a = this.state, error = _a.error, componentStack = _a.componentStack, eventId = _a.eventId;
        var onUnmount = this.props.onUnmount;
        if (onUnmount) {
            onUnmount(error, componentStack, eventId);
        }
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.props, fallback = _a.fallback, children = _a.children;
        var _b = this.state, error = _b.error, componentStack = _b.componentStack, eventId = _b.eventId;
        if (error) {
            var element = undefined;
            if (typeof fallback === 'function') {
                element = fallback({ error: error, componentStack: componentStack, resetError: this.resetErrorBoundary, eventId: eventId });
            }
            else {
                element = fallback;
            }
            if (react__WEBPACK_IMPORTED_MODULE_4__["isValidElement"](element)) {
                return element;
            }
            if (fallback) {
                _flags__WEBPACK_IMPORTED_MODULE_5__["IS_DEBUG_BUILD"] && _sentry_utils__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('fallback did not produce a valid ReactElement');
            }
            // Fail gracefully if no fallback provided or is not valid
            return null;
        }
        if (typeof children === 'function') {
            return children();
        }
        return children;
    };
    return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withErrorBoundary(WrappedComponent, errorBoundaryOptions) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    var componentDisplayName = WrappedComponent.displayName || WrappedComponent.name || UNKNOWN_COMPONENT;
    var Wrapped = function (props) { return (react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ErrorBoundary, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, errorBoundaryOptions),
        react__WEBPACK_IMPORTED_MODULE_4__["createElement"](WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)))); };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    Wrapped.displayName = "errorBoundary(" + componentDisplayName + ")";
    // Copy over static methods from Wrapped component to Profiler HOC
    // See: https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(Wrapped, WrappedComponent);
    return Wrapped;
}

//# sourceMappingURL=errorboundary.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/flags.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/react/esm/flags.js ***!
  \*************************************************/
/*! exports provided: IS_DEBUG_BUILD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEBUG_BUILD", function() { return IS_DEBUG_BUILD; });
/*
 * This file defines flags and constants that can be modified during compile time in order to facilitate tree shaking
 * for users.
 *
 * Debug flags need to be declared in each package individually and must not be imported across package boundaries,
 * because some build tools have trouble tree-shaking imported guards.
 *
 * As a convention, we define debug flags in a `flags.ts` file in the root of a package's `src` folder.
 *
 * Debug flag files will contain "magic strings" like `__SENTRY_DEBUG__` that may get replaced with actual values during
 * our, or the user's build process. Take care when introducing new flags - they must not throw if they are not
 * replaced.
 */
/** Flag that is true for debug builds, false otherwise. */
var IS_DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' ? true : __SENTRY_DEBUG__;
//# sourceMappingURL=flags.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/react/esm/index.js ***!
  \*************************************************/
/*! exports provided: Severity, addGlobalEventProcessor, addBreadcrumb, captureException, captureEvent, captureMessage, configureScope, getHubFromCarrier, getCurrentHub, Hub, makeMain, Scope, Session, startTransaction, SDK_VERSION, setContext, setExtra, setExtras, setTag, setTags, setUser, withScope, BrowserClient, injectReportDialog, eventFromException, eventFromMessage, defaultIntegrations, forceLoad, lastEventId, onLoad, showReportDialog, flush, close, wrap, SDK_NAME, Integrations, Transports, init, Profiler, withProfiler, useProfiler, ErrorBoundary, withErrorBoundary, createReduxEnhancer, reactRouterV3Instrumentation, reactRouterV4Instrumentation, reactRouterV5Instrumentation, withSentryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Severity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addGlobalEventProcessor", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["addGlobalEventProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addBreadcrumb", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["addBreadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureException", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["captureException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureEvent", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["captureEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captureMessage", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["captureMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureScope", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["configureScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHubFromCarrier", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["getHubFromCarrier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentHub", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["getCurrentHub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hub", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Hub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeMain", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["makeMain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Scope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Session"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startTransaction", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["startTransaction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_VERSION", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtra", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setExtra"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setExtras", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setExtras"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTag", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setTag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTags", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["setUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScope", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["withScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserClient", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injectReportDialog", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["injectReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromException", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["eventFromException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventFromMessage", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["eventFromMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIntegrations", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["defaultIntegrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLoad", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["forceLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastEventId", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["lastEventId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["onLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showReportDialog", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["showReportDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["flush"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "close", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDK_NAME", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["SDK_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Integrations", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Integrations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transports", function() { return _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["Transports"]; });

/* harmony import */ var _sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk */ "./node_modules/@sentry/react/esm/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _sdk__WEBPACK_IMPORTED_MODULE_1__["init"]; });

/* harmony import */ var _profiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profiler */ "./node_modules/@sentry/react/esm/profiler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return _profiler__WEBPACK_IMPORTED_MODULE_2__["Profiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withProfiler", function() { return _profiler__WEBPACK_IMPORTED_MODULE_2__["withProfiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useProfiler", function() { return _profiler__WEBPACK_IMPORTED_MODULE_2__["useProfiler"]; });

/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorboundary */ "./node_modules/@sentry/react/esm/errorboundary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return _errorboundary__WEBPACK_IMPORTED_MODULE_3__["ErrorBoundary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withErrorBoundary", function() { return _errorboundary__WEBPACK_IMPORTED_MODULE_3__["withErrorBoundary"]; });

/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux */ "./node_modules/@sentry/react/esm/redux.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReduxEnhancer", function() { return _redux__WEBPACK_IMPORTED_MODULE_4__["createReduxEnhancer"]; });

/* harmony import */ var _reactrouterv3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactrouterv3 */ "./node_modules/@sentry/react/esm/reactrouterv3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterV3Instrumentation", function() { return _reactrouterv3__WEBPACK_IMPORTED_MODULE_5__["reactRouterV3Instrumentation"]; });

/* harmony import */ var _reactrouter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactrouter */ "./node_modules/@sentry/react/esm/reactrouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterV4Instrumentation", function() { return _reactrouter__WEBPACK_IMPORTED_MODULE_6__["reactRouterV4Instrumentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactRouterV5Instrumentation", function() { return _reactrouter__WEBPACK_IMPORTED_MODULE_6__["reactRouterV5Instrumentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSentryRouting", function() { return _reactrouter__WEBPACK_IMPORTED_MODULE_6__["withSentryRouting"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/profiler.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/react/esm/profiler.js ***!
  \****************************************************/
/*! exports provided: UNKNOWN_COMPONENT, withProfiler, Profiler, useProfiler, getActiveTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_COMPONENT", function() { return UNKNOWN_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProfiler", function() { return withProfiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return Profiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProfiler", function() { return useProfiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveTransaction", function() { return getActiveTransaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@sentry/react/esm/constants.js");

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */





var UNKNOWN_COMPONENT = 'unknown';
var TRACING_GETTER = {
    id: 'Tracing',
};
var globalTracingIntegration = null;
/** @deprecated remove when @sentry/apm no longer used */
var getTracingIntegration = function () {
    if (globalTracingIntegration) {
        return globalTracingIntegration;
    }
    globalTracingIntegration = Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getIntegration(TRACING_GETTER);
    return globalTracingIntegration;
};
/**
 * pushActivity creates an new react activity.
 * Is a no-op if Tracing integration is not valid
 * @param name displayName of component that started activity
 * @deprecated remove when @sentry/apm no longer used
 */
function pushActivity(name, op) {
    if (globalTracingIntegration === null) {
        return null;
    }
    return globalTracingIntegration.constructor.pushActivity(name, {
        description: "<" + name + ">",
        op: op,
    });
}
/**
 * popActivity removes a React activity.
 * Is a no-op if Tracing integration is not valid.
 * @param activity id of activity that is being popped
 * @deprecated remove when @sentry/apm no longer used
 */
function popActivity(activity) {
    if (activity === null || globalTracingIntegration === null) {
        return;
    }
    globalTracingIntegration.constructor.popActivity(activity);
}
/**
 * Obtain a span given an activity id.
 * Is a no-op if Tracing integration is not valid.
 * @param activity activity id associated with obtained span
 * @deprecated remove when @sentry/apm no longer used
 */
function getActivitySpan(activity) {
    if (activity === null || globalTracingIntegration === null) {
        return undefined;
    }
    return globalTracingIntegration.constructor.getActivitySpan(activity);
}
/**
 * The Profiler component leverages Sentry's Tracing integration to generate
 * spans based on component lifecycles.
 */
var Profiler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Profiler, _super);
    function Profiler(props) {
        var _this = _super.call(this, props) || this;
        /**
         * The span of the mount activity
         * Made protected for the React Native SDK to access
         */
        _this._mountSpan = undefined;
        // The activity representing how long it takes to mount a component.
        _this._mountActivity = null;
        var _a = _this.props, name = _a.name, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
        if (disabled) {
            return _this;
        }
        // If they are using @sentry/apm, we need to push/pop activities
        // eslint-disable-next-line deprecation/deprecation
        if (getTracingIntegration()) {
            // eslint-disable-next-line deprecation/deprecation
            _this._mountActivity = pushActivity(name, _constants__WEBPACK_IMPORTED_MODULE_5__["REACT_MOUNT_OP"]);
        }
        else {
            var activeTransaction = getActiveTransaction();
            if (activeTransaction) {
                _this._mountSpan = activeTransaction.startChild({
                    description: "<" + name + ">",
                    op: _constants__WEBPACK_IMPORTED_MODULE_5__["REACT_MOUNT_OP"],
                });
            }
        }
        return _this;
    }
    // If a component mounted, we can finish the mount activity.
    Profiler.prototype.componentDidMount = function () {
        if (this._mountSpan) {
            this._mountSpan.finish();
        }
        else {
            // eslint-disable-next-line deprecation/deprecation
            this._mountSpan = getActivitySpan(this._mountActivity);
            // eslint-disable-next-line deprecation/deprecation
            popActivity(this._mountActivity);
            this._mountActivity = null;
        }
    };
    Profiler.prototype.componentDidUpdate = function (_a) {
        var _this = this;
        var updateProps = _a.updateProps, _b = _a.includeUpdates, includeUpdates = _b === void 0 ? true : _b;
        // Only generate an update span if hasUpdateSpan is true, if there is a valid mountSpan,
        // and if the updateProps have changed. It is ok to not do a deep equality check here as it is expensive.
        // We are just trying to give baseline clues for further investigation.
        if (includeUpdates && this._mountSpan && updateProps !== this.props.updateProps) {
            // See what props haved changed between the previous props, and the current props. This is
            // set as data on the span. We just store the prop keys as the values could be potenially very large.
            var changedProps = Object.keys(updateProps).filter(function (k) { return updateProps[k] !== _this.props.updateProps[k]; });
            if (changedProps.length > 0) {
                // The update span is a point in time span with 0 duration, just signifying that the component
                // has been updated.
                var now = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["timestampWithMs"])();
                this._mountSpan.startChild({
                    data: {
                        changedProps: changedProps,
                    },
                    description: "<" + this.props.name + ">",
                    endTimestamp: now,
                    op: _constants__WEBPACK_IMPORTED_MODULE_5__["REACT_UPDATE_OP"],
                    startTimestamp: now,
                });
            }
        }
    };
    // If a component is unmounted, we can say it is no longer on the screen.
    // This means we can finish the span representing the component render.
    Profiler.prototype.componentWillUnmount = function () {
        var _a = this.props, name = _a.name, _b = _a.includeRender, includeRender = _b === void 0 ? true : _b;
        if (this._mountSpan && includeRender) {
            // If we were able to obtain the spanId of the mount activity, we should set the
            // next activity as a child to the component mount activity.
            this._mountSpan.startChild({
                description: "<" + name + ">",
                endTimestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["timestampWithMs"])(),
                op: _constants__WEBPACK_IMPORTED_MODULE_5__["REACT_RENDER_OP"],
                startTimestamp: this._mountSpan.endTimestamp,
            });
        }
    };
    Profiler.prototype.render = function () {
        return this.props.children;
    };
    // eslint-disable-next-line @typescript-eslint/member-ordering
    Profiler.defaultProps = {
        disabled: false,
        includeRender: true,
        includeUpdates: true,
    };
    return Profiler;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]));
/**
 * withProfiler is a higher order component that wraps a
 * component in a {@link Profiler} component. It is recommended that
 * the higher order component be used over the regular {@link Profiler} component.
 *
 * @param WrappedComponent component that is wrapped by Profiler
 * @param options the {@link ProfilerProps} you can pass into the Profiler
 */
function withProfiler(WrappedComponent, 
// We do not want to have `updateProps` given in options, it is instead filled through the HOC.
options) {
    var componentDisplayName = (options && options.name) || WrappedComponent.displayName || WrappedComponent.name || UNKNOWN_COMPONENT;
    var Wrapped = function (props) { return (react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Profiler, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options, { name: componentDisplayName, updateProps: props }),
        react__WEBPACK_IMPORTED_MODULE_4__["createElement"](WrappedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)))); };
    Wrapped.displayName = "profiler(" + componentDisplayName + ")";
    // Copy over static methods from Wrapped component to Profiler HOC
    // See: https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(Wrapped, WrappedComponent);
    return Wrapped;
}
/**
 *
 * `useProfiler` is a React hook that profiles a React component.
 *
 * Requires React 16.8 or above.
 * @param name displayName of component being profiled
 */
function useProfiler(name, options) {
    if (options === void 0) { options = {
        disabled: false,
        hasRenderSpan: true,
    }; }
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(react__WEBPACK_IMPORTED_MODULE_4__["useState"](function () {
        if (options && options.disabled) {
            return undefined;
        }
        var activeTransaction = getActiveTransaction();
        if (activeTransaction) {
            return activeTransaction.startChild({
                description: "<" + name + ">",
                op: _constants__WEBPACK_IMPORTED_MODULE_5__["REACT_MOUNT_OP"],
            });
        }
        return undefined;
    }), 1), mountSpan = _a[0];
    react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
        if (mountSpan) {
            mountSpan.finish();
        }
        return function () {
            if (mountSpan && options.hasRenderSpan) {
                mountSpan.startChild({
                    description: "<" + name + ">",
                    endTimestamp: Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_2__["timestampWithMs"])(),
                    op: _constants__WEBPACK_IMPORTED_MODULE_5__["REACT_RENDER_OP"],
                    startTimestamp: mountSpan.endTimestamp,
                });
            }
        };
        // We only want this to run once.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

/** Grabs active transaction off scope */
function getActiveTransaction(hub) {
    if (hub === void 0) { hub = Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])(); }
    if (hub) {
        var scope = hub.getScope();
        if (scope) {
            return scope.getTransaction();
        }
    }
    return undefined;
}
//# sourceMappingURL=profiler.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/reactrouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/react/esm/reactrouter.js ***!
  \*******************************************************/
/*! exports provided: reactRouterV4Instrumentation, reactRouterV5Instrumentation, withSentryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterV4Instrumentation", function() { return reactRouterV4Instrumentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterV5Instrumentation", function() { return reactRouterV5Instrumentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSentryRouting", function() { return withSentryRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




/* eslint-enable @typescript-eslint/no-explicit-any */
var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
var activeTransaction;
function reactRouterV4Instrumentation(history, routes, matchPath) {
    return createReactRouterInstrumentation(history, 'react-router-v4', routes, matchPath);
}
function reactRouterV5Instrumentation(history, routes, matchPath) {
    return createReactRouterInstrumentation(history, 'react-router-v5', routes, matchPath);
}
function createReactRouterInstrumentation(history, name, allRoutes, matchPath) {
    if (allRoutes === void 0) { allRoutes = []; }
    function getInitPathName() {
        if (history && history.location) {
            return history.location.pathname;
        }
        if (global && global.location) {
            return global.location.pathname;
        }
        return undefined;
    }
    function getTransactionName(pathname) {
        if (allRoutes.length === 0 || !matchPath) {
            return pathname;
        }
        var branches = matchRoutes(allRoutes, pathname, matchPath);
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var x = 0; x < branches.length; x++) {
            if (branches[x].match.isExact) {
                return branches[x].match.path;
            }
        }
        return pathname;
    }
    return function (customStartTransaction, startTransactionOnPageLoad, startTransactionOnLocationChange) {
        if (startTransactionOnPageLoad === void 0) { startTransactionOnPageLoad = true; }
        if (startTransactionOnLocationChange === void 0) { startTransactionOnLocationChange = true; }
        var initPathName = getInitPathName();
        if (startTransactionOnPageLoad && initPathName) {
            activeTransaction = customStartTransaction({
                name: getTransactionName(initPathName),
                op: 'pageload',
                tags: {
                    'routing.instrumentation': name,
                },
            });
        }
        if (startTransactionOnLocationChange && history.listen) {
            history.listen(function (location, action) {
                if (action && (action === 'PUSH' || action === 'POP')) {
                    if (activeTransaction) {
                        activeTransaction.finish();
                    }
                    var tags = {
                        'routing.instrumentation': name,
                    };
                    activeTransaction = customStartTransaction({
                        name: getTransactionName(location.pathname),
                        op: 'navigation',
                        tags: tags,
                    });
                }
            });
        }
    };
}
/**
 * Matches a set of routes to a pathname
 * Based on implementation from
 */
function matchRoutes(routes, pathname, matchPath, branch) {
    if (branch === void 0) { branch = []; }
    routes.some(function (route) {
        var match = route.path
            ? matchPath(pathname, route)
            : branch.length
                ? branch[branch.length - 1].match // use parent match
                : computeRootMatch(pathname); // use default "root" match
        if (match) {
            branch.push({ route: route, match: match });
            if (route.routes) {
                matchRoutes(route.routes, pathname, matchPath, branch);
            }
        }
        return !!match;
    });
    return branch;
}
function computeRootMatch(pathname) {
    return { path: '/', url: '/', params: {}, isExact: pathname === '/' };
}
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
function withSentryRouting(Route) {
    var componentDisplayName = Route.displayName || Route.name;
    var WrappedRoute = function (props) {
        if (activeTransaction && props && props.computedMatch && props.computedMatch.isExact) {
            activeTransaction.setName(props.computedMatch.path);
        }
        // @ts-ignore Setting more specific React Component typing for `R` generic above
        // will break advanced type inference done by react router params:
        // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/13dc4235c069e25fe7ee16e11f529d909f9f3ff8/types/react-router/index.d.ts#L154-L164
        return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Route, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
    };
    WrappedRoute.displayName = "sentryRoute(" + componentDisplayName + ")";
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(WrappedRoute, Route);
    // @ts-ignore Setting more specific React Component typing for `R` generic above
    // will break advanced type inference done by react router params:
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/13dc4235c069e25fe7ee16e11f529d909f9f3ff8/types/react-router/index.d.ts#L154-L164
    return WrappedRoute;
}
/* eslint-enable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
//# sourceMappingURL=reactrouter.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/reactrouterv3.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/react/esm/reactrouterv3.js ***!
  \*********************************************************/
/*! exports provided: reactRouterV3Instrumentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactRouterV3Instrumentation", function() { return reactRouterV3Instrumentation; });
/* harmony import */ var _sentry_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/utils */ "./node_modules/@sentry/utils/esm/index.js");

var global = Object(_sentry_utils__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
/**
 * Creates routing instrumentation for React Router v3
 * Works for React Router >= 3.2.0 and < 4.0.0
 *
 * @param history object from the `history` library
 * @param routes a list of all routes, should be
 * @param match `Router.match` utility
 */
function reactRouterV3Instrumentation(history, routes, match) {
    return function (startTransaction, startTransactionOnPageLoad, startTransactionOnLocationChange) {
        if (startTransactionOnPageLoad === void 0) { startTransactionOnPageLoad = true; }
        if (startTransactionOnLocationChange === void 0) { startTransactionOnLocationChange = true; }
        var activeTransaction;
        var prevName;
        // Have to use global.location because history.location might not be defined.
        if (startTransactionOnPageLoad && global && global.location) {
            normalizeTransactionName(routes, global.location, match, function (localName) {
                prevName = localName;
                activeTransaction = startTransaction({
                    name: prevName,
                    op: 'pageload',
                    tags: {
                        'routing.instrumentation': 'react-router-v3',
                    },
                });
            });
        }
        if (startTransactionOnLocationChange && history.listen) {
            history.listen(function (location) {
                if (location.action === 'PUSH' || location.action === 'POP') {
                    if (activeTransaction) {
                        activeTransaction.finish();
                    }
                    var tags_1 = {
                        'routing.instrumentation': 'react-router-v3',
                    };
                    if (prevName) {
                        tags_1.from = prevName;
                    }
                    normalizeTransactionName(routes, location, match, function (localName) {
                        prevName = localName;
                        activeTransaction = startTransaction({
                            name: prevName,
                            op: 'navigation',
                            tags: tags_1,
                        });
                    });
                }
            });
        }
    };
}
/**
 * Normalize transaction names using `Router.match`
 */
function normalizeTransactionName(appRoutes, location, match, callback) {
    var name = location.pathname;
    match({
        location: location,
        routes: appRoutes,
    }, function (error, _redirectLocation, renderProps) {
        if (error || !renderProps) {
            return callback(name);
        }
        var routePath = getRouteStringFromRoutes(renderProps.routes || []);
        if (routePath.length === 0 || routePath === '/*') {
            return callback(name);
        }
        name = routePath;
        return callback(name);
    });
}
/**
 * Generate route name from array of routes
 */
function getRouteStringFromRoutes(routes) {
    if (!Array.isArray(routes) || routes.length === 0) {
        return '';
    }
    var routesWithPaths = routes.filter(function (route) { return !!route.path; });
    var index = -1;
    for (var x = routesWithPaths.length - 1; x >= 0; x--) {
        var route = routesWithPaths[x];
        if (route.path && route.path.startsWith('/')) {
            index = x;
            break;
        }
    }
    return routesWithPaths
        .slice(index)
        .filter(function (_a) {
        var path = _a.path;
        return !!path;
    })
        .map(function (_a) {
        var path = _a.path;
        return path;
    })
        .join('');
}
//# sourceMappingURL=reactrouterv3.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/redux.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/react/esm/redux.js ***!
  \*************************************************/
/*! exports provided: createReduxEnhancer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReduxEnhancer", function() { return createReduxEnhancer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sentry_minimal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/minimal */ "./node_modules/@sentry/minimal/esm/index.js");

/* eslint-disable @typescript-eslint/no-explicit-any */

var ACTION_BREADCRUMB_CATEGORY = 'redux.action';
var ACTION_BREADCRUMB_TYPE = 'info';
var STATE_CONTEXT_KEY = 'redux.state';
var defaultOptions = {
    actionTransformer: function (action) { return action; },
    stateTransformer: function (state) { return state || null; },
};
/**
 * Creates an enhancer that would be passed to Redux's createStore to log actions and the latest state to Sentry.
 *
 * @param enhancerOptions Options to pass to the enhancer
 */
function createReduxEnhancer(enhancerOptions) {
    // Note: We return an any type as to not have type conflicts.
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultOptions), enhancerOptions);
    return function (next) {
        return function (reducer, initialState) {
            var sentryReducer = function (state, action) {
                var newState = reducer(state, action);
                Object(_sentry_minimal__WEBPACK_IMPORTED_MODULE_1__["configureScope"])(function (scope) {
                    /* Action breadcrumbs */
                    var transformedAction = options.actionTransformer(action);
                    if (typeof transformedAction !== 'undefined' && transformedAction !== null) {
                        scope.addBreadcrumb({
                            category: ACTION_BREADCRUMB_CATEGORY,
                            data: transformedAction,
                            type: ACTION_BREADCRUMB_TYPE,
                        });
                    }
                    /* Set latest state to scope */
                    var transformedState = options.stateTransformer(newState);
                    if (typeof transformedState !== 'undefined' && transformedState !== null) {
                        scope.setContext(STATE_CONTEXT_KEY, transformedState);
                    }
                    else {
                        scope.setContext(STATE_CONTEXT_KEY, null);
                    }
                    /* Allow user to configure scope with latest state */
                    // eslint-disable-next-line @typescript-eslint/unbound-method
                    var configureScopeWithState = options.configureScopeWithState;
                    if (typeof configureScopeWithState === 'function') {
                        configureScopeWithState(scope, newState);
                    }
                });
                return newState;
            };
            return next(sentryReducer, initialState);
        };
    };
}

//# sourceMappingURL=redux.js.map

/***/ }),

/***/ "./node_modules/@sentry/react/esm/sdk.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/react/esm/sdk.js ***!
  \***********************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");

/**
 * Inits the React SDK
 */
function init(options) {
    options._metadata = options._metadata || {};
    options._metadata.sdk = options._metadata.sdk || {
        name: 'sentry.javascript.react',
        packages: [
            {
                name: 'npm:@sentry/react',
                version: _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"],
            },
        ],
        version: _sentry_browser__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"],
    };
    Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_0__["init"])(options);
}
//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@sentry/rrweb/dist/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/rrweb/dist/index.es.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rrweb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rrweb */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");



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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var SentryRRWeb = /** @class */ (function () {
    function SentryRRWeb(_a) {
        var _this = this;
        if (_a === void 0) { _a = {}; }
        var _b = _a.checkoutEveryNms, checkoutEveryNms = _b === void 0 ? 5 * 60 * 1000 : _b, _c = _a.maskAllInputs, maskAllInputs = _c === void 0 ? true : _c, recordOptions = __rest(_a, ["checkoutEveryNms", "maskAllInputs"]);
        this.name = SentryRRWeb.id;
        this.events = [];
        // default checkout time of 5 minutes
        this.recordOptions = __assign({ checkoutEveryNms: checkoutEveryNms,
            maskAllInputs: maskAllInputs }, recordOptions);
        this.events = [];
        Object(rrweb__WEBPACK_IMPORTED_MODULE_0__["record"])(__assign(__assign({}, this.recordOptions), { emit: function (event, isCheckout) {
                if (isCheckout) {
                    _this.events = [event];
                }
                else {
                    _this.events.push(event);
                }
            } }));
    }
    SentryRRWeb.prototype.setupOnce = function () {
        var _this = this;
        Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["addGlobalEventProcessor"])(function (event) { return _this.processEvent(event); });
    };
    // In version 6.10 of the JS SDK, `dsn.publicKey` was introduced to replace
    // `dsn.user`, and in version 7.0.0, `dsn.user` was removed. Further, 7.0.0
    // removed the `Dsn` type in favor of the `DsnComponents` type. Since for now
    // our peer dependency is marked as >=4.0.0, we type `dsn` as `any` and look
    // for both properties, to cover our bases as much as possible.
    SentryRRWeb.prototype.attachmentUrlFromDsn = function (dsn, eventId) {
        var host = dsn.host, path = dsn.path, projectId = dsn.projectId, port = dsn.port, protocol = dsn.protocol;
        var publicKey = dsn.publicKey || dsn.user;
        return protocol + "://" + host + (port !== '' ? ":" + port : '') + (path !== '' ? "/" + path : '') + "/api/" + projectId + "/events/" + eventId + "/attachments/?sentry_key=" + publicKey + "&sentry_version=7&sentry_client=rrweb";
    };
    SentryRRWeb.prototype.processEvent = function (event) {
        var self = Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getIntegration(SentryRRWeb);
        if (!self)
            return;
        try {
            // short circuit if theres no events to replay
            if (!this.events.length)
                return;
            var client = Object(_sentry_browser__WEBPACK_IMPORTED_MODULE_1__["getCurrentHub"])().getClient();
            var endpoint = self.attachmentUrlFromDsn(client.getDsn(), event.event_id);
            var formData = new FormData();
            formData.append('rrweb', new Blob([JSON.stringify({ events: self.events })], {
                type: 'application/json',
            }), 'rrweb.json');
            fetch(endpoint, {
                method: 'POST',
                body: formData,
            }).catch(function (ex) {
                // we have to catch this otherwise it throws an infinite loop in Sentry
                console.error(ex);
            });
            return event;
        }
        catch (ex) {
            console.error(ex);
        }
    };
    SentryRRWeb.id = 'SentryRRWeb';
    return SentryRRWeb;
}());

/* harmony default export */ __webpack_exports__["default"] = (SentryRRWeb);


/***/ }),

/***/ "./node_modules/@sentry/types/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/types/esm/index.js ***!
  \*************************************************/
/*! exports provided: Severity, SeverityLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _severity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./severity */ "./node_modules/@sentry/types/esm/severity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return _severity__WEBPACK_IMPORTED_MODULE_0__["Severity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeverityLevels", function() { return _severity__WEBPACK_IMPORTED_MODULE_0__["SeverityLevels"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/types/esm/severity.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/types/esm/severity.js ***!
  \****************************************************/
/*! exports provided: Severity, SeverityLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return Severity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeverityLevels", function() { return SeverityLevels; });
/**
 * TODO(v7): Remove this enum and replace with SeverityLevel
 */
var Severity;
(function (Severity) {
    /** JSDoc */
    Severity["Fatal"] = "fatal";
    /** JSDoc */
    Severity["Error"] = "error";
    /** JSDoc */
    Severity["Warning"] = "warning";
    /** JSDoc */
    Severity["Log"] = "log";
    /** JSDoc */
    Severity["Info"] = "info";
    /** JSDoc */
    Severity["Debug"] = "debug";
    /** JSDoc */
    Severity["Critical"] = "critical";
})(Severity || (Severity = {}));
// TODO: in v7, these can disappear, because they now also exist in `@sentry/utils`. (Having them there rather than here
// is nice because then it enforces the idea that only types are exported from `@sentry/types`.)
var SeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug', 'critical'];
//# sourceMappingURL=severity.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/async.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/async.js ***!
  \*************************************************/
/*! exports provided: forget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return forget; });
/**
 * Consumes the promise and logs the error when it rejects.
 * @param promise A promise to forget.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forget(promise) {
    void promise.then(null, function (e) {
        // TODO: Use a better logging mechanism
        // eslint-disable-next-line no-console
        console.error(e);
    });
}
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/browser.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/browser.js ***!
  \***************************************************/
/*! exports provided: htmlTreeAsString, getLocationHref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return htmlTreeAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return getLocationHref; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");


/**
 * Given a child DOM element, returns a query-selector statement describing that
 * and its ancestors
 * e.g. [HTMLElement] => body > div > input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function htmlTreeAsString(elem, keyAttrs) {
    // try/catch both:
    // - accessing event.target (see getsentry/raven-js#838, #768)
    // - `htmlTreeAsString` because it's complex, and just accessing the DOM incorrectly
    // - can throw an exception in some circumstances.
    try {
        var currentElem = elem;
        var MAX_TRAVERSE_HEIGHT = 5;
        var MAX_OUTPUT_LEN = 80;
        var out = [];
        var height = 0;
        var len = 0;
        var separator = ' > ';
        var sepLength = separator.length;
        var nextStr = void 0;
        // eslint-disable-next-line no-plusplus
        while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
            nextStr = _htmlElementAsString(currentElem, keyAttrs);
            // bail out if
            // - nextStr is the 'html' element
            // - the length of the string that would be created exceeds MAX_OUTPUT_LEN
            //   (ignore this limit if we are on the first iteration)
            if (nextStr === 'html' || (height > 1 && len + out.length * sepLength + nextStr.length >= MAX_OUTPUT_LEN)) {
                break;
            }
            out.push(nextStr);
            len += nextStr.length;
            currentElem = currentElem.parentNode;
        }
        return out.reverse().join(separator);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/**
 * Returns a simple, query-selector representation of a DOM element
 * e.g. [HTMLElement] => input#foo.btn[name=baz]
 * @returns generated DOM path
 */
function _htmlElementAsString(el, keyAttrs) {
    var elem = el;
    var out = [];
    var className;
    var classes;
    var key;
    var attr;
    var i;
    if (!elem || !elem.tagName) {
        return '';
    }
    out.push(elem.tagName.toLowerCase());
    // Pairs of attribute keys defined in `serializeAttribute` and their values on element.
    var keyAttrPairs = keyAttrs && keyAttrs.length
        ? keyAttrs.filter(function (keyAttr) { return elem.getAttribute(keyAttr); }).map(function (keyAttr) { return [keyAttr, elem.getAttribute(keyAttr)]; })
        : null;
    if (keyAttrPairs && keyAttrPairs.length) {
        keyAttrPairs.forEach(function (keyAttrPair) {
            out.push("[" + keyAttrPair[0] + "=\"" + keyAttrPair[1] + "\"]");
        });
    }
    else {
        if (elem.id) {
            out.push("#" + elem.id);
        }
        // eslint-disable-next-line prefer-const
        className = elem.className;
        if (className && Object(_is__WEBPACK_IMPORTED_MODULE_1__["isString"])(className)) {
            classes = className.split(/\s+/);
            for (i = 0; i < classes.length; i++) {
                out.push("." + classes[i]);
            }
        }
    }
    var allowedAttrs = ['type', 'name', 'title', 'alt'];
    for (i = 0; i < allowedAttrs.length; i++) {
        key = allowedAttrs[i];
        attr = elem.getAttribute(key);
        if (attr) {
            out.push("[" + key + "=\"" + attr + "\"]");
        }
    }
    return out.join('');
}
/**
 * A safe form of location.href
 */
function getLocationHref() {
    var global = Object(_global__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])();
    try {
        return global.document.location.href;
    }
    catch (oO) {
        return '';
    }
}
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/clientreport.js":
/*!********************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/clientreport.js ***!
  \********************************************************/
/*! exports provided: createClientReportEnvelope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClientReportEnvelope", function() { return createClientReportEnvelope; });
/* harmony import */ var _envelope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envelope */ "./node_modules/@sentry/utils/esm/envelope.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "./node_modules/@sentry/utils/esm/time.js");


/**
 * Creates client report envelope
 * @param discarded_events An array of discard events
 * @param dsn A DSN that can be set on the header. Optional.
 */
function createClientReportEnvelope(discarded_events, dsn, timestamp) {
    var clientReportItem = [
        { type: 'client_report' },
        {
            timestamp: timestamp || Object(_time__WEBPACK_IMPORTED_MODULE_1__["dateTimestampInSeconds"])(),
            discarded_events: discarded_events,
        },
    ];
    return Object(_envelope__WEBPACK_IMPORTED_MODULE_0__["createEnvelope"])(dsn ? { dsn: dsn } : {}, [clientReportItem]);
}
//# sourceMappingURL=clientreport.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/dsn.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/dsn.js ***!
  \***********************************************/
/*! exports provided: dsnToString, makeDsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsnToString", function() { return dsnToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDsn", function() { return makeDsn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/utils/esm/flags.js");



/** Regular expression used to parse a Dsn. */
var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
    return protocol === 'http' || protocol === 'https';
}
/**
 * Renders the string representation of this Dsn.
 *
 * By default, this will render the public representation without the password
 * component. To get the deprecated private representation, set `withPassword`
 * to true.
 *
 * @param withPassword When set to true, the password will be included.
 */
function dsnToString(dsn, withPassword) {
    if (withPassword === void 0) { withPassword = false; }
    var host = dsn.host, path = dsn.path, pass = dsn.pass, port = dsn.port, projectId = dsn.projectId, protocol = dsn.protocol, publicKey = dsn.publicKey;
    return (protocol + "://" + publicKey + (withPassword && pass ? ":" + pass : '') +
        ("@" + host + (port ? ":" + port : '') + "/" + (path ? path + "/" : path) + projectId));
}
function dsnFromString(str) {
    var match = DSN_REGEX.exec(str);
    if (!match) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"]("Invalid Sentry Dsn: " + str);
    }
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(match.slice(1), 6), protocol = _a[0], publicKey = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5];
    var path = '';
    var projectId = lastPath;
    var split = projectId.split('/');
    if (split.length > 1) {
        path = split.slice(0, -1).join('/');
        projectId = split.pop();
    }
    if (projectId) {
        var projectMatch = projectId.match(/^\d+/);
        if (projectMatch) {
            projectId = projectMatch[0];
        }
    }
    return dsnFromComponents({ host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, publicKey: publicKey });
}
function dsnFromComponents(components) {
    // TODO this is for backwards compatibility, and can be removed in a future version
    if ('user' in components && !('publicKey' in components)) {
        components.publicKey = components.user;
    }
    return {
        user: components.publicKey || '',
        protocol: components.protocol,
        publicKey: components.publicKey || '',
        pass: components.pass || '',
        host: components.host,
        port: components.port || '',
        path: components.path || '',
        projectId: components.projectId,
    };
}
function validateDsn(dsn) {
    if (!_flags__WEBPACK_IMPORTED_MODULE_2__["IS_DEBUG_BUILD"]) {
        return;
    }
    var port = dsn.port, projectId = dsn.projectId, protocol = dsn.protocol;
    var requiredComponents = ['protocol', 'publicKey', 'host', 'projectId'];
    requiredComponents.forEach(function (component) {
        if (!dsn[component]) {
            throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"]("Invalid Sentry Dsn: " + component + " missing");
        }
    });
    if (!projectId.match(/^\d+$/)) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"]("Invalid Sentry Dsn: Invalid projectId " + projectId);
    }
    if (!isValidProtocol(protocol)) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"]("Invalid Sentry Dsn: Invalid protocol " + protocol);
    }
    if (port && isNaN(parseInt(port, 10))) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__["SentryError"]("Invalid Sentry Dsn: Invalid port " + port);
    }
    return true;
}
/** The Sentry Dsn, identifying a Sentry instance and project. */
function makeDsn(from) {
    var components = typeof from === 'string' ? dsnFromString(from) : dsnFromComponents(from);
    validateDsn(components);
    return components;
}
//# sourceMappingURL=dsn.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/enums.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/enums.js ***!
  \*************************************************/
/*! exports provided: SeverityLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeverityLevels", function() { return SeverityLevels; });
var SeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug', 'critical'];
//# sourceMappingURL=enums.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/env.js":
/*!***********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/env.js ***!
  \***********************************************/
/*! exports provided: isBrowserBundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserBundle", function() { return isBrowserBundle; });
/*
 * This module exists for optimizations in the build process through rollup and terser.  We define some global
 * constants, which can be overridden during build. By guarding certain pieces of code with functions that return these
 * constants, we can control whether or not they appear in the final bundle. (Any code guarded by a false condition will
 * never run, and will hence be dropped during treeshaking.) The two primary uses for this are stripping out calls to
 * `logger` and preventing node-related code from appearing in browser bundles.
 *
 * Attention:
 * This file should not be used to define constants/flags that are intended to be used for tree-shaking conducted by
 * users. These fags should live in their respective packages, as we identified user tooling (specifically webpack)
 * having issues tree-shaking these constants across package boundaries.
 * An example for this is the __SENTRY_DEBUG__ constant. It is declared in each package individually because we want
 * users to be able to shake away expressions that it guards.
 */
/**
 * Figures out if we're building a browser bundle.
 *
 * @returns true if this is a browser bundle build.
 */
function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== 'undefined' && !!__SENTRY_BROWSER_BUNDLE__;
}
//# sourceMappingURL=env.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/envelope.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/envelope.js ***!
  \****************************************************/
/*! exports provided: createEnvelope, addItemToEnvelope, getEnvelopeType, serializeEnvelope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEnvelope", function() { return createEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToEnvelope", function() { return addItemToEnvelope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeType", function() { return getEnvelopeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeEnvelope", function() { return serializeEnvelope; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");


/**
 * Creates an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function createEnvelope(headers, items) {
    if (items === void 0) { items = []; }
    return [headers, items];
}
/**
 * Add an item to an envelope.
 * Make sure to always explicitly provide the generic to this function
 * so that the envelope types resolve correctly.
 */
function addItemToEnvelope(envelope, newItem) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(envelope, 2), headers = _a[0], items = _a[1];
    return [headers, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items, [newItem])];
}
/**
 * Get the type of the envelope. Grabs the type from the first envelope item.
 */
function getEnvelopeType(envelope) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(envelope, 2), _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a[1], 1), _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_b[0], 1), firstItemHeader = _c[0];
    return firstItemHeader.type;
}
/**
 * Serializes an envelope into a string.
 */
function serializeEnvelope(envelope) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(envelope, 2), headers = _a[0], items = _a[1];
    var serializedHeaders = JSON.stringify(headers);
    // Have to cast items to any here since Envelope is a union type
    // Fixed in Typescript 4.2
    // TODO: Remove any[] cast when we upgrade to TS 4.2
    // https://github.com/microsoft/TypeScript/issues/36390
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return items.reduce(function (acc, item) {
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(item, 2), itemHeaders = _a[0], payload = _a[1];
        // We do not serialize payloads that are primitives
        var serializedPayload = Object(_is__WEBPACK_IMPORTED_MODULE_1__["isPrimitive"])(payload) ? String(payload) : JSON.stringify(payload);
        return acc + "\n" + JSON.stringify(itemHeaders) + "\n" + serializedPayload;
    }, serializedHeaders);
}
//# sourceMappingURL=envelope.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/error.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/error.js ***!
  \*************************************************/
/*! exports provided: SentryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return SentryError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill */ "./node_modules/@sentry/utils/esm/polyfill.js");


/** An error emitted by Sentry SDKs and related utilities. */
var SentryError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SentryError, _super);
    function SentryError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = _newTarget.prototype.constructor.name;
        Object(_polyfill__WEBPACK_IMPORTED_MODULE_1__["setPrototypeOf"])(_this, _newTarget.prototype);
        return _this;
    }
    return SentryError;
}(Error));

//# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/flags.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/flags.js ***!
  \*************************************************/
/*! exports provided: IS_DEBUG_BUILD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_DEBUG_BUILD", function() { return IS_DEBUG_BUILD; });
/*
 * This file defines flags and constants that can be modified during compile time in order to facilitate tree shaking
 * for users.
 *
 * Debug flags need to be declared in each package individually and must not be imported across package boundaries,
 * because some build tools have trouble tree-shaking imported guards.
 *
 * As a convention, we define debug flags in a `flags.ts` file in the root of a package's `src` folder.
 *
 * Debug flag files will contain "magic strings" like `__SENTRY_DEBUG__` that may get replaced with actual values during
 * our, or the user's build process. Take care when introducing new flags - they must not throw if they are not
 * replaced.
 */
/** Flag that is true for debug builds, false otherwise. */
var IS_DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' ? true : __SENTRY_DEBUG__;
//# sourceMappingURL=flags.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/global.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/global.js ***!
  \**************************************************/
/*! exports provided: getGlobalObject, getGlobalSingleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return getGlobalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalSingleton", function() { return getGlobalSingleton; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./node_modules/@sentry/utils/esm/node.js");
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */

var fallbackGlobalObject = {};
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
    return (Object(_node__WEBPACK_IMPORTED_MODULE_0__["isNodeEnv"])()
        ? global
        : typeof window !== 'undefined' // eslint-disable-line no-restricted-globals
            ? window // eslint-disable-line no-restricted-globals
            : typeof self !== 'undefined'
                ? self
                : fallbackGlobalObject);
}
/**
 * Returns a global singleton contained in the global `__SENTRY__` object.
 *
 * If the singleton doesn't already exist in `__SENTRY__`, it will be created using the given factory
 * function and added to the `__SENTRY__` object.
 *
 * @param name name of the global singleton on __SENTRY__
 * @param creator creator Factory function to create the singleton if it doesn't already exist on `__SENTRY__`
 * @param obj (Optional) The global object on which to look for `__SENTRY__`, if not `getGlobalObject`'s return value
 * @returns the singleton
 */
function getGlobalSingleton(name, creator, obj) {
    var global = (obj || getGlobalObject());
    var __SENTRY__ = (global.__SENTRY__ = global.__SENTRY__ || {});
    var singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
    return singleton;
}
//# sourceMappingURL=global.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/index.js ***!
  \*************************************************/
/*! exports provided: forget, htmlTreeAsString, getLocationHref, dsnToString, makeDsn, SeverityLevels, SentryError, getGlobalObject, getGlobalSingleton, addInstrumentationHandler, isError, isErrorEvent, isDOMError, isDOMException, isString, isPrimitive, isPlainObject, isEvent, isElement, isRegExp, isThenable, isSyntheticEvent, isNaN, isInstanceOf, CONSOLE_LEVELS, consoleSandbox, logger, memoBuilder, uuid4, parseUrl, getEventDescription, addExceptionTypeValue, addExceptionMechanism, parseSemver, addContextToFrame, stripUrlQueryAndFragment, checkOrSetAlreadyCaught, isNodeEnv, dynamicRequire, loadModule, normalize, normalizeToSize, walk, fill, addNonEnumerableProperty, markFunctionWrapped, getOriginalFunction, urlEncode, convertToPlainObject, extractExceptionKeysForMessage, dropUndefinedKeys, objectify, resolve, relative, normalizePath, isAbsolute, join, dirname, basename, makePromiseBuffer, severityFromString, createStackParser, stripSentryFramesAndReverse, getFunctionName, eventStatusFromHttpCode, truncate, snipLine, safeJoin, isMatchingPattern, escapeStringForRegex, supportsErrorEvent, supportsDOMError, supportsDOMException, supportsFetch, isNativeFetch, supportsNativeFetch, supportsReportingObserver, supportsReferrerPolicy, supportsHistory, resolvedSyncPromise, rejectedSyncPromise, SyncPromise, dateTimestampInSeconds, timestampInSeconds, timestampWithMs, usingPerformanceAPI, _browserPerformanceTimeOriginMode, browserPerformanceTimeOrigin, TRACEPARENT_REGEXP, extractTraceparentData, isBrowserBundle, createEnvelope, addItemToEnvelope, getEnvelopeType, serializeEnvelope, createClientReportEnvelope, DEFAULT_RETRY_AFTER, parseRetryAfterHeader, disabledUntil, isRateLimited, updateRateLimits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async */ "./node_modules/@sentry/utils/esm/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forget", function() { return _async__WEBPACK_IMPORTED_MODULE_0__["forget"]; });

/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlTreeAsString", function() { return _browser__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocationHref", function() { return _browser__WEBPACK_IMPORTED_MODULE_1__["getLocationHref"]; });

/* harmony import */ var _dsn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dsn */ "./node_modules/@sentry/utils/esm/dsn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dsnToString", function() { return _dsn__WEBPACK_IMPORTED_MODULE_2__["dsnToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeDsn", function() { return _dsn__WEBPACK_IMPORTED_MODULE_2__["makeDsn"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./node_modules/@sentry/utils/esm/enums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeverityLevels", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["SeverityLevels"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentryError", function() { return _error__WEBPACK_IMPORTED_MODULE_4__["SentryError"]; });

/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return _global__WEBPACK_IMPORTED_MODULE_5__["getGlobalObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalSingleton", function() { return _global__WEBPACK_IMPORTED_MODULE_5__["getGlobalSingleton"]; });

/* harmony import */ var _instrument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instrument */ "./node_modules/@sentry/utils/esm/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return _instrument__WEBPACK_IMPORTED_MODULE_6__["addInstrumentationHandler"]; });

/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isThenable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isSyntheticEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isNaN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return _is__WEBPACK_IMPORTED_MODULE_7__["isInstanceOf"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_LEVELS", function() { return _logger__WEBPACK_IMPORTED_MODULE_8__["CONSOLE_LEVELS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return _logger__WEBPACK_IMPORTED_MODULE_8__["consoleSandbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_8__["logger"]; });

/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoBuilder", function() { return _memo__WEBPACK_IMPORTED_MODULE_9__["memoBuilder"]; });

/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./misc */ "./node_modules/@sentry/utils/esm/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["uuid4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["getEventDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["addExceptionTypeValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["addExceptionMechanism"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["parseSemver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["addContextToFrame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["stripUrlQueryAndFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkOrSetAlreadyCaught", function() { return _misc__WEBPACK_IMPORTED_MODULE_10__["checkOrSetAlreadyCaught"]; });

/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node */ "./node_modules/@sentry/utils/esm/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return _node__WEBPACK_IMPORTED_MODULE_11__["isNodeEnv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return _node__WEBPACK_IMPORTED_MODULE_11__["dynamicRequire"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return _node__WEBPACK_IMPORTED_MODULE_11__["loadModule"]; });

/* harmony import */ var _normalize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./normalize */ "./node_modules/@sentry/utils/esm/normalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _normalize__WEBPACK_IMPORTED_MODULE_12__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return _normalize__WEBPACK_IMPORTED_MODULE_12__["normalizeToSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return _normalize__WEBPACK_IMPORTED_MODULE_12__["walk"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["fill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addNonEnumerableProperty", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["addNonEnumerableProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markFunctionWrapped", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["markFunctionWrapped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOriginalFunction", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["getOriginalFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["urlEncode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertToPlainObject", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["convertToPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["extractExceptionKeysForMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["dropUndefinedKeys"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectify", function() { return _object__WEBPACK_IMPORTED_MODULE_13__["objectify"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./path */ "./node_modules/@sentry/utils/esm/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return _path__WEBPACK_IMPORTED_MODULE_14__["resolve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _path__WEBPACK_IMPORTED_MODULE_14__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return _path__WEBPACK_IMPORTED_MODULE_14__["normalizePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return _path__WEBPACK_IMPORTED_MODULE_14__["isAbsolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _path__WEBPACK_IMPORTED_MODULE_14__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return _path__WEBPACK_IMPORTED_MODULE_14__["dirname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return _path__WEBPACK_IMPORTED_MODULE_14__["basename"]; });

/* harmony import */ var _promisebuffer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./promisebuffer */ "./node_modules/@sentry/utils/esm/promisebuffer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makePromiseBuffer", function() { return _promisebuffer__WEBPACK_IMPORTED_MODULE_15__["makePromiseBuffer"]; });

/* harmony import */ var _severity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./severity */ "./node_modules/@sentry/utils/esm/severity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "severityFromString", function() { return _severity__WEBPACK_IMPORTED_MODULE_16__["severityFromString"]; });

/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stacktrace */ "./node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStackParser", function() { return _stacktrace__WEBPACK_IMPORTED_MODULE_17__["createStackParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripSentryFramesAndReverse", function() { return _stacktrace__WEBPACK_IMPORTED_MODULE_17__["stripSentryFramesAndReverse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return _stacktrace__WEBPACK_IMPORTED_MODULE_17__["getFunctionName"]; });

/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./status */ "./node_modules/@sentry/utils/esm/status.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventStatusFromHttpCode", function() { return _status__WEBPACK_IMPORTED_MODULE_18__["eventStatusFromHttpCode"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return _string__WEBPACK_IMPORTED_MODULE_19__["truncate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return _string__WEBPACK_IMPORTED_MODULE_19__["snipLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return _string__WEBPACK_IMPORTED_MODULE_19__["safeJoin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return _string__WEBPACK_IMPORTED_MODULE_19__["isMatchingPattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeStringForRegex", function() { return _string__WEBPACK_IMPORTED_MODULE_19__["escapeStringForRegex"]; });

/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/utils/esm/supports.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["supportsErrorEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["supportsDOMError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["supportsDOMException"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["supportsFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNativeFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["isNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["supportsNativeFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["supportsReportingObserver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["supportsReferrerPolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return _supports__WEBPACK_IMPORTED_MODULE_20__["supportsHistory"]; });

/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/utils/esm/syncpromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvedSyncPromise", function() { return _syncpromise__WEBPACK_IMPORTED_MODULE_21__["resolvedSyncPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rejectedSyncPromise", function() { return _syncpromise__WEBPACK_IMPORTED_MODULE_21__["rejectedSyncPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return _syncpromise__WEBPACK_IMPORTED_MODULE_21__["SyncPromise"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./time */ "./node_modules/@sentry/utils/esm/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateTimestampInSeconds", function() { return _time__WEBPACK_IMPORTED_MODULE_22__["dateTimestampInSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampInSeconds", function() { return _time__WEBPACK_IMPORTED_MODULE_22__["timestampInSeconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return _time__WEBPACK_IMPORTED_MODULE_22__["timestampWithMs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usingPerformanceAPI", function() { return _time__WEBPACK_IMPORTED_MODULE_22__["usingPerformanceAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_browserPerformanceTimeOriginMode", function() { return _time__WEBPACK_IMPORTED_MODULE_22__["_browserPerformanceTimeOriginMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "browserPerformanceTimeOrigin", function() { return _time__WEBPACK_IMPORTED_MODULE_22__["browserPerformanceTimeOrigin"]; });

/* harmony import */ var _tracing__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tracing */ "./node_modules/@sentry/utils/esm/tracing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return _tracing__WEBPACK_IMPORTED_MODULE_23__["TRACEPARENT_REGEXP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extractTraceparentData", function() { return _tracing__WEBPACK_IMPORTED_MODULE_23__["extractTraceparentData"]; });

/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./env */ "./node_modules/@sentry/utils/esm/env.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowserBundle", function() { return _env__WEBPACK_IMPORTED_MODULE_24__["isBrowserBundle"]; });

/* harmony import */ var _envelope__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./envelope */ "./node_modules/@sentry/utils/esm/envelope.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEnvelope", function() { return _envelope__WEBPACK_IMPORTED_MODULE_25__["createEnvelope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addItemToEnvelope", function() { return _envelope__WEBPACK_IMPORTED_MODULE_25__["addItemToEnvelope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEnvelopeType", function() { return _envelope__WEBPACK_IMPORTED_MODULE_25__["getEnvelopeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeEnvelope", function() { return _envelope__WEBPACK_IMPORTED_MODULE_25__["serializeEnvelope"]; });

/* harmony import */ var _clientreport__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./clientreport */ "./node_modules/@sentry/utils/esm/clientreport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createClientReportEnvelope", function() { return _clientreport__WEBPACK_IMPORTED_MODULE_26__["createClientReportEnvelope"]; });

/* harmony import */ var _ratelimit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ratelimit */ "./node_modules/@sentry/utils/esm/ratelimit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RETRY_AFTER", function() { return _ratelimit__WEBPACK_IMPORTED_MODULE_27__["DEFAULT_RETRY_AFTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return _ratelimit__WEBPACK_IMPORTED_MODULE_27__["parseRetryAfterHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disabledUntil", function() { return _ratelimit__WEBPACK_IMPORTED_MODULE_27__["disabledUntil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRateLimited", function() { return _ratelimit__WEBPACK_IMPORTED_MODULE_27__["isRateLimited"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateRateLimits", function() { return _ratelimit__WEBPACK_IMPORTED_MODULE_27__["updateRateLimits"]; });





























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/instrument.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/instrument.js ***!
  \******************************************************/
/*! exports provided: addInstrumentationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInstrumentationHandler", function() { return addInstrumentationHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/utils/esm/flags.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stacktrace */ "./node_modules/@sentry/utils/esm/stacktrace.js");
/* harmony import */ var _supports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supports */ "./node_modules/@sentry/utils/esm/supports.js");








var global = Object(_global__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
/**
 * Instrument native APIs to call handlers that can be used to create breadcrumbs, APM spans etc.
 *  - Console API
 *  - Fetch API
 *  - XHR API
 *  - History API
 *  - DOM API (click/typing)
 *  - Error API
 *  - UnhandledRejection API
 */
var handlers = {};
var instrumented = {};
/** Instruments given API */
function instrument(type) {
    if (instrumented[type]) {
        return;
    }
    instrumented[type] = true;
    switch (type) {
        case 'console':
            instrumentConsole();
            break;
        case 'dom':
            instrumentDOM();
            break;
        case 'xhr':
            instrumentXHR();
            break;
        case 'fetch':
            instrumentFetch();
            break;
        case 'history':
            instrumentHistory();
            break;
        case 'error':
            instrumentError();
            break;
        case 'unhandledrejection':
            instrumentUnhandledRejection();
            break;
        default:
            _flags__WEBPACK_IMPORTED_MODULE_1__["IS_DEBUG_BUILD"] && _logger__WEBPACK_IMPORTED_MODULE_4__["logger"].warn('unknown instrumentation type:', type);
            return;
    }
}
/**
 * Add handler that will be called when given type of instrumentation triggers.
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(callback);
    instrument(type);
}
/** JSDoc */
function triggerHandlers(type, data) {
    var e_1, _a;
    if (!type || !handlers[type]) {
        return;
    }
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(handlers[type] || []), _c = _b.next(); !_c.done; _c = _b.next()) {
            var handler = _c.value;
            try {
                handler(data);
            }
            catch (e) {
                _flags__WEBPACK_IMPORTED_MODULE_1__["IS_DEBUG_BUILD"] &&
                    _logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error("Error while triggering instrumentation handler.\nType: " + type + "\nName: " + Object(_stacktrace__WEBPACK_IMPORTED_MODULE_6__["getFunctionName"])(handler) + "\nError:", e);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/** JSDoc */
function instrumentConsole() {
    if (!('console' in global)) {
        return;
    }
    _logger__WEBPACK_IMPORTED_MODULE_4__["CONSOLE_LEVELS"].forEach(function (level) {
        if (!(level in global.console)) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(global.console, level, function (originalConsoleMethod) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                triggerHandlers('console', { args: args, level: level });
                // this fails for some browsers. :(
                if (originalConsoleMethod) {
                    originalConsoleMethod.apply(global.console, args);
                }
            };
        });
    });
}
/** JSDoc */
function instrumentFetch() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_7__["supportsNativeFetch"])()) {
        return;
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(global, 'fetch', function (originalFetch) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var handlerData = {
                args: args,
                fetchData: {
                    method: getFetchMethod(args),
                    url: getFetchUrl(args),
                },
                startTimestamp: Date.now(),
            };
            triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData));
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            return originalFetch.apply(global, args).then(function (response) {
                triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData), { endTimestamp: Date.now(), response: response }));
                return response;
            }, function (error) {
                triggerHandlers('fetch', Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, handlerData), { endTimestamp: Date.now(), error: error }));
                // NOTE: If you are a Sentry user, and you are seeing this stack frame,
                //       it means the sentry.javascript SDK caught an error invoking your application code.
                //       This is expected behavior and NOT indicative of a bug with sentry.javascript.
                throw error;
            });
        };
    });
}
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/** Extract `method` from fetch call arguments */
function getFetchMethod(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_3__["isInstanceOf"])(fetchArgs[0], Request) && fetchArgs[0].method) {
        return String(fetchArgs[0].method).toUpperCase();
    }
    if (fetchArgs[1] && fetchArgs[1].method) {
        return String(fetchArgs[1].method).toUpperCase();
    }
    return 'GET';
}
/** Extract `url` from fetch call arguments */
function getFetchUrl(fetchArgs) {
    if (fetchArgs === void 0) { fetchArgs = []; }
    if (typeof fetchArgs[0] === 'string') {
        return fetchArgs[0];
    }
    if ('Request' in global && Object(_is__WEBPACK_IMPORTED_MODULE_3__["isInstanceOf"])(fetchArgs[0], Request)) {
        return fetchArgs[0].url;
    }
    return String(fetchArgs[0]);
}
/* eslint-enable @typescript-eslint/no-unsafe-member-access */
/** JSDoc */
function instrumentXHR() {
    if (!('XMLHttpRequest' in global)) {
        return;
    }
    var xhrproto = XMLHttpRequest.prototype;
    Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(xhrproto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var xhr = this;
            var url = args[1];
            var xhrInfo = (xhr.__sentry_xhr__ = {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                method: Object(_is__WEBPACK_IMPORTED_MODULE_3__["isString"])(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
            });
            // if Sentry key appears in URL, don't capture it as a request
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (Object(_is__WEBPACK_IMPORTED_MODULE_3__["isString"])(url) && xhrInfo.method === 'POST' && url.match(/sentry_key/)) {
                xhr.__sentry_own_request__ = true;
            }
            var onreadystatechangeHandler = function () {
                if (xhr.readyState === 4) {
                    try {
                        // touching statusCode in some platforms throws
                        // an exception
                        xhrInfo.status_code = xhr.status;
                    }
                    catch (e) {
                        /* do nothing */
                    }
                    triggerHandlers('xhr', {
                        args: args,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: xhr,
                    });
                }
            };
            if ('onreadystatechange' in xhr && typeof xhr.onreadystatechange === 'function') {
                Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(xhr, 'onreadystatechange', function (original) {
                    return function () {
                        var readyStateArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            readyStateArgs[_i] = arguments[_i];
                        }
                        onreadystatechangeHandler();
                        return original.apply(xhr, readyStateArgs);
                    };
                });
            }
            else {
                xhr.addEventListener('readystatechange', onreadystatechangeHandler);
            }
            return originalOpen.apply(xhr, args);
        };
    });
    Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(xhrproto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.__sentry_xhr__ && args[0] !== undefined) {
                this.__sentry_xhr__.body = args[0];
            }
            triggerHandlers('xhr', {
                args: args,
                startTimestamp: Date.now(),
                xhr: this,
            });
            return originalSend.apply(this, args);
        };
    });
}
var lastHref;
/** JSDoc */
function instrumentHistory() {
    if (!Object(_supports__WEBPACK_IMPORTED_MODULE_7__["supportsHistory"])()) {
        return;
    }
    var oldOnPopState = global.onpopstate;
    global.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = global.location.href;
        // keep track of the current URL state, as we always receive only the updated state
        var from = lastHref;
        lastHref = to;
        triggerHandlers('history', {
            from: from,
            to: to,
        });
        if (oldOnPopState) {
            // Apparently this can throw in Firefox when incorrectly implemented plugin is installed.
            // https://github.com/getsentry/sentry-javascript/issues/3344
            // https://github.com/bugsnag/bugsnag-js/issues/469
            try {
                return oldOnPopState.apply(this, args);
            }
            catch (_oO) {
                // no-empty
            }
        }
    };
    /** @hidden */
    function historyReplacementFunction(originalHistoryFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                // coerce to string (this is what pushState does)
                var from = lastHref;
                var to = String(url);
                // keep track of the current URL state, as we always receive only the updated state
                lastHref = to;
                triggerHandlers('history', {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFunction.apply(this, args);
        };
    }
    Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(global.history, 'pushState', historyReplacementFunction);
    Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(global.history, 'replaceState', historyReplacementFunction);
}
var debounceDuration = 1000;
var debounceTimerID;
var lastCapturedEvent;
/**
 * Decide whether the current event should finish the debounce of previously captured one.
 * @param previous previously captured event
 * @param current event to be captured
 */
function shouldShortcircuitPreviousDebounce(previous, current) {
    // If there was no previous event, it should always be swapped for the new one.
    if (!previous) {
        return true;
    }
    // If both events have different type, then user definitely performed two separate actions. e.g. click + keypress.
    if (previous.type !== current.type) {
        return true;
    }
    try {
        // If both events have the same type, it's still possible that actions were performed on different targets.
        // e.g. 2 clicks on different buttons.
        if (previous.target !== current.target) {
            return true;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    // If both events have the same type _and_ same `target` (an element which triggered an event, _not necessarily_
    // to which an event listener was attached), we treat them as the same action, as we want to capture
    // only one breadcrumb. e.g. multiple clicks on the same button, or typing inside a user input box.
    return false;
}
/**
 * Decide whether an event should be captured.
 * @param event event to be captured
 */
function shouldSkipDOMEvent(event) {
    // We are only interested in filtering `keypress` events for now.
    if (event.type !== 'keypress') {
        return false;
    }
    try {
        var target = event.target;
        if (!target || !target.tagName) {
            return true;
        }
        // Only consider keypress events on actual input elements. This will disregard keypresses targeting body
        // e.g.tabbing through elements, hotkeys, etc.
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
            return false;
        }
    }
    catch (e) {
        // just accessing `target` property can throw an exception in some rare circumstances
        // see: https://github.com/getsentry/sentry-javascript/issues/838
    }
    return true;
}
/**
 * Wraps addEventListener to capture UI breadcrumbs
 * @param handler function that will be triggered
 * @param globalListener indicates whether event was captured by the global event listener
 * @returns wrapped breadcrumb events handler
 * @hidden
 */
function makeDOMEventHandler(handler, globalListener) {
    if (globalListener === void 0) { globalListener = false; }
    return function (event) {
        // It's possible this handler might trigger multiple times for the same
        // event (e.g. event propagation through node ancestors).
        // Ignore if we've already captured that event.
        if (!event || lastCapturedEvent === event) {
            return;
        }
        // We always want to skip _some_ events.
        if (shouldSkipDOMEvent(event)) {
            return;
        }
        var name = event.type === 'keypress' ? 'input' : event.type;
        // If there is no debounce timer, it means that we can safely capture the new event and store it for future comparisons.
        if (debounceTimerID === undefined) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // If there is a debounce awaiting, see if the new event is different enough to treat it as a unique one.
        // If that's the case, emit the previous event and store locally the newly-captured DOM event.
        else if (shouldShortcircuitPreviousDebounce(lastCapturedEvent, event)) {
            handler({
                event: event,
                name: name,
                global: globalListener,
            });
            lastCapturedEvent = event;
        }
        // Start a new debounce timer that will prevent us from capturing multiple events that should be grouped together.
        clearTimeout(debounceTimerID);
        debounceTimerID = global.setTimeout(function () {
            debounceTimerID = undefined;
        }, debounceDuration);
    };
}
/** JSDoc */
function instrumentDOM() {
    if (!('document' in global)) {
        return;
    }
    // Make it so that any click or keypress that is unhandled / bubbled up all the way to the document triggers our dom
    // handlers. (Normally we have only one, which captures a breadcrumb for each click or keypress.) Do this before
    // we instrument `addEventListener` so that we don't end up attaching this handler twice.
    var triggerDOMHandler = triggerHandlers.bind(null, 'dom');
    var globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    global.document.addEventListener('click', globalDOMEventHandler, false);
    global.document.addEventListener('keypress', globalDOMEventHandler, false);
    // After hooking into click and keypress events bubbled up to `document`, we also hook into user-handled
    // clicks & keypresses, by adding an event listener of our own to any element to which they add a listener. That
    // way, whenever one of their handlers is triggered, ours will be, too. (This is needed because their handler
    // could potentially prevent the event from bubbling up to our global listeners. This way, our handler are still
    // guaranteed to fire at least once.)
    ['EventTarget', 'Node'].forEach(function (target) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        var proto = global[target] && global[target].prototype;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, no-prototype-builtins
        if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
            return;
        }
        Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(proto, 'addEventListener', function (originalAddEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_1 = (el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {});
                        var handlerForType = (handlers_1[type] = handlers_1[type] || { refCount: 0 });
                        if (!handlerForType.handler) {
                            var handler = makeDOMEventHandler(triggerDOMHandler);
                            handlerForType.handler = handler;
                            originalAddEventListener.call(this, type, handler, options);
                        }
                        handlerForType.refCount += 1;
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalAddEventListener.call(this, type, listener, options);
            };
        });
        Object(_object__WEBPACK_IMPORTED_MODULE_5__["fill"])(proto, 'removeEventListener', function (originalRemoveEventListener) {
            return function (type, listener, options) {
                if (type === 'click' || type == 'keypress') {
                    try {
                        var el = this;
                        var handlers_2 = el.__sentry_instrumentation_handlers__ || {};
                        var handlerForType = handlers_2[type];
                        if (handlerForType) {
                            handlerForType.refCount -= 1;
                            // If there are no longer any custom handlers of the current type on this element, we can remove ours, too.
                            if (handlerForType.refCount <= 0) {
                                originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                                handlerForType.handler = undefined;
                                delete handlers_2[type]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
                            }
                            // If there are no longer any custom handlers of any type on this element, cleanup everything.
                            if (Object.keys(handlers_2).length === 0) {
                                delete el.__sentry_instrumentation_handlers__;
                            }
                        }
                    }
                    catch (e) {
                        // Accessing dom properties is always fragile.
                        // Also allows us to skip `addEventListenrs` calls with no proper `this` context.
                    }
                }
                return originalRemoveEventListener.call(this, type, listener, options);
            };
        });
    });
}
var _oldOnErrorHandler = null;
/** JSDoc */
function instrumentError() {
    _oldOnErrorHandler = global.onerror;
    global.onerror = function (msg, url, line, column, error) {
        triggerHandlers('error', {
            column: column,
            error: error,
            line: line,
            msg: msg,
            url: url,
        });
        if (_oldOnErrorHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnErrorHandler.apply(this, arguments);
        }
        return false;
    };
}
var _oldOnUnhandledRejectionHandler = null;
/** JSDoc */
function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = global.onunhandledrejection;
    global.onunhandledrejection = function (e) {
        triggerHandlers('unhandledrejection', e);
        if (_oldOnUnhandledRejectionHandler) {
            // eslint-disable-next-line prefer-rest-params
            return _oldOnUnhandledRejectionHandler.apply(this, arguments);
        }
        return true;
    };
}
//# sourceMappingURL=instrument.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/is.js":
/*!**********************************************!*\
  !*** ./node_modules/@sentry/utils/esm/is.js ***!
  \**********************************************/
/*! exports provided: isError, isErrorEvent, isDOMError, isDOMException, isString, isPrimitive, isPlainObject, isEvent, isElement, isRegExp, isThenable, isSyntheticEvent, isNaN, isInstanceOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isErrorEvent", function() { return isErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMError", function() { return isDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMException", function() { return isDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEvent", function() { return isEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThenable", function() { return isThenable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSyntheticEvent", function() { return isSyntheticEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceOf", function() { return isInstanceOf; });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/unbound-method
var objectToString = Object.prototype.toString;
/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
    switch (objectToString.call(wat)) {
        case '[object Error]':
        case '[object Exception]':
        case '[object DOMException]':
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
function isBuiltin(wat, ty) {
    return objectToString.call(wat) === "[object " + ty + "]";
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
    return isBuiltin(wat, 'ErrorEvent');
}
/**
 * Checks whether given value's type is DOMError
 * {@link isDOMError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMError(wat) {
    return isBuiltin(wat, 'DOMError');
}
/**
 * Checks whether given value's type is DOMException
 * {@link isDOMException}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isDOMException(wat) {
    return isBuiltin(wat, 'DOMException');
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
    return isBuiltin(wat, 'String');
}
/**
 * Checks whether given value is a primitive (undefined, null, number, boolean, string, bigint, symbol)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
    return wat === null || (typeof wat !== 'object' && typeof wat !== 'function');
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
    return isBuiltin(wat, 'Object');
}
/**
 * Checks whether given value's type is an Event instance
 * {@link isEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isEvent(wat) {
    return typeof Event !== 'undefined' && isInstanceOf(wat, Event);
}
/**
 * Checks whether given value's type is an Element instance
 * {@link isElement}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isElement(wat) {
    return typeof Element !== 'undefined' && isInstanceOf(wat, Element);
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
    return isBuiltin(wat, 'RegExp');
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return Boolean(wat && wat.then && typeof wat.then === 'function');
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
    return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat;
}
/**
 * Checks whether given value is NaN
 * {@link isNaN}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isNaN(wat) {
    return typeof wat === 'number' && wat !== wat;
}
/**
 * Checks whether given value's type is an instance of provided constructor.
 * {@link isInstanceOf}.
 *
 * @param wat A value to be checked.
 * @param base A constructor to be used in a check.
 * @returns A boolean representing the result.
 */
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    }
    catch (_e) {
        return false;
    }
}
//# sourceMappingURL=is.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/logger.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/logger.js ***!
  \**************************************************/
/*! exports provided: CONSOLE_LEVELS, consoleSandbox, logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSOLE_LEVELS", function() { return CONSOLE_LEVELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consoleSandbox", function() { return consoleSandbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/utils/esm/flags.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");



// TODO: Implement different loggers for different environments
var global = Object(_global__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
/** Prefix for logging strings */
var PREFIX = 'Sentry Logger ';
var CONSOLE_LEVELS = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
/**
 * Temporarily disable sentry console instrumentations.
 *
 * @param callback The function to run against the original `console` messages
 * @returns The results of the callback
 */
function consoleSandbox(callback) {
    var global = Object(_global__WEBPACK_IMPORTED_MODULE_2__["getGlobalObject"])();
    if (!('console' in global)) {
        return callback();
    }
    var originalConsole = global.console;
    var wrappedLevels = {};
    // Restore all wrapped console methods
    CONSOLE_LEVELS.forEach(function (level) {
        // TODO(v7): Remove this check as it's only needed for Node 6
        var originalWrappedFunc = originalConsole[level] && originalConsole[level].__sentry_original__;
        if (level in global.console && originalWrappedFunc) {
            wrappedLevels[level] = originalConsole[level];
            originalConsole[level] = originalWrappedFunc;
        }
    });
    try {
        return callback();
    }
    finally {
        // Revert restoration to wrapped state
        Object.keys(wrappedLevels).forEach(function (level) {
            originalConsole[level] = wrappedLevels[level];
        });
    }
}
function makeLogger() {
    var enabled = false;
    var logger = {
        enable: function () {
            enabled = true;
        },
        disable: function () {
            enabled = false;
        },
    };
    if (_flags__WEBPACK_IMPORTED_MODULE_1__["IS_DEBUG_BUILD"]) {
        CONSOLE_LEVELS.forEach(function (name) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            logger[name] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (enabled) {
                    consoleSandbox(function () {
                        var _a;
                        (_a = global.console)[name].apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([PREFIX + "[" + name + "]:"], args));
                    });
                }
            };
        });
    }
    else {
        CONSOLE_LEVELS.forEach(function (name) {
            logger[name] = function () { return undefined; };
        });
    }
    return logger;
}
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
var logger;
if (_flags__WEBPACK_IMPORTED_MODULE_1__["IS_DEBUG_BUILD"]) {
    logger = Object(_global__WEBPACK_IMPORTED_MODULE_2__["getGlobalSingleton"])('logger', makeLogger);
}
else {
    logger = makeLogger();
}

//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/memo.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/memo.js ***!
  \************************************************/
/*! exports provided: memoBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoBuilder", function() { return memoBuilder; });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Helper to decycle json objects
 */
function memoBuilder() {
    var hasWeakSet = typeof WeakSet === 'function';
    var inner = hasWeakSet ? new WeakSet() : [];
    function memoize(obj) {
        if (hasWeakSet) {
            if (inner.has(obj)) {
                return true;
            }
            inner.add(obj);
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (var i = 0; i < inner.length; i++) {
            var value = inner[i];
            if (value === obj) {
                return true;
            }
        }
        inner.push(obj);
        return false;
    }
    function unmemoize(obj) {
        if (hasWeakSet) {
            inner.delete(obj);
        }
        else {
            for (var i = 0; i < inner.length; i++) {
                if (inner[i] === obj) {
                    inner.splice(i, 1);
                    break;
                }
            }
        }
    }
    return [memoize, unmemoize];
}
//# sourceMappingURL=memo.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/misc.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/misc.js ***!
  \************************************************/
/*! exports provided: uuid4, parseUrl, getEventDescription, addExceptionTypeValue, addExceptionMechanism, parseSemver, addContextToFrame, stripUrlQueryAndFragment, checkOrSetAlreadyCaught */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventDescription", function() { return getEventDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionTypeValue", function() { return addExceptionTypeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExceptionMechanism", function() { return addExceptionMechanism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSemver", function() { return parseSemver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContextToFrame", function() { return addContextToFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripUrlQueryAndFragment", function() { return stripUrlQueryAndFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOrSetAlreadyCaught", function() { return checkOrSetAlreadyCaught; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");




/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
    var global = Object(_global__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    var crypto = global.crypto || global.msCrypto;
    if (!(crypto === void 0) && crypto.getRandomValues) {
        // Use window.crypto API if available
        var arr = new Uint16Array(8);
        crypto.getRandomValues(arr);
        // set 4 in byte 7
        // eslint-disable-next-line no-bitwise
        arr[3] = (arr[3] & 0xfff) | 0x4000;
        // set 2 most significant bits of byte 9 to '10'
        // eslint-disable-next-line no-bitwise
        arr[4] = (arr[4] & 0x3fff) | 0x8000;
        var pad = function (num) {
            var v = num.toString(16);
            while (v.length < 4) {
                v = "0" + v;
            }
            return v;
        };
        return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]));
    }
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
function parseUrl(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    // coerce to undefined values to empty string so we don't get 'undefined'
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : undefined;
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
    var message = event.message, eventId = event.event_id;
    if (message) {
        return message;
    }
    var firstException = getFirstException(event);
    if (firstException) {
        if (firstException.type && firstException.value) {
            return firstException.type + ": " + firstException.value;
        }
        return firstException.type || firstException.value || eventId || '<unknown>';
    }
    return eventId || '<unknown>';
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type) {
    var exception = (event.exception = event.exception || {});
    var values = (exception.values = exception.values || []);
    var firstException = (values[0] = values[0] || {});
    if (!firstException.value) {
        firstException.value = value || '';
    }
    if (!firstException.type) {
        firstException.type = type || 'Error';
    }
}
/**
 * Adds exception mechanism data to a given event. Uses defaults if the second parameter is not passed.
 *
 * @param event The event to modify.
 * @param newMechanism Mechanism data to add to the event.
 * @hidden
 */
function addExceptionMechanism(event, newMechanism) {
    var firstException = getFirstException(event);
    if (!firstException) {
        return;
    }
    var defaultMechanism = { type: 'generic', handled: true };
    var currentMechanism = firstException.mechanism;
    firstException.mechanism = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultMechanism), currentMechanism), newMechanism);
    if (newMechanism && 'data' in newMechanism) {
        var mergedData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, (currentMechanism && currentMechanism.data)), newMechanism.data);
        firstException.mechanism.data = mergedData;
    }
}
// https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
var SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
/**
 * Parses input into a SemVer interface
 * @param input string representation of a semver version
 */
function parseSemver(input) {
    var match = input.match(SEMVER_REGEXP) || [];
    var major = parseInt(match[1], 10);
    var minor = parseInt(match[2], 10);
    var patch = parseInt(match[3], 10);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? undefined : major,
        minor: isNaN(minor) ? undefined : minor,
        patch: isNaN(patch) ? undefined : patch,
        prerelease: match[4],
    };
}
/**
 * This function adds context (pre/post/line) lines to the provided frame
 *
 * @param lines string[] containing all lines
 * @param frame StackFrame that will be mutated
 * @param linesOfContext number of context lines we want to add pre/post
 */
function addContextToFrame(lines, frame, linesOfContext) {
    if (linesOfContext === void 0) { linesOfContext = 5; }
    var lineno = frame.lineno || 0;
    var maxLines = lines.length;
    var sourceLine = Math.max(Math.min(maxLines, lineno - 1), 0);
    frame.pre_context = lines
        .slice(Math.max(0, sourceLine - linesOfContext), sourceLine)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_3__["snipLine"])(line, 0); });
    frame.context_line = Object(_string__WEBPACK_IMPORTED_MODULE_3__["snipLine"])(lines[Math.min(maxLines - 1, sourceLine)], frame.colno || 0);
    frame.post_context = lines
        .slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext)
        .map(function (line) { return Object(_string__WEBPACK_IMPORTED_MODULE_3__["snipLine"])(line, 0); });
}
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
function stripUrlQueryAndFragment(urlPath) {
    // eslint-disable-next-line no-useless-escape
    return urlPath.split(/[\?#]/, 1)[0];
}
/**
 * Checks whether or not we've already captured the given exception (note: not an identical exception - the very object
 * in question), and marks it captured if not.
 *
 * This is useful because it's possible for an error to get captured by more than one mechanism. After we intercept and
 * record an error, we rethrow it (assuming we've intercepted it before it's reached the top-level global handlers), so
 * that we don't interfere with whatever effects the error might have had were the SDK not there. At that point, because
 * the error has been rethrown, it's possible for it to bubble up to some other code we've instrumented. If it's not
 * caught after that, it will bubble all the way up to the global handlers (which of course we also instrument). This
 * function helps us ensure that even if we encounter the same error more than once, we only record it the first time we
 * see it.
 *
 * Note: It will ignore primitives (always return `false` and not mark them as seen), as properties can't be set on
 * them. {@link: Object.objectify} can be used on exceptions to convert any that are primitives into their equivalent
 * object wrapper forms so that this check will always work. However, because we need to flag the exact object which
 * will get rethrown, and because that rethrowing happens outside of the event processing pipeline, the objectification
 * must be done before the exception captured.
 *
 * @param A thrown exception to check or flag as having been seen
 * @returns `true` if the exception has already been captured, `false` if not (with the side effect of marking it seen)
 */
function checkOrSetAlreadyCaught(exception) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (exception && exception.__sentry_captured__) {
        return true;
    }
    try {
        // set it this way rather than by assignment so that it's not ennumerable and therefore isn't recorded by the
        // `ExtraErrorData` integration
        Object(_object__WEBPACK_IMPORTED_MODULE_2__["addNonEnumerableProperty"])(exception, '__sentry_captured__', true);
    }
    catch (err) {
        // `exception` is a primitive, so we can't mark it seen
    }
    return false;
}
//# sourceMappingURL=misc.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/node.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/node.js ***!
  \************************************************/
/*! exports provided: isNodeEnv, dynamicRequire, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeEnv", function() { return isNodeEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicRequire", function() { return dynamicRequire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/@sentry/utils/esm/env.js");
/**
 * NOTE: In order to avoid circular dependencies, if you add a function to this module and it needs to print something,
 * you must either a) use `console.log` rather than the logger, or b) put your function elsewhere.
 */

/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
    // explicitly check for browser bundles as those can be optimized statically
    // by terser/rollup.
    return (!Object(_env__WEBPACK_IMPORTED_MODULE_0__["isBrowserBundle"])() &&
        Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]');
}
/**
 * Requires a module which is protected against bundler minification.
 *
 * @param request The module path to resolve
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
function dynamicRequire(mod, request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return mod.require(request);
}
/**
 * Helper for dynamically loading module that should work with linked dependencies.
 * The problem is that we _should_ be using `require(require.resolve(moduleName, { paths: [cwd()] }))`
 * However it's _not possible_ to do that with Webpack, as it has to know all the dependencies during
 * build time. `require.resolve` is also not available in any other way, so we cannot create,
 * a fake helper like we do with `dynamicRequire`.
 *
 * We always prefer to use local package, thus the value is not returned early from each `try/catch` block.
 * That is to mimic the behavior of `require.resolve` exactly.
 *
 * @param moduleName module name to require
 * @returns possibly required module
 */
function loadModule(moduleName) {
    var mod;
    try {
        mod = dynamicRequire(module, moduleName);
    }
    catch (e) {
        // no-empty
    }
    try {
        var cwd = dynamicRequire(module, 'process').cwd;
        mod = dynamicRequire(module, cwd() + "/node_modules/" + moduleName);
    }
    catch (e) {
        // no-empty
    }
    return mod;
}
//# sourceMappingURL=node.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/normalize.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/normalize.js ***!
  \*****************************************************/
/*! exports provided: normalize, normalizeToSize, walk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeToSize", function() { return normalizeToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return visit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _memo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memo */ "./node_modules/@sentry/utils/esm/memo.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./node_modules/@sentry/utils/esm/object.js");
/* harmony import */ var _stacktrace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stacktrace */ "./node_modules/@sentry/utils/esm/stacktrace.js");





/**
 * Recursively normalizes the given object.
 *
 * - Creates a copy to prevent original input mutation
 * - Skips non-enumerable properties
 * - When stringifying, calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializable values (`undefined`/`NaN`/functions) to serializable format
 * - Translates known global objects/classes to a string representations
 * - Takes care of `Error` object serialization
 * - Optionally limits depth of final output
 * - Optionally limits number of properties/elements included in any single object/array
 *
 * @param input The object to be normalized.
 * @param depth The max depth to which to normalize the object. (Anything deeper stringified whole.)
 * @param maxProperties The max number of elements or properties to be included in any single array or
 * object in the normallized output..
 * @returns A normalized version of the object, or `"**non-serializable**"` if any errors are thrown during normalization.
 */
function normalize(input, depth, maxProperties) {
    if (depth === void 0) { depth = +Infinity; }
    if (maxProperties === void 0) { maxProperties = +Infinity; }
    try {
        // since we're at the outermost level, there is no key
        return visit('', input, depth, maxProperties);
    }
    catch (err) {
        return { ERROR: "**non-serializable** (" + err + ")" };
    }
}
/** JSDoc */
function normalizeToSize(object, 
// Default Node.js REPL depth
depth, 
// 100kB, as 200kB is max payload size, so half sounds reasonable
maxSize) {
    if (depth === void 0) { depth = 3; }
    if (maxSize === void 0) { maxSize = 100 * 1024; }
    var normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return normalized;
}
/**
 * Visits a node to perform normalization on it
 *
 * @param key The key corresponding to the given node
 * @param value The node to be visited
 * @param depth Optional number indicating the maximum recursion depth
 * @param maxProperties Optional maximum number of properties/elements included in any single object/array
 * @param memo Optional Memo class handling decycling
 */
function visit(key, value, depth, maxProperties, memo) {
    if (depth === void 0) { depth = +Infinity; }
    if (maxProperties === void 0) { maxProperties = +Infinity; }
    if (memo === void 0) { memo = Object(_memo__WEBPACK_IMPORTED_MODULE_2__["memoBuilder"])(); }
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(memo, 2), memoize = _a[0], unmemoize = _a[1];
    // If the value has a `toJSON` method, see if we can bail and let it do the work
    var valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === 'function') {
        try {
            return valueWithToJSON.toJSON();
        }
        catch (err) {
            // pass (The built-in `toJSON` failed, but we can still try to do it ourselves)
        }
    }
    // Get the simple cases out of the way first
    if (value === null || (['number', 'boolean', 'string'].includes(typeof value) && !Object(_is__WEBPACK_IMPORTED_MODULE_1__["isNaN"])(value))) {
        return value;
    }
    var stringified = stringifyValue(key, value);
    // Anything we could potentially dig into more (objects or arrays) will have come back as `"[object XXXX]"`.
    // Everything else will have already been serialized, so if we don't see that pattern, we're done.
    if (!stringified.startsWith('[object ')) {
        return stringified;
    }
    // We're also done if we've reached the max depth
    if (depth === 0) {
        // At this point we know `serialized` is a string of the form `"[object XXXX]"`. Clean it up so it's just `"[XXXX]"`.
        return stringified.replace('object ', '');
    }
    // If we've already visited this branch, bail out, as it's circular reference. If not, note that we're seeing it now.
    if (memoize(value)) {
        return '[Circular ~]';
    }
    // At this point we know we either have an object or an array, we haven't seen it before, and we're going to recurse
    // because we haven't yet reached the max depth. Create an accumulator to hold the results of visiting each
    // property/entry, and keep track of the number of items we add to it.
    var normalized = (Array.isArray(value) ? [] : {});
    var numAdded = 0;
    // Before we begin, convert`Error` and`Event` instances into plain objects, since some of each of their relevant
    // properties are non-enumerable and otherwise would get missed.
    var visitable = (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isError"])(value) || Object(_is__WEBPACK_IMPORTED_MODULE_1__["isEvent"])(value) ? Object(_object__WEBPACK_IMPORTED_MODULE_3__["convertToPlainObject"])(value) : value);
    for (var visitKey in visitable) {
        // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
        if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
            continue;
        }
        if (numAdded >= maxProperties) {
            normalized[visitKey] = '[MaxProperties ~]';
            break;
        }
        // Recursively visit all the child nodes
        var visitValue = visitable[visitKey];
        normalized[visitKey] = visit(visitKey, visitValue, depth - 1, maxProperties, memo);
        numAdded += 1;
    }
    // Once we've visited all the branches, remove the parent from memo storage
    unmemoize(value);
    // Return accumulated values
    return normalized;
}
// TODO remove this in v7 (this means the method will no longer be exported, under any name)

/**
 * Stringify the given value. Handles various known special values and types.
 *
 * Not meant to be used on simple primitives which already have a string representation, as it will, for example, turn
 * the number 1231 into "[Object Number]", nor on `null`, as it will throw.
 *
 * @param value The value to stringify
 * @returns A stringified representation of the given value
 */
function stringifyValue(key, 
// this type is a tiny bit of a cheat, since this function does handle NaN (which is technically a number), but for
// our internal use, it'll do
value) {
    try {
        if (key === 'domain' && value && typeof value === 'object' && value._events) {
            return '[Domain]';
        }
        if (key === 'domainEmitter') {
            return '[DomainEmitter]';
        }
        // It's safe to use `global`, `window`, and `document` here in this manner, as we are asserting using `typeof` first
        // which won't throw if they are not present.
        if (typeof global !== 'undefined' && value === global) {
            return '[Global]';
        }
        // eslint-disable-next-line no-restricted-globals
        if (typeof window !== 'undefined' && value === window) {
            return '[Window]';
        }
        // eslint-disable-next-line no-restricted-globals
        if (typeof document !== 'undefined' && value === document) {
            return '[Document]';
        }
        // React's SyntheticEvent thingy
        if (Object(_is__WEBPACK_IMPORTED_MODULE_1__["isSyntheticEvent"])(value)) {
            return '[SyntheticEvent]';
        }
        if (typeof value === 'number' && value !== value) {
            return '[NaN]';
        }
        // this catches `undefined` (but not `null`, which is a primitive and can be serialized on its own)
        if (value === void 0) {
            return '[undefined]';
        }
        if (typeof value === 'function') {
            return "[Function: " + Object(_stacktrace__WEBPACK_IMPORTED_MODULE_4__["getFunctionName"])(value) + "]";
        }
        if (typeof value === 'symbol') {
            return "[" + String(value) + "]";
        }
        // stringified BigInts are indistinguishable from regular numbers, so we need to label them to avoid confusion
        if (typeof value === 'bigint') {
            return "[BigInt: " + String(value) + "]";
        }
        // Now that we've knocked out all the special cases and the primitives, all we have left are objects. Simply casting
        // them to strings means that instances of classes which haven't defined their `toStringTag` will just come out as
        // `"[object Object]"`. If we instead look at the constructor's name (which is the same as the name of the class),
        // we can make sure that only plain objects come out that way.
        return "[object " + Object.getPrototypeOf(value).constructor.name + "]";
    }
    catch (err) {
        return "**non-serializable** (" + err + ")";
    }
}
/** Calculates bytes size of input string */
function utf8Length(value) {
    // eslint-disable-next-line no-bitwise
    return ~-encodeURI(value).split(/%..|./).length;
}
/** Calculates bytes size of input object */
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
//# sourceMappingURL=normalize.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/object.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/object.js ***!
  \**************************************************/
/*! exports provided: fill, addNonEnumerableProperty, markFunctionWrapped, getOriginalFunction, urlEncode, convertToPlainObject, extractExceptionKeysForMessage, dropUndefinedKeys, objectify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNonEnumerableProperty", function() { return addNonEnumerableProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markFunctionWrapped", function() { return markFunctionWrapped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOriginalFunction", function() { return getOriginalFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlEncode", function() { return urlEncode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPlainObject", function() { return convertToPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractExceptionKeysForMessage", function() { return extractExceptionKeysForMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropUndefinedKeys", function() { return dropUndefinedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectify", function() { return objectify; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser */ "./node_modules/@sentry/utils/esm/browser.js");
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./node_modules/@sentry/utils/esm/string.js");




/**
 * Replace a method in an object with a wrapped version of itself.
 *
 * @param source An object that contains a method to be wrapped.
 * @param name The name of the method to be wrapped.
 * @param replacementFactory A higher-order function that takes the original version of the given method and returns a
 * wrapped version. Note: The function returned by `replacementFactory` needs to be a non-arrow function, in order to
 * preserve the correct value of `this`, and the original method must be called using `origMethod.call(this, <other
 * args>)` or `origMethod.apply(this, [<other args>])` (rather than being called directly), again to preserve `this`.
 * @returns void
 */
function fill(source, name, replacementFactory) {
    if (!(name in source)) {
        return;
    }
    var original = source[name];
    var wrapped = replacementFactory(original);
    // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
    // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
    if (typeof wrapped === 'function') {
        try {
            markFunctionWrapped(wrapped, original);
        }
        catch (_Oo) {
            // This can throw if multiple fill happens on a global object like XMLHttpRequest
            // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
        }
    }
    source[name] = wrapped;
}
/**
 * Defines a non-enumerable property on the given object.
 *
 * @param obj The object on which to set the property
 * @param name The name of the property to be set
 * @param value The value to which to set the property
 */
function addNonEnumerableProperty(obj, name, value) {
    Object.defineProperty(obj, name, {
        // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
        value: value,
        writable: true,
        configurable: true,
    });
}
/**
 * Remembers the original function on the wrapped function and
 * patches up the prototype.
 *
 * @param wrapped the wrapper function
 * @param original the original function that gets wrapped
 */
function markFunctionWrapped(wrapped, original) {
    var proto = original.prototype || {};
    wrapped.prototype = original.prototype = proto;
    addNonEnumerableProperty(wrapped, '__sentry_original__', original);
}
/**
 * This extracts the original function if available.  See
 * `markFunctionWrapped` for more information.
 *
 * @param func the function to unwrap
 * @returns the unwrapped version of the function if available.
 */
function getOriginalFunction(func) {
    return func.__sentry_original__;
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
    return Object.keys(object)
        .map(function (key) { return encodeURIComponent(key) + "=" + encodeURIComponent(object[key]); })
        .join('&');
}
/**
 * Transforms any object into an object literal with all its attributes
 * attached to it.
 *
 * @param value Initial source that we have to transform in order for it to be usable by the serializer
 */
function convertToPlainObject(value) {
    var newObj = value;
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__["isError"])(value)) {
        newObj = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ message: value.message, name: value.name, stack: value.stack }, getOwnProperties(value));
    }
    else if (Object(_is__WEBPACK_IMPORTED_MODULE_2__["isEvent"])(value)) {
        var event_1 = value;
        newObj = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: event_1.type, target: serializeEventTarget(event_1.target), currentTarget: serializeEventTarget(event_1.currentTarget) }, getOwnProperties(event_1));
        if (typeof CustomEvent !== 'undefined' && Object(_is__WEBPACK_IMPORTED_MODULE_2__["isInstanceOf"])(value, CustomEvent)) {
            newObj.detail = event_1.detail;
        }
    }
    return newObj;
}
/** Creates a string representation of the target of an `Event` object */
function serializeEventTarget(target) {
    try {
        return Object(_is__WEBPACK_IMPORTED_MODULE_2__["isElement"])(target) ? Object(_browser__WEBPACK_IMPORTED_MODULE_1__["htmlTreeAsString"])(target) : Object.prototype.toString.call(target);
    }
    catch (_oO) {
        return '<unknown>';
    }
}
/** Filters out all but an object's own properties */
function getOwnProperties(obj) {
    var extractedProps = {};
    for (var property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
            extractedProps[property] = obj[property];
        }
    }
    return extractedProps;
}
/**
 * Given any captured exception, extract its keys and create a sorted
 * and truncated list that will be used inside the event message.
 * eg. `Non-error exception captured with keys: foo, bar, baz`
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function extractExceptionKeysForMessage(exception, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    var keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    if (!keys.length) {
        return '[object has no keys]';
    }
    if (keys[0].length >= maxLength) {
        return Object(_string__WEBPACK_IMPORTED_MODULE_3__["truncate"])(keys[0], maxLength);
    }
    for (var includedKeys = keys.length; includedKeys > 0; includedKeys--) {
        var serialized = keys.slice(0, includedKeys).join(', ');
        if (serialized.length > maxLength) {
            continue;
        }
        if (includedKeys === keys.length) {
            return serialized;
        }
        return Object(_string__WEBPACK_IMPORTED_MODULE_3__["truncate"])(serialized, maxLength);
    }
    return '';
}
/**
 * Given any object, return the new object with removed keys that value was `undefined`.
 * Works recursively on objects and arrays.
 */
function dropUndefinedKeys(val) {
    var e_1, _a;
    if (Object(_is__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val)) {
        var rv = {};
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(val)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (typeof val[key] !== 'undefined') {
                    rv[key] = dropUndefinedKeys(val[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return rv;
    }
    if (Array.isArray(val)) {
        return val.map(dropUndefinedKeys);
    }
    return val;
}
/**
 * Ensure that something is an object.
 *
 * Turns `undefined` and `null` into `String`s and all other primitives into instances of their respective wrapper
 * classes (String, Boolean, Number, etc.). Acts as the identity function on non-primitives.
 *
 * @param wat The subject of the objectification
 * @returns A version of `wat` which can safely be used with `Object` class methods
 */
function objectify(wat) {
    var objectified;
    switch (true) {
        case wat === undefined || wat === null:
            objectified = new String(wat);
            break;
        // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
        // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
        // an object in order to wrap it.
        case typeof wat === 'symbol' || typeof wat === 'bigint':
            objectified = Object(wat);
            break;
        // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
        case Object(_is__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"])(wat):
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            objectified = new wat.constructor(wat);
            break;
        // by process of elimination, at this point we know that `wat` must already be an object
        default:
            objectified = wat;
            break;
    }
    return objectified;
}
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/path.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/path.js ***!
  \************************************************/
/*! exports provided: resolve, relative, normalizePath, isAbsolute, join, dirname, basename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return normalizePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbsolute", function() { return isAbsolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript
// https://raw.githubusercontent.com/calvinmetcalf/rollup-plugin-node-builtins/master/src/es6/path.js
/** JSDoc */
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
            parts.splice(i, 1);
        }
        else if (last === '..') {
            parts.splice(i, 1);
            // eslint-disable-next-line no-plusplus
            up++;
        }
        else if (up) {
            parts.splice(i, 1);
            // eslint-disable-next-line no-plusplus
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) {
        // eslint-disable-next-line no-plusplus
        for (; up--; up) {
            parts.unshift('..');
        }
    }
    return parts;
}
// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;
/** JSDoc */
function splitPath(filename) {
    var parts = splitPathRe.exec(filename);
    return parts ? parts.slice(1) : [];
}
// path.resolve([from ...], to)
// posix version
/** JSDoc */
function resolve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var resolvedPath = '';
    var resolvedAbsolute = false;
    for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? args[i] : '/';
        // Skip empty entries
        if (!path) {
            continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function (p) { return !!p; }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}
/** JSDoc */
function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
        if (arr[start] !== '') {
            break;
        }
    }
    var end = arr.length - 1;
    for (; end >= 0; end--) {
        if (arr[end] !== '') {
            break;
        }
    }
    if (start > end) {
        return [];
    }
    return arr.slice(start, end - start + 1);
}
// path.relative(from, to)
// posix version
/** JSDoc */
function relative(from, to) {
    /* eslint-disable no-param-reassign */
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    /* eslint-enable no-param-reassign */
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
        }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
}
// path.normalize(path)
// posix version
/** JSDoc */
function normalizePath(path) {
    var isPathAbsolute = isAbsolute(path);
    var trailingSlash = path.substr(-1) === '/';
    // Normalize the path
    var normalizedPath = normalizeArray(path.split('/').filter(function (p) { return !!p; }), !isPathAbsolute).join('/');
    if (!normalizedPath && !isPathAbsolute) {
        normalizedPath = '.';
    }
    if (normalizedPath && trailingSlash) {
        normalizedPath += '/';
    }
    return (isPathAbsolute ? '/' : '') + normalizedPath;
}
// posix version
/** JSDoc */
function isAbsolute(path) {
    return path.charAt(0) === '/';
}
// posix version
/** JSDoc */
function join() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return normalizePath(args.join('/'));
}
/** JSDoc */
function dirname(path) {
    var result = splitPath(path);
    var root = result[0];
    var dir = result[1];
    if (!root && !dir) {
        // No dirname whatsoever
        return '.';
    }
    if (dir) {
        // It has a dirname, strip trailing slash
        dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
}
/** JSDoc */
function basename(path, ext) {
    var f = splitPath(path)[2];
    if (ext && f.substr(ext.length * -1) === ext) {
        f = f.substr(0, f.length - ext.length);
    }
    return f;
}
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/polyfill.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/polyfill.js ***!
  \****************************************************/
/*! exports provided: setPrototypeOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPrototypeOf", function() { return setPrototypeOf; });
var setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);
/**
 * setPrototypeOf polyfill using __proto__
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function setProtoOf(obj, proto) {
    // @ts-ignore __proto__ does not exist on obj
    obj.__proto__ = proto;
    return obj;
}
/**
 * setPrototypeOf polyfill using mixin
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function mixinProperties(obj, proto) {
    for (var prop in proto) {
        if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
            // @ts-ignore typescript complains about indexing so we remove
            obj[prop] = proto[prop];
        }
    }
    return obj;
}
//# sourceMappingURL=polyfill.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/promisebuffer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/promisebuffer.js ***!
  \*********************************************************/
/*! exports provided: makePromiseBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromiseBuffer", function() { return makePromiseBuffer; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./node_modules/@sentry/utils/esm/error.js");
/* harmony import */ var _syncpromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syncpromise */ "./node_modules/@sentry/utils/esm/syncpromise.js");


/**
 * Creates an new PromiseBuffer object with the specified limit
 * @param limit max number of promises that can be stored in the buffer
 */
function makePromiseBuffer(limit) {
    var buffer = [];
    function isReady() {
        return limit === undefined || buffer.length < limit;
    }
    /**
     * Remove a promise from the queue.
     *
     * @param task Can be any PromiseLike<T>
     * @returns Removed promise.
     */
    function remove(task) {
        return buffer.splice(buffer.indexOf(task), 1)[0];
    }
    /**
     * Add a promise (representing an in-flight action) to the queue, and set it to remove itself on fulfillment.
     *
     * @param taskProducer A function producing any PromiseLike<T>; In previous versions this used to be `task:
     *        PromiseLike<T>`, but under that model, Promises were instantly created on the call-site and their executor
     *        functions therefore ran immediately. Thus, even if the buffer was full, the action still happened. By
     *        requiring the promise to be wrapped in a function, we can defer promise creation until after the buffer
     *        limit check.
     * @returns The original promise.
     */
    function add(taskProducer) {
        if (!isReady()) {
            return Object(_syncpromise__WEBPACK_IMPORTED_MODULE_1__["rejectedSyncPromise"])(new _error__WEBPACK_IMPORTED_MODULE_0__["SentryError"]('Not adding Promise due to buffer limit reached.'));
        }
        // start the task and add its promise to the queue
        var task = taskProducer();
        if (buffer.indexOf(task) === -1) {
            buffer.push(task);
        }
        void task
            .then(function () { return remove(task); })
            // Use `then(null, rejectionHandler)` rather than `catch(rejectionHandler)` so that we can use `PromiseLike`
            // rather than `Promise`. `PromiseLike` doesn't have a `.catch` method, making its polyfill smaller. (ES5 didn't
            // have promises, so TS has to polyfill when down-compiling.)
            .then(null, function () {
            return remove(task).then(null, function () {
                // We have to add another catch here because `remove()` starts a new promise chain.
            });
        });
        return task;
    }
    /**
     * Wait for all promises in the queue to resolve or for timeout to expire, whichever comes first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the queue is still non-empty. Passing `0` (or
     * not passing anything) will make the promise wait as long as it takes for the queue to drain before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if the queue is already empty or drains before the timeout, and
     * `false` otherwise
     */
    function drain(timeout) {
        return new _syncpromise__WEBPACK_IMPORTED_MODULE_1__["SyncPromise"](function (resolve, reject) {
            var counter = buffer.length;
            if (!counter) {
                return resolve(true);
            }
            // wait for `timeout` ms and then resolve to `false` (if not cancelled first)
            var capturedSetTimeout = setTimeout(function () {
                if (timeout && timeout > 0) {
                    resolve(false);
                }
            }, timeout);
            // if all promises resolve in time, cancel the timer and resolve to `true`
            buffer.forEach(function (item) {
                void Object(_syncpromise__WEBPACK_IMPORTED_MODULE_1__["resolvedSyncPromise"])(item).then(function () {
                    // eslint-disable-next-line no-plusplus
                    if (!--counter) {
                        clearTimeout(capturedSetTimeout);
                        resolve(true);
                    }
                }, reject);
            });
        });
    }
    return {
        $: buffer,
        add: add,
        drain: drain,
    };
}
//# sourceMappingURL=promisebuffer.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/ratelimit.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/ratelimit.js ***!
  \*****************************************************/
/*! exports provided: DEFAULT_RETRY_AFTER, parseRetryAfterHeader, disabledUntil, isRateLimited, updateRateLimits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RETRY_AFTER", function() { return DEFAULT_RETRY_AFTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRetryAfterHeader", function() { return parseRetryAfterHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledUntil", function() { return disabledUntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRateLimited", function() { return isRateLimited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRateLimits", function() { return updateRateLimits; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DEFAULT_RETRY_AFTER = 60 * 1000; // 60 seconds
/**
 * Extracts Retry-After value from the request header or returns default value
 * @param header string representation of 'Retry-After' header
 * @param now current unix timestamp
 *
 */
function parseRetryAfterHeader(header, now) {
    if (now === void 0) { now = Date.now(); }
    var headerDelay = parseInt("" + header, 10);
    if (!isNaN(headerDelay)) {
        return headerDelay * 1000;
    }
    var headerDate = Date.parse("" + header);
    if (!isNaN(headerDate)) {
        return headerDate - now;
    }
    return DEFAULT_RETRY_AFTER;
}
/**
 * Gets the time that given category is disabled until for rate limiting
 */
function disabledUntil(limits, category) {
    return limits[category] || limits.all || 0;
}
/**
 * Checks if a category is rate limited
 */
function isRateLimited(limits, category, now) {
    if (now === void 0) { now = Date.now(); }
    return disabledUntil(limits, category) > now;
}
/**
 * Update ratelimits from incoming headers.
 * Returns true if headers contains a non-empty rate limiting header.
 */
function updateRateLimits(limits, headers, now) {
    var e_1, _a, e_2, _b;
    if (now === void 0) { now = Date.now(); }
    var updatedRateLimits = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, limits);
    // "The name is case-insensitive."
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
    var rateLimitHeader = headers['x-sentry-rate-limits'];
    var retryAfterHeader = headers['retry-after'];
    if (rateLimitHeader) {
        try {
            /**
             * rate limit headers are of the form
             *     <header>,<header>,..
             * where each <header> is of the form
             *     <retry_after>: <categories>: <scope>: <reason_code>
             * where
             *     <retry_after> is a delay in seconds
             *     <categories> is the event type(s) (error, transaction, etc) being rate limited and is of the form
             *         <category>;<category>;...
             *     <scope> is what's being limited (org, project, or key) - ignored by SDK
             *     <reason_code> is an arbitrary string like "org_quota" - ignored by SDK
             */
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(rateLimitHeader.trim().split(',')), _d = _c.next(); !_d.done; _d = _c.next()) {
                var limit = _d.value;
                var parameters = limit.split(':', 2);
                var headerDelay = parseInt(parameters[0], 10);
                var delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1000; // 60sec default
                if (!parameters[1]) {
                    updatedRateLimits.all = now + delay;
                }
                else {
                    try {
                        for (var _e = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(parameters[1].split(';'))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var category = _f.value;
                            updatedRateLimits[category] = now + delay;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else if (retryAfterHeader) {
        updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    }
    return updatedRateLimits;
}
//# sourceMappingURL=ratelimit.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/severity.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/severity.js ***!
  \****************************************************/
/*! exports provided: severityFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "severityFromString", function() { return severityFromString; });
/* harmony import */ var _sentry_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/types */ "./node_modules/@sentry/types/esm/index.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./node_modules/@sentry/utils/esm/enums.js");


function isSupportedSeverity(level) {
    return _enums__WEBPACK_IMPORTED_MODULE_1__["SeverityLevels"].indexOf(level) !== -1;
}
/**
 * Converts a string-based level into a {@link Severity}.
 *
 * @param level string representation of Severity
 * @returns Severity
 */
function severityFromString(level) {
    if (level === 'warn')
        return _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Severity"].Warning;
    if (isSupportedSeverity(level)) {
        return level;
    }
    return _sentry_types__WEBPACK_IMPORTED_MODULE_0__["Severity"].Log;
}
//# sourceMappingURL=severity.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/stacktrace.js":
/*!******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/stacktrace.js ***!
  \******************************************************/
/*! exports provided: createStackParser, stripSentryFramesAndReverse, getFunctionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStackParser", function() { return createStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSentryFramesAndReverse", function() { return stripSentryFramesAndReverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionName", function() { return getFunctionName; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var STACKTRACE_LIMIT = 50;
/**
 * Creates a stack parser with the supplied line parsers
 *
 * StackFrames are returned in the correct order for Sentry Exception
 * frames and with Sentry SDK internal frames removed from the top and bottom
 *
 */
function createStackParser() {
    var parsers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parsers[_i] = arguments[_i];
    }
    var sortedParsers = parsers.sort(function (a, b) { return a[0] - b[0]; }).map(function (p) { return p[1]; });
    return function (stack, skipFirst) {
        var e_1, _a, e_2, _b;
        if (skipFirst === void 0) { skipFirst = 0; }
        var frames = [];
        try {
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(stack.split('\n').slice(skipFirst)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var line = _d.value;
                try {
                    for (var sortedParsers_1 = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(sortedParsers)), sortedParsers_1_1 = sortedParsers_1.next(); !sortedParsers_1_1.done; sortedParsers_1_1 = sortedParsers_1.next()) {
                        var parser = sortedParsers_1_1.value;
                        var frame = parser(line);
                        if (frame) {
                            frames.push(frame);
                            break;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (sortedParsers_1_1 && !sortedParsers_1_1.done && (_b = sortedParsers_1.return)) _b.call(sortedParsers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return stripSentryFramesAndReverse(frames);
    };
}
/**
 * @hidden
 */
function stripSentryFramesAndReverse(stack) {
    if (!stack.length) {
        return [];
    }
    var localStack = stack;
    var firstFrameFunction = localStack[0].function || '';
    var lastFrameFunction = localStack[localStack.length - 1].function || '';
    // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
    if (firstFrameFunction.indexOf('captureMessage') !== -1 || firstFrameFunction.indexOf('captureException') !== -1) {
        localStack = localStack.slice(1);
    }
    // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
    if (lastFrameFunction.indexOf('sentryWrapped') !== -1) {
        localStack = localStack.slice(0, -1);
    }
    // The frame where the crash happened, should be the last entry in the array
    return localStack
        .slice(0, STACKTRACE_LIMIT)
        .map(function (frame) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, frame), { filename: frame.filename || localStack[0].filename, function: frame.function || '?' })); })
        .reverse();
}
var defaultFunctionName = '<anonymous>';
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== 'function') {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    }
    catch (e) {
        // Just accessing custom props in some Selenium environments
        // can cause a "Permission denied" exception (see raven-js#495).
        return defaultFunctionName;
    }
}
//# sourceMappingURL=stacktrace.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/status.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/status.js ***!
  \**************************************************/
/*! exports provided: eventStatusFromHttpCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventStatusFromHttpCode", function() { return eventStatusFromHttpCode; });
/**
 * Converts an HTTP status code to sentry status {@link EventStatus}.
 *
 * @param code number HTTP status code
 * @returns EventStatus
 */
function eventStatusFromHttpCode(code) {
    if (code >= 200 && code < 300) {
        return 'success';
    }
    if (code === 429) {
        return 'rate_limit';
    }
    if (code >= 400 && code < 500) {
        return 'invalid';
    }
    if (code >= 500) {
        return 'failed';
    }
    return 'unknown';
}
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/string.js":
/*!**************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/string.js ***!
  \**************************************************/
/*! exports provided: truncate, snipLine, safeJoin, isMatchingPattern, escapeStringForRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snipLine", function() { return snipLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeJoin", function() { return safeJoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatchingPattern", function() { return isMatchingPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeStringForRegex", function() { return escapeStringForRegex; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string (0 = unlimited)
 * @returns string Encoded
 */
function truncate(str, max) {
    if (max === void 0) { max = 0; }
    if (typeof str !== 'string' || max === 0) {
        return str;
    }
    return str.length <= max ? str : str.substr(0, max) + "...";
}
/**
 * This is basically just `trim_line` from
 * https://github.com/getsentry/sentry/blob/master/src/sentry/lang/javascript/processor.py#L67
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function snipLine(line, colno) {
    var newLine = line;
    var lineLength = newLine.length;
    if (lineLength <= 150) {
        return newLine;
    }
    if (colno > lineLength) {
        // eslint-disable-next-line no-param-reassign
        colno = lineLength;
    }
    var start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    var end = Math.min(start + 140, lineLength);
    if (end > lineLength - 5) {
        end = lineLength;
    }
    if (end === lineLength) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = "'{snip} " + newLine;
    }
    if (end < lineLength) {
        newLine += ' {snip}';
    }
    return newLine;
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return '';
    }
    var output = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (var i = 0; i < input.length; i++) {
        var value = input[i];
        try {
            output.push(String(value));
        }
        catch (e) {
            output.push('[value cannot be serialized]');
        }
    }
    return output.join(delimiter);
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
    if (!Object(_is__WEBPACK_IMPORTED_MODULE_0__["isString"])(value)) {
        return false;
    }
    if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(pattern)) {
        return pattern.test(value);
    }
    if (typeof pattern === 'string') {
        return value.indexOf(pattern) !== -1;
    }
    return false;
}
/**
 * Given a string, escape characters which have meaning in the regex grammar, such that the result is safe to feed to
 * `new RegExp()`.
 *
 * Based on https://github.com/sindresorhus/escape-string-regexp. Vendored to a) reduce the size by skipping the runtime
 * type-checking, and b) ensure it gets down-compiled for old versions of Node (the published package only supports Node
 * 12+).
 *
 * @param regexString The string to escape
 * @returns An version of the string with all special regex characters escaped
 */
function escapeStringForRegex(regexString) {
    // escape the hyphen separately so we can also replace it with a unicode literal hyphen, to avoid the problems
    // discussed in https://github.com/sindresorhus/escape-string-regexp/issues/20.
    return regexString.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/supports.js":
/*!****************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/supports.js ***!
  \****************************************************/
/*! exports provided: supportsErrorEvent, supportsDOMError, supportsDOMException, supportsFetch, isNativeFetch, supportsNativeFetch, supportsReportingObserver, supportsReferrerPolicy, supportsHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsErrorEvent", function() { return supportsErrorEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMError", function() { return supportsDOMError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsDOMException", function() { return supportsDOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFetch", function() { return supportsFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNativeFetch", function() { return isNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsNativeFetch", function() { return supportsNativeFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReportingObserver", function() { return supportsReportingObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsReferrerPolicy", function() { return supportsReferrerPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flags */ "./node_modules/@sentry/utils/esm/flags.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ "./node_modules/@sentry/utils/esm/logger.js");



/**
 * Tells whether current environment supports ErrorEvent objects
 * {@link supportsErrorEvent}.
 *
 * @returns Answer to the given question.
 */
function supportsErrorEvent() {
    try {
        new ErrorEvent('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMError objects
 * {@link supportsDOMError}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMError() {
    try {
        // Chrome: VM89:1 Uncaught TypeError: Failed to construct 'DOMError':
        // 1 argument required, but only 0 present.
        // @ts-ignore It really needs 1 argument, not 0.
        new DOMError('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports DOMException objects
 * {@link supportsDOMException}.
 *
 * @returns Answer to the given question.
 */
function supportsDOMException() {
    try {
        new DOMException('');
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports Fetch API
 * {@link supportsFetch}.
 *
 * @returns Answer to the given question.
 */
function supportsFetch() {
    if (!('fetch' in Object(_global__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])())) {
        return false;
    }
    try {
        new Headers();
        new Request('');
        new Response();
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * isNativeFetch checks if the given function is a native implementation of fetch()
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
}
/**
 * Tells whether current environment supports Fetch API natively
 * {@link supportsNativeFetch}.
 *
 * @returns true if `window.fetch` is natively implemented, false otherwise
 */
function supportsNativeFetch() {
    if (!supportsFetch()) {
        return false;
    }
    var global = Object(_global__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    // Fast path to avoid DOM I/O
    // eslint-disable-next-line @typescript-eslint/unbound-method
    if (isNativeFetch(global.fetch)) {
        return true;
    }
    // window.fetch is implemented, but is polyfilled or already wrapped (e.g: by a chrome extension)
    // so create a "pure" iframe to see if that has native fetch
    var result = false;
    var doc = global.document;
    // eslint-disable-next-line deprecation/deprecation
    if (doc && typeof doc.createElement === 'function') {
        try {
            var sandbox = doc.createElement('iframe');
            sandbox.hidden = true;
            doc.head.appendChild(sandbox);
            if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
                // eslint-disable-next-line @typescript-eslint/unbound-method
                result = isNativeFetch(sandbox.contentWindow.fetch);
            }
            doc.head.removeChild(sandbox);
        }
        catch (err) {
            _flags__WEBPACK_IMPORTED_MODULE_0__["IS_DEBUG_BUILD"] &&
                _logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', err);
        }
    }
    return result;
}
/**
 * Tells whether current environment supports ReportingObserver API
 * {@link supportsReportingObserver}.
 *
 * @returns Answer to the given question.
 */
function supportsReportingObserver() {
    return 'ReportingObserver' in Object(_global__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
}
/**
 * Tells whether current environment supports Referrer Policy API
 * {@link supportsReferrerPolicy}.
 *
 * @returns Answer to the given question.
 */
function supportsReferrerPolicy() {
    // Despite all stars in the sky saying that Edge supports old draft syntax, aka 'never', 'always', 'origin' and 'default'
    // (see https://caniuse.com/#feat=referrer-policy),
    // it doesn't. And it throws an exception instead of ignoring this parameter...
    // REF: https://github.com/getsentry/raven-js/issues/1233
    if (!supportsFetch()) {
        return false;
    }
    try {
        new Request('_', {
            referrerPolicy: 'origin',
        });
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * Tells whether current environment supports History API
 * {@link supportsHistory}.
 *
 * @returns Answer to the given question.
 */
function supportsHistory() {
    // NOTE: in Chrome App environment, touching history.pushState, *even inside
    //       a try/catch block*, will cause Chrome to output an error to console.error
    // borrowed from: https://github.com/angular/angular.js/pull/13945/files
    var global = Object(_global__WEBPACK_IMPORTED_MODULE_1__["getGlobalObject"])();
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var chrome = global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */
    var hasHistoryApi = 'history' in global && !!global.history.pushState && !!global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}
//# sourceMappingURL=supports.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/syncpromise.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/syncpromise.js ***!
  \*******************************************************/
/*! exports provided: resolvedSyncPromise, rejectedSyncPromise, SyncPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvedSyncPromise", function() { return resolvedSyncPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rejectedSyncPromise", function() { return rejectedSyncPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncPromise", function() { return SyncPromise; });
/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ "./node_modules/@sentry/utils/esm/is.js");
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/typedef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Creates a resolved sync promise.
 *
 * @param value the value to resolve the promise with
 * @returns the resolved sync promise
 */
function resolvedSyncPromise(value) {
    return new SyncPromise(function (resolve) {
        resolve(value);
    });
}
/**
 * Creates a rejected sync promise.
 *
 * @param value the value to reject the promise with
 * @returns the rejected sync promise
 */
function rejectedSyncPromise(reason) {
    return new SyncPromise(function (_, reject) {
        reject(reason);
    });
}
/**
 * Thenable class that behaves like a Promise and follows it's interface
 * but is not async internally
 */
var SyncPromise = /** @class */ (function () {
    function SyncPromise(executor) {
        var _this = this;
        this._state = 0 /* PENDING */;
        this._handlers = [];
        /** JSDoc */
        this._resolve = function (value) {
            _this._setResult(1 /* RESOLVED */, value);
        };
        /** JSDoc */
        this._reject = function (reason) {
            _this._setResult(2 /* REJECTED */, reason);
        };
        /** JSDoc */
        this._setResult = function (state, value) {
            if (_this._state !== 0 /* PENDING */) {
                return;
            }
            if (Object(_is__WEBPACK_IMPORTED_MODULE_0__["isThenable"])(value)) {
                void value.then(_this._resolve, _this._reject);
                return;
            }
            _this._state = state;
            _this._value = value;
            _this._executeHandlers();
        };
        /** JSDoc */
        this._executeHandlers = function () {
            if (_this._state === 0 /* PENDING */) {
                return;
            }
            var cachedHandlers = _this._handlers.slice();
            _this._handlers = [];
            cachedHandlers.forEach(function (handler) {
                if (handler[0]) {
                    return;
                }
                if (_this._state === 1 /* RESOLVED */) {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    handler[1](_this._value);
                }
                if (_this._state === 2 /* REJECTED */) {
                    handler[2](_this._value);
                }
                handler[0] = true;
            });
        };
        try {
            executor(this._resolve, this._reject);
        }
        catch (e) {
            this._reject(e);
        }
    }
    /** JSDoc */
    SyncPromise.prototype.then = function (onfulfilled, onrejected) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            _this._handlers.push([
                false,
                function (result) {
                    if (!onfulfilled) {
                        // TODO: ¯\_(ツ)_/¯
                        // TODO: FIXME
                        resolve(result);
                    }
                    else {
                        try {
                            resolve(onfulfilled(result));
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                },
                function (reason) {
                    if (!onrejected) {
                        reject(reason);
                    }
                    else {
                        try {
                            resolve(onrejected(reason));
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                },
            ]);
            _this._executeHandlers();
        });
    };
    /** JSDoc */
    SyncPromise.prototype.catch = function (onrejected) {
        return this.then(function (val) { return val; }, onrejected);
    };
    /** JSDoc */
    SyncPromise.prototype.finally = function (onfinally) {
        var _this = this;
        return new SyncPromise(function (resolve, reject) {
            var val;
            var isRejected;
            return _this.then(function (value) {
                isRejected = false;
                val = value;
                if (onfinally) {
                    onfinally();
                }
            }, function (reason) {
                isRejected = true;
                val = reason;
                if (onfinally) {
                    onfinally();
                }
            }).then(function () {
                if (isRejected) {
                    reject(val);
                    return;
                }
                resolve(val);
            });
        });
    };
    return SyncPromise;
}());

//# sourceMappingURL=syncpromise.js.map

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/time.js":
/*!************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/time.js ***!
  \************************************************/
/*! exports provided: dateTimestampInSeconds, timestampInSeconds, timestampWithMs, usingPerformanceAPI, _browserPerformanceTimeOriginMode, browserPerformanceTimeOrigin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimestampInSeconds", function() { return dateTimestampInSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampInSeconds", function() { return timestampInSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timestampWithMs", function() { return timestampWithMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usingPerformanceAPI", function() { return usingPerformanceAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_browserPerformanceTimeOriginMode", function() { return _browserPerformanceTimeOriginMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserPerformanceTimeOrigin", function() { return browserPerformanceTimeOrigin; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@sentry/utils/esm/global.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./node_modules/@sentry/utils/esm/node.js");


/**
 * A TimestampSource implementation for environments that do not support the Performance Web API natively.
 *
 * Note that this TimestampSource does not use a monotonic clock. A call to `nowSeconds` may return a timestamp earlier
 * than a previously returned value. We do not try to emulate a monotonic behavior in order to facilitate debugging. It
 * is more obvious to explain "why does my span have negative duration" than "why my spans have zero duration".
 */
var dateTimestampSource = {
    nowSeconds: function () { return Date.now() / 1000; },
};
/**
 * Returns a wrapper around the native Performance API browser implementation, or undefined for browsers that do not
 * support the API.
 *
 * Wrapping the native API works around differences in behavior from different browsers.
 */
function getBrowserPerformance() {
    var performance = Object(_global__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])().performance;
    if (!performance || !performance.now) {
        return undefined;
    }
    // Replace performance.timeOrigin with our own timeOrigin based on Date.now().
    //
    // This is a partial workaround for browsers reporting performance.timeOrigin such that performance.timeOrigin +
    // performance.now() gives a date arbitrarily in the past.
    //
    // Additionally, computing timeOrigin in this way fills the gap for browsers where performance.timeOrigin is
    // undefined.
    //
    // The assumption that performance.timeOrigin + performance.now() ~= Date.now() is flawed, but we depend on it to
    // interact with data coming out of performance entries.
    //
    // Note that despite recommendations against it in the spec, browsers implement the Performance API with a clock that
    // might stop when the computer is asleep (and perhaps under other circumstances). Such behavior causes
    // performance.timeOrigin + performance.now() to have an arbitrary skew over Date.now(). In laptop computers, we have
    // observed skews that can be as long as days, weeks or months.
    //
    // See https://github.com/getsentry/sentry-javascript/issues/2590.
    //
    // BUG: despite our best intentions, this workaround has its limitations. It mostly addresses timings of pageload
    // transactions, but ignores the skew built up over time that can aversely affect timestamps of navigation
    // transactions of long-lived web pages.
    var timeOrigin = Date.now() - performance.now();
    return {
        now: function () { return performance.now(); },
        timeOrigin: timeOrigin,
    };
}
/**
 * Returns the native Performance API implementation from Node.js. Returns undefined in old Node.js versions that don't
 * implement the API.
 */
function getNodePerformance() {
    try {
        var perfHooks = Object(_node__WEBPACK_IMPORTED_MODULE_1__["dynamicRequire"])(module, 'perf_hooks');
        return perfHooks.performance;
    }
    catch (_) {
        return undefined;
    }
}
/**
 * The Performance API implementation for the current platform, if available.
 */
var platformPerformance = Object(_node__WEBPACK_IMPORTED_MODULE_1__["isNodeEnv"])() ? getNodePerformance() : getBrowserPerformance();
var timestampSource = platformPerformance === undefined
    ? dateTimestampSource
    : {
        nowSeconds: function () { return (platformPerformance.timeOrigin + platformPerformance.now()) / 1000; },
    };
/**
 * Returns a timestamp in seconds since the UNIX epoch using the Date API.
 */
var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
/**
 * Returns a timestamp in seconds since the UNIX epoch using either the Performance or Date APIs, depending on the
 * availability of the Performance API.
 *
 * See `usingPerformanceAPI` to test whether the Performance API is used.
 *
 * BUG: Note that because of how browsers implement the Performance API, the clock might stop when the computer is
 * asleep. This creates a skew between `dateTimestampInSeconds` and `timestampInSeconds`. The
 * skew can grow to arbitrary amounts like days, weeks or months.
 * See https://github.com/getsentry/sentry-javascript/issues/2590.
 */
var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
// Re-exported with an old name for backwards-compatibility.
var timestampWithMs = timestampInSeconds;
/**
 * A boolean that is true when timestampInSeconds uses the Performance API to produce monotonic timestamps.
 */
var usingPerformanceAPI = platformPerformance !== undefined;
/**
 * Internal helper to store what is the source of browserPerformanceTimeOrigin below. For debugging only.
 */
var _browserPerformanceTimeOriginMode;
/**
 * The number of milliseconds since the UNIX epoch. This value is only usable in a browser, and only when the
 * performance API is available.
 */
var browserPerformanceTimeOrigin = (function () {
    // Unfortunately browsers may report an inaccurate time origin data, through either performance.timeOrigin or
    // performance.timing.navigationStart, which results in poor results in performance data. We only treat time origin
    // data as reliable if they are within a reasonable threshold of the current time.
    var performance = Object(_global__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"])().performance;
    if (!performance || !performance.now) {
        _browserPerformanceTimeOriginMode = 'none';
        return undefined;
    }
    var threshold = 3600 * 1000;
    var performanceNow = performance.now();
    var dateNow = Date.now();
    // if timeOrigin isn't available set delta to threshold so it isn't used
    var timeOriginDelta = performance.timeOrigin
        ? Math.abs(performance.timeOrigin + performanceNow - dateNow)
        : threshold;
    var timeOriginIsReliable = timeOriginDelta < threshold;
    // While performance.timing.navigationStart is deprecated in favor of performance.timeOrigin, performance.timeOrigin
    // is not as widely supported. Namely, performance.timeOrigin is undefined in Safari as of writing.
    // Also as of writing, performance.timing is not available in Web Workers in mainstream browsers, so it is not always
    // a valid fallback. In the absence of an initial time provided by the browser, fallback to the current time from the
    // Date API.
    // eslint-disable-next-line deprecation/deprecation
    var navigationStart = performance.timing && performance.timing.navigationStart;
    var hasNavigationStart = typeof navigationStart === 'number';
    // if navigationStart isn't available set delta to threshold so it isn't used
    var navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    var navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
        // Use the more reliable time origin
        if (timeOriginDelta <= navigationStartDelta) {
            _browserPerformanceTimeOriginMode = 'timeOrigin';
            return performance.timeOrigin;
        }
        else {
            _browserPerformanceTimeOriginMode = 'navigationStart';
            return navigationStart;
        }
    }
    // Either both timeOrigin and navigationStart are skewed or neither is available, fallback to Date.
    _browserPerformanceTimeOriginMode = 'dateNow';
    return dateNow;
})();
//# sourceMappingURL=time.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@sentry/utils/esm/tracing.js":
/*!***************************************************!*\
  !*** ./node_modules/@sentry/utils/esm/tracing.js ***!
  \***************************************************/
/*! exports provided: TRACEPARENT_REGEXP, extractTraceparentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRACEPARENT_REGEXP", function() { return TRACEPARENT_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractTraceparentData", function() { return extractTraceparentData; });
var TRACEPARENT_REGEXP = new RegExp('^[ \\t]*' + // whitespace
    '([0-9a-f]{32})?' + // trace_id
    '-?([0-9a-f]{16})?' + // span_id
    '-?([01])?' + // sampled
    '[ \\t]*$');
/**
 * Extract transaction context data from a `sentry-trace` header.
 *
 * @param traceparent Traceparent string
 *
 * @returns Object containing data from the header, or undefined if traceparent string is malformed
 */
function extractTraceparentData(traceparent) {
    var matches = traceparent.match(TRACEPARENT_REGEXP);
    if (matches) {
        var parentSampled = void 0;
        if (matches[3] === '1') {
            parentSampled = true;
        }
        else if (matches[3] === '0') {
            parentSampled = false;
        }
        return {
            traceId: matches[1],
            parentSampled: parentSampled,
            parentSpanId: matches[2],
        };
    }
    return undefined;
}
//# sourceMappingURL=tracing.js.map

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js ***!
  \*****************************************************************/
/*! exports provided: InterpreterStatus, assign, createMachine, interpret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpreterStatus", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMachine", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpret", function() { return v; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value);}catch(t){o={error:t};}finally{try{r&&!r.done&&(e=i.return)&&e.call(i);}finally{if(o)throw o.error}}return a}var n;!function(t){t[t.NotStarted=0]="NotStarted",t[t.Running=1]="Running",t[t.Stopped=2]="Stopped";}(n||(n={}));var e={type:"xstate.init"};function r(t){return void 0===t?[]:[].concat(t)}function o(t){return {type:"xstate.assign",assignment:t}}function i(t,n){return "string"==typeof(t="string"==typeof t&&n&&n[t]?n[t]:t)?{type:t}:"function"==typeof t?{type:t.name,exec:t}:t}function a(t){return function(n){return t===n}}function u(t){return "string"==typeof t?{type:t}:t}function c(t,n){return {value:t,context:n,actions:[],changed:!1,matches:a(t)}}function f(t,n,e){var r=n,o=!1;return [t.filter((function(t){if("xstate.assign"===t.type){o=!0;var n=Object.assign({},r);return "function"==typeof t.assignment?n=t.assignment(r,e):Object.keys(t.assignment).forEach((function(o){n[o]="function"==typeof t.assignment[o]?t.assignment[o](r,e):t.assignment[o];})),r=n,!1}return !0})),r,o]}function s(n,o){void 0===o&&(o={});var s=t(f(r(n.states[n.initial].entry).map((function(t){return i(t,o.actions)})),n.context,e),2),l=s[0],v=s[1],y={config:n,_options:o,initialState:{value:n.initial,actions:l,context:v,matches:a(n.initial)},transition:function(e,o){var s,l,v="string"==typeof e?{value:e,context:n.context}:e,p=v.value,g=v.context,d=u(o),x=n.states[p];if(x.on){var m=r(x.on[d.type]);try{for(var h=function(t){var n="function"==typeof Symbol&&Symbol.iterator,e=n&&t[n],r=0;if(e)return e.call(t);if(t&&"number"==typeof t.length)return {next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(m),b=h.next();!b.done;b=h.next()){var S=b.value;if(void 0===S)return c(p,g);var w="string"==typeof S?{target:S}:S,j=w.target,E=w.actions,R=void 0===E?[]:E,N=w.cond,O=void 0===N?function(){return !0}:N,_=void 0===j,k=null!=j?j:p,T=n.states[k];if(O(g,d)){var q=t(f((_?r(R):[].concat(x.exit,R,T.entry).filter((function(t){return t}))).map((function(t){return i(t,y._options.actions)})),g,d),3),z=q[0],A=q[1],B=q[2],C=null!=j?j:p;return {value:C,context:A,actions:z,changed:j!==p||z.length>0||B,matches:a(C)}}}}catch(t){s={error:t};}finally{try{b&&!b.done&&(l=h.return)&&l.call(h);}finally{if(s)throw s.error}}}return c(p,g)}};return y}var l=function(t,n){return t.actions.forEach((function(e){var r=e.exec;return r&&r(t.context,n)}))};function v(t){var r=t.initialState,o=n.NotStarted,i=new Set,c={_machine:t,send:function(e){o===n.Running&&(r=t.transition(r,e),l(r,u(e)),i.forEach((function(t){return t(r)})));},subscribe:function(t){return i.add(t),t(r),{unsubscribe:function(){return i.delete(t)}}},start:function(i){if(i){var u="object"==typeof i?i:{context:t.config.context,value:i};r={value:u.value,actions:[],context:u.context,matches:a(u.value)};}return o=n.Running,l(r,e),c},stop:function(){return o=n.Stopped,i.clear(),c},get state(){return r},get status(){return o}};return c}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js ***!
  \*******************************************************************************************/
/*! exports provided: decode, encode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return encode; });
/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
var encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};
var decode = function (base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
};




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js":
/*!***************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js ***!
  \***************************************************************/
/*! exports provided: strFromU8, strToU8, unzlibSync, zlibSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strFromU8", function() { return strFromU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strToU8", function() { return strToU8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzlibSync", function() { return unzlibSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zlibSync", function() { return zlibSync; });
// DEFLATE is a complex format; to read this code, you should probably check the RFC first:

// aliases for shorter compressed code (most minifers don't do this)
var u8 = Uint8Array, u16 = Uint16Array, u32 = Uint32Array;
// fixed length extra bits
var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, /* unused */ 0, 0, /* impossible */ 0]);
// fixed distance extra bits
// see fleb note
var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, /* unused */ 0, 0]);
// code length index map
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
// get base, reverse index map from extra bits
var freb = function (eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
        b[i] = start += 1 << eb[i - 1];
    }
    // numbers here are at max 18 bits
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
        for (var j = b[i]; j < b[i + 1]; ++j) {
            r[j] = ((j - b[i]) << 5) | i;
        }
    }
    return [b, r];
};
var _a = freb(fleb, 2), fl = _a[0], revfl = _a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0), fd = _b[0], revfd = _b[1];
// map of value to reverse (assuming 16 bits)
var rev = new u16(32768);
for (var i = 0; i < 32768; ++i) {
    // reverse table algorithm from SO
    var x = ((i & 0xAAAA) >>> 1) | ((i & 0x5555) << 1);
    x = ((x & 0xCCCC) >>> 2) | ((x & 0x3333) << 2);
    x = ((x & 0xF0F0) >>> 4) | ((x & 0x0F0F) << 4);
    rev[i] = (((x & 0xFF00) >>> 8) | ((x & 0x00FF) << 8)) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var hMap = (function (cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new u16(mb);
    // length of cd must be 288 (total # of codes)
    for (; i < s; ++i)
        ++l[cd[i] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new u16(mb);
    for (i = 0; i < mb; ++i) {
        le[i] = (le[i - 1] + l[i - 1]) << 1;
    }
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for (i = 0; i < s; ++i) {
            // ignore 0 lengths
            if (cd[i]) {
                // num encoding both symbol and bits read
                var sv = (i << 4) | cd[i];
                // free bits
                var r_1 = mb - cd[i];
                // start value
                var v = le[cd[i] - 1]++ << r_1;
                // m is end value
                for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
                    // every 16 bit value starting with the code yields the same result
                    co[rev[v] >>> rvb] = sv;
                }
            }
        }
    }
    else {
        co = new u16(s);
        for (i = 0; i < s; ++i)
            co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
    }
    return co;
});
// fixed length tree
var flt = new u8(288);
for (var i = 0; i < 144; ++i)
    flt[i] = 8;
for (var i = 144; i < 256; ++i)
    flt[i] = 9;
for (var i = 256; i < 280; ++i)
    flt[i] = 7;
for (var i = 280; i < 288; ++i)
    flt[i] = 8;
// fixed distance tree
var fdt = new u8(32);
for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
// fixed length map
var flm = /*#__PURE__*/ hMap(flt, 9, 0), flrm = /*#__PURE__*/ hMap(flt, 9, 1);
// fixed distance map
var fdm = /*#__PURE__*/ hMap(fdt, 5, 0), fdrm = /*#__PURE__*/ hMap(fdt, 5, 1);
// find max of array
var max = function (a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
        if (a[i] > m)
            m = a[i];
    }
    return m;
};
// read d, starting at bit p and mask with m
var bits = function (d, p, m) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8)) >>> (p & 7)) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var bits16 = function (d, p) {
    var o = (p / 8) >> 0;
    return ((d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >>> (p & 7));
};
// get end of byte
var shft = function (p) { return ((p / 8) >> 0) + (p & 7 && 1); };
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var slc = function (v, s, e) {
    if (s == null || s < 0)
        s = 0;
    if (e == null || e > v.length)
        e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof u16 ? u16 : v instanceof u32 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var inflt = function (dat, buf, st) {
    // source length
    var sl = dat.length;
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st)
        st = {};
    // Assumes roughly 33% compression ratio average
    if (!buf)
        buf = new u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function (l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = shft(pos) + 4, l = dat[s - 4] | (dat[s - 3] << 8), t = s + l;
                if (t > sl) {
                    if (noSt)
                        throw 'unexpected EOF';
                    break;
                }
                // ensure size
                if (noBuf)
                    cbuf(bt + l);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l, st.p = pos = t * 8;
                continue;
            }
            else if (type == 1)
                lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
                var tl = hLit + bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new u8(tl);
                // code length tree
                var clt = new u8(19);
                for (var i = 0; i < hcLen; ++i) {
                    // use index map to get real code
                    clt[clim[i]] = bits(dat, pos + i * 3, 7);
                }
                pos += hcLen * 3;
                // code lengths bits
                var clb = max(clt), clbmsk = (1 << clb) - 1;
                if (!noSt && pos + tl * (clb + 7) > tbts)
                    break;
                // code lengths map
                var clm = hMap(clt, clb, 1);
                for (var i = 0; i < tl;) {
                    var r = clm[bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) {
                        ldt[i++] = s;
                    }
                    else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16)
                            n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17)
                            n = 3 + bits(dat, pos, 7), pos += 3;
                        else if (s == 18)
                            n = 11 + bits(dat, pos, 127), pos += 7;
                        while (n--)
                            ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = max(lt);
                // max dist bits
                dbt = max(dt);
                lm = hMap(lt, lbt, 1);
                dm = hMap(dt, dbt, 1);
            }
            else
                throw 'invalid block type';
            if (pos > tbts)
                throw 'unexpected EOF';
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf)
            cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var mxa = lbt + dbt + 18;
        while (noSt || pos + mxa < tbts) {
            // bits read, code
            var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts)
                throw 'unexpected EOF';
            if (!c)
                throw 'invalid length/literal';
            if (sym < 256)
                buf[bt++] = sym;
            else if (sym == 256) {
                lm = null;
                break;
            }
            else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = fleb[i];
                    add = bits(dat, pos, (1 << b) - 1) + fl[i];
                    pos += b;
                }
                // dist
                var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d)
                    throw 'invalid distance';
                pos += d & 15;
                var dt = fd[dsym];
                if (dsym > 3) {
                    var b = fdeb[dsym];
                    dt += bits16(dat, pos) & ((1 << b) - 1), pos += b;
                }
                if (pos > tbts)
                    throw 'unexpected EOF';
                if (noBuf)
                    cbuf(bt + 131072);
                var end = bt + add;
                for (; bt < end; bt += 4) {
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = pos, st.b = bt;
        if (lm)
            final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt == buf.length ? buf : slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var wbits = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var wbits16 = function (d, p, v) {
    v <<= p & 7;
    var o = (p / 8) >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var hTree = function (d, mb) {
    // Need extra info to make a tree
    var t = [];
    for (var i = 0; i < d.length; ++i) {
        if (d[i])
            t.push({ s: i, f: d[i] });
    }
    var s = t.length;
    var t2 = t.slice();
    if (!s)
        return [new u8(0), 0];
    if (s == 1) {
        var v = new u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [v, 1];
    }
    t.sort(function (a, b) { return a.f - b.f; });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({ s: -1, f: 25001 });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = { s: -1, f: l.f + r.f, l: l, r: r };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while (i1 != s - 1) {
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = { s: -1, f: l.f + r.f, l: l, r: r };
    }
    var maxSym = t2[0].s;
    for (var i = 1; i < s; ++i) {
        if (t2[i].s > maxSym)
            maxSym = t2[i].s;
    }
    // code lengths
    var tr = new u16(maxSym + 1);
    // max bits in tree
    var mbt = ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function (a, b) { return tr[b.s] - tr[a.s] || a.f - b.f; });
        for (; i < s; ++i) {
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << (mbt - tr[i2_1]));
                tr[i2_1] = mb;
            }
            else
                break;
        }
        dt >>>= lft;
        while (dt > 0) {
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb)
                dt -= 1 << (mb - tr[i2_2]++ - 1);
            else
                ++i;
        }
        for (; i >= 0 && dt; --i) {
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [new u8(tr), mbt];
};
// get the max length and assign length codes
var ln = function (n, l, d) {
    return n.s == -1
        ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1))
        : (l[n.s] = d);
};
// length codes generation
var lc = function (c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while (s && !c[--s])
        ;
    var cl = new u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function (v) { cl[cli++] = v; };
    for (var i = 1; i <= s; ++i) {
        if (c[i] == cln && i != s)
            ++cls;
        else {
            if (!cln && cls > 2) {
                for (; cls > 138; cls -= 138)
                    w(32754);
                if (cls > 2) {
                    w(cls > 10 ? ((cls - 11) << 5) | 28690 : ((cls - 3) << 5) | 12305);
                    cls = 0;
                }
            }
            else if (cls > 3) {
                w(cln), --cls;
                for (; cls > 6; cls -= 6)
                    w(8304);
                if (cls > 2)
                    w(((cls - 3) << 5) | 8208), cls = 0;
            }
            while (cls--)
                w(cln);
            cls = 1;
            cln = c[i];
        }
    }
    return [cl.subarray(0, cli), s];
};
// calculate the length of output from tree, code lengths
var clen = function (cf, cl) {
    var l = 0;
    for (var i = 0; i < cl.length; ++i)
        l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var wfblk = function (out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for (var i = 0; i < s; ++i)
        out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var wblk = function (dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    wbits(out, p++, final);
    ++lf[256];
    var _a = hTree(lf, 15), dlt = _a[0], mlb = _a[1];
    var _b = hTree(df, 15), ddt = _b[0], mdb = _b[1];
    var _c = lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new u16(19);
    for (var i = 0; i < lclt.length; ++i)
        lcfreq[lclt[i] & 31]++;
    for (var i = 0; i < lcdt.length; ++i)
        lcfreq[lcdt[i] & 31]++;
    var _e = hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
        ;
    var flen = (bl + 5) << 3;
    var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
    var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen)
        return wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
        var llm = hMap(lct, mlcb, 0);
        wbits(out, p, nlc - 257);
        wbits(out, p + 5, ndc - 1);
        wbits(out, p + 10, nlcc - 4);
        p += 14;
        for (var i = 0; i < nlcc; ++i)
            wbits(out, p + 3 * i, lct[clim[i]]);
        p += 3 * nlcc;
        var lcts = [lclt, lcdt];
        for (var it = 0; it < 2; ++it) {
            var clct = lcts[it];
            for (var i = 0; i < clct.length; ++i) {
                var len = clct[i] & 31;
                wbits(out, p, llm[len]), p += lct[len];
                if (len > 15)
                    wbits(out, p, (clct[i] >>> 5) & 127), p += clct[i] >>> 12;
            }
        }
    }
    else {
        lm = flm, ll = flt, dm = fdm, dl = fdt;
    }
    for (var i = 0; i < li; ++i) {
        if (syms[i] > 255) {
            var len = (syms[i] >>> 18) & 31;
            wbits16(out, p, lm[len + 257]), p += ll[len + 257];
            if (len > 7)
                wbits(out, p, (syms[i] >>> 23) & 31), p += fleb[len];
            var dst = syms[i] & 31;
            wbits16(out, p, dm[dst]), p += dl[dst];
            if (dst > 3)
                wbits16(out, p, (syms[i] >>> 5) & 8191), p += fdeb[dst];
        }
        else {
            wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
        }
    }
    wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var deo = /*#__PURE__*/ new u32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
// empty
var et = /*#__PURE__*/ new u8(0);
// compresses data into a raw DEFLATE buffer
var dflt = function (dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) {
        for (var i = 0; i <= s; i += 65535) {
            // end
            var e = i + 65535;
            if (e < s) {
                // write full block
                pos = wfblk(w, pos, dat.subarray(i, e));
            }
            else {
                // write final block
                w[i] = lst;
                pos = wfblk(w, pos, dat.subarray(i, s));
            }
        }
    }
    else {
        var opt = deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new u16(32768), head = new u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function (i) { return (dat[i] ^ (dat[i + 1] << bs1_1) ^ (dat[i + 2] << bs2_1)) & msk_1; };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new u32(25000);
        // length/literal freq   distance freq
        var lf = new u16(288), df = new u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
        for (; i < s; ++i) {
            // hash value
            var hv = hsh(i);
            // index mod 32768
            var imod = i & 32767;
            // previous index with this value
            var pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for (var j = 0; j < 286; ++j)
                        lf[j] = 0;
                    for (var j = 0; j < 30; ++j)
                        df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = (imod - pimod) & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while (dif <= maxd && --ch_1 && imod != pimod) {
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                                ;
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn)
                                    break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for (var j = 0; j < mmd; ++j) {
                                    var ti = (i - dif + j + 32768) & 32767;
                                    var pti = prev[ti];
                                    var cd = (ti - pti + 32768) & 32767;
                                    if (cd > md)
                                        md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += (imod - pimod + 32768) & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | (revfl[l] << 18) | revfd[d];
                    var lin = revfl[l] & 31, din = revfd[d] & 31;
                    eb += fleb[lin] + fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                }
                else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst)
            pos = wfblk(w, pos, et);
    }
    return slc(o, 0, pre + shft(pos) + post);
};
// Alder32
var adler = function () {
    var a = 1, b = 0;
    return {
        p: function (d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for (var i = 0; i != l;) {
                var e = Math.min(i + 5552, l);
                for (; i < e; ++i)
                    n += d[i], m += n;
                n %= 65521, m %= 65521;
            }
            a = n, b = m;
        },
        d: function () { return ((a >>> 8) << 16 | (b & 255) << 8 | (b >>> 8)) + ((a & 255) << 23) * 2; }
    };
};
// deflate with opts
var dopt = function (dat, opt, pre, post, st) {
    return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : (12 + opt.mem), pre, post, !st);
};
// write bytes
var wbytes = function (d, b, v) {
    for (; v; ++b)
        d[b] = v, v >>>= 8;
};
// zlib header
var zlh = function (c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = (fl << 6) | (fl ? (32 - 2 * fl) : 1);
};
// zlib valid
var zlv = function (d) {
    if ((d[0] & 15) != 8 || (d[0] >>> 4) > 7 || ((d[0] << 8 | d[1]) % 31))
        throw 'invalid zlib data';
    if (d[1] & 32)
        throw 'invalid zlib data: preset dictionaries not supported';
};
/**
 * Compress data with Zlib
 * @param data The data to compress
 * @param opts The compression options
 * @returns The zlib-compressed version of the data
 */
function zlibSync(data, opts) {
    if (opts === void 0) { opts = {}; }
    var a = adler();
    a.p(data);
    var d = dopt(data, opts, 2, 4);
    return zlh(d, opts), wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Expands Zlib data
 * @param data The data to decompress
 * @param out Where to write the data. Saves memory if you know the decompressed size and provide an output buffer of that length.
 * @returns The decompressed version of the data
 */
function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
}
/**
 * Converts a string into a Uint8Array for use with compression/decompression methods
 * @param str The string to encode
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless decoding a binary string.
 * @returns The string encoded in UTF-8/Latin-1 binary
 */
function strToU8(str, latin1) {
    var l = str.length;
    if (!latin1 && typeof TextEncoder != 'undefined')
        return new TextEncoder().encode(str);
    var ar = new u8(str.length + (str.length >>> 1));
    var ai = 0;
    var w = function (v) { ar[ai++] = v; };
    for (var i = 0; i < l; ++i) {
        if (ai + 5 > ar.length) {
            var n = new u8(ai + 8 + ((l - i) << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1)
            w(c);
        else if (c < 2048)
            w(192 | (c >>> 6)), w(128 | (c & 63));
        else if (c > 55295 && c < 57344)
            c = 65536 + (c & 1023 << 10) | (str.charCodeAt(++i) & 1023),
                w(240 | (c >>> 18)), w(128 | ((c >>> 12) & 63)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
        else
            w(224 | (c >>> 12)), w(128 | ((c >>> 6) & 63)), w(128 | (c & 63));
    }
    return slc(ar, 0, ai);
}
/**
 * Converts a Uint8Array to a string
 * @param dat The data to decode to string
 * @param latin1 Whether or not to interpret the data as Latin-1. This should
 *               not need to be true unless encoding to binary string.
 * @returns The original UTF-8/Latin-1 string
 */
function strFromU8(dat, latin1) {
    var r = '';
    if (!latin1 && typeof TextDecoder != 'undefined')
        return new TextDecoder().decode(dat);
    for (var i = 0; i < dat.length;) {
        var c = dat[i++];
        if (c < 128 || latin1)
            r += String.fromCharCode(c);
        else if (c < 224)
            r += String.fromCharCode((c & 31) << 6 | (dat[i++] & 63));
        else if (c < 240)
            r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63));
        else
            c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | (dat[i++] & 63)) - 65536,
                r += String.fromCharCode(55296 | (c >> 10), 56320 | (c & 1023));
    }
    return r;
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \**********************************************************************************/
/*! exports provided: IGNORED_NODE, NodeType, addHoverClass, buildNodeWithSN, createCache, is2DCanvasBlank, isElement, isShadowRoot, maskInputValue, needMaskingText, rebuild, serializeNodeWithId, snapshot, transformAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORED_NODE", function() { return IGNORED_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHoverClass", function() { return addHoverClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildNodeWithSN", function() { return buildNodeWithSN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCache", function() { return createCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is2DCanvasBlank", function() { return is2DCanvasBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShadowRoot", function() { return isShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskInputValue", function() { return maskInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "needMaskingText", function() { return needMaskingText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebuild", function() { return rebuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeNodeWithId", function() { return serializeNodeWithId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshot", function() { return snapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAttribute", function() { return transformAttribute; });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    var _a;
    var host = (_a = n) === null || _a === void 0 ? void 0 : _a.host;
    return Boolean(host && host.shadowRoot && host.shadowRoot === n);
}
function maskInputValue(_a) {
    var maskInputOptions = _a.maskInputOptions, tagName = _a.tagName, type = _a.type, value = _a.value, maskInputFn = _a.maskInputFn;
    var text = value || '';
    if (maskInputOptions[tagName.toLowerCase()] ||
        maskInputOptions[type]) {
        if (maskInputFn) {
            text = maskInputFn(text);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return true;
    var chunkSize = 50;
    for (var x = 0; x < canvas.width; x += chunkSize) {
        for (var y = 0; y < canvas.height; y += chunkSize) {
            var getImageData = ctx.getImageData;
            var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                : getImageData;
            var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
            if (pixelBuffer.some(function (pixel) { return pixel !== 0; }))
                return false;
        }
    }
    return true;
}

var _id = 1;
var tagNameRegex = new RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    var processedTagName = element.tagName.toLowerCase().trim();
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function getCssRulesString(s) {
    try {
        var rules = s.rules || s.cssRules;
        return rules ? Array.from(rules).map(getCssRuleString).join('') : null;
    }
    catch (error) {
        return null;
    }
}
function getCssRuleString(rule) {
    var cssStringified = rule.cssText;
    if (isCSSImportRule(rule)) {
        try {
            cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
        }
        catch (_a) {
        }
    }
    return cssStringified;
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
function stringifyStyleSheet(sheet) {
    return sheet.cssRules
        ? Array.from(sheet.cssRules)
            .map(function (rule) { return rule.cssText || ''; })
            .join('')
        : '';
}
function extractOrigin(url) {
    var origin = '';
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
        var filePath = path1 || path2 || path3;
        var maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (!RELATIVE_PATH.test(filePath)) {
            return "url(" + maybeQuote + filePath + maybeQuote + ")";
        }
        if (DATA_URI.test(filePath)) {
            return "url(" + maybeQuote + filePath + maybeQuote + ")";
        }
        if (filePath[0] === '/') {
            return "url(" + maybeQuote + (extractOrigin(href) + filePath) + maybeQuote + ")";
        }
        var stack = href.split('/');
        var parts = filePath.split('/');
        stack.pop();
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return "url(" + maybeQuote + stack.join('/') + maybeQuote + ")";
    });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    var pos = 0;
    function collectCharacters(regEx) {
        var chars;
        var match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    var output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        var url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            var descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            var inParens = false;
            while (true) {
                var c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    var a = doc.createElement('a');
    a.href = attributeValue;
    return a.href;
}
function isSVGElement(el) {
    return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
    var a = document.createElement('a');
    a.href = '';
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (name === 'src' || (name === 'href' && value)) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'xlink:href' && value && value[0] !== '#') {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        value &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset' && value) {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style' && value) {
        return absoluteToStylesheet(value, getHref());
    }
    else if (tagName === 'object' && name === 'data' && value) {
        return absoluteToDoc(doc, value);
    }
    else {
        return value;
    }
}
function _isBlockedElement(element, blockClass, blockSelector) {
    if (typeof blockClass === 'string') {
        if (element.classList.contains(blockClass)) {
            return true;
        }
    }
    else {
        for (var eIndex = 0; eIndex < element.classList.length; eIndex++) {
            var className = element.classList[eIndex];
            if (blockClass.test(className)) {
                return true;
            }
        }
    }
    if (blockSelector) {
        return element.matches(blockSelector);
    }
    return false;
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
    if (!node) {
        return false;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
        if (typeof maskTextClass === 'string') {
            if (node.classList.contains(maskTextClass)) {
                return true;
            }
        }
        else {
            for (var eIndex = 0; eIndex < node.classList.length; eIndex++) {
                var className = node.classList[eIndex];
                if (maskTextClass.test(className)) {
                    return true;
                }
            }
        }
        if (maskTextSelector) {
            if (node.matches(maskTextSelector)) {
                return true;
            }
        }
        return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
    }
    if (node.nodeType === node.TEXT_NODE) {
        return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
    }
    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    var win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    var fired = false;
    var readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        var timer_1 = setTimeout(function () {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', function () {
            clearTimeout(timer_1);
            fired = true;
            listener();
        });
        return;
    }
    var blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return;
    }
    iframeEl.addEventListener('load', listener);
}
function serializeNode(n, options) {
    var _a;
    var doc = options.doc, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, inlineStylesheet = options.inlineStylesheet, _b = options.maskInputOptions, maskInputOptions = _b === void 0 ? {} : _b, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, _c = options.dataURLOptions, dataURLOptions = _c === void 0 ? {} : _c, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn;
    var rootId;
    if (doc.__sn) {
        var docId = doc.__sn.id;
        rootId = docId === 1 ? undefined : docId;
    }
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            if (n.compatMode !== 'CSS1Compat') {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    compatMode: n.compatMode,
                    rootId: rootId
                };
            }
            else {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    rootId: rootId
                };
            }
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId,
                rootId: rootId
            };
        case n.ELEMENT_NODE:
            var needBlock = _isBlockedElement(n, blockClass, blockSelector);
            var tagName = getValidTagName(n);
            var attributes_1 = {};
            for (var _i = 0, _d = Array.from(n.attributes); _i < _d.length; _i++) {
                var _e = _d[_i], name_1 = _e.name, value = _e.value;
                attributes_1[name_1] = transformAttribute(doc, tagName, name_1, value);
            }
            if (tagName === 'link' && inlineStylesheet) {
                var stylesheet = Array.from(doc.styleSheets).find(function (s) {
                    return s.href === n.href;
                });
                var cssText = null;
                if (stylesheet) {
                    cssText = getCssRulesString(stylesheet);
                }
                if (cssText) {
                    delete attributes_1.rel;
                    delete attributes_1.href;
                    attributes_1._cssText = absoluteToStylesheet(cssText, stylesheet.href);
                }
            }
            if (tagName === 'style' &&
                n.sheet &&
                !(n.innerText ||
                    n.textContent ||
                    '').trim().length) {
                var cssText = getCssRulesString(n.sheet);
                if (cssText) {
                    attributes_1._cssText = absoluteToStylesheet(cssText, getHref());
                }
            }
            if (tagName === 'input' ||
                tagName === 'textarea' ||
                tagName === 'select') {
                var value = n.value;
                if (attributes_1.type !== 'radio' &&
                    attributes_1.type !== 'checkbox' &&
                    attributes_1.type !== 'submit' &&
                    attributes_1.type !== 'button' &&
                    value) {
                    attributes_1.value = maskInputValue({
                        type: attributes_1.type,
                        tagName: tagName,
                        value: value,
                        maskInputOptions: maskInputOptions,
                        maskInputFn: maskInputFn
                    });
                }
                else if (n.checked) {
                    attributes_1.checked = n.checked;
                }
            }
            if (tagName === 'option') {
                if (n.selected && !maskInputOptions['select']) {
                    attributes_1.selected = true;
                }
                else {
                    delete attributes_1.selected;
                }
            }
            if (tagName === 'canvas' && recordCanvas) {
                if (n.__context === '2d') {
                    if (!is2DCanvasBlank(n)) {
                        attributes_1.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    }
                }
                else if (!('__context' in n)) {
                    var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    var blankCanvas = document.createElement('canvas');
                    blankCanvas.width = n.width;
                    blankCanvas.height = n.height;
                    var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    if (canvasDataURL !== blankCanvasDataURL) {
                        attributes_1.rr_dataURL = canvasDataURL;
                    }
                }
            }
            if (tagName === 'img' && inlineImages) {
                if (!canvasService) {
                    canvasService = doc.createElement('canvas');
                    canvasCtx = canvasService.getContext('2d');
                }
                var image_1 = n;
                var oldValue_1 = image_1.crossOrigin;
                image_1.crossOrigin = 'anonymous';
                var recordInlineImage = function () {
                    try {
                        canvasService.width = image_1.naturalWidth;
                        canvasService.height = image_1.naturalHeight;
                        canvasCtx.drawImage(image_1, 0, 0);
                        attributes_1.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    }
                    catch (err) {
                        console.warn("Cannot inline img src=" + image_1.currentSrc + "! Error: " + err);
                    }
                    oldValue_1
                        ? (attributes_1.crossOrigin = oldValue_1)
                        : delete attributes_1.crossOrigin;
                };
                if (image_1.complete && image_1.naturalWidth !== 0)
                    recordInlineImage();
                else
                    image_1.onload = recordInlineImage;
            }
            if (tagName === 'audio' || tagName === 'video') {
                attributes_1.rr_mediaState = n.paused
                    ? 'paused'
                    : 'played';
                attributes_1.rr_mediaCurrentTime = n.currentTime;
            }
            if (n.scrollLeft) {
                attributes_1.rr_scrollLeft = n.scrollLeft;
            }
            if (n.scrollTop) {
                attributes_1.rr_scrollTop = n.scrollTop;
            }
            if (needBlock) {
                var _f = n.getBoundingClientRect(), width = _f.width, height = _f.height;
                attributes_1 = {
                    "class": attributes_1["class"],
                    rr_width: width + "px",
                    rr_height: height + "px"
                };
            }
            if (tagName === 'iframe' && !keepIframeSrcFn(attributes_1.src)) {
                if (!n.contentDocument) {
                    attributes_1.rr_src = attributes_1.src;
                }
                delete attributes_1.src;
            }
            return {
                type: NodeType.Element,
                tagName: tagName,
                attributes: attributes_1,
                childNodes: [],
                isSVG: isSVGElement(n) || undefined,
                needBlock: needBlock,
                rootId: rootId
            };
        case n.TEXT_NODE:
            var parentTagName = n.parentNode && n.parentNode.tagName;
            var textContent = n.textContent;
            var isStyle = parentTagName === 'STYLE' ? true : undefined;
            var isScript = parentTagName === 'SCRIPT' ? true : undefined;
            if (isStyle && textContent) {
                try {
                    if (n.nextSibling || n.previousSibling) {
                    }
                    else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                        textContent = stringifyStyleSheet(n.parentNode.sheet);
                    }
                }
                catch (err) {
                    console.warn("Cannot get CSS styles from text's parentNode. Error: " + err, n);
                }
                textContent = absoluteToStylesheet(textContent, getHref());
            }
            if (isScript) {
                textContent = 'SCRIPT_PLACEHOLDER';
            }
            if (!isStyle &&
                !isScript &&
                needMaskingText(n, maskTextClass, maskTextSelector) &&
                textContent) {
                textContent = maskTextFn
                    ? maskTextFn(textContent)
                    : textContent.replace(/[\S]/g, '*');
            }
            return {
                type: NodeType.Text,
                textContent: textContent || '',
                isStyle: isStyle,
                rootId: rootId
            };
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId: rootId
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId: rootId
            };
        default:
            return false;
    }
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'preload' &&
                    sn.attributes.as === 'script') ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'prefetch' &&
                    typeof sn.attributes.href === 'string' &&
                    sn.attributes.href.endsWith('.js')))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    var doc = options.doc, map = options.map, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.inlineStylesheet, inlineStylesheet = _b === void 0 ? true : _b, _c = options.maskInputOptions, maskInputOptions = _c === void 0 ? {} : _c, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, slimDOMOptions = options.slimDOMOptions, _d = options.dataURLOptions, dataURLOptions = _d === void 0 ? {} : _d, _e = options.inlineImages, inlineImages = _e === void 0 ? false : _e, _f = options.recordCanvas, recordCanvas = _f === void 0 ? false : _f, onSerialize = options.onSerialize, onIframeLoad = options.onIframeLoad, _g = options.iframeLoadTimeout, iframeLoadTimeout = _g === void 0 ? 5000 : _g, _h = options.keepIframeSrcFn, keepIframeSrcFn = _h === void 0 ? function () { return false; } : _h;
    var _j = options.preserveWhiteSpace, preserveWhiteSpace = _j === void 0 ? true : _j;
    var _serializedNode = serializeNode(n, {
        doc: doc,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        keepIframeSrcFn: keepIframeSrcFn
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    var id;
    if ('__sn' in n) {
        id = n.__sn.id;
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    var serializedNode = Object.assign(_serializedNode, { id: id });
    n.__sn = serializedNode;
    if (id === IGNORED_NODE) {
        return null;
    }
    map[id] = n;
    if (onSerialize) {
        onSerialize(n);
    }
    var recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
        if (n.shadowRoot)
            serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            _serializedNode.type === NodeType.Element &&
            _serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        var bypassOptions = {
            doc: doc,
            map: map,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: skipChild,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn
        };
        for (var _i = 0, _k = Array.from(n.childNodes); _i < _k.length; _i++) {
            var childN = _k[_i];
            var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
            if (serializedChildNode) {
                serializedNode.childNodes.push(serializedChildNode);
            }
        }
        if (isElement(n) && n.shadowRoot) {
            for (var _l = 0, _m = Array.from(n.shadowRoot.childNodes); _l < _m.length; _l++) {
                var childN = _m[_l];
                var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    serializedChildNode.isShadow = true;
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode && isShadowRoot(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, function () {
            var iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                var serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    map: map,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    var _a = options || {}, _b = _a.blockClass, blockClass = _b === void 0 ? 'rr-block' : _b, _c = _a.blockSelector, blockSelector = _c === void 0 ? null : _c, _d = _a.maskTextClass, maskTextClass = _d === void 0 ? 'rr-mask' : _d, _e = _a.maskTextSelector, maskTextSelector = _e === void 0 ? null : _e, _f = _a.inlineStylesheet, inlineStylesheet = _f === void 0 ? true : _f, _g = _a.inlineImages, inlineImages = _g === void 0 ? false : _g, _h = _a.recordCanvas, recordCanvas = _h === void 0 ? false : _h, _j = _a.maskAllInputs, maskAllInputs = _j === void 0 ? false : _j, maskTextFn = _a.maskTextFn, maskInputFn = _a.maskInputFn, _k = _a.slimDOM, slimDOM = _k === void 0 ? false : _k, dataURLOptions = _a.dataURLOptions, preserveWhiteSpace = _a.preserveWhiteSpace, onSerialize = _a.onSerialize, onIframeLoad = _a.onIframeLoad, iframeLoadTimeout = _a.iframeLoadTimeout, _l = _a.keepIframeSrcFn, keepIframeSrcFn = _l === void 0 ? function () { return false; } : _l;
    var idNodeMap = {};
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true
        }
        : maskAllInputs === false
            ? {
                password: true
            }
            : maskAllInputs;
    var slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return [
        serializeNodeWithId(n, {
            doc: n,
            map: idNodeMap,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: false,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn
        }),
        idNodeMap,
    ];
}

var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options) {
    if (options === void 0) { options = {}; }
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
        var lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        var i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        var start = { line: lineno, column: column };
        return function (node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    var Position = (function () {
        function Position(start) {
            this.start = start;
            this.end = { line: lineno, column: column };
            this.source = options.source;
        }
        return Position;
    }());
    Position.prototype.content = css;
    var errorsList = [];
    function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        var rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList
            }
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        var node;
        var rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node !== false) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        var m = re.exec(css);
        if (!m) {
            return;
        }
        var str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules) {
        if (rules === void 0) { rules = []; }
        var c;
        while ((c = comment())) {
            if (c !== false) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        var pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        var i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str
        });
    }
    function selector() {
        var m = match(/^([^{]+)/);
        if (!m) {
            return;
        }
        return trim(m[0])
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
            return m.replace(/,/g, '\u200C');
        })
            .split(/\s*(?![^(]*\)),\s*/)
            .map(function (s) {
            return s.replace(/\u200C/g, ',');
        });
    }
    function declaration() {
        var pos = position();
        var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        var prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error("property missing ':'");
        }
        var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        var ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : ''
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        var decls = [];
        if (!open()) {
            return error("missing '{'");
        }
        comments(decls);
        var decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error("missing '}'");
        }
        return decls;
    }
    function keyframe() {
        var m;
        var vals = [];
        var pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations()
        });
    }
    function atkeyframes() {
        var pos = position();
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        var vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        var name = m[1];
        if (!open()) {
            return error("@keyframes missing '{'");
        }
        var frame;
        var frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error("@keyframes missing '}'");
        }
        return pos({
            type: 'keyframes',
            name: name,
            vendor: vendor,
            keyframes: frames
        });
    }
    function atsupports() {
        var pos = position();
        var m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        var supports = trim(m[1]);
        if (!open()) {
            return error("@supports missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@supports missing '}'");
        }
        return pos({
            type: 'supports',
            supports: supports,
            rules: style
        });
    }
    function athost() {
        var pos = position();
        var m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@host missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@host missing '}'");
        }
        return pos({
            type: 'host',
            rules: style
        });
    }
    function atmedia() {
        var pos = position();
        var m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        var media = trim(m[1]);
        if (!open()) {
            return error("@media missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@media missing '}'");
        }
        return pos({
            type: 'media',
            media: media,
            rules: style
        });
    }
    function atcustommedia() {
        var pos = position();
        var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2])
        });
    }
    function atpage() {
        var pos = position();
        var m = match(/^@page */);
        if (!m) {
            return;
        }
        var sel = selector() || [];
        if (!open()) {
            return error("@page missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@page missing '}'");
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls
        });
    }
    function atdocument() {
        var pos = position();
        var m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        var vendor = trim(m[1]);
        var doc = trim(m[2]);
        if (!open()) {
            return error("@document missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@document missing '}'");
        }
        return pos({
            type: 'document',
            document: doc,
            vendor: vendor,
            rules: style
        });
    }
    function atfontface() {
        var pos = position();
        var m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@font-face missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@font-face missing '}'");
        }
        return pos({
            type: 'font-face',
            declarations: decls
        });
    }
    var atimport = _compileAtrule('import');
    var atcharset = _compileAtrule('charset');
    var atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        var re = new RegExp('^@' + name + '\\s*([^;]+);');
        return function () {
            var pos = position();
            var m = match(re);
            if (!m) {
                return;
            }
            var ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        var pos = position();
        var sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations()
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    var isNode = obj && typeof obj.type === 'string';
    var childParent = isNode ? obj : parent;
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var k = _a[_i];
        var value = obj[k];
        if (Array.isArray(value)) {
            value.forEach(function (v) {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null
        });
    }
    return obj;
}

var tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient'
};
function getTagName(n) {
    var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
var HOVER_SELECTOR = /([^\\]):hover/;
var HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function addHoverClass(cssText, cache) {
    var cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
    if (cachedStyle)
        return cachedStyle;
    var ast = parse(cssText, {
        silent: true
    });
    if (!ast.stylesheet) {
        return cssText;
    }
    var selectors = [];
    ast.stylesheet.rules.forEach(function (rule) {
        if ('selectors' in rule) {
            (rule.selectors || []).forEach(function (selector) {
                if (HOVER_SELECTOR.test(selector)) {
                    selectors.push(selector);
                }
            });
        }
    });
    if (selectors.length === 0) {
        return cssText;
    }
    var selectorMatcher = new RegExp(selectors
        .filter(function (selector, index) { return selectors.indexOf(selector) === index; })
        .sort(function (a, b) { return b.length - a.length; })
        .map(function (selector) {
        return escapeRegExp(selector);
    })
        .join('|'), 'g');
    var result = cssText.replace(selectorMatcher, function (selector) {
        var newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
        return selector + ", " + newSelector;
    });
    cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
    return result;
}
function createCache() {
    var stylesWithHoverClass = new Map();
    return {
        stylesWithHoverClass: stylesWithHoverClass
    };
}
function buildNode(n, options) {
    var doc = options.doc, hackCss = options.hackCss, cache = options.cache;
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
        case NodeType.Element:
            var tagName = getTagName(n);
            var node_1;
            if (n.isSVG) {
                node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                node_1 = doc.createElement(tagName);
            }
            var _loop_1 = function (name_1) {
                if (!n.attributes.hasOwnProperty(name_1)) {
                    return "continue";
                }
                var value = n.attributes[name_1];
                if (tagName === 'option' && name_1 === 'selected' && value === false) {
                    return "continue";
                }
                value =
                    typeof value === 'boolean' || typeof value === 'number' ? '' : value;
                if (!name_1.startsWith('rr_')) {
                    var isTextarea = tagName === 'textarea' && name_1 === 'value';
                    var isRemoteOrDynamicCss = tagName === 'style' && name_1 === '_cssText';
                    if (isRemoteOrDynamicCss && hackCss) {
                        value = addHoverClass(value, cache);
                    }
                    if (isTextarea || isRemoteOrDynamicCss) {
                        var child = doc.createTextNode(value);
                        for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
                            var c = _a[_i];
                            if (c.nodeType === node_1.TEXT_NODE) {
                                node_1.removeChild(c);
                            }
                        }
                        node_1.appendChild(child);
                        return "continue";
                    }
                    try {
                        if (n.isSVG && name_1 === 'xlink:href') {
                            node_1.setAttributeNS('http://www.w3.org/1999/xlink', name_1, value);
                        }
                        else if (name_1 === 'onload' ||
                            name_1 === 'onclick' ||
                            name_1.substring(0, 7) === 'onmouse') {
                            node_1.setAttribute('_' + name_1, value);
                        }
                        else if (tagName === 'meta' &&
                            n.attributes['http-equiv'] === 'Content-Security-Policy' &&
                            name_1 === 'content') {
                            node_1.setAttribute('csp-content', value);
                            return "continue";
                        }
                        else if (tagName === 'link' &&
                            n.attributes.rel === 'preload' &&
                            n.attributes.as === 'script') {
                        }
                        else if (tagName === 'link' &&
                            n.attributes.rel === 'prefetch' &&
                            typeof n.attributes.href === 'string' &&
                            n.attributes.href.endsWith('.js')) {
                        }
                        else if (tagName === 'img' &&
                            n.attributes.srcset &&
                            n.attributes.rr_dataURL) {
                            node_1.setAttribute('rrweb-original-srcset', n.attributes.srcset);
                        }
                        else {
                            node_1.setAttribute(name_1, value);
                        }
                    }
                    catch (error) {
                    }
                }
                else {
                    if (tagName === 'canvas' && name_1 === 'rr_dataURL') {
                        var image_1 = document.createElement('img');
                        image_1.src = value;
                        image_1.onload = function () {
                            var ctx = node_1.getContext('2d');
                            if (ctx) {
                                ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
                            }
                        };
                    }
                    else if (tagName === 'img' && name_1 === 'rr_dataURL') {
                        var image = node_1;
                        if (!image.currentSrc.startsWith('data:')) {
                            image.setAttribute('rrweb-original-src', n.attributes.src);
                            image.src = value;
                        }
                    }
                    if (name_1 === 'rr_width') {
                        node_1.style.width = value;
                    }
                    else if (name_1 === 'rr_height') {
                        node_1.style.height = value;
                    }
                    else if (name_1 === 'rr_mediaCurrentTime') {
                        node_1.currentTime = n.attributes
                            .rr_mediaCurrentTime;
                    }
                    else if (name_1 === 'rr_mediaState') {
                        switch (value) {
                            case 'played':
                                node_1
                                    .play()["catch"](function (e) { return console.warn('media playback error', e); });
                                break;
                            case 'paused':
                                node_1.pause();
                                break;
                        }
                    }
                }
            };
            for (var name_1 in n.attributes) {
                _loop_1(name_1);
            }
            if (n.isShadowHost) {
                if (!node_1.shadowRoot) {
                    node_1.attachShadow({ mode: 'open' });
                }
                else {
                    while (node_1.shadowRoot.firstChild) {
                        node_1.shadowRoot.removeChild(node_1.shadowRoot.firstChild);
                    }
                }
            }
            return node_1;
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && hackCss
                ? addHoverClass(n.textContent, cache)
                : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, options) {
    var doc = options.doc, map = options.map, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.hackCss, hackCss = _b === void 0 ? true : _b, afterAppend = options.afterAppend, cache = options.cache;
    var node = buildNode(n, { doc: doc, hackCss: hackCss, cache: cache });
    if (!node) {
        return null;
    }
    if (n.rootId) {
        console.assert(map[n.rootId] === doc, 'Target document should has the same root id.');
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        if (n.compatMode === 'BackCompat' &&
            n.childNodes &&
            n.childNodes[0].type !== NodeType.DocumentType) {
            if (n.childNodes[0].type === NodeType.Element &&
                'xmlns' in n.childNodes[0].attributes &&
                n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
            }
            else {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
            }
        }
        node = doc;
    }
    node.__sn = n;
    map[n.id] = node;
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        for (var _i = 0, _c = n.childNodes; _i < _c.length; _i++) {
            var childN = _c[_i];
            var childNode = buildNodeWithSN(childN, {
                doc: doc,
                map: map,
                skipChild: false,
                hackCss: hackCss,
                afterAppend: afterAppend,
                cache: cache
            });
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
                continue;
            }
            if (childN.isShadow && isElement(node) && node.shadowRoot) {
                node.shadowRoot.appendChild(childNode);
            }
            else {
                node.appendChild(childNode);
            }
            if (afterAppend) {
                afterAppend(childNode);
            }
        }
    }
    return node;
}
function visit(idNodeMap, onVisit) {
    function walk(node) {
        onVisit(node);
    }
    for (var key in idNodeMap) {
        if (idNodeMap[key]) {
            walk(idNodeMap[key]);
        }
    }
}
function handleScroll(node) {
    var n = node.__sn;
    if (n.type !== NodeType.Element) {
        return;
    }
    var el = node;
    for (var name_2 in n.attributes) {
        if (!(n.attributes.hasOwnProperty(name_2) && name_2.startsWith('rr_'))) {
            continue;
        }
        var value = n.attributes[name_2];
        if (name_2 === 'rr_scrollLeft') {
            el.scrollLeft = value;
        }
        if (name_2 === 'rr_scrollTop') {
            el.scrollTop = value;
        }
    }
}
function rebuild(n, options) {
    var doc = options.doc, onVisit = options.onVisit, _a = options.hackCss, hackCss = _a === void 0 ? true : _a, afterAppend = options.afterAppend, cache = options.cache;
    var idNodeMap = {};
    var node = buildNodeWithSN(n, {
        doc: doc,
        map: idNodeMap,
        skipChild: false,
        hackCss: hackCss,
        afterAppend: afterAppend,
        cache: cache
    });
    visit(idNodeMap, function (visitedNode) {
        if (onVisit) {
            onVisit(visitedNode);
        }
        handleScroll(visitedNode);
    });
    return [node, idNodeMap];
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js ***!
  \***************************************************************************/
/*! exports provided: __assign, __read, __rest, __spreadArray, __values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/entries/all.js ***!
  \***********************************************************************/
/*! exports provided: addCustomEvent, freezePage, pack, unpack, PLUGIN_NAME, getRecordConsolePlugin, getReplayConsolePlugin, record, EventType, IncrementalSource, MouseInteractions, ReplayerEvents, Replayer, utils, mirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addCustomEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "freezePage", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["freezePage"]; });

/* harmony import */ var _packer_pack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packer/pack.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return _packer_pack_js__WEBPACK_IMPORTED_MODULE_1__["pack"]; });

/* harmony import */ var _packer_unpack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../packer/unpack.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return _packer_unpack_js__WEBPACK_IMPORTED_MODULE_2__["unpack"]; });

/* harmony import */ var _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugins/console/record/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__["PLUGIN_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRecordConsolePlugin", function() { return _plugins_console_record_index_js__WEBPACK_IMPORTED_MODULE_3__["getRecordConsolePlugin"]; });

/* harmony import */ var _plugins_console_replay_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/console/replay/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getReplayConsolePlugin", function() { return _plugins_console_replay_index_js__WEBPACK_IMPORTED_MODULE_4__["getReplayConsolePlugin"]; });

/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../record/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _record_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return _types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"]; });

/* harmony import */ var _replay_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../replay/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return _replay_index_js__WEBPACK_IMPORTED_MODULE_7__["Replayer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_8__["_mirror"]; });














/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/index.js ***!
  \*****************************************************************/
/*! exports provided: record, Replayer, utils, mirror, EventType, IncrementalSource, MouseInteractions, ReplayerEvents, addCustomEvent, freezePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return addCustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freezePage", function() { return freezePage; });
/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "record", function() { return _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _replay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replay/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return _replay_index_js__WEBPACK_IMPORTED_MODULE_1__["Replayer"]; });

/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return _utils_js__WEBPACK_IMPORTED_MODULE_2__["_mirror"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["EventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["MouseInteractions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["ReplayerEvents"]; });









var addCustomEvent = _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].addCustomEvent;
var freezePage = _record_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezePage;




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js ***!
  \***********************************************************************/
/*! exports provided: MARK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK", function() { return MARK; });
var MARK = 'v1';




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/pack.js ***!
  \***********************************************************************/
/*! exports provided: pack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return pack; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ext/fflate/esm/browser.js */ "./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js");




var pack = function (event) {
    var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, event), { v: _base_js__WEBPACK_IMPORTED_MODULE_2__["MARK"] });
    return Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["strFromU8"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["zlibSync"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_1__["strToU8"])(JSON.stringify(_e))), true);
};




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/unpack.js ***!
  \*************************************************************************/
/*! exports provided: unpack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return unpack; });
/* harmony import */ var _ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/fflate/esm/browser.js */ "./node_modules/rrweb/es/rrweb/ext/fflate/esm/browser.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/packer/base.js");



var unpack = function (raw) {
    if (typeof raw !== 'string') {
        return raw;
    }
    try {
        var e = JSON.parse(raw);
        if (e.timestamp) {
            return e;
        }
    }
    catch (error) {
    }
    try {
        var e = JSON.parse(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strFromU8"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["unzlibSync"])(Object(_ext_fflate_esm_browser_js__WEBPACK_IMPORTED_MODULE_0__["strToU8"])(raw, true))));
        if (e.v === _base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"]) {
            return e;
        }
        throw new Error("These events were packed with packer ".concat(e.v, " which is incompatible with current packer ").concat(_base_js__WEBPACK_IMPORTED_MODULE_1__["MARK"], "."));
    }
    catch (error) {
        console.error(error);
        throw new Error('Unknown data format.');
    }
};




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js ***!
  \*****************************************************************************************************/
/*! exports provided: ErrorStackParser, StackFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStackParser", function() { return ErrorStackParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackFrame", function() { return StackFrame; });
var StackFrame = (function () {
    function StackFrame(obj) {
        this.fileName = obj.fileName || '';
        this.functionName = obj.functionName || '';
        this.lineNumber = obj.lineNumber;
        this.columnNumber = obj.columnNumber;
    }
    StackFrame.prototype.toString = function () {
        var lineNumber = this.lineNumber || '';
        var columnNumber = this.columnNumber || '';
        if (this.functionName) {
            return (this.functionName +
                ' (' +
                this.fileName +
                ':' +
                lineNumber +
                ':' +
                columnNumber +
                ')');
        }
        return this.fileName + ':' + lineNumber + ':' + columnNumber;
    };
    return StackFrame;
}());
var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
var ErrorStackParser = {
    parse: function (error) {
        if (!error) {
            return [];
        }
        if (typeof error.stacktrace !== 'undefined' ||
            typeof error['opera#sourceloc'] !== 'undefined') {
            return this.parseOpera(error);
        }
        else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
            return this.parseV8OrIE(error);
        }
        else if (error.stack) {
            return this.parseFFOrSafari(error);
        }
        else {
            throw new Error('Cannot parse given Error object');
        }
    },
    extractLocation: function (urlLike) {
        if (urlLike.indexOf(':') === -1) {
            return [urlLike];
        }
        var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
        var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
        if (!parts)
            throw new Error("Cannot parse given url: ".concat(urlLike));
        return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function (error) {
        var filtered = error.stack.split('\n').filter(function (line) {
            return !!line.match(CHROME_IE_STACK_REGEXP);
        }, this);
        return filtered.map(function (line) {
            if (line.indexOf('(eval ') > -1) {
                line = line
                    .replace(/eval code/g, 'eval')
                    .replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
            }
            var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(');
            var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
            sanitizedLine = location
                ? sanitizedLine.replace(location[0], '')
                : sanitizedLine;
            var tokens = sanitizedLine.split(/\s+/).slice(1);
            var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
            var functionName = tokens.join(' ') || undefined;
            var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1
                ? undefined
                : locationParts[0];
            return new StackFrame({
                functionName: functionName,
                fileName: fileName,
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
            });
        }, this);
    },
    parseFFOrSafari: function (error) {
        var filtered = error.stack.split('\n').filter(function (line) {
            return !line.match(SAFARI_NATIVE_CODE_REGEXP);
        }, this);
        return filtered.map(function (line) {
            if (line.indexOf(' > eval') > -1) {
                line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
            }
            if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                return new StackFrame({
                    functionName: line,
                });
            }
            else {
                var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                var matches = line.match(functionNameRegex);
                var functionName = matches && matches[1] ? matches[1] : undefined;
                var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
                return new StackFrame({
                    functionName: functionName,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                });
            }
        }, this);
    },
    parseOpera: function (e) {
        if (!e.stacktrace ||
            (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
            return this.parseOpera9(e);
        }
        else if (!e.stack) {
            return this.parseOpera10(e);
        }
        else {
            return this.parseOpera11(e);
        }
    },
    parseOpera9: function (e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
        var lines = e.message.split('\n');
        var result = [];
        for (var i = 2, len = lines.length; i < len; i += 2) {
            var match = lineRE.exec(lines[i]);
            if (match) {
                result.push(new StackFrame({
                    fileName: match[2],
                    lineNumber: parseFloat(match[1]),
                }));
            }
        }
        return result;
    },
    parseOpera10: function (e) {
        var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var lines = e.stacktrace.split('\n');
        var result = [];
        for (var i = 0, len = lines.length; i < len; i += 2) {
            var match = lineRE.exec(lines[i]);
            if (match) {
                result.push(new StackFrame({
                    functionName: match[3] || undefined,
                    fileName: match[2],
                    lineNumber: parseFloat(match[1]),
                }));
            }
        }
        return result;
    },
    parseOpera11: function (error) {
        var filtered = error.stack.split('\n').filter(function (line) {
            return (!!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
                !line.match(/^Error created at/));
        }, this);
        return filtered.map(function (line) {
            var tokens = line.split('@');
            var locationParts = this.extractLocation(tokens.pop());
            var functionCall = tokens.shift() || '';
            var functionName = functionCall
                .replace(/<anonymous function(: (\w+))?>/, '$2')
                .replace(/\([^)]*\)/g, '') || undefined;
            return new StackFrame({
                functionName: functionName,
                fileName: locationParts[0],
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
            });
        }, this);
    },
};




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js ***!
  \****************************************************************************************/
/*! exports provided: PLUGIN_NAME, getRecordConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAME", function() { return PLUGIN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordConsolePlugin", function() { return getRecordConsolePlugin; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-stack-parser.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/error-stack-parser.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js");





var defaultLogOptions = {
    level: [
        'assert',
        'clear',
        'count',
        'countReset',
        'debug',
        'dir',
        'dirxml',
        'error',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'table',
        'time',
        'timeEnd',
        'timeLog',
        'trace',
        'warn',
    ],
    lengthThreshold: 1000,
    logger: 'console',
};
function initLogObserver(cb, win, logOptions) {
    var e_1, _a;
    var loggerType = logOptions.logger;
    if (!loggerType) {
        return function () { };
    }
    var logger;
    if (typeof loggerType === 'string') {
        logger = win[loggerType];
    }
    else {
        logger = loggerType;
    }
    var logCount = 0;
    var cancelHandlers = [];
    if (logOptions.level.includes('error')) {
        if (window) {
            var errorHandler_1 = function (event) {
                var message = event.message, error = event.error;
                var trace = _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_2__["ErrorStackParser"].parse(error).map(function (stackFrame) { return stackFrame.toString(); });
                var payload = [Object(_stringify_js__WEBPACK_IMPORTED_MODULE_3__["stringify"])(message, logOptions.stringifyOptions)];
                cb({
                    level: 'error',
                    trace: trace,
                    payload: payload,
                });
            };
            window.addEventListener('error', errorHandler_1);
            cancelHandlers.push(function () {
                if (window)
                    window.removeEventListener('error', errorHandler_1);
            });
        }
    }
    try {
        for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(logOptions.level), _c = _b.next(); !_c.done; _c = _b.next()) {
            var levelType = _c.value;
            cancelHandlers.push(replace(logger, levelType));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        cancelHandlers.forEach(function (h) { return h(); });
    };
    function replace(_logger, level) {
        var _this = this;
        if (!_logger[level]) {
            return function () { };
        }
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(_logger, level, function (original) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                original.apply(_this, args);
                try {
                    var trace = _error_stack_parser_js__WEBPACK_IMPORTED_MODULE_2__["ErrorStackParser"].parse(new Error())
                        .map(function (stackFrame) { return stackFrame.toString(); })
                        .splice(1);
                    var payload = args.map(function (s) {
                        return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_3__["stringify"])(s, logOptions.stringifyOptions);
                    });
                    logCount++;
                    if (logCount < logOptions.lengthThreshold) {
                        cb({
                            level: level,
                            trace: trace,
                            payload: payload,
                        });
                    }
                    else if (logCount === logOptions.lengthThreshold) {
                        cb({
                            level: 'warn',
                            trace: [],
                            payload: [
                                Object(_stringify_js__WEBPACK_IMPORTED_MODULE_3__["stringify"])('The number of log records reached the threshold.'),
                            ],
                        });
                    }
                }
                catch (error) {
                    original.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(['rrweb logger error:', error], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
                }
            };
        });
    }
}
var PLUGIN_NAME = 'rrweb/console@1';
var getRecordConsolePlugin = function (options) { return ({
    name: PLUGIN_NAME,
    observer: initLogObserver,
    options: options
        ? Object.assign({}, defaultLogOptions, options)
        : defaultLogOptions,
}); };




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/stringify.js ***!
  \********************************************************************************************/
/*! exports provided: stringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");


function pathToSelector(node) {
    if (!node || !node.outerHTML) {
        return '';
    }
    var path = '';
    while (node.parentElement) {
        var name_1 = node.localName;
        if (!name_1) {
            break;
        }
        name_1 = name_1.toLowerCase();
        var parent_1 = node.parentElement;
        var domSiblings = [];
        if (parent_1.children && parent_1.children.length > 0) {
            for (var i = 0; i < parent_1.children.length; i++) {
                var sibling = parent_1.children[i];
                if (sibling.localName && sibling.localName.toLowerCase) {
                    if (sibling.localName.toLowerCase() === name_1) {
                        domSiblings.push(sibling);
                    }
                }
            }
        }
        if (domSiblings.length > 1) {
            name_1 += ':eq(' + domSiblings.indexOf(node) + ')';
        }
        path = name_1 + (path ? '>' + path : '');
        node = parent_1;
    }
    return path;
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
function isObjTooDeep(obj, limit) {
    var e_1, _a;
    if (limit === 0) {
        return true;
    }
    var keys = Object.keys(obj);
    try {
        for (var keys_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            if (isObject(obj[key]) && isObjTooDeep(obj[key], limit - 1)) {
                return true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
function stringify(obj, stringifyOptions) {
    var options = {
        numOfKeysLimit: 50,
        depthOfLimit: 4,
    };
    Object.assign(options, stringifyOptions);
    var stack = [];
    var keys = [];
    return JSON.stringify(obj, function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value)) {
                if (stack[0] === value) {
                    value = '[Circular ~]';
                }
                else {
                    value =
                        '[Circular ~.' +
                            keys.slice(0, stack.indexOf(value)).join('.') +
                            ']';
                }
            }
        }
        else {
            stack.push(value);
        }
        if (value === null || value === undefined) {
            return value;
        }
        if (shouldIgnore(value)) {
            return toString(value);
        }
        if (value instanceof Event) {
            var eventResult = {};
            for (var eventKey in value) {
                var eventValue = value[eventKey];
                if (Array.isArray(eventValue)) {
                    eventResult[eventKey] = pathToSelector(eventValue.length ? eventValue[0] : null);
                }
                else {
                    eventResult[eventKey] = eventValue;
                }
            }
            return eventResult;
        }
        else if (value instanceof Node) {
            if (value instanceof HTMLElement) {
                return value ? value.outerHTML : '';
            }
            return value.nodeName;
        }
        else if (value instanceof Error) {
            return value.stack
                ? value.stack + '\nEnd of stack for Error object'
                : value.name + ': ' + value.message;
        }
        return value;
    });
    function shouldIgnore(_obj) {
        if (isObject(_obj) && Object.keys(_obj).length > options.numOfKeysLimit) {
            return true;
        }
        if (typeof _obj === 'function') {
            return true;
        }
        if (isObject(_obj) && isObjTooDeep(_obj, options.depthOfLimit)) {
            return true;
        }
        return false;
    }
    function toString(_obj) {
        var str = _obj.toString();
        if (options.stringLengthLimit && str.length > options.stringLengthLimit) {
            str = "".concat(str.slice(0, options.stringLengthLimit), "...");
        }
        return str;
    }
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/replay/index.js ***!
  \****************************************************************************************/
/*! exports provided: getReplayConsolePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReplayConsolePlugin", function() { return getReplayConsolePlugin; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _record_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../record/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/plugins/console/record/index.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");




var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
var defaultLogConfig = {
    level: [
        'assert',
        'clear',
        'count',
        'countReset',
        'debug',
        'dir',
        'dirxml',
        'error',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'table',
        'time',
        'timeEnd',
        'timeLog',
        'trace',
        'warn',
    ],
    replayLogger: undefined,
};
var LogReplayPlugin = (function () {
    function LogReplayPlugin(config) {
        this.config = Object.assign(defaultLogConfig, config);
    }
    LogReplayPlugin.prototype.getConsoleLogger = function () {
        var e_1, _a;
        var _this = this;
        var replayLogger = {};
        var _loop_1 = function (level) {
            if (level === 'trace') {
                replayLogger[level] = function (data) {
                    var logger = console.log[ORIGINAL_ATTRIBUTE_NAME]
                        ? console.log[ORIGINAL_ATTRIBUTE_NAME]
                        : console.log;
                    logger.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(data.payload.map(function (s) { return JSON.parse(s); })), false), [_this.formatMessage(data)], false));
                };
            }
            else {
                replayLogger[level] = function (data) {
                    var logger = console[level][ORIGINAL_ATTRIBUTE_NAME]
                        ? console[level][ORIGINAL_ATTRIBUTE_NAME]
                        : console[level];
                    logger.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(data.payload.map(function (s) { return JSON.parse(s); })), false), [_this.formatMessage(data)], false));
                };
            }
        };
        try {
            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.config.level), _c = _b.next(); !_c.done; _c = _b.next()) {
                var level = _c.value;
                _loop_1(level);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return replayLogger;
    };
    LogReplayPlugin.prototype.formatMessage = function (data) {
        if (data.trace.length === 0) {
            return '';
        }
        var stackPrefix = '\n\tat ';
        var result = stackPrefix;
        result += data.trace.join(stackPrefix);
        return result;
    };
    return LogReplayPlugin;
}());
var getReplayConsolePlugin = function (options) {
    var replayLogger = (options === null || options === void 0 ? void 0 : options.replayLogger) || new LogReplayPlugin(options).getConsoleLogger();
    return {
        handler: function (event, _isSync, context) {
            var logData = null;
            if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot &&
                event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].Log) {
                logData = event.data;
            }
            else if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Plugin &&
                event.data.plugin === _record_index_js__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_NAME"]) {
                logData = event.data.payload;
            }
            if (logData) {
                try {
                    if (typeof replayLogger[logData.level] === 'function') {
                        replayLogger[logData.level](logData);
                    }
                }
                catch (error) {
                    if (context.replayer.config.showWarning) {
                        console.warn(error);
                    }
                }
            }
        },
    };
};




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js ***!
  \*********************************************************************************/
/*! exports provided: IframeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeManager", function() { return IframeManager; });
var IframeManager = (function () {
    function IframeManager(options) {
        this.iframes = new WeakMap();
        this.mutationCb = options.mutationCb;
    }
    IframeManager.prototype.addIframe = function (iframeEl) {
        this.iframes.set(iframeEl, true);
    };
    IframeManager.prototype.addLoadListener = function (cb) {
        this.loadListener = cb;
    };
    IframeManager.prototype.attachIframe = function (iframeEl, childSn) {
        var _a;
        this.mutationCb({
            adds: [
                {
                    parentId: iframeEl.__sn.id,
                    nextId: null,
                    node: childSn,
                },
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: true,
        });
        (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
    };
    return IframeManager;
}());




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _iframe_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iframe-manager.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/iframe-manager.js");
/* harmony import */ var _shadow_dom_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shadow-dom-manager.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js");
/* harmony import */ var _observers_canvas_canvas_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers/canvas/canvas-manager.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js");









function wrapEvent(e) {
    return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, e), { timestamp: Date.now() });
}
var wrappedEmit;
var takeFullSnapshot;
var mirror = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["createMirror"])();
function record(options) {
    if (options === void 0) { options = {}; }
    var emit = options.emit, checkoutEveryNms = options.checkoutEveryNms, checkoutEveryNth = options.checkoutEveryNth, _a = options.blockClass, blockClass = _a === void 0 ? 'rr-block' : _a, _b = options.blockSelector, blockSelector = _b === void 0 ? null : _b, _c = options.ignoreClass, ignoreClass = _c === void 0 ? 'rr-ignore' : _c, _d = options.maskTextClass, maskTextClass = _d === void 0 ? 'rr-mask' : _d, _e = options.maskTextSelector, maskTextSelector = _e === void 0 ? null : _e, _f = options.inlineStylesheet, inlineStylesheet = _f === void 0 ? true : _f, maskAllInputs = options.maskAllInputs, _maskInputOptions = options.maskInputOptions, _slimDOMOptions = options.slimDOMOptions, maskInputFn = options.maskInputFn, maskTextFn = options.maskTextFn, hooks = options.hooks, packFn = options.packFn, _g = options.sampling, sampling = _g === void 0 ? {} : _g, mousemoveWait = options.mousemoveWait, _h = options.recordCanvas, recordCanvas = _h === void 0 ? false : _h, _j = options.userTriggeredOnInput, userTriggeredOnInput = _j === void 0 ? false : _j, _k = options.collectFonts, collectFonts = _k === void 0 ? false : _k, _l = options.inlineImages, inlineImages = _l === void 0 ? false : _l, plugins = options.plugins, _m = options.keepIframeSrcFn, keepIframeSrcFn = _m === void 0 ? function () { return false; } : _m;
    if (!emit) {
        throw new Error('emit function is required');
    }
    if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
        sampling.mousemove = mousemoveWait;
    }
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true,
        }
        : _maskInputOptions !== undefined
            ? _maskInputOptions
            : { password: true };
    var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all'
        ? {
            script: true,
            comment: true,
            headFavicon: true,
            headWhitespace: true,
            headMetaSocial: true,
            headMetaRobots: true,
            headMetaHttpEquiv: true,
            headMetaVerification: true,
            headMetaAuthorship: _slimDOMOptions === 'all',
            headMetaDescKeywords: _slimDOMOptions === 'all',
        }
        : _slimDOMOptions
            ? _slimDOMOptions
            : {};
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["polyfill"])();
    var lastFullSnapshotEvent;
    var incrementalSnapshotCount = 0;
    var eventProcessor = function (e) {
        var e_1, _a;
        try {
            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(plugins || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                if (plugin.eventProcessor) {
                    e = plugin.eventProcessor(e);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (packFn) {
            e = packFn(e);
        }
        return e;
    };
    wrappedEmit = function (e, isCheckout) {
        var _a;
        if (((_a = _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"][0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) &&
            e.type !== _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].FullSnapshot &&
            !(e.type === _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot &&
                e.data.source === _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Mutation)) {
            _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"].forEach(function (buf) { return buf.unfreeze(); });
        }
        emit(eventProcessor(e), isCheckout);
        if (e.type === _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].FullSnapshot) {
            lastFullSnapshotEvent = e;
            incrementalSnapshotCount = 0;
        }
        else if (e.type === _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot) {
            if (e.data.source === _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Mutation &&
                e.data.isAttachIframe) {
                return;
            }
            incrementalSnapshotCount++;
            var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
            var exceedTime = checkoutEveryNms &&
                e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
            if (exceedCount || exceedTime) {
                takeFullSnapshot(true);
            }
        }
    };
    var wrappedMutationEmit = function (m) {
        wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Mutation }, m),
        }));
    };
    var wrappedScrollEmit = function (p) {
        return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Scroll }, p),
        }));
    };
    var wrappedCanvasMutationEmit = function (p) {
        return wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
            data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].CanvasMutation }, p),
        }));
    };
    var iframeManager = new _iframe_manager_js__WEBPACK_IMPORTED_MODULE_5__["IframeManager"]({
        mutationCb: wrappedMutationEmit,
    });
    var canvasManager = new _observers_canvas_canvas_manager_js__WEBPACK_IMPORTED_MODULE_7__["CanvasManager"]({
        recordCanvas: recordCanvas,
        mutationCb: wrappedCanvasMutationEmit,
        win: window,
        blockClass: blockClass,
        mirror: mirror,
    });
    var shadowDomManager = new _shadow_dom_manager_js__WEBPACK_IMPORTED_MODULE_6__["ShadowDomManager"]({
        mutationCb: wrappedMutationEmit,
        scrollCb: wrappedScrollEmit,
        bypassOptions: {
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            recordCanvas: recordCanvas,
            inlineImages: inlineImages,
            sampling: sampling,
            slimDOMOptions: slimDOMOptions,
            iframeManager: iframeManager,
            canvasManager: canvasManager,
        },
        mirror: mirror,
    });
    takeFullSnapshot = function (isCheckout) {
        var _a, _b, _c, _d;
        if (isCheckout === void 0) { isCheckout = false; }
        wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].Meta,
            data: {
                href: window.location.href,
                width: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowWidth"])(),
                height: Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["getWindowHeight"])(),
            },
        }), isCheckout);
        _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"].forEach(function (buf) { return buf.lock(); });
        var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["snapshot"])(document, {
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            inlineStylesheet: inlineStylesheet,
            maskAllInputs: maskInputOptions,
            maskTextFn: maskTextFn,
            slimDOM: slimDOMOptions,
            recordCanvas: recordCanvas,
            inlineImages: inlineImages,
            onSerialize: function (n) {
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["isIframeINode"])(n)) {
                    iframeManager.addIframe(n);
                }
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["hasShadowRoot"])(n)) {
                    shadowDomManager.addShadowRoot(n.shadowRoot, document);
                }
            },
            onIframeLoad: function (iframe, childSn) {
                iframeManager.attachIframe(iframe, childSn);
                shadowDomManager.observeAttachShadow(iframe);
            },
            keepIframeSrcFn: keepIframeSrcFn,
        }), 2), node = _e[0], idNodeMap = _e[1];
        if (!node) {
            return console.warn('Failed to snapshot the document');
        }
        mirror.map = idNodeMap;
        wrappedEmit(wrapEvent({
            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].FullSnapshot,
            data: {
                node: node,
                initialOffset: {
                    left: window.pageXOffset !== undefined
                        ? window.pageXOffset
                        : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) ||
                            ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) ||
                            (document === null || document === void 0 ? void 0 : document.body.scrollLeft) ||
                            0,
                    top: window.pageYOffset !== undefined
                        ? window.pageYOffset
                        : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) ||
                            ((_d = (_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.scrollTop) ||
                            (document === null || document === void 0 ? void 0 : document.body.scrollTop) ||
                            0,
                },
            },
        }));
        _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"].forEach(function (buf) { return buf.unlock(); });
    };
    try {
        var handlers_1 = [];
        handlers_1.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('DOMContentLoaded', function () {
            wrappedEmit(wrapEvent({
                type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].DomContentLoaded,
                data: {},
            }));
        }));
        var observe_1 = function (doc) {
            var _a;
            return Object(_observer_js__WEBPACK_IMPORTED_MODULE_2__["initObservers"])({
                mutationCb: wrappedMutationEmit,
                mousemoveCb: function (positions, source) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
                        data: {
                            source: source,
                            positions: positions,
                        },
                    }));
                },
                mouseInteractionCb: function (d) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].MouseInteraction }, d),
                    }));
                },
                scrollCb: wrappedScrollEmit,
                viewportResizeCb: function (d) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].ViewportResize }, d),
                    }));
                },
                inputCb: function (v) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Input }, v),
                    }));
                },
                mediaInteractionCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].MediaInteraction }, p),
                    }));
                },
                styleSheetRuleCb: function (r) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].StyleSheetRule }, r),
                    }));
                },
                styleDeclarationCb: function (r) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].StyleDeclaration }, r),
                    }));
                },
                canvasMutationCb: wrappedCanvasMutationEmit,
                fontCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].IncrementalSnapshot,
                        data: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ source: _types_js__WEBPACK_IMPORTED_MODULE_4__["IncrementalSource"].Font }, p),
                    }));
                },
                blockClass: blockClass,
                ignoreClass: ignoreClass,
                maskTextClass: maskTextClass,
                maskTextSelector: maskTextSelector,
                maskInputOptions: maskInputOptions,
                inlineStylesheet: inlineStylesheet,
                sampling: sampling,
                recordCanvas: recordCanvas,
                inlineImages: inlineImages,
                userTriggeredOnInput: userTriggeredOnInput,
                collectFonts: collectFonts,
                doc: doc,
                maskInputFn: maskInputFn,
                maskTextFn: maskTextFn,
                blockSelector: blockSelector,
                slimDOMOptions: slimDOMOptions,
                mirror: mirror,
                iframeManager: iframeManager,
                shadowDomManager: shadowDomManager,
                canvasManager: canvasManager,
                plugins: ((_a = plugins === null || plugins === void 0 ? void 0 : plugins.filter(function (p) { return p.observer; })) === null || _a === void 0 ? void 0 : _a.map(function (p) { return ({
                    observer: p.observer,
                    options: p.options,
                    callback: function (payload) {
                        return wrappedEmit(wrapEvent({
                            type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].Plugin,
                            data: {
                                plugin: p.name,
                                payload: payload,
                            },
                        }));
                    },
                }); })) || [],
            }, hooks);
        };
        iframeManager.addLoadListener(function (iframeEl) {
            handlers_1.push(observe_1(iframeEl.contentDocument));
        });
        var init_1 = function () {
            takeFullSnapshot();
            handlers_1.push(observe_1(document));
        };
        if (document.readyState === 'interactive' ||
            document.readyState === 'complete') {
            init_1();
        }
        else {
            handlers_1.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["on"])('load', function () {
                wrappedEmit(wrapEvent({
                    type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].Load,
                    data: {},
                }));
                init_1();
            }, window));
        }
        return function () {
            handlers_1.forEach(function (h) { return h(); });
        };
    }
    catch (error) {
        console.warn(error);
    }
}
record.addCustomEvent = function (tag, payload) {
    if (!wrappedEmit) {
        throw new Error('please add custom event after start recording');
    }
    wrappedEmit(wrapEvent({
        type: _types_js__WEBPACK_IMPORTED_MODULE_4__["EventType"].Custom,
        data: {
            tag: tag,
            payload: payload,
        },
    }));
};
record.freezePage = function () {
    _observer_js__WEBPACK_IMPORTED_MODULE_2__["mutationBuffers"].forEach(function (buf) { return buf.freeze(); });
};
record.takeFullSnapshot = function (isCheckout) {
    if (!takeFullSnapshot) {
        throw new Error('please take full snapshot after start recording');
    }
    takeFullSnapshot(isCheckout);
};
record.mirror = mirror;

/* harmony default export */ __webpack_exports__["default"] = (record);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");




function isNodeInLinkedList(n) {
    return '__ln' in n;
}
var DoubleLinkedList = (function () {
    function DoubleLinkedList() {
        this.length = 0;
        this.head = null;
    }
    DoubleLinkedList.prototype.get = function (position) {
        if (position >= this.length) {
            throw new Error('Position outside of list range');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = (current === null || current === void 0 ? void 0 : current.next) || null;
        }
        return current;
    };
    DoubleLinkedList.prototype.addNode = function (n) {
        var node = {
            value: n,
            previous: null,
            next: null,
        };
        n.__ln = node;
        if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
            var current = n.previousSibling.__ln.next;
            node.next = current;
            node.previous = n.previousSibling.__ln;
            n.previousSibling.__ln.next = node;
            if (current) {
                current.previous = node;
            }
        }
        else if (n.nextSibling &&
            isNodeInLinkedList(n.nextSibling) &&
            n.nextSibling.__ln.previous) {
            var current = n.nextSibling.__ln.previous;
            node.previous = current;
            node.next = n.nextSibling.__ln;
            n.nextSibling.__ln.previous = node;
            if (current) {
                current.next = node;
            }
        }
        else {
            if (this.head) {
                this.head.previous = node;
            }
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    };
    DoubleLinkedList.prototype.removeNode = function (n) {
        var current = n.__ln;
        if (!this.head) {
            return;
        }
        if (!current.previous) {
            this.head = current.next;
            if (this.head) {
                this.head.previous = null;
            }
        }
        else {
            current.previous.next = current.next;
            if (current.next) {
                current.next.previous = current.previous;
            }
        }
        if (n.__ln) {
            delete n.__ln;
        }
        this.length--;
    };
    return DoubleLinkedList;
}());
var moveKey = function (id, parentId) { return "".concat(id, "@").concat(parentId); };
function isINode(n) {
    return '__sn' in n;
}
var MutationBuffer = (function () {
    function MutationBuffer() {
        var _this = this;
        this.frozen = false;
        this.locked = false;
        this.texts = [];
        this.attributes = [];
        this.removes = [];
        this.mapRemoves = [];
        this.movedMap = {};
        this.addedSet = new Set();
        this.movedSet = new Set();
        this.droppedSet = new Set();
        this.processMutations = function (mutations) {
            mutations.forEach(_this.processMutation);
            _this.emit();
        };
        this.emit = function () {
            var e_1, _a, e_2, _b;
            if (_this.frozen || _this.locked) {
                return;
            }
            var adds = [];
            var addList = new DoubleLinkedList();
            var getNextId = function (n) {
                var ns = n;
                var nextId = _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["IGNORED_NODE"];
                while (nextId === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["IGNORED_NODE"]) {
                    ns = ns && ns.nextSibling;
                    nextId = ns && _this.mirror.getId(ns);
                }
                return nextId;
            };
            var pushAdd = function (n) {
                var _a, _b, _c, _d, _e;
                var shadowHost = n.getRootNode
                    ? (_a = n.getRootNode()) === null || _a === void 0 ? void 0 : _a.host
                    : null;
                var rootShadowHost = shadowHost;
                while ((_c = (_b = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _b === void 0 ? void 0 : _b.call(rootShadowHost)) === null || _c === void 0 ? void 0 : _c.host)
                    rootShadowHost =
                        ((_e = (_d = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _d === void 0 ? void 0 : _d.call(rootShadowHost)) === null || _e === void 0 ? void 0 : _e.host) ||
                            null;
                var notInDoc = !_this.doc.contains(n) &&
                    (rootShadowHost === null || !_this.doc.contains(rootShadowHost));
                if (!n.parentNode || notInDoc) {
                    return;
                }
                var parentId = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(n.parentNode)
                    ? _this.mirror.getId(shadowHost)
                    : _this.mirror.getId(n.parentNode);
                var nextId = getNextId(n);
                if (parentId === -1 || nextId === -1) {
                    return addList.addNode(n);
                }
                var sn = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["serializeNodeWithId"])(n, {
                    doc: _this.doc,
                    map: _this.mirror.map,
                    blockClass: _this.blockClass,
                    blockSelector: _this.blockSelector,
                    maskTextClass: _this.maskTextClass,
                    maskTextSelector: _this.maskTextSelector,
                    skipChild: true,
                    inlineStylesheet: _this.inlineStylesheet,
                    maskInputOptions: _this.maskInputOptions,
                    maskTextFn: _this.maskTextFn,
                    maskInputFn: _this.maskInputFn,
                    slimDOMOptions: _this.slimDOMOptions,
                    recordCanvas: _this.recordCanvas,
                    inlineImages: _this.inlineImages,
                    onSerialize: function (currentN) {
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIframeINode"])(currentN)) {
                            _this.iframeManager.addIframe(currentN);
                        }
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hasShadowRoot"])(n)) {
                            _this.shadowDomManager.addShadowRoot(n.shadowRoot, document);
                        }
                    },
                    onIframeLoad: function (iframe, childSn) {
                        _this.iframeManager.attachIframe(iframe, childSn);
                        _this.shadowDomManager.observeAttachShadow(iframe);
                    },
                });
                if (sn) {
                    adds.push({
                        parentId: parentId,
                        nextId: nextId,
                        node: sn,
                    });
                }
            };
            while (_this.mapRemoves.length) {
                _this.mirror.removeNodeFromMap(_this.mapRemoves.shift());
            }
            try {
                for (var _c = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.movedSet), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var n = _d.value;
                    if (isParentRemoved(_this.removes, n, _this.mirror) &&
                        !_this.movedSet.has(n.parentNode)) {
                        continue;
                    }
                    pushAdd(n);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.addedSet), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var n = _f.value;
                    if (!isAncestorInSet(_this.droppedSet, n) &&
                        !isParentRemoved(_this.removes, n, _this.mirror)) {
                        pushAdd(n);
                    }
                    else if (isAncestorInSet(_this.movedSet, n)) {
                        pushAdd(n);
                    }
                    else {
                        _this.droppedSet.add(n);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var candidate = null;
            while (addList.length) {
                var node = null;
                if (candidate) {
                    var parentId = _this.mirror.getId(candidate.value.parentNode);
                    var nextId = getNextId(candidate.value);
                    if (parentId !== -1 && nextId !== -1) {
                        node = candidate;
                    }
                }
                if (!node) {
                    for (var index = addList.length - 1; index >= 0; index--) {
                        var _node = addList.get(index);
                        if (_node) {
                            var parentId = _this.mirror.getId(_node.value.parentNode);
                            var nextId = getNextId(_node.value);
                            if (parentId !== -1 && nextId !== -1) {
                                node = _node;
                                break;
                            }
                        }
                    }
                }
                if (!node) {
                    while (addList.head) {
                        addList.removeNode(addList.head.value);
                    }
                    break;
                }
                candidate = node.previous;
                addList.removeNode(node.value);
                pushAdd(node.value);
            }
            var payload = {
                texts: _this.texts
                    .map(function (text) { return ({
                    id: _this.mirror.getId(text.node),
                    value: text.value,
                }); })
                    .filter(function (text) { return _this.mirror.has(text.id); }),
                attributes: _this.attributes
                    .map(function (attribute) { return ({
                    id: _this.mirror.getId(attribute.node),
                    attributes: attribute.attributes,
                }); })
                    .filter(function (attribute) { return _this.mirror.has(attribute.id); }),
                removes: _this.removes,
                adds: adds,
            };
            if (!payload.texts.length &&
                !payload.attributes.length &&
                !payload.removes.length &&
                !payload.adds.length) {
                return;
            }
            _this.texts = [];
            _this.attributes = [];
            _this.removes = [];
            _this.addedSet = new Set();
            _this.movedSet = new Set();
            _this.droppedSet = new Set();
            _this.movedMap = {};
            _this.mutationCb(payload);
        };
        this.processMutation = function (m) {
            var e_3, _a, e_4, _b;
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(m.target)) {
                return;
            }
            switch (m.type) {
                case 'characterData': {
                    var value = m.target.textContent;
                    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) && value !== m.oldValue) {
                        _this.texts.push({
                            value: Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["needMaskingText"])(m.target, _this.maskTextClass, _this.maskTextSelector) && value
                                ? _this.maskTextFn
                                    ? _this.maskTextFn(value)
                                    : value.replace(/[\S]/g, '*')
                                : value,
                            node: m.target,
                        });
                    }
                    break;
                }
                case 'attributes': {
                    var target = m.target;
                    var value = m.target.getAttribute(m.attributeName);
                    if (m.attributeName === 'value') {
                        value = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["maskInputValue"])({
                            maskInputOptions: _this.maskInputOptions,
                            tagName: m.target.tagName,
                            type: m.target.getAttribute('type'),
                            value: value,
                            maskInputFn: _this.maskInputFn,
                        });
                    }
                    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) || value === m.oldValue) {
                        return;
                    }
                    var item = _this.attributes.find(function (a) { return a.node === m.target; });
                    if (!item) {
                        item = {
                            node: m.target,
                            attributes: {},
                        };
                        _this.attributes.push(item);
                    }
                    if (m.attributeName === 'style') {
                        var old = _this.doc.createElement('span');
                        if (m.oldValue) {
                            old.setAttribute('style', m.oldValue);
                        }
                        if (item.attributes.style === undefined ||
                            item.attributes.style === null) {
                            item.attributes.style = {};
                        }
                        var styleObj = item.attributes.style;
                        try {
                            for (var _c = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(target.style)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var pname = _d.value;
                                var newValue = target.style.getPropertyValue(pname);
                                var newPriority = target.style.getPropertyPriority(pname);
                                if (newValue !== old.style.getPropertyValue(pname) ||
                                    newPriority !== old.style.getPropertyPriority(pname)) {
                                    if (newPriority === '') {
                                        styleObj[pname] = newValue;
                                    }
                                    else {
                                        styleObj[pname] = [newValue, newPriority];
                                    }
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        try {
                            for (var _e = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(old.style)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var pname = _f.value;
                                if (target.style.getPropertyValue(pname) === '') {
                                    styleObj[pname] = false;
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                    else {
                        item.attributes[m.attributeName] = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["transformAttribute"])(_this.doc, m.target.tagName, m.attributeName, value);
                    }
                    break;
                }
                case 'childList': {
                    m.addedNodes.forEach(function (n) { return _this.genAdds(n, m.target); });
                    m.removedNodes.forEach(function (n) {
                        var nodeId = _this.mirror.getId(n);
                        var parentId = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(m.target)
                            ? _this.mirror.getId(m.target.host)
                            : _this.mirror.getId(m.target);
                        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(m.target, _this.blockClass) || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(n)) {
                            return;
                        }
                        if (_this.addedSet.has(n)) {
                            deepDelete(_this.addedSet, n);
                            _this.droppedSet.add(n);
                        }
                        else if (_this.addedSet.has(m.target) && nodeId === -1) ;
                        else if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isAncestorRemoved"])(m.target, _this.mirror)) ;
                        else if (_this.movedSet.has(n) &&
                            _this.movedMap[moveKey(nodeId, parentId)]) {
                            deepDelete(_this.movedSet, n);
                        }
                        else {
                            _this.removes.push({
                                parentId: parentId,
                                id: nodeId,
                                isShadow: Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["isShadowRoot"])(m.target) ? true : undefined,
                            });
                        }
                        _this.mapRemoves.push(n);
                    });
                    break;
                }
            }
        };
        this.genAdds = function (n, target) {
            if (target && Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, _this.blockClass)) {
                return;
            }
            if (isINode(n)) {
                if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isIgnored"])(n)) {
                    return;
                }
                _this.movedSet.add(n);
                var targetId = null;
                if (target && isINode(target)) {
                    targetId = target.__sn.id;
                }
                if (targetId) {
                    _this.movedMap[moveKey(n.__sn.id, targetId)] = true;
                }
            }
            else {
                _this.addedSet.add(n);
                _this.droppedSet.delete(n);
            }
            if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(n, _this.blockClass))
                n.childNodes.forEach(function (childN) { return _this.genAdds(childN); });
        };
    }
    MutationBuffer.prototype.init = function (options) {
        var _this = this;
        [
            'mutationCb',
            'blockClass',
            'blockSelector',
            'maskTextClass',
            'maskTextSelector',
            'inlineStylesheet',
            'maskInputOptions',
            'maskTextFn',
            'maskInputFn',
            'recordCanvas',
            'inlineImages',
            'slimDOMOptions',
            'doc',
            'mirror',
            'iframeManager',
            'shadowDomManager',
            'canvasManager',
        ].forEach(function (key) {
            _this[key] = options[key];
        });
    };
    MutationBuffer.prototype.freeze = function () {
        this.frozen = true;
        this.canvasManager.freeze();
    };
    MutationBuffer.prototype.unfreeze = function () {
        this.frozen = false;
        this.canvasManager.unfreeze();
        this.emit();
    };
    MutationBuffer.prototype.isFrozen = function () {
        return this.frozen;
    };
    MutationBuffer.prototype.lock = function () {
        this.locked = true;
        this.canvasManager.lock();
    };
    MutationBuffer.prototype.unlock = function () {
        this.locked = false;
        this.canvasManager.unlock();
        this.emit();
    };
    MutationBuffer.prototype.reset = function () {
        this.shadowDomManager.reset();
        this.canvasManager.reset();
    };
    return MutationBuffer;
}());
function deepDelete(addsSet, n) {
    addsSet.delete(n);
    n.childNodes.forEach(function (childN) { return deepDelete(addsSet, childN); });
}
function isParentRemoved(removes, n, mirror) {
    var parentNode = n.parentNode;
    if (!parentNode) {
        return false;
    }
    var parentId = mirror.getId(parentNode);
    if (removes.some(function (r) { return r.id === parentId; })) {
        return true;
    }
    return isParentRemoved(removes, parentNode, mirror);
}
function isAncestorInSet(set, n) {
    var parentNode = n.parentNode;
    if (!parentNode) {
        return false;
    }
    if (set.has(parentNode)) {
        return true;
    }
    return isAncestorInSet(set, parentNode);
}

/* harmony default export */ __webpack_exports__["default"] = (MutationBuffer);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js ***!
  \***************************************************************************/
/*! exports provided: INPUT_TAGS, initMutationObserver, initObservers, initScrollObserver, mutationBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_TAGS", function() { return INPUT_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMutationObserver", function() { return initMutationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initObservers", function() { return initObservers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initScrollObserver", function() { return initScrollObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutationBuffers", function() { return mutationBuffers; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _mutation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutation.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/mutation.js");






var mutationBuffers = [];
var isCSSGroupingRuleSupported = typeof CSSGroupingRule !== 'undefined';
var isCSSMediaRuleSupported = typeof CSSMediaRule !== 'undefined';
var isCSSSupportsRuleSupported = typeof CSSSupportsRule !== 'undefined';
var isCSSConditionRuleSupported = typeof CSSConditionRule !== 'undefined';
function getEventTarget(event) {
    try {
        if ('composedPath' in event) {
            var path = event.composedPath();
            if (path.length) {
                return path[0];
            }
        }
        else if ('path' in event && event.path.length) {
            return event.path[0];
        }
        return event.target;
    }
    catch (_a) {
        return event.target;
    }
}
function initMutationObserver(options, rootEl) {
    var _a, _b;
    var mutationBuffer = new _mutation_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    mutationBuffers.push(mutationBuffer);
    mutationBuffer.init(options);
    var mutationObserverCtor = window.MutationObserver ||
        window.__rrMutationObserver;
    var angularZoneSymbol = (_b = (_a = window === null || window === void 0 ? void 0 : window.Zone) === null || _a === void 0 ? void 0 : _a.__symbol__) === null || _b === void 0 ? void 0 : _b.call(_a, 'MutationObserver');
    if (angularZoneSymbol &&
        window[angularZoneSymbol]) {
        mutationObserverCtor = window[angularZoneSymbol];
    }
    var observer = new mutationObserverCtor(mutationBuffer.processMutations.bind(mutationBuffer));
    observer.observe(rootEl, {
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        childList: true,
        subtree: true,
    });
    return observer;
}
function initMoveObserver(_a) {
    var mousemoveCb = _a.mousemoveCb, sampling = _a.sampling, doc = _a.doc, mirror = _a.mirror;
    if (sampling.mousemove === false) {
        return function () { };
    }
    var threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
    var callbackThreshold = typeof sampling.mousemoveCallback === 'number'
        ? sampling.mousemoveCallback
        : 500;
    var positions = [];
    var timeBaseline;
    var wrappedCb = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (source) {
        var totalOffset = Date.now() - timeBaseline;
        mousemoveCb(positions.map(function (p) {
            p.timeOffset -= totalOffset;
            return p;
        }), source);
        positions = [];
        timeBaseline = null;
    }, callbackThreshold);
    var updatePosition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (evt) {
        var target = getEventTarget(evt);
        var _a = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isTouchEvent"])(evt)
            ? evt.changedTouches[0]
            : evt, clientX = _a.clientX, clientY = _a.clientY;
        if (!timeBaseline) {
            timeBaseline = Date.now();
        }
        positions.push({
            x: clientX,
            y: clientY,
            id: mirror.getId(target),
            timeOffset: Date.now() - timeBaseline,
        });
        wrappedCb(typeof DragEvent !== 'undefined' && evt instanceof DragEvent
            ? _types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].Drag
            : evt instanceof MouseEvent
                ? _types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].MouseMove
                : _types_js__WEBPACK_IMPORTED_MODULE_3__["IncrementalSource"].TouchMove);
    }, threshold, {
        trailing: false,
    });
    var handlers = [
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('mousemove', updatePosition, doc),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('touchmove', updatePosition, doc),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('drag', updatePosition, doc),
    ];
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initMouseInteractionObserver(_a) {
    var mouseInteractionCb = _a.mouseInteractionCb, doc = _a.doc, mirror = _a.mirror, blockClass = _a.blockClass, sampling = _a.sampling;
    if (sampling.mouseInteraction === false) {
        return function () { };
    }
    var disableMap = sampling.mouseInteraction === true ||
        sampling.mouseInteraction === undefined
        ? {}
        : sampling.mouseInteraction;
    var handlers = [];
    var getHandler = function (eventKey) {
        return function (event) {
            var target = getEventTarget(event);
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, blockClass)) {
                return;
            }
            var e = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isTouchEvent"])(event) ? event.changedTouches[0] : event;
            if (!e) {
                return;
            }
            var id = mirror.getId(target);
            var clientX = e.clientX, clientY = e.clientY;
            mouseInteractionCb({
                type: _types_js__WEBPACK_IMPORTED_MODULE_3__["MouseInteractions"][eventKey],
                id: id,
                x: clientX,
                y: clientY,
            });
        };
    };
    Object.keys(_types_js__WEBPACK_IMPORTED_MODULE_3__["MouseInteractions"])
        .filter(function (key) {
        return Number.isNaN(Number(key)) &&
            !key.endsWith('_Departed') &&
            disableMap[key] !== false;
    })
        .forEach(function (eventKey) {
        var eventName = eventKey.toLowerCase();
        var handler = getHandler(eventKey);
        handlers.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])(eventName, handler, doc));
    });
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initScrollObserver(_a) {
    var scrollCb = _a.scrollCb, doc = _a.doc, mirror = _a.mirror, blockClass = _a.blockClass, sampling = _a.sampling;
    var updatePosition = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (evt) {
        var target = getEventTarget(evt);
        if (!target || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, blockClass)) {
            return;
        }
        var id = mirror.getId(target);
        if (target === doc) {
            var scrollEl = (doc.scrollingElement || doc.documentElement);
            scrollCb({
                id: id,
                x: scrollEl.scrollLeft,
                y: scrollEl.scrollTop,
            });
        }
        else {
            scrollCb({
                id: id,
                x: target.scrollLeft,
                y: target.scrollTop,
            });
        }
    }, sampling.scroll || 100);
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('scroll', updatePosition, doc);
}
function initViewportResizeObserver(_a) {
    var viewportResizeCb = _a.viewportResizeCb;
    var lastH = -1;
    var lastW = -1;
    var updateDimension = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function () {
        var height = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getWindowHeight"])();
        var width = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["getWindowWidth"])();
        if (lastH !== height || lastW !== width) {
            viewportResizeCb({
                width: Number(width),
                height: Number(height),
            });
            lastH = height;
            lastW = width;
        }
    }, 200);
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('resize', updateDimension, window);
}
function wrapEventWithUserTriggeredFlag(v, enable) {
    var value = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v);
    if (!enable)
        delete value.userTriggered;
    return value;
}
var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
var lastInputValueMap = new WeakMap();
function initInputObserver(_a) {
    var inputCb = _a.inputCb, doc = _a.doc, mirror = _a.mirror, blockClass = _a.blockClass, ignoreClass = _a.ignoreClass, maskInputOptions = _a.maskInputOptions, maskInputFn = _a.maskInputFn, sampling = _a.sampling, userTriggeredOnInput = _a.userTriggeredOnInput;
    function eventHandler(event) {
        var target = getEventTarget(event);
        var userTriggered = event.isTrusted;
        if (target && target.tagName === 'OPTION')
            target = target.parentElement;
        if (!target ||
            !target.tagName ||
            INPUT_TAGS.indexOf(target.tagName) < 0 ||
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, blockClass)) {
            return;
        }
        var type = target.type;
        if (target.classList.contains(ignoreClass)) {
            return;
        }
        var text = target.value;
        var isChecked = false;
        if (type === 'radio' || type === 'checkbox') {
            isChecked = target.checked;
        }
        else if (maskInputOptions[target.tagName.toLowerCase()] ||
            maskInputOptions[type]) {
            text = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["maskInputValue"])({
                maskInputOptions: maskInputOptions,
                tagName: target.tagName,
                type: type,
                value: text,
                maskInputFn: maskInputFn,
            });
        }
        cbWithDedup(target, wrapEventWithUserTriggeredFlag({ text: text, isChecked: isChecked, userTriggered: userTriggered }, userTriggeredOnInput));
        var name = target.name;
        if (type === 'radio' && name && isChecked) {
            doc
                .querySelectorAll("input[type=\"radio\"][name=\"".concat(name, "\"]"))
                .forEach(function (el) {
                if (el !== target) {
                    cbWithDedup(el, wrapEventWithUserTriggeredFlag({
                        text: el.value,
                        isChecked: !isChecked,
                        userTriggered: false,
                    }, userTriggeredOnInput));
                }
            });
        }
    }
    function cbWithDedup(target, v) {
        var lastInputValue = lastInputValueMap.get(target);
        if (!lastInputValue ||
            lastInputValue.text !== v.text ||
            lastInputValue.isChecked !== v.isChecked) {
            lastInputValueMap.set(target, v);
            var id = mirror.getId(target);
            inputCb(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v), { id: id }));
        }
    }
    var events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
    var handlers = events.map(function (eventName) { return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])(eventName, eventHandler, doc); });
    var propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
    var hookProperties = [
        [HTMLInputElement.prototype, 'value'],
        [HTMLInputElement.prototype, 'checked'],
        [HTMLSelectElement.prototype, 'value'],
        [HTMLTextAreaElement.prototype, 'value'],
        [HTMLSelectElement.prototype, 'selectedIndex'],
        [HTMLOptionElement.prototype, 'selected'],
    ];
    if (propertyDescriptor && propertyDescriptor.set) {
        handlers.push.apply(handlers, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(hookProperties.map(function (p) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hookSetter"])(p[0], p[1], {
                set: function () {
                    eventHandler({ target: this });
                },
            });
        })), false));
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function getNestedCSSRulePositions(rule) {
    var positions = [];
    function recurse(childRule, pos) {
        if ((isCSSGroupingRuleSupported &&
            childRule.parentRule instanceof CSSGroupingRule) ||
            (isCSSMediaRuleSupported &&
                childRule.parentRule instanceof CSSMediaRule) ||
            (isCSSSupportsRuleSupported &&
                childRule.parentRule instanceof CSSSupportsRule) ||
            (isCSSConditionRuleSupported &&
                childRule.parentRule instanceof CSSConditionRule)) {
            var rules = Array.from(childRule.parentRule.cssRules);
            var index = rules.indexOf(childRule);
            pos.unshift(index);
        }
        else {
            var rules = Array.from(childRule.parentStyleSheet.cssRules);
            var index = rules.indexOf(childRule);
            pos.unshift(index);
        }
        return pos;
    }
    return recurse(rule, positions);
}
function initStyleSheetObserver(_a, _b) {
    var styleSheetRuleCb = _a.styleSheetRuleCb, mirror = _a.mirror;
    var win = _b.win;
    var insertRule = win.CSSStyleSheet.prototype.insertRule;
    win.CSSStyleSheet.prototype.insertRule = function (rule, index) {
        var id = mirror.getId(this.ownerNode);
        if (id !== -1) {
            styleSheetRuleCb({
                id: id,
                adds: [{ rule: rule, index: index }],
            });
        }
        return insertRule.apply(this, arguments);
    };
    var deleteRule = win.CSSStyleSheet.prototype.deleteRule;
    win.CSSStyleSheet.prototype.deleteRule = function (index) {
        var id = mirror.getId(this.ownerNode);
        if (id !== -1) {
            styleSheetRuleCb({
                id: id,
                removes: [{ index: index }],
            });
        }
        return deleteRule.apply(this, arguments);
    };
    var supportedNestedCSSRuleTypes = {};
    if (isCSSGroupingRuleSupported) {
        supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
    }
    else {
        if (isCSSMediaRuleSupported) {
            supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
        }
        if (isCSSConditionRuleSupported) {
            supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
        }
        if (isCSSSupportsRuleSupported) {
            supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
        }
    }
    var unmodifiedFunctions = {};
    Object.entries(supportedNestedCSSRuleTypes).forEach(function (_a) {
        var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), typeKey = _b[0], type = _b[1];
        unmodifiedFunctions[typeKey] = {
            insertRule: type.prototype.insertRule,
            deleteRule: type.prototype.deleteRule,
        };
        type.prototype.insertRule = function (rule, index) {
            var id = mirror.getId(this.parentStyleSheet.ownerNode);
            if (id !== -1) {
                styleSheetRuleCb({
                    id: id,
                    adds: [
                        {
                            rule: rule,
                            index: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(getNestedCSSRulePositions(this)), false), [
                                index || 0,
                            ], false),
                        },
                    ],
                });
            }
            return unmodifiedFunctions[typeKey].insertRule.apply(this, arguments);
        };
        type.prototype.deleteRule = function (index) {
            var id = mirror.getId(this.parentStyleSheet.ownerNode);
            if (id !== -1) {
                styleSheetRuleCb({
                    id: id,
                    removes: [{ index: Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(getNestedCSSRulePositions(this)), false), [index], false) }],
                });
            }
            return unmodifiedFunctions[typeKey].deleteRule.apply(this, arguments);
        };
    });
    return function () {
        win.CSSStyleSheet.prototype.insertRule = insertRule;
        win.CSSStyleSheet.prototype.deleteRule = deleteRule;
        Object.entries(supportedNestedCSSRuleTypes).forEach(function (_a) {
            var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), typeKey = _b[0], type = _b[1];
            type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
            type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
        });
    };
}
function initStyleDeclarationObserver(_a, _b) {
    var styleDeclarationCb = _a.styleDeclarationCb, mirror = _a.mirror;
    var win = _b.win;
    var setProperty = win.CSSStyleDeclaration.prototype.setProperty;
    win.CSSStyleDeclaration.prototype.setProperty = function (property, value, priority) {
        var _a, _b;
        var id = mirror.getId((_b = (_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
        if (id !== -1) {
            styleDeclarationCb({
                id: id,
                set: {
                    property: property,
                    value: value,
                    priority: priority,
                },
                index: getNestedCSSRulePositions(this.parentRule),
            });
        }
        return setProperty.apply(this, arguments);
    };
    var removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = function (property) {
        var _a, _b;
        var id = mirror.getId((_b = (_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
        if (id !== -1) {
            styleDeclarationCb({
                id: id,
                remove: {
                    property: property,
                },
                index: getNestedCSSRulePositions(this.parentRule),
            });
        }
        return removeProperty.apply(this, arguments);
    };
    return function () {
        win.CSSStyleDeclaration.prototype.setProperty = setProperty;
        win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
    };
}
function initMediaInteractionObserver(_a) {
    var mediaInteractionCb = _a.mediaInteractionCb, blockClass = _a.blockClass, mirror = _a.mirror, sampling = _a.sampling;
    var handler = function (type) {
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["throttle"])(function (event) {
            var target = getEventTarget(event);
            if (!target || Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(target, blockClass)) {
                return;
            }
            var _a = target, currentTime = _a.currentTime, volume = _a.volume, muted = _a.muted;
            mediaInteractionCb({
                type: type,
                id: mirror.getId(target),
                currentTime: currentTime,
                volume: volume,
                muted: muted,
            });
        }, sampling.media || 500);
    };
    var handlers = [
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('play', handler(0)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('pause', handler(1)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('seeked', handler(2)),
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["on"])('volumechange', handler(3)),
    ];
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initFontObserver(_a) {
    var fontCb = _a.fontCb, doc = _a.doc;
    var win = doc.defaultView;
    if (!win) {
        return function () { };
    }
    var handlers = [];
    var fontMap = new WeakMap();
    var originalFontFace = win.FontFace;
    win.FontFace = function FontFace(family, source, descriptors) {
        var fontFace = new originalFontFace(family, source, descriptors);
        fontMap.set(fontFace, {
            family: family,
            buffer: typeof source !== 'string',
            descriptors: descriptors,
            fontSource: typeof source === 'string'
                ? source
                :
                    JSON.stringify(Array.from(new Uint8Array(source))),
        });
        return fontFace;
    };
    var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(doc.fonts, 'add', function (original) {
        return function (fontFace) {
            setTimeout(function () {
                var p = fontMap.get(fontFace);
                if (p) {
                    fontCb(p);
                    fontMap.delete(fontFace);
                }
            }, 0);
            return original.apply(this, [fontFace]);
        };
    });
    handlers.push(function () {
        win.FontFace = originalFontFace;
    });
    handlers.push(restoreHandler);
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function mergeHooks(o, hooks) {
    var mutationCb = o.mutationCb, mousemoveCb = o.mousemoveCb, mouseInteractionCb = o.mouseInteractionCb, scrollCb = o.scrollCb, viewportResizeCb = o.viewportResizeCb, inputCb = o.inputCb, mediaInteractionCb = o.mediaInteractionCb, styleSheetRuleCb = o.styleSheetRuleCb, styleDeclarationCb = o.styleDeclarationCb, canvasMutationCb = o.canvasMutationCb, fontCb = o.fontCb;
    o.mutationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mutation) {
            hooks.mutation.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        mutationCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.mousemoveCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mousemove) {
            hooks.mousemove.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        mousemoveCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.mouseInteractionCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mouseInteraction) {
            hooks.mouseInteraction.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        mouseInteractionCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.scrollCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.scroll) {
            hooks.scroll.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        scrollCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.viewportResizeCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.viewportResize) {
            hooks.viewportResize.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        viewportResizeCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.inputCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.input) {
            hooks.input.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        inputCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.mediaInteractionCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mediaInteaction) {
            hooks.mediaInteaction.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        mediaInteractionCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.styleSheetRuleCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.styleSheetRule) {
            hooks.styleSheetRule.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        styleSheetRuleCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.styleDeclarationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.styleDeclaration) {
            hooks.styleDeclaration.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        styleDeclarationCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.canvasMutationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.canvasMutation) {
            hooks.canvasMutation.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        canvasMutationCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
    o.fontCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.font) {
            hooks.font.apply(hooks, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
        }
        fontCb.apply(void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(p), false));
    };
}
function initObservers(o, hooks) {
    var e_1, _a;
    if (hooks === void 0) { hooks = {}; }
    var currentWindow = o.doc.defaultView;
    if (!currentWindow) {
        return function () { };
    }
    mergeHooks(o, hooks);
    var mutationObserver = initMutationObserver(o, o.doc);
    var mousemoveHandler = initMoveObserver(o);
    var mouseInteractionHandler = initMouseInteractionObserver(o);
    var scrollHandler = initScrollObserver(o);
    var viewportResizeHandler = initViewportResizeObserver(o);
    var inputHandler = initInputObserver(o);
    var mediaInteractionHandler = initMediaInteractionObserver(o);
    var styleSheetObserver = initStyleSheetObserver(o, { win: currentWindow });
    var styleDeclarationObserver = initStyleDeclarationObserver(o, {
        win: currentWindow,
    });
    var fontObserver = o.collectFonts ? initFontObserver(o) : function () { };
    var pluginHandlers = [];
    try {
        for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(o.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
            var plugin = _c.value;
            pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        mutationBuffers.forEach(function (b) { return b.reset(); });
        mutationObserver.disconnect();
        mousemoveHandler();
        mouseInteractionHandler();
        scrollHandler();
        viewportResizeHandler();
        inputHandler();
        mediaInteractionHandler();
        styleSheetObserver();
        styleDeclarationObserver();
        fontObserver();
        pluginHandlers.forEach(function (h) { return h(); });
    };
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");




function initCanvas2DMutationObserver(cb, win, blockClass, mirror) {
    var e_1, _a;
    var handlers = [];
    var props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
    var _loop_1 = function (prop) {
        try {
            if (typeof win.CanvasRenderingContext2D.prototype[prop] !== 'function') {
                return "continue";
            }
            var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(win.CanvasRenderingContext2D.prototype, prop, function (original) {
                return function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(this.canvas, blockClass)) {
                        setTimeout(function () {
                            var recordArgs = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false);
                            if (prop === 'drawImage') {
                                if (recordArgs[0] &&
                                    recordArgs[0] instanceof HTMLCanvasElement) {
                                    var canvas = recordArgs[0];
                                    var ctx = canvas.getContext('2d');
                                    var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, canvas.width, canvas.height);
                                    var pix = imgd === null || imgd === void 0 ? void 0 : imgd.data;
                                    recordArgs[0] = JSON.stringify(pix);
                                }
                            }
                            cb(_this.canvas, {
                                type: _types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"]['2D'],
                                property: prop,
                                args: recordArgs,
                            });
                        }, 0);
                    }
                    return original.apply(this, args);
                };
            });
            handlers.push(restoreHandler);
        }
        catch (_b) {
            var hookHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hookSetter"])(win.CanvasRenderingContext2D.prototype, prop, {
                set: function (v) {
                    cb(this.canvas, {
                        type: _types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"]['2D'],
                        property: prop,
                        args: [v],
                        setter: true,
                    });
                },
            });
            handlers.push(hookHandler);
        }
    };
    try {
        for (var props2D_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props2D), props2D_1_1 = props2D_1.next(); !props2D_1_1.done; props2D_1_1 = props2D_1.next()) {
            var prop = props2D_1_1.value;
            _loop_1(prop);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (props2D_1_1 && !props2D_1_1.done && (_a = props2D_1.return)) _a.call(props2D_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}

/* harmony default export */ __webpack_exports__["default"] = (initCanvas2DMutationObserver);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas-manager.js ***!
  \**************************************************************************************************/
/*! exports provided: CanvasManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasManager", function() { return CanvasManager; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2d.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/2d.js");
/* harmony import */ var _canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js");





var CanvasManager = (function () {
    function CanvasManager(options) {
        this.pendingCanvasMutations = new Map();
        this.rafStamps = { latestId: 0, invokeId: null };
        this.frozen = false;
        this.locked = false;
        this.processMutation = function (target, mutation) {
            var newFrame = this.rafStamps.invokeId &&
                this.rafStamps.latestId !== this.rafStamps.invokeId;
            if (newFrame || !this.rafStamps.invokeId)
                this.rafStamps.invokeId = this.rafStamps.latestId;
            if (!this.pendingCanvasMutations.has(target)) {
                this.pendingCanvasMutations.set(target, []);
            }
            this.pendingCanvasMutations.get(target).push(mutation);
        };
        this.mutationCb = options.mutationCb;
        this.mirror = options.mirror;
        if (options.recordCanvas === true)
            this.initCanvasMutationObserver(options.win, options.blockClass);
    }
    CanvasManager.prototype.reset = function () {
        this.pendingCanvasMutations.clear();
        this.resetObservers && this.resetObservers();
    };
    CanvasManager.prototype.freeze = function () {
        this.frozen = true;
    };
    CanvasManager.prototype.unfreeze = function () {
        this.frozen = false;
    };
    CanvasManager.prototype.lock = function () {
        this.locked = true;
    };
    CanvasManager.prototype.unlock = function () {
        this.locked = false;
    };
    CanvasManager.prototype.initCanvasMutationObserver = function (win, blockClass) {
        this.startRAFTimestamping();
        this.startPendingCanvasMutationFlusher();
        var canvasContextReset = Object(_canvas_js__WEBPACK_IMPORTED_MODULE_2__["default"])(win, blockClass);
        var canvas2DReset = Object(_2d_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.processMutation.bind(this), win, blockClass, this.mirror);
        var canvasWebGL1and2Reset = Object(_webgl_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.processMutation.bind(this), win, blockClass, this.mirror);
        this.resetObservers = function () {
            canvasContextReset();
            canvas2DReset();
            canvasWebGL1and2Reset();
        };
    };
    CanvasManager.prototype.startPendingCanvasMutationFlusher = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.flushPendingCanvasMutations(); });
    };
    CanvasManager.prototype.startRAFTimestamping = function () {
        var _this = this;
        var setLatestRAFTimestamp = function (timestamp) {
            _this.rafStamps.latestId = timestamp;
            requestAnimationFrame(setLatestRAFTimestamp);
        };
        requestAnimationFrame(setLatestRAFTimestamp);
    };
    CanvasManager.prototype.flushPendingCanvasMutations = function () {
        var _this = this;
        this.pendingCanvasMutations.forEach(function (values, canvas) {
            var id = _this.mirror.getId(canvas);
            _this.flushPendingCanvasMutationFor(canvas, id);
        });
        requestAnimationFrame(function () { return _this.flushPendingCanvasMutations(); });
    };
    CanvasManager.prototype.flushPendingCanvasMutationFor = function (canvas, id) {
        if (this.frozen || this.locked) {
            return;
        }
        var valuesWithType = this.pendingCanvasMutations.get(canvas);
        if (!valuesWithType || id === -1)
            return;
        var values = valuesWithType.map(function (value) {
            value.type; var rest = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__rest"])(value, ["type"]);
            return rest;
        });
        var type = valuesWithType[0].type;
        this.mutationCb({ id: id, type: type, commands: values });
        this.pendingCanvasMutations.delete(canvas);
    };
    return CanvasManager;
}());




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/canvas.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");



function initCanvasContextObserver(win, blockClass) {
    var handlers = [];
    try {
        var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["patch"])(win.HTMLCanvasElement.prototype, 'getContext', function (original) {
            return function (contextType) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["isBlocked"])(this, blockClass)) {
                    if (!('__context' in this))
                        this.__context = contextType;
                }
                return original.apply(this, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([contextType], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
            };
        });
        handlers.push(restoreHandler);
    }
    catch (_a) {
        console.error('failed to patch HTMLCanvasElement.prototype.getContext');
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}

/* harmony default export */ __webpack_exports__["default"] = (initCanvasContextObserver);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js ***!
  \**************************************************************************************************/
/*! exports provided: isInstanceOfWebGLObject, saveWebGLVar, serializeArg, serializeArgs, variableListFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceOfWebGLObject", function() { return isInstanceOfWebGLObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWebGLVar", function() { return saveWebGLVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeArg", function() { return serializeArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeArgs", function() { return serializeArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableListFor", function() { return variableListFor; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js */ "./node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");



var webGLVarMap = new Map();
function variableListFor(ctx, ctor) {
    var contextMap = webGLVarMap.get(ctx);
    if (!contextMap) {
        contextMap = new Map();
        webGLVarMap.set(ctx, contextMap);
    }
    if (!contextMap.has(ctor)) {
        contextMap.set(ctor, []);
    }
    return contextMap.get(ctor);
}
var saveWebGLVar = function (value, win, ctx) {
    if (!value ||
        !(isInstanceOfWebGLObject(value, win) || typeof value === 'object'))
        return;
    var name = value.constructor.name;
    var list = variableListFor(ctx, name);
    var index = list.indexOf(value);
    if (index === -1) {
        index = list.length;
        list.push(value);
    }
    return index;
};
function serializeArg(value, win, ctx) {
    if (value instanceof Array) {
        return value.map(function (arg) { return serializeArg(arg, win, ctx); });
    }
    else if (value === null) {
        return value;
    }
    else if (value instanceof Float32Array ||
        value instanceof Float64Array ||
        value instanceof Int32Array ||
        value instanceof Uint32Array ||
        value instanceof Uint8Array ||
        value instanceof Uint16Array ||
        value instanceof Int16Array ||
        value instanceof Int8Array ||
        value instanceof Uint8ClampedArray) {
        var name_1 = value.constructor.name;
        return {
            rr_type: name_1,
            args: [Object.values(value)],
        };
    }
    else if (value instanceof ArrayBuffer) {
        var name_2 = value.constructor.name;
        var base64 = Object(_ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__["encode"])(value);
        return {
            rr_type: name_2,
            base64: base64,
        };
    }
    else if (value instanceof DataView) {
        var name_3 = value.constructor.name;
        return {
            rr_type: name_3,
            args: [
                serializeArg(value.buffer, win, ctx),
                value.byteOffset,
                value.byteLength,
            ],
        };
    }
    else if (value instanceof HTMLImageElement) {
        var name_4 = value.constructor.name;
        var src = value.src;
        return {
            rr_type: name_4,
            src: src,
        };
    }
    else if (value instanceof ImageData) {
        var name_5 = value.constructor.name;
        return {
            rr_type: name_5,
            args: [serializeArg(value.data, win, ctx), value.width, value.height],
        };
    }
    else if (isInstanceOfWebGLObject(value, win) || typeof value === 'object') {
        var name_6 = value.constructor.name;
        var index = saveWebGLVar(value, win, ctx);
        return {
            rr_type: name_6,
            index: index,
        };
    }
    return value;
}
var serializeArgs = function (args, win, ctx) {
    return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false).map(function (arg) { return serializeArg(arg, win, ctx); });
};
var isInstanceOfWebGLObject = function (value, win) {
    var webGLConstructorNames = [
        'WebGLActiveInfo',
        'WebGLBuffer',
        'WebGLFramebuffer',
        'WebGLProgram',
        'WebGLRenderbuffer',
        'WebGLShader',
        'WebGLShaderPrecisionFormat',
        'WebGLTexture',
        'WebGLUniformLocation',
        'WebGLVertexArrayObject',
        'WebGLVertexArrayObjectOES',
    ];
    var supportedWebGLConstructorNames = webGLConstructorNames.filter(function (name) { return typeof win[name] === 'function'; });
    return Boolean(supportedWebGLConstructorNames.find(function (name) { return value instanceof win[name]; }));
};




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/webgl.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _serialize_args_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serialize-args.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observers/canvas/serialize-args.js");





function patchGLPrototype(prototype, type, cb, blockClass, mirror, win) {
    var e_1, _a;
    var handlers = [];
    var props = Object.getOwnPropertyNames(prototype);
    var _loop_1 = function (prop) {
        try {
            if (typeof prototype[prop] !== 'function') {
                return "continue";
            }
            var restoreHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(prototype, prop, function (original) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = original.apply(this, args);
                    Object(_serialize_args_js__WEBPACK_IMPORTED_MODULE_3__["saveWebGLVar"])(result, win, prototype);
                    if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["isBlocked"])(this.canvas, blockClass)) {
                        var id = mirror.getId(this.canvas);
                        var recordArgs = Object(_serialize_args_js__WEBPACK_IMPORTED_MODULE_3__["serializeArgs"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false), win, prototype);
                        var mutation = {
                            type: type,
                            property: prop,
                            args: recordArgs,
                        };
                        cb(this.canvas, mutation);
                    }
                    return result;
                };
            });
            handlers.push(restoreHandler);
        }
        catch (_b) {
            var hookHandler = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["hookSetter"])(prototype, prop, {
                set: function (v) {
                    cb(this.canvas, {
                        type: type,
                        property: prop,
                        args: [v],
                        setter: true,
                    });
                },
            });
            handlers.push(hookHandler);
        }
    };
    try {
        for (var props_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
            var prop = props_1_1.value;
            _loop_1(prop);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return handlers;
}
function initCanvasWebGLMutationObserver(cb, win, blockClass, mirror) {
    var handlers = [];
    handlers.push.apply(handlers, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(patchGLPrototype(win.WebGLRenderingContext.prototype, _types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"].WebGL, cb, blockClass, mirror, win)), false));
    if (typeof win.WebGL2RenderingContext !== 'undefined') {
        handlers.push.apply(handlers, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(patchGLPrototype(win.WebGL2RenderingContext.prototype, _types_js__WEBPACK_IMPORTED_MODULE_1__["CanvasContext"].WebGL2, cb, blockClass, mirror, win)), false));
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}

/* harmony default export */ __webpack_exports__["default"] = (initCanvasWebGLMutationObserver);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/shadow-dom-manager.js ***!
  \*************************************************************************************/
/*! exports provided: ShadowDomManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowDomManager", function() { return ShadowDomManager; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _observer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/record/observer.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");




var ShadowDomManager = (function () {
    function ShadowDomManager(options) {
        this.restorePatches = [];
        this.mutationCb = options.mutationCb;
        this.scrollCb = options.scrollCb;
        this.bypassOptions = options.bypassOptions;
        this.mirror = options.mirror;
        var manager = this;
        this.restorePatches.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(HTMLElement.prototype, 'attachShadow', function (original) {
            return function () {
                var shadowRoot = original.apply(this, arguments);
                if (this.shadowRoot)
                    manager.addShadowRoot(this.shadowRoot, this.ownerDocument);
                return shadowRoot;
            };
        }));
    }
    ShadowDomManager.prototype.addShadowRoot = function (shadowRoot, doc) {
        Object(_observer_js__WEBPACK_IMPORTED_MODULE_1__["initMutationObserver"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.bypassOptions), { doc: doc, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), shadowRoot);
        Object(_observer_js__WEBPACK_IMPORTED_MODULE_1__["initScrollObserver"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: shadowRoot, mirror: this.mirror }));
    };
    ShadowDomManager.prototype.observeAttachShadow = function (iframeElement) {
        if (iframeElement.contentWindow) {
            var manager_1 = this;
            this.restorePatches.push(Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["patch"])(iframeElement.contentWindow.HTMLElement.prototype, 'attachShadow', function (original) {
                return function () {
                    var shadowRoot = original.apply(this, arguments);
                    if (this.shadowRoot)
                        manager_1.addShadowRoot(this.shadowRoot, iframeElement.contentDocument);
                    return shadowRoot;
                };
            }));
        }
    };
    ShadowDomManager.prototype.reset = function () {
        this.restorePatches.forEach(function (restorePatch) { return restorePatch(); });
    };
    return ShadowDomManager;
}());




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function canvasMutation(_a) {
    var event = _a.event, mutation = _a.mutation, target = _a.target, imageMap = _a.imageMap, errorHandler = _a.errorHandler;
    try {
        var ctx = target.getContext('2d');
        if (mutation.setter) {
            ctx[mutation.property] = mutation.args[0];
            return;
        }
        var original = ctx[mutation.property];
        if (mutation.property === 'drawImage' &&
            typeof mutation.args[0] === 'string') {
            var image = imageMap.get(event);
            mutation.args[0] = image;
            original.apply(ctx, mutation.args);
        }
        else {
            original.apply(ctx, mutation.args);
        }
    }
    catch (error) {
        errorHandler(mutation, error);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (canvasMutation);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js");
/* harmony import */ var _2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./2d.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/2d.js");




function canvasMutation(_a) {
    var event = _a.event, mutation = _a.mutation, target = _a.target, imageMap = _a.imageMap, errorHandler = _a.errorHandler;
    try {
        var mutations = 'commands' in mutation ? mutation.commands : [mutation];
        if ([_types_js__WEBPACK_IMPORTED_MODULE_0__["CanvasContext"].WebGL, _types_js__WEBPACK_IMPORTED_MODULE_0__["CanvasContext"].WebGL2].includes(mutation.type)) {
            return mutations.forEach(function (command) {
                Object(_webgl_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    mutation: command,
                    type: mutation.type,
                    target: target,
                    imageMap: imageMap,
                    errorHandler: errorHandler,
                });
            });
        }
        return mutations.forEach(function (command) {
            Object(_2d_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
                event: event,
                mutation: command,
                target: target,
                imageMap: imageMap,
                errorHandler: errorHandler,
            });
        });
    }
    catch (error) {
        errorHandler(mutation, error);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (canvasMutation);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/webgl.js ***!
  \*******************************************************************************/
/*! exports provided: default, deserializeArg, variableListFor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeArg", function() { return deserializeArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variableListFor", function() { return variableListFor; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js */ "./node_modules/rrweb/es/rrweb/ext/base64-arraybuffer/dist/base64-arraybuffer.es5.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");




var webGLVarMap = new Map();
function variableListFor(ctx, ctor) {
    var contextMap = webGLVarMap.get(ctx);
    if (!contextMap) {
        contextMap = new Map();
        webGLVarMap.set(ctx, contextMap);
    }
    if (!contextMap.has(ctor)) {
        contextMap.set(ctor, []);
    }
    return contextMap.get(ctor);
}
function getContext(target, type) {
    try {
        if (type === _types_js__WEBPACK_IMPORTED_MODULE_2__["CanvasContext"].WebGL) {
            return (target.getContext('webgl') || target.getContext('experimental-webgl'));
        }
        return target.getContext('webgl2');
    }
    catch (e) {
        return null;
    }
}
var WebGLVariableConstructorsNames = [
    'WebGLActiveInfo',
    'WebGLBuffer',
    'WebGLFramebuffer',
    'WebGLProgram',
    'WebGLRenderbuffer',
    'WebGLShader',
    'WebGLShaderPrecisionFormat',
    'WebGLTexture',
    'WebGLUniformLocation',
    'WebGLVertexArrayObject',
];
function saveToWebGLVarMap(ctx, result) {
    if (!(result === null || result === void 0 ? void 0 : result.constructor))
        return;
    var name = result.constructor.name;
    if (!WebGLVariableConstructorsNames.includes(name))
        return;
    var variables = variableListFor(ctx, name);
    if (!variables.includes(result))
        variables.push(result);
}
function deserializeArg(imageMap, ctx) {
    return function (arg) {
        if (arg && typeof arg === 'object' && 'rr_type' in arg) {
            if ('index' in arg) {
                var name_1 = arg.rr_type, index = arg.index;
                return variableListFor(ctx, name_1)[index];
            }
            else if ('args' in arg) {
                var name_2 = arg.rr_type, args = arg.args;
                var ctor = window[name_2];
                return new (ctor.bind.apply(ctor, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([void 0], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args.map(deserializeArg(imageMap, ctx))), false)))();
            }
            else if ('base64' in arg) {
                return Object(_ext_base64_arraybuffer_dist_base64_arraybuffer_es5_js__WEBPACK_IMPORTED_MODULE_1__["decode"])(arg.base64);
            }
            else if ('src' in arg) {
                var image = imageMap.get(arg.src);
                if (image) {
                    return image;
                }
                else {
                    var image_1 = new Image();
                    image_1.src = arg.src;
                    imageMap.set(arg.src, image_1);
                    return image_1;
                }
            }
        }
        else if (Array.isArray(arg)) {
            return arg.map(deserializeArg(imageMap, ctx));
        }
        return arg;
    };
}
function webglMutation(_a) {
    var mutation = _a.mutation, target = _a.target, type = _a.type, imageMap = _a.imageMap, errorHandler = _a.errorHandler;
    try {
        var ctx = getContext(target, type);
        if (!ctx)
            return;
        if (mutation.setter) {
            ctx[mutation.property] = mutation.args[0];
            return;
        }
        var original = ctx[mutation.property];
        var args = mutation.args.map(deserializeArg(imageMap, ctx));
        var result = original.apply(ctx, args);
        saveToWebGLVarMap(ctx, result);
        var debugMode = false;
        if (debugMode) {
            if (mutation.property === 'compileShader') {
                if (!ctx.getShaderParameter(args[0], ctx.COMPILE_STATUS))
                    console.warn('something went wrong in replay', ctx.getShaderInfoLog(args[0]));
            }
            else if (mutation.property === 'linkProgram') {
                ctx.validateProgram(args[0]);
                if (!ctx.getProgramParameter(args[0], ctx.LINK_STATUS))
                    console.warn('something went wrong in replay', ctx.getProgramInfoLog(args[0]));
            }
            var webglError = ctx.getError();
            if (webglError !== ctx.NO_ERROR) {
                console.warn.apply(console, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(['WEBGL ERROR',
                    webglError,
                    'on command:',
                    mutation.property], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
            }
        }
    }
    catch (error) {
        errorHandler(mutation, error);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (webglMutation);



/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/index.js ***!
  \************************************************************************/
/*! exports provided: Replayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return Replayer; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");
/* harmony import */ var _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ext/mitt/dist/mitt.es.js */ "./node_modules/rrweb/es/rrweb/ext/mitt/dist/mitt.es.js");
/* harmony import */ var _smoothscroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smoothscroll.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js");
/* harmony import */ var _machine_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./machine.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js");
/* harmony import */ var _styles_inject_style_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/inject-style.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js");
/* harmony import */ var _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./virtual-styles.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/virtual-styles.js");
/* harmony import */ var _canvas_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvas/index.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/canvas/index.js");













var SKIP_TIME_THRESHOLD = 10 * 1000;
var SKIP_TIME_INTERVAL = 5 * 1000;
var mitt = _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_2__["default"] || _ext_mitt_dist_mitt_es_js__WEBPACK_IMPORTED_MODULE_2__;
var REPLAY_CONSOLE_PREFIX = '[replayer]';
var defaultMouseTailConfig = {
    duration: 500,
    lineCap: 'round',
    lineWidth: 3,
    strokeStyle: 'red',
};
function indicatesTouchDevice(e) {
    return (e.type == _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot &&
        (e.data.source == _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].TouchMove ||
            (e.data.source == _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MouseInteraction &&
                e.data.type == _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart)));
}
var Replayer = (function () {
    function Replayer(events, config) {
        var _this = this;
        this.mouseTail = null;
        this.tailPositions = [];
        this.emitter = mitt();
        this.legacy_missingNodeRetryMap = {};
        this.cache = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["createCache"])();
        this.imageMap = new Map();
        this.mirror = Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["createMirror"])();
        this.firstFullSnapshot = null;
        this.newDocumentQueue = [];
        this.mousePos = null;
        this.touchActive = null;
        if (!(config === null || config === void 0 ? void 0 : config.liveMode) && events.length < 2) {
            throw new Error('Replayer need at least 2 events.');
        }
        var defaultConfig = {
            speed: 1,
            maxSpeed: 360,
            root: document.body,
            loadTimeout: 0,
            skipInactive: false,
            showWarning: true,
            showDebug: false,
            blockClass: 'rr-block',
            liveMode: false,
            insertStyleRules: [],
            triggerFocus: true,
            UNSAFE_replayCanvas: false,
            pauseAnimation: true,
            mouseTail: defaultMouseTailConfig,
        };
        this.config = Object.assign({}, defaultConfig, config);
        this.handleResize = this.handleResize.bind(this);
        this.getCastFn = this.getCastFn.bind(this);
        this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this);
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resize, this.handleResize);
        this.setupDom();
        this.treeIndex = new _utils_js__WEBPACK_IMPORTED_MODULE_7__["TreeIndex"]();
        this.fragmentParentMap = new Map();
        this.elementStateMap = new Map();
        this.virtualStyleRulesMap = new Map();
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Flush, function () {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
            var _e = _this.treeIndex.flush(), scrollMap = _e.scrollMap, inputMap = _e.inputMap, mutationData = _e.mutationData;
            _this.fragmentParentMap.forEach(function (parent, frag) {
                return _this.restoreRealParent(frag, parent);
            });
            try {
                for (var _f = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(mutationData.texts), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var d = _g.value;
                    _this.applyText(d, mutationData);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _h = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.virtualStyleRulesMap.keys()), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var node = _j.value;
                    _this.restoreNodeSheet(node);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                }
                finally { if (e_2) throw e_2.error; }
            }
            _this.fragmentParentMap.clear();
            _this.elementStateMap.clear();
            _this.virtualStyleRulesMap.clear();
            try {
                for (var _k = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(scrollMap.values()), _l = _k.next(); !_l.done; _l = _k.next()) {
                    var d = _l.value;
                    _this.applyScroll(d, true);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
                }
                finally { if (e_3) throw e_3.error; }
            }
            try {
                for (var _m = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(inputMap.values()), _o = _m.next(); !_o.done; _o = _m.next()) {
                    var d = _o.value;
                    _this.applyInput(d);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
                }
                finally { if (e_4) throw e_4.error; }
            }
        });
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].PlayBack, function () {
            _this.firstFullSnapshot = null;
            _this.mirror.reset();
        });
        var timer = new _timer_js__WEBPACK_IMPORTED_MODULE_4__["Timer"]([], (config === null || config === void 0 ? void 0 : config.speed) || defaultConfig.speed);
        this.service = Object(_machine_js__WEBPACK_IMPORTED_MODULE_5__["createPlayerService"])({
            events: events
                .map(function (e) {
                if (config && config.unpackFn) {
                    return config.unpackFn(e);
                }
                return e;
            })
                .sort(function (a1, a2) { return a1.timestamp - a2.timestamp; }),
            timer: timer,
            timeOffset: 0,
            baselineTime: 0,
            lastPlayedEvent: null,
        }, {
            getCastFn: this.getCastFn,
            applyEventsSynchronously: this.applyEventsSynchronously,
            emitter: this.emitter,
        });
        this.service.start();
        this.service.subscribe(function (state) {
            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].StateChange, {
                player: state,
            });
        });
        this.speedService = Object(_machine_js__WEBPACK_IMPORTED_MODULE_5__["createSpeedService"])({
            normalSpeed: -1,
            timer: timer,
        });
        this.speedService.start();
        this.speedService.subscribe(function (state) {
            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].StateChange, {
                speed: state,
            });
        });
        var firstMeta = this.service.state.context.events.find(function (e) { return e.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Meta; });
        var firstFullsnapshot = this.service.state.context.events.find(function (e) { return e.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].FullSnapshot; });
        if (firstMeta) {
            var _a = firstMeta.data, width_1 = _a.width, height_1 = _a.height;
            setTimeout(function () {
                _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resize, {
                    width: width_1,
                    height: height_1,
                });
            }, 0);
        }
        if (firstFullsnapshot) {
            setTimeout(function () {
                if (_this.firstFullSnapshot) {
                    return;
                }
                _this.firstFullSnapshot = firstFullsnapshot;
                _this.rebuildFullSnapshot(firstFullsnapshot);
                _this.iframe.contentWindow.scrollTo(firstFullsnapshot.data.initialOffset);
            }, 1);
        }
        if (this.service.state.context.events.find(indicatesTouchDevice)) {
            this.mouse.classList.add('touch-device');
        }
    }
    Object.defineProperty(Replayer.prototype, "timer", {
        get: function () {
            return this.service.state.context.timer;
        },
        enumerable: false,
        configurable: true
    });
    Replayer.prototype.on = function (event, handler) {
        this.emitter.on(event, handler);
        return this;
    };
    Replayer.prototype.off = function (event, handler) {
        this.emitter.off(event, handler);
        return this;
    };
    Replayer.prototype.setConfig = function (config) {
        var _this = this;
        Object.keys(config).forEach(function (key) {
            _this.config[key] = config[key];
        });
        if (!this.config.skipInactive) {
            this.backToNormal();
        }
        if (typeof config.speed !== 'undefined') {
            this.speedService.send({
                type: 'SET_SPEED',
                payload: {
                    speed: config.speed,
                },
            });
        }
        if (typeof config.mouseTail !== 'undefined') {
            if (config.mouseTail === false) {
                if (this.mouseTail) {
                    this.mouseTail.style.display = 'none';
                }
            }
            else {
                if (!this.mouseTail) {
                    this.mouseTail = document.createElement('canvas');
                    this.mouseTail.width = Number.parseFloat(this.iframe.width);
                    this.mouseTail.height = Number.parseFloat(this.iframe.height);
                    this.mouseTail.classList.add('replayer-mouse-tail');
                    this.wrapper.insertBefore(this.mouseTail, this.iframe);
                }
                this.mouseTail.style.display = 'inherit';
            }
        }
    };
    Replayer.prototype.getMetaData = function () {
        var firstEvent = this.service.state.context.events[0];
        var lastEvent = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
            startTime: firstEvent.timestamp,
            endTime: lastEvent.timestamp,
            totalTime: lastEvent.timestamp - firstEvent.timestamp,
        };
    };
    Replayer.prototype.getCurrentTime = function () {
        return this.timer.timeOffset + this.getTimeOffset();
    };
    Replayer.prototype.getTimeOffset = function () {
        var _a = this.service.state.context, baselineTime = _a.baselineTime, events = _a.events;
        return baselineTime - events[0].timestamp;
    };
    Replayer.prototype.getMirror = function () {
        return this.mirror;
    };
    Replayer.prototype.play = function (timeOffset) {
        var _a;
        if (timeOffset === void 0) { timeOffset = 0; }
        if (this.service.state.matches('paused')) {
            this.service.send({ type: 'PLAY', payload: { timeOffset: timeOffset } });
        }
        else {
            this.service.send({ type: 'PAUSE' });
            this.service.send({ type: 'PLAY', payload: { timeOffset: timeOffset } });
        }
        (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.remove('rrweb-paused');
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Start);
    };
    Replayer.prototype.pause = function (timeOffset) {
        var _a;
        if (timeOffset === undefined && this.service.state.matches('playing')) {
            this.service.send({ type: 'PAUSE' });
        }
        if (typeof timeOffset === 'number') {
            this.play(timeOffset);
            this.service.send({ type: 'PAUSE' });
        }
        (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('html')[0].classList.add('rrweb-paused');
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Pause);
    };
    Replayer.prototype.resume = function (timeOffset) {
        if (timeOffset === void 0) { timeOffset = 0; }
        console.warn("The 'resume' will be departed in 1.0. Please use 'play' method which has the same interface.");
        this.play(timeOffset);
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resume);
    };
    Replayer.prototype.startLive = function (baselineTime) {
        this.service.send({ type: 'TO_LIVE', payload: { baselineTime: baselineTime } });
    };
    Replayer.prototype.addEvent = function (rawEvent) {
        var _this = this;
        var event = this.config.unpackFn
            ? this.config.unpackFn(rawEvent)
            : rawEvent;
        if (indicatesTouchDevice(event)) {
            this.mouse.classList.add('touch-device');
        }
        Promise.resolve().then(function () {
            return _this.service.send({ type: 'ADD_EVENT', payload: { event: event } });
        });
    };
    Replayer.prototype.enableInteract = function () {
        this.iframe.setAttribute('scrolling', 'auto');
        this.iframe.style.pointerEvents = 'auto';
    };
    Replayer.prototype.disableInteract = function () {
        this.iframe.setAttribute('scrolling', 'no');
        this.iframe.style.pointerEvents = 'none';
    };
    Replayer.prototype.resetCache = function () {
        this.cache = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["createCache"])();
    };
    Replayer.prototype.setupDom = function () {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('replayer-wrapper');
        this.config.root.appendChild(this.wrapper);
        this.mouse = document.createElement('div');
        this.mouse.classList.add('replayer-mouse');
        this.wrapper.appendChild(this.mouse);
        if (this.config.mouseTail !== false) {
            this.mouseTail = document.createElement('canvas');
            this.mouseTail.classList.add('replayer-mouse-tail');
            this.mouseTail.style.display = 'inherit';
            this.wrapper.appendChild(this.mouseTail);
        }
        this.iframe = document.createElement('iframe');
        var attributes = ['allow-same-origin'];
        if (this.config.UNSAFE_replayCanvas) {
            attributes.push('allow-scripts');
        }
        this.iframe.style.display = 'none';
        this.iframe.setAttribute('sandbox', attributes.join(' '));
        this.disableInteract();
        this.wrapper.appendChild(this.iframe);
        if (this.iframe.contentWindow && this.iframe.contentDocument) {
            Object(_smoothscroll_js__WEBPACK_IMPORTED_MODULE_3__["polyfill"])(this.iframe.contentWindow, this.iframe.contentDocument);
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["polyfill"])(this.iframe.contentWindow);
        }
    };
    Replayer.prototype.handleResize = function (dimension) {
        var e_5, _a;
        this.iframe.style.display = 'inherit';
        try {
            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])([this.mouseTail, this.iframe]), _c = _b.next(); !_c.done; _c = _b.next()) {
                var el = _c.value;
                if (!el) {
                    continue;
                }
                el.setAttribute('width', String(dimension.width));
                el.setAttribute('height', String(dimension.height));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    Replayer.prototype.applyEventsSynchronously = function (events) {
        var e_6, _a;
        try {
            for (var events_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var event_1 = events_1_1.value;
                switch (event_1.type) {
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].DomContentLoaded:
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Load:
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Custom:
                        continue;
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].FullSnapshot:
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Meta:
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Plugin:
                        break;
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot:
                        switch (event_1.data.source) {
                            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MediaInteraction:
                                continue;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
                var castFn = this.getCastFn(event_1, true);
                castFn();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        if (this.mousePos) {
            this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, true, this.mousePos.debugData);
        }
        this.mousePos = null;
        if (this.touchActive === true) {
            this.mouse.classList.add('touch-active');
        }
        else if (this.touchActive === false) {
            this.mouse.classList.remove('touch-active');
        }
        this.touchActive = null;
    };
    Replayer.prototype.getCastFn = function (event, isSync) {
        var _this = this;
        if (isSync === void 0) { isSync = false; }
        var castFn;
        switch (event.type) {
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].DomContentLoaded:
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Load:
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Custom:
                castFn = function () {
                    _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].CustomEvent, event);
                };
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].Meta:
                castFn = function () {
                    return _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resize, {
                        width: event.data.width,
                        height: event.data.height,
                    });
                };
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].FullSnapshot:
                castFn = function () {
                    if (_this.firstFullSnapshot) {
                        if (_this.firstFullSnapshot === event) {
                            _this.firstFullSnapshot = true;
                            return;
                        }
                    }
                    else {
                        _this.firstFullSnapshot = true;
                    }
                    _this.rebuildFullSnapshot(event, isSync);
                    _this.iframe.contentWindow.scrollTo(event.data.initialOffset);
                };
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot:
                castFn = function () {
                    var e_7, _a;
                    _this.applyIncremental(event, isSync);
                    if (isSync) {
                        return;
                    }
                    if (event === _this.nextUserInteractionEvent) {
                        _this.nextUserInteractionEvent = null;
                        _this.backToNormal();
                    }
                    if (_this.config.skipInactive && !_this.nextUserInteractionEvent) {
                        try {
                            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var _event = _c.value;
                                if (_event.timestamp <= event.timestamp) {
                                    continue;
                                }
                                if (_this.isUserInteraction(_event)) {
                                    if (_event.delay - event.delay >
                                        SKIP_TIME_THRESHOLD *
                                            _this.speedService.state.context.timer.speed) {
                                        _this.nextUserInteractionEvent = _event;
                                    }
                                    break;
                                }
                            }
                        }
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                        if (_this.nextUserInteractionEvent) {
                            var skipTime = _this.nextUserInteractionEvent.delay - event.delay;
                            var payload = {
                                speed: Math.min(Math.round(skipTime / SKIP_TIME_INTERVAL), _this.config.maxSpeed),
                            };
                            _this.speedService.send({ type: 'FAST_FORWARD', payload: payload });
                            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].SkipStart, payload);
                        }
                    }
                };
                break;
        }
        var wrappedCastFn = function () {
            var e_8, _a;
            if (castFn) {
                castFn();
            }
            try {
                for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.config.plugins || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var plugin = _c.value;
                    plugin.handler(event, isSync, { replayer: _this });
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_8) throw e_8.error; }
            }
            _this.service.send({ type: 'CAST_EVENT', payload: { event: event } });
            var last_index = _this.service.state.context.events.length - 1;
            if (event === _this.service.state.context.events[last_index]) {
                var finish_1 = function () {
                    if (last_index < _this.service.state.context.events.length - 1) {
                        return;
                    }
                    _this.backToNormal();
                    _this.service.send('END');
                    _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Finish);
                };
                if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot &&
                    event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MouseMove &&
                    event.data.positions.length) {
                    setTimeout(function () {
                        finish_1();
                    }, Math.max(0, -event.data.positions[0].timeOffset + 50));
                }
                else {
                    finish_1();
                }
            }
            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].EventCast, event);
        };
        return wrappedCastFn;
    };
    Replayer.prototype.rebuildFullSnapshot = function (event, isSync) {
        var e_9, _a;
        var _this = this;
        if (isSync === void 0) { isSync = false; }
        if (!this.iframe.contentDocument) {
            return console.warn('Looks like your replayer has been destroyed.');
        }
        if (Object.keys(this.legacy_missingNodeRetryMap).length) {
            console.warn('Found unresolved missing node map', this.legacy_missingNodeRetryMap);
        }
        this.legacy_missingNodeRetryMap = {};
        var collected = [];
        this.mirror.map = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["rebuild"])(event.data.node, {
            doc: this.iframe.contentDocument,
            afterAppend: function (builtNode) {
                _this.collectIframeAndAttachDocument(collected, builtNode);
            },
            cache: this.cache,
        })[1];
        var _loop_1 = function (mutationInQueue, builtNode) {
            this_1.attachDocumentToIframe(mutationInQueue, builtNode);
            this_1.newDocumentQueue = this_1.newDocumentQueue.filter(function (m) { return m !== mutationInQueue; });
        };
        var this_1 = this;
        try {
            for (var collected_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(collected), collected_1_1 = collected_1.next(); !collected_1_1.done; collected_1_1 = collected_1.next()) {
                var _b = collected_1_1.value, mutationInQueue = _b.mutationInQueue, builtNode = _b.builtNode;
                _loop_1(mutationInQueue, builtNode);
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (collected_1_1 && !collected_1_1.done && (_a = collected_1.return)) _a.call(collected_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        var _c = this.iframe.contentDocument, documentElement = _c.documentElement, head = _c.head;
        this.insertStyleRules(documentElement, head);
        if (!this.service.state.matches('playing')) {
            this.iframe.contentDocument
                .getElementsByTagName('html')[0]
                .classList.add('rrweb-paused');
        }
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].FullsnapshotRebuilded, event);
        if (!isSync) {
            this.waitForStylesheetLoad();
        }
        if (this.config.UNSAFE_replayCanvas) {
            this.preloadAllImages();
        }
    };
    Replayer.prototype.insertStyleRules = function (documentElement, head) {
        var styleEl = document.createElement('style');
        documentElement.insertBefore(styleEl, head);
        var injectStylesRules = Object(_styles_inject_style_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this.config.blockClass).concat(this.config.insertStyleRules);
        if (this.config.pauseAnimation) {
            injectStylesRules.push('html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }');
        }
        for (var idx = 0; idx < injectStylesRules.length; idx++) {
            styleEl.sheet.insertRule(injectStylesRules[idx], idx);
        }
    };
    Replayer.prototype.attachDocumentToIframe = function (mutation, iframeEl) {
        var e_10, _a;
        var _this = this;
        var collected = [];
        if (!iframeEl.contentDocument) {
            var parent_1 = iframeEl.parentNode;
            while (parent_1) {
                if (this.fragmentParentMap.has(parent_1)) {
                    var frag = parent_1;
                    var realParent = this.fragmentParentMap.get(frag);
                    this.restoreRealParent(frag, realParent);
                    break;
                }
                parent_1 = parent_1.parentNode;
            }
        }
        Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(mutation.node, {
            doc: iframeEl.contentDocument,
            map: this.mirror.map,
            hackCss: true,
            skipChild: false,
            afterAppend: function (builtNode) {
                _this.collectIframeAndAttachDocument(collected, builtNode);
                if (builtNode.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element &&
                    builtNode.__sn.tagName.toUpperCase() === 'HTML') {
                    var _a = iframeEl.contentDocument, documentElement = _a.documentElement, head = _a.head;
                    _this.insertStyleRules(documentElement, head);
                }
            },
            cache: this.cache,
        });
        var _loop_2 = function (mutationInQueue, builtNode) {
            this_2.attachDocumentToIframe(mutationInQueue, builtNode);
            this_2.newDocumentQueue = this_2.newDocumentQueue.filter(function (m) { return m !== mutationInQueue; });
        };
        var this_2 = this;
        try {
            for (var collected_2 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(collected), collected_2_1 = collected_2.next(); !collected_2_1.done; collected_2_1 = collected_2.next()) {
                var _b = collected_2_1.value, mutationInQueue = _b.mutationInQueue, builtNode = _b.builtNode;
                _loop_2(mutationInQueue, builtNode);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (collected_2_1 && !collected_2_1.done && (_a = collected_2.return)) _a.call(collected_2);
            }
            finally { if (e_10) throw e_10.error; }
        }
    };
    Replayer.prototype.collectIframeAndAttachDocument = function (collected, builtNode) {
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["isIframeINode"])(builtNode)) {
            var mutationInQueue = this.newDocumentQueue.find(function (m) { return m.parentId === builtNode.__sn.id; });
            if (mutationInQueue) {
                collected.push({ mutationInQueue: mutationInQueue, builtNode: builtNode });
            }
        }
    };
    Replayer.prototype.waitForStylesheetLoad = function () {
        var _this = this;
        var _a;
        var head = (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.head;
        if (head) {
            var unloadSheets_1 = new Set();
            var timer_1;
            var beforeLoadState_1 = this.service.state;
            var stateHandler_1 = function () {
                beforeLoadState_1 = _this.service.state;
            };
            this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Start, stateHandler_1);
            this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Pause, stateHandler_1);
            var unsubscribe_1 = function () {
                _this.emitter.off(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Start, stateHandler_1);
                _this.emitter.off(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Pause, stateHandler_1);
            };
            head
                .querySelectorAll('link[rel="stylesheet"]')
                .forEach(function (css) {
                if (!css.sheet) {
                    unloadSheets_1.add(css);
                    css.addEventListener('load', function () {
                        unloadSheets_1.delete(css);
                        if (unloadSheets_1.size === 0 && timer_1 !== -1) {
                            if (beforeLoadState_1.matches('playing')) {
                                _this.play(_this.getCurrentTime());
                            }
                            _this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].LoadStylesheetEnd);
                            if (timer_1) {
                                clearTimeout(timer_1);
                            }
                            unsubscribe_1();
                        }
                    });
                }
            });
            if (unloadSheets_1.size > 0) {
                this.service.send({ type: 'PAUSE' });
                this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].LoadStylesheetStart);
                timer_1 = setTimeout(function () {
                    if (beforeLoadState_1.matches('playing')) {
                        _this.play(_this.getCurrentTime());
                    }
                    timer_1 = -1;
                    unsubscribe_1();
                }, this.config.loadTimeout);
            }
        }
    };
    Replayer.prototype.hasImageArg = function (args) {
        var e_11, _a;
        try {
            for (var args_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                var arg = args_1_1.value;
                if (!arg || typeof arg !== 'object') {
                }
                else if ('rr_type' in arg && 'args' in arg) {
                    if (this.hasImageArg(arg.args))
                        return true;
                }
                else if ('rr_type' in arg && arg.rr_type === 'HTMLImageElement') {
                    return true;
                }
                else if (arg instanceof Array) {
                    if (this.hasImageArg(arg))
                        return true;
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
            }
            finally { if (e_11) throw e_11.error; }
        }
        return false;
    };
    Replayer.prototype.getImageArgs = function (args) {
        var e_12, _a;
        var images = [];
        try {
            for (var args_2 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(args), args_2_1 = args_2.next(); !args_2_1.done; args_2_1 = args_2.next()) {
                var arg = args_2_1.value;
                if (!arg || typeof arg !== 'object') {
                }
                else if ('rr_type' in arg && 'args' in arg) {
                    images.push.apply(images, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getImageArgs(arg.args)), false));
                }
                else if ('rr_type' in arg && arg.rr_type === 'HTMLImageElement') {
                    images.push(arg.src);
                }
                else if (arg instanceof Array) {
                    images.push.apply(images, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.getImageArgs(arg)), false));
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (args_2_1 && !args_2_1.done && (_a = args_2.return)) _a.call(args_2);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return images;
    };
    Replayer.prototype.preloadAllImages = function () {
        var e_13, _a;
        var _this = this;
        this.service.state;
        var stateHandler = function () {
            _this.service.state;
        };
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Start, stateHandler);
        this.emitter.on(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Pause, stateHandler);
        var _loop_3 = function (event_2) {
            if (event_2.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot &&
                event_2.data.source === _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].CanvasMutation)
                if ('commands' in event_2.data) {
                    event_2.data.commands.forEach(function (c) { return _this.preloadImages(c, event_2); });
                }
                else {
                    this_3.preloadImages(event_2.data, event_2);
                }
        };
        var this_3 = this;
        try {
            for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.service.state.context.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var event_2 = _c.value;
                _loop_3(event_2);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
    };
    Replayer.prototype.preloadImages = function (data, event) {
        var _this = this;
        if (data.property === 'drawImage' &&
            typeof data.args[0] === 'string' &&
            !this.imageMap.has(event)) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.createImageData(canvas.width, canvas.height);
            imgd === null || imgd === void 0 ? void 0 : imgd.data;
            JSON.parse(data.args[0]);
            ctx === null || ctx === void 0 ? void 0 : ctx.putImageData(imgd, 0, 0);
        }
        else if (this.hasImageArg(data.args)) {
            this.getImageArgs(data.args).forEach(function (url) {
                var image = new Image();
                image.src = url;
                _this.imageMap.set(url, image);
            });
        }
    };
    Replayer.prototype.applyIncremental = function (e, isSync) {
        var _this = this;
        var _a, _b;
        var d = e.data;
        switch (d.source) {
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Mutation: {
                if (isSync) {
                    d.adds.forEach(function (m) { return _this.treeIndex.add(m); });
                    d.texts.forEach(function (m) {
                        var target = _this.mirror.getNode(m.id);
                        var parent = target === null || target === void 0 ? void 0 : target.parentNode;
                        if (parent && _this.virtualStyleRulesMap.has(parent))
                            _this.virtualStyleRulesMap.delete(parent);
                        _this.treeIndex.text(m);
                    });
                    d.attributes.forEach(function (m) { return _this.treeIndex.attribute(m); });
                    d.removes.forEach(function (m) { return _this.treeIndex.remove(m, _this.mirror); });
                }
                try {
                    this.applyMutation(d, isSync);
                }
                catch (error) {
                    this.warn("Exception in mutation ".concat(error.message || error), d);
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Drag:
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].TouchMove:
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MouseMove:
                if (isSync) {
                    var lastPosition = d.positions[d.positions.length - 1];
                    this.mousePos = {
                        x: lastPosition.x,
                        y: lastPosition.y,
                        id: lastPosition.id,
                        debugData: d,
                    };
                }
                else {
                    d.positions.forEach(function (p) {
                        var action = {
                            doAction: function () {
                                _this.moveAndHover(p.x, p.y, p.id, isSync, d);
                            },
                            delay: p.timeOffset +
                                e.timestamp -
                                _this.service.state.context.baselineTime,
                        };
                        _this.timer.addAction(action);
                    });
                    this.timer.addAction({
                        doAction: function () { },
                        delay: e.delay - ((_a = d.positions[0]) === null || _a === void 0 ? void 0 : _a.timeOffset),
                    });
                }
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MouseInteraction: {
                if (d.id === -1) {
                    break;
                }
                var event_3 = new Event(_types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"][d.type].toLowerCase());
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].MouseInteraction, {
                    type: d.type,
                    target: target,
                });
                var triggerFocus = this.config.triggerFocus;
                switch (d.type) {
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].Blur:
                        if ('blur' in target) {
                            target.blur();
                        }
                        break;
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].Focus:
                        if (triggerFocus && target.focus) {
                            target.focus({
                                preventScroll: true,
                            });
                        }
                        break;
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].Click:
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart:
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchEnd:
                        if (isSync) {
                            if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart) {
                                this.touchActive = true;
                            }
                            else if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchEnd) {
                                this.touchActive = false;
                            }
                            this.mousePos = {
                                x: d.x,
                                y: d.y,
                                id: d.id,
                                debugData: d,
                            };
                        }
                        else {
                            if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart) {
                                this.tailPositions.length = 0;
                            }
                            this.moveAndHover(d.x, d.y, d.id, isSync, d);
                            if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].Click) {
                                this.mouse.classList.remove('active');
                                void this.mouse.offsetWidth;
                                this.mouse.classList.add('active');
                            }
                            else if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchStart) {
                                void this.mouse.offsetWidth;
                                this.mouse.classList.add('touch-active');
                            }
                            else if (d.type === _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchEnd) {
                                this.mouse.classList.remove('touch-active');
                            }
                        }
                        break;
                    case _types_js__WEBPACK_IMPORTED_MODULE_6__["MouseInteractions"].TouchCancel:
                        if (isSync) {
                            this.touchActive = false;
                        }
                        else {
                            this.mouse.classList.remove('touch-active');
                        }
                        break;
                    default:
                        target.dispatchEvent(event_3);
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Scroll: {
                if (d.id === -1) {
                    break;
                }
                if (isSync) {
                    this.treeIndex.scroll(d);
                    break;
                }
                this.applyScroll(d, false);
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].ViewportResize:
                this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].Resize, {
                    width: d.width,
                    height: d.height,
                });
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Input: {
                if (d.id === -1) {
                    break;
                }
                if (isSync) {
                    this.treeIndex.input(d);
                    break;
                }
                this.applyInput(d);
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].MediaInteraction: {
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                var mediaEl = target;
                try {
                    if (d.currentTime) {
                        mediaEl.currentTime = d.currentTime;
                    }
                    if (d.volume) {
                        mediaEl.volume = d.volume;
                    }
                    if (d.muted) {
                        mediaEl.muted = d.muted;
                    }
                    if (d.type === 1) {
                        mediaEl.pause();
                    }
                    if (d.type === 0) {
                        mediaEl.play();
                    }
                }
                catch (error) {
                    if (this.config.showWarning) {
                        console.warn("Failed to replay media interactions: ".concat(error.message || error));
                    }
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].StyleSheetRule: {
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                var styleEl = target;
                var parent_2 = target.parentNode;
                var usingVirtualParent_1 = this.fragmentParentMap.has(parent_2);
                var styleSheet_1 = usingVirtualParent_1 ? null : styleEl.sheet;
                var rules_1;
                if (!styleSheet_1) {
                    if (this.virtualStyleRulesMap.has(target)) {
                        rules_1 = this.virtualStyleRulesMap.get(target);
                    }
                    else {
                        rules_1 = [];
                        this.virtualStyleRulesMap.set(target, rules_1);
                    }
                }
                if (d.adds) {
                    d.adds.forEach(function (_a) {
                        var rule = _a.rule, nestedIndex = _a.index;
                        if (styleSheet_1) {
                            try {
                                if (Array.isArray(nestedIndex)) {
                                    var _b = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getPositionsAndIndex"])(nestedIndex), positions = _b.positions, index = _b.index;
                                    var nestedRule = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getNestedRule"])(styleSheet_1.cssRules, positions);
                                    nestedRule.insertRule(rule, index);
                                }
                                else {
                                    var index = nestedIndex === undefined
                                        ? undefined
                                        : Math.min(nestedIndex, styleSheet_1.cssRules.length);
                                    styleSheet_1.insertRule(rule, index);
                                }
                            }
                            catch (e) {
                            }
                        }
                        else {
                            rules_1 === null || rules_1 === void 0 ? void 0 : rules_1.push({
                                cssText: rule,
                                index: nestedIndex,
                                type: _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["StyleRuleType"].Insert,
                            });
                        }
                    });
                }
                if (d.removes) {
                    d.removes.forEach(function (_a) {
                        var nestedIndex = _a.index;
                        if (usingVirtualParent_1) {
                            rules_1 === null || rules_1 === void 0 ? void 0 : rules_1.push({ index: nestedIndex, type: _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["StyleRuleType"].Remove });
                        }
                        else {
                            try {
                                if (Array.isArray(nestedIndex)) {
                                    var _b = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getPositionsAndIndex"])(nestedIndex), positions = _b.positions, index = _b.index;
                                    var nestedRule = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getNestedRule"])(styleSheet_1.cssRules, positions);
                                    nestedRule.deleteRule(index || 0);
                                }
                                else {
                                    styleSheet_1 === null || styleSheet_1 === void 0 ? void 0 : styleSheet_1.deleteRule(nestedIndex);
                                }
                            }
                            catch (e) {
                            }
                        }
                    });
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].StyleDeclaration: {
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                var styleEl = target;
                var parent_3 = target.parentNode;
                var usingVirtualParent = this.fragmentParentMap.has(parent_3);
                var styleSheet = usingVirtualParent ? null : styleEl.sheet;
                var rules = [];
                if (!styleSheet) {
                    if (this.virtualStyleRulesMap.has(target)) {
                        rules = this.virtualStyleRulesMap.get(target);
                    }
                    else {
                        rules = [];
                        this.virtualStyleRulesMap.set(target, rules);
                    }
                }
                if (d.set) {
                    if (styleSheet) {
                        var rule = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getNestedRule"])(styleSheet.rules, d.index);
                        rule.style.setProperty(d.set.property, d.set.value, d.set.priority);
                    }
                    else {
                        rules.push(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["StyleRuleType"].SetProperty, index: d.index }, d.set));
                    }
                }
                if (d.remove) {
                    if (styleSheet) {
                        var rule = Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["getNestedRule"])(styleSheet.rules, d.index);
                        rule.style.removeProperty(d.remove.property);
                    }
                    else {
                        rules.push(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: _virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["StyleRuleType"].RemoveProperty, index: d.index }, d.remove));
                    }
                }
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].CanvasMutation: {
                if (!this.config.UNSAFE_replayCanvas) {
                    return;
                }
                var target = this.mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                Object(_canvas_index_js__WEBPACK_IMPORTED_MODULE_10__["default"])({
                    event: e,
                    mutation: d,
                    target: target,
                    imageMap: this.imageMap,
                    errorHandler: this.warnCanvasMutationFailed.bind(this),
                });
                break;
            }
            case _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Font: {
                try {
                    var fontFace = new FontFace(d.family, d.buffer ? new Uint8Array(JSON.parse(d.fontSource)) : d.fontSource, d.descriptors);
                    (_b = this.iframe.contentDocument) === null || _b === void 0 ? void 0 : _b.fonts.add(fontFace);
                }
                catch (error) {
                    if (this.config.showWarning) {
                        console.warn(error);
                    }
                }
                break;
            }
        }
    };
    Replayer.prototype.applyMutation = function (d, useVirtualParent) {
        var e_14, _a;
        var _this = this;
        d.removes.forEach(function (mutation) {
            var target = _this.mirror.getNode(mutation.id);
            if (!target) {
                if (d.removes.find(function (r) { return r.id === mutation.parentId; })) {
                    return;
                }
                return _this.warnNodeNotFound(d, mutation.id);
            }
            if (_this.virtualStyleRulesMap.has(target)) {
                _this.virtualStyleRulesMap.delete(target);
            }
            var parent = _this.mirror.getNode(mutation.parentId);
            if (!parent) {
                return _this.warnNodeNotFound(d, mutation.parentId);
            }
            if (mutation.isShadow && Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["hasShadowRoot"])(parent)) {
                parent = parent.shadowRoot;
            }
            _this.mirror.removeNodeFromMap(target);
            if (parent) {
                var realTarget = null;
                var realParent = '__sn' in parent ? _this.fragmentParentMap.get(parent) : undefined;
                if (realParent && realParent.contains(target)) {
                    parent = realParent;
                }
                else if (_this.fragmentParentMap.has(target)) {
                    realTarget = _this.fragmentParentMap.get(target);
                    _this.fragmentParentMap.delete(target);
                    target = realTarget;
                }
                try {
                    parent.removeChild(target);
                }
                catch (error) {
                    if (error instanceof DOMException) {
                        _this.warn('parent could not remove child in mutation', parent, realParent, target, realTarget, d);
                    }
                    else {
                        throw error;
                    }
                }
            }
        });
        var legacy_missingNodeMap = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.legacy_missingNodeRetryMap);
        var queue = [];
        var nextNotInDOM = function (mutation) {
            var next = null;
            if (mutation.nextId) {
                next = _this.mirror.getNode(mutation.nextId);
            }
            if (mutation.nextId !== null &&
                mutation.nextId !== undefined &&
                mutation.nextId !== -1 &&
                !next) {
                return true;
            }
            return false;
        };
        var appendNode = function (mutation) {
            var e_15, _a;
            var _b, _c;
            if (!_this.iframe.contentDocument) {
                return console.warn('Looks like your replayer has been destroyed.');
            }
            var parent = _this.mirror.getNode(mutation.parentId);
            if (!parent) {
                if (mutation.node.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Document) {
                    return _this.newDocumentQueue.push(mutation);
                }
                return queue.push(mutation);
            }
            var parentInDocument = null;
            if (_this.iframe.contentDocument.contains) {
                parentInDocument = _this.iframe.contentDocument.contains(parent);
            }
            else if (_this.iframe.contentDocument.body.contains) {
                parentInDocument = _this.iframe.contentDocument.body.contains(parent);
            }
            var hasIframeChild = ((_c = (_b = parent).getElementsByTagName) === null || _c === void 0 ? void 0 : _c.call(_b, 'iframe').length) > 0;
            if (useVirtualParent &&
                parentInDocument &&
                !Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["isIframeINode"])(parent) &&
                !hasIframeChild) {
                var virtualParent = document.createDocumentFragment();
                _this.mirror.map[mutation.parentId] = virtualParent;
                _this.fragmentParentMap.set(virtualParent, parent);
                _this.storeState(parent);
                while (parent.firstChild) {
                    virtualParent.appendChild(parent.firstChild);
                }
                parent = virtualParent;
            }
            if (mutation.node.isShadow) {
                if (!Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["hasShadowRoot"])(parent)) {
                    parent.attachShadow({ mode: 'open' });
                    parent = parent.shadowRoot;
                }
                else
                    parent = parent.shadowRoot;
            }
            var previous = null;
            var next = null;
            if (mutation.previousId) {
                previous = _this.mirror.getNode(mutation.previousId);
            }
            if (mutation.nextId) {
                next = _this.mirror.getNode(mutation.nextId);
            }
            if (nextNotInDOM(mutation)) {
                return queue.push(mutation);
            }
            if (mutation.node.rootId && !_this.mirror.getNode(mutation.node.rootId)) {
                return;
            }
            var targetDoc = mutation.node.rootId
                ? _this.mirror.getNode(mutation.node.rootId)
                : _this.iframe.contentDocument;
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["isIframeINode"])(parent)) {
                _this.attachDocumentToIframe(mutation, parent);
                return;
            }
            var target = Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["buildNodeWithSN"])(mutation.node, {
                doc: targetDoc,
                map: _this.mirror.map,
                skipChild: true,
                hackCss: true,
                cache: _this.cache,
            });
            if (mutation.previousId === -1 || mutation.nextId === -1) {
                legacy_missingNodeMap[mutation.node.id] = {
                    node: target,
                    mutation: mutation,
                };
                return;
            }
            if ('__sn' in parent &&
                parent.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element &&
                parent.__sn.tagName === 'textarea' &&
                mutation.node.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Text) {
                try {
                    for (var _d = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(parent.childNodes)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var c = _e.value;
                        if (c.nodeType === parent.TEXT_NODE) {
                            parent.removeChild(c);
                        }
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
            }
            if (previous && previous.nextSibling && previous.nextSibling.parentNode) {
                parent.insertBefore(target, previous.nextSibling);
            }
            else if (next && next.parentNode) {
                parent.contains(next)
                    ? parent.insertBefore(target, next)
                    : parent.insertBefore(target, null);
            }
            else {
                if (parent === targetDoc) {
                    while (targetDoc.firstChild) {
                        targetDoc.removeChild(targetDoc.firstChild);
                    }
                }
                parent.appendChild(target);
            }
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["isIframeINode"])(target)) {
                var mutationInQueue_1 = _this.newDocumentQueue.find(function (m) { return m.parentId === target.__sn.id; });
                if (mutationInQueue_1) {
                    _this.attachDocumentToIframe(mutationInQueue_1, target);
                    _this.newDocumentQueue = _this.newDocumentQueue.filter(function (m) { return m !== mutationInQueue_1; });
                }
            }
            if (mutation.previousId || mutation.nextId) {
                _this.legacy_resolveMissingNode(legacy_missingNodeMap, parent, target, mutation);
            }
        };
        d.adds.forEach(function (mutation) {
            appendNode(mutation);
        });
        var startTime = Date.now();
        while (queue.length) {
            var resolveTrees = Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["queueToResolveTrees"])(queue);
            queue.length = 0;
            if (Date.now() - startTime > 500) {
                this.warn('Timeout in the loop, please check the resolve tree data:', resolveTrees);
                break;
            }
            try {
                for (var resolveTrees_1 = (e_14 = void 0, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(resolveTrees)), resolveTrees_1_1 = resolveTrees_1.next(); !resolveTrees_1_1.done; resolveTrees_1_1 = resolveTrees_1.next()) {
                    var tree = resolveTrees_1_1.value;
                    var parent_4 = this.mirror.getNode(tree.value.parentId);
                    if (!parent_4) {
                        this.debug('Drop resolve tree since there is no parent for the root node.', tree);
                    }
                    else {
                        Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["iterateResolveTree"])(tree, function (mutation) {
                            appendNode(mutation);
                        });
                    }
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (resolveTrees_1_1 && !resolveTrees_1_1.done && (_a = resolveTrees_1.return)) _a.call(resolveTrees_1);
                }
                finally { if (e_14) throw e_14.error; }
            }
        }
        if (Object.keys(legacy_missingNodeMap).length) {
            Object.assign(this.legacy_missingNodeRetryMap, legacy_missingNodeMap);
        }
        d.texts.forEach(function (mutation) {
            var target = _this.mirror.getNode(mutation.id);
            if (!target) {
                if (d.removes.find(function (r) { return r.id === mutation.id; })) {
                    return;
                }
                return _this.warnNodeNotFound(d, mutation.id);
            }
            if (_this.fragmentParentMap.has(target)) {
                target = _this.fragmentParentMap.get(target);
            }
            target.textContent = mutation.value;
        });
        d.attributes.forEach(function (mutation) {
            var target = _this.mirror.getNode(mutation.id);
            if (!target) {
                if (d.removes.find(function (r) { return r.id === mutation.id; })) {
                    return;
                }
                return _this.warnNodeNotFound(d, mutation.id);
            }
            if (_this.fragmentParentMap.has(target)) {
                target = _this.fragmentParentMap.get(target);
            }
            for (var attributeName in mutation.attributes) {
                if (typeof attributeName === 'string') {
                    var value = mutation.attributes[attributeName];
                    if (value === null) {
                        target.removeAttribute(attributeName);
                    }
                    else if (typeof value === 'string') {
                        try {
                            target.setAttribute(attributeName, value);
                        }
                        catch (error) {
                            if (_this.config.showWarning) {
                                console.warn('An error occurred may due to the checkout feature.', error);
                            }
                        }
                    }
                    else if (attributeName === 'style') {
                        var styleValues = value;
                        var targetEl = target;
                        for (var s in styleValues) {
                            if (styleValues[s] === false) {
                                targetEl.style.removeProperty(s);
                            }
                            else if (styleValues[s] instanceof Array) {
                                var svp = styleValues[s];
                                targetEl.style.setProperty(s, svp[0], svp[1]);
                            }
                            else {
                                var svs = styleValues[s];
                                targetEl.style.setProperty(s, svs);
                            }
                        }
                    }
                }
            }
        });
    };
    Replayer.prototype.applyScroll = function (d, isSync) {
        var target = this.mirror.getNode(d.id);
        if (!target) {
            return this.debugNodeNotFound(d, d.id);
        }
        if (target === this.iframe.contentDocument) {
            this.iframe.contentWindow.scrollTo({
                top: d.y,
                left: d.x,
                behavior: isSync ? 'auto' : 'smooth',
            });
        }
        else if (target.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Document) {
            target.defaultView.scrollTo({
                top: d.y,
                left: d.x,
                behavior: isSync ? 'auto' : 'smooth',
            });
        }
        else {
            try {
                target.scrollTop = d.y;
                target.scrollLeft = d.x;
            }
            catch (error) {
            }
        }
    };
    Replayer.prototype.applyInput = function (d) {
        var target = this.mirror.getNode(d.id);
        if (!target) {
            return this.debugNodeNotFound(d, d.id);
        }
        try {
            target.checked = d.isChecked;
            target.value = d.text;
        }
        catch (error) {
        }
    };
    Replayer.prototype.applyText = function (d, mutation) {
        var target = this.mirror.getNode(d.id);
        if (!target) {
            return this.debugNodeNotFound(mutation, d.id);
        }
        try {
            target.textContent = d.value;
        }
        catch (error) {
        }
    };
    Replayer.prototype.legacy_resolveMissingNode = function (map, parent, target, targetMutation) {
        var previousId = targetMutation.previousId, nextId = targetMutation.nextId;
        var previousInMap = previousId && map[previousId];
        var nextInMap = nextId && map[nextId];
        if (previousInMap) {
            var _a = previousInMap, node = _a.node, mutation = _a.mutation;
            parent.insertBefore(node, target);
            delete map[mutation.node.id];
            delete this.legacy_missingNodeRetryMap[mutation.node.id];
            if (mutation.previousId || mutation.nextId) {
                this.legacy_resolveMissingNode(map, parent, node, mutation);
            }
        }
        if (nextInMap) {
            var _b = nextInMap, node = _b.node, mutation = _b.mutation;
            parent.insertBefore(node, target.nextSibling);
            delete map[mutation.node.id];
            delete this.legacy_missingNodeRetryMap[mutation.node.id];
            if (mutation.previousId || mutation.nextId) {
                this.legacy_resolveMissingNode(map, parent, node, mutation);
            }
        }
    };
    Replayer.prototype.moveAndHover = function (x, y, id, isSync, debugData) {
        var target = this.mirror.getNode(id);
        if (!target) {
            return this.debugNodeNotFound(debugData, id);
        }
        var base = Object(_utils_js__WEBPACK_IMPORTED_MODULE_7__["getBaseDimension"])(target, this.iframe);
        var _x = x * base.absoluteScale + base.x;
        var _y = y * base.absoluteScale + base.y;
        this.mouse.style.left = "".concat(_x, "px");
        this.mouse.style.top = "".concat(_y, "px");
        if (!isSync) {
            this.drawMouseTail({ x: _x, y: _y });
        }
        this.hoverElements(target);
    };
    Replayer.prototype.drawMouseTail = function (position) {
        var _this = this;
        if (!this.mouseTail) {
            return;
        }
        var _a = this.config.mouseTail === true
            ? defaultMouseTailConfig
            : Object.assign({}, defaultMouseTailConfig, this.config.mouseTail), lineCap = _a.lineCap, lineWidth = _a.lineWidth, strokeStyle = _a.strokeStyle, duration = _a.duration;
        var draw = function () {
            if (!_this.mouseTail) {
                return;
            }
            var ctx = _this.mouseTail.getContext('2d');
            if (!ctx || !_this.tailPositions.length) {
                return;
            }
            ctx.clearRect(0, 0, _this.mouseTail.width, _this.mouseTail.height);
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.lineCap = lineCap;
            ctx.strokeStyle = strokeStyle;
            ctx.moveTo(_this.tailPositions[0].x, _this.tailPositions[0].y);
            _this.tailPositions.forEach(function (p) { return ctx.lineTo(p.x, p.y); });
            ctx.stroke();
        };
        this.tailPositions.push(position);
        draw();
        setTimeout(function () {
            _this.tailPositions = _this.tailPositions.filter(function (p) { return p !== position; });
            draw();
        }, duration / this.speedService.state.context.timer.speed);
    };
    Replayer.prototype.hoverElements = function (el) {
        var _a;
        (_a = this.iframe.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.\\:hover').forEach(function (hoveredEl) {
            hoveredEl.classList.remove(':hover');
        });
        var currentEl = el;
        while (currentEl) {
            if (currentEl.classList) {
                currentEl.classList.add(':hover');
            }
            currentEl = currentEl.parentElement;
        }
    };
    Replayer.prototype.isUserInteraction = function (event) {
        if (event.type !== _types_js__WEBPACK_IMPORTED_MODULE_6__["EventType"].IncrementalSnapshot) {
            return false;
        }
        return (event.data.source > _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Mutation &&
            event.data.source <= _types_js__WEBPACK_IMPORTED_MODULE_6__["IncrementalSource"].Input);
    };
    Replayer.prototype.backToNormal = function () {
        this.nextUserInteractionEvent = null;
        if (this.speedService.state.matches('normal')) {
            return;
        }
        this.speedService.send({ type: 'BACK_TO_NORMAL' });
        this.emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_6__["ReplayerEvents"].SkipEnd, {
            speed: this.speedService.state.context.normalSpeed,
        });
    };
    Replayer.prototype.restoreRealParent = function (frag, parent) {
        this.mirror.map[parent.__sn.id] = parent;
        if (parent.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_1__["NodeType"].Element &&
            parent.__sn.tagName === 'textarea' &&
            frag.textContent) {
            parent.value = frag.textContent;
        }
        parent.appendChild(frag);
        this.restoreState(parent);
    };
    Replayer.prototype.storeState = function (parent) {
        var e_16, _a;
        if (parent) {
            if (parent.nodeType === parent.ELEMENT_NODE) {
                var parentElement = parent;
                if (parentElement.scrollLeft || parentElement.scrollTop) {
                    this.elementStateMap.set(parent, {
                        scroll: [parentElement.scrollLeft, parentElement.scrollTop],
                    });
                }
                if (parentElement.tagName === 'STYLE')
                    Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["storeCSSRules"])(parentElement, this.virtualStyleRulesMap);
                var children = parentElement.children;
                try {
                    for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        this.storeState(child);
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
            }
        }
    };
    Replayer.prototype.restoreState = function (parent) {
        var e_17, _a;
        if (parent.nodeType === parent.ELEMENT_NODE) {
            var parentElement = parent;
            if (this.elementStateMap.has(parent)) {
                var storedState = this.elementStateMap.get(parent);
                if (storedState.scroll) {
                    parentElement.scrollLeft = storedState.scroll[0];
                    parentElement.scrollTop = storedState.scroll[1];
                }
                this.elementStateMap.delete(parent);
            }
            var children = parentElement.children;
            try {
                for (var _b = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(children)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    this.restoreState(child);
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_17) throw e_17.error; }
            }
        }
    };
    Replayer.prototype.restoreNodeSheet = function (node) {
        var storedRules = this.virtualStyleRulesMap.get(node);
        if (node.nodeName !== 'STYLE') {
            return;
        }
        if (!storedRules) {
            return;
        }
        var styleNode = node;
        Object(_virtual_styles_js__WEBPACK_IMPORTED_MODULE_9__["applyVirtualStyleRulesToNode"])(storedRules, styleNode);
    };
    Replayer.prototype.warnNodeNotFound = function (d, id) {
        if (this.treeIndex.idRemoved(id)) {
            this.warn("Node with id '".concat(id, "' was previously removed. "), d);
        }
        else {
            this.warn("Node with id '".concat(id, "' not found. "), d);
        }
    };
    Replayer.prototype.warnCanvasMutationFailed = function (d, error) {
        this.warn("Has error on canvas update", error, 'canvas mutation:', d);
    };
    Replayer.prototype.debugNodeNotFound = function (d, id) {
        if (this.treeIndex.idRemoved(id)) {
            this.debug(REPLAY_CONSOLE_PREFIX, "Node with id '".concat(id, "' was previously removed. "), d);
        }
        else {
            this.debug(REPLAY_CONSOLE_PREFIX, "Node with id '".concat(id, "' not found. "), d);
        }
    };
    Replayer.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.showWarning) {
            return;
        }
        console.warn.apply(console, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([REPLAY_CONSOLE_PREFIX], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
    };
    Replayer.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!this.config.showDebug) {
            return;
        }
        console.log.apply(console, Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([REPLAY_CONSOLE_PREFIX], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(args), false));
    };
    return Replayer;
}());




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/machine.js ***!
  \**************************************************************************/
/*! exports provided: createPlayerService, createSpeedService, discardPriorSnapshots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPlayerService", function() { return createPlayerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpeedService", function() { return createSpeedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discardPriorSnapshots", function() { return discardPriorSnapshots; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ext/@xstate/fsm/es/index.js */ "./node_modules/rrweb/es/rrweb/ext/@xstate/fsm/es/index.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js");





function discardPriorSnapshots(events, baselineTime) {
    for (var idx = events.length - 1; idx >= 0; idx--) {
        var event_1 = events[idx];
        if (event_1.type === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].Meta) {
            if (event_1.timestamp <= baselineTime) {
                return events.slice(idx);
            }
        }
    }
    return events;
}
function createPlayerService(context, _a) {
    var getCastFn = _a.getCastFn, applyEventsSynchronously = _a.applyEventsSynchronously, emitter = _a.emitter;
    var playerMachine = Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["createMachine"])({
        id: 'player',
        context: context,
        initial: 'paused',
        states: {
            playing: {
                on: {
                    PAUSE: {
                        target: 'paused',
                        actions: ['pause'],
                    },
                    CAST_EVENT: {
                        target: 'playing',
                        actions: 'castEvent',
                    },
                    END: {
                        target: 'paused',
                        actions: ['resetLastPlayedEvent', 'pause'],
                    },
                    ADD_EVENT: {
                        target: 'playing',
                        actions: ['addEvent'],
                    },
                },
            },
            paused: {
                on: {
                    PLAY: {
                        target: 'playing',
                        actions: ['recordTimeOffset', 'play'],
                    },
                    CAST_EVENT: {
                        target: 'paused',
                        actions: 'castEvent',
                    },
                    TO_LIVE: {
                        target: 'live',
                        actions: ['startLive'],
                    },
                    ADD_EVENT: {
                        target: 'paused',
                        actions: ['addEvent'],
                    },
                },
            },
            live: {
                on: {
                    ADD_EVENT: {
                        target: 'live',
                        actions: ['addEvent'],
                    },
                    CAST_EVENT: {
                        target: 'live',
                        actions: ['castEvent'],
                    },
                },
            },
        },
    }, {
        actions: {
            castEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])({
                lastPlayedEvent: function (ctx, event) {
                    if (event.type === 'CAST_EVENT') {
                        return event.payload.event;
                    }
                    return ctx.lastPlayedEvent;
                },
            }),
            recordTimeOffset: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(function (ctx, event) {
                var timeOffset = ctx.timeOffset;
                if ('payload' in event && 'timeOffset' in event.payload) {
                    timeOffset = event.payload.timeOffset;
                }
                return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), { timeOffset: timeOffset, baselineTime: ctx.events[0].timestamp + timeOffset });
            }),
            play: function (ctx) {
                var e_1, _a, e_2, _b;
                var _c;
                var timer = ctx.timer, events = ctx.events, baselineTime = ctx.baselineTime, lastPlayedEvent = ctx.lastPlayedEvent;
                timer.clear();
                try {
                    for (var events_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                        var event_2 = events_1_1.value;
                        Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["addDelay"])(event_2, baselineTime);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var neededEvents = discardPriorSnapshots(events, baselineTime);
                var lastPlayedTimestamp = lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.timestamp;
                if ((lastPlayedEvent === null || lastPlayedEvent === void 0 ? void 0 : lastPlayedEvent.type) === _types_js__WEBPACK_IMPORTED_MODULE_2__["EventType"].IncrementalSnapshot &&
                    lastPlayedEvent.data.source === _types_js__WEBPACK_IMPORTED_MODULE_2__["IncrementalSource"].MouseMove) {
                    lastPlayedTimestamp =
                        lastPlayedEvent.timestamp +
                            ((_c = lastPlayedEvent.data.positions[0]) === null || _c === void 0 ? void 0 : _c.timeOffset);
                }
                if (baselineTime < (lastPlayedTimestamp || 0)) {
                    emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].PlayBack);
                }
                var syncEvents = new Array();
                var actions = new Array();
                var _loop_1 = function (event_3) {
                    if (lastPlayedTimestamp &&
                        lastPlayedTimestamp < baselineTime &&
                        (event_3.timestamp <= lastPlayedTimestamp ||
                            event_3 === lastPlayedEvent)) {
                        return "continue";
                    }
                    if (event_3.timestamp < baselineTime) {
                        syncEvents.push(event_3);
                    }
                    else {
                        var castFn_1 = getCastFn(event_3, false);
                        actions.push({
                            doAction: function () {
                                castFn_1();
                            },
                            delay: event_3.delay,
                        });
                    }
                };
                try {
                    for (var neededEvents_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(neededEvents), neededEvents_1_1 = neededEvents_1.next(); !neededEvents_1_1.done; neededEvents_1_1 = neededEvents_1.next()) {
                        var event_3 = neededEvents_1_1.value;
                        _loop_1(event_3);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (neededEvents_1_1 && !neededEvents_1_1.done && (_b = neededEvents_1.return)) _b.call(neededEvents_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                applyEventsSynchronously(syncEvents);
                emitter.emit(_types_js__WEBPACK_IMPORTED_MODULE_2__["ReplayerEvents"].Flush);
                timer.addActions(actions);
                timer.start();
            },
            pause: function (ctx) {
                ctx.timer.clear();
            },
            resetLastPlayedEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(function (ctx) {
                return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), { lastPlayedEvent: null });
            }),
            startLive: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])({
                baselineTime: function (ctx, event) {
                    ctx.timer.toggleLiveMode(true);
                    ctx.timer.start();
                    if (event.type === 'TO_LIVE' && event.payload.baselineTime) {
                        return event.payload.baselineTime;
                    }
                    return Date.now();
                },
            }),
            addEvent: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])(function (ctx, machineEvent) {
                var baselineTime = ctx.baselineTime, timer = ctx.timer, events = ctx.events;
                if (machineEvent.type === 'ADD_EVENT') {
                    var event_4 = machineEvent.payload.event;
                    Object(_timer_js__WEBPACK_IMPORTED_MODULE_3__["addDelay"])(event_4, baselineTime);
                    var end = events.length - 1;
                    if (!events[end] || events[end].timestamp <= event_4.timestamp) {
                        events.push(event_4);
                    }
                    else {
                        var insertionIndex = -1;
                        var start = 0;
                        while (start <= end) {
                            var mid = Math.floor((start + end) / 2);
                            if (events[mid].timestamp <= event_4.timestamp) {
                                start = mid + 1;
                            }
                            else {
                                end = mid - 1;
                            }
                        }
                        if (insertionIndex === -1) {
                            insertionIndex = start;
                        }
                        events.splice(insertionIndex, 0, event_4);
                    }
                    var isSync = event_4.timestamp < baselineTime;
                    var castFn_2 = getCastFn(event_4, isSync);
                    if (isSync) {
                        castFn_2();
                    }
                    else if (timer.isActive()) {
                        timer.addAction({
                            doAction: function () {
                                castFn_2();
                            },
                            delay: event_4.delay,
                        });
                    }
                }
                return Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, ctx), { events: events });
            }),
        },
    });
    return Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["interpret"])(playerMachine);
}
function createSpeedService(context) {
    var speedMachine = Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["createMachine"])({
        id: 'speed',
        context: context,
        initial: 'normal',
        states: {
            normal: {
                on: {
                    FAST_FORWARD: {
                        target: 'skipping',
                        actions: ['recordSpeed', 'setSpeed'],
                    },
                    SET_SPEED: {
                        target: 'normal',
                        actions: ['setSpeed'],
                    },
                },
            },
            skipping: {
                on: {
                    BACK_TO_NORMAL: {
                        target: 'normal',
                        actions: ['restoreSpeed'],
                    },
                    SET_SPEED: {
                        target: 'normal',
                        actions: ['setSpeed'],
                    },
                },
            },
        },
    }, {
        actions: {
            setSpeed: function (ctx, event) {
                if ('payload' in event) {
                    ctx.timer.setSpeed(event.payload.speed);
                }
            },
            recordSpeed: Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["assign"])({
                normalSpeed: function (ctx) { return ctx.timer.speed; },
            }),
            restoreSpeed: function (ctx) {
                ctx.timer.setSpeed(ctx.normalSpeed);
            },
        },
    });
    return Object(_ext_xstate_fsm_es_index_js__WEBPACK_IMPORTED_MODULE_1__["interpret"])(speedMachine);
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/smoothscroll.js ***!
  \*******************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
function polyfill(w, d) {
    if (w === void 0) { w = window; }
    if (d === void 0) { d = document; }
    if ('scrollBehavior' in d.documentElement.style &&
        w.__forceSmoothScrollPolyfill__ !== true) {
        return;
    }
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;
    var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView,
    };
    var now = w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;
    function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
    function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
    }
    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }
    function shouldBailOut(firstArg) {
        if (firstArg === null ||
            typeof firstArg !== 'object' ||
            firstArg.behavior === undefined ||
            firstArg.behavior === 'auto' ||
            firstArg.behavior === 'instant') {
            return true;
        }
        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
            return false;
        }
        throw new TypeError('behavior member of ScrollOptions ' +
            firstArg.behavior +
            ' is not a valid value for enumeration ScrollBehavior.');
    }
    function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
            return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }
        if (axis === 'X') {
            return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
    }
    function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
        return overflowValue === 'auto' || overflowValue === 'scroll';
    }
    function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
        return isScrollableY || isScrollableX;
    }
    function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
            el = el.parentNode || el.host;
        }
        return el;
    }
    function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;
        elapsed = elapsed > 1 ? 1 : elapsed;
        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY);
        if (currentX !== context.x || currentY !== context.y) {
            w.requestAnimationFrame(step.bind(w, context));
        }
    }
    function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();
        if (el === d.body) {
            scrollable = w;
            startX = w.scrollX || w.pageXOffset;
            startY = w.scrollY || w.pageYOffset;
            method = original.scroll;
        }
        else {
            scrollable = el;
            startX = el.scrollLeft;
            startY = el.scrollTop;
            method = scrollElement;
        }
        step({
            scrollable: scrollable,
            method: method,
            startTime: startTime,
            startX: startX,
            startY: startY,
            x: x,
            y: y,
        });
    }
    w.scroll = w.scrollTo = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            original.scroll.call(w, arguments[0].left !== undefined
                ? arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : w.scrollX || w.pageXOffset, arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                    ? arguments[1]
                    : w.scrollY || w.pageYOffset);
            return;
        }
        smoothScroll.call(w, d.body, arguments[0].left !== undefined
            ? ~~arguments[0].left
            : w.scrollX || w.pageXOffset, arguments[0].top !== undefined
            ? ~~arguments[0].top
            : w.scrollY || w.pageYOffset);
    };
    w.scrollBy = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0])) {
            original.scrollBy.call(w, arguments[0].left !== undefined
                ? arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? arguments[0]
                    : 0, arguments[0].top !== undefined
                ? arguments[0].top
                : arguments[1] !== undefined
                    ? arguments[1]
                    : 0);
            return;
        }
        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    };
    Element.prototype.scroll = Element.prototype.scrollTo = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
                throw new SyntaxError('Value could not be converted');
            }
            original.elementScroll.call(this, arguments[0].left !== undefined
                ? ~~arguments[0].left
                : typeof arguments[0] !== 'object'
                    ? ~~arguments[0]
                    : this.scrollLeft, arguments[0].top !== undefined
                ? ~~arguments[0].top
                : arguments[1] !== undefined
                    ? ~~arguments[1]
                    : this.scrollTop);
            return;
        }
        var left = arguments[0].left;
        var top = arguments[0].top;
        smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    };
    Element.prototype.scrollBy = function () {
        if (arguments[0] === undefined) {
            return;
        }
        if (shouldBailOut(arguments[0]) === true) {
            original.elementScroll.call(this, arguments[0].left !== undefined
                ? ~~arguments[0].left + this.scrollLeft
                : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined
                ? ~~arguments[0].top + this.scrollTop
                : ~~arguments[1] + this.scrollTop);
            return;
        }
        this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior,
        });
    };
    Element.prototype.scrollIntoView = function () {
        if (shouldBailOut(arguments[0]) === true) {
            original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
            return;
        }
        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();
        if (scrollableParent !== d.body) {
            smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
            if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
                w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: 'smooth',
                });
            }
        }
        else {
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: 'smooth',
            });
        }
    };
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/styles/inject-style.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rules = function (blockClass) { return [
    ".".concat(blockClass, " { background: currentColor }"),
    'noscript { display: none !important; }',
]; };

/* harmony default export */ __webpack_exports__["default"] = (rules);


/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js":
/*!************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/timer.js ***!
  \************************************************************************/
/*! exports provided: Timer, addDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDelay", function() { return addDelay; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");


var Timer = (function () {
    function Timer(actions, speed) {
        if (actions === void 0) { actions = []; }
        this.timeOffset = 0;
        this.raf = null;
        this.actions = actions;
        this.speed = speed;
    }
    Timer.prototype.addAction = function (action) {
        var index = this.findActionIndex(action);
        this.actions.splice(index, 0, action);
    };
    Timer.prototype.addActions = function (actions) {
        this.actions = this.actions.concat(actions);
    };
    Timer.prototype.start = function () {
        this.timeOffset = 0;
        var lastTimestamp = performance.now();
        var actions = this.actions;
        var self = this;
        function check() {
            var time = performance.now();
            self.timeOffset += (time - lastTimestamp) * self.speed;
            lastTimestamp = time;
            while (actions.length) {
                var action = actions[0];
                if (self.timeOffset >= action.delay) {
                    actions.shift();
                    action.doAction();
                }
                else {
                    break;
                }
            }
            if (actions.length > 0 || self.liveMode) {
                self.raf = requestAnimationFrame(check);
            }
        }
        this.raf = requestAnimationFrame(check);
    };
    Timer.prototype.clear = function () {
        if (this.raf) {
            cancelAnimationFrame(this.raf);
            this.raf = null;
        }
        this.actions.length = 0;
    };
    Timer.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Timer.prototype.toggleLiveMode = function (mode) {
        this.liveMode = mode;
    };
    Timer.prototype.isActive = function () {
        return this.raf !== null;
    };
    Timer.prototype.findActionIndex = function (action) {
        var start = 0;
        var end = this.actions.length - 1;
        while (start <= end) {
            var mid = Math.floor((start + end) / 2);
            if (this.actions[mid].delay < action.delay) {
                start = mid + 1;
            }
            else if (this.actions[mid].delay > action.delay) {
                end = mid - 1;
            }
            else {
                return mid + 1;
            }
        }
        return start;
    };
    return Timer;
}());
function addDelay(event, baselineTime) {
    if (event.type === _types_js__WEBPACK_IMPORTED_MODULE_0__["EventType"].IncrementalSnapshot &&
        event.data.source === _types_js__WEBPACK_IMPORTED_MODULE_0__["IncrementalSource"].MouseMove) {
        var firstOffset = event.data.positions[0].timeOffset;
        var firstTimestamp = event.timestamp + firstOffset;
        event.delay = firstTimestamp - baselineTime;
        return firstTimestamp - baselineTime;
    }
    event.delay = event.timestamp - baselineTime;
    return event.delay;
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/virtual-styles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/replay/virtual-styles.js ***!
  \*********************************************************************************/
/*! exports provided: StyleRuleType, applyVirtualStyleRulesToNode, getNestedRule, getPositionsAndIndex, storeCSSRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRuleType", function() { return StyleRuleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyVirtualStyleRulesToNode", function() { return applyVirtualStyleRulesToNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNestedRule", function() { return getNestedRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsAndIndex", function() { return getPositionsAndIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCSSRules", function() { return storeCSSRules; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");


var StyleRuleType;
(function (StyleRuleType) {
    StyleRuleType[StyleRuleType["Insert"] = 0] = "Insert";
    StyleRuleType[StyleRuleType["Remove"] = 1] = "Remove";
    StyleRuleType[StyleRuleType["Snapshot"] = 2] = "Snapshot";
    StyleRuleType[StyleRuleType["SetProperty"] = 3] = "SetProperty";
    StyleRuleType[StyleRuleType["RemoveProperty"] = 4] = "RemoveProperty";
})(StyleRuleType || (StyleRuleType = {}));
function getNestedRule(rules, position) {
    var rule = rules[position[0]];
    if (position.length === 1) {
        return rule;
    }
    else {
        return getNestedRule(rule.cssRules[position[1]]
            .cssRules, position.slice(2));
    }
}
function getPositionsAndIndex(nestedIndex) {
    var positions = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(nestedIndex), false);
    var index = positions.pop();
    return { positions: positions, index: index };
}
function applyVirtualStyleRulesToNode(storedRules, styleNode) {
    var sheet = styleNode.sheet;
    if (!sheet) {
        return;
    }
    storedRules.forEach(function (rule) {
        if (rule.type === StyleRuleType.Insert) {
            try {
                if (Array.isArray(rule.index)) {
                    var _a = getPositionsAndIndex(rule.index), positions = _a.positions, index = _a.index;
                    var nestedRule = getNestedRule(sheet.cssRules, positions);
                    nestedRule.insertRule(rule.cssText, index);
                }
                else {
                    sheet.insertRule(rule.cssText, rule.index);
                }
            }
            catch (e) {
            }
        }
        else if (rule.type === StyleRuleType.Remove) {
            try {
                if (Array.isArray(rule.index)) {
                    var _b = getPositionsAndIndex(rule.index), positions = _b.positions, index = _b.index;
                    var nestedRule = getNestedRule(sheet.cssRules, positions);
                    nestedRule.deleteRule(index || 0);
                }
                else {
                    sheet.deleteRule(rule.index);
                }
            }
            catch (e) {
            }
        }
        else if (rule.type === StyleRuleType.Snapshot) {
            restoreSnapshotOfStyleRulesToNode(rule.cssTexts, styleNode);
        }
        else if (rule.type === StyleRuleType.SetProperty) {
            var nativeRule = getNestedRule(sheet.cssRules, rule.index);
            nativeRule.style.setProperty(rule.property, rule.value, rule.priority);
        }
        else if (rule.type === StyleRuleType.RemoveProperty) {
            var nativeRule = getNestedRule(sheet.cssRules, rule.index);
            nativeRule.style.removeProperty(rule.property);
        }
    });
}
function restoreSnapshotOfStyleRulesToNode(cssTexts, styleNode) {
    var _a;
    try {
        var existingRules = Array.from(((_a = styleNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) || []).map(function (rule) { return rule.cssText; });
        var existingRulesReversed = Object.entries(existingRules).reverse();
        var lastMatch_1 = existingRules.length;
        existingRulesReversed.forEach(function (_a) {
            var _b;
            var _c = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), index = _c[0], rule = _c[1];
            var indexOf = cssTexts.indexOf(rule);
            if (indexOf === -1 || indexOf > lastMatch_1) {
                try {
                    (_b = styleNode.sheet) === null || _b === void 0 ? void 0 : _b.deleteRule(Number(index));
                }
                catch (e) {
                }
            }
            lastMatch_1 = indexOf;
        });
        cssTexts.forEach(function (cssText, index) {
            var _a, _b, _c;
            try {
                if (((_b = (_a = styleNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules[index]) === null || _b === void 0 ? void 0 : _b.cssText) !== cssText) {
                    (_c = styleNode.sheet) === null || _c === void 0 ? void 0 : _c.insertRule(cssText, index);
                }
            }
            catch (e) {
            }
        });
    }
    catch (e) {
    }
}
function storeCSSRules(parentElement, virtualStyleRulesMap) {
    var _a;
    try {
        var cssTexts = Array.from(((_a = parentElement.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) || []).map(function (rule) { return rule.cssText; });
        virtualStyleRulesMap.set(parentElement, [
            {
                type: StyleRuleType.Snapshot,
                cssTexts: cssTexts,
            },
        ]);
    }
    catch (e) {
    }
}




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js ***!
  \*****************************************************************/
/*! exports provided: CanvasContext, EventType, IncrementalSource, MediaInteractions, MouseInteractions, ReplayerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasContext", function() { return CanvasContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return IncrementalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaInteractions", function() { return MediaInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return MouseInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return ReplayerEvents; });
var EventType;
(function (EventType) {
    EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
    EventType[EventType["Load"] = 1] = "Load";
    EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
    EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
    EventType[EventType["Meta"] = 4] = "Meta";
    EventType[EventType["Custom"] = 5] = "Custom";
    EventType[EventType["Plugin"] = 6] = "Plugin";
})(EventType || (EventType = {}));
var IncrementalSource;
(function (IncrementalSource) {
    IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
    IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
    IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
    IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
    IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
    IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
    IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
    IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
    IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
    IncrementalSource[IncrementalSource["CanvasMutation"] = 9] = "CanvasMutation";
    IncrementalSource[IncrementalSource["Font"] = 10] = "Font";
    IncrementalSource[IncrementalSource["Log"] = 11] = "Log";
    IncrementalSource[IncrementalSource["Drag"] = 12] = "Drag";
    IncrementalSource[IncrementalSource["StyleDeclaration"] = 13] = "StyleDeclaration";
})(IncrementalSource || (IncrementalSource = {}));
var MouseInteractions;
(function (MouseInteractions) {
    MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
    MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
    MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
    MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
    MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
    MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
    MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
    MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
    MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
    MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
    MouseInteractions[MouseInteractions["TouchCancel"] = 10] = "TouchCancel";
})(MouseInteractions || (MouseInteractions = {}));
var CanvasContext;
(function (CanvasContext) {
    CanvasContext[CanvasContext["2D"] = 0] = "2D";
    CanvasContext[CanvasContext["WebGL"] = 1] = "WebGL";
    CanvasContext[CanvasContext["WebGL2"] = 2] = "WebGL2";
})(CanvasContext || (CanvasContext = {}));
var MediaInteractions;
(function (MediaInteractions) {
    MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
    MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
    MediaInteractions[MediaInteractions["Seeked"] = 2] = "Seeked";
    MediaInteractions[MediaInteractions["VolumeChange"] = 3] = "VolumeChange";
})(MediaInteractions || (MediaInteractions = {}));
var ReplayerEvents;
(function (ReplayerEvents) {
    ReplayerEvents["Start"] = "start";
    ReplayerEvents["Pause"] = "pause";
    ReplayerEvents["Resume"] = "resume";
    ReplayerEvents["Resize"] = "resize";
    ReplayerEvents["Finish"] = "finish";
    ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
    ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
    ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
    ReplayerEvents["SkipStart"] = "skip-start";
    ReplayerEvents["SkipEnd"] = "skip-end";
    ReplayerEvents["MouseInteraction"] = "mouse-interaction";
    ReplayerEvents["EventCast"] = "event-cast";
    ReplayerEvents["CustomEvent"] = "custom-event";
    ReplayerEvents["Flush"] = "flush";
    ReplayerEvents["StateChange"] = "state-change";
    ReplayerEvents["PlayBack"] = "play-back";
})(ReplayerEvents || (ReplayerEvents = {}));




/***/ }),

/***/ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rrweb/es/rrweb/packages/rrweb/src/utils.js ***!
  \*****************************************************************/
/*! exports provided: TreeIndex, _mirror, createMirror, getBaseDimension, getWindowHeight, getWindowWidth, hasShadowRoot, hookSetter, isAncestorRemoved, isBlocked, isIframeINode, isIgnored, isTouchEvent, iterateResolveTree, on, patch, polyfill, queueToResolveTrees, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeIndex", function() { return TreeIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mirror", function() { return _mirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirror", function() { return createMirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseDimension", function() { return getBaseDimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowHeight", function() { return getWindowHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindowWidth", function() { return getWindowWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasShadowRoot", function() { return hasShadowRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hookSetter", function() { return hookSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAncestorRemoved", function() { return isAncestorRemoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlocked", function() { return isBlocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIframeINode", function() { return isIframeINode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIgnored", function() { return isIgnored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchEvent", function() { return isTouchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateResolveTree", function() { return iterateResolveTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patch", function() { return patch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queueToResolveTrees", function() { return queueToResolveTrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ext/tslib/tslib.es6.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/ext/tslib/tslib.es6.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb/src/types.js");
/* harmony import */ var _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../rrweb-snapshot/es/rrweb-snapshot.js */ "./node_modules/rrweb/es/rrweb/packages/rrweb-snapshot/es/rrweb-snapshot.js");




function on(type, fn, target) {
    if (target === void 0) { target = document; }
    var options = { capture: true, passive: true };
    target.addEventListener(type, fn, options);
    return function () { return target.removeEventListener(type, fn, options); };
}
function createMirror() {
    return {
        map: {},
        getId: function (n) {
            if (!n || !n.__sn) {
                return -1;
            }
            return n.__sn.id;
        },
        getNode: function (id) {
            return this.map[id] || null;
        },
        removeNodeFromMap: function (n) {
            var _this = this;
            var id = n.__sn && n.__sn.id;
            delete this.map[id];
            if (n.childNodes) {
                n.childNodes.forEach(function (child) {
                    return _this.removeNodeFromMap(child);
                });
            }
        },
        has: function (id) {
            return this.map.hasOwnProperty(id);
        },
        reset: function () {
            this.map = {};
        },
    };
}
var DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' +
    '\r\n' +
    'now you can use replayer.getMirror() to access the mirror instance of a replayer,' +
    '\r\n' +
    'or you can use record.mirror to access the mirror instance during recording.';
var _mirror = {
    map: {},
    getId: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return -1;
    },
    getNode: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return null;
    },
    removeNodeFromMap: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
    has: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return false;
    },
    reset: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
};
if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
    _mirror = new Proxy(_mirror, {
        get: function (target, prop, receiver) {
            if (prop === 'map') {
                console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
}
function throttle(func, wait, options) {
    if (options === void 0) { options = {}; }
    var timeout = null;
    var previous = 0;
    return function (arg) {
        var now = Date.now();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        var context = this;
        var args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(function () {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(context, args);
            }, remaining);
        }
    };
}
function hookSetter(target, key, d, isRevoked, win) {
    if (win === void 0) { win = window; }
    var original = win.Object.getOwnPropertyDescriptor(target, key);
    win.Object.defineProperty(target, key, isRevoked
        ? d
        : {
            set: function (value) {
                var _this = this;
                setTimeout(function () {
                    d.set.call(_this, value);
                }, 0);
                if (original && original.set) {
                    original.set.call(this, value);
                }
            },
        });
    return function () { return hookSetter(target, key, original || {}, true); };
}
function patch(source, name, replacement) {
    try {
        if (!(name in source)) {
            return function () { };
        }
        var original_1 = source[name];
        var wrapped = replacement(original_1);
        if (typeof wrapped === 'function') {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __rrweb_original__: {
                    enumerable: false,
                    value: original_1,
                },
            });
        }
        source[name] = wrapped;
        return function () {
            source[name] = original_1;
        };
    }
    catch (_a) {
        return function () { };
    }
}
function getWindowHeight() {
    return (window.innerHeight ||
        (document.documentElement && document.documentElement.clientHeight) ||
        (document.body && document.body.clientHeight));
}
function getWindowWidth() {
    return (window.innerWidth ||
        (document.documentElement && document.documentElement.clientWidth) ||
        (document.body && document.body.clientWidth));
}
function isBlocked(node, blockClass) {
    if (!node) {
        return false;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
        var needBlock_1 = false;
        if (typeof blockClass === 'string') {
            if (node.closest !== undefined) {
                return node.closest('.' + blockClass) !== null;
            }
            else {
                needBlock_1 = node.classList.contains(blockClass);
            }
        }
        else {
            node.classList.forEach(function (className) {
                if (blockClass.test(className)) {
                    needBlock_1 = true;
                }
            });
        }
        return needBlock_1 || isBlocked(node.parentNode, blockClass);
    }
    if (node.nodeType === node.TEXT_NODE) {
        return isBlocked(node.parentNode, blockClass);
    }
    return isBlocked(node.parentNode, blockClass);
}
function isIgnored(n) {
    if ('__sn' in n) {
        return n.__sn.id === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__["IGNORED_NODE"];
    }
    return false;
}
function isAncestorRemoved(target, mirror) {
    if (Object(_rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__["isShadowRoot"])(target)) {
        return false;
    }
    var id = mirror.getId(target);
    if (!mirror.has(id)) {
        return true;
    }
    if (target.parentNode &&
        target.parentNode.nodeType === target.DOCUMENT_NODE) {
        return false;
    }
    if (!target.parentNode) {
        return true;
    }
    return isAncestorRemoved(target.parentNode, mirror);
}
function isTouchEvent(event) {
    return Boolean(event.changedTouches);
}
function polyfill(win) {
    if (win === void 0) { win = window; }
    if ('NodeList' in win && !win.NodeList.prototype.forEach) {
        win.NodeList.prototype.forEach = Array.prototype
            .forEach;
    }
    if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
        win.DOMTokenList.prototype.forEach = Array.prototype
            .forEach;
    }
    if (!Node.prototype.contains) {
        Node.prototype.contains = function contains(node) {
            if (!(0 in arguments)) {
                throw new TypeError('1 argument is required');
            }
            do {
                if (this === node) {
                    return true;
                }
            } while ((node = node && node.parentNode));
            return false;
        };
    }
}
var TreeIndex = (function () {
    function TreeIndex() {
        this.reset();
    }
    TreeIndex.prototype.add = function (mutation) {
        var parentTreeNode = this.indexes.get(mutation.parentId);
        var treeNode = {
            id: mutation.node.id,
            mutation: mutation,
            children: [],
            texts: [],
            attributes: [],
        };
        if (!parentTreeNode) {
            this.tree[treeNode.id] = treeNode;
        }
        else {
            treeNode.parent = parentTreeNode;
            parentTreeNode.children[treeNode.id] = treeNode;
        }
        this.indexes.set(treeNode.id, treeNode);
    };
    TreeIndex.prototype.remove = function (mutation, mirror) {
        var _this = this;
        var parentTreeNode = this.indexes.get(mutation.parentId);
        var treeNode = this.indexes.get(mutation.id);
        var deepRemoveFromMirror = function (id) {
            _this.removeIdSet.add(id);
            var node = mirror.getNode(id);
            node === null || node === void 0 ? void 0 : node.childNodes.forEach(function (childNode) {
                if ('__sn' in childNode) {
                    deepRemoveFromMirror(childNode.__sn.id);
                }
            });
        };
        var deepRemoveFromTreeIndex = function (node) {
            _this.removeIdSet.add(node.id);
            Object.values(node.children).forEach(function (n) { return deepRemoveFromTreeIndex(n); });
            var _treeNode = _this.indexes.get(node.id);
            if (_treeNode) {
                var _parentTreeNode = _treeNode.parent;
                if (_parentTreeNode) {
                    delete _treeNode.parent;
                    delete _parentTreeNode.children[_treeNode.id];
                    _this.indexes.delete(mutation.id);
                }
            }
        };
        if (!treeNode) {
            this.removeNodeMutations.push(mutation);
            deepRemoveFromMirror(mutation.id);
        }
        else if (!parentTreeNode) {
            delete this.tree[treeNode.id];
            this.indexes.delete(treeNode.id);
            deepRemoveFromTreeIndex(treeNode);
        }
        else {
            delete treeNode.parent;
            delete parentTreeNode.children[treeNode.id];
            this.indexes.delete(mutation.id);
            deepRemoveFromTreeIndex(treeNode);
        }
    };
    TreeIndex.prototype.text = function (mutation) {
        var treeNode = this.indexes.get(mutation.id);
        if (treeNode) {
            treeNode.texts.push(mutation);
        }
        else {
            this.textMutations.push(mutation);
        }
    };
    TreeIndex.prototype.attribute = function (mutation) {
        var treeNode = this.indexes.get(mutation.id);
        if (treeNode) {
            treeNode.attributes.push(mutation);
        }
        else {
            this.attributeMutations.push(mutation);
        }
    };
    TreeIndex.prototype.scroll = function (d) {
        this.scrollMap.set(d.id, d);
    };
    TreeIndex.prototype.input = function (d) {
        this.inputMap.set(d.id, d);
    };
    TreeIndex.prototype.flush = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        var _c = this, tree = _c.tree, removeNodeMutations = _c.removeNodeMutations, textMutations = _c.textMutations, attributeMutations = _c.attributeMutations;
        var batchMutationData = {
            source: _types_js__WEBPACK_IMPORTED_MODULE_1__["IncrementalSource"].Mutation,
            removes: removeNodeMutations,
            texts: textMutations,
            attributes: attributeMutations,
            adds: [],
        };
        var walk = function (treeNode, removed) {
            if (removed) {
                _this.removeIdSet.add(treeNode.id);
            }
            batchMutationData.texts = batchMutationData.texts
                .concat(removed ? [] : treeNode.texts)
                .filter(function (m) { return !_this.removeIdSet.has(m.id); });
            batchMutationData.attributes = batchMutationData.attributes
                .concat(removed ? [] : treeNode.attributes)
                .filter(function (m) { return !_this.removeIdSet.has(m.id); });
            if (!_this.removeIdSet.has(treeNode.id) &&
                !_this.removeIdSet.has(treeNode.mutation.parentId) &&
                !removed) {
                batchMutationData.adds.push(treeNode.mutation);
                if (treeNode.children) {
                    Object.values(treeNode.children).forEach(function (n) { return walk(n, false); });
                }
            }
            else {
                Object.values(treeNode.children).forEach(function (n) { return walk(n, true); });
            }
        };
        Object.values(tree).forEach(function (n) { return walk(n, false); });
        try {
            for (var _d = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.scrollMap.keys()), _e = _d.next(); !_e.done; _e = _d.next()) {
                var id = _e.value;
                if (this.removeIdSet.has(id)) {
                    this.scrollMap.delete(id);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _f = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.inputMap.keys()), _g = _f.next(); !_g.done; _g = _f.next()) {
                var id = _g.value;
                if (this.removeIdSet.has(id)) {
                    this.inputMap.delete(id);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var scrollMap = new Map(this.scrollMap);
        var inputMap = new Map(this.inputMap);
        this.reset();
        return {
            mutationData: batchMutationData,
            scrollMap: scrollMap,
            inputMap: inputMap,
        };
    };
    TreeIndex.prototype.reset = function () {
        this.tree = [];
        this.indexes = new Map();
        this.removeNodeMutations = [];
        this.textMutations = [];
        this.attributeMutations = [];
        this.removeIdSet = new Set();
        this.scrollMap = new Map();
        this.inputMap = new Map();
    };
    TreeIndex.prototype.idRemoved = function (id) {
        return this.removeIdSet.has(id);
    };
    return TreeIndex;
}());
function queueToResolveTrees(queue) {
    var e_3, _a;
    var queueNodeMap = {};
    var putIntoMap = function (m, parent) {
        var nodeInTree = {
            value: m,
            parent: parent,
            children: [],
        };
        queueNodeMap[m.node.id] = nodeInTree;
        return nodeInTree;
    };
    var queueNodeTrees = [];
    try {
        for (var queue_1 = Object(_ext_tslib_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["__values"])(queue), queue_1_1 = queue_1.next(); !queue_1_1.done; queue_1_1 = queue_1.next()) {
            var mutation = queue_1_1.value;
            var nextId = mutation.nextId, parentId = mutation.parentId;
            if (nextId && nextId in queueNodeMap) {
                var nextInTree = queueNodeMap[nextId];
                if (nextInTree.parent) {
                    var idx = nextInTree.parent.children.indexOf(nextInTree);
                    nextInTree.parent.children.splice(idx, 0, putIntoMap(mutation, nextInTree.parent));
                }
                else {
                    var idx = queueNodeTrees.indexOf(nextInTree);
                    queueNodeTrees.splice(idx, 0, putIntoMap(mutation, null));
                }
                continue;
            }
            if (parentId in queueNodeMap) {
                var parentInTree = queueNodeMap[parentId];
                parentInTree.children.push(putIntoMap(mutation, parentInTree));
                continue;
            }
            queueNodeTrees.push(putIntoMap(mutation, null));
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (queue_1_1 && !queue_1_1.done && (_a = queue_1.return)) _a.call(queue_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return queueNodeTrees;
}
function iterateResolveTree(tree, cb) {
    cb(tree.value);
    for (var i = tree.children.length - 1; i >= 0; i--) {
        iterateResolveTree(tree.children[i], cb);
    }
}
function isIframeINode(node) {
    if ('__sn' in node) {
        return (node.__sn.type === _rrweb_snapshot_es_rrweb_snapshot_js__WEBPACK_IMPORTED_MODULE_2__["NodeType"].Element && node.__sn.tagName === 'iframe');
    }
    return false;
}
function getBaseDimension(node, rootIframe) {
    var _a, _b;
    var frameElement = (_b = (_a = node.ownerDocument) === null || _a === void 0 ? void 0 : _a.defaultView) === null || _b === void 0 ? void 0 : _b.frameElement;
    if (!frameElement || frameElement === rootIframe) {
        return {
            x: 0,
            y: 0,
            relativeScale: 1,
            absoluteScale: 1,
        };
    }
    var frameDimension = frameElement.getBoundingClientRect();
    var frameBaseDimension = getBaseDimension(frameElement, rootIframe);
    var relativeScale = frameDimension.height / frameElement.clientHeight;
    return {
        x: frameDimension.x * frameBaseDimension.relativeScale +
            frameBaseDimension.x,
        y: frameDimension.y * frameBaseDimension.relativeScale +
            frameBaseDimension.y,
        relativeScale: relativeScale,
        absoluteScale: frameBaseDimension.absoluteScale * relativeScale,
    };
}
function hasShadowRoot(n) {
    return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
}




/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin
/* harmony default export */ __webpack_exports__["default"] = ({"app":"index_app_3Qs6X"});

/***/ }),

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/analytics */ "./src/lib/analytics.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");
/* harmony import */ var _sentry_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/react */ "./node_modules/@sentry/react/esm/index.js");
/* harmony import */ var _sentry_rrweb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sentry/rrweb */ "./node_modules/@sentry/rrweb/dist/index.es.js");
/* harmony import */ var _lib_app_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/app-info */ "./src/lib/app-info.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");









 // Register "base" page view

_lib_analytics__WEBPACK_IMPORTED_MODULE_2__["default"].pageview('/');
_sentry_react__WEBPACK_IMPORTED_MODULE_6__["init"]({
  dsn: 'https://ed881d9f133e457d8cdca25202200c3f@o1098997.ingest.sentry.io/6123390',
  integrations: [new _sentry_rrweb__WEBPACK_IMPORTED_MODULE_7__["default"]({
    checkoutEveryNms: 2 * 60 * 1000
  })],
  release: _lib_app_info__WEBPACK_IMPORTED_MODULE_8__["isProd"] ? _lib_app_info__WEBPACK_IMPORTED_MODULE_8__["appVersion"] : _lib_app_info__WEBPACK_IMPORTED_MODULE_8__["appVersionFull"],
  environment: _lib_app_info__WEBPACK_IMPORTED_MODULE_8__["isProd"] ? 'stable' : 'canary',
  tracesSampleRate: 0.5
});
global.Sentry = _sentry_react__WEBPACK_IMPORTED_MODULE_6__;
const appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_9__["default"].app;
document.body.appendChild(appTarget);

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_5__["default"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx").default(appTarget);
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].setAppElement(appTarget);
  const WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], true
  /* localesOnly */
  );

  const handleBack = () => {}; // eslint-disable-next-line react/jsx-no-bind


  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/log.js */ "./src/lib/log.js");








const onClickLogo = () => {
  /* window.location = 'https://scratch.mit.edu';*/
};

const handleTelemetryModalCancel = () => {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User canceled telemetry modal');
};

const handleTelemetryModalOptIn = () => {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted into telemetry');
};

const handleTelemetryModalOptOut = () => {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted out of telemetry');
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


/* harmony default export */ __webpack_exports__["default"] = (appTarget => {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.

  const WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]); // TODO a hack for testing the backpack, allow backpack host to be set by url param

  const backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  const backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  const scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  let simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }

  if (false) {}

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    isStandalone: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isStandalone: true,
    backpackVisible: false,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onClickLogo: onClickLogo
  })), appTarget);
});

/***/ })

},[["./src/playground/index.jsx","lib.min"]]]);
//# sourceMappingURL=gui.js.map