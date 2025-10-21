import * as React from "react";
import React__default, { createContext, useState, useEffect, useMemo, useContext, forwardRef, isValidElement, useCallback, useRef, useId, useImperativeHandle, useLayoutEffect } from "react";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min)
    return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = React__default, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development)
    return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var React2 = React__default;
      var REACT_ELEMENT_TYPE = Symbol.for("react.element");
      var REACT_PORTAL_TYPE = Symbol.for("react.portal");
      var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
      var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
      var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
      var REACT_CONTEXT_TYPE = Symbol.for("react.context");
      var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
      var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
      var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
      var REACT_MEMO_TYPE = Symbol.for("react.memo");
      var REACT_LAZY_TYPE = Symbol.for("react.lazy");
      var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
      var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") {
          return maybeIterator;
        }
        return null;
      }
      var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function error2(format) {
        {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
      }
      function printWarning(level, format, args) {
        {
          var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame2.getStackAddendum();
          if (stack !== "") {
            format += "%s";
            args = args.concat([stack]);
          }
          var argsWithFormat = args.map(function(item2) {
            return String(item2);
          });
          argsWithFormat.unshift("Warning: " + format);
          Function.prototype.apply.call(console[level], console, argsWithFormat);
        }
      }
      var enableScopeAPI = false;
      var enableCacheElement = false;
      var enableTransitionTracing = false;
      var enableLegacyHidden = false;
      var enableDebugTracing = false;
      var REACT_MODULE_REFERENCE;
      {
        REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
      }
      function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") {
          return true;
        }
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
          return true;
        }
        if (typeof type === "object" && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
          // types supported by any Flight configuration anywhere since
          // we don't know which Flight build this will end up being used
          // with.
          type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
            return true;
          }
        }
        return false;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) {
          return displayName;
        }
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
      }
      function getContextName(type) {
        return type.displayName || "Context";
      }
      function getComponentNameFromType(type) {
        if (type == null) {
          return null;
        }
        {
          if (typeof type.tag === "number") {
            error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
          }
        }
        if (typeof type === "function") {
          return type.displayName || type.name || null;
        }
        if (typeof type === "string") {
          return type;
        }
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PORTAL_TYPE:
            return "Portal";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              var context = type;
              return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
              var provider = type;
              return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
              var outerName = type.displayName || null;
              if (outerName !== null) {
                return outerName;
              }
              return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return getComponentNameFromType(init(payload));
              } catch (x) {
                return null;
              }
            }
          }
        }
        return null;
      }
      var assign = Object.assign;
      var disabledDepth = 0;
      var prevLog;
      var prevInfo;
      var prevWarn;
      var prevError;
      var prevGroup;
      var prevGroupCollapsed;
      var prevGroupEnd;
      function disabledLog() {
      }
      disabledLog.__reactDisabledLog = true;
      function disableLogs() {
        {
          if (disabledDepth === 0) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
              configurable: true,
              enumerable: true,
              value: disabledLog,
              writable: true
            };
            Object.defineProperties(console, {
              info: props,
              log: props,
              warn: props,
              error: props,
              group: props,
              groupCollapsed: props,
              groupEnd: props
            });
          }
          disabledDepth++;
        }
      }
      function reenableLogs() {
        {
          disabledDepth--;
          if (disabledDepth === 0) {
            var props = {
              configurable: true,
              enumerable: true,
              writable: true
            };
            Object.defineProperties(console, {
              log: assign({}, props, {
                value: prevLog
              }),
              info: assign({}, props, {
                value: prevInfo
              }),
              warn: assign({}, props, {
                value: prevWarn
              }),
              error: assign({}, props, {
                value: prevError
              }),
              group: assign({}, props, {
                value: prevGroup
              }),
              groupCollapsed: assign({}, props, {
                value: prevGroupCollapsed
              }),
              groupEnd: assign({}, props, {
                value: prevGroupEnd
              })
            });
          }
          if (disabledDepth < 0) {
            error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
          }
        }
      }
      var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
      var prefix;
      function describeBuiltInComponentFrame(name, source, ownerFn) {
        {
          if (prefix === void 0) {
            try {
              throw Error();
            } catch (x) {
              var match = x.stack.trim().match(/\n( *(at )?)/);
              prefix = match && match[1] || "";
            }
          }
          return "\n" + prefix + name;
        }
      }
      var reentry = false;
      var componentFrameCache;
      {
        var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
        componentFrameCache = new PossiblyWeakMap();
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) {
          return "";
        }
        {
          var frame = componentFrameCache.get(fn);
          if (frame !== void 0) {
            return frame;
          }
        }
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher;
        {
          previousDispatcher = ReactCurrentDispatcher.current;
          ReactCurrentDispatcher.current = null;
          disableLogs();
        }
        try {
          if (construct) {
            var Fake = function() {
              throw Error();
            };
            Object.defineProperty(Fake.prototype, "props", {
              set: function() {
                throw Error();
              }
            });
            if (typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(Fake, []);
              } catch (x) {
                control = x;
              }
              Reflect.construct(fn, [], Fake);
            } else {
              try {
                Fake.call();
              } catch (x) {
                control = x;
              }
              fn.call(Fake.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              control = x;
            }
            fn();
          }
        } catch (sample) {
          if (sample && control && typeof sample.stack === "string") {
            var sampleLines = sample.stack.split("\n");
            var controlLines = control.stack.split("\n");
            var s = sampleLines.length - 1;
            var c = controlLines.length - 1;
            while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
              c--;
            }
            for (; s >= 1 && c >= 0; s--, c--) {
              if (sampleLines[s] !== controlLines[c]) {
                if (s !== 1 || c !== 1) {
                  do {
                    s--;
                    c--;
                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                      var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                      if (fn.displayName && _frame.includes("<anonymous>")) {
                        _frame = _frame.replace("<anonymous>", fn.displayName);
                      }
                      {
                        if (typeof fn === "function") {
                          componentFrameCache.set(fn, _frame);
                        }
                      }
                      return _frame;
                    }
                  } while (s >= 1 && c >= 0);
                }
                break;
              }
            }
          }
        } finally {
          reentry = false;
          {
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
          }
          Error.prepareStackTrace = previousPrepareStackTrace;
        }
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        {
          if (typeof fn === "function") {
            componentFrameCache.set(fn, syntheticFrame);
          }
        }
        return syntheticFrame;
      }
      function describeFunctionComponentFrame(fn, source, ownerFn) {
        {
          return describeNativeComponentFrame(fn, false);
        }
      }
      function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
      }
      function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) {
          return "";
        }
        if (typeof type === "function") {
          {
            return describeNativeComponentFrame(type, shouldConstruct(type));
          }
        }
        if (typeof type === "string") {
          return describeBuiltInComponentFrame(type);
        }
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame("Suspense");
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") {
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE: {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              try {
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {
              }
            }
          }
        }
        return "";
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var loggedTypeFailures = {};
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame.setExtraStackFrame(null);
          }
        }
      }
      function checkPropTypes(typeSpecs, values, location, componentName, element) {
        {
          var has = Function.call.bind(hasOwnProperty);
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error$12 = void 0;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  err.name = "Invariant Violation";
                  throw err;
                }
                error$12 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ex) {
                error$12 = ex;
              }
              if (error$12 && !(error$12 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$12);
                setCurrentlyValidatingElement(null);
              }
              if (error$12 instanceof Error && !(error$12.message in loggedTypeFailures)) {
                loggedTypeFailures[error$12.message] = true;
                setCurrentlyValidatingElement(element);
                error2("Failed %s type: %s", location, error$12.message);
                setCurrentlyValidatingElement(null);
              }
            }
          }
        }
      }
      var isArrayImpl = Array.isArray;
      function isArray(a) {
        return isArrayImpl(a);
      }
      function typeName(value2) {
        {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value2[Symbol.toStringTag] || value2.constructor.name || "Object";
          return type;
        }
      }
      function willCoercionThrow(value2) {
        {
          try {
            testStringCoercion(value2);
            return false;
          } catch (e) {
            return true;
          }
        }
      }
      function testStringCoercion(value2) {
        return "" + value2;
      }
      function checkKeyStringCoercion(value2) {
        {
          if (willCoercionThrow(value2)) {
            error2("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value2));
            return testStringCoercion(value2);
          }
        }
      }
      var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;
      var didWarnAboutStringRefs;
      {
        didWarnAboutStringRefs = {};
      }
      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== void 0;
      }
      function warnIfStringRefCannotBeAutoConverted(config, self) {
        {
          if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
              error2('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
        }
      }
      function defineKeyPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error2("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
      }
      function defineRefPropWarningGetter(props, displayName) {
        {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error2("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
      }
      var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,
          // Built-in properties that belong on the element
          type,
          key,
          ref,
          props,
          // Record the component responsible for creating this element.
          _owner: owner
        };
        {
          element._store = {};
          Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }
        return element;
      };
      function jsxDEV(type, config, maybeKey, source, self) {
        {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          if (maybeKey !== void 0) {
            {
              checkKeyStringCoercion(maybeKey);
            }
            key = "" + maybeKey;
          }
          if (hasValidKey(config)) {
            {
              checkKeyStringCoercion(config.key);
            }
            key = "" + config.key;
          }
          if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
      }
      var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
          } else {
            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
          }
        }
      }
      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }
      function isValidElement2(object) {
        {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
      }
      function getDeclarationErrorAddendum() {
        {
          if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
      }
      function getSourceInfoErrorAddendum(source) {
        {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
      }
      var ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        {
          var info2 = getDeclarationErrorAddendum();
          if (!info2) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info2 = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info2;
        }
      }
      function validateExplicitKey(element, parentType) {
        {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement$1(element);
          error2('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
          setCurrentlyValidatingElement$1(null);
        }
      }
      function validateChildKeys(node, parentType) {
        {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement2(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement2(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step2;
                while (!(step2 = iterator.next()).done) {
                  if (isValidElement2(step2.value)) {
                    validateExplicitKey(step2.value, parentType);
                  }
                }
              }
            }
          }
        }
      }
      function validatePropTypes(element) {
        {
          var type = element.type;
          if (type === null || type === void 0 || typeof type === "string") {
            return;
          }
          var propTypes;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          type.$$typeof === REACT_MEMO_TYPE)) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
          } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true;
            var _name = getComponentNameFromType(type);
            error2("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
          }
          if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
            error2("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
          }
        }
      }
      function validateFragmentProps(fragment) {
        {
          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              setCurrentlyValidatingElement$1(fragment);
              error2("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
              setCurrentlyValidatingElement$1(null);
              break;
            }
          }
          if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error2("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
          }
        }
      }
      var didWarnAboutKeySpread = {};
      function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        {
          var validType = isValidElementType(type);
          if (!validType) {
            var info2 = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info2 += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) {
              info2 += sourceInfo;
            } else {
              info2 += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info2 = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            error2("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info2);
          }
          var element = jsxDEV(type, props, key, source, self);
          if (element == null) {
            return element;
          }
          if (validType) {
            var children = props.children;
            if (children !== void 0) {
              if (isStaticChildren) {
                if (isArray(children)) {
                  for (var i = 0; i < children.length; i++) {
                    validateChildKeys(children[i], type);
                  }
                  if (Object.freeze) {
                    Object.freeze(children);
                  }
                } else {
                  error2("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                }
              } else {
                validateChildKeys(children, type);
              }
            }
          }
          {
            if (hasOwnProperty.call(props, "key")) {
              var componentName = getComponentNameFromType(type);
              var keys = Object.keys(props).filter(function(k) {
                return k !== "key";
              });
              var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
              if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                error2('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                didWarnAboutKeySpread[componentName + beforeExample] = true;
              }
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
      }
      function jsxWithValidationStatic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, true);
        }
      }
      function jsxWithValidationDynamic(type, props, key) {
        {
          return jsxWithValidation(type, props, key, false);
        }
      }
      var jsx = jsxWithValidationDynamic;
      var jsxs = jsxWithValidationStatic;
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = jsx;
      reactJsxRuntime_development.jsxs = jsxs;
    })();
  }
  return reactJsxRuntime_development;
}
if (process.env.NODE_ENV === "production") {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}
var jsxRuntimeExports = jsxRuntime.exports;
function classNames$2(...args) {
  const classes = [];
  for (const arg of args) {
    if (!arg)
      continue;
    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      const nested = classNames$2(...arg);
      if (nested)
        classes.push(nested);
    } else if (typeof arg === "object") {
      for (const [key, value2] of Object.entries(arg)) {
        if (value2)
          classes.push(key);
      }
    }
  }
  return classes.join(" ");
}
const cn = classNames$2;
function createClassNameGenerator(styles2) {
  return (...args) => {
    const className = classNames$2(...args);
    return className.split(" ").map((cls) => styles2[cls] || cls).join(" ");
  };
}
function combineClasses(baseClasses, conditionalClasses) {
  return classNames$2(baseClasses, conditionalClasses);
}
const counters = /* @__PURE__ */ new Map();
const generateId = (prefix = "dyn-id") => {
  const currentCount = counters.get(prefix) || 0;
  const nextCount = currentCount + 1;
  counters.set(prefix, nextCount);
  return `${prefix}-${nextCount}`;
};
const DYN_BADGE_COLORS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "neutral"
];
const generateInitials$1 = (name) => {
  if (!name || typeof name !== "string") {
    return "";
  }
  const trimmed = name.trim();
  if (!trimmed) {
    return "";
  }
  const words = trimmed.split(/\s+/).filter(Boolean);
  if (words.length === 0) {
    return "";
  }
  const [firstWord, ...restWords] = words;
  if (!firstWord) {
    return "";
  }
  if (restWords.length === 0) {
    return firstWord.charAt(0).toUpperCase();
  }
  const lastWord = restWords[restWords.length - 1];
  if (!lastWord) {
    return firstWord.charAt(0).toUpperCase();
  }
  return (firstWord.charAt(0) + lastWord.charAt(0)).toUpperCase();
};
const formatBadgeValue = (value2) => {
  if (value2 <= 0)
    return "0";
  if (value2 > 99)
    return "99+";
  return value2.toString();
};
const isThemeColor = (color) => {
  return DYN_BADGE_COLORS.includes(color);
};
const processIconString = (iconStr, dictionary) => {
  const iconTokens = iconStr.split(/\s+/).map((token) => token.trim()).filter(Boolean);
  let processedClass = "";
  let baseClass;
  iconTokens.forEach((token, index) => {
    const dictValue = dictionary[token];
    if (dictValue) {
      processedClass = index === 0 ? dictValue : `${processedClass} ${dictValue}`;
      if (!baseClass && dictValue.startsWith("dyn-icon")) {
        baseClass = "dyn-icon";
      }
      return;
    }
    if (token.startsWith("dyn-icon-")) {
      processedClass = index === 0 ? token : `${processedClass} ${token}`;
      if (!baseClass) {
        baseClass = "dyn-icon";
      }
      return;
    }
    if (token.startsWith("fa") || token.startsWith("fas") || token.startsWith("far")) {
      baseClass = "dyn-fonts-icon";
      processedClass = index === 0 ? token : `${processedClass} ${token}`;
      return;
    }
    processedClass = index === 0 ? token : `${processedClass} ${token}`;
  });
  return {
    baseClass: baseClass ?? "dyn-icon",
    iconClass: processedClass.trim()
  };
};
const DEFAULT_ICON_DICTIONARY = Object.freeze({
  "user": "dyn-icon-user",
  "home": "dyn-icon-home",
  "settings": "dyn-icon-settings",
  "ok": "dyn-icon-ok",
  "close": "dyn-icon-close",
  "warning": "dyn-icon-warning",
  "minus": "dyn-icon-minus",
  "plus": "dyn-icon-plus",
  "search": "dyn-icon-search",
  "edit": "dyn-icon-edit",
  "delete": "dyn-icon-delete",
  "arrow-up": "dyn-icon-arrow-up",
  "arrow-down": "dyn-icon-arrow-down",
  "arrow-left": "dyn-icon-arrow-left",
  "arrow-right": "dyn-icon-arrow-right",
  "menu": "dyn-icon-menu",
  "info": "dyn-icon-info",
  "calendar": "dyn-icon-calendar",
  "clock": "dyn-icon-clock",
  "mail": "dyn-icon-mail"
});
const IconDictionaryContext = createContext(void 0);
const IconDictionaryProvider = ({
  children,
  customDictionary
}) => {
  const [dictionary, setDictionary] = useState(DEFAULT_ICON_DICTIONARY);
  useEffect(() => {
    if (!customDictionary || Object.keys(customDictionary).length === 0) {
      setDictionary(DEFAULT_ICON_DICTIONARY);
      return;
    }
    setDictionary({
      ...DEFAULT_ICON_DICTIONARY,
      ...customDictionary
    });
  }, [customDictionary]);
  const value2 = useMemo(() => dictionary, [dictionary]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconDictionaryContext.Provider, { value: value2, children });
};
const useIconDictionary = () => {
  const context = useContext(IconDictionaryContext);
  if (context === void 0) {
    throw new Error("useIconDictionary must be used within IconDictionaryProvider");
  }
  return context;
};
const iconRegistry = {
  check: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: React.createElement("path", {
      d: "M20 6L9 17l-5-5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }),
  close: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("path", {
        key: "1",
        d: "M18 6L6 18",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      React.createElement("path", {
        key: "2",
        d: "M6 6l12 12",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ]
  }),
  warning: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("path", {
        key: "1",
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }),
      React.createElement("line", {
        key: "2",
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      React.createElement("circle", { key: "3", cx: "12", cy: "17", r: "1" })
    ]
  }),
  info: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("circle", { key: "1", cx: "12", cy: "12", r: "10" }),
      React.createElement("path", {
        key: "2",
        d: "M12 16v-4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      React.createElement("path", {
        key: "3",
        d: "M12 8h.01",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ]
  }),
  ok: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("circle", { key: "1", cx: "12", cy: "12", r: "10" }),
      React.createElement("path", {
        key: "2",
        d: "M9 12l2 2 4-4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ]
  }),
  minus: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  }),
  plus: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("line", {
        key: "1",
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      React.createElement("line", {
        key: "2",
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ]
  }),
  "more-horizontal": React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("circle", { key: "1", cx: "6", cy: "12", r: "1" }),
      React.createElement("circle", { key: "2", cx: "12", cy: "12", r: "1" }),
      React.createElement("circle", { key: "3", cx: "18", cy: "12", r: "1" })
    ]
  }),
  download: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("path", {
        key: "1",
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      React.createElement("polyline", {
        key: "2",
        points: "7,10 12,15 17,10",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      React.createElement("line", {
        key: "3",
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ]
  }),
  settings: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("circle", { key: "1", cx: "12", cy: "12", r: "3" }),
      React.createElement("path", {
        key: "2",
        d: "M12 1v6m0 6v6m11-7h-6m-6 0H1",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    ]
  }),
  help: React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
      React.createElement("circle", { key: "1", cx: "12", cy: "12", r: "10" }),
      React.createElement("path", {
        key: "2",
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }),
      React.createElement("circle", { key: "3", cx: "12", cy: "17", r: "1" })
    ]
  })
};
const DYN_ICON_DEFAULT_PROPS = {
  size: "medium",
  spin: false,
  disabled: false
};
const dynIcon = "dyn-OjWcC";
const dynIconCustom = "dyn-Nm6ig";
const dynIconSvg = "dyn-CHlJ0";
const dynIconFallback = "dyn-PrcIc";
const dynIconClickable = "dyn-51SaG";
const dynIconSizeSmall = "dyn-6rdwL";
const dynIconSizeMedium = "dyn-FTixs";
const dynIconSizeLarge = "dyn-UVv1a";
const success = "dyn-qUlOo";
const warning = "dyn-cDrbv";
const danger$1 = "dyn-d-emb";
const info = "dyn-zJq81";
const disabled = "dyn-xnSgJ";
const spinning = "dyn-BEDMN";
const iconSpin = "dyn-dOvgp";
const styles$q = {
  dynIcon,
  dynIconCustom,
  dynIconSvg,
  dynIconFallback,
  dynIconClickable,
  dynIconSizeSmall,
  dynIconSizeMedium,
  dynIconSizeLarge,
  success,
  warning,
  danger: danger$1,
  info,
  disabled,
  spinning,
  iconSpin
};
const SIZE_CLASS_MAP = {
  small: styles$q["dyn-icon-size-small"],
  medium: styles$q["dyn-icon-size-medium"],
  large: styles$q["dyn-icon-size-large"]
};
const TONE_CLASS_MAP = {
  success: styles$q.success,
  warning: styles$q.warning,
  danger: styles$q.danger,
  info: styles$q.info
};
const resolveRegistryIcon = (iconKey) => {
  const normalizedKey = iconKey.trim();
  if (!normalizedKey) {
    return null;
  }
  const registryIcon = iconRegistry[normalizedKey];
  if (!registryIcon) {
    return null;
  }
  return registryIcon;
};
const DynIconComponent = (props, ref) => {
  const {
    icon: icon2,
    size = DYN_ICON_DEFAULT_PROPS.size,
    tone,
    color,
    spin: spin2 = DYN_ICON_DEFAULT_PROPS.spin,
    disabled: disabled2 = DYN_ICON_DEFAULT_PROPS.disabled,
    onClick,
    className,
    style,
    id,
    "data-testid": dataTestId,
    role,
    children,
    ...rest
  } = props;
  const { tabIndex, ...domProps } = rest;
  let dictionary;
  try {
    dictionary = useIconDictionary();
  } catch (error2) {
    dictionary = DEFAULT_ICON_DICTIONARY;
  }
  const normalizedIcon = typeof icon2 === "string" ? icon2.trim() : "";
  const iconTokens = useMemo(() => {
    if (!normalizedIcon) {
      return [];
    }
    return normalizedIcon.split(/\s+/).map((token) => token.trim()).filter(Boolean);
  }, [normalizedIcon]);
  const shouldUseRegistry = useMemo(() => {
    if (!normalizedIcon || iconTokens.length === 0) {
      return false;
    }
    const hasDictionaryMatch = iconTokens.some((token) => Boolean(dictionary[token]));
    const hasDirectClass = iconTokens.some((token) => token.startsWith("dyn-icon-"));
    const hasFontClass = iconTokens.some((token) => token.startsWith("fa"));
    if (hasDictionaryMatch || hasDirectClass || hasFontClass) {
      return false;
    }
    return Boolean(resolveRegistryIcon(normalizedIcon));
  }, [dictionary, iconTokens, normalizedIcon]);
  const registryIcon = useMemo(() => {
    if (!shouldUseRegistry) {
      return null;
    }
    return resolveRegistryIcon(normalizedIcon);
  }, [normalizedIcon, shouldUseRegistry]);
  const processedIconClasses = useMemo(() => {
    if (typeof icon2 !== "string" || shouldUseRegistry) {
      return null;
    }
    return processIconString(icon2, dictionary);
  }, [icon2, dictionary, shouldUseRegistry]);
  const resolvedSizeClass = typeof size === "string" && SIZE_CLASS_MAP[size];
  const inlineDimensionStyle = useMemo(() => {
    if (typeof size === "number") {
      return {
        width: size,
        height: size,
        fontSize: size
      };
    }
    if (typeof size === "string" && !SIZE_CLASS_MAP[size]) {
      return {
        width: size,
        height: size,
        fontSize: size
      };
    }
    return void 0;
  }, [size]);
  const mergedStyle = useMemo(() => {
    if (!color && !inlineDimensionStyle) {
      return style;
    }
    return {
      ...inlineDimensionStyle,
      ...style,
      ...color ? { color } : null
    };
  }, [color, inlineDimensionStyle, style]);
  const isInteractive = typeof onClick === "function" && !disabled2;
  const toneClass = tone ? TONE_CLASS_MAP[tone] : void 0;
  const rootClassName = cn(
    styles$q.dynIcon,
    resolvedSizeClass,
    toneClass,
    spin2 ? styles$q.spinning : void 0,
    disabled2 ? styles$q.disabled : void 0,
    isInteractive ? styles$q["dyn-icon-clickable"] : void 0,
    processedIconClasses == null ? void 0 : processedIconClasses.baseClass,
    processedIconClasses == null ? void 0 : processedIconClasses.iconClass,
    className
  );
  const ariaRole = role ?? (isInteractive ? "button" : "img");
  const shouldHideFromScreenReader = !isInteractive && (ariaRole === "img" || ariaRole === "presentation" || ariaRole === "none") && !rest["aria-label"] && !rest["aria-labelledby"];
  const ariaHidden = rest["aria-hidden"] ?? (shouldHideFromScreenReader ? true : void 0);
  const handleClick = (event) => {
    if (!isInteractive || !onClick) {
      return;
    }
    onClick(event);
  };
  const content2 = (() => {
    if (registryIcon) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$q.dynIconSvg, "aria-hidden": "true", children: registryIcon });
    }
    if (typeof icon2 === "string") {
      if (!(processedIconClasses == null ? void 0 : processedIconClasses.iconClass) && !(processedIconClasses == null ? void 0 : processedIconClasses.baseClass)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$q.dynIconFallback, "aria-hidden": "true", children: icon2 });
      }
      return null;
    }
    if (isValidElement(icon2)) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$q.dynIconCustom, "aria-hidden": "true", children: icon2 });
    }
    if (icon2) {
      return icon2;
    }
    return children ?? null;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ref,
      id,
      "data-testid": dataTestId,
      role: ariaRole,
      className: rootClassName,
      style: mergedStyle,
      onClick: disabled2 ? void 0 : handleClick,
      "aria-disabled": disabled2 || void 0,
      tabIndex: isInteractive ? tabIndex ?? 0 : tabIndex,
      ...domProps,
      "aria-hidden": ariaHidden,
      children: content2
    }
  );
};
const DynIcon = forwardRef(DynIconComponent);
DynIcon.displayName = "DynIcon";
const DYN_BUTTON_DEFAULT_PROPS = {
  type: "button",
  kind: "primary",
  size: "medium",
  loading: false,
  loadingText: "Loading…",
  danger: false,
  disabled: false,
  fullWidth: false,
  hideOnMobile: false,
  iconOnlyOnMobile: false
};
const root$8 = "dyn-khqJL";
const spinner$2 = "dyn-exVQ9";
const loading$3 = "dyn-EoLKP";
const kindPrimary = "dyn-JZ3Fm";
const kindSecondary = "dyn--d5eM";
const kindTertiary = "dyn-tn4uu";
const sizeSmall$7 = "dyn-bZkEU";
const sizeMedium$4 = "dyn-Zl0OR";
const sizeLarge$7 = "dyn-Ab6x-";
const fullWidth = "dyn-UmgVr";
const hideOnMobile = "dyn-69Vsi";
const iconOnlyOnMobile = "dyn-P-1aB";
const iconOnly = "dyn-l7Jj1";
const content$6 = "dyn--XwGv";
const dynSrOnly$1 = "dyn-j3H4b";
const visuallyHidden$2 = "dyn-JaQ3e";
const danger = "dyn-1QV7L";
const icon = "dyn-HVWyb";
const label$3 = "dyn-inMm9";
const dynButtonSpin = "dyn-hFV-G";
const styles$p = {
  root: root$8,
  spinner: spinner$2,
  loading: loading$3,
  kindPrimary,
  kindSecondary,
  kindTertiary,
  sizeSmall: sizeSmall$7,
  sizeMedium: sizeMedium$4,
  sizeLarge: sizeLarge$7,
  fullWidth,
  hideOnMobile,
  iconOnlyOnMobile,
  iconOnly,
  content: content$6,
  dynSrOnly: dynSrOnly$1,
  visuallyHidden: visuallyHidden$2,
  danger,
  icon,
  label: label$3,
  dynButtonSpin
};
const getStyleClass$7 = (className) => {
  return styles$p[className] || "";
};
const normalizeAriaLabel = (value2) => (value2 == null ? void 0 : value2.trim()) ? value2.trim() : void 0;
const generateIconAriaLabel = (icon2) => {
  if (typeof icon2 !== "string")
    return void 0;
  return icon2.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
};
const DynButton = forwardRef(
  ({
    label: label2,
    icon: icon2,
    type = DYN_BUTTON_DEFAULT_PROPS.type,
    kind = DYN_BUTTON_DEFAULT_PROPS.kind,
    size = DYN_BUTTON_DEFAULT_PROPS.size,
    loading: loading2 = DYN_BUTTON_DEFAULT_PROPS.loading,
    loadingText = DYN_BUTTON_DEFAULT_PROPS.loadingText,
    danger: danger2 = DYN_BUTTON_DEFAULT_PROPS.danger,
    disabled: disabled2 = DYN_BUTTON_DEFAULT_PROPS.disabled,
    fullWidth: fullWidth2 = DYN_BUTTON_DEFAULT_PROPS.fullWidth,
    hideOnMobile: hideOnMobile2 = DYN_BUTTON_DEFAULT_PROPS.hideOnMobile,
    iconOnlyOnMobile: iconOnlyOnMobile2 = DYN_BUTTON_DEFAULT_PROPS.iconOnlyOnMobile,
    onClick,
    onBlur,
    onKeyDown: userOnKeyDown,
    children,
    className,
    id,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    "aria-labelledby": ariaLabelledBy,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
    "aria-pressed": ariaPressed,
    "data-testid": dataTestId,
    role,
    ...rest
  }, ref) => {
    const internalId = id || generateId("button");
    const trimmedLabel = useMemo(() => typeof label2 === "string" ? label2.trim() : "", [label2]);
    const hasLabel = trimmedLabel.length > 0;
    const childrenCount = React__default.Children.count(children);
    const hasChildrenContent = childrenCount > 0;
    const isIconOnly = Boolean(icon2) && !hasLabel && !hasChildrenContent;
    const isDisabled = disabled2 || loading2;
    const iconAriaLabel = useMemo(() => generateIconAriaLabel(icon2), [icon2]);
    const computedAriaLabel = useMemo(
      () => normalizeAriaLabel(
        ariaLabel ?? (isIconOnly ? trimmedLabel || iconAriaLabel || "Button" : void 0)
      ),
      [ariaLabel, isIconOnly, trimmedLabel, iconAriaLabel]
    );
    const normalizedLoadingText = useMemo(() => {
      if (typeof loadingText !== "string")
        return DYN_BUTTON_DEFAULT_PROPS.loadingText;
      const trimmed = loadingText.trim();
      return trimmed || DYN_BUTTON_DEFAULT_PROPS.loadingText;
    }, [loadingText]);
    const iconSizeToken = useMemo(() => {
      switch (size) {
        case "small":
          return "small";
        case "large":
          return "large";
        default:
          return "medium";
      }
    }, [size]);
    const iconElement = useMemo(() => {
      if (!icon2)
        return null;
      if (typeof icon2 === "string") {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: icon2, "aria-hidden": "true", className: getStyleClass$7("icon"), size: iconSizeToken });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$7("icon"), "aria-hidden": "true", children: icon2 });
    }, [icon2, iconSizeToken]);
    const childrenContent = useMemo(() => {
      if (!hasChildrenContent)
        return null;
      if (typeof children === "string") {
        const trimmedChildren = children.trim();
        if (!trimmedChildren)
          return null;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$7("label"), children: trimmedChildren });
      }
      return children;
    }, [children, hasChildrenContent]);
    const labelElement = hasLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$7("label"), children: trimmedLabel }) : null;
    const kindClass = getStyleClass$7(`kind${kind.charAt(0).toUpperCase() + kind.slice(1)}`);
    const sizeClass = getStyleClass$7(`size${size.charAt(0).toUpperCase() + size.slice(1)}`);
    const dangerClass = getStyleClass$7("danger");
    const loadingClass = getStyleClass$7("loading");
    const iconOnlyClass = getStyleClass$7("iconOnly");
    const fullWidthClass = getStyleClass$7("fullWidth");
    const hideOnMobileClass = getStyleClass$7("hideOnMobile");
    const iconOnlyOnMobileClass = getStyleClass$7("iconOnlyOnMobile");
    const buttonClassName = cn(
      getStyleClass$7("root"),
      kindClass,
      sizeClass,
      {
        [dangerClass]: danger2 && dangerClass,
        [loadingClass]: loading2 && loadingClass,
        [iconOnlyClass]: isIconOnly && iconOnlyClass,
        [fullWidthClass]: fullWidth2 && fullWidthClass,
        [hideOnMobileClass]: hideOnMobile2 && hideOnMobileClass,
        [iconOnlyOnMobileClass]: iconOnlyOnMobile2 && iconOnlyOnMobileClass
      },
      className
    );
    const handleClick = (event) => {
      if (isDisabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      onClick == null ? void 0 : onClick(event);
    };
    const handleBlur = (event) => {
      onBlur == null ? void 0 : onBlur(event);
    };
    const handleKeyDown = (event) => {
      if (event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        if (!isDisabled) {
          event.currentTarget.click();
        }
      }
      userOnKeyDown == null ? void 0 : userOnKeyDown(event);
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          ref,
          id: internalId,
          type,
          className: buttonClassName,
          "data-testid": dataTestId ?? "dyn-button",
          "aria-label": computedAriaLabel,
          "aria-describedby": ariaDescribedBy,
          "aria-labelledby": ariaLabelledBy,
          "aria-expanded": ariaExpanded,
          "aria-controls": ariaControls,
          "aria-pressed": typeof ariaPressed === "boolean" ? ariaPressed : void 0,
          "aria-busy": loading2 || void 0,
          "aria-disabled": isDisabled || void 0,
          disabled: isDisabled,
          role,
          onClick: handleClick,
          onBlur: handleBlur,
          onKeyDown: handleKeyDown,
          ...rest,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: getStyleClass$7("content"), style: { opacity: loading2 ? 0 : void 0 }, children: [
              iconElement,
              labelElement,
              childrenContent
            ] }),
            loading2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$7("spinner"), "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "dyn-sr-only",
                  role: "status",
                  "aria-live": "polite",
                  "aria-atomic": "true",
                  "aria-hidden": "true",
                  children: normalizedLoadingText
                }
              )
            ] })
          ]
        }
      ),
      loading2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "dyn-sr-only",
          role: "status",
          "aria-live": "polite",
          "aria-atomic": "true",
          children: normalizedLoadingText
        }
      )
    ] });
  }
);
DynButton.displayName = "DynButton";
const AVATAR_SIZES = {
  xs: "var(--dyn-spacing-2xl, 2rem)",
  sm: "var(--dyn-spacing-3xl, 3rem)",
  md: "4rem",
  lg: "5rem",
  xl: "6rem"
};
const DYN_AVATAR_STATUS_LABELS = {
  online: "Online",
  offline: "Offline",
  away: "Away",
  busy: "Busy"
};
const avatar = "dyn-7UEUD";
const avatarXs = "dyn-C5JzH";
const avatarSm = "dyn-g0cUt";
const avatarMd = "dyn-KifOB";
const avatarLg = "dyn-zJbWC";
const avatarXl = "dyn-yqwZV";
const avatarSquare = "dyn-FCbuW";
const avatarCircle = "dyn-9WkOi";
const avatarRounded = "dyn-nwOXc";
const avatarClickable = "dyn-qi-ra";
const avatarOnline = "dyn-fSNLy";
const avatarOffline = "dyn-tsjfL";
const avatarAway = "dyn-faJjB";
const avatarBusy = "dyn-cxtrG";
const avatarImage = "dyn-1t3no";
const avatarImageLoading = "dyn-ESwFd";
const avatarImageLoaded = "dyn--iFJN";
const avatarFallback = "dyn-MnPo-";
const avatarInitials = "dyn-iRMLo";
const avatarIcon = "dyn-9X3TG";
const avatarLoading = "dyn-d1txg";
const shimmer = "dyn-1O5Hb";
const avatarError = "dyn-Co8gM";
const styles$o = {
  avatar,
  avatarXs,
  avatarSm,
  avatarMd,
  avatarLg,
  avatarXl,
  avatarSquare,
  avatarCircle,
  avatarRounded,
  avatarClickable,
  avatarOnline,
  avatarOffline,
  avatarAway,
  avatarBusy,
  avatarImage,
  avatarImageLoading,
  avatarImageLoaded,
  avatarFallback,
  avatarInitials,
  avatarIcon,
  avatarLoading,
  shimmer,
  avatarError
};
const DefaultFallbackIcon = () => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
        fill: "currentColor"
      }
    )
  }
);
const generateInitials = (name) => {
  return name.trim().split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word.charAt(0).toUpperCase()).join("");
};
const getStyleClass$6 = (className) => {
  return styles$o[className] || "";
};
const DynAvatar = forwardRef(
  ({
    src,
    alt,
    size = "md",
    shape = "circle",
    initials,
    status,
    loading: loading2 = false,
    error: error2 = false,
    onClick,
    fallback,
    imageLoading = "eager",
    imageProps,
    className,
    id,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    "aria-labelledby": ariaLabelledBy,
    "data-testid": dataTestId,
    role,
    children,
    ...rest
  }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [internalId] = useState(() => id || generateId("avatar"));
    const isInteractive = Boolean(onClick);
    const displayInitials = useMemo(() => {
      if (initials)
        return initials.slice(0, 2).toUpperCase();
      if (alt && alt !== "Avatar")
        return generateInitials(alt);
      return "";
    }, [initials, alt]);
    const showImage = src && !imageError && imageLoaded;
    const showFallback = !src || imageError || !imageLoaded;
    const isLoadingState = loading2 || src && !imageLoaded && !imageError;
    const handleImageLoad = () => {
      setImageLoaded(true);
      setImageError(false);
    };
    const handleImageError = () => {
      setImageError(true);
      setImageLoaded(false);
    };
    const handleClick = (event) => {
      if (!isInteractive)
        return;
      onClick == null ? void 0 : onClick(event);
    };
    const handleKeyDown = (event) => {
      if (!isInteractive)
        return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick == null ? void 0 : onClick(event);
      }
    };
    const sizeClass = getStyleClass$6(`avatar--${size}`);
    const shapeClass = getStyleClass$6(`avatar--${shape}`);
    const statusClass = status ? getStyleClass$6(`avatar--${status}`) : "";
    const clickableClass = getStyleClass$6("avatar--clickable");
    const loadingClass = getStyleClass$6("avatar--loading");
    const errorClass = getStyleClass$6("avatar--error");
    const statusLabel = status ? DYN_AVATAR_STATUS_LABELS[status] : void 0;
    const accessibleLabelBase = ariaLabel || (isInteractive ? `Avatar for ${alt}` : alt);
    const accessibleLabel = statusLabel ? `${accessibleLabelBase} (${statusLabel})` : accessibleLabelBase;
    const avatarClasses = cn(
      getStyleClass$6("avatar"),
      sizeClass,
      shapeClass,
      statusClass,
      {
        [clickableClass]: isInteractive && clickableClass,
        [loadingClass]: isLoadingState && loadingClass,
        [errorClass]: (error2 || imageError) && errorClass
      },
      className
    );
    const imageBaseClass = getStyleClass$6("avatar__image");
    const imageLoadingClass = getStyleClass$6("avatar__image--loading");
    const imageLoadedClass = getStyleClass$6("avatar__image--loaded");
    const imageClasses = cn(
      imageBaseClass,
      {
        [imageLoadingClass]: !imageLoaded && imageLoadingClass,
        [imageLoadedClass]: imageLoaded && imageLoadedClass
      }
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        id: internalId,
        className: avatarClasses,
        role: isInteractive ? "button" : role || "img",
        tabIndex: isInteractive ? 0 : void 0,
        "aria-label": accessibleLabel,
        "aria-describedby": ariaDescribedBy,
        "aria-labelledby": ariaLabelledBy,
        "aria-busy": isLoadingState ? "true" : void 0,
        "data-status": status,
        "data-testid": dataTestId || "dyn-avatar",
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        ...rest,
        children: [
          src && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src,
              alt: showImage ? alt : "",
              loading: imageLoading,
              className: imageClasses,
              "data-testid": "dyn-avatar-image",
              onLoad: handleImageLoad,
              onError: handleImageError,
              ...imageProps
            }
          ),
          showFallback && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: getStyleClass$6("avatar__fallback"),
              "aria-hidden": showImage ? "true" : void 0,
              children: fallback || children || (displayInitials ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$6("avatar__initials"), children: displayInitials }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$6("avatar__icon"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultFallbackIcon, {}) }))
            }
          ),
          isLoadingState && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dyn-sr-only", "aria-live": "polite", children: "Loading avatar" }),
          (error2 || imageError) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "dyn-sr-only", "aria-live": "assertive", children: "Avatar failed to load" })
        ]
      }
    );
  }
);
DynAvatar.displayName = "DynAvatar";
const badge = "dyn-xkPoK";
const badgeSmall = "dyn-RnHGZ";
const badgeMedium = "dyn-kCJ42";
const badgeLarge = "dyn-W1MRY";
const badgePrimary = "dyn--0nL5";
const badgeSecondary = "dyn--1FI7";
const badgeSuccess = "dyn-z0j2k";
const badgeWarning = "dyn-PNf1p";
const badgeDanger = "dyn-hy-tz";
const badgeInfo = "dyn-1oEIt";
const badgeNeutral = "dyn-M57us";
const badgeSolid = "dyn-BFl6Z";
const badgeSoft = "dyn-CXKG8";
const badgeOutline = "dyn-4xq6a";
const badgeClickable = "dyn--jhvZ";
const badgeDot = "dyn--KboL";
const badgeContent = "dyn-8uiT-";
const badgeIcon = "dyn-P6BAo";
const badgeText = "dyn-JHcIb";
const badgePositioned = "dyn-0LpjW";
const badgeTopRight = "dyn-Qmd4w";
const badgeTopLeft = "dyn-BnJky";
const badgeBottomRight = "dyn-SBZ3f";
const badgeBottomLeft = "dyn-xGRxZ";
const badgeCount = "dyn-Rap23";
const badgeAnimated = "dyn-fmggU";
const badgeAppear = "dyn-7stc-";
const badgePulse = "dyn-Kj5qt";
const styles$n = {
  badge,
  badgeSmall,
  badgeMedium,
  badgeLarge,
  badgePrimary,
  badgeSecondary,
  badgeSuccess,
  badgeWarning,
  badgeDanger,
  badgeInfo,
  badgeNeutral,
  badgeSolid,
  badgeSoft,
  badgeOutline,
  badgeClickable,
  badgeDot,
  badgeContent,
  badgeIcon,
  badgeText,
  badgePositioned,
  badgeTopRight,
  badgeTopLeft,
  badgeBottomRight,
  badgeBottomLeft,
  badgeCount,
  badgeAnimated,
  badgeAppear,
  badgePulse
};
const sizeClassNameMap$2 = {
  small: styles$n["badge--small"],
  medium: styles$n["badge--medium"],
  large: styles$n["badge--large"]
};
const variantClassNameMap = {
  solid: styles$n["badge--solid"],
  soft: styles$n["badge--soft"],
  outline: styles$n["badge--outline"],
  dot: styles$n["badge--dot"]
};
const colorClassNameMap = {
  primary: styles$n["badge--primary"],
  secondary: styles$n["badge--secondary"],
  success: styles$n["badge--success"],
  warning: styles$n["badge--warning"],
  danger: styles$n["badge--danger"],
  info: styles$n["badge--info"],
  neutral: styles$n["badge--neutral"]
};
const positionClassNameMap = {
  topRight: styles$n["badge--topRight"],
  topLeft: styles$n["badge--topLeft"],
  bottomRight: styles$n["badge--bottomRight"],
  bottomLeft: styles$n["badge--bottomLeft"]
};
const DEFAULT_MAX_COUNT = 99;
const getStyleClass$5 = (className) => {
  return styles$n[className] || "";
};
const DynBadgeComponent = (props, ref) => {
  const {
    children,
    variant = "solid",
    color = "neutral",
    size = "medium",
    position,
    onClick,
    startIcon,
    endIcon,
    maxCount = DEFAULT_MAX_COUNT,
    count,
    value: value2,
    showZero = false,
    animated: animated2 = false,
    pulse = false,
    countDescription,
    className,
    "data-testid": dataTestId,
    id,
    onKeyDown: userOnKeyDown,
    role: roleProp,
    tabIndex: tabIndexProp,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    "aria-live": ariaLive,
    ...rest
  } = props;
  const { style: inlineStyle, ...restProps } = rest;
  const [internalId] = useState(() => id || generateId("badge"));
  const numericCount = typeof count === "number" ? count : typeof value2 === "number" ? value2 : void 0;
  const hasCount = typeof numericCount === "number";
  const hasChildren = children !== void 0 && children !== null;
  const shouldHideBadge = hasCount && numericCount === 0 && !showZero && !hasChildren;
  if (shouldHideBadge) {
    return null;
  }
  const isInteractive = typeof onClick === "function";
  const displayCount = useMemo(() => {
    if (!hasCount) {
      return void 0;
    }
    if (typeof maxCount === "number" && numericCount > maxCount) {
      return `${maxCount}+`;
    }
    return String(numericCount);
  }, [hasCount, maxCount, numericCount]);
  const displayContent = useMemo(() => {
    if (hasChildren) {
      return children;
    }
    if (hasCount) {
      return displayCount;
    }
    return void 0;
  }, [children, displayCount, hasChildren, hasCount]);
  const semanticColorClass = color && Object.prototype.hasOwnProperty.call(colorClassNameMap, color) ? colorClassNameMap[color] : void 0;
  const badgeClasses = cn(
    getStyleClass$5("badge"),
    sizeClassNameMap$2[size],
    variantClassNameMap[variant],
    semanticColorClass,
    position && getStyleClass$5("badge--positioned"),
    position ? positionClassNameMap[position] : void 0,
    isInteractive && getStyleClass$5("badge--clickable"),
    hasCount && getStyleClass$5("badge--count"),
    animated2 && getStyleClass$5("badge--animated"),
    pulse && getStyleClass$5("badge--pulse"),
    className
  );
  const ariaLabelValue = ariaLabel ?? (hasCount ? `${countDescription || "Count"}: ${displayCount}` : void 0);
  const ariaLiveValue = ariaLive ?? (hasCount ? "polite" : void 0);
  const roleValue = roleProp ?? (isInteractive ? "button" : void 0);
  const tabIndexValue = tabIndexProp ?? (isInteractive ? 0 : void 0);
  const dataTestIdValue = dataTestId ?? "dyn-badge";
  const customColorStyle = !semanticColorClass && typeof color === "string" ? {
    "--badge-accent": color,
    "--badge-outline-color": color,
    "--badge-soft-fallback": color
  } : void 0;
  const badgeStyle = customColorStyle ? { ...customColorStyle, ...inlineStyle } : inlineStyle;
  const handleClick = useCallback(
    (event) => {
      onClick == null ? void 0 : onClick(event);
    },
    [onClick]
  );
  const handleKeyDown = useCallback(
    (event) => {
      userOnKeyDown == null ? void 0 : userOnKeyDown(event);
      if (!isInteractive || event.defaultPrevented) {
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        if (event.key === " ") {
          event.preventDefault();
        }
        event.currentTarget.click();
      }
    },
    [isInteractive, userOnKeyDown]
  );
  const showTextContent = displayContent !== void 0 && variant !== "dot";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      ref,
      id: internalId,
      className: badgeClasses,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      role: roleValue,
      tabIndex: tabIndexValue,
      "aria-label": ariaLabelValue,
      "aria-describedby": ariaDescribedBy,
      "aria-live": ariaLiveValue,
      "data-testid": dataTestIdValue,
      style: badgeStyle,
      ...restProps,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: getStyleClass$5("badge__content"), children: [
          startIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$5("badge__icon"), "aria-hidden": "true", children: startIcon }),
          showTextContent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$5("badge__text"), children: displayContent }),
          endIcon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$5("badge__icon"), "aria-hidden": "true", children: endIcon })
        ] }),
        hasCount && Number(numericCount) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "dyn-sr-only", children: [
          countDescription || "Notifications",
          ": ",
          displayCount
        ] })
      ]
    }
  );
};
const DynBadge = forwardRef(DynBadgeComponent);
DynBadge.displayName = "DynBadge";
const box$1 = "dyn-bXY4L";
const boxInline = "dyn-LqvRC";
const boxInlineBlock = "dyn-3Lihn";
const boxNone = "dyn-jf1hZ";
const boxFlex = "dyn-cFDsG";
const boxInlineFlex = "dyn-s2gDF";
const boxGrid = "dyn-eAyey";
const boxInlineGrid = "dyn-Vj3ST";
const boxAbsolute = "dyn-4Q3IQ";
const boxRelative = "dyn-Kjz5k";
const boxFixed = "dyn-v60Bs";
const boxSticky = "dyn-A9N5t";
const boxP0 = "dyn-fXL5X";
const boxPXs = "dyn-y4djd";
const boxPSm = "dyn-2-QQ4";
const boxPMd = "dyn-bZEkz";
const boxPLg = "dyn-kgBVQ";
const boxPXl = "dyn-n51Fd";
const boxP2Xl = "dyn-PRyFP";
const boxM0 = "dyn-gKtFd";
const boxMXs = "dyn-Vi122";
const boxMSm = "dyn-f6kJY";
const boxMMd = "dyn--7i9S";
const boxMLg = "dyn-XWZcM";
const boxMXl = "dyn-pf-wH";
const boxMAuto = "dyn-Y-JOW";
const boxBgPrimary = "dyn-K-0xa";
const boxBgSecondary = "dyn-FsaJq";
const boxBgTertiary = "dyn-SFMY5";
const boxBgSuccess = "dyn-oz6Y0";
const boxBgWarning = "dyn-z4Q4I";
const boxBgDanger = "dyn-aIgjI";
const boxBorder = "dyn-O7QbB";
const boxBorderTop = "dyn-91ZEI";
const boxBorderRight = "dyn-LXs7b";
const boxBorderBottom = "dyn-ZqBQ8";
const boxBorderLeft = "dyn-W22Lk";
const boxRoundedNone = "dyn-U4XQF";
const boxRoundedSm = "dyn-qJ9Er";
const boxRoundedMd = "dyn-dpyWf";
const boxRoundedLg = "dyn-VYIkc";
const boxRoundedXl = "dyn-RrC4j";
const boxRoundedFull = "dyn-NKOWB";
const boxShadowSm = "dyn-pVHg5";
const boxShadowMd = "dyn-WbsEz";
const boxShadowLg = "dyn-L9mwU";
const boxTextLeft = "dyn-PYI79";
const boxTextCenter = "dyn-mhpGN";
const boxTextRight = "dyn-yI5Dt";
const boxTextJustify = "dyn-FCUPz";
const boxOverflowHidden = "dyn-Hph5V";
const boxOverflowAuto = "dyn-ok27d";
const boxOverflowScroll = "dyn-GXEa7";
const boxMobileBlock = "dyn--bypr";
const boxMobileFlex = "dyn-18WPQ";
const boxMobileHidden = "dyn-cjgq2";
const boxMobilePSm = "dyn-Af043";
const boxMobilePMd = "dyn-3YtTa";
const boxTabletBlock = "dyn-eLq45";
const boxTabletFlex = "dyn-Z0TBY";
const boxTabletHidden = "dyn-K1in5";
const boxDesktopBlock = "dyn-PTQEm";
const boxDesktopFlex = "dyn-0LWvy";
const boxDesktopHidden = "dyn-4R0wz";
const boxInteractive = "dyn-MMNvM";
const dynSrOnly = "dyn-r6vf-";
const styles$m = {
  box: box$1,
  boxInline,
  boxInlineBlock,
  boxNone,
  boxFlex,
  boxInlineFlex,
  boxGrid,
  boxInlineGrid,
  boxAbsolute,
  boxRelative,
  boxFixed,
  boxSticky,
  boxP0,
  boxPXs,
  boxPSm,
  boxPMd,
  boxPLg,
  boxPXl,
  boxP2Xl,
  boxM0,
  boxMXs,
  boxMSm,
  boxMMd,
  boxMLg,
  boxMXl,
  boxMAuto,
  boxBgPrimary,
  boxBgSecondary,
  boxBgTertiary,
  boxBgSuccess,
  boxBgWarning,
  boxBgDanger,
  boxBorder,
  boxBorderTop,
  boxBorderRight,
  boxBorderBottom,
  boxBorderLeft,
  boxRoundedNone,
  boxRoundedSm,
  boxRoundedMd,
  boxRoundedLg,
  boxRoundedXl,
  boxRoundedFull,
  boxShadowSm,
  boxShadowMd,
  boxShadowLg,
  boxTextLeft,
  boxTextCenter,
  boxTextRight,
  boxTextJustify,
  boxOverflowHidden,
  boxOverflowAuto,
  boxOverflowScroll,
  boxMobileBlock,
  boxMobileFlex,
  boxMobileHidden,
  boxMobilePSm,
  boxMobilePMd,
  boxTabletBlock,
  boxTabletFlex,
  boxTabletHidden,
  boxDesktopBlock,
  boxDesktopFlex,
  boxDesktopHidden,
  boxInteractive,
  dynSrOnly
};
const getStyleClass$4 = (name) => styles$m[name] || "";
const FILTERED_PROPS = /* @__PURE__ */ new Set([
  "as",
  "padding",
  "p",
  "px",
  "py",
  "pt",
  "pr",
  "pb",
  "pl",
  "m",
  "mx",
  "my",
  "mt",
  "mr",
  "mb",
  "ml",
  "radius",
  "borderRadius",
  "customBorderRadius",
  "shadow",
  "border",
  "background",
  "bg",
  "backgroundColor",
  "color",
  "align",
  "justify",
  "direction",
  "flexDirection",
  "wrap",
  "gap",
  "rowGap",
  "columnGap",
  "gridTemplateColumns",
  "gridTemplateRows",
  "gridTemplateAreas",
  "top",
  "right",
  "bottom",
  "left",
  "zIndex",
  "interactive",
  "cssVars",
  "ariaLiveMessage",
  "ariaLivePoliteness",
  "focusOnMount",
  "display",
  "position",
  "textAlign",
  "overflow",
  "overflowX",
  "overflowY",
  "alignContent",
  "width",
  "height",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "hideOnMobile",
  "hideOnTablet",
  "hideOnDesktop",
  "mobileOnly",
  "tabletOnly",
  "desktopOnly"
]);
const isToken = (v) => v && ["0", "xs", "sm", "md", "lg", "xl", "2xl"].includes(v);
const toTokenVar = (v) => `var(--dyn-spacing-${v}, var(--spacing-${v}, ${{ "0": "0", "xs": "0.25rem", "sm": "0.5rem", "md": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "3rem" }[v]}))`;
function DynBoxInner(props, ref) {
  const {
    as,
    padding,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    radius = "md",
    borderRadius,
    customBorderRadius,
    shadow: shadow2 = "none",
    border = "default",
    background = "surface",
    bg,
    backgroundColor,
    color,
    align,
    justify,
    direction = "column",
    flexDirection,
    wrap,
    gap = "md",
    rowGap,
    columnGap,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    alignContent,
    display,
    position,
    textAlign,
    overflow,
    overflowX,
    overflowY,
    width,
    height,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    top,
    right,
    bottom,
    left,
    zIndex,
    className,
    style,
    id,
    role,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    "aria-labelledby": ariaLabelledBy,
    "data-testid": dataTestId = "dyn-box",
    focusOnMount,
    interactive,
    ariaLiveMessage,
    ariaLivePoliteness = "polite",
    cssVars,
    hideOnMobile: hideOnMobile2,
    hideOnTablet,
    hideOnDesktop,
    mobileOnly,
    tabletOnly,
    desktopOnly,
    children,
    ...rest
  } = props;
  const Component = as ?? "div";
  const internalId = useMemo(() => id || generateId("dyn-box"), [id]);
  const domProps = Object.fromEntries(Object.entries(rest).filter(([k]) => !FILTERED_PROPS.has(k)));
  const elementRef = React__default.useRef(null);
  const setRefs = (node) => {
    elementRef.current = node;
    if (typeof ref === "function")
      ref(node);
    else if (ref && "current" in ref)
      ref.current = node;
  };
  const legacyAliases = ["box"];
  const finalDirection = flexDirection || direction;
  if ((finalDirection == null ? void 0 : finalDirection.startsWith("row")) || (finalDirection == null ? void 0 : finalDirection.startsWith("column")))
    legacyAliases.push("box--flex");
  const finalBackground = bg || background;
  if (["primary", "secondary", "success", "warning", "danger"].includes(finalBackground))
    legacyAliases.push(`box--bg-${finalBackground}`);
  const finalRadius = borderRadius || customBorderRadius || radius;
  const basePadding = p ?? padding;
  const classes = cn(
    getStyleClass$4("box"),
    basePadding && isToken(basePadding) && getStyleClass$4(`box--p-${basePadding}`),
    finalBackground && ["primary", "secondary", "tertiary", "success", "warning", "danger"].includes(finalBackground) && getStyleClass$4(`box--bg-${finalBackground}`),
    display && getStyleClass$4(`box--${display}`),
    position && getStyleClass$4(`box--${position}`),
    finalRadius && ["none", "sm", "md", "lg", "xl", "full"].includes(finalRadius) && getStyleClass$4(`box--rounded-${finalRadius}`),
    shadow2 && ["sm", "md", "lg"].includes(shadow2) && getStyleClass$4(`box--shadow-${shadow2}`),
    textAlign && getStyleClass$4(`box--text-${textAlign}`),
    overflow && getStyleClass$4(`box--overflow-${overflow}`),
    border === "default" && getStyleClass$4("box--border"),
    interactive && getStyleClass$4("box--interactive"),
    hideOnMobile2 && getStyleClass$4("box--mobile-hidden"),
    hideOnTablet && getStyleClass$4("box--tablet-hidden"),
    hideOnDesktop && getStyleClass$4("box--desktop-hidden"),
    mobileOnly && [getStyleClass$4("box--tablet-hidden"), getStyleClass$4("box--desktop-hidden")],
    tabletOnly && [getStyleClass$4("box--mobile-hidden"), getStyleClass$4("box--desktop-hidden")],
    desktopOnly && [getStyleClass$4("box--mobile-hidden"), getStyleClass$4("box--tablet-hidden")],
    ...legacyAliases,
    className
  );
  const styleVars = {
    ...width !== void 0 ? { ["--dyn-box-width"]: typeof width === "number" ? width === 0 ? "0" : `${width}px` : width } : {},
    ...height !== void 0 ? { ["--dyn-box-height"]: typeof height === "number" ? height === 0 ? "0" : `${height}px` : height } : {},
    ...maxWidth ? { ["--dyn-box-max-width"]: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth } : {},
    ...maxHeight ? { ["--dyn-box-max-height"]: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight } : {},
    ...minWidth ? { ["--dyn-box-min-width"]: typeof minWidth === "number" ? `${minWidth}px` : minWidth } : {},
    ...minHeight ? { ["--dyn-box-min-height"]: typeof minHeight === "number" ? `${minHeight}px` : minHeight } : {},
    ...top !== void 0 ? { ["--dyn-box-top"]: typeof top === "number" ? `${top}px` : top } : {},
    ...right !== void 0 ? { ["--dyn-box-right"]: typeof right === "number" ? `${right}px` : right } : {},
    ...bottom !== void 0 ? { ["--dyn-box-bottom"]: typeof bottom === "number" ? bottom === 0 ? "0" : `${bottom}px` : bottom } : {},
    ...left !== void 0 ? { ["--dyn-box-left"]: typeof left === "number" ? `${left}px` : left } : {},
    ...zIndex !== void 0 ? { ["--dyn-box-z-index"]: String(zIndex) } : {},
    ...backgroundColor ? { ["--dyn-box-bg"]: backgroundColor } : {},
    ...color ? { ["--dyn-box-color"]: color } : {},
    ...finalBackground && !["primary", "secondary", "tertiary", "success", "warning", "danger", "surface"].includes(finalBackground) ? { ["--dyn-box-bg"]: finalBackground } : {},
    ...customBorderRadius ? { ["--dyn-box-radius"]: customBorderRadius } : {},
    ...finalRadius && !["none", "xs", "sm", "md", "lg", "xl", "full"].includes(finalRadius) ? { ["--dyn-box-radius"]: finalRadius } : {},
    ...basePadding ? { ["--dyn-box-padding"]: isToken(basePadding) ? toTokenVar(basePadding) : basePadding } : {},
    ...px ? { ["--dyn-box-padding-left"]: isToken(px) ? toTokenVar(px) : px, ["--dyn-box-padding-right"]: isToken(px) ? toTokenVar(px) : px } : {},
    ...py ? { ["--dyn-box-padding-top"]: isToken(py) ? toTokenVar(py) : py, ["--dyn-box-padding-bottom"]: isToken(py) ? toTokenVar(py) : py } : {},
    ...pt ? { ["--dyn-box-padding-top"]: isToken(pt) ? toTokenVar(pt) : pt } : {},
    ...pr ? { ["--dyn-box-padding-right"]: isToken(pr) ? toTokenVar(pr) : pr } : {},
    ...pb ? { ["--dyn-box-padding-bottom"]: isToken(pb) ? toTokenVar(pb) : pb } : {},
    ...pl ? { ["--dyn-box-padding-left"]: isToken(pl) ? toTokenVar(pl) : pl } : {},
    ...m ? { ["--dyn-box-margin"]: isToken(m) ? toTokenVar(m) : m } : {},
    ...mx ? { ["--dyn-box-margin-left"]: mx === "auto" ? "auto" : isToken(mx) ? toTokenVar(mx) : mx, ["--dyn-box-margin-right"]: mx === "auto" ? "auto" : isToken(mx) ? toTokenVar(mx) : mx } : {},
    ...my ? { ["--dyn-box-margin-top"]: isToken(my) ? toTokenVar(my) : my, ["--dyn-box-margin-bottom"]: isToken(my) ? toTokenVar(my) : my } : {},
    ...mt ? { ["--dyn-box-margin-top"]: isToken(mt) ? toTokenVar(mt) : mt } : {},
    ...mr ? { ["--dyn-box-margin-right"]: mr === "auto" ? "auto" : isToken(mr) ? toTokenVar(mr) : mr } : {},
    ...mb ? { ["--dyn-box-margin-bottom"]: mb === "0" ? "0" : isToken(mb) ? toTokenVar(mb) : mb } : {},
    ...ml ? { ["--dyn-box-margin-left"]: ml === "auto" ? "auto" : isToken(ml) ? toTokenVar(ml) : ml } : {},
    ...finalDirection ? { ["--dyn-box-flex-direction"]: finalDirection } : {},
    ...wrap ? { ["--dyn-box-flex-wrap"]: wrap } : {},
    ...justify ? { ["--dyn-box-justify-content"]: justify } : {},
    ...align ? { ["--dyn-box-align-items"]: align } : {},
    ...alignContent ? { ["--dyn-box-align-content"]: alignContent } : {},
    ...gap ? { ["--dyn-box-gap"]: isToken(gap) ? toTokenVar(gap) : gap } : {},
    ...rowGap ? { ["--dyn-box-row-gap"]: isToken(rowGap) ? toTokenVar(rowGap) : rowGap } : {},
    ...columnGap ? { ["--dyn-box-column-gap"]: isToken(columnGap) ? toTokenVar(columnGap) : columnGap } : {},
    ...gridTemplateColumns ? { ["--dyn-box-grid-columns"]: gridTemplateColumns } : {},
    ...gridTemplateRows ? { ["--dyn-box-grid-rows"]: gridTemplateRows } : {},
    ...gridTemplateAreas ? { ["--dyn-box-grid-areas"]: gridTemplateAreas } : {},
    ...overflowX ? { ["--dyn-box-overflow-x"]: overflowX } : {},
    ...overflowY ? { ["--dyn-box-overflow-y"]: overflowY } : {},
    ...cssVars,
    ...style
  };
  useEffect(() => {
    if (focusOnMount && interactive) {
      queueMicrotask == null ? void 0 : queueMicrotask(() => {
        var _a, _b;
        try {
          (_b = (_a = elementRef.current) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
        } catch {
        }
      });
    }
  }, [focusOnMount, interactive]);
  const liveRegionId = ariaLiveMessage ? `${internalId}-liveregion` : void 0;
  const describedBy = [ariaDescribedBy, liveRegionId].filter(Boolean).join(" ") || void 0;
  const onKeyDown = (e) => {
    var _a, _b;
    (_a = domProps.onKeyDown) == null ? void 0 : _a.call(domProps, e);
    if (!interactive)
      return;
    if (e.key === "Enter" || e.key === " ") {
      (_b = domProps.onClick) == null ? void 0 : _b.call(domProps, e);
      if (e.key === " ")
        e.preventDefault();
    }
  };
  const element = React__default.createElement(
    Component,
    {
      // Spread user provided DOM props first so that internal handlers like
      // onKeyDown can wrap and call them. If we spread domProps last they
      // would overwrite our internal handlers and break expected behaviour
      // (e.g. triggering click on Enter/Space and forwarding the event to
      // user's onKeyDown).
      ...domProps,
      ref: setRefs,
      id: internalId,
      role: interactive ? role ?? "button" : role,
      className: classes,
      style: styleVars,
      "aria-label": ariaLabel,
      "aria-describedby": describedBy,
      "aria-labelledby": ariaLabelledBy,
      "data-testid": dataTestId,
      tabIndex: interactive ? domProps.tabIndex ?? 0 : domProps.tabIndex,
      onKeyDown
    },
    children,
    ariaLiveMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: liveRegionId, "aria-live": ariaLivePoliteness, "aria-atomic": "true", className: "dyn-sr-only", children: ariaLiveMessage })
  );
  return element;
}
const _DynBox = forwardRef(DynBoxInner);
_DynBox.displayName = "DynBox";
const breadcrumb = "dyn-tzmlO";
const breadcrumbList$1 = "dyn-DtQRX";
const breadcrumbItem$1 = "dyn-mpEdi";
const breadcrumbLink$1 = "dyn-hINQI";
const breadcrumbCurrent = "dyn-D38-Z";
const breadcrumbStatic = "dyn-iNW7-";
const breadcrumbText$1 = "dyn-KpDD8";
const breadcrumbIcon = "dyn--RW07";
const breadcrumbSeparator$1 = "dyn-H0sW3";
const breadcrumbSeparatorChevron = "dyn-xyeM0";
const breadcrumbSeparatorArrow = "dyn-r9PwJ";
const breadcrumbSeparatorDot = "dyn-ldsIg";
const breadcrumbSeparatorCustom = "dyn-NpC94";
const breadcrumbItemEllipsis = "dyn-64jkA";
const breadcrumbItemShow = "dyn-OBF3L";
const breadcrumbSmall = "dyn-7jl4Z";
const breadcrumbLarge = "dyn-oqdYr";
const breadcrumbCollapsed = "dyn-kn1MK";
const styles$l = {
  breadcrumb,
  breadcrumbList: breadcrumbList$1,
  breadcrumbItem: breadcrumbItem$1,
  breadcrumbLink: breadcrumbLink$1,
  breadcrumbCurrent,
  breadcrumbStatic,
  breadcrumbText: breadcrumbText$1,
  breadcrumbIcon,
  breadcrumbSeparator: breadcrumbSeparator$1,
  breadcrumbSeparatorChevron,
  breadcrumbSeparatorArrow,
  breadcrumbSeparatorDot,
  breadcrumbSeparatorCustom,
  breadcrumbItemEllipsis,
  breadcrumbItemShow,
  breadcrumbSmall,
  breadcrumbLarge,
  breadcrumbCollapsed
};
const DynBreadcrumb = forwardRef(
  ({
    className,
    items,
    size = "medium",
    separator = "slash",
    customSeparator,
    maxItems = 0,
    showEllipsis = true,
    navigationLabel = "Breadcrumb",
    onItemClick,
    onEllipsisClick,
    expanded: controlledExpanded,
    linkComponent: LinkComponent = "a",
    enableStructuredData = false,
    id,
    children,
    "data-testid": dataTestId,
    "aria-label": ariaLabel,
    ...rest
  }, ref) => {
    const [internalExpanded, setInternalExpanded] = useState(false);
    const [generatedId] = useState(() => generateId("breadcrumb"));
    const itemsSignature = useMemo(
      () => items.map((item2) => `${item2.id ?? item2.label}:${item2.href ?? ""}:${item2.current ? "1" : "0"}`).join("|"),
      [items]
    );
    useEffect(() => {
      if (controlledExpanded === void 0) {
        setInternalExpanded(false);
      }
    }, [controlledExpanded, itemsSignature]);
    const expanded = controlledExpanded ?? internalExpanded;
    const navId = id ?? generatedId;
    const totalItems = items.length;
    const shouldCollapse = maxItems > 0 && totalItems > maxItems && !expanded;
    const visibleItems = useMemo(() => {
      if (!shouldCollapse) {
        return items.map((item2, originalIndex) => ({ item: item2, originalIndex }));
      }
      if (items.length === 0) {
        return [];
      }
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (!firstItem || !lastItem) {
        return [];
      }
      const firstEntry = { item: firstItem, originalIndex: 0 };
      const middleEntries = items.slice(1, -1).map((item2, index) => ({ item: item2, originalIndex: index + 1 })).filter(({ item: item2 }) => item2 && item2.showWhenCollapsed);
      const lastEntry = {
        item: lastItem,
        originalIndex: items.length - 1
      };
      return [firstEntry, ...middleEntries, lastEntry];
    }, [items, shouldCollapse]);
    const hiddenItemCount = shouldCollapse ? totalItems - visibleItems.length : 0;
    const hasHiddenItems = hiddenItemCount > 0;
    const handleEllipsisClick = useCallback(() => {
      if (controlledExpanded === void 0) {
        setInternalExpanded(true);
      }
      onEllipsisClick == null ? void 0 : onEllipsisClick();
    }, [controlledExpanded, onEllipsisClick]);
    const handleItemClick = useCallback(
      (item2) => (event) => {
        onItemClick == null ? void 0 : onItemClick(item2, event);
      },
      [onItemClick]
    );
    const renderSeparator = useCallback(
      (index) => {
        if (separator === "custom" && !customSeparator) {
          return null;
        }
        const separatorClasses = cn(
          styles$l.breadcrumbSeparator,
          separator !== "slash" && styles$l[`breadcrumbSeparator--${separator}`],
          separator === "custom" && styles$l["breadcrumbSeparator--custom"]
        );
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: separatorClasses,
            "aria-hidden": "true",
            "data-separator": separator,
            children: separator === "custom" ? customSeparator : null
          },
          `separator-${index}`
        );
      },
      [customSeparator, separator]
    );
    const renderItemContent = useCallback(
      (item2, labelProps) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        item2.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$l.breadcrumbIcon, "aria-hidden": "true", children: item2.icon }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$l.breadcrumbText, ...labelProps, children: item2.label })
      ] }),
      []
    );
    const renderItem = useCallback(
      (visibleItem, index, array) => {
        const { item: item2 } = visibleItem;
        const isLast = index === array.length - 1;
        const isCurrent = Boolean(item2.current) || isLast && !item2.href;
        const isLink = Boolean(item2.href) && !isCurrent;
        const listItemClasses = cn(
          styles$l.breadcrumbItem,
          item2.showWhenCollapsed && styles$l["breadcrumbItem--show"]
        );
        const listItemProps = enableStructuredData ? {
          itemProp: "itemListElement",
          itemScope: true,
          itemType: "https://schema.org/ListItem"
        } : void 0;
        const itemContent = isLink ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          LinkComponent,
          {
            href: item2.href,
            className: styles$l.breadcrumbLink,
            onClick: handleItemClick(item2),
            ...item2.linkProps,
            ...enableStructuredData ? { itemProp: "item" } : void 0,
            children: enableStructuredData ? renderItemContent(item2, { itemProp: "name" }) : renderItemContent(item2)
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: isCurrent ? styles$l.breadcrumbCurrent : styles$l.breadcrumbStatic,
            ...isCurrent ? { "aria-current": "page" } : void 0,
            ...enableStructuredData ? { itemProp: "name" } : void 0,
            children: renderItemContent(item2)
          }
        );
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: listItemClasses,
            ...listItemProps,
            children: [
              itemContent,
              enableStructuredData ? /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { itemProp: "position", content: String(index + 1) }) : null,
              !isLast && renderSeparator(visibleItem.originalIndex)
            ]
          },
          item2.id ?? `breadcrumb-item-${visibleItem.originalIndex}`
        );
      },
      [enableStructuredData, handleItemClick, renderItemContent, renderSeparator]
    );
    const renderEllipsis = useCallback(() => {
      if (!hasHiddenItems || !showEllipsis) {
        return null;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: cn(styles$l.breadcrumbItem, styles$l["breadcrumbItem--ellipsis"]),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: styles$l["breadcrumbItem--ellipsis"],
                onClick: handleEllipsisClick,
                "aria-label": `Show ${hiddenItemCount} hidden breadcrumb items`,
                "aria-expanded": expanded,
                children: "…"
              }
            )
          },
          "ellipsis"
        ),
        renderSeparator(-1)
      ] });
    }, [expanded, handleEllipsisClick, hasHiddenItems, hiddenItemCount, renderSeparator, showEllipsis]);
    if (visibleItems.length === 0) {
      return null;
    }
    const breadcrumbClasses = cn(
      styles$l.breadcrumb,
      styles$l[`breadcrumb--${size}`],
      shouldCollapse && showEllipsis && styles$l["breadcrumb--collapsed"],
      className
    );
    const navStructuredDataProps = enableStructuredData ? {
      itemScope: true,
      itemType: "https://schema.org/BreadcrumbList"
    } : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        ref,
        id: navId,
        className: breadcrumbClasses,
        "aria-label": ariaLabel ?? navigationLabel,
        "data-testid": dataTestId,
        ...navStructuredDataProps,
        ...rest,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: styles$l.breadcrumbList, children: [
            visibleItems[0] && renderItem(visibleItems[0], 0, visibleItems),
            visibleItems.length > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              renderEllipsis(),
              visibleItems.slice(1).map(
                (visibleItem, index) => renderItem(visibleItem, index + 1, visibleItems)
              )
            ] }) : null
          ] }),
          children
        ]
      }
    );
  }
);
DynBreadcrumb.displayName = "DynBreadcrumb";
const DYN_CHART_DEFAULT_PROPS = {
  type: "line",
  data: [],
  width: 400,
  height: 300,
  colors: ["#0066cc", "#00b248", "#f44336", "#ff9800", "#9c27b0"],
  showLegend: true,
  showTooltip: true,
  showGrid: true
};
const DEFAULT_PADDING = { top: 20, right: 20, bottom: 60, left: 60 };
const FALLBACK_COLORS = ["#0066cc", "#00b248", "#f44336", "#ff9800", "#9c27b0"];
const EMPTY_DATA_RANGES = {
  minX: 0,
  maxX: 0,
  minY: 0,
  maxY: 1
};
function isSeriesCollection(data) {
  return Array.isArray(data) && data.length > 0 && typeof data[0] === "object" && "name" in data[0];
}
function normalizeSeries(data, palette = FALLBACK_COLORS) {
  if (!data || data.length === 0) {
    return [];
  }
  if (isSeriesCollection(data)) {
    return data.map((series, index) => ({
      ...series,
      color: series.color ?? palette[index % palette.length] ?? FALLBACK_COLORS[index % FALLBACK_COLORS.length]
    }));
  }
  const fallbackColor = palette[0] ?? FALLBACK_COLORS[0];
  return [
    {
      name: "Series 1",
      data,
      color: fallbackColor
    }
  ];
}
function calculateChartDimensions(width, height) {
  const chartWidth = Math.max(0, width - (DEFAULT_PADDING.left + DEFAULT_PADDING.right));
  const chartHeight = Math.max(0, height - (DEFAULT_PADDING.top + DEFAULT_PADDING.bottom));
  return {
    padding: { ...DEFAULT_PADDING },
    chartWidth,
    chartHeight,
    totalWidth: width,
    totalHeight: height
  };
}
function calculateDataRanges(seriesCollection, axis) {
  if (seriesCollection.length === 0) {
    if ((axis == null ? void 0 : axis.min) !== void 0 && (axis == null ? void 0 : axis.max) !== void 0) {
      return { minX: 0, maxX: 0, minY: axis.min, maxY: axis.max };
    }
    return EMPTY_DATA_RANGES;
  }
  let minY = (axis == null ? void 0 : axis.min) ?? Number.POSITIVE_INFINITY;
  let maxY = (axis == null ? void 0 : axis.max) ?? Number.NEGATIVE_INFINITY;
  let maxX = 0;
  seriesCollection.forEach((series) => {
    series.data.forEach((point, index) => {
      maxX = Math.max(maxX, index);
      if ((axis == null ? void 0 : axis.min) === void 0) {
        minY = Math.min(minY, point.value);
      }
      if ((axis == null ? void 0 : axis.max) === void 0) {
        maxY = Math.max(maxY, point.value);
      }
    });
  });
  if (!Number.isFinite(minY) || !Number.isFinite(maxY)) {
    return { ...EMPTY_DATA_RANGES, maxX };
  }
  if ((axis == null ? void 0 : axis.min) === void 0) {
    minY = Math.min(minY, 0);
  }
  if ((axis == null ? void 0 : axis.max) === void 0) {
    maxY = maxY === minY ? minY + 1 : maxY;
  }
  return {
    minX: 0,
    maxX,
    minY,
    maxY
  };
}
function buildLegendItems(seriesCollection) {
  return seriesCollection.map((series, index) => ({
    id: `${series.name}-${index}`,
    label: series.name,
    color: series.color,
    seriesIndex: index
  }));
}
function getEmptyStateMessage(seriesCollection) {
  if (seriesCollection.length === 0) {
    return "No chart data available";
  }
  const totalValues = seriesCollection.reduce((total, series) => {
    return total + series.data.reduce((sum, point) => sum + Math.abs(point.value), 0);
  }, 0);
  return totalValues === 0 ? "Chart data contains no measurable values" : "";
}
const root$7 = "dyn-DpnC-";
const figure$1 = "dyn-feWCm";
const header$5 = "dyn-ds-xI";
const title$3 = "dyn-yX8Fc";
const subtitle$3 = "dyn-TYzg0";
const content$5 = "dyn-Ej7bZ";
const canvas$1 = "dyn-btEaT";
const tooltip = "dyn-bRLYr";
const tooltipHeader = "dyn-2F6TI";
const tooltipColor = "dyn-aEioo";
const tooltipSeries = "dyn-24tAa";
const tooltipPercentage = "dyn-elue-";
const tooltipValue = "dyn-C5WjZ";
const tooltipLabel = "dyn-9hl30";
const legend$1 = "dyn-v-KsX";
const legendItem$1 = "dyn-pi8GF";
const legendColor$1 = "dyn-7f4CT";
const legendLabel$1 = "dyn-wuhB9";
const typeLine$1 = "dyn-JpWkE";
const typeBar = "dyn-DrzDU";
const typePie = "dyn-zHDe5";
const typeArea = "dyn-xDV84";
const emptyState$2 = "dyn-kkrnZ";
const visuallyHidden$1 = "dyn-V7xgt";
const styles$k = {
  root: root$7,
  figure: figure$1,
  header: header$5,
  title: title$3,
  subtitle: subtitle$3,
  content: content$5,
  canvas: canvas$1,
  tooltip,
  tooltipHeader,
  tooltipColor,
  tooltipSeries,
  tooltipPercentage,
  tooltipValue,
  tooltipLabel,
  legend: legend$1,
  legendItem: legendItem$1,
  legendColor: legendColor$1,
  legendLabel: legendLabel$1,
  typeLine: typeLine$1,
  typeBar,
  typePie,
  typeArea,
  emptyState: emptyState$2,
  visuallyHidden: visuallyHidden$1
};
const normalizeAngle = (angle) => {
  const twoPi = Math.PI * 2;
  const normalized = angle % twoPi;
  return normalized >= 0 ? normalized : normalized + twoPi;
};
const typeClassNameMap$1 = {
  line: styles$k.typeLine,
  bar: styles$k.typeBar,
  pie: styles$k.typePie,
  area: styles$k.typeArea
};
const DynChart = forwardRef((props, ref) => {
  const {
    type = DYN_CHART_DEFAULT_PROPS.type,
    data = DYN_CHART_DEFAULT_PROPS.data,
    title: title2,
    subtitle: subtitle2,
    width = DYN_CHART_DEFAULT_PROPS.width,
    height = DYN_CHART_DEFAULT_PROPS.height,
    colors = DYN_CHART_DEFAULT_PROPS.colors,
    showLegend = DYN_CHART_DEFAULT_PROPS.showLegend,
    showTooltip = DYN_CHART_DEFAULT_PROPS.showTooltip,
    showGrid = DYN_CHART_DEFAULT_PROPS.showGrid,
    xAxis,
    yAxis,
    ariaDescription,
    className,
    id,
    children,
    "data-testid": dataTestId,
    ...rest
  } = props;
  const canvasRef = useRef(null);
  const tooltipTargetsRef = useRef([]);
  const [tooltipState, setTooltipState] = useState({
    visible: false,
    x: 0,
    y: 0,
    value: 0
  });
  const instanceId = useId();
  const titleId = title2 ? `${id ?? instanceId}-title` : void 0;
  const subtitleId = subtitle2 ? `${id ?? instanceId}-subtitle` : void 0;
  const descriptionId = ariaDescription ? `${id ?? instanceId}-description` : void 0;
  const normalizedData = useMemo(
    () => normalizeSeries(data, colors),
    [data, colors]
  );
  const chartDimensions = useMemo(
    () => calculateChartDimensions(width, height),
    [width, height]
  );
  const dataRanges = useMemo(
    () => calculateDataRanges(normalizedData, yAxis),
    [normalizedData, yAxis]
  );
  const legendItems = useMemo(
    () => buildLegendItems(normalizedData),
    [normalizedData]
  );
  const emptyStateMessage = useMemo(
    () => getEmptyStateMessage(normalizedData),
    [normalizedData]
  );
  const hideTooltip = useCallback(() => {
    setTooltipState((prev) => prev.visible ? { ...prev, visible: false } : prev);
  }, []);
  const findTooltipTarget = useCallback((x, y) => {
    for (const target of tooltipTargetsRef.current) {
      if (target.kind === "point") {
        const distance = Math.hypot(x - target.x, y - target.y);
        if (distance <= target.radius + 6) {
          return target;
        }
      } else if (target.kind === "bar") {
        if (x >= target.x && x <= target.x + target.width && y >= target.y && y <= target.y + target.height) {
          return target;
        }
      } else if (target.kind === "slice") {
        const dx = x - target.centerX;
        const dy = y - target.centerY;
        const distance = Math.hypot(dx, dy);
        if (distance > target.radius) {
          continue;
        }
        const angle = normalizeAngle(Math.atan2(dy, dx));
        const start = normalizeAngle(target.startAngle);
        const end = normalizeAngle(target.endAngle);
        if (end < start) {
          if (angle >= start || angle <= end) {
            return target;
          }
        } else if (angle >= start && angle <= end) {
          return target;
        }
      }
    }
    return void 0;
  }, []);
  const handleMouseMove = useCallback(
    (event) => {
      if (!showTooltip) {
        return;
      }
      const { offsetX, offsetY } = event.nativeEvent;
      const target = findTooltipTarget(offsetX, offsetY);
      if (!target) {
        hideTooltip();
        return;
      }
      setTooltipState((prev) => {
        const nextState = {
          visible: true,
          x: offsetX + 12,
          y: offsetY - 12,
          value: target.value,
          series: target.series,
          color: target.color
        };
        if (target.kind === "slice") {
          nextState.percentage = target.percentage;
        }
        if (typeof target.label === "string" && target.label.length > 0) {
          nextState.label = target.label;
        }
        if (prev.visible && prev.x === nextState.x && prev.y === nextState.y && prev.value === nextState.value && prev.label === nextState.label && prev.series === nextState.series && prev.color === nextState.color && prev.percentage === nextState.percentage) {
          return prev;
        }
        return nextState;
      });
    },
    [findTooltipTarget, hideTooltip, showTooltip]
  );
  const handleMouseLeave = useCallback(() => {
    if (!showTooltip) {
      return;
    }
    hideTooltip();
  }, [hideTooltip, showTooltip]);
  useEffect(() => {
    if (!showTooltip) {
      hideTooltip();
    }
  }, [hideTooltip, showTooltip]);
  useEffect(() => () => hideTooltip(), [hideTooltip]);
  const drawGrid = useCallback(
    (ctx) => {
      if (!showGrid || type === "pie")
        return;
      const { padding, chartWidth, chartHeight } = chartDimensions;
      ctx.save();
      ctx.strokeStyle = "#e0e0e0";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      for (let i = 0; i <= 5; i++) {
        const y = padding.top + chartHeight / 5 * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(padding.left + chartWidth, y);
        ctx.stroke();
      }
      const maxDataPoints = normalizedData.length ? Math.max(...normalizedData.map((series) => series.data.length)) : 0;
      if (maxDataPoints > 1) {
        const stepCount = Math.min(maxDataPoints - 1, 10);
        for (let i = 0; i <= stepCount; i++) {
          const x = padding.left + chartWidth / stepCount * i;
          ctx.beginPath();
          ctx.moveTo(x, padding.top);
          ctx.lineTo(x, padding.top + chartHeight);
          ctx.stroke();
        }
      }
      ctx.restore();
    },
    [chartDimensions, normalizedData, showGrid, type]
  );
  const drawAxes = useCallback(
    (ctx) => {
      if (type === "pie")
        return;
      const { padding, chartWidth, chartHeight } = chartDimensions;
      ctx.save();
      ctx.strokeStyle = "#333";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(padding.left, padding.top + chartHeight);
      ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(padding.left, padding.top);
      ctx.lineTo(padding.left, padding.top + chartHeight);
      ctx.stroke();
      ctx.fillStyle = "#666";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      if (xAxis == null ? void 0 : xAxis.title) {
        ctx.fillText(xAxis.title, padding.left + chartWidth / 2, chartDimensions.totalHeight - 10);
      }
      if (yAxis == null ? void 0 : yAxis.title) {
        ctx.save();
        ctx.translate(15, padding.top + chartHeight / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(yAxis.title, 0, 0);
        ctx.restore();
      }
      ctx.textAlign = "right";
      for (let i = 0; i <= 5; i++) {
        const value2 = dataRanges.minY + (dataRanges.maxY - dataRanges.minY) / 5 * (5 - i);
        const y = padding.top + chartHeight / 5 * i;
        ctx.fillText(value2.toFixed(1), padding.left - 10, y + 5);
      }
      ctx.restore();
    },
    [chartDimensions, dataRanges, type, xAxis == null ? void 0 : xAxis.title, yAxis == null ? void 0 : yAxis.title]
  );
  const drawLineOrAreaChart = useCallback(
    (ctx, variant) => {
      const { padding, chartWidth, chartHeight } = chartDimensions;
      const yRange = Math.max(dataRanges.maxY - dataRanges.minY || 0, 1);
      normalizedData.forEach((series, seriesIndex) => {
        const color = series.color || colors[seriesIndex % colors.length] || "#0066cc";
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        if (series.data.length === 0)
          return;
        ctx.beginPath();
        series.data.forEach((point, index) => {
          const x = padding.left + chartWidth / Math.max(series.data.length - 1, 1) * index;
          const y = padding.top + chartHeight - (point.value - dataRanges.minY) / yRange * chartHeight;
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        if (variant === "area") {
          const lastX = padding.left + chartWidth / Math.max(series.data.length - 1, 1) * (series.data.length - 1);
          const firstX = padding.left;
          const baseY = padding.top + chartHeight;
          ctx.lineTo(lastX, baseY);
          ctx.lineTo(firstX, baseY);
          ctx.closePath();
          ctx.globalAlpha = 0.15;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
        ctx.stroke();
        series.data.forEach((point, index) => {
          const x = padding.left + chartWidth / Math.max(series.data.length - 1, 1) * index;
          const y = padding.top + chartHeight - (point.value - dataRanges.minY) / yRange * chartHeight;
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, 2 * Math.PI);
          ctx.fill();
          if (showTooltip) {
            tooltipTargetsRef.current.push({
              kind: "point",
              x,
              y,
              radius: 6,
              value: point.value,
              label: point.label ?? `Point ${index + 1}`,
              series: series.name,
              color
            });
          }
        });
      });
    },
    [chartDimensions, colors, dataRanges, normalizedData, showTooltip]
  );
  const drawBarChart = useCallback(
    (ctx) => {
      var _a;
      const { padding, chartWidth, chartHeight } = chartDimensions;
      const yRange = Math.max(dataRanges.maxY - dataRanges.minY || 0, 1);
      if (!normalizedData.length)
        return;
      const maxDataPoints = ((_a = normalizedData[0]) == null ? void 0 : _a.data.length) || 0;
      if (maxDataPoints === 0)
        return;
      const groupWidth = chartWidth / maxDataPoints;
      const barWidth = groupWidth * 0.8;
      const barSpacing = groupWidth * 0.2;
      normalizedData.forEach((series, seriesIndex) => {
        const color = series.color || colors[seriesIndex % colors.length] || "#0066cc";
        ctx.fillStyle = color;
        series.data.forEach((point, index) => {
          const x = padding.left + groupWidth * index + barSpacing / 2 + barWidth / normalizedData.length * seriesIndex;
          const individualWidth = barWidth / Math.max(normalizedData.length, 1);
          const barHeight = (point.value - dataRanges.minY) / yRange * chartHeight;
          const y = padding.top + chartHeight - barHeight;
          ctx.fillRect(x, y, individualWidth, barHeight);
          if (showTooltip) {
            tooltipTargetsRef.current.push({
              kind: "bar",
              x,
              y,
              width: individualWidth,
              height: barHeight,
              value: point.value,
              label: point.label ?? `Category ${index + 1}`,
              series: series.name,
              color
            });
          }
        });
      });
    },
    [chartDimensions, colors, dataRanges, normalizedData, showTooltip]
  );
  const drawPieChart = useCallback(
    (ctx) => {
      const { chartWidth, chartHeight } = chartDimensions;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(chartWidth, chartHeight) / 3;
      if (!normalizedData.length)
        return;
      const series = normalizedData[0];
      const dataPoints = (series == null ? void 0 : series.data) ?? [];
      const total = dataPoints.reduce((sum, point) => sum + point.value, 0);
      if (total === 0)
        return;
      let currentAngle = -Math.PI / 2;
      dataPoints.forEach((point, index) => {
        const sliceAngle = point.value / total * 2 * Math.PI;
        const color = point.color || colors[index % colors.length] || "#0066cc";
        const nextAngle = currentAngle + sliceAngle;
        const percentage = total ? point.value / total * 100 : 0;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, nextAngle);
        ctx.closePath();
        ctx.fill();
        if (point.value / total > 0.05) {
          const labelAngle = currentAngle + sliceAngle / 2;
          const labelX = centerX + Math.cos(labelAngle) * (radius * 0.7);
          const labelY = centerY + Math.sin(labelAngle) * (radius * 0.7);
          ctx.fillStyle = "#fff";
          ctx.font = "12px Arial";
          ctx.textAlign = "center";
          ctx.fillText(`${percentage.toFixed(1)}%`, labelX, labelY);
        }
        if (showTooltip) {
          tooltipTargetsRef.current.push({
            kind: "slice",
            startAngle: currentAngle,
            endAngle: nextAngle,
            centerX,
            centerY,
            radius,
            value: point.value,
            label: point.label ?? "",
            series: (series == null ? void 0 : series.name) ?? "Series 1",
            color,
            percentage
          });
        }
        currentAngle = nextAngle;
      });
    },
    [chartDimensions, colors, height, normalizedData, showTooltip, width]
  );
  useEffect(() => {
    const canvas2 = canvasRef.current;
    if (!canvas2) {
      return;
    }
    const context = canvas2.getContext("2d");
    if (!context) {
      return;
    }
    canvas2.width = chartDimensions.totalWidth;
    canvas2.height = chartDimensions.totalHeight;
    tooltipTargetsRef.current = [];
    hideTooltip();
    context.clearRect(0, 0, chartDimensions.totalWidth, chartDimensions.totalHeight);
    if (!normalizedData.length) {
      return;
    }
    drawGrid(context);
    drawAxes(context);
    switch (type) {
      case "line":
        drawLineOrAreaChart(context, "line");
        break;
      case "area":
        drawLineOrAreaChart(context, "area");
        break;
      case "bar":
        drawBarChart(context);
        break;
      case "pie":
        drawPieChart(context);
        break;
      default:
        drawLineOrAreaChart(context, "line");
    }
  }, [
    chartDimensions,
    drawAxes,
    drawBarChart,
    drawGrid,
    drawLineOrAreaChart,
    drawPieChart,
    hideTooltip,
    normalizedData,
    type
  ]);
  const canvasAriaLabel = title2 ?? "Chart visualization";
  const describedBy = [subtitle2 ? subtitleId : void 0, ariaDescription ? descriptionId : void 0].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ...rest,
      ref,
      id,
      "data-testid": dataTestId,
      className: cn(styles$k.root, typeClassNameMap$1[type], className),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: styles$k.figure, "aria-labelledby": titleId, "aria-describedby": describedBy || void 0, children: [
        (title2 || subtitle2) && /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: styles$k.header, children: [
          title2 && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: titleId, className: styles$k.title, children: title2 }),
          subtitle2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: subtitleId, className: styles$k.subtitle, children: subtitle2 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$k.content, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "canvas",
            {
              ref: canvasRef,
              className: styles$k.canvas,
              role: "img",
              "aria-label": canvasAriaLabel,
              "aria-describedby": describedBy || void 0,
              width: chartDimensions.totalWidth,
              height: chartDimensions.totalHeight,
              style: { width, height },
              onMouseMove: showTooltip ? handleMouseMove : void 0,
              onMouseLeave: showTooltip ? handleMouseLeave : void 0
            }
          ),
          showTooltip && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: styles$k.tooltip,
              "data-visible": tooltipState.visible,
              "aria-hidden": !tooltipState.visible,
              style: {
                left: `${tooltipState.x}px`,
                top: `${tooltipState.y}px`
              },
              children: [
                (tooltipState.series || tooltipState.color || typeof tooltipState.percentage === "number") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$k.tooltipHeader, children: [
                  tooltipState.color && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: styles$k.tooltipColor,
                      style: { backgroundColor: tooltipState.color }
                    }
                  ),
                  tooltipState.series && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$k.tooltipSeries, children: tooltipState.series }),
                  typeof tooltipState.percentage === "number" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$k.tooltipPercentage, children: [
                    tooltipState.percentage.toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$k.tooltipValue, children: tooltipState.value }),
                tooltipState.label && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$k.tooltipLabel, children: tooltipState.label })
              ]
            }
          ),
          emptyStateMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$k.emptyState, role: "status", children: emptyStateMessage })
        ] }),
        showLegend && legendItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$k.legend, role: "list", children: legendItems.map((item2) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$k.legendItem, role: "listitem", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: styles$k.legendColor,
                style: { backgroundColor: (_a = normalizedData[item2.seriesIndex]) == null ? void 0 : _a.color }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$k.legendLabel, children: item2.label })
          ] }, item2.id);
        }) }),
        children,
        ariaDescription && /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { id: descriptionId, className: styles$k.visuallyHidden, children: ariaDescription })
      ] })
    }
  );
});
DynChart.displayName = "DynChart";
const DYN_FIELD_CONTAINER_DEFAULT_PROPS = {
  showValidation: true,
  "data-testid": "dyn-field-container"
};
const container$4 = "dyn-2uNZn";
const containerError = "dyn-mvcN0";
const label$2 = "dyn-Xro9z";
const containerRequired = "dyn-LnG57";
const required = "dyn-jeaBK";
const containerOptional = "dyn-nrP48";
const optional$1 = "dyn-UvNU5";
const feedback = "dyn-W-0Lk";
const error$1 = "dyn---lYQ";
const help = "dyn-H27oB";
const styles$j = {
  container: container$4,
  containerError,
  label: label$2,
  containerRequired,
  required,
  containerOptional,
  optional: optional$1,
  feedback,
  error: error$1,
  help
};
const DynFieldContainer = forwardRef(
  (props, ref) => {
    const {
      children,
      label: label2,
      required: required2 = false,
      optional: optional2 = false,
      helpText,
      errorText,
      showValidation = DYN_FIELD_CONTAINER_DEFAULT_PROPS.showValidation,
      className,
      htmlFor,
      id,
      "data-testid": dataTestIdProp,
      ...rest
    } = props;
    const dataTestId = dataTestIdProp ?? DYN_FIELD_CONTAINER_DEFAULT_PROPS["data-testid"];
    const containerClasses = cn(
      styles$j.container,
      errorText && styles$j.containerError,
      required2 && styles$j.containerRequired,
      optional2 && styles$j.containerOptional,
      className
    );
    const errorId = htmlFor ? `${htmlFor}-error` : void 0;
    const helpId = htmlFor ? `${htmlFor}-help` : void 0;
    const labelId = label2 && htmlFor ? `${htmlFor}-label` : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ...rest,
        ref,
        id,
        className: containerClasses,
        "data-testid": dataTestId,
        children: [
          label2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              className: styles$j.label,
              htmlFor,
              id: labelId,
              children: [
                label2,
                required2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$j.required, "aria-label": "obrigatório", children: "*" }),
                optional2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$j.optional, "aria-label": "opcional", children: "(opcional)" })
              ]
            }
          ),
          children,
          showValidation && (helpText || errorText) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$j.feedback, children: errorText ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: styles$j.error,
              id: errorId,
              role: "alert",
              "aria-live": "polite",
              children: errorText
            }
          ) : helpText ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$j.help, id: helpId, children: helpText }) : null })
        ]
      }
    );
  }
);
DynFieldContainer.displayName = "DynFieldContainer";
const useDynFieldValidation = ({
  value: value2,
  required: required2,
  validation,
  customError
}) => {
  const [error2, setError] = useState("");
  const validate = useCallback(async () => {
    setError("");
    if (customError) {
      setError(customError);
      return false;
    }
    if (required2) {
      if (value2 === void 0 || value2 === null || value2 === "" || Array.isArray(value2) && value2.length === 0) {
        setError("Este campo é obrigatório");
        return false;
      }
    }
    if (validation && value2 !== void 0 && value2 !== null && value2 !== "") {
      for (const rule of validation) {
        let isValid = true;
        let errorMessage2 = rule.message;
        switch (rule.type) {
          case "minLength":
            if (typeof rule.value === "number" && String(value2).length < rule.value) {
              isValid = false;
            }
            break;
          case "maxLength":
            if (typeof rule.value === "number" && String(value2).length > rule.value) {
              isValid = false;
            }
            break;
          case "email":
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(String(value2))) {
              isValid = false;
            }
            break;
          case "url":
            try {
              new URL(String(value2));
            } catch {
              isValid = false;
            }
            break;
          case "pattern":
            const regex = typeof rule.value === "string" ? new RegExp(rule.value) : rule.value;
            if (regex && !regex.test(String(value2))) {
              isValid = false;
            }
            break;
          case "custom":
            if (rule.validator) {
              try {
                const result = await rule.validator(value2);
                isValid = result;
              } catch (error22) {
                isValid = false;
                errorMessage2 = error22 instanceof Error ? error22.message : rule.message;
              }
            }
            break;
        }
        if (!isValid) {
          setError(errorMessage2);
          return false;
        }
      }
    }
    return true;
  }, [value2, required2, validation, customError]);
  const clearError = useCallback(() => {
    setError("");
  }, []);
  return {
    error: error2,
    isValid: !error2,
    validate,
    clearError
  };
};
const validators = {
  required: (value2) => {
    return value2 !== void 0 && value2 !== null && value2 !== "" && (!Array.isArray(value2) || value2.length > 0);
  },
  email: (value2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value2);
  },
  url: (value2) => {
    try {
      new URL(value2);
      return true;
    } catch {
      return false;
    }
  },
  minLength: (value2, minLength) => {
    return value2.length >= minLength;
  },
  maxLength: (value2, maxLength) => {
    return value2.length <= maxLength;
  },
  pattern: (value2, pattern) => {
    const regex = typeof pattern === "string" ? new RegExp(pattern) : pattern;
    return regex.test(value2);
  }
};
const DYN_CHECKBOX_DEFAULT_PROPS = {
  disabled: false,
  readonly: false,
  required: false,
  optional: false,
  visible: true,
  checked: false,
  indeterminate: false,
  size: "medium",
  "data-testid": "dyn-checkbox"
};
const container$3 = "dyn-K-MBg";
const containerDisabled = "dyn-b-PFF";
const containerReadonly = "dyn-o-abF";
const wrapper$1 = "dyn-vmFyQ";
const box = "dyn-nVsmS";
const wrapperDisabled = "dyn--yPQy";
const wrapperReadonly = "dyn-5p3cw";
const input$2 = "dyn-hp8x3";
const boxChecked = "dyn-gyFY9";
const boxIndeterminate = "dyn-Xlz-k";
const boxError = "dyn-5ZZmT";
const boxDisabled = "dyn-qR5rF";
const boxReadonly = "dyn-LD3I-";
const boxSmall = "dyn-OG9Lu";
const checkMark = "dyn-MW7hi";
const indeterminateMark = "dyn--C-Wa";
const boxLarge = "dyn-pVKr1";
const checkmark = "dyn-iCS71";
const label$1 = "dyn-BL6-T";
const requiredIndicator = "dyn-U9aR1";
const optionalIndicator = "dyn-racEd";
const styles$i = {
  container: container$3,
  containerDisabled,
  containerReadonly,
  wrapper: wrapper$1,
  box,
  wrapperDisabled,
  wrapperReadonly,
  input: input$2,
  boxChecked,
  boxIndeterminate,
  boxError,
  boxDisabled,
  boxReadonly,
  boxSmall,
  checkMark,
  indeterminateMark,
  boxLarge,
  checkmark,
  label: label$1,
  requiredIndicator,
  optionalIndicator
};
const DynCheckboxComponent = ({
  name,
  label: label2,
  help: help2,
  disabled: disabled2 = DYN_CHECKBOX_DEFAULT_PROPS.disabled,
  readonly = DYN_CHECKBOX_DEFAULT_PROPS.readonly,
  required: required2 = DYN_CHECKBOX_DEFAULT_PROPS.required,
  optional: optional2 = DYN_CHECKBOX_DEFAULT_PROPS.optional,
  visible = DYN_CHECKBOX_DEFAULT_PROPS.visible,
  checked: checkedProp = DYN_CHECKBOX_DEFAULT_PROPS.checked,
  indeterminate = DYN_CHECKBOX_DEFAULT_PROPS.indeterminate,
  errorMessage: errorMessage2,
  validation,
  className,
  size = DYN_CHECKBOX_DEFAULT_PROPS.size,
  onChange,
  onBlur,
  onFocus,
  id,
  "data-testid": dataTestId = DYN_CHECKBOX_DEFAULT_PROPS["data-testid"]
}, ref) => {
  const [checked, setChecked] = useState(checkedProp);
  const checkboxRef = useRef(null);
  const fallbackId = useId();
  const fieldId = id ?? name ?? `${fallbackId}-checkbox`;
  const validationOptions = {
    value: checked ? "checked" : "",
    required: required2
  };
  if (validation) {
    validationOptions.validation = validation;
  }
  if (errorMessage2) {
    validationOptions.customError = errorMessage2;
  }
  const { error: error2, validate, clearError } = useDynFieldValidation(validationOptions);
  const resolvedError = errorMessage2 ?? (error2 || void 0);
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        var _a;
        return (_a = checkboxRef.current) == null ? void 0 : _a.focus();
      },
      validate: () => validate(),
      clear: () => {
        setChecked(false);
        onChange == null ? void 0 : onChange(false);
        clearError();
      },
      getValue: () => checked,
      setValue: (newValue) => {
        const booleanValue = Boolean(newValue);
        setChecked(booleanValue);
        onChange == null ? void 0 : onChange(booleanValue);
      }
    }),
    [checked, clearError, onChange, validate]
  );
  useEffect(() => {
    setChecked(checkedProp);
  }, [checkedProp]);
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  const handleChange = (event) => {
    if (readonly || disabled2) {
      event.preventDefault();
      return;
    }
    const nextValue = event.target.checked;
    setChecked(nextValue);
    onChange == null ? void 0 : onChange(nextValue);
    clearError();
  };
  const handleBlur = () => {
    void validate();
    onBlur == null ? void 0 : onBlur();
  };
  const handleKeyDown = (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      if (disabled2 || readonly) {
        return;
      }
      const nextValue = !checked;
      setChecked(nextValue);
      onChange == null ? void 0 : onChange(nextValue);
      clearError();
    }
  };
  if (!visible) {
    return null;
  }
  const sizeClassMap2 = {
    small: styles$i.boxSmall,
    medium: void 0,
    large: styles$i.boxLarge
  };
  const checkboxClasses = cn(
    styles$i.box,
    sizeClassMap2[size],
    checked && !indeterminate && styles$i.boxChecked,
    indeterminate && styles$i.boxIndeterminate,
    resolvedError && styles$i.boxError,
    disabled2 && styles$i.boxDisabled,
    readonly && styles$i.boxReadonly
  );
  const containerClasses = cn(
    styles$i.container,
    disabled2 && styles$i.containerDisabled,
    readonly && styles$i.containerReadonly,
    className
  );
  const wrapperClasses = cn(
    styles$i.wrapper,
    disabled2 && styles$i.wrapperDisabled,
    readonly && styles$i.wrapperReadonly
  );
  const describedById = resolvedError ? `${fieldId}-error` : help2 ? `${fieldId}-help` : void 0;
  const visualState = indeterminate ? "indeterminate" : checked ? "checked" : "unchecked";
  const fieldContainerProps = {
    required: required2,
    optional: optional2,
    className: containerClasses,
    htmlFor: fieldId
  };
  if (help2) {
    fieldContainerProps.helpText = help2;
  }
  if (resolvedError) {
    fieldContainerProps.errorText = resolvedError;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DynFieldContainer, { ...fieldContainerProps, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: wrapperClasses, htmlFor: fieldId, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: checkboxRef,
        type: "checkbox",
        id: fieldId,
        name,
        className: styles$i.input,
        checked,
        disabled: disabled2,
        readOnly: readonly,
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus,
        onKeyDown: handleKeyDown,
        "aria-invalid": Boolean(resolvedError),
        "aria-describedby": describedById,
        "aria-required": required2 || void 0,
        "data-testid": dataTestId
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: checkboxClasses,
        "aria-hidden": "true",
        "data-state": visualState,
        "data-size": size,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$i.checkmark, children: indeterminate ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$i.indeterminateMark, children: "-" }) : checked ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$i.checkMark, children: "✓" }) : null })
      }
    ),
    label2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$i.label, children: [
      label2,
      required2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$i.requiredIndicator, "aria-hidden": "true", children: "*" }),
      optional2 && !required2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$i.optionalIndicator, "aria-label": "opcional", children: "(opcional)" })
    ] })
  ] }) });
};
const DynCheckbox = forwardRef(DynCheckboxComponent);
DynCheckbox.displayName = "DynCheckbox";
const DYN_CONTAINER_DEFAULT_PROPS = {
  direction: "vertical",
  spacing: "md",
  size: "medium",
  background: "surface",
  bordered: true,
  shadow: false,
  layout: "fluid",
  "data-testid": "dyn-container"
};
const root$6 = "dyn-zbNmi";
const directionVertical$1 = "dyn-dZOM1";
const content$4 = "dyn-Y6yB4";
const directionHorizontal$1 = "dyn-MaOoW";
const alignStart = "dyn-Jdzbx";
const alignCenter = "dyn-kH-GB";
const alignEnd = "dyn-h06LS";
const alignStretch = "dyn-1-oFk";
const justifyStart = "dyn-ETrxl";
const justifyCenter = "dyn-ogkG-";
const justifyEnd = "dyn-SGD5d";
const justifyBetween = "dyn-hrmME";
const justifyAround = "dyn-tZ9SC";
const justifyEvenly = "dyn-XxNkx";
const spacingNone$1 = "dyn-6-PPN";
const spacingXs$1 = "dyn-yFaUQ";
const spacingSm$1 = "dyn-pg1bI";
const spacingMd$1 = "dyn-QIswb";
const spacingLg$1 = "dyn-dvd2g";
const spacingXl$1 = "dyn-CPj3C";
const sizeSmall$6 = "dyn-atR9c";
const sizeMedium$3 = "dyn-JKzLg";
const sizeLarge$6 = "dyn-fot-i";
const layoutFixed = "dyn-XEdUl";
const backgroundNone = "dyn-x1e0j";
const backgroundSurface$1 = "dyn-xrjLY";
const backgroundCard = "dyn-p2EEE";
const bordered$1 = "dyn-e6Il-";
const shadow = "dyn-t9RPE";
const noPadding = "dyn-OlqtT";
const header$4 = "dyn-qSa89";
const title$2 = "dyn-GgLRM";
const subtitle$2 = "dyn-En83U";
const withTitle = "dyn-KCyz3";
const styles$h = {
  root: root$6,
  directionVertical: directionVertical$1,
  content: content$4,
  directionHorizontal: directionHorizontal$1,
  alignStart,
  alignCenter,
  alignEnd,
  alignStretch,
  justifyStart,
  justifyCenter,
  justifyEnd,
  justifyBetween,
  justifyAround,
  justifyEvenly,
  spacingNone: spacingNone$1,
  spacingXs: spacingXs$1,
  spacingSm: spacingSm$1,
  spacingMd: spacingMd$1,
  spacingLg: spacingLg$1,
  spacingXl: spacingXl$1,
  sizeSmall: sizeSmall$6,
  sizeMedium: sizeMedium$3,
  sizeLarge: sizeLarge$6,
  layoutFixed,
  backgroundNone,
  backgroundSurface: backgroundSurface$1,
  backgroundCard,
  bordered: bordered$1,
  shadow,
  noPadding,
  header: header$4,
  title: title$2,
  subtitle: subtitle$2,
  withTitle
};
const toPascalCase$1 = (value2) => value2.charAt(0).toUpperCase() + value2.slice(1);
const SPACING_TOKENS = {
  none: "0",
  xs: "var(--dyn-spacing-xs, var(--spacing-xs, 0.25rem))",
  sm: "var(--dyn-spacing-sm, var(--spacing-sm, 0.5rem))",
  md: "var(--dyn-spacing-md, var(--spacing-md, 1rem))",
  lg: "var(--dyn-spacing-lg, var(--spacing-lg, 1.5rem))",
  xl: "var(--dyn-spacing-xl, var(--spacing-xl, 2rem))"
};
const MAX_WIDTH_TOKENS = {
  xs: "min(100%, var(--dyn-container-max-width-xs))",
  sm: "min(100%, var(--dyn-container-max-width-sm))",
  md: "min(100%, var(--dyn-container-max-width-md))",
  lg: "min(100%, var(--dyn-container-max-width-lg))",
  xl: "min(100%, var(--dyn-container-max-width-xl))",
  full: "100%"
};
const resolveSpacingValue = (value2) => {
  if (value2 === void 0) {
    return void 0;
  }
  if (typeof value2 === "number") {
    return `${value2}px`;
  }
  const normalized = value2.trim();
  if (normalized in SPACING_TOKENS) {
    return SPACING_TOKENS[normalized];
  }
  return normalized;
};
const resolveMaxWidth = (value2) => {
  if (value2 === void 0) {
    return void 0;
  }
  if (typeof value2 === "number") {
    return `${value2}px`;
  }
  const normalized = value2.trim();
  if (normalized in MAX_WIDTH_TOKENS) {
    return MAX_WIDTH_TOKENS[normalized];
  }
  return normalized;
};
const DynContainerComponent = ({
  title: title2,
  subtitle: subtitle2,
  direction = DYN_CONTAINER_DEFAULT_PROPS.direction,
  align,
  justify,
  spacing = DYN_CONTAINER_DEFAULT_PROPS.spacing,
  size = DYN_CONTAINER_DEFAULT_PROPS.size,
  bordered: bordered2 = DYN_CONTAINER_DEFAULT_PROPS.bordered,
  shadow: shadow2 = DYN_CONTAINER_DEFAULT_PROPS.shadow,
  background = DYN_CONTAINER_DEFAULT_PROPS.background,
  height,
  maxWidth,
  layout = DYN_CONTAINER_DEFAULT_PROPS.layout,
  padding,
  margin,
  noBorder,
  noPadding: noPadding2,
  className,
  children,
  style,
  "data-testid": dataTestId = DYN_CONTAINER_DEFAULT_PROPS["data-testid"],
  ...rest
}, ref) => {
  const resolvedBordered = noBorder ? false : bordered2;
  const hasTitleContent = Boolean(title2 || subtitle2);
  const resolvedMaxWidth = resolveMaxWidth(maxWidth);
  const resolvedPadding = resolveSpacingValue(padding);
  const resolvedMargin = resolveSpacingValue(margin);
  const containerStyle = useMemo(() => {
    const next = { ...style };
    if (typeof height === "number") {
      next.height = `${height}px`;
    } else if (typeof height === "string") {
      next.height = height;
    }
    if (resolvedMaxWidth) {
      next.maxWidth = resolvedMaxWidth;
      next["--dyn-container-max-width"] = resolvedMaxWidth;
    }
    if (resolvedPadding) {
      next["--dyn-container-padding"] = resolvedPadding;
    }
    if (resolvedMargin) {
      next["--dyn-container-margin"] = resolvedMargin;
    }
    return Object.keys(next).length > 0 ? next : void 0;
  }, [height, resolvedMargin, resolvedMaxWidth, resolvedPadding, style]);
  const directionClass = styles$h[`direction${toPascalCase$1(direction)}`];
  const spacingClass = spacing ? styles$h[`spacing${toPascalCase$1(spacing)}`] : void 0;
  const sizeClass = size ? styles$h[`size${toPascalCase$1(size)}`] : void 0;
  const backgroundClass = background ? styles$h[`background${toPascalCase$1(background)}`] : void 0;
  const alignClass = align ? styles$h[`align${toPascalCase$1(align)}`] : void 0;
  const justifyClass = justify ? styles$h[`justify${toPascalCase$1(justify)}`] : void 0;
  const containerClassName = cn(
    styles$h.root,
    directionClass,
    spacingClass,
    sizeClass,
    backgroundClass,
    alignClass,
    justifyClass,
    layout === "fixed" && styles$h.layoutFixed,
    resolvedBordered && styles$h.bordered,
    shadow2 && styles$h.shadow,
    noPadding2 && styles$h.noPadding,
    hasTitleContent && styles$h.withTitle,
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: containerClassName,
      style: containerStyle,
      "data-testid": dataTestId,
      ...rest,
      children: [
        hasTitleContent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$h.header, children: [
          title2 && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: styles$h.title, children: title2 }),
          subtitle2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$h.subtitle, children: subtitle2 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$h.content, children })
      ]
    }
  );
};
const DynContainer = forwardRef(DynContainerComponent);
DynContainer.displayName = "DynContainer";
const useDynDateParser = ({
  format = "dd/MM/yyyy",
  locale = "pt-BR",
  customParser
} = {}) => {
  const [displayValue, setDisplayValue] = useState("");
  const formatDate = useCallback((date, formatStr = format) => {
    if (!date)
      return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return formatStr.replace("dd", day).replace("MM", month).replace("yyyy", year);
  }, [format]);
  const parseDate = useCallback((dateStr) => {
    if (!dateStr || dateStr.trim() === "")
      return null;
    if (customParser) {
      try {
        return customParser(dateStr);
      } catch {
      }
    }
    const today = /* @__PURE__ */ new Date();
    const normalizedInput = dateStr.toLowerCase().trim();
    switch (normalizedInput) {
      case "hoje":
      case "today":
        return today;
      case "ontem":
      case "yesterday":
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        return yesterday;
      case "amanhã":
      case "amanha":
      case "tomorrow":
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return tomorrow;
    }
    const cleanStr = dateStr.replace(/[^0-9]/g, "");
    if (cleanStr.length === 8) {
      const day = parseInt(cleanStr.substr(0, 2));
      const month = parseInt(cleanStr.substr(2, 2)) - 1;
      const year = parseInt(cleanStr.substr(4, 4));
      if (day >= 1 && day <= 31 && month >= 0 && month <= 11 && year >= 1900) {
        const date = new Date(year, month, day);
        if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
          return date;
        }
      }
    } else if (cleanStr.length === 6) {
      const day = parseInt(cleanStr.substr(0, 2));
      const month = parseInt(cleanStr.substr(2, 2)) - 1;
      let year = parseInt(cleanStr.substr(4, 2));
      year = year <= 30 ? 2e3 + year : 1900 + year;
      if (day >= 1 && day <= 31 && month >= 0 && month <= 11) {
        const date = new Date(year, month, day);
        if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
          return date;
        }
      }
    }
    try {
      const parsed = new Date(dateStr);
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    } catch {
    }
    return null;
  }, [customParser]);
  const isValidDate = useCallback((date) => {
    return date !== null && date instanceof Date && !isNaN(date.getTime());
  }, []);
  const getRelativeDescription = useCallback((date) => {
    if (!date)
      return null;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.floor(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays === 0)
      return "hoje";
    if (diffDays === 1)
      return "amanhã";
    if (diffDays === -1)
      return "ontem";
    if (diffDays > 1 && diffDays <= 7)
      return `em ${diffDays} dias`;
    if (diffDays < -1 && diffDays >= -7)
      return `${Math.abs(diffDays)} dias atrás`;
    return null;
  }, []);
  return {
    displayValue,
    setDisplayValue,
    formatDate,
    parseDate,
    isValidDate,
    getRelativeDescription
  };
};
const DATE_FORMATS = {
  "pt-BR": "dd/MM/yyyy",
  "en-US": "MM/dd/yyyy",
  "ISO": "yyyy-MM-dd",
  "short": "dd/MM/yy",
  "long": "dd de MMMM de yyyy"
};
const getDateFormat = (locale = "pt-BR") => {
  return DATE_FORMATS[locale] || DATE_FORMATS["pt-BR"];
};
const container$2 = "dyn-KdJ22";
const inputContainer = "dyn-oPpvf";
const input$1 = "dyn-er-pu";
const sizeSmall$5 = "dyn-fWDq8";
const sizeLarge$5 = "dyn-WkIuC";
const stateFocused = "dyn-qHpI9";
const stateOpen = "dyn-2-mBt";
const stateError = "dyn-ZbBQa";
const stateDisabled = "dyn-MtbEs";
const stateReadonly = "dyn-8Ari-";
const calendarButton = "dyn-4cwVq";
const clearButton = "dyn-lGxBT";
const relativeText = "dyn-Yaw2F";
const dropdown$1 = "dyn-JdAfe";
const shortcuts = "dyn-DQks-";
const shortcut = "dyn-FxD9p";
const helpTitle = "dyn-XFBU2";
const helpList = "dyn-fxSN9";
const helpListItem = "dyn-12GS6";
const styles$g = {
  container: container$2,
  inputContainer,
  input: input$1,
  sizeSmall: sizeSmall$5,
  sizeLarge: sizeLarge$5,
  stateFocused,
  stateOpen,
  stateError,
  stateDisabled,
  stateReadonly,
  calendarButton,
  clearButton,
  relativeText,
  dropdown: dropdown$1,
  shortcuts,
  shortcut,
  helpTitle,
  helpList,
  helpListItem
};
const MAX_DATE_LENGTH = 10;
const sizeClassMap = {
  small: styles$g.sizeSmall,
  medium: void 0,
  large: styles$g.sizeLarge
};
const DynDatePicker = forwardRef((props, ref) => {
  const {
    id: idProp,
    name,
    label: label2,
    help: help2,
    placeholder = "dd/mm/aaaa",
    disabled: disabled2 = false,
    readonly = false,
    required: required2 = false,
    optional: optional2 = false,
    visible = true,
    value: propValue,
    errorMessage: errorMessage2,
    validation,
    className,
    format = "dd/MM/yyyy",
    locale = "pt-BR",
    minDate,
    maxDate,
    customParser,
    size = "medium",
    onChange,
    onBlur,
    onFocus,
    children: _children,
    "data-testid": dataTestId,
    ...rest
  } = props;
  const instanceId = useId();
  const inputId = idProp ?? name ?? instanceId;
  const dropdownId = `${inputId}-dropdown`;
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const [value2, setValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const { error: error2, validate, clearError } = useDynFieldValidation({
    value: value2,
    ...required2 ? { required: required2 } : {},
    ...validation ? { validation } : {}
  });
  const {
    displayValue,
    setDisplayValue,
    formatDate,
    parseDate,
    isValidDate,
    getRelativeDescription
  } = useDynDateParser({
    format,
    locale,
    ...customParser ? { customParser } : {}
  });
  const parseExternalValue = useCallback(
    (input2) => {
      if (!input2) {
        return null;
      }
      const candidate = input2 instanceof Date ? input2 : new Date(input2);
      return isValidDate(candidate) ? candidate : null;
    },
    [isValidDate]
  );
  useEffect(() => {
    const nextValue = parseExternalValue(propValue);
    setValue((prev) => {
      const prevTime = prev == null ? void 0 : prev.getTime();
      const nextTime = nextValue == null ? void 0 : nextValue.getTime();
      return prevTime === nextTime ? prev : nextValue;
    });
    setDisplayValue(nextValue ? formatDate(nextValue) : "");
  }, [propValue, formatDate, parseExternalValue, setDisplayValue]);
  const handleDocumentClick = useCallback((event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [isOpen, handleDocumentClick]);
  useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    },
    validate: () => validate(),
    clear: () => {
      setValue(null);
      setDisplayValue("");
      onChange == null ? void 0 : onChange(null);
      clearError();
    },
    getValue: () => value2,
    setValue: (newValue) => {
      const nextValue = parseExternalValue(newValue);
      setValue(nextValue);
      setDisplayValue(nextValue ? formatDate(nextValue) : "");
      onChange == null ? void 0 : onChange(nextValue);
    }
  }));
  const emitChange = useCallback(
    (nextValue) => {
      setValue(nextValue);
      setDisplayValue(nextValue ? formatDate(nextValue) : "");
      onChange == null ? void 0 : onChange(nextValue);
    },
    [formatDate, onChange, setDisplayValue]
  );
  const handleInputChange = useCallback(
    (event) => {
      const inputValue = event.target.value;
      setDisplayValue(inputValue);
      const parsedDate = parseDate(inputValue);
      if (parsedDate && isValidDate(parsedDate)) {
        if (minDate && parsedDate < minDate) {
          return;
        }
        if (maxDate && parsedDate > maxDate) {
          return;
        }
        emitChange(parsedDate);
        clearError();
      } else if (!inputValue) {
        emitChange(null);
        clearError();
      }
    },
    [parseDate, isValidDate, minDate, maxDate, emitChange, clearError]
  );
  const handleCalendarToggle = useCallback(() => {
    var _a;
    if (disabled2 || readonly) {
      return;
    }
    setIsOpen((prev) => !prev);
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, [disabled2, readonly]);
  const handleTodayClick = useCallback(() => {
    const today = /* @__PURE__ */ new Date();
    emitChange(today);
    clearError();
    setIsOpen(false);
  }, [emitChange, clearError]);
  const handleClearClick = useCallback(() => {
    var _a;
    emitChange(null);
    clearError();
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, [emitChange, clearError]);
  const handleBlur = useCallback(() => {
    setFocused(false);
    validate();
    onBlur == null ? void 0 : onBlur();
  }, [validate, onBlur]);
  const handleFocus = useCallback(() => {
    setFocused(true);
    clearError();
    onFocus == null ? void 0 : onFocus();
  }, [clearError, onFocus]);
  const handleKeyDown = useCallback(
    (event) => {
      switch (event.key) {
        case "Enter":
        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true);
            event.preventDefault();
          }
          break;
        case "Escape":
          if (isOpen) {
            setIsOpen(false);
            event.preventDefault();
          }
          break;
      }
    },
    [isOpen]
  );
  if (!visible) {
    return null;
  }
  const fieldError = errorMessage2 ?? (error2 || void 0);
  const inputClasses = cn(
    styles$g.input,
    sizeClassMap[size],
    focused && styles$g.stateFocused,
    Boolean(fieldError) && styles$g.stateError,
    disabled2 && styles$g.stateDisabled,
    readonly && styles$g.stateReadonly,
    isOpen && styles$g.stateOpen
  );
  const describedBy = [
    fieldError ? `${inputId}-error` : null,
    help2 ? `${inputId}-help` : null
  ].filter(Boolean).join(" ") || void 0;
  const relativeText2 = useMemo(
    () => value2 ? getRelativeDescription(value2) : null,
    [value2, getRelativeDescription]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DynFieldContainer,
    {
      ...label2 !== void 0 ? { label: label2 } : {},
      ...help2 !== void 0 ? { helpText: help2 } : {},
      ...required2 ? { required: required2 } : {},
      ...optional2 ? { optional: optional2 } : {},
      ...fieldError ? { errorText: fieldError } : {},
      ...className !== void 0 ? { className } : {},
      htmlFor: inputId,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: styles$g.container, "data-testid": dataTestId, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$g.inputContainer, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: inputRef,
              id: inputId,
              name: name ?? inputId,
              type: "text",
              className: inputClasses,
              placeholder,
              value: displayValue,
              disabled: disabled2,
              readOnly: readonly,
              onChange: handleInputChange,
              onBlur: handleBlur,
              onFocus: handleFocus,
              onKeyDown: handleKeyDown,
              "aria-invalid": Boolean(fieldError),
              "aria-describedby": describedBy,
              "aria-expanded": isOpen,
              "aria-controls": isOpen ? dropdownId : void 0,
              maxLength: MAX_DATE_LENGTH,
              "data-size": size,
              ...rest
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: styles$g.calendarButton,
              onClick: handleCalendarToggle,
              disabled: disabled2,
              tabIndex: -1,
              "aria-label": "Abrir calendário",
              "aria-expanded": isOpen,
              "aria-controls": isOpen ? dropdownId : void 0,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: "dyn-icon-calendar" })
            }
          ),
          displayValue && !readonly && !disabled2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: styles$g.clearButton,
              onClick: handleClearClick,
              tabIndex: -1,
              "aria-label": "Limpar data",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: "dyn-icon-close" })
            }
          )
        ] }),
        relativeText2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$g.relativeText, children: relativeText2 }),
        isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: dropdownId, className: styles$g.dropdown, role: "dialog", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$g.shortcuts, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: styles$g.shortcut, onClick: handleTodayClick, children: "Hoje" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: styles$g.shortcut, onClick: handleClearClick, children: "Limpar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$g.helpTitle, children: "Formatos aceitos:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: styles$g.helpList, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles$g.helpListItem, children: "dd/mm/aaaa (ex: 25/12/2023)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles$g.helpListItem, children: "hoje, amanhã, ontem" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: styles$g.helpListItem, children: "Texto natural" })
            ] })
          ] })
        ] })
      ] })
    }
  );
});
DynDatePicker.displayName = "DynDatePicker";
const DYN_DIVIDER_DEFAULT_PROPS = {
  direction: "horizontal",
  thickness: "thin",
  lineStyle: "solid",
  color: "default",
  labelPosition: "center",
  spacing: "md",
  "data-testid": "dyn-divider"
};
const root$5 = "dyn-8yCvx";
const directionHorizontal = "dyn-ymyrN";
const directionVertical = "dyn-rP55e";
const withLabel = "dyn-N6Edt";
const line = "dyn-77jMX";
const label = "dyn-FlIR9";
const labelLeft = "dyn-1cRIs";
const labelRight = "dyn-Zw9WV";
const thicknessThin = "dyn--Csro";
const thicknessMedium = "dyn-LllYf";
const thicknessThick = "dyn-eJAJH";
const lineStyleSolid = "dyn-dSmZU";
const lineStyleDashed = "dyn-Ojelp";
const lineStyleDotted = "dyn-hwLru";
const colorDefault = "dyn-ag7na";
const colorPrimary = "dyn-lNK7o";
const colorSecondary = "dyn-d2off";
const colorMuted = "dyn-b1YGz";
const spacingNone = "dyn-ULFu2";
const spacingXs = "dyn-94DPC";
const spacingSm = "dyn-sX3Wn";
const spacingMd = "dyn-40AOR";
const spacingLg = "dyn-E2W7-";
const spacingXl = "dyn-R4N30";
const styles$f = {
  root: root$5,
  directionHorizontal,
  directionVertical,
  withLabel,
  line,
  label,
  labelLeft,
  labelRight,
  thicknessThin,
  thicknessMedium,
  thicknessThick,
  lineStyleSolid,
  lineStyleDashed,
  lineStyleDotted,
  colorDefault,
  colorPrimary,
  colorSecondary,
  colorMuted,
  spacingNone,
  spacingXs,
  spacingSm,
  spacingMd,
  spacingLg,
  spacingXl
};
const toPascalCase = (value2) => value2.charAt(0).toUpperCase() + value2.slice(1);
const DynDividerComponent = ({
  label: label2,
  labelPosition = DYN_DIVIDER_DEFAULT_PROPS.labelPosition,
  direction = DYN_DIVIDER_DEFAULT_PROPS.direction,
  thickness = DYN_DIVIDER_DEFAULT_PROPS.thickness,
  lineStyle = DYN_DIVIDER_DEFAULT_PROPS.lineStyle,
  color = DYN_DIVIDER_DEFAULT_PROPS.color,
  spacing = DYN_DIVIDER_DEFAULT_PROPS.spacing,
  children,
  className,
  id,
  "data-testid": dataTestId = DYN_DIVIDER_DEFAULT_PROPS["data-testid"],
  ...rest
}, ref) => {
  const generatedId = useId();
  const orientation = direction === "vertical" ? "vertical" : "horizontal";
  const labelContent = children ?? label2;
  const labelId = labelContent ? `${id ?? `dyn-divider-${generatedId}`}-label` : void 0;
  const ariaLabel = !labelId && typeof labelContent === "string" ? labelContent : void 0;
  const directionClass = styles$f[`direction${toPascalCase(orientation)}`];
  const thicknessClass = styles$f[`thickness${toPascalCase(thickness)}`];
  const styleClass = styles$f[`lineStyle${toPascalCase(lineStyle)}`];
  const colorClass = styles$f[`color${toPascalCase(color)}`];
  const spacingClass = styles$f[`spacing${toPascalCase(spacing)}`];
  const labelPositionClass = labelContent ? styles$f[`label${toPascalCase(labelPosition)}`] : void 0;
  const dividerClassName = cn(
    styles$f.root,
    directionClass,
    thicknessClass,
    styleClass,
    colorClass,
    spacingClass,
    Boolean(labelContent) && styles$f.withLabel,
    labelPositionClass,
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      id,
      role: "separator",
      "aria-orientation": orientation,
      "aria-labelledby": labelId,
      "aria-label": ariaLabel,
      className: dividerClassName,
      "data-testid": dataTestId,
      ...rest,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$f.line, "aria-hidden": "true" }),
        labelContent ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$f.label, id: labelId, children: labelContent }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$f.line, "aria-hidden": "true" })
      ]
    }
  );
};
const DynDivider = forwardRef(DynDividerComponent);
DynDivider.displayName = "DynDivider";
const DYN_GAUGE_DEFAULT_PROPS = {
  min: 0,
  max: 100,
  type: "arc",
  unit: "%",
  ranges: [],
  showValue: true,
  showRanges: true,
  size: "medium",
  thickness: 20,
  rounded: true,
  animated: true,
  backgroundColor: "#e0e0e0"
};
const root$4 = "dyn-rITz7";
const figure = "dyn-NsHTq";
const header$3 = "dyn-ld1l-";
const title$1 = "dyn-siquz";
const subtitle$1 = "dyn-sg8YL";
const content$3 = "dyn-wyo8J";
const canvasContainer = "dyn-CVNIJ";
const canvas = "dyn-h9-5v";
const value = "dyn-1mFst";
const valueText = "dyn-2lV0I";
const valueLabel = "dyn-6XwW-";
const legend = "dyn-Peyuj";
const legendItem = "dyn-fKyTe";
const legendColor = "dyn-ziNvv";
const legendLabel = "dyn-3JsKF";
const sizeSmall$4 = "dyn-GB-lS";
const sizeMedium$2 = "dyn-PqK8s";
const sizeLarge$4 = "dyn-n45J0";
const typeArc = "dyn-9Jd-B";
const typeCircle = "dyn-LWWkx";
const typeLine = "dyn-GQurz";
const animated = "dyn-YEjTp";
const rounded = "dyn-wRa6w";
const styles$e = {
  root: root$4,
  figure,
  header: header$3,
  title: title$1,
  subtitle: subtitle$1,
  content: content$3,
  canvasContainer,
  canvas,
  value,
  valueText,
  valueLabel,
  legend,
  legendItem,
  legendColor,
  legendLabel,
  sizeSmall: sizeSmall$4,
  sizeMedium: sizeMedium$2,
  sizeLarge: sizeLarge$4,
  typeArc,
  typeCircle,
  typeLine,
  animated,
  rounded
};
const gaugeDimensionsMap = {
  small: { width: 120, height: 120 },
  medium: { width: 200, height: 200 },
  large: { width: 280, height: 280 }
};
const sizeClassNameMap$1 = {
  small: styles$e.sizeSmall,
  medium: styles$e.sizeMedium,
  large: styles$e.sizeLarge
};
const typeClassNameMap = {
  arc: styles$e.typeArc,
  circle: styles$e.typeCircle,
  line: styles$e.typeLine
};
const clampGaugeValue = (value2, min, max) => {
  if (!Number.isFinite(value2)) {
    return min;
  }
  if (max <= min) {
    return min;
  }
  return Math.min(max, Math.max(min, value2));
};
const findRangeForValue = (ranges, value2) => ranges.find((range) => value2 >= range.from && value2 <= range.to);
const DynGauge = forwardRef((props, ref) => {
  const {
    value: value2,
    min = DYN_GAUGE_DEFAULT_PROPS.min,
    max = DYN_GAUGE_DEFAULT_PROPS.max,
    title: title2,
    label: label2,
    subtitle: subtitle2,
    type = DYN_GAUGE_DEFAULT_PROPS.type,
    unit = DYN_GAUGE_DEFAULT_PROPS.unit,
    ranges = DYN_GAUGE_DEFAULT_PROPS.ranges,
    showValue = DYN_GAUGE_DEFAULT_PROPS.showValue,
    showRanges = DYN_GAUGE_DEFAULT_PROPS.showRanges,
    size = DYN_GAUGE_DEFAULT_PROPS.size,
    thickness = DYN_GAUGE_DEFAULT_PROPS.thickness,
    rounded: rounded2 = DYN_GAUGE_DEFAULT_PROPS.rounded,
    animated: animated2 = DYN_GAUGE_DEFAULT_PROPS.animated,
    color,
    backgroundColor = DYN_GAUGE_DEFAULT_PROPS.backgroundColor,
    className,
    format,
    id,
    "data-testid": dataTestId,
    ...rest
  } = props;
  const instanceId = useId();
  const componentId = id ?? instanceId;
  const titleId = title2 || label2 ? `${componentId}-title` : void 0;
  const subtitleId = subtitle2 ? `${componentId}-subtitle` : void 0;
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(void 0);
  const currentValueRef = useRef(clampGaugeValue(value2, min, max));
  const gaugeDimensions = gaugeDimensionsMap[size] ?? gaugeDimensionsMap.medium;
  const resolvedTitle = title2 ?? label2;
  const safeValue = clampGaugeValue(value2, min, max);
  const numberFormatter = useMemo(
    () => new Intl.NumberFormat(void 0, {
      maximumFractionDigits: 1
    }),
    []
  );
  const formatValue = useCallback(
    (val) => {
      if (typeof format === "function") {
        return format(val);
      }
      const formattedNumber = numberFormatter.format(val);
      if (!unit) {
        return formattedNumber;
      }
      const trimmedUnit = unit.trim();
      const shouldJoin = trimmedUnit.startsWith("%") || trimmedUnit.startsWith("°");
      return shouldJoin ? `${formattedNumber}${trimmedUnit}` : `${formattedNumber} ${trimmedUnit}`;
    },
    [format, numberFormatter, unit]
  );
  const getColorForValue = useCallback(
    (val) => {
      var _a;
      if (typeof color === "string" && color.length > 0) {
        return color;
      }
      return ((_a = findRangeForValue(ranges, val)) == null ? void 0 : _a.color) ?? "#0066cc";
    },
    [color, ranges]
  );
  const drawGauge = useCallback(
    (displayValue) => {
      const canvas2 = canvasRef.current;
      if (!canvas2) {
        return;
      }
      const context = canvas2.getContext("2d");
      if (!context) {
        return;
      }
      const { width, height } = gaugeDimensions;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) / 2 - thickness / 2 - 10;
      const startAngle = -Math.PI * 0.75;
      const sweepAngle = Math.PI * 1.5;
      const span = Math.max(max - min, Number.EPSILON);
      const normalizedValue = (clampGaugeValue(displayValue, min, max) - min) / span;
      const currentColor = getColorForValue(displayValue);
      canvas2.width = width;
      canvas2.height = height;
      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.arc(centerX, centerY, radius, startAngle, startAngle + sweepAngle);
      context.strokeStyle = backgroundColor;
      context.lineWidth = thickness;
      context.lineCap = rounded2 ? "round" : "butt";
      context.stroke();
      if (showRanges && ranges.length > 0) {
        for (const range of ranges) {
          const rangeStart = startAngle + (range.from - min) / span * sweepAngle;
          const rangeEnd = startAngle + (range.to - min) / span * sweepAngle;
          context.beginPath();
          context.arc(centerX, centerY, radius, rangeStart, rangeEnd);
          context.strokeStyle = range.color;
          context.lineWidth = thickness * 0.3;
          context.lineCap = rounded2 ? "round" : "butt";
          context.stroke();
        }
      }
      if (normalizedValue > 0) {
        const endAngle = startAngle + normalizedValue * sweepAngle;
        context.beginPath();
        context.arc(centerX, centerY, radius, startAngle, endAngle);
        context.strokeStyle = currentColor;
        context.lineWidth = thickness;
        context.lineCap = rounded2 ? "round" : "butt";
        context.stroke();
      }
      const tickCount = 11;
      for (let index = 0; index < tickCount; index += 1) {
        const angle = startAngle + index / (tickCount - 1) * sweepAngle;
        const isMajorTick = index % 2 === 0;
        const tickLength = isMajorTick ? 15 : 8;
        const tickWidth = isMajorTick ? 2 : 1;
        const outerRadius = radius + thickness / 2 + 5;
        const innerRadius = outerRadius + tickLength;
        const startX = centerX + Math.cos(angle) * outerRadius;
        const startY = centerY + Math.sin(angle) * outerRadius;
        const endX = centerX + Math.cos(angle) * innerRadius;
        const endY = centerY + Math.sin(angle) * innerRadius;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = "#666666";
        context.lineWidth = tickWidth;
        context.lineCap = "round";
        context.stroke();
        if (isMajorTick) {
          const labelRadius = innerRadius + 15;
          const labelX = centerX + Math.cos(angle) * labelRadius;
          const labelY = centerY + Math.sin(angle) * labelRadius;
          const tickValue = min + index / (tickCount - 1) * span;
          context.fillStyle = "#666666";
          context.font = size === "small" ? "10px Arial" : size === "large" ? "14px Arial" : "12px Arial";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText(numberFormatter.format(tickValue), labelX, labelY);
        }
      }
      const needleAngle = startAngle + normalizedValue * sweepAngle;
      const needleLength = radius - 20;
      const needleX = centerX + Math.cos(needleAngle) * needleLength;
      const needleY = centerY + Math.sin(needleAngle) * needleLength;
      context.beginPath();
      context.arc(centerX, centerY, 8, 0, Math.PI * 2);
      context.fillStyle = currentColor;
      context.fill();
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.lineTo(needleX, needleY);
      context.strokeStyle = currentColor;
      context.lineWidth = 3;
      context.lineCap = "round";
      context.stroke();
      context.beginPath();
      context.arc(centerX, centerY, 4, 0, Math.PI * 2);
      context.fillStyle = "#ffffff";
      context.fill();
      context.strokeStyle = currentColor;
      context.lineWidth = 2;
      context.stroke();
    },
    [
      backgroundColor,
      gaugeDimensions,
      getColorForValue,
      max,
      min,
      numberFormatter,
      ranges,
      rounded2,
      showRanges,
      size,
      thickness
    ]
  );
  const animateToValue = useCallback(
    (target) => {
      const clampedTarget = clampGaugeValue(target, min, max);
      if (!animated2) {
        currentValueRef.current = clampedTarget;
        drawGauge(clampedTarget);
        return;
      }
      const startValue = currentValueRef.current;
      const distance = clampedTarget - startValue;
      if (Math.abs(distance) <= 1e-3) {
        currentValueRef.current = clampedTarget;
        drawGauge(clampedTarget);
        return;
      }
      let startTime = null;
      const duration = 800;
      const step2 = (timestamp) => {
        if (startTime === null) {
          startTime = timestamp;
        }
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const nextValue = startValue + distance * easedProgress;
        currentValueRef.current = nextValue;
        drawGauge(nextValue);
        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(step2);
        } else {
          currentValueRef.current = clampedTarget;
          drawGauge(clampedTarget);
        }
      };
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(step2);
    },
    [animated2, drawGauge, max, min]
  );
  useEffect(() => {
    animateToValue(value2);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateToValue, value2]);
  useEffect(() => {
    drawGauge(currentValueRef.current);
  }, [drawGauge]);
  const currentRange = useMemo(
    () => findRangeForValue(ranges, safeValue),
    [ranges, safeValue]
  );
  const rootClassName = cn(
    styles$e.root,
    sizeClassNameMap$1[size] ?? styles$e.sizeMedium,
    typeClassNameMap[type],
    animated2 && styles$e.animated,
    rounded2 && styles$e.rounded,
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      id: componentId,
      role: "progressbar",
      "aria-valuemin": min,
      "aria-valuemax": max,
      "aria-valuenow": safeValue,
      "aria-labelledby": titleId,
      "aria-describedby": subtitleId,
      "data-testid": dataTestId ?? "dyn-gauge",
      "data-size": size,
      "data-type": type,
      className: rootClassName,
      ...rest,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: styles$e.figure, children: [
        (resolvedTitle || subtitle2) && /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: styles$e.header, children: [
          resolvedTitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: titleId, className: styles$e.title, children: resolvedTitle }) : null,
          subtitle2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { id: subtitleId, className: styles$e.subtitle, children: subtitle2 }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$e.content, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e.canvasContainer, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "canvas",
            {
              ref: canvasRef,
              className: styles$e.canvas,
              style: {
                width: gaugeDimensions.width,
                height: gaugeDimensions.height
              }
            }
          ),
          showValue ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$e.value, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$e.valueText, children: formatValue(safeValue) }),
            (currentRange == null ? void 0 : currentRange.label) ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$e.valueLabel, children: currentRange.label }) : null
          ] }) : null
        ] }) }),
        showRanges && ranges.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: styles$e.legend, children: ranges.map((range, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: styles$e.legendItem,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: styles$e.legendColor,
                  style: { backgroundColor: range.color },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$e.legendLabel, children: range.label ?? `${formatValue(range.from)} - ${formatValue(range.to)}` })
            ]
          },
          `${range.from}-${range.to}-${index}`
        )) }) : null
      ] })
    }
  );
});
DynGauge.displayName = "DynGauge";
const DYN_GRID_DEFAULT_PROPS = {
  loading: false,
  size: "medium",
  bordered: true,
  striped: false,
  hoverable: true,
  sortable: true,
  filterable: false,
  selectable: false,
  selectedKeys: [],
  emptyText: "No data available",
  "data-testid": "dyn-grid"
};
const root$3 = "dyn--3XFK";
const bordered = "dyn-L5yhL";
const loading$2 = "dyn-Ff1q-";
const loadingState = "dyn-qPhpH";
const spinner$1 = "dyn-oWmRM";
const dynSpin$1 = "dyn-FNwhc";
const emptyState$1 = "dyn-WecpM";
const wrapper = "dyn-TyybB";
const table = "dyn-zQD3J";
const header$2 = "dyn--jWUo";
const headerRow = "dyn-BuTv9";
const headerCell = "dyn-7keYS";
const headerCellSortable = "dyn-S-cG6";
const headerCellSorted = "dyn-th9MM";
const headerCellAlignCenter = "dyn-Eqgpd";
const headerCellAlignRight = "dyn-rjYoO";
const headerContent = "dyn-ipjZY";
const sortIndicator = "dyn-nBbOf";
const selectionCell = "dyn-fdWYj";
const body = "dyn-C0fEw";
const row = "dyn-JqcE8";
const rowSelected = "dyn-0nGYB";
const rowEven = "dyn-Ykmyh";
const rowOdd = "dyn-BpBUd";
const hoverable = "dyn-4MDAN";
const striped = "dyn-UyE-0";
const cell = "dyn-su1WS";
const cellAlignCenter = "dyn-93mdo";
const cellAlignRight = "dyn-qBMdC";
const checkbox$1 = "dyn-yixtz";
const sizeSmall$3 = "dyn-KQrlg";
const sizeLarge$3 = "dyn-CthQ7";
const pagination = "dyn-ziOIu";
const paginationInfo = "dyn-2MRIK";
const paginationControls = "dyn-YcszS";
const styles$d = {
  root: root$3,
  bordered,
  loading: loading$2,
  loadingState,
  spinner: spinner$1,
  dynSpin: dynSpin$1,
  emptyState: emptyState$1,
  wrapper,
  table,
  header: header$2,
  headerRow,
  headerCell,
  headerCellSortable,
  headerCellSorted,
  headerCellAlignCenter,
  headerCellAlignRight,
  headerContent,
  sortIndicator,
  selectionCell,
  body,
  row,
  rowSelected,
  rowEven,
  rowOdd,
  hoverable,
  striped,
  cell,
  cellAlignCenter,
  cellAlignRight,
  checkbox: checkbox$1,
  sizeSmall: sizeSmall$3,
  sizeLarge: sizeLarge$3,
  pagination,
  paginationInfo,
  paginationControls
};
const headerAlignClassMap = {
  center: styles$d.headerCellAlignCenter,
  right: styles$d.headerCellAlignRight
};
const cellAlignClassMap = {
  center: styles$d.cellAlignCenter,
  right: styles$d.cellAlignRight
};
const sizeClassNameMap = {
  small: styles$d.sizeSmall,
  medium: void 0,
  large: styles$d.sizeLarge
};
const DynGrid = forwardRef((props, ref) => {
  var _a;
  const {
    columns,
    data,
    loading: loading2 = DYN_GRID_DEFAULT_PROPS.loading,
    size = DYN_GRID_DEFAULT_PROPS.size,
    bordered: bordered2 = DYN_GRID_DEFAULT_PROPS.bordered,
    striped: striped2 = DYN_GRID_DEFAULT_PROPS.striped,
    hoverable: hoverable2 = DYN_GRID_DEFAULT_PROPS.hoverable,
    sortable = DYN_GRID_DEFAULT_PROPS.sortable,
    filterable = DYN_GRID_DEFAULT_PROPS.filterable,
    selectable = DYN_GRID_DEFAULT_PROPS.selectable,
    selectedKeys,
    onSelectionChange,
    onSort,
    onFilter,
    pagination: pagination2,
    emptyText = DYN_GRID_DEFAULT_PROPS.emptyText,
    className,
    id,
    "data-testid": dataTestId = DYN_GRID_DEFAULT_PROPS["data-testid"],
    ...rest
  } = props;
  const selectionName = useId();
  const selectionMode = useMemo(() => {
    if (selectable === "single") {
      return "single";
    }
    if (selectable === "multiple" || selectable === true) {
      return "multiple";
    }
    return "none";
  }, [selectable]);
  const [sortConfig, setSortConfig] = useState(null);
  const resolvedSelectedKeys = useMemo(
    () => selectedKeys ?? DYN_GRID_DEFAULT_PROPS.selectedKeys,
    [selectedKeys]
  );
  const [selectedRows, setSelectedRows] = useState(resolvedSelectedKeys);
  useEffect(() => {
    setSelectedRows(resolvedSelectedKeys);
  }, [resolvedSelectedKeys]);
  const visibleColumns = useMemo(
    () => columns.filter((column) => !column.hidden),
    [columns]
  );
  const getRowKey = useCallback((record, index) => {
    const candidate = record.id ?? record.key ?? record.rowKey;
    if (typeof candidate === "string" || typeof candidate === "number") {
      return String(candidate);
    }
    return index.toString();
  }, []);
  const handleSort = useCallback(
    (columnKey) => {
      if (!sortable) {
        return;
      }
      const column = visibleColumns.find((col) => col.key === columnKey);
      if (!(column == null ? void 0 : column.sortable)) {
        return;
      }
      let direction = "asc";
      if ((sortConfig == null ? void 0 : sortConfig.key) === columnKey && sortConfig.direction === "asc") {
        direction = "desc";
      }
      setSortConfig({ key: columnKey, direction });
      onSort == null ? void 0 : onSort(columnKey, direction);
    },
    [sortable, visibleColumns, sortConfig, onSort]
  );
  const getSelectedRowData = useCallback(
    (keys) => keys.map((key) => {
      const rowIndex = data.findIndex((record, index) => getRowKey(record, index) === key);
      return rowIndex >= 0 ? data[rowIndex] : void 0;
    }).filter((record) => Boolean(record)),
    [data, getRowKey]
  );
  const handleRowSelect = useCallback(
    (rowKey, selected) => {
      if (selectionMode === "none") {
        return;
      }
      let newSelection;
      if (selectionMode === "single") {
        newSelection = selected ? [rowKey] : [];
      } else {
        newSelection = selected ? [.../* @__PURE__ */ new Set([...selectedRows, rowKey])] : selectedRows.filter((key) => key !== rowKey);
      }
      setSelectedRows(newSelection);
      onSelectionChange == null ? void 0 : onSelectionChange(newSelection, getSelectedRowData(newSelection));
    },
    [selectionMode, selectedRows, onSelectionChange, getSelectedRowData]
  );
  const handleSelectAll = useCallback(
    (selected) => {
      if (selectionMode !== "multiple") {
        return;
      }
      const allKeys = data.map((record, index) => getRowKey(record, index));
      const newSelection = selected ? allKeys : [];
      setSelectedRows(newSelection);
      onSelectionChange == null ? void 0 : onSelectionChange(newSelection, selected ? data : []);
    },
    [selectionMode, data, getRowKey, onSelectionChange]
  );
  const renderCell = useCallback(
    (column, record, rowIndex) => {
      if (column.render) {
        return column.render(record[column.key], record, rowIndex);
      }
      return record[column.key];
    },
    []
  );
  const isAllSelected = useMemo(() => {
    if (selectionMode !== "multiple" || data.length === 0) {
      return false;
    }
    const allKeys = data.map((record, index) => getRowKey(record, index));
    return allKeys.every((key) => selectedRows.includes(key));
  }, [selectionMode, data, getRowKey, selectedRows]);
  const isSelectionIndeterminate = useMemo(() => {
    if (selectionMode !== "multiple" || data.length === 0) {
      return false;
    }
    const selectedCount = data.filter((record, index) => selectedRows.includes(getRowKey(record, index))).length;
    return selectedCount > 0 && selectedCount < data.length;
  }, [selectionMode, data, getRowKey, selectedRows]);
  const gridClassName = cn(
    styles$d.root,
    sizeClassNameMap[size],
    bordered2 && styles$d.bordered,
    striped2 && styles$d.striped,
    hoverable2 && styles$d.hoverable,
    loading2 && styles$d.loading,
    className
  );
  if (loading2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: gridClassName, id, "data-testid": dataTestId, ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$d.loadingState, role: "status", "aria-live": "polite", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$d.spinner, "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loading data…" })
    ] }) });
  }
  if (data.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: gridClassName, id, "data-testid": dataTestId, ...rest, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$d.emptyState, children: typeof emptyText === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: emptyText }) : emptyText }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: gridClassName, id, "data-testid": dataTestId, ...rest, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$d.wrapper, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: styles$d.table, role: "table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: styles$d.header, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: styles$d.headerRow, children: [
        selectionMode === "multiple" && /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: cn(styles$d.headerCell, styles$d.selectionCell), scope: "col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            className: styles$d.checkbox,
            checked: isAllSelected,
            onChange: (event) => handleSelectAll(event.target.checked),
            "aria-checked": isSelectionIndeterminate ? "mixed" : isAllSelected,
            "aria-label": "Select all rows"
          }
        ) }),
        visibleColumns.map((column) => {
          const isSorted = (sortConfig == null ? void 0 : sortConfig.key) === column.key;
          const direction = isSorted ? sortConfig == null ? void 0 : sortConfig.direction : void 0;
          const headerAlignmentClass = column.align && column.align !== "left" ? headerAlignClassMap[column.align] : void 0;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "th",
            {
              className: cn(
                styles$d.headerCell,
                headerAlignmentClass,
                column.sortable && sortable && styles$d.headerCellSortable,
                isSorted && styles$d.headerCellSorted
              ),
              style: { width: column.width, minWidth: column.minWidth },
              onClick: () => column.sortable && handleSort(column.key),
              "aria-sort": column.sortable && sortable ? direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none" : void 0,
              scope: "col",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$d.headerContent, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: column.title }),
                column.sortable && sortable && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$d.sortIndicator, "aria-hidden": "true", children: isSorted ? direction === "asc" ? "↑" : "↓" : "↕" })
              ] })
            },
            column.key
          );
        })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: styles$d.body, children: data.map((record, rowIndex) => {
        const rowKey = getRowKey(record, rowIndex);
        const isSelected = selectedRows.includes(rowKey);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: cn(
              styles$d.row,
              rowIndex % 2 === 0 ? styles$d.rowEven : styles$d.rowOdd,
              isSelected && styles$d.rowSelected
            ),
            role: "row",
            children: [
              selectionMode !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: cn(styles$d.cell, styles$d.selectionCell), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: selectionMode === "single" ? "radio" : "checkbox",
                  className: styles$d.checkbox,
                  name: selectionMode === "single" ? selectionName : void 0,
                  checked: isSelected,
                  onChange: (event) => handleRowSelect(rowKey, event.target.checked),
                  "aria-label": `Select row ${rowIndex + 1}`
                }
              ) }),
              visibleColumns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "td",
                {
                  className: cn(
                    styles$d.cell,
                    column.align && column.align !== "left" ? cellAlignClassMap[column.align] : void 0
                  ),
                  children: renderCell(column, record, rowIndex)
                },
                column.key
              ))
            ]
          },
          rowKey
        );
      }) })
    ] }) }),
    pagination2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$d.pagination, role: "navigation", "aria-label": "Table pagination", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$d.paginationInfo, children: (_a = pagination2.showTotal) == null ? void 0 : _a.call(
        pagination2,
        pagination2.total,
        [
          (pagination2.current - 1) * pagination2.pageSize + 1,
          Math.min(pagination2.current * pagination2.pageSize, pagination2.total)
        ]
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$d.paginationControls, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Page ",
        pagination2.current,
        " of ",
        Math.ceil(pagination2.total / pagination2.pageSize)
      ] }) })
    ] })
  ] });
});
DynGrid.displayName = "DynGrid";
const dynInputContainer = "dyn-6VA7H";
const dynInputContainerCurrency = "dyn-3FqTa";
const dynInput = "dyn-dteGj";
const dynInputContainerWithSpinButtons = "dyn-eApDw";
const dynInputDisabled = "dyn-tExzt";
const dynInputReadonly = "dyn-d-KsY";
const dynInputFocused = "dyn-wRNrX";
const dynInputError = "dyn-wrsyY";
const dynInputSmall = "dyn-aXXXG";
const dynInputMedium = "dyn-l60Cm";
const dynInputLarge = "dyn-meH9o";
const dynInputWithIcon = "dyn-tcFWJ";
const dynInputCleanable = "dyn-ZyNKk";
const dynInputCurrencySymbol = "dyn-6yhXL";
const dynInputIconContainer = "dyn-0nIk7";
const dynInputCleanButton = "dyn-ZJAcc";
const dynInputSpinButtons = "dyn-4UsJ8";
const dynInputSpinButton = "dyn-KcgGu";
const dynInputSpinButtonIncrement = "dyn-AoRQ2";
const dynInputSpinButtonDecrement = "dyn-eNtb9";
const input = "dyn-Oejf9";
const inputSmall = "dyn-s2TTI";
const inputMedium = "dyn-yVGXW";
const inputLarge = "dyn-UPvm8";
const styles$c = {
  dynInputContainer,
  dynInputContainerCurrency,
  dynInput,
  dynInputContainerWithSpinButtons,
  dynInputDisabled,
  dynInputReadonly,
  dynInputFocused,
  dynInputError,
  dynInputSmall,
  dynInputMedium,
  dynInputLarge,
  dynInputWithIcon,
  dynInputCleanable,
  dynInputCurrencySymbol,
  dynInputIconContainer,
  dynInputCleanButton,
  dynInputSpinButtons,
  dynInputSpinButton,
  dynInputSpinButtonIncrement,
  dynInputSpinButtonDecrement,
  input,
  inputSmall,
  inputMedium,
  inputLarge
};
const useDynMask = (mask, initialValue = "", formatModel = false) => {
  const [maskedValue, setMaskedValue] = useState(
    mask ? applyMask(initialValue, mask) : initialValue
  );
  const unmaskValue = useCallback((value2) => {
    if (!mask)
      return value2;
    return value2.replace(/[^0-9a-zA-Z]/g, "");
  }, [mask]);
  const handleMaskedChange = useCallback((newValue) => {
    if (!mask)
      return newValue;
    const maskedResult = applyMask(newValue, mask);
    setMaskedValue(maskedResult);
    return formatModel ? maskedResult : unmaskValue(maskedResult);
  }, [mask, formatModel, unmaskValue]);
  return {
    maskedValue,
    unmaskValue,
    handleMaskedChange
  };
};
function applyMask(value2, mask) {
  if (!mask || !value2)
    return value2;
  const cleanValue = value2.replace(/[^0-9a-zA-Z]/g, "");
  let maskedValue = "";
  let valueIndex = 0;
  for (let i = 0; i < mask.length && valueIndex < cleanValue.length; i++) {
    const maskChar = mask[i];
    if (maskChar === "#") {
      if (/[0-9]/.test(cleanValue[valueIndex])) {
        maskedValue += cleanValue[valueIndex];
        valueIndex++;
      } else {
        break;
      }
    } else if (maskChar === "A") {
      if (/[a-zA-Z]/.test(cleanValue[valueIndex])) {
        maskedValue += cleanValue[valueIndex];
        valueIndex++;
      } else {
        break;
      }
    } else if (maskChar === "*") {
      maskedValue += cleanValue[valueIndex];
      valueIndex++;
    } else {
      maskedValue += maskChar;
    }
  }
  return maskedValue;
}
const MASK_PATTERNS = {
  phone: "(##) ####-####",
  phoneWithCountry: "+## (##) ####-####",
  cpf: "###.###.###-##",
  cnpj: "##.###.###/####-##",
  cep: "#####-###",
  creditCard: "#### #### #### ####",
  date: "##/##/####",
  time: "##:##",
  currency: "###.###.###,##"
};
const getMaskPattern = (type) => {
  return MASK_PATTERNS[type];
};
const DEFAULT_CURRENCY_CODE = "BRL";
const DEFAULT_PRECISION = 2;
const getStyleClass$3 = (className) => styles$c[className] ?? className;
const DynInput = forwardRef(
  ({
    name,
    id,
    label: label2,
    help: help2,
    helpText,
    placeholder,
    disabled: disabled2 = false,
    readOnly,
    readonly,
    required: required2 = false,
    optional: optional2 = false,
    visible = true,
    value: propValue = "",
    showSpinButtons = false,
    errorMessage: errorMessage2,
    validation,
    validationRules,
    className,
    type = "text",
    size = "medium",
    maxLength,
    minLength,
    mask,
    maskFormatModel = false,
    pattern,
    icon: icon2,
    showClearButton,
    showCleanButton,
    step: step2,
    min,
    max,
    currencyConfig,
    onChange,
    onBlur,
    onFocus,
    ...rest
  }, ref) => {
    const { ["aria-describedby"]: ariaDescribedBy, ...restProps } = rest;
    const isCurrencyType = type === "currency";
    const resolvedCurrencyConfig = useMemo(
      () => resolveCurrencyConfig(currencyConfig, type),
      [currencyConfig, type]
    );
    const [inputValue, setInputValue] = useState(
      () => initializeInputValue(propValue, type, resolvedCurrencyConfig)
    );
    const [focused, setFocused] = useState(false);
    const inputRef = useRef(null);
    const generatedIdRef = useRef(`dyn-input-${Math.random().toString(36).slice(2, 9)}`);
    const inputId = id ?? name ?? generatedIdRef.current;
    const isReadOnly = Boolean(readOnly ?? readonly);
    const fieldHelpText = helpText ?? help2;
    const shouldShowClearButton = Boolean(showClearButton ?? showCleanButton);
    const normalizedValidationRules = useMemo(() => {
      const collected = [];
      const pushRules = (rules) => {
        if (!rules) {
          return;
        }
        if (Array.isArray(rules)) {
          collected.push(...rules);
        } else {
          collected.push(rules);
        }
      };
      pushRules(validation);
      if (validationRules == null ? void 0 : validationRules.length) {
        collected.push(...validationRules);
      }
      return collected.length > 0 ? collected : void 0;
    }, [validation, validationRules]);
    const { error: error2, validate, clearError: clearValidationError } = useDynFieldValidation({
      value: inputValue,
      required: required2,
      validation: normalizedValidationRules,
      customError: errorMessage2
    });
    const resolvedMaskPattern = typeof mask === "string" ? mask : mask == null ? void 0 : mask.pattern;
    const resolvedMaskFormatModel = typeof mask === "object" && mask !== null ? mask.formatModel ?? maskFormatModel : maskFormatModel;
    const { maskedValue, unmaskValue, handleMaskedChange } = useDynMask(
      resolvedMaskPattern,
      inputValue,
      resolvedMaskFormatModel
    );
    useImperativeHandle(ref, () => ({
      focus: () => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.blur();
      },
      validate: () => validate(),
      clear: () => {
        setInputValue("");
        onChange == null ? void 0 : onChange("");
        clearValidationError();
      },
      clearError: () => {
        clearValidationError();
      },
      getValue: () => {
        if (isCurrencyType) {
          const numericValue = parseCurrencyLikeValue(inputValue, resolvedCurrencyConfig);
          return numericValue ?? "";
        }
        return mask && !maskFormatModel ? unmaskValue(inputValue) : inputValue;
      },
      setValue: (newValue) => {
        if (isCurrencyType) {
          const numericValue = parseCurrencyLikeValue(newValue, resolvedCurrencyConfig);
          if (numericValue == null) {
            setInputValue("");
            onChange == null ? void 0 : onChange("");
            return;
          }
          const normalizedValue = roundToPrecision(numericValue, resolvedCurrencyConfig.precision);
          const formattedValue = resolvedCurrencyConfig.autoFormat ? formatCurrencyValue(normalizedValue, { ...resolvedCurrencyConfig, showSymbol: false }) : formatPlainCurrencyValue(normalizedValue, resolvedCurrencyConfig);
          setInputValue(formattedValue);
          onChange == null ? void 0 : onChange(normalizedValue);
          return;
        }
        const stringValue = newValue == null ? "" : String(newValue);
        setInputValue(stringValue);
        onChange == null ? void 0 : onChange(stringValue);
      },
      getElement: () => inputRef.current
    }));
    const mergedCurrencyConfig = useMemo(() => {
      const defaultConfig = {
        symbol: "R$",
        currencyCode: "BRL",
        showCurrencyCode: false,
        precision: 2,
        decimalSeparator: ",",
        thousandSeparator: "."
      };
      return {
        ...defaultConfig,
        ...currencyConfig ?? {}
      };
    }, [currencyConfig]);
    useCallback(
      (rawValue) => {
        if (rawValue == null || rawValue === "") {
          return "";
        }
        const valueAsString = String(rawValue);
        const { decimalSeparator, thousandSeparator, symbol, currencyCode } = mergedCurrencyConfig;
        let sanitized = valueAsString.replace(/\s/g, "");
        if (symbol) {
          sanitized = sanitized.replace(new RegExp(escapeRegExp(symbol), "g"), "");
        }
        if (currencyCode) {
          sanitized = sanitized.replace(new RegExp(escapeRegExp(currencyCode), "gi"), "");
        }
        const allowedSeparator = decimalSeparator ?? ".";
        sanitized = sanitized.replace(
          new RegExp(`[^0-9${escapeRegExp(allowedSeparator)}\\.\\-]`, "g"),
          ""
        );
        const dotMatches = sanitized.match(/\./g) ?? [];
        let decimalMarker = null;
        if (sanitized.includes(allowedSeparator)) {
          decimalMarker = allowedSeparator;
        } else if (sanitized.includes(".")) {
          const digitsAfterLastDot = sanitized.length - sanitized.lastIndexOf(".") - 1;
          if (thousandSeparator === "." && (dotMatches.length > 1 || digitsAfterLastDot === 3)) {
            decimalMarker = null;
          } else {
            decimalMarker = ".";
          }
        }
        if (thousandSeparator && thousandSeparator !== decimalMarker) {
          sanitized = sanitized.replace(new RegExp(escapeRegExp(thousandSeparator), "g"), "");
        }
        if (decimalMarker) {
          const escapedDecimal = escapeRegExp(decimalMarker);
          const lastDecimalIndex = sanitized.lastIndexOf(decimalMarker);
          if (lastDecimalIndex !== -1) {
            const before = sanitized.slice(0, lastDecimalIndex).replace(new RegExp(escapedDecimal, "g"), "").replace(/\./g, "");
            const after = sanitized.slice(lastDecimalIndex + 1).replace(new RegExp(escapedDecimal, "g"), "").replace(/\./g, "");
            sanitized = `${before}.${after}`;
          }
        }
        sanitized = sanitized.replace(/[^0-9.\-]/g, "");
        const minusIndex = sanitized.indexOf("-");
        if (minusIndex > 0) {
          sanitized = sanitized.replace(/-/g, "");
        } else if (minusIndex === 0) {
          sanitized = `-${sanitized.slice(1).replace(/-/g, "")}`;
        } else {
          sanitized = sanitized.replace(/-/g, "");
        }
        if (sanitized.split(".").length > 2) {
          const [integerPart, ...decimalParts] = sanitized.split(".");
          sanitized = `${integerPart}.${decimalParts.join("")}`;
        }
        return sanitized;
      },
      [mergedCurrencyConfig]
    );
    useEffect(() => {
      if (isCurrencyType) {
        const formattedValue = initializeInputValue(propValue, type, resolvedCurrencyConfig);
        setInputValue(formattedValue);
      } else {
        const stringValue = propValue == null ? "" : String(propValue);
        setInputValue(stringValue);
      }
    }, [propValue, isCurrencyType, type, resolvedCurrencyConfig]);
    const handleCurrencyChange = (rawValue) => {
      processCurrencyChange(rawValue, resolvedCurrencyConfig, setInputValue, onChange);
    };
    const handleChange = (e) => {
      const newValue = e.target.value;
      if (mask) {
        const processedValue = handleMaskedChange(newValue);
        setInputValue(processedValue);
        onChange == null ? void 0 : onChange(maskFormatModel ? processedValue : unmaskValue(processedValue));
      } else if (isCurrencyType) {
        handleCurrencyChange(newValue);
      } else {
        setInputValue(newValue);
        if (type === "number") {
          if (newValue === "" || newValue === "-" || newValue === ".") {
            onChange == null ? void 0 : onChange("");
          } else {
            const numericValue = Number(newValue);
            onChange == null ? void 0 : onChange(Number.isNaN(numericValue) ? newValue : numericValue);
          }
        } else {
          onChange == null ? void 0 : onChange(newValue);
        }
      }
      clearValidationError();
    };
    const handleStepChange = useCallback(
      (direction) => {
        if (disabled2 || isReadOnly)
          return;
        const stepValue = step2 ?? 1;
        const currentNumeric = type === "currency" ? parseCurrencyLikeValue(inputValue, resolvedCurrencyConfig) ?? 0 : Number(inputValue || 0);
        const baseValue = Number.isNaN(currentNumeric) ? 0 : currentNumeric;
        let nextValue = baseValue + direction * stepValue;
        if (typeof min === "number") {
          nextValue = Math.max(nextValue, min);
        }
        if (typeof max === "number") {
          nextValue = Math.min(nextValue, max);
        }
        const nextValueString = String(nextValue);
        if (type === "currency") {
          const normalizedNext = roundToPrecision(nextValue, resolvedCurrencyConfig.precision);
          const formatted = resolvedCurrencyConfig.autoFormat ? formatCurrencyValue(normalizedNext, { ...resolvedCurrencyConfig, showSymbol: false }) : formatPlainCurrencyValue(normalizedNext, resolvedCurrencyConfig);
          setInputValue(formatted);
          onChange == null ? void 0 : onChange(normalizedNext);
        } else {
          setInputValue(nextValueString);
          onChange == null ? void 0 : onChange(type === "number" ? nextValue : nextValueString);
        }
        clearValidationError();
      },
      [
        clearValidationError,
        disabled2,
        inputValue,
        isReadOnly,
        max,
        min,
        onChange,
        resolvedCurrencyConfig,
        step2,
        type
      ]
    );
    const handleBlur = (event) => {
      setFocused(false);
      validate();
      onBlur == null ? void 0 : onBlur(event);
    };
    const handleFocus = (event) => {
      setFocused(true);
      clearValidationError();
      onFocus == null ? void 0 : onFocus(event);
    };
    const handleClean = () => {
      var _a;
      setInputValue("");
      onChange == null ? void 0 : onChange("");
      clearValidationError();
      (_a = inputRef.current) == null ? void 0 : _a.focus();
    };
    if (!visible)
      return null;
    const showSpin = showSpinButtons && (type === "number" || type === "currency");
    const inputClasses = cn(
      getStyleClass$3("dyn-input"),
      getStyleClass$3(`dyn-input--${size}`),
      focused && getStyleClass$3("dyn-input--focused"),
      !!error2 && getStyleClass$3("dyn-input--error"),
      disabled2 && getStyleClass$3("dyn-input--disabled"),
      isReadOnly && getStyleClass$3("dyn-input--readonly"),
      !!icon2 && getStyleClass$3("dyn-input--with-icon"),
      !!(shouldShowClearButton && inputValue && !isReadOnly && !disabled2) && getStyleClass$3("dyn-input--cleanable")
    );
    const displayValue = mask ? maskedValue : inputValue;
    const containerDivClass = cn(
      getStyleClass$3("dyn-input-container"),
      className,
      type === "currency" && getStyleClass$3("dyn-input-container--currency"),
      showSpin && getStyleClass$3("dyn-input-container--with-spin-buttons")
    );
    const errorId = `${inputId}-error`;
    const helpId = `${inputId}-help`;
    const describedBy = [
      ariaDescribedBy,
      help2 ? helpId : void 0,
      error2 ? errorId : void 0
    ].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DynFieldContainer,
      {
        label: label2,
        helpText: fieldHelpText,
        required: required2,
        optional: optional2,
        errorText: error2,
        className,
        htmlFor: inputId,
        id,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: containerDivClass, children: [
          type === "currency" && resolvedCurrencyConfig.symbol && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$3("dyn-input-currency-symbol"), "aria-hidden": "true", children: resolvedCurrencyConfig.symbol }),
          icon2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$3("dyn-input-icon-container"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: icon2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: inputRef,
              id: inputId,
              name,
              type: type === "number" || isCurrencyType ? "text" : type,
              className: inputClasses,
              placeholder,
              value: displayValue,
              disabled: disabled2,
              readOnly: isReadOnly,
              required: required2,
              "aria-required": required2,
              "aria-disabled": disabled2,
              maxLength,
              minLength,
              pattern,
              step: type === "number" ? step2 : void 0,
              min: type === "number" ? min : void 0,
              max: type === "number" ? max : void 0,
              inputMode: type === "number" || isCurrencyType ? "decimal" : void 0,
              onChange: handleChange,
              onBlur: handleBlur,
              onFocus: handleFocus,
              "aria-invalid": !!error2,
              "aria-describedby": describedBy,
              ...restProps
            }
          ),
          shouldShowClearButton && inputValue && !isReadOnly && !disabled2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: getStyleClass$3("dyn-input-clean-button"),
              onClick: handleClean,
              tabIndex: -1,
              "aria-label": "Limpar campo",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: "dyn-icon-close" })
            }
          ),
          showSpin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: getStyleClass$3("dyn-input-spin-buttons"),
              "aria-hidden": disabled2 || isReadOnly,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: cn(
                      getStyleClass$3("dyn-input-spin-button"),
                      getStyleClass$3("dyn-input-spin-button--increment")
                    ),
                    onClick: () => handleStepChange(1),
                    tabIndex: -1,
                    "aria-label": "Increase value",
                    disabled: disabled2 || isReadOnly,
                    children: "▲"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: cn(
                      getStyleClass$3("dyn-input-spin-button"),
                      getStyleClass$3("dyn-input-spin-button--decrement")
                    ),
                    onClick: () => handleStepChange(-1),
                    tabIndex: -1,
                    "aria-label": "Decrease value",
                    disabled: disabled2 || isReadOnly,
                    children: "▼"
                  }
                )
              ]
            }
          )
        ] })
      }
    );
  }
);
DynInput.displayName = "DynInput";
function resolveCurrencyConfig(config, type) {
  const precision = Math.max(0, (config == null ? void 0 : config.precision) ?? DEFAULT_PRECISION);
  const currencyCode = (config == null ? void 0 : config.currencyCode) ?? DEFAULT_CURRENCY_CODE;
  if (type !== "currency") {
    return {
      currencyCode,
      precision,
      thousandSeparator: (config == null ? void 0 : config.thousandSeparator) ?? ",",
      decimalSeparator: (config == null ? void 0 : config.decimalSeparator) ?? ".",
      showSymbol: (config == null ? void 0 : config.showSymbol) ?? true,
      symbol: (config == null ? void 0 : config.symbol) ?? currencyCode,
      symbolPosition: (config == null ? void 0 : config.symbolPosition) ?? "prefix",
      autoFormat: (config == null ? void 0 : config.autoFormat) ?? true,
      symbolSpacing: " "
    };
  }
  const defaults = deriveCurrencyDefaults(currencyCode, precision);
  return {
    currencyCode,
    precision,
    thousandSeparator: (config == null ? void 0 : config.thousandSeparator) ?? defaults.group,
    decimalSeparator: (config == null ? void 0 : config.decimalSeparator) ?? defaults.decimal,
    showSymbol: (config == null ? void 0 : config.showSymbol) ?? true,
    symbol: (config == null ? void 0 : config.symbol) ?? defaults.symbol,
    symbolPosition: (config == null ? void 0 : config.symbolPosition) ?? "prefix",
    autoFormat: (config == null ? void 0 : config.autoFormat) ?? true,
    symbolSpacing: defaults.spacing
  };
}
function initializeInputValue(value2, type, config) {
  if (type === "currency") {
    const numericValue = parseCurrencyLikeValue(value2, config);
    if (numericValue == null) {
      return typeof value2 === "string" ? value2 : "";
    }
    const normalizedValue = roundToPrecision(numericValue, config.precision);
    return config.autoFormat ? formatCurrencyValue(normalizedValue, { ...config, showSymbol: false }) : formatPlainCurrencyValue(normalizedValue, config);
  }
  if (value2 == null)
    return "";
  return typeof value2 === "string" ? value2 : String(value2);
}
function parseCurrencyLikeValue(value2, config) {
  if (value2 == null || value2 === "") {
    return null;
  }
  if (typeof value2 === "number") {
    return Number.isFinite(value2) ? value2 : null;
  }
  if (typeof value2 === "string") {
    const sanitized = sanitizeCurrencyInput(value2, config);
    if (!/[0-9]/.test(sanitized)) {
      return null;
    }
    const numericValue = Number(sanitized);
    return Number.isNaN(numericValue) ? null : numericValue;
  }
  return null;
}
function processCurrencyChange(rawValue, config, setValue, notifyChange) {
  const sanitizedValue = sanitizeCurrencyInput(rawValue, config);
  if (!/[0-9]/.test(sanitizedValue)) {
    setValue(rawValue);
    notifyChange == null ? void 0 : notifyChange("");
    return;
  }
  const numericValue = Number(sanitizedValue);
  if (Number.isNaN(numericValue)) {
    setValue(rawValue);
    notifyChange == null ? void 0 : notifyChange(sanitizedValue);
    return;
  }
  const normalizedValue = roundToPrecision(numericValue, config.precision);
  const formattedValue = config.autoFormat ? formatCurrencyValue(normalizedValue, { ...config, showSymbol: false }) : formatPlainCurrencyValue(normalizedValue, config);
  setValue(formattedValue);
  notifyChange == null ? void 0 : notifyChange(normalizedValue);
}
function roundToPrecision(value2, precision) {
  if (!Number.isFinite(value2))
    return value2;
  return Number(value2.toFixed(precision));
}
function formatCurrencyValue(value2, config) {
  const {
    precision,
    thousandSeparator,
    decimalSeparator,
    showSymbol,
    symbol,
    symbolPosition,
    symbolSpacing,
    currencyCode
  } = config;
  const absoluteValue = Math.abs(value2);
  const [integerPartRaw, fractionalPartRaw = ""] = absoluteValue.toFixed(precision).split(".");
  const groupedInteger = thousandSeparator && thousandSeparator.length > 0 ? integerPartRaw.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator) : integerPartRaw;
  let formatted = groupedInteger;
  if (precision > 0) {
    formatted += `${decimalSeparator}${fractionalPartRaw}`;
  }
  if (showSymbol) {
    const symbolValue = symbol || currencyCode;
    const spacing = symbolSpacing ?? "";
    if (symbolPosition === "suffix") {
      formatted = `${formatted}${spacing}${symbolValue}`;
    } else {
      formatted = `${symbolValue}${spacing}${formatted}`;
    }
  }
  if (value2 < 0) {
    formatted = `-${formatted}`;
  }
  return formatted;
}
function formatPlainCurrencyValue(value2, config) {
  const { precision, decimalSeparator } = config;
  const absoluteValue = Math.abs(value2);
  const [integerPart, fractionalPart = ""] = absoluteValue.toFixed(precision).split(".");
  let formatted = integerPart;
  if (precision > 0) {
    formatted += `${decimalSeparator}${fractionalPart}`;
  }
  if (value2 < 0) {
    formatted = `-${formatted}`;
  }
  return formatted;
}
function sanitizeCurrencyInput(value2, config) {
  if (!value2)
    return "";
  let normalized = value2;
  if (config.thousandSeparator) {
    normalized = normalized.replace(new RegExp(escapeRegExp(config.thousandSeparator), "g"), "");
  }
  if (config.symbolSpacing) {
    normalized = normalized.replace(new RegExp(escapeRegExp(config.symbolSpacing), "g"), "");
  }
  if (config.symbol) {
    normalized = normalized.replace(new RegExp(escapeRegExp(config.symbol), "g"), "");
  }
  if (config.currencyCode) {
    normalized = normalized.replace(new RegExp(escapeRegExp(config.currencyCode), "gi"), "");
  }
  normalized = normalized.replace(/\s+/g, "");
  if (config.decimalSeparator && config.decimalSeparator !== ".") {
    normalized = normalized.replace(new RegExp(escapeRegExp(config.decimalSeparator), "g"), ".");
  }
  normalized = normalized.replace(/[^0-9.-]/g, "");
  const hasNegative = normalized.includes("-");
  normalized = normalized.replace(/-/g, "");
  if (hasNegative) {
    normalized = normalized.length > 0 ? `-${normalized}` : "-";
  }
  const firstDecimalIndex = normalized.indexOf(".");
  if (firstDecimalIndex !== -1) {
    const before = normalized.slice(0, firstDecimalIndex + 1);
    const after = normalized.slice(firstDecimalIndex + 1).replace(/\./g, "");
    normalized = before + after;
  }
  return normalized;
}
function deriveCurrencyDefaults(currencyCode, precision) {
  var _a, _b, _c;
  try {
    const formatter = new Intl.NumberFormat(void 0, {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: precision,
      maximumFractionDigits: precision
    });
    const parts = formatter.formatToParts(123456789e-2);
    const group = ((_a = parts.find((part) => part.type === "group")) == null ? void 0 : _a.value) ?? ",";
    const decimal = ((_b = parts.find((part) => part.type === "decimal")) == null ? void 0 : _b.value) ?? ".";
    const symbol = ((_c = parts.find((part) => part.type === "currency")) == null ? void 0 : _c.value) ?? currencyCode;
    let spacing = "";
    const currencyIndex = parts.findIndex((part) => part.type === "currency");
    if (currencyIndex !== -1) {
      const nextPart = parts[currencyIndex + 1];
      const previousPart = parts[currencyIndex - 1];
      if ((nextPart == null ? void 0 : nextPart.type) === "literal") {
        spacing = nextPart.value;
      } else if ((previousPart == null ? void 0 : previousPart.type) === "literal") {
        spacing = previousPart.value;
      }
    }
    return { group, decimal, symbol, spacing };
  } catch (error2) {
    return { group: ",", decimal: ".", symbol: currencyCode, spacing: " " };
  }
}
function escapeRegExp(value2) {
  return value2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const DYN_TEXT_AREA_DEFAULT_PROPS = {
  disabled: false,
  readonly: false,
  required: false,
  optional: false,
  visible: true,
  value: "",
  resize: "vertical",
  rows: 4,
  "data-testid": "dyn-textarea"
};
const container$1 = "dyn-KEQ5N";
const textarea = "dyn-WhuGK";
const textareaDisabled = "dyn-YWQRG";
const textareaReadonly = "dyn-hhMKR";
const textareaFocused = "dyn-iUzGE";
const textareaError = "dyn-esxGh";
const textareaResizeNone = "dyn-H-sRs";
const textareaResizeHorizontal = "dyn-aMzBs";
const textareaResizeBoth = "dyn-injsm";
const styles$b = {
  container: container$1,
  textarea,
  textareaDisabled,
  textareaReadonly,
  textareaFocused,
  textareaError,
  textareaResizeNone,
  textareaResizeHorizontal,
  textareaResizeBoth
};
const DynTextAreaComponent = ({
  name,
  id,
  label: label2,
  help: help2,
  placeholder,
  disabled: disabled2 = DYN_TEXT_AREA_DEFAULT_PROPS.disabled,
  readonly = DYN_TEXT_AREA_DEFAULT_PROPS.readonly,
  required: required2 = DYN_TEXT_AREA_DEFAULT_PROPS.required,
  optional: optional2 = DYN_TEXT_AREA_DEFAULT_PROPS.optional,
  visible = DYN_TEXT_AREA_DEFAULT_PROPS.visible,
  value: valueProp = DYN_TEXT_AREA_DEFAULT_PROPS.value,
  errorMessage: errorMessage2,
  validation,
  className,
  resize = DYN_TEXT_AREA_DEFAULT_PROPS.resize,
  rows = DYN_TEXT_AREA_DEFAULT_PROPS.rows,
  cols,
  onChange,
  onBlur,
  onFocus,
  "data-testid": dataTestId = DYN_TEXT_AREA_DEFAULT_PROPS["data-testid"],
  ...rest
}, ref) => {
  const [value2, setValue] = useState(valueProp ?? "");
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef(null);
  const fallbackId = useId();
  const fieldId = id ?? name ?? `${fallbackId}-textarea`;
  const { error: error2, validate, clearError } = useDynFieldValidation({
    value: value2,
    required: required2,
    validation,
    customError: errorMessage2
  });
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        var _a;
        return (_a = textareaRef.current) == null ? void 0 : _a.focus();
      },
      validate: () => validate(),
      clear: () => {
        setValue("");
        onChange == null ? void 0 : onChange("");
        clearError();
      },
      getValue: () => value2,
      setValue: (newValue) => {
        const stringValue = String(newValue ?? "");
        setValue(stringValue);
        onChange == null ? void 0 : onChange(stringValue);
      }
    }),
    [clearError, onChange, validate, value2]
  );
  useEffect(() => {
    setValue(valueProp ?? "");
  }, [valueProp]);
  if (!visible) {
    return null;
  }
  const resolvedError = errorMessage2 ?? (error2 || void 0);
  const describedById = resolvedError ? `${fieldId}-error` : help2 ? `${fieldId}-help` : void 0;
  const textareaClasses = cn(
    styles$b.textarea,
    focused && styles$b.textareaFocused,
    resolvedError && styles$b.textareaError,
    disabled2 && styles$b.textareaDisabled,
    readonly && styles$b.textareaReadonly,
    resize === "none" && styles$b.textareaResizeNone,
    resize === "horizontal" && styles$b.textareaResizeHorizontal,
    resize === "both" && styles$b.textareaResizeBoth
  );
  const containerClasses = cn(styles$b.container, className);
  const fieldContainerProps = {
    label: label2,
    required: required2,
    optional: optional2,
    helpText: help2,
    errorText: resolvedError,
    className: containerClasses,
    htmlFor: fieldId,
    id
  };
  const handleChange = (event) => {
    const newValue = event.target.value;
    if (disabled2 || readonly) {
      event.preventDefault();
      return;
    }
    setValue(newValue);
    onChange == null ? void 0 : onChange(newValue);
    clearError();
  };
  const handleFocus = () => {
    if (disabled2) {
      return;
    }
    setFocused(true);
    clearError();
    onFocus == null ? void 0 : onFocus();
  };
  const handleBlur = () => {
    setFocused(false);
    void validate();
    onBlur == null ? void 0 : onBlur();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DynFieldContainer, { ...fieldContainerProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      ...rest,
      ref: textareaRef,
      id: fieldId,
      name,
      className: textareaClasses,
      placeholder,
      value: value2,
      disabled: disabled2,
      readOnly: readonly,
      required: required2,
      rows,
      cols,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      "aria-invalid": Boolean(resolvedError),
      "aria-required": required2 || void 0,
      "aria-describedby": describedById,
      "data-testid": dataTestId
    }
  ) });
};
const DynTextArea = forwardRef(DynTextAreaComponent);
DynTextArea.displayName = "DynTextArea";
const dynLabelContainer = "dyn-n9egX";
const dynLabel = "dyn-lam4y";
const dynLabelText = "dyn-pPrp6";
const dynLabelRequirement = "dyn-t5oEC";
const dynLabelRequiredAsterisk = "dyn-qC4fE";
const dynLabelOptionalText = "dyn-qiDWd";
const dynLabelDisabled = "dyn-TgyhO";
const dynLabelHelpText = "dyn-d-lv4";
const dynLabelField = "dyn-ydTyS";
const styles$a = {
  dynLabelContainer,
  dynLabel,
  dynLabelText,
  dynLabelRequirement,
  dynLabelRequiredAsterisk,
  dynLabelOptionalText,
  dynLabelDisabled,
  dynLabelHelpText,
  dynLabelField
};
const classNames$1 = (...args) => args.filter(Boolean).join(" ");
const DynLabel = ({
  children,
  htmlFor,
  disabled: disabled2 = false,
  required: required2 = false,
  optional: optional2 = false,
  helpText,
  className,
  ...restProps
}) => {
  const labelClasses = classNames$1(
    styles$a["dyn-label"],
    disabled2 && styles$a["dyn-label--disabled"],
    (required2 || optional2) && styles$a["dyn-label--with-requirement"],
    className
  );
  const renderRequirementIndicator = () => {
    if (required2) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${styles$a["dyn-label-requirement"]} ${styles$a["dyn-label--required"]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$a["dyn-label-required-asterisk"], "aria-hidden": "true", children: "*" }) });
    }
    if (optional2) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `${styles$a["dyn-label-requirement"]} ${styles$a["dyn-label--optional"]}`,
          "data-testid": "optional-indicator",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$a["dyn-label-optional-text"], children: "(optional)" })
        }
      );
    }
    return null;
  };
  const renderHelpText = () => {
    if (!helpText)
      return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$a["dyn-label-help-text"], id: htmlFor ? `${htmlFor}-help` : void 0, children: helpText });
  };
  const elementProps = {
    className: labelClasses,
    ...htmlFor && { htmlFor },
    ...helpText && htmlFor && { "aria-describedby": `${htmlFor}-help` },
    ...restProps
  };
  const labelContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles$a["dyn-label-text"], children: [
    children,
    renderRequirementIndicator()
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$a["dyn-label-container"], role: "group", children: [
    htmlFor ? /* @__PURE__ */ jsxRuntimeExports.jsx("label", { ...elementProps, children: labelContent }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...elementProps, children: labelContent }),
    renderHelpText()
  ] });
};
DynLabel.displayName = "DynLabel";
const root$2 = "dyn-H9Phw";
const header$1 = "dyn-a5cen";
const content$2 = "dyn-OmLWa";
const rootFixedHeight = "dyn-ska90";
const option$1 = "dyn-iScM9";
const optionSelected$1 = "dyn-0YNCD";
const optionActive = "dyn-O1W2H";
const optionDisabled$1 = "dyn-7TZCb";
const optionMain = "dyn-Nxfc-";
const optionCheckbox = "dyn-i9KiP";
const optionCheckboxChecked = "dyn-t-SQg";
const optionContent = "dyn-TJV2r";
const optionLabel = "dyn-D3mB-";
const optionLabelExpandable = "dyn-VtTtD";
const optionLabelExpanded = "dyn-GSlWT";
const optionDescription = "dyn-Z1YYB";
const optionActions = "dyn-5QCuA";
const optionControls = "dyn-DIIdK";
const optionExpandButton = "dyn-jO1w9";
const optionExpandButtonIcon = "dyn-jSkMe";
const actionButton = "dyn-hA9Uh";
const actionButtonDefault = "dyn-GyjXs";
const actionButtonPrimary = "dyn-CU0u7";
const actionButtonDanger = "dyn-ek0Q7";
const optionDetails = "dyn-91YEk";
const bulkActions = "dyn-OQHMf";
const bulkActionsButton = "dyn-q1x1o";
const visuallyHidden = "dyn-Qb3Ci";
const loading$1 = "dyn-dWUec";
const empty = "dyn-KoKUt";
const rootSmall = "dyn--xoXi";
const rootLarge = "dyn-vqM6g";
const rootBordered = "dyn-iJJRO";
const styles$9 = {
  root: root$2,
  header: header$1,
  content: content$2,
  rootFixedHeight,
  option: option$1,
  optionSelected: optionSelected$1,
  optionActive,
  optionDisabled: optionDisabled$1,
  optionMain,
  optionCheckbox,
  optionCheckboxChecked,
  optionContent,
  optionLabel,
  optionLabelExpandable,
  optionLabelExpanded,
  optionDescription,
  optionActions,
  optionControls,
  optionExpandButton,
  optionExpandButtonIcon,
  actionButton,
  actionButtonDefault,
  actionButtonPrimary,
  actionButtonDanger,
  optionDetails,
  bulkActions,
  bulkActionsButton,
  visuallyHidden,
  loading: loading$1,
  empty,
  rootSmall,
  rootLarge,
  rootBordered
};
const getStyleClass$2 = (n) => styles$9[n] || "";
const getActionButtonVariantClass = (type) => {
  const normalized = (type ?? "default").toLowerCase();
  const variantKey = `actionButton${normalized.replace(/^[a-z]/, (c) => c.toUpperCase())}`;
  return getStyleClass$2(variantKey) || getStyleClass$2("actionButtonDefault");
};
const isComplexItem = (item2) => {
  const displayKeys = /* @__PURE__ */ new Set(["id", "title", "label", "value", "description", "icon", "disabled", "selected"]);
  const keys = Object.keys(item2 || {});
  return keys.filter((k) => !displayKeys.has(k)).length >= 3;
};
const resolveBaseKey = (item2, index, itemKey) => {
  let candidate;
  if (typeof itemKey === "function") {
    candidate = itemKey(item2);
  } else if (typeof itemKey === "string") {
    candidate = item2[itemKey];
  } else if (item2.id !== void 0 && item2.id !== null) {
    candidate = item2.id;
  } else if (item2.value !== void 0 && item2.value !== null) {
    candidate = item2.value;
  }
  const normalized = candidate === void 0 || candidate === null || candidate === "" ? String(index) : String(candidate);
  return normalized;
};
const createUniqueKeys = (items, itemKey) => {
  const occurrences = /* @__PURE__ */ new Map();
  return items.map((item2, index) => {
    const baseKey = resolveBaseKey(item2, index, itemKey);
    const seen = occurrences.get(baseKey) ?? 0;
    occurrences.set(baseKey, seen + 1);
    if (seen === 0)
      return baseKey;
    return `${baseKey}-${seen}`;
  });
};
const createKeyToItemMap = (items, keys) => {
  const map = /* @__PURE__ */ new Map();
  keys.forEach((key, index) => {
    map.set(key, items[index]);
  });
  return map;
};
const toInternalValue = (value2, multi) => {
  if (multi) {
    if (Array.isArray(value2))
      return value2;
    if (typeof value2 === "string" && value2 !== "")
      return [value2];
    return [];
  }
  if (Array.isArray(value2))
    return value2[0];
  return value2;
};
const toKeyArray = (value2, multi) => {
  if (multi) {
    if (Array.isArray(value2))
      return value2;
    if (typeof value2 === "string" && value2 !== "")
      return [value2];
    return [];
  }
  return typeof value2 === "string" && value2 !== "" ? [value2] : [];
};
const useSelectionManager = ({
  multi,
  disabled: disabled2,
  controlledValue,
  defaultValue,
  onChange,
  onSelectionChange,
  getSelectedItems
}) => {
  const isControlled = controlledValue !== void 0;
  const [selected, setSelected] = useState(() => {
    const initial = isControlled ? controlledValue : defaultValue;
    return toInternalValue(initial, multi);
  });
  const updateFromExternal = useCallback(
    (value2) => {
      setSelected(toInternalValue(value2, multi));
    },
    [multi]
  );
  React__default.useEffect(() => {
    if (isControlled) {
      updateFromExternal(controlledValue);
    }
  }, [controlledValue, isControlled, updateFromExternal]);
  const selectedKeys = useMemo(() => toKeyArray(selected, multi), [selected, multi]);
  const updateSelection = useCallback(
    (next) => {
      const internalValue = toInternalValue(next, multi);
      if (!isControlled) {
        setSelected(internalValue);
      }
      const keysArray = toKeyArray(internalValue, multi);
      const items = getSelectedItems(keysArray);
      const valueForChange = multi ? keysArray : keysArray[0];
      onChange == null ? void 0 : onChange(valueForChange, multi ? items : items[0]);
      onSelectionChange == null ? void 0 : onSelectionChange(keysArray, items);
    },
    [getSelectedItems, isControlled, multi, onChange, onSelectionChange]
  );
  const toggle = useCallback(
    (key) => {
      if (disabled2)
        return;
      if (multi) {
        const current = new Set(selectedKeys);
        if (current.has(key)) {
          current.delete(key);
        } else {
          current.add(key);
        }
        updateSelection(Array.from(current));
      } else {
        updateSelection(selectedKeys[0] === key ? void 0 : key);
      }
    },
    [disabled2, multi, selectedKeys, updateSelection]
  );
  const selectAll = useCallback(
    (keys) => {
      if (disabled2)
        return;
      updateSelection(multi ? keys : keys[0]);
    },
    [disabled2, multi, updateSelection]
  );
  const clearSelection = useCallback(() => {
    if (disabled2)
      return;
    updateSelection(multi ? [] : void 0);
  }, [disabled2, multi, updateSelection]);
  const isSelected = useCallback((key) => selectedKeys.includes(key), [selectedKeys]);
  return {
    selectedKeys,
    isSelected,
    toggle,
    selectAll,
    clearSelection
  };
};
forwardRef(function DynListView2({
  items = [],
  data = [],
  // legacy alias
  value: value2,
  defaultValue,
  multiSelect = false,
  selectable = false,
  disabled: disabled2 = false,
  loading: loading2 = false,
  emptyText = "No data available",
  actions: actions2 = [],
  renderItem,
  size,
  height,
  bordered: bordered2 = false,
  selectedKeys,
  itemKey,
  onChange,
  onSelectionChange,
  className,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "data-testid": dataTestId,
  ...rest
}, ref) {
  const listItems = items.length > 0 ? items : data;
  const [internalId] = useState(() => id || generateId("listview"));
  const rootRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState({});
  const toggleItemExpansion = useCallback((key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);
  const itemIds = useMemo(
    () => listItems.map((_, i) => `${internalId}-option-${i}`),
    [listItems, internalId]
  );
  const uniqueItemKeys = useMemo(
    () => createUniqueKeys(listItems, itemKey),
    [itemKey, listItems]
  );
  const keyToItemMap = useMemo(
    () => createKeyToItemMap(listItems, uniqueItemKeys),
    [listItems, uniqueItemKeys]
  );
  const getItemsByKeys = useCallback(
    (keys) => keys.map((key) => keyToItemMap.get(key)).filter((item2) => Boolean(item2)),
    [keyToItemMap]
  );
  const selection = useSelectionManager({
    multi: multiSelect || selectable,
    disabled: disabled2,
    controlledValue: selectedKeys ?? value2,
    defaultValue,
    onChange,
    onSelectionChange,
    getSelectedItems: getItemsByKeys
  });
  const { selectAll: selectAllKeys, clearSelection } = selection;
  const allKeys = uniqueItemKeys;
  useImperativeHandle(
    ref,
    () => {
      const node = rootRef.current;
      if (!node) {
        return null;
      }
      const handle = node;
      handle.selectAll = () => {
        if (!allKeys.length)
          return;
        selectAllKeys(allKeys);
      };
      handle.clearSelection = () => {
        clearSelection();
      };
      return handle;
    },
    [allKeys, clearSelection, selectAllKeys]
  );
  const moveActive = (delta) => {
    const count = listItems.length;
    if (!count)
      return;
    setActiveIndex((idx) => (idx + delta + count) % count);
  };
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        moveActive(1);
        break;
      case "ArrowUp":
        e.preventDefault();
        moveActive(-1);
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(Math.max(0, listItems.length - 1));
        break;
      case "Enter":
      case " ": {
        e.preventDefault();
        const item2 = listItems[activeIndex];
        if (item2) {
          const key = uniqueItemKeys[activeIndex];
          if (key) {
            selection.toggle(key);
          }
        }
        break;
      }
    }
  };
  const rootClasses = cn(
    "dyn-list-view",
    getStyleClass$2("root"),
    size === "small" && [getStyleClass$2("rootSmall"), "dyn-list-view--small"],
    size === "large" && [getStyleClass$2("rootLarge"), "dyn-list-view--large"],
    bordered2 && [getStyleClass$2("rootBordered"), "dyn-list-view--bordered"],
    className
  );
  const rootStyle = height ? {
    height: typeof height === "number" ? `${height}px` : String(height)
  } : void 0;
  const allChecked = (multiSelect || selectable) && allKeys.length > 0 && allKeys.every((key) => selection.isSelected(key));
  const computedAriaLabel = ariaLabel ?? (ariaLabelledBy ? void 0 : "List view");
  const selectAllButtonLabel = allChecked ? "Deselect all items" : "Select all items";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: rootRef,
      id: internalId,
      role: "listbox",
      "aria-multiselectable": multiSelect || selectable || void 0,
      "aria-label": computedAriaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-activedescendant": listItems[activeIndex] ? itemIds[activeIndex] : void 0,
      className: rootClasses,
      "data-testid": dataTestId || "dyn-listview",
      tabIndex: 0,
      onKeyDown: handleKeyDown,
      style: rootStyle,
      ...rest,
      children: [
        (multiSelect || selectable) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$2("bulkActions"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            className: cn(getStyleClass$2("option"), getStyleClass$2("bulkActions__button")),
            "aria-pressed": allChecked,
            "aria-label": selectAllButtonLabel,
            onClick: () => selection.selectAll(allChecked ? [] : allKeys),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  "aria-hidden": "true",
                  className: cn(
                    getStyleClass$2("option__checkbox"),
                    allChecked && getStyleClass$2("option__checkbox--checked")
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$2("option__label"), children: "Select All" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$2("visuallyHidden"), children: allChecked ? "All items selected" : "No items selected" })
            ]
          }
        ) }),
        loading2 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "status", className: getStyleClass$2("loading"), children: "Loading..." }) : listItems.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "note", className: getStyleClass$2("empty"), children: emptyText }) : listItems.map((item2, i) => {
          const key = uniqueItemKeys[i];
          const selectedState = selection.isSelected(key);
          const title2 = item2.title ?? item2.label ?? item2.value ?? String(item2.id ?? i + 1);
          const desc = item2.description;
          const complex = isComplexItem(item2);
          const labelId = `${itemIds[i]}-label`;
          const descriptionId = desc ? `${itemIds[i]}-description` : void 0;
          const usesDefaultRenderer = !renderItem;
          const optionLabelledBy = usesDefaultRenderer ? labelId : void 0;
          const optionDescribedBy = usesDefaultRenderer && desc ? descriptionId : void 0;
          const isExpandable = complex;
          const usesTitleAsExpandTrigger = isExpandable && usesDefaultRenderer;
          const renderSeparateExpandControl = isExpandable && !usesDefaultRenderer;
          const isExpanded = !!expanded[key];
          const hasActions = actions2 && actions2.length > 0;
          const shouldRenderControls = hasActions || renderSeparateExpandControl;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: cn(
                getStyleClass$2("option"),
                selectedState && getStyleClass$2("option--selected"),
                i === activeIndex && getStyleClass$2("option--active"),
                item2.disabled && getStyleClass$2("option--disabled")
              ),
              onMouseEnter: () => !item2.disabled && setActiveIndex(i),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    id: itemIds[i],
                    role: "option",
                    "aria-selected": selectedState,
                    "aria-disabled": item2.disabled || void 0,
                    "aria-labelledby": optionLabelledBy,
                    "aria-describedby": optionDescribedBy,
                    className: getStyleClass$2("option__main"),
                    onMouseDown: (e) => e.preventDefault(),
                    onClick: () => !item2.disabled && selection.toggle(key),
                    children: [
                      (selectable || multiSelect) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          "aria-hidden": "true",
                          className: cn(
                            getStyleClass$2("option__checkbox"),
                            selectedState && getStyleClass$2("option__checkbox--checked")
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$2("option__content"), children: renderItem ? renderItem(item2, i) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        usesTitleAsExpandTrigger ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            id: labelId,
                            className: cn(
                              getStyleClass$2("option__label"),
                              getStyleClass$2("option__label--expandable"),
                              isExpanded && getStyleClass$2("option__label--expanded")
                            ),
                            onClick: (event) => {
                              event.stopPropagation();
                              toggleItemExpansion(key);
                            },
                            "aria-expanded": isExpanded,
                            children: title2
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { id: labelId, className: getStyleClass$2("option__label"), children: title2 }),
                        desc && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            id: descriptionId,
                            className: getStyleClass$2("option__description"),
                            children: desc
                          }
                        )
                      ] }) })
                    ]
                  }
                ),
                shouldRenderControls && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: getStyleClass$2("option__controls"),
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      renderSeparateExpandControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "aria-expanded": isExpanded,
                          "aria-label": `${isExpanded ? "Collapse" : "Expand"} details for ${title2}`,
                          className: cn(
                            getStyleClass$2("actionButton"),
                            getStyleClass$2("actionButtonDefault"),
                            getStyleClass$2("option__expandButton")
                          ),
                          onClick: (event) => {
                            event.stopPropagation();
                            toggleItemExpansion(key);
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: getStyleClass$2("option__expandButtonIcon"), children: isExpanded ? "▴" : "▾" })
                        }
                      ),
                      hasActions && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$2("option__actions"), children: actions2.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          className: cn(
                            getStyleClass$2("actionButton"),
                            getActionButtonVariantClass(action.type)
                          ),
                          onClick: () => action.onClick(item2, i),
                          title: action.title,
                          children: action.title
                        },
                        action.key
                      )) })
                    ]
                  }
                ),
                isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$2("option__details"), children: Object.entries(item2).map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                    k,
                    ":"
                  ] }),
                  " ",
                  String(v)
                ] }, k)) })
              ]
            },
            key
          );
        })
      ]
    }
  );
});
const menubar = "dyn-h8quQ";
const menubarHorizontal = "dyn-xjLd2";
const menubarVertical = "dyn-idjaZ";
const menubarItem = "dyn-d7hA8";
const menubarButton = "dyn-Jdow9";
const menubarButtonOpen = "dyn-w2QSx";
const menubarDivider = "dyn-HPjJ1";
const menu = "dyn-s7-eL";
const menuItem = "dyn-tI9Yp";
const styles$8 = {
  menubar,
  menubarHorizontal,
  menubarVertical,
  menubarItem,
  menubarButton,
  menubarButtonOpen,
  menubarDivider,
  menu,
  menuItem
};
const root$1 = "dyn-aZrWc";
const backgroundPage = "dyn--uvwz";
const backgroundSurface = "dyn-NuEbo";
const isLoading = "dyn-VAfOS";
const isError = "dyn-1B2-z";
const loading = "dyn-9sWSq";
const spinner = "dyn-NMYH9";
const dynSpin = "dyn--0nB4";
const error = "dyn-IUCR-";
const errorIcon = "dyn-vuERt";
const errorMessage = "dyn-MTpx-";
const header = "dyn-GJr97";
const breadcrumbs = "dyn-rY0nk";
const breadcrumbList = "dyn-IksID";
const breadcrumbItem = "dyn-9kPDL";
const breadcrumbLink = "dyn-qk7sz";
const breadcrumbText = "dyn-K6ufn";
const breadcrumbSeparator = "dyn-fI-AU";
const titleSection = "dyn-SvRI-";
const titleContent = "dyn-linQP";
const title = "dyn-hPGoG";
const subtitle = "dyn-RVg9y";
const actions = "dyn-fzRfj";
const content$1 = "dyn-1o0Hj";
const sizeSmall$2 = "dyn-9xnL6";
const sizeLarge$2 = "dyn-5kXUU";
const paddingNone = "dyn--WL1v";
const paddingXs = "dyn-0OObj";
const paddingSm = "dyn-KzWVZ";
const paddingMd = "dyn-8E7Pu";
const paddingLg = "dyn-ligvY";
const paddingXl = "dyn-Vq016";
const styles$7 = {
  root: root$1,
  backgroundPage,
  backgroundSurface,
  isLoading,
  isError,
  loading,
  spinner,
  dynSpin,
  error,
  errorIcon,
  errorMessage,
  header,
  breadcrumbs,
  breadcrumbList,
  breadcrumbItem,
  breadcrumbLink,
  breadcrumbText,
  breadcrumbSeparator,
  titleSection,
  titleContent,
  title,
  subtitle,
  actions,
  content: content$1,
  sizeSmall: sizeSmall$2,
  sizeLarge: sizeLarge$2,
  paddingNone,
  paddingXs,
  paddingSm,
  paddingMd,
  paddingLg,
  paddingXl
};
const DynPage = ({
  title: title2,
  subtitle: subtitle2,
  breadcrumbs: breadcrumbs2 = [],
  actions: actions2 = [],
  children,
  loading: loading2 = false,
  error: error2,
  size = "medium",
  padding = "md",
  background = "page",
  className,
  id,
  "data-testid": testId
}) => {
  const sizeClass = size === "small" ? styles$7.sizeSmall : size === "large" ? styles$7.sizeLarge : void 0;
  const paddingClass = padding === "none" ? styles$7.paddingNone : padding === "xs" ? styles$7.paddingXs : padding === "sm" ? styles$7.paddingSm : padding === "lg" ? styles$7.paddingLg : padding === "xl" ? styles$7.paddingXl : styles$7.paddingMd;
  const backgroundClass = background === "page" ? styles$7.backgroundPage : background === "surface" ? styles$7.backgroundSurface : void 0;
  const pageClasses = classNames$2(
    styles$7.root,
    sizeClass,
    paddingClass,
    backgroundClass,
    {
      [styles$7.isLoading]: loading2,
      [styles$7.isError]: !!error2
    },
    "dyn-page",
    className
  );
  const renderBreadcrumbs = () => {
    if (breadcrumbs2.length === 0)
      return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: styles$7.breadcrumbs, "aria-label": "Navegação", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: styles$7.breadcrumbList, children: breadcrumbs2.map((breadcrumb2, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: styles$7.breadcrumbItem, children: [
      breadcrumb2.href || breadcrumb2.onClick ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: breadcrumb2.href,
          onClick: (e) => {
            if (breadcrumb2.onClick) {
              e.preventDefault();
              breadcrumb2.onClick();
            }
          },
          className: styles$7.breadcrumbLink,
          children: breadcrumb2.title
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$7.breadcrumbText, children: breadcrumb2.title }),
      index < breadcrumbs2.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$7.breadcrumbSeparator, "aria-hidden": "true", children: "/" })
    ] }, index)) }) });
  };
  const renderActions = () => {
    if (actions2.length === 0)
      return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$7.actions, children: actions2.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      DynButton,
      {
        kind: action.type ?? "secondary",
        size: size === "large" ? "large" : "medium",
        disabled: action.disabled,
        loading: action.loading,
        onClick: action.onClick,
        icon: action.icon,
        children: action.title
      },
      action.key
    )) });
  };
  if (loading2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: pageClasses, id, "data-testid": testId, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$7.loading, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$7.spinner }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Carregando página..." })
    ] }) });
  }
  if (error2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: pageClasses, id, "data-testid": testId, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$7.error, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$7.errorIcon, children: "⚠" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: typeof error2 === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$7.errorMessage, children: error2 }) : error2 })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: pageClasses, id, "data-testid": testId, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: styles$7.header, children: [
      renderBreadcrumbs(),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$7.titleSection, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$7.titleContent, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: styles$7.title, children: title2 }),
          subtitle2 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: styles$7.subtitle, children: subtitle2 })
        ] }),
        renderActions()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: styles$7.content, children })
  ] });
};
DynPage.displayName = "DynPage";
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames2.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value2, newClass) {
      if (!newClass) {
        return value2;
      }
      if (value2) {
        return value2 + " " + newClass;
      }
      return value2 + newClass;
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
const container = "dyn-DZMxy";
const select = "dyn-Cx97u";
const selectDisabled = "dyn-jb0Ow";
const selectReadonly = "dyn--hpKe";
const selectFocused = "dyn-Fj8ZD";
const selectOpen = "dyn-v2OOm";
const selectError = "dyn-cLx72";
const selectLoading = "dyn--hL0X";
const selectSearchable = "dyn-rr2dP";
const selectMultiple = "dyn-vGbZt";
const selectSizeSmall = "dyn-3-qFU";
const selectSizeMedium = "dyn-9BknD";
const selectSizeLarge = "dyn-qzIGc";
const selectContent = "dyn-6sR8B";
const selectText = "dyn-6U4bR";
const selectPlaceholder = "dyn-3N4Db";
const tags = "dyn--IWT7";
const tag = "dyn-NehRP";
const tagRemove = "dyn-HFmgE";
const arrow = "dyn-hhAlv";
const arrowUp = "dyn-K6VCZ";
const dropdown = "dyn-vF6RV";
const search = "dyn-WIbLM";
const searchInput$1 = "dyn-I9gYv";
const options = "dyn-DLddJ";
const option = "dyn-UjHWJ";
const optionDisabled = "dyn-dGtOz";
const optionSelected = "dyn-TuYr9";
const optionText = "dyn-tAPIy";
const checkbox = "dyn-4IqU3";
const checkboxChecked = "dyn-t8C8m";
const emptyState = "dyn-X7hqo";
const styles$6 = {
  container,
  select,
  selectDisabled,
  selectReadonly,
  selectFocused,
  selectOpen,
  selectError,
  selectLoading,
  selectSearchable,
  selectMultiple,
  selectSizeSmall,
  selectSizeMedium,
  selectSizeLarge,
  selectContent,
  selectText,
  selectPlaceholder,
  tags,
  tag,
  tagRemove,
  arrow,
  arrowUp,
  dropdown,
  search,
  searchInput: searchInput$1,
  options,
  option,
  optionDisabled,
  optionSelected,
  optionText,
  checkbox,
  checkboxChecked,
  emptyState
};
const getStyleClass$1 = (classKey) => styles$6[classKey];
const DynSelect = forwardRef(
  ({
    id: idProp,
    name,
    label: label2,
    help: help2,
    placeholder = "Selecione...",
    disabled: disabled2 = false,
    readonly = false,
    required: required2 = false,
    optional: optional2 = false,
    visible = true,
    value: propValue,
    errorMessage: errorMessage2,
    validation,
    className,
    options: options2 = [],
    multiple = false,
    searchable = false,
    virtualScroll = false,
    loading: loading2 = false,
    size = "medium",
    onChange,
    onBlur,
    onFocus
  }, ref) => {
    const [value2, setValue] = useState(propValue || (multiple ? [] : ""));
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [focused, setFocused] = useState(false);
    const selectRef = useRef(null);
    const inputRef = useRef(null);
    const generatedId = useId();
    const sanitizedGeneratedId = generatedId.replace(/:/g, "");
    const fieldId = idProp ?? name ?? `dyn-select-${sanitizedGeneratedId}`;
    const labelId = label2 ? `${fieldId}-label` : void 0;
    const listboxId = `${fieldId}-listbox`;
    const { error: error2, validate, clearError } = useDynFieldValidation({
      value: value2,
      required: required2,
      validation,
      customError: errorMessage2
    });
    useImperativeHandle(ref, () => ({
      focus: () => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.focus();
      },
      validate: () => validate(),
      clear: () => {
        setValue(multiple ? [] : "");
        onChange == null ? void 0 : onChange(multiple ? [] : "");
        clearError();
      },
      getValue: () => value2,
      setValue: (newValue) => {
        setValue(newValue);
        onChange == null ? void 0 : onChange(newValue);
      }
    }));
    const filteredOptions = useMemo(() => {
      if (!searchable || !searchTerm)
        return options2;
      return options2.filter(
        (option2) => option2.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }, [options2, searchTerm, searchable]);
    const selectedOptions = useMemo(() => {
      if (multiple && Array.isArray(value2)) {
        return options2.filter((option2) => value2.includes(option2.value));
      } else if (!multiple) {
        return options2.find((option2) => option2.value === value2) || null;
      }
      return null;
    }, [options2, value2, multiple]);
    useEffect(() => {
      setValue(propValue || (multiple ? [] : ""));
    }, [propValue, multiple]);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };
      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen]);
    const handleToggle = () => {
      var _a;
      if (!disabled2 && !readonly) {
        setIsOpen((prev) => !prev);
        if (!isOpen) {
          (_a = inputRef.current) == null ? void 0 : _a.focus();
        }
      }
    };
    const handleOptionSelect = (option2) => {
      if (option2.disabled)
        return;
      if (multiple && Array.isArray(value2)) {
        const newValue = value2.includes(option2.value) ? value2.filter((v) => v !== option2.value) : [...value2, option2.value];
        setValue(newValue);
        onChange == null ? void 0 : onChange(newValue);
      } else {
        setValue(option2.value);
        onChange == null ? void 0 : onChange(option2.value);
        setIsOpen(false);
        setSearchTerm("");
      }
      clearError();
    };
    const handleRemoveOption = (optionValue, event) => {
      event.stopPropagation();
      if (multiple && Array.isArray(value2)) {
        const newValue = value2.filter((v) => v !== optionValue);
        setValue(newValue);
        onChange == null ? void 0 : onChange(newValue);
      }
    };
    const handleBlur = () => {
      setFocused(false);
      validate();
      onBlur == null ? void 0 : onBlur();
    };
    const handleFocus = () => {
      setFocused(true);
      clearError();
      onFocus == null ? void 0 : onFocus();
    };
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Enter":
        case " ":
          if (!isOpen) {
            e.preventDefault();
            setIsOpen(true);
          }
          break;
        case "Escape":
          setIsOpen(false);
          setSearchTerm("");
          break;
        case "ArrowDown":
          if (!isOpen) {
            setIsOpen(true);
          }
          break;
      }
    };
    if (!visible)
      return null;
    const resolvedError = errorMessage2 ?? (error2 || void 0);
    const sizeClassName = (() => {
      const capitalizedSize = size.charAt(0).toUpperCase() + size.slice(1);
      const key = `selectSize${capitalizedSize}`;
      return styles$6[key];
    })();
    const selectClasses = classNames(
      getStyleClass$1("select"),
      sizeClassName,
      {
        [getStyleClass$1("selectOpen")]: isOpen,
        [getStyleClass$1("selectFocused")]: focused,
        [getStyleClass$1("selectError")]: Boolean(resolvedError),
        [getStyleClass$1("selectDisabled")]: disabled2,
        [getStyleClass$1("selectReadonly")]: readonly,
        [getStyleClass$1("selectSearchable")]: searchable,
        [getStyleClass$1("selectMultiple")]: multiple,
        [getStyleClass$1("selectLoading")]: loading2
      }
    );
    const getDisplayText = () => {
      if (loading2)
        return "Carregando...";
      if (multiple && Array.isArray(selectedOptions) && selectedOptions.length > 0) {
        return `${selectedOptions.length} selecionado(s)`;
      } else if (!multiple && selectedOptions) {
        return selectedOptions.label;
      }
      return placeholder;
    };
    const showPlaceholder = !selectedOptions || multiple && Array.isArray(selectedOptions) && selectedOptions.length === 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DynFieldContainer,
      {
        id: idProp,
        label: label2,
        helpText: help2,
        required: required2,
        optional: optional2,
        errorText: resolvedError,
        className,
        htmlFor: fieldId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: selectRef, className: getStyleClass$1("container"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: selectClasses,
              onClick: handleToggle,
              onKeyDown: handleKeyDown,
              tabIndex: disabled2 ? -1 : 0,
              role: "combobox",
              "aria-expanded": isOpen,
              "aria-haspopup": "listbox",
              "aria-invalid": Boolean(resolvedError),
              "aria-disabled": disabled2 || void 0,
              "aria-readonly": readonly || void 0,
              "aria-labelledby": labelId,
              "aria-controls": isOpen ? listboxId : void 0,
              "aria-describedby": resolvedError ? `${fieldId}-error` : help2 ? `${fieldId}-help` : void 0,
              onBlur: handleBlur,
              onFocus: handleFocus,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: inputRef,
                    type: "hidden",
                    id: fieldId,
                    name,
                    value: multiple && Array.isArray(value2) ? value2.join(",") : value2 || ""
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$1("selectContent"), children: multiple && Array.isArray(selectedOptions) && selectedOptions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$1("tags"), children: selectedOptions.map((option2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: getStyleClass$1("tag"), children: [
                  option2.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: getStyleClass$1("tagRemove"),
                      onClick: (e) => handleRemoveOption(option2.value, e),
                      "aria-label": `Remover ${option2.label}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: "dyn-icon-close" })
                    }
                  )
                ] }, option2.value)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames(getStyleClass$1("selectText"), {
                  [getStyleClass$1("selectPlaceholder")]: showPlaceholder
                }), children: getDisplayText() }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$1("arrow"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DynIcon,
                  {
                    icon: loading2 ? "dyn-icon-loading" : "dyn-icon-arrow-down",
                    className: classNames({
                      [getStyleClass$1("arrowUp")]: isOpen && !loading2
                    })
                  }
                ) })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getStyleClass$1("dropdown"), children: [
            searchable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass$1("search"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Pesquisar...",
                value: searchTerm,
                onChange: handleSearchChange,
                className: getStyleClass$1("searchInput"),
                "aria-label": "Pesquisar opções"
              }
            ) }),
            filteredOptions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: getStyleClass$1("emptyState"),
                role: "status",
                "aria-live": "polite",
                children: searchTerm ? "Nenhum resultado encontrado" : "Nenhuma opção disponível"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: getStyleClass$1("options"),
                role: "listbox",
                id: listboxId,
                "aria-multiselectable": multiple || void 0,
                children: filteredOptions.map((option2) => {
                  const isSelected = multiple && Array.isArray(value2) ? value2.includes(option2.value) : value2 === option2.value;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: classNames(getStyleClass$1("option"), {
                        [getStyleClass$1("optionSelected")]: isSelected,
                        [getStyleClass$1("optionDisabled")]: option2.disabled
                      }),
                      role: "option",
                      "aria-selected": isSelected,
                      "aria-disabled": option2.disabled || void 0,
                      onClick: () => handleOptionSelect(option2),
                      children: [
                        multiple && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classNames(getStyleClass$1("checkbox"), {
                          [getStyleClass$1("checkboxChecked")]: isSelected
                        }), children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: "dyn-icon-check" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass$1("optionText"), children: option2.label })
                      ]
                    },
                    option2.value
                  );
                })
              }
            )
          ] })
        ] })
      }
    );
  }
);
DynSelect.displayName = "DynSelect";
const root = "dyn-JZco-";
const orientationHorizontal = "dyn-erWmj";
const list = "dyn-MaHKz";
const orientationVertical = "dyn-2VE7v";
const sizeSmall$1 = "dyn-FkTRY";
const sizeMedium$1 = "dyn-1kwYm";
const sizeLarge$1 = "dyn-6b8cL";
const item = "dyn-SSy8O";
const itemCurrent = "dyn-7pAhI";
const itemCompleted = "dyn-opuZ7";
const itemError = "dyn-34Epu";
const itemDisabled = "dyn-9Fuja";
const button = "dyn-Hv46b";
const buttonDisabled = "dyn-ZLVCi";
const buttonIndex = "dyn-CMEw6";
const buttonLabel = "dyn-V32e3";
const variantNumbered = "dyn-zuM8W";
const variantDots = "dyn-ZAgTK";
const variantProgress = "dyn-e1haJ";
const variantTabs = "dyn-g3g4o";
const description = "dyn-oxBzr";
const optional = "dyn-Vvxdg";
const progressBar = "dyn-pGldW";
const progressFill = "dyn-zN-2p";
const panel$1 = "dyn-3nhxg";
const panelHidden = "dyn-7cIvz";
const dynStepper = "dyn-vFvnA";
const stepsList = "dyn-7AwzD";
const step = "dyn-L2MkJ";
const stepIconContainer = "dyn-lqI1H";
const stepTitle = "dyn-vfi-V";
const stepDescription = "dyn-HZi0y";
const stepContent = "dyn-0N5G0";
const statusActive = "dyn-fiCnj";
const statusCompleted = "dyn-ZHqj6";
const statusError = "dyn-IAkEw";
const statusDisabled = "dyn-pN3mr";
const styles$5 = {
  root,
  orientationHorizontal,
  list,
  orientationVertical,
  sizeSmall: sizeSmall$1,
  sizeMedium: sizeMedium$1,
  sizeLarge: sizeLarge$1,
  item,
  itemCurrent,
  itemCompleted,
  itemError,
  itemDisabled,
  button,
  buttonDisabled,
  buttonIndex,
  buttonLabel,
  variantNumbered,
  variantDots,
  variantProgress,
  variantTabs,
  description,
  optional,
  progressBar,
  progressFill,
  panel: panel$1,
  panelHidden,
  dynStepper,
  stepsList,
  step,
  stepIconContainer,
  stepTitle,
  stepDescription,
  stepContent,
  statusActive,
  statusCompleted,
  statusError,
  statusDisabled
};
const getStyleClass = (n) => styles$5[n] || "";
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function valueToIndex(value2, steps) {
  if (value2 === void 0)
    return 0;
  if (typeof value2 === "number") {
    return Math.max(0, Math.min(value2, steps.length - 1));
  }
  const index = steps.findIndex((step2) => step2.id === value2);
  return index >= 0 ? index : 0;
}
const DynStepper = forwardRef(
  ({
    steps = [],
    // New API
    activeStep: controlledActiveStep,
    defaultActiveStep = 0,
    // Legacy API - maintain backward compatibility
    value: controlledValue,
    defaultValue = 0,
    // Common props
    linear = true,
    onChange,
    onStepChange,
    onStepClick,
    clickableSteps = true,
    orientation = "horizontal",
    variant = "tabs",
    size = "medium",
    showLabels: showLabels2 = true,
    showDescription = false,
    className,
    contentClassName,
    renderStepContent,
    renderStepIcon,
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "data-testid": dataTestId,
    stepClassName,
    ...rest
  }, ref) => {
    const [internalId] = useState(() => id || generateId("stepper"));
    const isControlledByActiveStep = controlledActiveStep !== void 0;
    const isControlledByValue = controlledValue !== void 0;
    const isControlled = isControlledByActiveStep || isControlledByValue;
    const getInitialStep = () => {
      if (isControlledByActiveStep)
        return controlledActiveStep;
      if (isControlledByValue)
        return valueToIndex(controlledValue, steps);
      if (defaultActiveStep !== 0)
        return defaultActiveStep;
      return valueToIndex(defaultValue, steps);
    };
    const [internalActiveStep, setInternalActiveStep] = useState(getInitialStep);
    const getCurrentActiveStep = () => {
      if (isControlledByActiveStep)
        return controlledActiveStep;
      if (isControlledByValue)
        return valueToIndex(controlledValue, steps);
      return internalActiveStep;
    };
    const activeStep = getCurrentActiveStep();
    useEffect(() => {
      if (isControlledByActiveStep) {
        return;
      }
      if (isControlledByValue) {
        const newIndex = valueToIndex(controlledValue, steps);
        if (newIndex !== internalActiveStep) {
          setInternalActiveStep(newIndex);
        }
      }
    }, [controlledValue, isControlledByActiveStep, isControlledByValue, steps, internalActiveStep]);
    if (!steps || steps.length === 0)
      return null;
    const maxIndex = steps.length - 1;
    const clampedActiveStep = clamp(activeStep, 0, maxIndex);
    const notifyChange = useCallback((newIndex, step2) => {
      if (onChange) {
        if (isControlledByValue && typeof controlledValue === "string") {
          onChange(step2.id, step2, newIndex);
        } else {
          onChange(newIndex, step2, newIndex);
        }
      }
      onStepChange == null ? void 0 : onStepChange(newIndex, step2);
    }, [onChange, onStepChange, controlledValue, isControlledByValue]);
    const nextStep = useCallback(() => {
      if (clampedActiveStep >= steps.length - 1)
        return false;
      const newStep = clampedActiveStep + 1;
      if (!isControlled)
        setInternalActiveStep(newStep);
      notifyChange(newStep, steps[newStep]);
      return true;
    }, [clampedActiveStep, steps.length, isControlled, notifyChange, steps]);
    const prevStep = useCallback(() => {
      if (clampedActiveStep <= 0)
        return false;
      const newStep = clampedActiveStep - 1;
      if (!isControlled)
        setInternalActiveStep(newStep);
      notifyChange(newStep, steps[newStep]);
      return true;
    }, [clampedActiveStep, isControlled, notifyChange, steps]);
    const goToStep = useCallback((stepIndex) => {
      const clampedIndex = clamp(stepIndex, 0, maxIndex);
      if (linear && clampedIndex > clampedActiveStep + 1)
        return false;
      if (isStepDisabled(clampedIndex))
        return false;
      if (!isControlled)
        setInternalActiveStep(clampedIndex);
      notifyChange(clampedIndex, steps[clampedIndex]);
      return true;
    }, [clampedActiveStep, maxIndex, linear, isControlled, notifyChange, steps]);
    const getCurrentStep = useCallback(() => {
      return clampedActiveStep;
    }, [clampedActiveStep]);
    const getStepData = useCallback((stepIndex) => {
      return steps[stepIndex];
    }, [steps]);
    const validateStep = useCallback((stepIndex) => {
      const step2 = steps[stepIndex];
      if (!step2)
        return false;
      if (step2.validator) {
        return step2.validator(step2);
      }
      return !step2.error && !step2.disabled;
    }, [steps]);
    const completeStep = useCallback((stepIndex) => {
      const step2 = steps[stepIndex];
      if (step2) {
        step2.completed = true;
        step2.status = "completed";
        step2.state = "completed";
      }
    }, [steps]);
    const errorStep = useCallback((stepIndex, hasError) => {
      const step2 = steps[stepIndex];
      if (step2) {
        step2.error = hasError;
        step2.status = hasError ? "error" : "inactive";
        step2.state = hasError ? "error" : "pending";
      }
    }, [steps]);
    useImperativeHandle(ref, () => ({
      nextStep,
      prevStep,
      goToStep,
      getCurrentStep,
      getStepData,
      validateStep,
      completeStep,
      errorStep
    }), [nextStep, prevStep, goToStep, getCurrentStep, getStepData, validateStep, completeStep, errorStep]);
    const isStepDisabled = (index) => {
      const step2 = steps[index];
      if (step2 == null ? void 0 : step2.disabled)
        return true;
      if (linear && index > clampedActiveStep + 1)
        return true;
      return false;
    };
    const getRootRole = () => {
      if (variant === "tabs")
        return "tablist";
      return "group";
    };
    const getRootClassName = () => {
      const classes = [getStyleClass("root")];
      if (orientation)
        classes.push(`orientation-${orientation}`);
      if (variant)
        classes.push(`variant-${variant}`);
      if (size)
        classes.push(`size-${size}`);
      if (className)
        classes.push(className);
      return cn(...classes);
    };
    const getItemClassName = (index) => {
      const classes = [getStyleClass("item"), "step"];
      const step2 = steps[index];
      if (index === clampedActiveStep) {
        classes.push(getStyleClass("item--current"), "item--current", "status-active");
      }
      if ((step2 == null ? void 0 : step2.completed) || (step2 == null ? void 0 : step2.state) === "completed" || index < clampedActiveStep) {
        classes.push(getStyleClass("item--completed"), "item--completed", "status-completed");
      }
      if ((step2 == null ? void 0 : step2.error) || (step2 == null ? void 0 : step2.state) === "error") {
        classes.push(getStyleClass("item--error"), "item--error", "status-error");
      }
      if ((step2 == null ? void 0 : step2.disabled) || isStepDisabled(index)) {
        classes.push(getStyleClass("item--disabled"), "item--disabled");
      }
      return cn(...classes);
    };
    const getButtonClassName = (index) => {
      const classes = [getStyleClass("button")];
      if (stepClassName)
        classes.push(stepClassName);
      if (isStepDisabled(index)) {
        classes.push(getStyleClass("button--disabled"), "button--disabled");
      }
      return cn(...classes);
    };
    const getPanelClassName = (index) => {
      const classes = [getStyleClass("panel")];
      if (index !== clampedActiveStep)
        classes.push(getStyleClass("panel--hidden"));
      return cn(...classes);
    };
    const getStepId = (index) => `${internalId}-step-${index}`;
    const getPanelId = (index) => `${internalId}-panel-${index}`;
    const getStepDescId = (index) => `${internalId}-step-${index}-desc`;
    const handleStepClick = (index) => {
      if (!clickableSteps || isStepDisabled(index))
        return;
      const step2 = steps[index];
      const clickResult = onStepClick == null ? void 0 : onStepClick(index, step2);
      if (clickResult === false)
        return;
      if (linear && index > clampedActiveStep + 1)
        return;
      if (!isControlled)
        setInternalActiveStep(index);
      notifyChange(index, step2);
    };
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          nextStep();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          prevStep();
          break;
        case "Home":
          e.preventDefault();
          goToStep(0);
          break;
        case "End":
          e.preventDefault();
          goToStep(maxIndex);
          break;
      }
    };
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        id: internalId,
        role: getRootRole(),
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        className: getRootClassName(),
        "data-testid": dataTestId || "dyn-stepper",
        onKeyDown: handleKeyDown,
        ...rest,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: getStyleClass("list"), role: variant === "tabs" ? "presentation" : void 0, children: steps.map((step2, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: getItemClassName(index), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": step2.title ? `${step2.title} ${step2.title}` : void 0,
                "aria-current": index === clampedActiveStep ? "step" : void 0,
                "aria-selected": variant === "tabs" ? index === clampedActiveStep : void 0,
                className: getButtonClassName(index),
                id: getStepId(index),
                type: "button",
                onClick: () => handleStepClick(index),
                disabled: isStepDisabled(index),
                "aria-describedby": step2.description && showDescription ? getStepDescId(index) : void 0,
                title: step2.tooltip,
                children: renderStepIcon ? renderStepIcon(step2, index, index === clampedActiveStep) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  step2.icon && typeof step2.icon === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: step2.icon, className: getStyleClass("icon") }) : null,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: getStyleClass("button__index"), children: index + 1 }),
                  showLabels2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass("button__label"), children: step2.title || step2.label || `Step ${index + 1}` })
                ] })
              }
            ),
            step2.description && showDescription && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getStyleClass("description"), id: getStepDescId(index), children: step2.description }),
            step2.optional && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStyleClass("optional"), children: "(optional)" })
          ] }, step2.id || index)) }),
          variant === "progress" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              role: "progressbar",
              "aria-valuenow": Math.round((clampedActiveStep + 1) / steps.length * 100),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              className: getStyleClass("progressBar"),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: getStyleClass("progressFill"),
                  style: { width: `${(clampedActiveStep + 1) / steps.length * 100}%` }
                }
              )
            }
          ),
          steps.map((step2, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "section",
            {
              className: cn(getPanelClassName(index), "step-content", contentClassName || ""),
              id: getPanelId(index),
              role: variant === "tabs" ? "tabpanel" : "region",
              tabIndex: -1,
              hidden: index !== clampedActiveStep,
              children: renderStepContent ? renderStepContent(step2, index) : typeof step2.content === "function" ? step2.content({ index, selected: index === clampedActiveStep }) : step2.content
            },
            step2.id || index
          ))
        ]
      }
    );
  }
);
DynStepper.displayName = "DynStepper";
const dynTable = "dyn-C1BqY";
const dynTableWrapper = "dyn-aFvJy";
const dynTableFixedHeight = "dyn-a3cd8";
const dynTableTable = "dyn-6jn5w";
const dynTableHead = "dyn-esMhW";
const dynTableBody = "dyn-75E-h";
const dynTableRow = "dyn-8rSu9";
const dynTableHoverable = "dyn-jc27p";
const dynTableRowSelected = "dyn-zEs39";
const dynTableStriped = "dyn-4WG2m";
const dynTableCell = "dyn-a8R-h";
const dynTableCellHeader = "dyn-SeEgx";
const dynTableCellSelection = "dyn-MENG6";
const dynTableCellActions = "dyn-Ehdlr";
const dynTableCellSortable = "dyn-r-h0B";
const dynTableCellSorted = "dyn-q3Klp";
const dynTableCellLeft = "dyn-fbzSz";
const dynTableCellCenter = "dyn-LUufC";
const dynTableCellRight = "dyn-Hq5sW";
const dynTableCellContent = "dyn-hmzIy";
const dynTableSortButton = "dyn-At3lv";
const dynTableSortIcons = "dyn-dp-ly";
const dynTableSortIcon = "dyn-fl-F8";
const dynTableSortIconActive = "dyn-ADV1P";
const dynTableIcon = "dyn-NAMEU";
const dynTableActions = "dyn-4j9uP";
const dynTableActionButton = "dyn-TkmFt";
const dynTableSmall = "dyn-i0h8Q";
const dynTableLarge = "dyn-UpJYq";
const dynTableLoading = "dyn-iQ2AJ";
const dynTableEmpty = "dyn-lVHHC";
const dynTablePagination = "dyn-blmK-";
const dynTablePaginationInfo = "dyn-9PkeY";
const dynTablePaginationControls = "dyn-FjTq0";
const dynTablePaginationButton = "dyn-srNRU";
const dynTablePaginationCurrent = "dyn-2Ml5e";
const dynTableBordered = "dyn-uAVfi";
const styles$4 = {
  dynTable,
  dynTableWrapper,
  dynTableFixedHeight,
  dynTableTable,
  dynTableHead,
  dynTableBody,
  dynTableRow,
  dynTableHoverable,
  dynTableRowSelected,
  dynTableStriped,
  dynTableCell,
  dynTableCellHeader,
  dynTableCellSelection,
  dynTableCellActions,
  dynTableCellSortable,
  dynTableCellSorted,
  dynTableCellLeft,
  dynTableCellCenter,
  dynTableCellRight,
  dynTableCellContent,
  dynTableSortButton,
  dynTableSortIcons,
  dynTableSortIcon,
  dynTableSortIconActive,
  dynTableIcon,
  dynTableActions,
  dynTableActionButton,
  dynTableSmall,
  dynTableLarge,
  dynTableLoading,
  dynTableEmpty,
  dynTablePagination,
  dynTablePaginationInfo,
  dynTablePaginationControls,
  dynTablePaginationButton,
  dynTablePaginationCurrent,
  dynTableBordered
};
const tabs = "dyn-KnC-N";
const tabsTop = "dyn-oLGVM";
const tabsBottom = "dyn-GhF-U";
const tabsLeft = "dyn-N2dwD";
const tabsRight = "dyn-WWb-x";
const tabsScrollable = "dyn-jIDuJ";
const tablist = "dyn-Tm-pU";
const tabCloseContainer = "dyn-6mnaa";
const tab = "dyn-vgItH";
const tabDisabled = "dyn-R-71U";
const tabSmall = "dyn-0tIlf";
const tabMedium = "dyn-JArbW";
const tabLarge = "dyn-EZxBK";
const tabDefault = "dyn-pMDYT";
const tabActive = "dyn-CUxZU";
const tabUnderlined = "dyn-qBwc3";
const tabPills = "dyn-NnFRH";
const tabBordered = "dyn-I7gfC";
const tabClosable = "dyn-Nh8dD";
const tabContent = "dyn-ImKpQ";
const tabIcon = "dyn-GgLfB";
const tabLabel = "dyn-9SCul";
const tabBadge = "dyn-dApTd";
const tabClose = "dyn-rULS6";
const tabClosePositioned = "dyn-7tFqi";
const tabAdd = "dyn-bxvZ7";
const content = "dyn-dd9xz";
const panel = "dyn-jphsN";
const panelAnimated = "dyn-ix0sc";
const fadeIn = "dyn-aRGox";
const panelLoading = "dyn-32DcZ";
const loadingSpinner = "dyn-x668J";
const spin = "dyn-MvYTe";
const styles$3 = {
  tabs,
  tabsTop,
  tabsBottom,
  tabsLeft,
  tabsRight,
  tabsScrollable,
  tablist,
  tabCloseContainer,
  tab,
  tabDisabled,
  tabSmall,
  tabMedium,
  tabLarge,
  tabDefault,
  tabActive,
  tabUnderlined,
  tabPills,
  tabBordered,
  tabClosable,
  tabContent,
  tabIcon,
  tabLabel,
  tabBadge,
  tabClose,
  tabClosePositioned,
  tabAdd,
  content,
  panel,
  panelAnimated,
  fadeIn,
  panelLoading,
  loadingSpinner,
  spin
};
const css = (n) => styles$3[n] || "";
const DynTabs = forwardRef(
  ({
    items = [],
    value: value2,
    activeTab,
    defaultValue,
    defaultActiveTab,
    onChange,
    onTabClose,
    onTabAdd,
    closable,
    addable,
    position = "top",
    orientation = "horizontal",
    activation = "auto",
    variant = "default",
    size = "medium",
    fitted = false,
    scrollable = false,
    lazy = false,
    animated: animated2 = true,
    className,
    id,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "data-testid": dataTestId,
    loadingComponent,
    ...rest
  }, ref) => {
    const [internalId] = useState(() => id || generateId("tabs"));
    const processedItems = useMemo(() => items.map((item2, index) => {
      const processedValue = item2.value != null ? String(item2.value) : item2.id != null ? String(item2.id) : `tab-${index}`;
      const processedKey = item2.id != null ? String(item2.id) : item2.value != null ? String(item2.value) : `tab-${index}`;
      return { ...item2, processedValue, processedKey };
    }), [items]);
    const controlledVal = activeTab ?? value2;
    const isControlled = controlledVal !== void 0;
    const getInitial = () => {
      if (controlledVal !== void 0)
        return String(controlledVal);
      if (defaultActiveTab !== void 0)
        return String(defaultActiveTab);
      if (defaultValue !== void 0)
        return String(defaultValue);
      const firstEnabled = processedItems.find((i) => !i.disabled) ?? processedItems[0];
      return firstEnabled == null ? void 0 : firstEnabled.processedValue;
    };
    const [current, setCurrent] = useState(getInitial());
    const [loaded, setLoaded] = useState({});
    useEffect(() => {
      if (lazy && current && loaded[current] === void 0) {
        setLoaded((prev) => ({ ...prev, [current]: false }));
      }
    }, []);
    useEffect(() => {
      if (controlledVal !== void 0)
        setCurrent(String(controlledVal));
    }, [controlledVal]);
    useEffect(() => {
      if (!processedItems.length)
        return;
      const exists = processedItems.some((i) => i.processedValue === current);
      if (!exists) {
        const firstEnabled = processedItems.find((i) => !i.disabled) ?? processedItems[0];
        setCurrent(firstEnabled == null ? void 0 : firstEnabled.processedValue);
      }
    }, [processedItems, current]);
    if (!processedItems.length) {
      return null;
    }
    const tabsRef = useRef([]);
    const tablistRef = useRef(null);
    const [closePositions, setClosePositions] = useState({});
    const onSelect = (val, focusPanel = false) => {
      var _a;
      if (!isControlled)
        setCurrent(val);
      onChange == null ? void 0 : onChange(val);
      if (lazy) {
        setLoaded((prev) => ({ ...prev, [val]: false }));
        setTimeout(() => setLoaded((prev) => ({ ...prev, [val]: true })), 50);
      }
      if (focusPanel) {
        const panel2 = document.getElementById(`${internalId}-panel-${val}`);
        (_a = panel2 == null ? void 0 : panel2.focus) == null ? void 0 : _a.call(panel2);
      }
    };
    const currentIndex = useMemo(() => {
      if (!current)
        return -1;
      return processedItems.findIndex((i) => i.processedValue === current);
    }, [processedItems, current]);
    const moveFocus = (startIndex, delta) => {
      var _a;
      const count = processedItems.length;
      if (count === 0)
        return;
      let idx = startIndex;
      for (let step2 = 0; step2 < count; step2++) {
        idx = (idx + delta + count) % count;
        const cand = processedItems[idx];
        if (!(cand == null ? void 0 : cand.disabled)) {
          onSelect(cand.processedValue);
          (_a = tabsRef.current[idx]) == null ? void 0 : _a.focus();
          return;
        }
      }
    };
    const focusTabByOffset = (delta) => {
      const count = processedItems.length;
      if (!count)
        return;
      const idx = currentIndex < 0 ? 0 : currentIndex;
      moveFocus(idx, delta);
    };
    const handleKeyDown = (e) => {
      var _a, _b;
      const isH = orientation === "horizontal";
      switch (e.key) {
        case "ArrowRight":
          if (isH) {
            e.preventDefault();
            focusTabByOffset(1);
          }
          break;
        case "ArrowLeft":
          if (isH) {
            e.preventDefault();
            focusTabByOffset(-1);
          }
          break;
        case "ArrowDown":
          if (!isH) {
            e.preventDefault();
            focusTabByOffset(1);
          }
          break;
        case "ArrowUp":
          if (!isH) {
            e.preventDefault();
            focusTabByOffset(-1);
          }
          break;
        case "Home": {
          e.preventDefault();
          const first = processedItems.find((i) => !i.disabled) ?? processedItems[0];
          const idx = processedItems.indexOf(first);
          onSelect(first.processedValue);
          if (idx >= 0)
            (_a = tabsRef.current[idx]) == null ? void 0 : _a.focus();
          break;
        }
        case "End": {
          e.preventDefault();
          const rev = [...processedItems].reverse();
          const last = rev.find((i) => !i.disabled) ?? rev[0];
          const idx = processedItems.indexOf(last);
          onSelect(last.processedValue);
          if (idx >= 0)
            (_b = tabsRef.current[idx]) == null ? void 0 : _b.focus();
          break;
        }
        case "Enter":
        case " ": {
          if (activation === "manual") {
            e.preventDefault();
            const target = e.target;
            const val = target.getAttribute("data-value");
            if (val)
              onSelect(val, true);
          }
          break;
        }
      }
    };
    const rootClass = cn(
      css("tabs"),
      position && css(`tabs--${position}`),
      scrollable && css("tabs--scrollable"),
      className
    );
    const listClass = cn(css("tablist"));
    useLayoutEffect(() => {
      const container2 = tablistRef.current;
      if (!container2)
        return;
      const measure = () => {
        const containerRect = container2.getBoundingClientRect();
        const positions = {};
        processedItems.forEach((item2, index) => {
          if (!(closable || item2.closable))
            return;
          const el = tabsRef.current[index];
          if (!el)
            return;
          const r = el.getBoundingClientRect();
          const left = r.left - containerRect.left + r.width - 8;
          const top = r.top - containerRect.top + r.height / 2;
          positions[item2.processedValue] = { left, top };
        });
        setClosePositions(positions);
      };
      measure();
      const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(measure) : null;
      if (ro) {
        ro.observe(container2);
        tabsRef.current.forEach((el) => el && ro.observe(el));
      }
      window.addEventListener("resize", measure);
      return () => {
        window.removeEventListener("resize", measure);
        if (ro) {
          ro.disconnect();
        }
      };
    }, [processedItems, closable, size, position, variant]);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: internalId, className: rootClass, "data-testid": dataTestId || "test-tabs", ...rest, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          role: "tablist",
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy,
          "aria-describedby": ariaDescribedBy,
          "aria-orientation": orientation,
          className: listClass,
          onKeyDown: handleKeyDown,
          ref: tablistRef,
          children: [
            processedItems.map((item2, index) => {
              const selected = item2.processedValue === current;
              const tabId = `${internalId}-tab-${item2.processedValue}`;
              const panelId = `${internalId}-panel-${item2.processedValue}`;
              const tabClass = cn(
                css("tab"),
                size && css(`tab--${size}`),
                variant && css(`tab--${variant}`),
                selected && css("tab--active"),
                item2.disabled && css("tab--disabled"),
                item2.closable && css("tab--closable")
              );
              return /* @__PURE__ */ jsxRuntimeExports.jsx(React__default.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  ref: (el) => {
                    tabsRef.current[index] = el;
                  },
                  id: tabId,
                  role: "tab",
                  type: "button",
                  className: cn(tabClass, css("tab__content")),
                  "data-value": item2.processedValue,
                  "aria-selected": selected,
                  "aria-controls": panelId,
                  "aria-disabled": item2.disabled || void 0,
                  tabIndex: selected ? 0 : -1,
                  "data-status": item2.disabled ? "disabled" : selected ? "active" : "inactive",
                  onClick: () => !item2.disabled && onSelect(item2.processedValue, activation === "auto"),
                  disabled: item2.disabled,
                  children: [
                    item2.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: css("tab__icon"), "aria-hidden": "true", children: item2.icon }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: css("tab__label"), children: item2.label }),
                    item2.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: css("tab__badge"), "aria-hidden": "true", children: item2.badge })
                  ]
                }
              ) }, item2.processedKey);
            }),
            addable && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: css("tab-add"),
                "aria-label": "Add tab",
                "data-testid": `${dataTestId || "test-tabs"}-add-button`,
                onClick: () => {
                  onTabAdd == null ? void 0 : onTabAdd();
                },
                children: "+"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: css("tab-close-container"), "aria-hidden": true, children: processedItems.map((item2) => {
        if (!(closable || item2.closable))
          return null;
        const pos = closePositions[item2.processedValue];
        const style = pos ? {
          position: "absolute",
          left: `${pos.left}px`,
          top: `${pos.top}px`,
          transform: "translate(-50%, -50%)"
        } : { visibility: "hidden" };
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: cn(css("tab__close"), css("tab__close--positioned")),
            "aria-label": `Close ${item2.label}`,
            "data-testid": `${dataTestId || "test-tabs"}-close-${item2.processedValue}`,
            onClick: (e) => {
              e.stopPropagation();
              onTabClose == null ? void 0 : onTabClose(item2.processedValue);
            },
            style,
            children: "×"
          },
          `close-${item2.processedKey}`
        );
      }) }),
      processedItems.map((item2) => {
        const selected = item2.processedValue === current;
        const tabId = `${internalId}-tab-${item2.processedValue}`;
        const panelId = `${internalId}-panel-${item2.processedValue}`;
        const panelClass = cn(css("panel"), animated2 && css("panel--animated"));
        const isLoaded = !lazy ? true : loaded[item2.processedValue] === true;
        const showLoading = lazy && selected && !isLoaded;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            id: panelId,
            role: "tabpanel",
            "aria-labelledby": tabId,
            hidden: !selected,
            tabIndex: -1,
            className: panelClass,
            children: [
              showLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: css("panel__loading"), "aria-label": "Loading content", children: loadingComponent || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Loading tab content" }) }),
              !showLoading && (typeof item2.content === "function" ? item2.content({ value: item2.processedValue, selected }) : item2.content)
            ]
          },
          `panel-${item2.processedKey}`
        );
      })
    ] });
  }
);
DynTabs.displayName = "DynTabs";
const TOOLBAR_DEFAULTS = {
  variant: "default",
  size: "medium",
  position: "top",
  responsive: true,
  overflowMenu: true,
  overflowThreshold: 3,
  showLabels: true
};
const dynToolbar = "dyn-LY5VR";
const positionTop = "dyn-1-BHq";
const positionBottom = "dyn-YtASC";
const positionFixedTop = "dyn-B660k";
const positionFixedBottom = "dyn-szGCy";
const variantMinimal = "dyn-8wf94";
const variantFloating = "dyn-wbcrd";
const sizeSmall = "dyn-sKiFA";
const toolbarItem = "dyn-6gq-c";
const sizeMedium = "dyn-C47aW";
const sizeLarge = "dyn-vFs1d";
const toolbarContent = "dyn-ebTHL";
const toolbarItems = "dyn-c-3V-";
const toolbarItemWrapper = "dyn-3dtUc";
const toolbarItemDisabled = "dyn-q0sBD";
const toolbarItemActive = "dyn-LvZ-K";
const toolbarItemOverflow = "dyn-9Olda";
const toolbarItemDropdown = "dyn-jaa-m";
const toolbarItemIcon = "dyn-lYxkx";
const toolbarItemIconText = "dyn-SNj2R";
const toolbarItemLabel = "dyn-LrrSh";
const showLabels = "dyn-Ou64p";
const toolbarItemBadge = "dyn-XnmQK";
const toolbarDropdownArrow = "dyn-juCTe";
const toolbarSeparator = "dyn-PZ7j3";
const toolbarSearch = "dyn-RAsP0";
const searchInput = "dyn-0KxGD";
const toolbarCustom = "dyn-dvK0q";
const toolbarDropdownMenu = "dyn-nKiaY";
const toolbarDropdownItem = "dyn-G3PDj";
const toolbarOverflow = "dyn-zqxei";
const toolbarOverflowButton = "dyn-V0RHZ";
const active = "dyn-wG0ZB";
const toolbarOverflowMenu = "dyn--kX4p";
const styles$2 = {
  dynToolbar,
  positionTop,
  positionBottom,
  positionFixedTop,
  positionFixedBottom,
  variantMinimal,
  variantFloating,
  sizeSmall,
  toolbarItem,
  sizeMedium,
  sizeLarge,
  toolbarContent,
  toolbarItems,
  toolbarItemWrapper,
  toolbarItemDisabled,
  toolbarItemActive,
  toolbarItemOverflow,
  toolbarItemDropdown,
  toolbarItemIcon,
  toolbarItemIconText,
  toolbarItemLabel,
  showLabels,
  toolbarItemBadge,
  toolbarDropdownArrow,
  toolbarSeparator,
  toolbarSearch,
  searchInput,
  toolbarCustom,
  toolbarDropdownMenu,
  toolbarDropdownItem,
  toolbarOverflow,
  toolbarOverflowButton,
  active,
  toolbarOverflowMenu
};
const PICTOGRAPH_REGEX = /\p{Extended_Pictographic}/u;
const SYMBOL_ONLY_REGEX = /^[\p{S}\p{P}]{1,3}$/u;
const isSymbolicIcon = (icon2) => {
  if (!icon2) {
    return false;
  }
  return PICTOGRAPH_REGEX.test(icon2) || SYMBOL_ONLY_REGEX.test(icon2);
};
const DynToolbar = forwardRef(({
  items = [],
  variant = TOOLBAR_DEFAULTS.variant,
  size = TOOLBAR_DEFAULTS.size,
  position = TOOLBAR_DEFAULTS.position,
  responsive = TOOLBAR_DEFAULTS.responsive,
  overflowMenu = TOOLBAR_DEFAULTS.overflowMenu,
  overflowThreshold = TOOLBAR_DEFAULTS.overflowThreshold,
  showLabels: showLabels2 = TOOLBAR_DEFAULTS.showLabels,
  className,
  itemClassName,
  onItemClick,
  onOverflowToggle
}, ref) => {
  const [visibleItems, setVisibleItems] = useState(items);
  const [overflowItems, setOverflowItems] = useState([]);
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toolbarRef = useRef(null);
  const overflowRef = useRef(null);
  const filteredItems = useMemo(() => {
    return items.filter((item2) => item2.visible !== false);
  }, [items]);
  const updateLayout = useCallback(() => {
    if (!overflowMenu) {
      setVisibleItems(filteredItems);
      setOverflowItems([]);
      return;
    }
    if (!responsive) {
      setVisibleItems(filteredItems);
      setOverflowItems([]);
      return;
    }
    const thresholdValue = Math.max(1, overflowThreshold);
    const hasThresholdOverflow = filteredItems.length > thresholdValue;
    const applyThreshold = () => {
      if (!hasThresholdOverflow) {
        setVisibleItems(filteredItems);
        setOverflowItems([]);
        return;
      }
      const maxVisible2 = Math.max(1, Math.min(thresholdValue, filteredItems.length - 1));
      setVisibleItems(filteredItems.slice(0, maxVisible2));
      setOverflowItems(filteredItems.slice(maxVisible2));
    };
    if (!toolbarRef.current) {
      applyThreshold();
      return;
    }
    const toolbarWidth = toolbarRef.current.offsetWidth;
    if (!toolbarWidth || toolbarWidth === 0) {
      applyThreshold();
      return;
    }
    const itemElements = toolbarRef.current.querySelectorAll("[data-toolbar-item]");
    if (itemElements.length === 0 || filteredItems.length === 0) {
      setVisibleItems([]);
      setOverflowItems([]);
      return;
    }
    const padding = 32;
    const measureVisibleItems = (reserveOverflowButton) => {
      const overflowButtonWidth = reserveOverflowButton ? 48 : 0;
      let totalWidth = 0;
      let count = 0;
      for (let i = 0; i < itemElements.length; i++) {
        const itemWidth = itemElements[i].getBoundingClientRect().width;
        if (totalWidth + itemWidth + overflowButtonWidth + padding <= toolbarWidth) {
          totalWidth += itemWidth;
          count++;
        } else {
          break;
        }
      }
      return count;
    };
    let measuredVisible = measureVisibleItems(hasThresholdOverflow);
    const needsOverflowByWidth = measuredVisible < filteredItems.length;
    const shouldShowOverflow = hasThresholdOverflow || needsOverflowByWidth;
    if (shouldShowOverflow && !hasThresholdOverflow) {
      measuredVisible = measureVisibleItems(true);
    }
    if (!shouldShowOverflow) {
      setVisibleItems(filteredItems);
      setOverflowItems([]);
      return;
    }
    const maxVisible = hasThresholdOverflow ? Math.max(1, Math.min(thresholdValue, filteredItems.length - 1)) : Math.max(1, filteredItems.length - 1);
    const visibleCount = Math.max(1, Math.min(measuredVisible, maxVisible));
    setVisibleItems(filteredItems.slice(0, visibleCount));
    setOverflowItems(filteredItems.slice(visibleCount));
  }, [filteredItems, responsive, overflowMenu, overflowThreshold]);
  useEffect(() => {
    updateLayout();
  }, [updateLayout]);
  useEffect(() => {
    if (!responsive)
      return;
    const handleResize = () => {
      updateLayout();
    };
    let resizeObserver = null;
    if (typeof window !== "undefined" && typeof window.ResizeObserver === "function") {
      const candidate = new window.ResizeObserver(handleResize);
      if (candidate && typeof candidate.observe === "function" && typeof candidate.disconnect === "function") {
        resizeObserver = candidate;
        if (toolbarRef.current) {
          resizeObserver.observe(toolbarRef.current);
        }
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      resizeObserver == null ? void 0 : resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [responsive, updateLayout]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (toolbarRef.current && !toolbarRef.current.contains(target)) {
        setIsOverflowOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useImperativeHandle(ref, () => ({
    openOverflow: () => {
      setIsOverflowOpen(true);
      onOverflowToggle == null ? void 0 : onOverflowToggle(true);
    },
    closeOverflow: () => {
      setIsOverflowOpen(false);
      onOverflowToggle == null ? void 0 : onOverflowToggle(false);
    },
    toggleOverflow: () => {
      const newState = !isOverflowOpen;
      setIsOverflowOpen(newState);
      onOverflowToggle == null ? void 0 : onOverflowToggle(newState);
    },
    refreshLayout: updateLayout
  }));
  const handleItemClick = useCallback((item2, event) => {
    if (item2.disabled)
      return;
    if (item2.type === "dropdown") {
      event == null ? void 0 : event.preventDefault();
      setActiveDropdown((prev) => prev === item2.id ? null : item2.id);
      return;
    }
    if (item2.action) {
      item2.action();
    }
    onItemClick == null ? void 0 : onItemClick(item2);
    if (isOverflowOpen) {
      setIsOverflowOpen(false);
      onOverflowToggle == null ? void 0 : onOverflowToggle(false);
    }
  }, [isOverflowOpen, onItemClick, onOverflowToggle]);
  const handleOverflowToggle = () => {
    const newState = !isOverflowOpen;
    setIsOverflowOpen(newState);
    onOverflowToggle == null ? void 0 : onOverflowToggle(newState);
  };
  const renderBadge = useCallback((badge2) => {
    if (!badge2) {
      return null;
    }
    if (typeof badge2 === "object") {
      const count = badge2.count ?? badge2.value;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        DynBadge,
        {
          count: typeof count === "number" ? count : void 0,
          maxCount: badge2.maxCount,
          showZero: badge2.showZero,
          color: badge2.color,
          variant: badge2.variant,
          size: "small",
          children: badge2.label
        }
      );
    }
    if (typeof badge2 === "number") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DynBadge, { count: badge2, size: "small" });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DynBadge, { size: "small", children: badge2 });
  }, []);
  const renderIconContent = useCallback((icon2) => {
    if (React__default.isValidElement(icon2)) {
      return icon2;
    }
    if (typeof icon2 === "string") {
      const normalizedIcon = icon2.trim();
      if (!normalizedIcon) {
        return null;
      }
      if (isSymbolicIcon(normalizedIcon)) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: styles$2["toolbar-item-icon-text"],
            "data-testid": `icon-${normalizedIcon}`,
            "aria-hidden": "true",
            children: normalizedIcon
          }
        );
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: normalizedIcon, "data-testid": `icon-${normalizedIcon}` });
    }
    if (icon2 == null) {
      return null;
    }
    return icon2;
  }, []);
  const renderToolbarItem = (item2, isInOverflow = false) => {
    if (item2.type === "separator") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: classNames(styles$2["toolbar-separator"], "toolbar-separator"),
          "data-toolbar-item": true
        },
        item2.id
      );
    }
    if (item2.type === "search") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: classNames(styles$2["toolbar-search"], "toolbar-search"),
          "data-toolbar-item": true,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "search",
              placeholder: item2.label || "Search...",
              className: styles$2["search-input"]
            }
          )
        },
        item2.id
      );
    }
    if (item2.type === "custom" && item2.component) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: classNames(styles$2["toolbar-custom"], "toolbar-custom"),
          "data-toolbar-item": true,
          children: item2.component
        },
        item2.id
      );
    }
    const itemClasses = classNames(
      styles$2["toolbar-item"],
      "toolbar-item",
      {
        [styles$2["toolbar-item-disabled"]]: item2.disabled,
        "toolbar-item-disabled": item2.disabled,
        [styles$2["toolbar-item-active"]]: activeDropdown === item2.id,
        "toolbar-item-active": activeDropdown === item2.id,
        [styles$2["toolbar-item-overflow"]]: isInOverflow,
        "toolbar-item-overflow": isInOverflow,
        [styles$2["toolbar-item-dropdown"]]: item2.type === "dropdown",
        "toolbar-item-dropdown": item2.type === "dropdown"
      },
      itemClassName
    );
    const iconContent = renderIconContent(item2.icon);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["toolbar-item-wrapper"], children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: itemClasses,
          onClick: (e) => handleItemClick(item2, e),
          disabled: item2.disabled,
          title: item2.tooltip || item2.label,
          "data-toolbar-item": true,
          "aria-label": item2.label,
          "aria-expanded": item2.type === "dropdown" ? activeDropdown === item2.id : void 0,
          "aria-haspopup": item2.type === "dropdown" ? "menu" : void 0,
          children: [
            iconContent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["toolbar-item-icon"], children: iconContent }),
            showLabels2 && item2.label && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: styles$2["toolbar-item-label"],
                title: item2.tooltip || item2.label,
                "aria-label": item2.label,
                "aria-haspopup": item2.type === "dropdown" ? "menu" : void 0,
                "aria-expanded": item2.type === "dropdown" ? activeDropdown === item2.id : void 0,
                tabIndex: 0,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleItemClick(item2);
                  }
                },
                children: item2.label
              }
            ),
            item2.badge && (() => {
              let count;
              if (typeof item2.badge === "number")
                count = item2.badge;
              else if (typeof item2.badge === "object")
                count = item2.badge.count ?? item2.badge.value;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: styles$2["toolbar-item-badge"],
                  "data-testid": "badge",
                  ...count !== void 0 ? { "data-count": String(count) } : {},
                  children: renderBadge(item2.badge)
                }
              );
            })(),
            item2.type === "dropdown" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["toolbar-dropdown-arrow"], children: /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: "dyn-icon-chevron-down" }) })
          ]
        }
      ),
      item2.type === "dropdown" && item2.items && activeDropdown === item2.id && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["toolbar-dropdown-menu"], role: "menu", children: item2.items.map((subItem) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: styles$2["toolbar-dropdown-item"],
          onClick: () => handleItemClick(subItem),
          disabled: subItem.disabled,
          role: "menuitem",
          children: [
            subItem.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["toolbar-item-icon"], children: typeof subItem.icon === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: subItem.icon }) : subItem.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["toolbar-item-label"], children: subItem.label }),
            subItem.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles$2["toolbar-item-badge"], children: renderBadge(subItem.badge) })
          ]
        },
        subItem.id
      )) })
    ] }, item2.id);
  };
  const toolbarClasses = classNames(
    styles$2["dyn-toolbar"],
    "dyn-toolbar",
    {
      [styles$2[`variant-${variant}`]]: variant,
      [`variant-${variant}`]: variant,
      [styles$2[`size-${size}`]]: size,
      [`size-${size}`]: size,
      [styles$2[`position-${position}`]]: position,
      [`position-${position}`]: position,
      [styles$2["responsive"]]: responsive,
      "responsive": responsive,
      [styles$2["show-labels"]]: showLabels2,
      "show-labels": showLabels2
    },
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: toolbarClasses, ref: toolbarRef, role: "toolbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["toolbar-content"], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["toolbar-items"], children: visibleItems.map((item2) => renderToolbarItem(item2)) }),
    overflowItems.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles$2["toolbar-overflow"], ref: overflowRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: classNames(
            styles$2["toolbar-overflow-button"],
            "toolbar-overflow-button",
            {
              [styles$2["active"]]: isOverflowOpen,
              "active": isOverflowOpen
            },
            itemClassName
          ),
          onClick: handleOverflowToggle,
          "aria-haspopup": "menu",
          "aria-expanded": isOverflowOpen,
          "aria-label": "More actions",
          title: "More actions",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DynIcon, { icon: "more-horizontal" })
        }
      ),
      isOverflowOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles$2["toolbar-overflow-menu"], role: "menu", children: overflowItems.map((item2) => renderToolbarItem(item2, true)) })
    ] })
  ] }) });
});
DynToolbar.displayName = "DynToolbar";
const dynTreeView = "dyn-B0TBw";
const dynTreeViewSearch = "dyn-OoO1j";
const dynTreeViewSearchInput = "dyn-fTKE4";
const dynTreeViewContent = "dyn-m7R8j";
const dynTreeViewNode = "dyn--xq22";
const dynTreeViewNodeContent = "dyn-J--aT";
const dynTreeViewNodeContentSelected = "dyn-jbp2i";
const dynTreeViewNodeContentDisabled = "dyn-CCOYN";
const dynTreeViewNodeSwitcher = "dyn-vfNEg";
const dynTreeViewNodeSwitcherLeaf = "dyn--DXJS";
const dynTreeViewExpandIcon = "dyn-XszgJ";
const dynTreeViewNodeCheckbox = "dyn-AGIaI";
const dynTreeViewNodeIcon = "dyn--04ud";
const dynTreeViewNodeTitle = "dyn-Iz51m";
const dynTreeViewNodeTitleClickable = "dyn-KnAz5";
const dynTreeViewNodeChildren = "dyn-i1BGy";
const dynTreeViewShowLine = "dyn-m1SvS";
const dynTreeViewLine = "dyn-DVhrp";
const dynTreeViewEmpty = "dyn-3-ulo";
const dynTreeViewCheckable = "dyn-YT3UX";
const dynTreeViewSelectable = "dyn-DRUu4";
const styles$1 = {
  dynTreeView,
  dynTreeViewSearch,
  dynTreeViewSearchInput,
  dynTreeViewContent,
  dynTreeViewNode,
  dynTreeViewNodeContent,
  dynTreeViewNodeContentSelected,
  dynTreeViewNodeContentDisabled,
  dynTreeViewNodeSwitcher,
  dynTreeViewNodeSwitcherLeaf,
  dynTreeViewExpandIcon,
  dynTreeViewNodeCheckbox,
  dynTreeViewNodeIcon,
  dynTreeViewNodeTitle,
  dynTreeViewNodeTitleClickable,
  dynTreeViewNodeChildren,
  dynTreeViewShowLine,
  dynTreeViewLine,
  dynTreeViewEmpty,
  dynTreeViewCheckable,
  dynTreeViewSelectable
};
const ThemeContext = React.createContext(null);
const AVAILABLE_THEMES = ["light", "dark"];
function ThemeProvider({ initialTheme = "light", children }) {
  const [theme, setThemeState] = React.useState(initialTheme);
  const setTheme = React.useCallback((newTheme) => {
    if (AVAILABLE_THEMES.includes(newTheme)) {
      setThemeState(newTheme);
    }
  }, []);
  React.useEffect(() => {
    const root2 = document.documentElement;
    AVAILABLE_THEMES.forEach((t) => {
      root2.classList.remove(`theme-${t}`);
    });
    root2.classList.add(`theme-${theme}`);
    root2.setAttribute("data-theme", theme);
  }, [theme]);
  React.useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme, setTheme]);
  const contextValue = React.useMemo(() => ({
    theme,
    setTheme,
    availableThemes: AVAILABLE_THEMES
  }), [theme, setTheme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: contextValue, children });
}
const useTheme$1 = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
const toggleGroup = "dyn-bUpyN";
const toggleGroupButton = "dyn-xzDf-";
const sizeSm = "dyn-gQLUO";
const sizeMd = "dyn-hfX7m";
const roundedSm = "dyn-IsCPu";
const roundedMd = "dyn-BIqMX";
const roundedLg = "dyn-K4-e5";
const roundedFull = "dyn-qyICo";
const styles = {
  toggleGroup,
  toggleGroupButton,
  sizeSm,
  sizeMd,
  roundedSm,
  roundedMd,
  roundedLg,
  roundedFull
};
({
  sm: styles.sizeSm,
  md: styles.sizeMd
});
({
  sm: styles.roundedSm,
  md: styles.roundedMd,
  lg: styles.roundedLg,
  full: styles.roundedFull
});
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
const useThemeVars = () => {
  const { theme } = useTheme();
  const cssVars = {};
  cssVars["--theme-name"] = theme;
  cssVars["--theme-mode"] = theme === "dark" ? "dark" : "light";
  return cssVars;
};
export {
  AVATAR_SIZES,
  DATE_FORMATS,
  DYN_GRID_DEFAULT_PROPS,
  DynAvatar,
  DynBadge,
  DynButton,
  DynCheckbox,
  DynContainer,
  DynDatePicker,
  DynDivider,
  DynFieldContainer,
  DynGrid,
  DynIcon,
  DynInput,
  DynLabel,
  DynPage,
  DynSelect,
  IconDictionaryProvider,
  MASK_PATTERNS,
  ThemeProvider,
  classNames$2 as classNames,
  combineClasses,
  createClassNameGenerator,
  formatBadgeValue,
  generateInitials$1 as generateInitials,
  getDateFormat,
  getMaskPattern,
  isThemeColor,
  processIconString,
  useDynDateParser,
  useDynFieldValidation,
  useDynMask,
  useIconDictionary,
  useTheme$1 as useTheme,
  useThemeVars,
  validators
};
//# sourceMappingURL=dyn-ui.es.js.map
