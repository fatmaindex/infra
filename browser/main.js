import {
  ANIMATION_MODULE_TYPE,
  APP_BOOTSTRAP_LISTENER,
  APP_ID,
  APP_INITIALIZER,
  ApplicationModule,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Compiler,
  Component,
  ConnectableObservable,
  Console,
  ContentChildren,
  DOCUMENT,
  Directive,
  DomAdapter,
  EMPTY,
  ENVIRONMENT_INITIALIZER,
  ElementRef,
  EmptyError,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  HashLocationStrategy,
  HostBinding,
  HostListener,
  INJECTOR_SCOPE,
  Inject,
  InjectFlags,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  LOCALE_ID,
  LOCATION_INITIALIZED,
  Location,
  LocationStrategy,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgModuleFactory$1,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_BROWSER_ID,
  PLATFORM_ID,
  PLATFORM_INITIALIZER,
  PathLocationStrategy,
  PendingTasks,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RuntimeError,
  SecurityContext,
  SkipSelf,
  Subject,
  Subscription,
  TESTABILITY,
  TESTABILITY_GETTER,
  TemplateRef,
  Testability,
  TestabilityRegistry,
  TransferState,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  ViewportScroller,
  XSS_SECURITY_URL,
  XhrFactory,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  _global,
  _sanitizeHtml,
  _sanitizeUrl,
  afterNextRender,
  allowSanitizationBypassAndThrow,
  animate,
  booleanAttribute,
  bypassSanitizationTrustHtml,
  bypassSanitizationTrustResourceUrl,
  bypassSanitizationTrustScript,
  bypassSanitizationTrustStyle,
  bypassSanitizationTrustUrl,
  catchError,
  combineLatest,
  concat,
  concatMap,
  createEnvironmentInjector,
  createPlatformFactory,
  debounceTime,
  defaultIfEmpty,
  defer,
  delay,
  distinctUntilChanged,
  filter,
  finalize,
  first,
  forkJoin,
  formatRuntimeError,
  forwardRef,
  from,
  fromEvent,
  getDOM,
  inject,
  isDevMode,
  isInjectable,
  isNgModule,
  isObservable,
  isPlatformBrowser,
  isPlatformServer,
  isPromise,
  isStandalone,
  last,
  makeEnvironmentProviders,
  makeStateKey,
  map,
  mapTo,
  merge,
  mergeAll,
  mergeMap,
  of,
  parseCookieValue,
  performanceMarkFeature,
  pipe,
  platformCore,
  refCount,
  reflectComponentType,
  runInInjectionContext,
  scan,
  setClassMetadata,
  setDocument,
  setRootDomAdapter,
  share,
  skip,
  startWith,
  state,
  style,
  switchMap,
  take,
  takeLast,
  takeUntil,
  tap,
  throwError,
  toArray,
  transition,
  trigger,
  truncateMiddle,
  unwrapSafeValue,
  whenStable,
  withDomHydration,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵsanitizeUrlOrResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-JIDQXMPY.js";

// node_modules/@angular/common/fesm2022/http.mjs
var HttpHandler = class {
};
var HttpBackend = class {
};
var HttpHeaders = class _HttpHeaders {
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    this.normalizedNames = /* @__PURE__ */ new Map();
    this.lazyUpdate = null;
    if (!headers) {
      this.headers = /* @__PURE__ */ new Map();
    } else if (typeof headers === "string") {
      this.lazyInit = () => {
        this.headers = /* @__PURE__ */ new Map();
        headers.split("\n").forEach((line) => {
          const index = line.indexOf(":");
          if (index > 0) {
            const name = line.slice(0, index);
            const key = name.toLowerCase();
            const value = line.slice(index + 1).trim();
            this.maybeSetNormalizedName(name, key);
            if (this.headers.has(key)) {
              this.headers.get(key).push(value);
            } else {
              this.headers.set(key, [value]);
            }
          }
        });
      };
    } else if (typeof Headers !== "undefined" && headers instanceof Headers) {
      this.headers = /* @__PURE__ */ new Map();
      headers.forEach((values, name) => {
        this.setHeaderEntries(name, values);
      });
    } else {
      this.lazyInit = () => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          assertValidHeaders(headers);
        }
        this.headers = /* @__PURE__ */ new Map();
        Object.entries(headers).forEach(([name, values]) => {
          this.setHeaderEntries(name, values);
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */
  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */
  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */
  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */
  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */
  append(name, value) {
    return this.clone({
      name,
      value,
      op: "a"
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or override for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */
  set(name, value) {
    return this.clone({
      name,
      value,
      op: "s"
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */
  delete(name, value) {
    return this.clone({
      name,
      value,
      op: "d"
    });
  }
  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }
  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof _HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }
      this.lazyInit = null;
      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach((update) => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }
  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach((key) => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }
  clone(update) {
    const clone = new _HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof _HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }
  applyUpdate(update) {
    const key = update.name.toLowerCase();
    switch (update.op) {
      case "a":
      case "s":
        let value = update.value;
        if (typeof value === "string") {
          value = [value];
        }
        if (value.length === 0) {
          return;
        }
        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === "a" ? this.headers.get(key) : void 0) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;
      case "d":
        const toDelete = update.value;
        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);
          if (!existing) {
            return;
          }
          existing = existing.filter((value2) => toDelete.indexOf(value2) === -1);
          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }
        break;
    }
  }
  setHeaderEntries(name, values) {
    const headerValues = (Array.isArray(values) ? values : [values]).map((value) => value.toString());
    const key = name.toLowerCase();
    this.headers.set(key, headerValues);
    this.maybeSetNormalizedName(name, key);
  }
  /**
   * @internal
   */
  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach((key) => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }
};
function assertValidHeaders(headers) {
  for (const [key, value] of Object.entries(headers)) {
    if (!(typeof value === "string" || typeof value === "number") && !Array.isArray(value)) {
      throw new Error(`Unexpected value of the \`${key}\` header provided. Expecting either a string, a number or an array, but got: \`${value}\`.`);
    }
  }
}
var HttpUrlEncodingCodec = class {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */
  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */
  decodeValue(value) {
    return decodeURIComponent(value);
  }
};
function paramParser(rawParams, codec) {
  const map2 = /* @__PURE__ */ new Map();
  if (rawParams.length > 0) {
    const params = rawParams.replace(/^\?/, "").split("&");
    params.forEach((param) => {
      const eqIdx = param.indexOf("=");
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ""] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map2.get(key) || [];
      list.push(val);
      map2.set(key, list);
    });
  }
  return map2;
}
var STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
var STANDARD_ENCODING_REPLACEMENTS = {
  "40": "@",
  "3A": ":",
  "24": "$",
  "2C": ",",
  "3B": ";",
  "3D": "=",
  "3F": "?",
  "2F": "/"
};
function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => STANDARD_ENCODING_REPLACEMENTS[t] ?? s);
}
function valueToString(value) {
  return `${value}`;
}
var HttpParams = class _HttpParams {
  constructor(options = {}) {
    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();
    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }
      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = /* @__PURE__ */ new Map();
      Object.keys(options.fromObject).forEach((key) => {
        const value = options.fromObject[key];
        const values = Array.isArray(value) ? value.map(valueToString) : [valueToString(value)];
        this.map.set(key, values);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */
  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */
  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */
  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */
  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */
  append(param, value) {
    return this.clone({
      param,
      value,
      op: "a"
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */
  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach((param) => {
      const value = params[param];
      if (Array.isArray(value)) {
        value.forEach((_value) => {
          updates.push({
            param,
            value: _value,
            op: "a"
          });
        });
      } else {
        updates.push({
          param,
          value,
          op: "a"
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */
  set(param, value) {
    return this.clone({
      param,
      value,
      op: "s"
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */
  delete(param, value) {
    return this.clone({
      param,
      value,
      op: "d"
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */
  toString() {
    this.init();
    return this.keys().map((key) => {
      const eKey = this.encoder.encodeKey(key);
      return this.map.get(key).map((value) => eKey + "=" + this.encoder.encodeValue(value)).join("&");
    }).filter((param) => param !== "").join("&");
  }
  clone(update) {
    const clone = new _HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }
  init() {
    if (this.map === null) {
      this.map = /* @__PURE__ */ new Map();
    }
    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach((key) => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach((update) => {
        switch (update.op) {
          case "a":
          case "s":
            const base = (update.op === "a" ? this.map.get(update.param) : void 0) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;
          case "d":
            if (update.value !== void 0) {
              let base2 = this.map.get(update.param) || [];
              const idx = base2.indexOf(valueToString(update.value));
              if (idx !== -1) {
                base2.splice(idx, 1);
              }
              if (base2.length > 0) {
                this.map.set(update.param, base2);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }
        }
      });
      this.cloneFrom = this.updates = null;
    }
  }
};
var HttpContext = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */
  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */
  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }
    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */
  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */
  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */
  keys() {
    return this.map.keys();
  }
};
function mightHaveBody(method) {
  switch (method) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return false;
    default:
      return true;
  }
}
function isArrayBuffer(value) {
  return typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer;
}
function isBlob(value) {
  return typeof Blob !== "undefined" && value instanceof Blob;
}
function isFormData(value) {
  return typeof FormData !== "undefined" && value instanceof FormData;
}
function isUrlSearchParams(value) {
  return typeof URLSearchParams !== "undefined" && value instanceof URLSearchParams;
}
var HttpRequest = class _HttpRequest {
  constructor(method, url, third, fourth) {
    this.url = url;
    this.body = null;
    this.reportProgress = false;
    this.withCredentials = false;
    this.responseType = "json";
    this.method = method.toUpperCase();
    let options;
    if (mightHaveBody(this.method) || !!fourth) {
      this.body = third !== void 0 ? third : null;
      options = fourth;
    } else {
      options = third;
    }
    if (options) {
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials;
      if (!!options.responseType) {
        this.responseType = options.responseType;
      }
      if (!!options.headers) {
        this.headers = options.headers;
      }
      if (!!options.context) {
        this.context = options.context;
      }
      if (!!options.params) {
        this.params = options.params;
      }
      this.transferCache = options.transferCache;
    }
    this.headers ??= new HttpHeaders();
    this.context ??= new HttpContext();
    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      const params = this.params.toString();
      if (params.length === 0) {
        this.urlWithParams = url;
      } else {
        const qIdx = url.indexOf("?");
        const sep = qIdx === -1 ? "?" : qIdx < url.length - 1 ? "&" : "";
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */
  serializeBody() {
    if (this.body === null) {
      return null;
    }
    if (typeof this.body === "string" || isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body)) {
      return this.body;
    }
    if (this.body instanceof HttpParams) {
      return this.body.toString();
    }
    if (typeof this.body === "object" || typeof this.body === "boolean" || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    }
    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */
  detectContentTypeHeader() {
    if (this.body === null) {
      return null;
    }
    if (isFormData(this.body)) {
      return null;
    }
    if (isBlob(this.body)) {
      return this.body.type || null;
    }
    if (isArrayBuffer(this.body)) {
      return null;
    }
    if (typeof this.body === "string") {
      return "text/plain";
    }
    if (this.body instanceof HttpParams) {
      return "application/x-www-form-urlencoded;charset=UTF-8";
    }
    if (typeof this.body === "object" || typeof this.body === "number" || typeof this.body === "boolean") {
      return "application/json";
    }
    return null;
  }
  clone(update = {}) {
    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType;
    const transferCache = update.transferCache ?? this.transferCache;
    const body = update.body !== void 0 ? update.body : this.body;
    const withCredentials = update.withCredentials ?? this.withCredentials;
    const reportProgress = update.reportProgress ?? this.reportProgress;
    let headers = update.headers || this.headers;
    let params = update.params || this.params;
    const context = update.context ?? this.context;
    if (update.setHeaders !== void 0) {
      headers = Object.keys(update.setHeaders).reduce((headers2, name) => headers2.set(name, update.setHeaders[name]), headers);
    }
    if (update.setParams) {
      params = Object.keys(update.setParams).reduce((params2, param) => params2.set(param, update.setParams[param]), params);
    }
    return new _HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials,
      transferCache
    });
  }
};
var HttpEventType;
(function(HttpEventType2) {
  HttpEventType2[HttpEventType2["Sent"] = 0] = "Sent";
  HttpEventType2[HttpEventType2["UploadProgress"] = 1] = "UploadProgress";
  HttpEventType2[HttpEventType2["ResponseHeader"] = 2] = "ResponseHeader";
  HttpEventType2[HttpEventType2["DownloadProgress"] = 3] = "DownloadProgress";
  HttpEventType2[HttpEventType2["Response"] = 4] = "Response";
  HttpEventType2[HttpEventType2["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
var HttpResponseBase = class {
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = HttpStatusCode.Ok, defaultStatusText = "OK") {
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== void 0 ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null;
    this.ok = this.status >= 200 && this.status < 300;
  }
};
var HttpHeaderResponse = class _HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.ResponseHeader;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */
  clone(update = {}) {
    return new _HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== void 0 ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || void 0
    });
  }
};
var HttpResponse = class _HttpResponse extends HttpResponseBase {
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.Response;
    this.body = init.body !== void 0 ? init.body : null;
  }
  clone(update = {}) {
    return new _HttpResponse({
      body: update.body !== void 0 ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== void 0 ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || void 0
    });
  }
};
var HttpErrorResponse = class extends HttpResponseBase {
  constructor(init) {
    super(init, 0, "Unknown Error");
    this.name = "HttpErrorResponse";
    this.ok = false;
    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || "(unknown url)"}`;
    } else {
      this.message = `Http failure response for ${init.url || "(unknown url)"}: ${init.status} ${init.statusText}`;
    }
    this.error = init.error || null;
  }
};
var HttpStatusCode;
(function(HttpStatusCode2) {
  HttpStatusCode2[HttpStatusCode2["Continue"] = 100] = "Continue";
  HttpStatusCode2[HttpStatusCode2["SwitchingProtocols"] = 101] = "SwitchingProtocols";
  HttpStatusCode2[HttpStatusCode2["Processing"] = 102] = "Processing";
  HttpStatusCode2[HttpStatusCode2["EarlyHints"] = 103] = "EarlyHints";
  HttpStatusCode2[HttpStatusCode2["Ok"] = 200] = "Ok";
  HttpStatusCode2[HttpStatusCode2["Created"] = 201] = "Created";
  HttpStatusCode2[HttpStatusCode2["Accepted"] = 202] = "Accepted";
  HttpStatusCode2[HttpStatusCode2["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
  HttpStatusCode2[HttpStatusCode2["NoContent"] = 204] = "NoContent";
  HttpStatusCode2[HttpStatusCode2["ResetContent"] = 205] = "ResetContent";
  HttpStatusCode2[HttpStatusCode2["PartialContent"] = 206] = "PartialContent";
  HttpStatusCode2[HttpStatusCode2["MultiStatus"] = 207] = "MultiStatus";
  HttpStatusCode2[HttpStatusCode2["AlreadyReported"] = 208] = "AlreadyReported";
  HttpStatusCode2[HttpStatusCode2["ImUsed"] = 226] = "ImUsed";
  HttpStatusCode2[HttpStatusCode2["MultipleChoices"] = 300] = "MultipleChoices";
  HttpStatusCode2[HttpStatusCode2["MovedPermanently"] = 301] = "MovedPermanently";
  HttpStatusCode2[HttpStatusCode2["Found"] = 302] = "Found";
  HttpStatusCode2[HttpStatusCode2["SeeOther"] = 303] = "SeeOther";
  HttpStatusCode2[HttpStatusCode2["NotModified"] = 304] = "NotModified";
  HttpStatusCode2[HttpStatusCode2["UseProxy"] = 305] = "UseProxy";
  HttpStatusCode2[HttpStatusCode2["Unused"] = 306] = "Unused";
  HttpStatusCode2[HttpStatusCode2["TemporaryRedirect"] = 307] = "TemporaryRedirect";
  HttpStatusCode2[HttpStatusCode2["PermanentRedirect"] = 308] = "PermanentRedirect";
  HttpStatusCode2[HttpStatusCode2["BadRequest"] = 400] = "BadRequest";
  HttpStatusCode2[HttpStatusCode2["Unauthorized"] = 401] = "Unauthorized";
  HttpStatusCode2[HttpStatusCode2["PaymentRequired"] = 402] = "PaymentRequired";
  HttpStatusCode2[HttpStatusCode2["Forbidden"] = 403] = "Forbidden";
  HttpStatusCode2[HttpStatusCode2["NotFound"] = 404] = "NotFound";
  HttpStatusCode2[HttpStatusCode2["MethodNotAllowed"] = 405] = "MethodNotAllowed";
  HttpStatusCode2[HttpStatusCode2["NotAcceptable"] = 406] = "NotAcceptable";
  HttpStatusCode2[HttpStatusCode2["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
  HttpStatusCode2[HttpStatusCode2["RequestTimeout"] = 408] = "RequestTimeout";
  HttpStatusCode2[HttpStatusCode2["Conflict"] = 409] = "Conflict";
  HttpStatusCode2[HttpStatusCode2["Gone"] = 410] = "Gone";
  HttpStatusCode2[HttpStatusCode2["LengthRequired"] = 411] = "LengthRequired";
  HttpStatusCode2[HttpStatusCode2["PreconditionFailed"] = 412] = "PreconditionFailed";
  HttpStatusCode2[HttpStatusCode2["PayloadTooLarge"] = 413] = "PayloadTooLarge";
  HttpStatusCode2[HttpStatusCode2["UriTooLong"] = 414] = "UriTooLong";
  HttpStatusCode2[HttpStatusCode2["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
  HttpStatusCode2[HttpStatusCode2["RangeNotSatisfiable"] = 416] = "RangeNotSatisfiable";
  HttpStatusCode2[HttpStatusCode2["ExpectationFailed"] = 417] = "ExpectationFailed";
  HttpStatusCode2[HttpStatusCode2["ImATeapot"] = 418] = "ImATeapot";
  HttpStatusCode2[HttpStatusCode2["MisdirectedRequest"] = 421] = "MisdirectedRequest";
  HttpStatusCode2[HttpStatusCode2["UnprocessableEntity"] = 422] = "UnprocessableEntity";
  HttpStatusCode2[HttpStatusCode2["Locked"] = 423] = "Locked";
  HttpStatusCode2[HttpStatusCode2["FailedDependency"] = 424] = "FailedDependency";
  HttpStatusCode2[HttpStatusCode2["TooEarly"] = 425] = "TooEarly";
  HttpStatusCode2[HttpStatusCode2["UpgradeRequired"] = 426] = "UpgradeRequired";
  HttpStatusCode2[HttpStatusCode2["PreconditionRequired"] = 428] = "PreconditionRequired";
  HttpStatusCode2[HttpStatusCode2["TooManyRequests"] = 429] = "TooManyRequests";
  HttpStatusCode2[HttpStatusCode2["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
  HttpStatusCode2[HttpStatusCode2["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
  HttpStatusCode2[HttpStatusCode2["InternalServerError"] = 500] = "InternalServerError";
  HttpStatusCode2[HttpStatusCode2["NotImplemented"] = 501] = "NotImplemented";
  HttpStatusCode2[HttpStatusCode2["BadGateway"] = 502] = "BadGateway";
  HttpStatusCode2[HttpStatusCode2["ServiceUnavailable"] = 503] = "ServiceUnavailable";
  HttpStatusCode2[HttpStatusCode2["GatewayTimeout"] = 504] = "GatewayTimeout";
  HttpStatusCode2[HttpStatusCode2["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
  HttpStatusCode2[HttpStatusCode2["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
  HttpStatusCode2[HttpStatusCode2["InsufficientStorage"] = 507] = "InsufficientStorage";
  HttpStatusCode2[HttpStatusCode2["LoopDetected"] = 508] = "LoopDetected";
  HttpStatusCode2[HttpStatusCode2["NotExtended"] = 510] = "NotExtended";
  HttpStatusCode2[HttpStatusCode2["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(HttpStatusCode || (HttpStatusCode = {}));
function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials,
    transferCache: options.transferCache
  };
}
var _HttpClient = class _HttpClient {
  constructor(handler) {
    this.handler = handler;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */
  request(first2, url, options = {}) {
    let req;
    if (first2 instanceof HttpRequest) {
      req = first2;
    } else {
      let headers = void 0;
      if (options.headers instanceof HttpHeaders) {
        headers = options.headers;
      } else {
        headers = new HttpHeaders(options.headers);
      }
      let params = void 0;
      if (!!options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params;
        } else {
          params = new HttpParams({
            fromObject: options.params
          });
        }
      }
      req = new HttpRequest(first2, url, options.body !== void 0 ? options.body : null, {
        headers,
        context: options.context,
        params,
        reportProgress: options.reportProgress,
        // By default, JSON is assumed to be returned for all calls.
        responseType: options.responseType || "json",
        withCredentials: options.withCredentials,
        transferCache: options.transferCache
      });
    }
    const events$ = of(req).pipe(concatMap((req2) => this.handler.handle(req2)));
    if (first2 instanceof HttpRequest || options.observe === "events") {
      return events$;
    }
    const res$ = events$.pipe(filter((event) => event instanceof HttpResponse));
    switch (options.observe || "body") {
      case "body":
        switch (req.responseType) {
          case "arraybuffer":
            return res$.pipe(map((res) => {
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error("Response is not an ArrayBuffer.");
              }
              return res.body;
            }));
          case "blob":
            return res$.pipe(map((res) => {
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error("Response is not a Blob.");
              }
              return res.body;
            }));
          case "text":
            return res$.pipe(map((res) => {
              if (res.body !== null && typeof res.body !== "string") {
                throw new Error("Response is not a string.");
              }
              return res.body;
            }));
          case "json":
          default:
            return res$.pipe(map((res) => res.body));
        }
      case "response":
        return res$;
      default:
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
    }
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `DELETE` request to execute on the server. See the individual overloads for
   * details on the return type.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   */
  delete(url, options = {}) {
    return this.request("DELETE", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `GET` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  get(url, options = {}) {
    return this.request("GET", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `HEAD` request to execute on the server. The `HEAD` method returns
   * meta information about the resource without transferring the
   * resource itself. See the individual overloads for
   * details on the return type.
   */
  head(url, options = {}) {
    return this.request("HEAD", url, options);
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes a request with the special method
   * `JSONP` to be dispatched via the interceptor pipeline.
   * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
   * API endpoints that don't support newer,
   * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
   * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
   * requests even if the API endpoint is not located on the same domain (origin) as the client-side
   * application making the request.
   * The endpoint API must support JSONP callback for JSONP requests to work.
   * The resource API returns the JSON response wrapped in a callback function.
   * You can pass the callback function name as one of the query parameters.
   * Note that JSONP requests can only be used with `GET` requests.
   *
   * @param url The resource URL.
   * @param callbackParam The callback function name.
   *
   */
  jsonp(url, callbackParam) {
    return this.request("JSONP", url, {
      params: new HttpParams().append(callbackParam, "JSONP_CALLBACK"),
      observe: "body",
      responseType: "json"
    });
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes the configured
   * `OPTIONS` request to execute on the server. This method allows the client
   * to determine the supported HTTP methods and other capabilities of an endpoint,
   * without implying a resource action. See the individual overloads for
   * details on the return type.
   */
  options(url, options = {}) {
    return this.request("OPTIONS", url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PATCH` request to execute on the server. See the individual overloads for
   * details on the return type.
   */
  patch(url, body, options = {}) {
    return this.request("PATCH", url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `POST` request to execute on the server. The server responds with the location of
   * the replaced resource. See the individual overloads for
   * details on the return type.
   */
  post(url, body, options = {}) {
    return this.request("POST", url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
   * with a new set of values.
   * See the individual overloads for details on the return type.
   */
  put(url, body, options = {}) {
    return this.request("PUT", url, addBody(options, body));
  }
};
_HttpClient.\u0275fac = function HttpClient_Factory(t) {
  return new (t || _HttpClient)(\u0275\u0275inject(HttpHandler));
};
_HttpClient.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HttpClient,
  factory: _HttpClient.\u0275fac
});
var HttpClient = _HttpClient;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClient, [{
    type: Injectable
  }], () => [{
    type: HttpHandler
  }], null);
})();
var XSSI_PREFIX$1 = /^\)\]\}',?\n/;
var REQUEST_URL_HEADER = `X-Request-URL`;
function getResponseUrl$1(response) {
  if (response.url) {
    return response.url;
  }
  const xRequestUrl = REQUEST_URL_HEADER.toLocaleLowerCase();
  return response.headers.get(xRequestUrl);
}
var _FetchBackend = class _FetchBackend {
  constructor() {
    this.fetchImpl = inject(FetchFactory, {
      optional: true
    })?.fetch ?? fetch.bind(globalThis);
    this.ngZone = inject(NgZone);
  }
  handle(request) {
    return new Observable((observer) => {
      const aborter = new AbortController();
      this.doRequest(request, aborter.signal, observer).then(noop, (error) => observer.error(new HttpErrorResponse({
        error
      })));
      return () => aborter.abort();
    });
  }
  doRequest(request, signal, observer) {
    return __async(this, null, function* () {
      const init = this.createRequestInit(request);
      let response;
      try {
        const fetchPromise = this.fetchImpl(request.urlWithParams, __spreadValues({
          signal
        }, init));
        silenceSuperfluousUnhandledPromiseRejection(fetchPromise);
        observer.next({
          type: HttpEventType.Sent
        });
        response = yield fetchPromise;
      } catch (error) {
        observer.error(new HttpErrorResponse({
          error,
          status: error.status ?? 0,
          statusText: error.statusText,
          url: request.urlWithParams,
          headers: error.headers
        }));
        return;
      }
      const headers = new HttpHeaders(response.headers);
      const statusText = response.statusText;
      const url = getResponseUrl$1(response) ?? request.urlWithParams;
      let status = response.status;
      let body = null;
      if (request.reportProgress) {
        observer.next(new HttpHeaderResponse({
          headers,
          status,
          statusText,
          url
        }));
      }
      if (response.body) {
        const contentLength = response.headers.get("content-length");
        const chunks = [];
        const reader = response.body.getReader();
        let receivedLength = 0;
        let decoder;
        let partialText;
        const reqZone = typeof Zone !== "undefined" && Zone.current;
        yield this.ngZone.runOutsideAngular(() => __async(this, null, function* () {
          while (true) {
            const {
              done,
              value
            } = yield reader.read();
            if (done) {
              break;
            }
            chunks.push(value);
            receivedLength += value.length;
            if (request.reportProgress) {
              partialText = request.responseType === "text" ? (partialText ?? "") + (decoder ??= new TextDecoder()).decode(value, {
                stream: true
              }) : void 0;
              const reportProgress = () => observer.next({
                type: HttpEventType.DownloadProgress,
                total: contentLength ? +contentLength : void 0,
                loaded: receivedLength,
                partialText
              });
              reqZone ? reqZone.run(reportProgress) : reportProgress();
            }
          }
        }));
        const chunksAll = this.concatChunks(chunks, receivedLength);
        try {
          const contentType = response.headers.get("Content-Type") ?? "";
          body = this.parseBody(request, chunksAll, contentType);
        } catch (error) {
          observer.error(new HttpErrorResponse({
            error,
            headers: new HttpHeaders(response.headers),
            status: response.status,
            statusText: response.statusText,
            url: getResponseUrl$1(response) ?? request.urlWithParams
          }));
          return;
        }
      }
      if (status === 0) {
        status = body ? HttpStatusCode.Ok : 0;
      }
      const ok = status >= 200 && status < 300;
      if (ok) {
        observer.next(new HttpResponse({
          body,
          headers,
          status,
          statusText,
          url
        }));
        observer.complete();
      } else {
        observer.error(new HttpErrorResponse({
          error: body,
          headers,
          status,
          statusText,
          url
        }));
      }
    });
  }
  parseBody(request, binContent, contentType) {
    switch (request.responseType) {
      case "json":
        const text = new TextDecoder().decode(binContent).replace(XSSI_PREFIX$1, "");
        return text === "" ? null : JSON.parse(text);
      case "text":
        return new TextDecoder().decode(binContent);
      case "blob":
        return new Blob([binContent], {
          type: contentType
        });
      case "arraybuffer":
        return binContent.buffer;
    }
  }
  createRequestInit(req) {
    const headers = {};
    const credentials = req.withCredentials ? "include" : void 0;
    req.headers.forEach((name, values) => headers[name] = values.join(","));
    headers["Accept"] ??= "application/json, text/plain, */*";
    if (!headers["Content-Type"]) {
      const detectedType = req.detectContentTypeHeader();
      if (detectedType !== null) {
        headers["Content-Type"] = detectedType;
      }
    }
    return {
      body: req.serializeBody(),
      method: req.method,
      headers,
      credentials
    };
  }
  concatChunks(chunks, totalLength) {
    const chunksAll = new Uint8Array(totalLength);
    let position = 0;
    for (const chunk of chunks) {
      chunksAll.set(chunk, position);
      position += chunk.length;
    }
    return chunksAll;
  }
};
_FetchBackend.\u0275fac = function FetchBackend_Factory(t) {
  return new (t || _FetchBackend)();
};
_FetchBackend.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FetchBackend,
  factory: _FetchBackend.\u0275fac
});
var FetchBackend = _FetchBackend;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FetchBackend, [{
    type: Injectable
  }], null, null);
})();
var FetchFactory = class {
};
function noop() {
}
function silenceSuperfluousUnhandledPromiseRejection(promise) {
  promise.then(noop, noop);
}
function interceptorChainEndFn(req, finalHandlerFn) {
  return finalHandlerFn(req);
}
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
  return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
    handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)
  });
}
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
  return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
var HTTP_INTERCEPTORS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTORS" : "");
var HTTP_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_INTERCEPTOR_FNS" : "");
var HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? "HTTP_ROOT_INTERCEPTOR_FNS" : "");
var PRIMARY_HTTP_BACKEND = new InjectionToken(ngDevMode ? "PRIMARY_HTTP_BACKEND" : "");
function legacyInterceptorFnFactory() {
  let chain = null;
  return (req, handler) => {
    if (chain === null) {
      const interceptors = inject(HTTP_INTERCEPTORS, {
        optional: true
      }) ?? [];
      chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
    }
    const pendingTasks = inject(PendingTasks);
    const taskId = pendingTasks.add();
    return chain(req, handler).pipe(finalize(() => pendingTasks.remove(taskId)));
  };
}
var fetchBackendWarningDisplayed = false;
var _HttpInterceptorHandler = class _HttpInterceptorHandler extends HttpHandler {
  constructor(backend, injector) {
    super();
    this.backend = backend;
    this.injector = injector;
    this.chain = null;
    this.pendingTasks = inject(PendingTasks);
    const primaryHttpBackend = inject(PRIMARY_HTTP_BACKEND, {
      optional: true
    });
    this.backend = primaryHttpBackend ?? backend;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !fetchBackendWarningDisplayed) {
      const isServer = isPlatformServer(injector.get(PLATFORM_ID));
      if (isServer && !(this.backend instanceof FetchBackend)) {
        fetchBackendWarningDisplayed = true;
        injector.get(Console).warn(formatRuntimeError(2801, "Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application."));
      }
    }
  }
  handle(initialRequest) {
    if (this.chain === null) {
      const dedupedInterceptorFns = Array.from(/* @__PURE__ */ new Set([...this.injector.get(HTTP_INTERCEPTOR_FNS), ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, [])]));
      this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
    }
    const taskId = this.pendingTasks.add();
    return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)).pipe(finalize(() => this.pendingTasks.remove(taskId)));
  }
};
_HttpInterceptorHandler.\u0275fac = function HttpInterceptorHandler_Factory(t) {
  return new (t || _HttpInterceptorHandler)(\u0275\u0275inject(HttpBackend), \u0275\u0275inject(EnvironmentInjector));
};
_HttpInterceptorHandler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HttpInterceptorHandler,
  factory: _HttpInterceptorHandler.\u0275fac
});
var HttpInterceptorHandler = _HttpInterceptorHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpInterceptorHandler, [{
    type: Injectable
  }], () => [{
    type: HttpBackend
  }, {
    type: EnvironmentInjector
  }], null);
})();
var nextRequestId = 0;
var foreignDocument;
var JSONP_ERR_NO_CALLBACK = "JSONP injected script did not invoke callback.";
var JSONP_ERR_WRONG_METHOD = "JSONP requests must use JSONP request method.";
var JSONP_ERR_WRONG_RESPONSE_TYPE = "JSONP requests must use Json response type.";
var JSONP_ERR_HEADERS_NOT_SUPPORTED = "JSONP requests do not support headers.";
var JsonpCallbackContext = class {
};
function jsonpCallbackContext() {
  if (typeof window === "object") {
    return window;
  }
  return {};
}
var _JsonpClientBackend = class _JsonpClientBackend {
  constructor(callbackMap, document2) {
    this.callbackMap = callbackMap;
    this.document = document2;
    this.resolvedPromise = Promise.resolve();
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */
  nextCallback() {
    return `ng_jsonp_callback_${nextRequestId++}`;
  }
  /**
   * Processes a JSONP request and returns an event stream of the results.
   * @param req The request object.
   * @returns An observable of the response events.
   *
   */
  handle(req) {
    if (req.method !== "JSONP") {
      throw new Error(JSONP_ERR_WRONG_METHOD);
    } else if (req.responseType !== "json") {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
    }
    if (req.headers.keys().length > 0) {
      throw new Error(JSONP_ERR_HEADERS_NOT_SUPPORTED);
    }
    return new Observable((observer) => {
      const callback = this.nextCallback();
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
      const node = this.document.createElement("script");
      node.src = url;
      let body = null;
      let finished = false;
      this.callbackMap[callback] = (data) => {
        delete this.callbackMap[callback];
        body = data;
        finished = true;
      };
      const cleanup = () => {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        delete this.callbackMap[callback];
      };
      const onLoad = (event) => {
        this.resolvedPromise.then(() => {
          cleanup();
          if (!finished) {
            observer.error(new HttpErrorResponse({
              url,
              status: 0,
              statusText: "JSONP Error",
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          }
          observer.next(new HttpResponse({
            body,
            status: HttpStatusCode.Ok,
            statusText: "OK",
            url
          }));
          observer.complete();
        });
      };
      const onError = (error) => {
        cleanup();
        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: "JSONP Error",
          url
        }));
      };
      node.addEventListener("load", onLoad);
      node.addEventListener("error", onError);
      this.document.body.appendChild(node);
      observer.next({
        type: HttpEventType.Sent
      });
      return () => {
        if (!finished) {
          this.removeListeners(node);
        }
        cleanup();
      };
    });
  }
  removeListeners(script) {
    foreignDocument ??= this.document.implementation.createHTMLDocument();
    foreignDocument.adoptNode(script);
  }
};
_JsonpClientBackend.\u0275fac = function JsonpClientBackend_Factory(t) {
  return new (t || _JsonpClientBackend)(\u0275\u0275inject(JsonpCallbackContext), \u0275\u0275inject(DOCUMENT));
};
_JsonpClientBackend.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _JsonpClientBackend,
  factory: _JsonpClientBackend.\u0275fac
});
var JsonpClientBackend = _JsonpClientBackend;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpClientBackend, [{
    type: Injectable
  }], () => [{
    type: JsonpCallbackContext
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function jsonpInterceptorFn(req, next) {
  if (req.method === "JSONP") {
    return inject(JsonpClientBackend).handle(req);
  }
  return next(req);
}
var _JsonpInterceptor = class _JsonpInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param initialRequest The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */
  intercept(initialRequest, next) {
    return runInInjectionContext(this.injector, () => jsonpInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
  }
};
_JsonpInterceptor.\u0275fac = function JsonpInterceptor_Factory(t) {
  return new (t || _JsonpInterceptor)(\u0275\u0275inject(EnvironmentInjector));
};
_JsonpInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _JsonpInterceptor,
  factory: _JsonpInterceptor.\u0275fac
});
var JsonpInterceptor = _JsonpInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonpInterceptor, [{
    type: Injectable
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var XSSI_PREFIX = /^\)\]\}',?\n/;
function getResponseUrl(xhr) {
  if ("responseURL" in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }
  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader("X-Request-URL");
  }
  return null;
}
var _HttpXhrBackend = class _HttpXhrBackend {
  constructor(xhrFactory) {
    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */
  handle(req) {
    if (req.method === "JSONP") {
      throw new RuntimeError(-2800, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot make a JSONP request without JSONP support. To fix the problem, either add the \`withJsonpSupport()\` call (if \`provideHttpClient()\` is used) or import the \`HttpClientJsonpModule\` in the root NgModule.`);
    }
    const xhrFactory = this.xhrFactory;
    const source = xhrFactory.\u0275loadImpl ? from(xhrFactory.\u0275loadImpl()) : of(null);
    return source.pipe(switchMap(() => {
      return new Observable((observer) => {
        const xhr = xhrFactory.build();
        xhr.open(req.method, req.urlWithParams);
        if (req.withCredentials) {
          xhr.withCredentials = true;
        }
        req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(",")));
        if (!req.headers.has("Accept")) {
          xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
        }
        if (!req.headers.has("Content-Type")) {
          const detectedType = req.detectContentTypeHeader();
          if (detectedType !== null) {
            xhr.setRequestHeader("Content-Type", detectedType);
          }
        }
        if (req.responseType) {
          const responseType = req.responseType.toLowerCase();
          xhr.responseType = responseType !== "json" ? responseType : "text";
        }
        const reqBody = req.serializeBody();
        let headerResponse = null;
        const partialFromXhr = () => {
          if (headerResponse !== null) {
            return headerResponse;
          }
          const statusText = xhr.statusText || "OK";
          const headers = new HttpHeaders(xhr.getAllResponseHeaders());
          const url = getResponseUrl(xhr) || req.url;
          headerResponse = new HttpHeaderResponse({
            headers,
            status: xhr.status,
            statusText,
            url
          });
          return headerResponse;
        };
        const onLoad = () => {
          let {
            headers,
            status,
            statusText,
            url
          } = partialFromXhr();
          let body = null;
          if (status !== HttpStatusCode.NoContent) {
            body = typeof xhr.response === "undefined" ? xhr.responseText : xhr.response;
          }
          if (status === 0) {
            status = !!body ? HttpStatusCode.Ok : 0;
          }
          let ok = status >= 200 && status < 300;
          if (req.responseType === "json" && typeof body === "string") {
            const originalBody = body;
            body = body.replace(XSSI_PREFIX, "");
            try {
              body = body !== "" ? JSON.parse(body) : null;
            } catch (error) {
              body = originalBody;
              if (ok) {
                ok = false;
                body = {
                  error,
                  text: body
                };
              }
            }
          }
          if (ok) {
            observer.next(new HttpResponse({
              body,
              headers,
              status,
              statusText,
              url: url || void 0
            }));
            observer.complete();
          } else {
            observer.error(new HttpErrorResponse({
              // The error in this case is the response body (error from the server).
              error: body,
              headers,
              status,
              statusText,
              url: url || void 0
            }));
          }
        };
        const onError = (error) => {
          const {
            url
          } = partialFromXhr();
          const res = new HttpErrorResponse({
            error,
            status: xhr.status || 0,
            statusText: xhr.statusText || "Unknown Error",
            url: url || void 0
          });
          observer.error(res);
        };
        let sentHeaders = false;
        const onDownProgress = (event) => {
          if (!sentHeaders) {
            observer.next(partialFromXhr());
            sentHeaders = true;
          }
          let progressEvent = {
            type: HttpEventType.DownloadProgress,
            loaded: event.loaded
          };
          if (event.lengthComputable) {
            progressEvent.total = event.total;
          }
          if (req.responseType === "text" && !!xhr.responseText) {
            progressEvent.partialText = xhr.responseText;
          }
          observer.next(progressEvent);
        };
        const onUpProgress = (event) => {
          let progress = {
            type: HttpEventType.UploadProgress,
            loaded: event.loaded
          };
          if (event.lengthComputable) {
            progress.total = event.total;
          }
          observer.next(progress);
        };
        xhr.addEventListener("load", onLoad);
        xhr.addEventListener("error", onError);
        xhr.addEventListener("timeout", onError);
        xhr.addEventListener("abort", onError);
        if (req.reportProgress) {
          xhr.addEventListener("progress", onDownProgress);
          if (reqBody !== null && xhr.upload) {
            xhr.upload.addEventListener("progress", onUpProgress);
          }
        }
        xhr.send(reqBody);
        observer.next({
          type: HttpEventType.Sent
        });
        return () => {
          xhr.removeEventListener("error", onError);
          xhr.removeEventListener("abort", onError);
          xhr.removeEventListener("load", onLoad);
          xhr.removeEventListener("timeout", onError);
          if (req.reportProgress) {
            xhr.removeEventListener("progress", onDownProgress);
            if (reqBody !== null && xhr.upload) {
              xhr.upload.removeEventListener("progress", onUpProgress);
            }
          }
          if (xhr.readyState !== xhr.DONE) {
            xhr.abort();
          }
        };
      });
    }));
  }
};
_HttpXhrBackend.\u0275fac = function HttpXhrBackend_Factory(t) {
  return new (t || _HttpXhrBackend)(\u0275\u0275inject(XhrFactory));
};
_HttpXhrBackend.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HttpXhrBackend,
  factory: _HttpXhrBackend.\u0275fac
});
var HttpXhrBackend = _HttpXhrBackend;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXhrBackend, [{
    type: Injectable
  }], () => [{
    type: XhrFactory
  }], null);
})();
var XSRF_ENABLED = new InjectionToken(ngDevMode ? "XSRF_ENABLED" : "");
var XSRF_DEFAULT_COOKIE_NAME = "XSRF-TOKEN";
var XSRF_COOKIE_NAME = new InjectionToken(ngDevMode ? "XSRF_COOKIE_NAME" : "", {
  providedIn: "root",
  factory: () => XSRF_DEFAULT_COOKIE_NAME
});
var XSRF_DEFAULT_HEADER_NAME = "X-XSRF-TOKEN";
var XSRF_HEADER_NAME = new InjectionToken(ngDevMode ? "XSRF_HEADER_NAME" : "", {
  providedIn: "root",
  factory: () => XSRF_DEFAULT_HEADER_NAME
});
var HttpXsrfTokenExtractor = class {
};
var _HttpXsrfCookieExtractor = class _HttpXsrfCookieExtractor {
  constructor(doc, platform, cookieName) {
    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
    this.lastCookieString = "";
    this.lastToken = null;
    this.parseCount = 0;
  }
  getToken() {
    if (this.platform === "server") {
      return null;
    }
    const cookieString = this.doc.cookie || "";
    if (cookieString !== this.lastCookieString) {
      this.parseCount++;
      this.lastToken = parseCookieValue(cookieString, this.cookieName);
      this.lastCookieString = cookieString;
    }
    return this.lastToken;
  }
};
_HttpXsrfCookieExtractor.\u0275fac = function HttpXsrfCookieExtractor_Factory(t) {
  return new (t || _HttpXsrfCookieExtractor)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(XSRF_COOKIE_NAME));
};
_HttpXsrfCookieExtractor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HttpXsrfCookieExtractor,
  factory: _HttpXsrfCookieExtractor.\u0275fac
});
var HttpXsrfCookieExtractor = _HttpXsrfCookieExtractor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfCookieExtractor, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [XSRF_COOKIE_NAME]
    }]
  }], null);
})();
function xsrfInterceptorFn(req, next) {
  const lcUrl = req.url.toLowerCase();
  if (!inject(XSRF_ENABLED) || req.method === "GET" || req.method === "HEAD" || lcUrl.startsWith("http://") || lcUrl.startsWith("https://")) {
    return next(req);
  }
  const token = inject(HttpXsrfTokenExtractor).getToken();
  const headerName = inject(XSRF_HEADER_NAME);
  if (token != null && !req.headers.has(headerName)) {
    req = req.clone({
      headers: req.headers.set(headerName, token)
    });
  }
  return next(req);
}
var _HttpXsrfInterceptor = class _HttpXsrfInterceptor {
  constructor(injector) {
    this.injector = injector;
  }
  intercept(initialRequest, next) {
    return runInInjectionContext(this.injector, () => xsrfInterceptorFn(initialRequest, (downstreamRequest) => next.handle(downstreamRequest)));
  }
};
_HttpXsrfInterceptor.\u0275fac = function HttpXsrfInterceptor_Factory(t) {
  return new (t || _HttpXsrfInterceptor)(\u0275\u0275inject(EnvironmentInjector));
};
_HttpXsrfInterceptor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HttpXsrfInterceptor,
  factory: _HttpXsrfInterceptor.\u0275fac
});
var HttpXsrfInterceptor = _HttpXsrfInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpXsrfInterceptor, [{
    type: Injectable
  }], () => [{
    type: EnvironmentInjector
  }], null);
})();
var HttpFeatureKind;
(function(HttpFeatureKind2) {
  HttpFeatureKind2[HttpFeatureKind2["Interceptors"] = 0] = "Interceptors";
  HttpFeatureKind2[HttpFeatureKind2["LegacyInterceptors"] = 1] = "LegacyInterceptors";
  HttpFeatureKind2[HttpFeatureKind2["CustomXsrfConfiguration"] = 2] = "CustomXsrfConfiguration";
  HttpFeatureKind2[HttpFeatureKind2["NoXsrfProtection"] = 3] = "NoXsrfProtection";
  HttpFeatureKind2[HttpFeatureKind2["JsonpSupport"] = 4] = "JsonpSupport";
  HttpFeatureKind2[HttpFeatureKind2["RequestsMadeViaParent"] = 5] = "RequestsMadeViaParent";
  HttpFeatureKind2[HttpFeatureKind2["Fetch"] = 6] = "Fetch";
})(HttpFeatureKind || (HttpFeatureKind = {}));
function makeHttpFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
function provideHttpClient(...features) {
  if (ngDevMode) {
    const featureKinds = new Set(features.map((f) => f.\u0275kind));
    if (featureKinds.has(HttpFeatureKind.NoXsrfProtection) && featureKinds.has(HttpFeatureKind.CustomXsrfConfiguration)) {
      throw new Error(ngDevMode ? `Configuration error: found both withXsrfConfiguration() and withNoXsrfProtection() in the same call to provideHttpClient(), which is a contradiction.` : "");
    }
  }
  const providers = [HttpClient, HttpXhrBackend, HttpInterceptorHandler, {
    provide: HttpHandler,
    useExisting: HttpInterceptorHandler
  }, {
    provide: HttpBackend,
    useExisting: HttpXhrBackend
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: xsrfInterceptorFn,
    multi: true
  }, {
    provide: XSRF_ENABLED,
    useValue: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }];
  for (const feature of features) {
    providers.push(...feature.\u0275providers);
  }
  return makeEnvironmentProviders(providers);
}
var LEGACY_INTERCEPTOR_FN = new InjectionToken(ngDevMode ? "LEGACY_INTERCEPTOR_FN" : "");
function withInterceptorsFromDi() {
  return makeHttpFeature(HttpFeatureKind.LegacyInterceptors, [{
    provide: LEGACY_INTERCEPTOR_FN,
    useFactory: legacyInterceptorFnFactory
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useExisting: LEGACY_INTERCEPTOR_FN,
    multi: true
  }]);
}
function withXsrfConfiguration({
  cookieName,
  headerName
}) {
  const providers = [];
  if (cookieName !== void 0) {
    providers.push({
      provide: XSRF_COOKIE_NAME,
      useValue: cookieName
    });
  }
  if (headerName !== void 0) {
    providers.push({
      provide: XSRF_HEADER_NAME,
      useValue: headerName
    });
  }
  return makeHttpFeature(HttpFeatureKind.CustomXsrfConfiguration, providers);
}
function withNoXsrfProtection() {
  return makeHttpFeature(HttpFeatureKind.NoXsrfProtection, [{
    provide: XSRF_ENABLED,
    useValue: false
  }]);
}
function withJsonpSupport() {
  return makeHttpFeature(HttpFeatureKind.JsonpSupport, [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTOR_FNS,
    useValue: jsonpInterceptorFn,
    multi: true
  }]);
}
var _HttpClientXsrfModule = class _HttpClientXsrfModule {
  /**
   * Disable the default XSRF protection.
   */
  static disable() {
    return {
      ngModule: _HttpClientXsrfModule,
      providers: [withNoXsrfProtection().\u0275providers]
    };
  }
  /**
   * Configure XSRF protection.
   * @param options An object that can specify either or both
   * cookie name or header name.
   * - Cookie name default is `XSRF-TOKEN`.
   * - Header name default is `X-XSRF-TOKEN`.
   *
   */
  static withOptions(options = {}) {
    return {
      ngModule: _HttpClientXsrfModule,
      providers: withXsrfConfiguration(options).\u0275providers
    };
  }
};
_HttpClientXsrfModule.\u0275fac = function HttpClientXsrfModule_Factory(t) {
  return new (t || _HttpClientXsrfModule)();
};
_HttpClientXsrfModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _HttpClientXsrfModule
});
_HttpClientXsrfModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [HttpXsrfInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useExisting: HttpXsrfInterceptor,
    multi: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }, withXsrfConfiguration({
    cookieName: XSRF_DEFAULT_COOKIE_NAME,
    headerName: XSRF_DEFAULT_HEADER_NAME
  }).\u0275providers, {
    provide: XSRF_ENABLED,
    useValue: true
  }]
});
var HttpClientXsrfModule = _HttpClientXsrfModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientXsrfModule, [{
    type: NgModule,
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, withXsrfConfiguration({
        cookieName: XSRF_DEFAULT_COOKIE_NAME,
        headerName: XSRF_DEFAULT_HEADER_NAME
      }).\u0275providers, {
        provide: XSRF_ENABLED,
        useValue: true
      }]
    }]
  }], null, null);
})();
var _HttpClientModule = class _HttpClientModule {
};
_HttpClientModule.\u0275fac = function HttpClientModule_Factory(t) {
  return new (t || _HttpClientModule)();
};
_HttpClientModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _HttpClientModule
});
_HttpClientModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideHttpClient(withInterceptorsFromDi())]
});
var HttpClientModule = _HttpClientModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientModule, [{
    type: NgModule,
    args: [{
      /**
       * Configures the [dependency injector](guide/glossary#injector) where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [provideHttpClient(withInterceptorsFromDi())]
    }]
  }], null, null);
})();
var _HttpClientJsonpModule = class _HttpClientJsonpModule {
};
_HttpClientJsonpModule.\u0275fac = function HttpClientJsonpModule_Factory(t) {
  return new (t || _HttpClientJsonpModule)();
};
_HttpClientJsonpModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _HttpClientJsonpModule
});
_HttpClientJsonpModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [withJsonpSupport().\u0275providers]
});
var HttpClientJsonpModule = _HttpClientJsonpModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientJsonpModule, [{
    type: NgModule,
    args: [{
      providers: [withJsonpSupport().\u0275providers]
    }]
  }], null, null);
})();
var BODY = "b";
var HEADERS = "h";
var STATUS = "s";
var STATUS_TEXT = "st";
var URL2 = "u";
var RESPONSE_TYPE = "rt";
var CACHE_OPTIONS = new InjectionToken(ngDevMode ? "HTTP_TRANSFER_STATE_CACHE_OPTIONS" : "");
var ALLOWED_METHODS = ["GET", "HEAD"];
function transferCacheInterceptorFn(req, next) {
  const _a = inject(CACHE_OPTIONS), {
    isCacheActive
  } = _a, globalOptions = __objRest(_a, [
    "isCacheActive"
  ]);
  const {
    transferCache: requestOptions,
    method: requestMethod
  } = req;
  if (!isCacheActive || // POST requests are allowed either globally or at request level
  requestMethod === "POST" && !globalOptions.includePostRequests && !requestOptions || requestMethod !== "POST" && !ALLOWED_METHODS.includes(requestMethod) || requestOptions === false || //
  globalOptions.filter?.(req) === false) {
    return next(req);
  }
  const transferState = inject(TransferState);
  const storeKey = makeCacheKey(req);
  const response = transferState.get(storeKey, null);
  let headersToInclude = globalOptions.includeHeaders;
  if (typeof requestOptions === "object" && requestOptions.includeHeaders) {
    headersToInclude = requestOptions.includeHeaders;
  }
  if (response) {
    const {
      [BODY]: undecodedBody,
      [RESPONSE_TYPE]: responseType,
      [HEADERS]: httpHeaders,
      [STATUS]: status,
      [STATUS_TEXT]: statusText,
      [URL2]: url
    } = response;
    let body = undecodedBody;
    switch (responseType) {
      case "arraybuffer":
        body = new TextEncoder().encode(undecodedBody).buffer;
        break;
      case "blob":
        body = new Blob([undecodedBody]);
        break;
    }
    let headers = new HttpHeaders(httpHeaders);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      headers = appendMissingHeadersDetection(req.url, headers, headersToInclude ?? []);
    }
    return of(new HttpResponse({
      body,
      headers,
      status,
      statusText,
      url
    }));
  }
  const isServer = isPlatformServer(inject(PLATFORM_ID));
  return next(req).pipe(tap((event) => {
    if (event instanceof HttpResponse && isServer) {
      transferState.set(storeKey, {
        [BODY]: event.body,
        [HEADERS]: getFilteredHeaders(event.headers, headersToInclude),
        [STATUS]: event.status,
        [STATUS_TEXT]: event.statusText,
        [URL2]: event.url || "",
        [RESPONSE_TYPE]: req.responseType
      });
    }
  }));
}
function getFilteredHeaders(headers, includeHeaders) {
  if (!includeHeaders) {
    return {};
  }
  const headersMap = {};
  for (const key of includeHeaders) {
    const values = headers.getAll(key);
    if (values !== null) {
      headersMap[key] = values;
    }
  }
  return headersMap;
}
function sortAndConcatParams(params) {
  return [...params.keys()].sort().map((k) => `${k}=${params.getAll(k)}`).join("&");
}
function makeCacheKey(request) {
  const {
    params,
    method,
    responseType,
    url
  } = request;
  const encodedParams = sortAndConcatParams(params);
  let serializedBody = request.serializeBody();
  if (serializedBody instanceof URLSearchParams) {
    serializedBody = sortAndConcatParams(serializedBody);
  } else if (typeof serializedBody !== "string") {
    serializedBody = "";
  }
  const key = [method, responseType, url, serializedBody, encodedParams].join("|");
  const hash = generateHash(key);
  return makeStateKey(hash);
}
function generateHash(value) {
  let hash = 0;
  for (const char of value) {
    hash = Math.imul(31, hash) + char.charCodeAt(0) << 0;
  }
  hash += 2147483647 + 1;
  return hash.toString();
}
function withHttpTransferCache(cacheOptions) {
  return [{
    provide: CACHE_OPTIONS,
    useFactory: () => {
      performanceMarkFeature("NgHttpTransferCache");
      return __spreadValues({
        isCacheActive: true
      }, cacheOptions);
    }
  }, {
    provide: HTTP_ROOT_INTERCEPTOR_FNS,
    useValue: transferCacheInterceptorFn,
    multi: true,
    deps: [TransferState, CACHE_OPTIONS]
  }, {
    provide: APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: () => {
      const appRef = inject(ApplicationRef);
      const cacheState = inject(CACHE_OPTIONS);
      return () => {
        whenStable(appRef).then(() => {
          cacheState.isCacheActive = false;
        });
      };
    }
  }];
}
function appendMissingHeadersDetection(url, headers, headersToInclude) {
  const warningProduced = /* @__PURE__ */ new Set();
  return new Proxy(headers, {
    get(target, prop) {
      const value = Reflect.get(target, prop);
      const methods = /* @__PURE__ */ new Set(["get", "has", "getAll"]);
      if (typeof value !== "function" || !methods.has(prop)) {
        return value;
      }
      return (headerName) => {
        const key = (prop + ":" + headerName).toLowerCase();
        if (!headersToInclude.includes(headerName) && !warningProduced.has(key)) {
          warningProduced.add(key);
          const truncatedUrl = truncateMiddle(url);
          console.warn(formatRuntimeError(2802, `Angular detected that the \`${headerName}\` header is accessed, but the value of the header was not transferred from the server to the client by the HttpTransferCache. To include the value of the \`${headerName}\` header for the \`${truncatedUrl}\` request, use the \`includeHeaders\` list. The \`includeHeaders\` can be defined either on a request level by adding the \`transferCache\` parameter, or on an application level by adding the \`httpCacheTransfer.includeHeaders\` argument to the \`provideClientHydration()\` call. `));
        }
        return value.apply(target, [headerName]);
      };
    }
  });
}

// node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var GenericBrowserDomAdapter = class extends DomAdapter {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
};
var BrowserDomAdapter = class _BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    setRootDomAdapter(new _BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener);
    return () => {
      el.removeEventListener(evt, listener);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument("fakeTitle");
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === "window") {
      return window;
    }
    if (target === "document") {
      return doc;
    }
    if (target === "body") {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return parseCookieValue(document.cookie, name);
  }
};
var baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector("base");
  return baseElement ? baseElement.getAttribute("href") : null;
}
function relativePath(url) {
  return new URL(url, document.baseURI).pathname;
}
var BrowserGetTestability = class {
  addToWindow(registry) {
    _global["getAngularTestability"] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new RuntimeError(5103, (typeof ngDevMode === "undefined" || ngDevMode) && "Could not find testability for element.");
      }
      return testability;
    };
    _global["getAllAngularTestabilities"] = () => registry.getAllTestabilities();
    _global["getAllAngularRootElements"] = () => registry.getAllRootElements();
    const whenAllStable = (callback) => {
      const testabilities = _global["getAllAngularTestabilities"]();
      let count = testabilities.length;
      const decrement = function() {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach((testability) => {
        testability.whenStable(decrement);
      });
    };
    if (!_global["frameworkStabilizers"]) {
      _global["frameworkStabilizers"] = [];
    }
    _global["frameworkStabilizers"].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if (getDOM().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
};
var _BrowserXhr = class _BrowserXhr {
  build() {
    return new XMLHttpRequest();
  }
};
_BrowserXhr.\u0275fac = function BrowserXhr_Factory(t) {
  return new (t || _BrowserXhr)();
};
_BrowserXhr.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _BrowserXhr,
  factory: _BrowserXhr.\u0275fac
});
var BrowserXhr = _BrowserXhr;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserXhr, [{
    type: Injectable
  }], null, null);
})();
var EVENT_MANAGER_PLUGINS = new InjectionToken(ngDevMode ? "EventManagerPlugins" : "");
var _EventManager = class _EventManager {
  /**
   * Initializes an instance of the event-manager service.
   */
  constructor(plugins, _zone) {
    this._zone = _zone;
    this._eventNameToPlugin = /* @__PURE__ */ new Map();
    plugins.forEach((plugin) => {
      plugin.manager = this;
    });
    this._plugins = plugins.slice().reverse();
  }
  /**
   * Registers a handler for a specific element and event.
   *
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns  A callback function that can be used to remove the handler.
   */
  addEventListener(element, eventName, handler) {
    const plugin = this._findPluginFor(eventName);
    return plugin.addEventListener(element, eventName, handler);
  }
  /**
   * Retrieves the compilation zone in which event listeners are registered.
   */
  getZone() {
    return this._zone;
  }
  /** @internal */
  _findPluginFor(eventName) {
    let plugin = this._eventNameToPlugin.get(eventName);
    if (plugin) {
      return plugin;
    }
    const plugins = this._plugins;
    plugin = plugins.find((plugin2) => plugin2.supports(eventName));
    if (!plugin) {
      throw new RuntimeError(5101, (typeof ngDevMode === "undefined" || ngDevMode) && `No event manager plugin found for event ${eventName}`);
    }
    this._eventNameToPlugin.set(eventName, plugin);
    return plugin;
  }
};
_EventManager.\u0275fac = function EventManager_Factory(t) {
  return new (t || _EventManager)(\u0275\u0275inject(EVENT_MANAGER_PLUGINS), \u0275\u0275inject(NgZone));
};
_EventManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _EventManager,
  factory: _EventManager.\u0275fac
});
var EventManager = _EventManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventManager, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [EVENT_MANAGER_PLUGINS]
    }]
  }, {
    type: NgZone
  }], null);
})();
var EventManagerPlugin = class {
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
};
var APP_ID_ATTRIBUTE_NAME = "ng-app-id";
var _SharedStylesHost = class _SharedStylesHost {
  constructor(doc, appId, nonce, platformId = {}) {
    this.doc = doc;
    this.appId = appId;
    this.nonce = nonce;
    this.platformId = platformId;
    this.styleRef = /* @__PURE__ */ new Map();
    this.hostNodes = /* @__PURE__ */ new Set();
    this.styleNodesInDOM = this.collectServerRenderedStyles();
    this.platformIsServer = isPlatformServer(platformId);
    this.resetHostNodes();
  }
  addStyles(styles) {
    for (const style2 of styles) {
      const usageCount = this.changeUsageCount(style2, 1);
      if (usageCount === 1) {
        this.onStyleAdded(style2);
      }
    }
  }
  removeStyles(styles) {
    for (const style2 of styles) {
      const usageCount = this.changeUsageCount(style2, -1);
      if (usageCount <= 0) {
        this.onStyleRemoved(style2);
      }
    }
  }
  ngOnDestroy() {
    const styleNodesInDOM = this.styleNodesInDOM;
    if (styleNodesInDOM) {
      styleNodesInDOM.forEach((node) => node.remove());
      styleNodesInDOM.clear();
    }
    for (const style2 of this.getAllStyles()) {
      this.onStyleRemoved(style2);
    }
    this.resetHostNodes();
  }
  addHost(hostNode) {
    this.hostNodes.add(hostNode);
    for (const style2 of this.getAllStyles()) {
      this.addStyleToHost(hostNode, style2);
    }
  }
  removeHost(hostNode) {
    this.hostNodes.delete(hostNode);
  }
  getAllStyles() {
    return this.styleRef.keys();
  }
  onStyleAdded(style2) {
    for (const host of this.hostNodes) {
      this.addStyleToHost(host, style2);
    }
  }
  onStyleRemoved(style2) {
    const styleRef = this.styleRef;
    styleRef.get(style2)?.elements?.forEach((node) => node.remove());
    styleRef.delete(style2);
  }
  collectServerRenderedStyles() {
    const styles = this.doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${this.appId}"]`);
    if (styles?.length) {
      const styleMap = /* @__PURE__ */ new Map();
      styles.forEach((style2) => {
        if (style2.textContent != null) {
          styleMap.set(style2.textContent, style2);
        }
      });
      return styleMap;
    }
    return null;
  }
  changeUsageCount(style2, delta) {
    const map2 = this.styleRef;
    if (map2.has(style2)) {
      const styleRefValue = map2.get(style2);
      styleRefValue.usage += delta;
      return styleRefValue.usage;
    }
    map2.set(style2, {
      usage: delta,
      elements: []
    });
    return delta;
  }
  getStyleElement(host, style2) {
    const styleNodesInDOM = this.styleNodesInDOM;
    const styleEl = styleNodesInDOM?.get(style2);
    if (styleEl?.parentNode === host) {
      styleNodesInDOM.delete(style2);
      styleEl.removeAttribute(APP_ID_ATTRIBUTE_NAME);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        styleEl.setAttribute("ng-style-reused", "");
      }
      return styleEl;
    } else {
      const styleEl2 = this.doc.createElement("style");
      if (this.nonce) {
        styleEl2.setAttribute("nonce", this.nonce);
      }
      styleEl2.textContent = style2;
      if (this.platformIsServer) {
        styleEl2.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
      }
      host.appendChild(styleEl2);
      return styleEl2;
    }
  }
  addStyleToHost(host, style2) {
    const styleEl = this.getStyleElement(host, style2);
    const styleRef = this.styleRef;
    const styleElRef = styleRef.get(style2)?.elements;
    if (styleElRef) {
      styleElRef.push(styleEl);
    } else {
      styleRef.set(style2, {
        elements: [styleEl],
        usage: 1
      });
    }
  }
  resetHostNodes() {
    const hostNodes = this.hostNodes;
    hostNodes.clear();
    hostNodes.add(this.doc.head);
  }
};
_SharedStylesHost.\u0275fac = function SharedStylesHost_Factory(t) {
  return new (t || _SharedStylesHost)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(APP_ID), \u0275\u0275inject(CSP_NONCE, 8), \u0275\u0275inject(PLATFORM_ID));
};
_SharedStylesHost.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _SharedStylesHost,
  factory: _SharedStylesHost.\u0275fac
});
var SharedStylesHost = _SharedStylesHost;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedStylesHost, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var NAMESPACE_URIS = {
  "svg": "http://www.w3.org/2000/svg",
  "xhtml": "http://www.w3.org/1999/xhtml",
  "xlink": "http://www.w3.org/1999/xlink",
  "xml": "http://www.w3.org/XML/1998/namespace",
  "xmlns": "http://www.w3.org/2000/xmlns/",
  "math": "http://www.w3.org/1998/MathML/"
};
var COMPONENT_REGEX = /%COMP%/g;
var COMPONENT_VARIABLE = "%COMP%";
var HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
var CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
var REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
var REMOVE_STYLES_ON_COMPONENT_DESTROY = new InjectionToken(ngDevMode ? "RemoveStylesOnCompDestroy" : "", {
  providedIn: "root",
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map((s) => s.replace(COMPONENT_REGEX, compId));
}
var _DomRendererFactory2 = class _DomRendererFactory2 {
  constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null) {
    this.eventManager = eventManager;
    this.sharedStylesHost = sharedStylesHost;
    this.appId = appId;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.doc = doc;
    this.platformId = platformId;
    this.ngZone = ngZone;
    this.nonce = nonce;
    this.rendererByCompId = /* @__PURE__ */ new Map();
    this.platformIsServer = isPlatformServer(platformId);
    this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer);
  }
  createRenderer(element, type) {
    if (!element || !type) {
      return this.defaultRenderer;
    }
    if (this.platformIsServer && type.encapsulation === ViewEncapsulation$1.ShadowDom) {
      type = __spreadProps(__spreadValues({}, type), {
        encapsulation: ViewEncapsulation$1.Emulated
      });
    }
    const renderer = this.getOrCreateRenderer(element, type);
    if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
      renderer.applyToHost(element);
    } else if (renderer instanceof NoneEncapsulationDomRenderer) {
      renderer.applyStyles();
    }
    return renderer;
  }
  getOrCreateRenderer(element, type) {
    const rendererByCompId = this.rendererByCompId;
    let renderer = rendererByCompId.get(type.id);
    if (!renderer) {
      const doc = this.doc;
      const ngZone = this.ngZone;
      const eventManager = this.eventManager;
      const sharedStylesHost = this.sharedStylesHost;
      const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
      const platformIsServer = this.platformIsServer;
      switch (type.encapsulation) {
        case ViewEncapsulation$1.Emulated:
          renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
        case ViewEncapsulation$1.ShadowDom:
          return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer);
        default:
          renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
          break;
      }
      rendererByCompId.set(type.id, renderer);
    }
    return renderer;
  }
  ngOnDestroy() {
    this.rendererByCompId.clear();
  }
};
_DomRendererFactory2.\u0275fac = function DomRendererFactory2_Factory(t) {
  return new (t || _DomRendererFactory2)(\u0275\u0275inject(EventManager), \u0275\u0275inject(SharedStylesHost), \u0275\u0275inject(APP_ID), \u0275\u0275inject(REMOVE_STYLES_ON_COMPONENT_DESTROY), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(NgZone), \u0275\u0275inject(CSP_NONCE));
};
_DomRendererFactory2.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DomRendererFactory2,
  factory: _DomRendererFactory2.\u0275fac
});
var DomRendererFactory2 = _DomRendererFactory2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomRendererFactory2, [{
    type: Injectable
  }], () => [{
    type: EventManager
  }, {
    type: SharedStylesHost
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [APP_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REMOVE_STYLES_ON_COMPONENT_DESTROY]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
var DefaultDomRenderer2 = class {
  constructor(eventManager, doc, ngZone, platformIsServer) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.data = /* @__PURE__ */ Object.create(null);
    this.throwOnSyntheticProps = true;
    this.destroyNode = null;
  }
  destroy() {
  }
  createElement(name, namespace) {
    if (namespace) {
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === "string" ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new RuntimeError(-5104, (typeof ngDevMode === "undefined" || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = "";
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ":" + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style2, value, flags) {
    if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) {
      el.style.setProperty(style2, value, flags & RendererStyleFlags2.Important ? "important" : "");
    } else {
      el.style[style2] = value;
    }
  }
  removeStyle(el, style2, flags) {
    if (flags & RendererStyleFlags2.DashCase) {
      el.style.removeProperty(style2);
    } else {
      el.style[style2] = "";
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, "property");
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, "listener");
    if (typeof target === "string") {
      target = getDOM().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new Error(`Unsupported event target ${target} for event ${event}`);
      }
    }
    return this.eventManager.addEventListener(target, event, this.decoratePreventDefault(callback));
  }
  decoratePreventDefault(eventHandler) {
    return (event) => {
      if (event === "__ngUnwrap__") {
        return eventHandler;
      }
      const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return void 0;
    };
  }
};
var AT_CHARCODE = (() => "@".charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new RuntimeError(5105, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === "TEMPLATE" && node.content !== void 0;
}
var ShadowDomRenderer = class extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: "open"
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = shimStylesContent(component.id, component.styles);
    for (const style2 of styles) {
      const styleEl = document.createElement("style");
      if (nonce) {
        styleEl.setAttribute("nonce", nonce);
      }
      styleEl.textContent = style2;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
};
var NoneEncapsulationDomRenderer = class extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.styles = compId ? shimStylesContent(compId, component.styles) : component.styles;
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
  }
};
var EmulatedEncapsulationDomRenderer2 = class extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer) {
    const compId = appId + "-" + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, "");
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, "");
    return el;
  }
};
var _DomEventsPlugin = class _DomEventsPlugin extends EventManagerPlugin {
  constructor(doc) {
    super(doc);
  }
  // This plugin should come last in the list of plugins, because it accepts all
  // events.
  supports(eventName) {
    return true;
  }
  addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler, false);
    return () => this.removeEventListener(element, eventName, handler);
  }
  removeEventListener(target, eventName, callback) {
    return target.removeEventListener(eventName, callback);
  }
};
_DomEventsPlugin.\u0275fac = function DomEventsPlugin_Factory(t) {
  return new (t || _DomEventsPlugin)(\u0275\u0275inject(DOCUMENT));
};
_DomEventsPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DomEventsPlugin,
  factory: _DomEventsPlugin.\u0275fac
});
var DomEventsPlugin = _DomEventsPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var MODIFIER_KEYS = ["alt", "control", "meta", "shift"];
var _keyMap = {
  "\b": "Backspace",
  "	": "Tab",
  "\x7F": "Delete",
  "\x1B": "Escape",
  "Del": "Delete",
  "Esc": "Escape",
  "Left": "ArrowLeft",
  "Right": "ArrowRight",
  "Up": "ArrowUp",
  "Down": "ArrowDown",
  "Menu": "ContextMenu",
  "Scroll": "ScrollLock",
  "Win": "OS"
};
var MODIFIER_KEY_GETTERS = {
  "alt": (event) => event.altKey,
  "control": (event) => event.ctrlKey,
  "meta": (event) => event.metaKey,
  "shift": (event) => event.shiftKey
};
var _KeyEventsPlugin = class _KeyEventsPlugin extends EventManagerPlugin {
  /**
   * Initializes an instance of the browser plug-in.
   * @param doc The document in which key events will be detected.
   */
  constructor(doc) {
    super(doc);
  }
  /**
   * Reports whether a named key event is supported.
   * @param eventName The event name to query.
   * @return True if the named key event is supported.
   */
  supports(eventName) {
    return _KeyEventsPlugin.parseEventName(eventName) != null;
  }
  /**
   * Registers a handler for a specific element and key event.
   * @param element The HTML element to receive event notifications.
   * @param eventName The name of the key event to listen for.
   * @param handler A function to call when the notification occurs. Receives the
   * event object as an argument.
   * @returns The key event that was registered.
   */
  addEventListener(element, eventName, handler) {
    const parsedEvent = _KeyEventsPlugin.parseEventName(eventName);
    const outsideHandler = _KeyEventsPlugin.eventCallback(parsedEvent["fullKey"], handler, this.manager.getZone());
    return this.manager.getZone().runOutsideAngular(() => {
      return getDOM().onAndCancel(element, parsedEvent["domEventName"], outsideHandler);
    });
  }
  /**
   * Parses the user provided full keyboard event definition and normalizes it for
   * later internal use. It ensures the string is all lowercase, converts special
   * characters to a standard spelling, and orders all the values consistently.
   *
   * @param eventName The name of the key event to listen for.
   * @returns an object with the full, normalized string, and the dom event name
   * or null in the case when the event doesn't match a keyboard event.
   */
  static parseEventName(eventName) {
    const parts = eventName.toLowerCase().split(".");
    const domEventName = parts.shift();
    if (parts.length === 0 || !(domEventName === "keydown" || domEventName === "keyup")) {
      return null;
    }
    const key = _KeyEventsPlugin._normalizeKey(parts.pop());
    let fullKey = "";
    let codeIX = parts.indexOf("code");
    if (codeIX > -1) {
      parts.splice(codeIX, 1);
      fullKey = "code.";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      const index = parts.indexOf(modifierName);
      if (index > -1) {
        parts.splice(index, 1);
        fullKey += modifierName + ".";
      }
    });
    fullKey += key;
    if (parts.length != 0 || key.length === 0) {
      return null;
    }
    const result = {};
    result["domEventName"] = domEventName;
    result["fullKey"] = fullKey;
    return result;
  }
  /**
   * Determines whether the actual keys pressed match the configured key code string.
   * The `fullKeyCode` event is normalized in the `parseEventName` method when the
   * event is attached to the DOM during the `addEventListener` call. This is unseen
   * by the end user and is normalized for internal consistency and parsing.
   *
   * @param event The keyboard event.
   * @param fullKeyCode The normalized user defined expected key event string
   * @returns boolean.
   */
  static matchEventFullKeyCode(event, fullKeyCode) {
    let keycode = _keyMap[event.key] || event.key;
    let key = "";
    if (fullKeyCode.indexOf("code.") > -1) {
      keycode = event.code;
      key = "code.";
    }
    if (keycode == null || !keycode)
      return false;
    keycode = keycode.toLowerCase();
    if (keycode === " ") {
      keycode = "space";
    } else if (keycode === ".") {
      keycode = "dot";
    }
    MODIFIER_KEYS.forEach((modifierName) => {
      if (modifierName !== keycode) {
        const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
        if (modifierGetter(event)) {
          key += modifierName + ".";
        }
      }
    });
    key += keycode;
    return key === fullKeyCode;
  }
  /**
   * Configures a handler callback for a key event.
   * @param fullKey The event name that combines all simultaneous keystrokes.
   * @param handler The function that responds to the key event.
   * @param zone The zone in which the event occurred.
   * @returns A callback function.
   */
  static eventCallback(fullKey, handler, zone) {
    return (event) => {
      if (_KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
        zone.runGuarded(() => handler(event));
      }
    };
  }
  /** @internal */
  static _normalizeKey(keyName) {
    return keyName === "esc" ? "escape" : keyName;
  }
};
_KeyEventsPlugin.\u0275fac = function KeyEventsPlugin_Factory(t) {
  return new (t || _KeyEventsPlugin)(\u0275\u0275inject(DOCUMENT));
};
_KeyEventsPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _KeyEventsPlugin,
  factory: _KeyEventsPlugin.\u0275fac
});
var KeyEventsPlugin = _KeyEventsPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KeyEventsPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new ErrorHandler();
}
function _document() {
  setDocument(document);
  return document;
}
var INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: PLATFORM_ID,
  useValue: PLATFORM_BROWSER_ID
}, {
  provide: PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: DOCUMENT,
  useFactory: _document,
  deps: []
}];
var platformBrowser = createPlatformFactory(platformCore, "browser", INTERNAL_BROWSER_PLATFORM_PROVIDERS);
var BROWSER_MODULE_PROVIDERS_MARKER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "BrowserModule Providers Marker" : "");
var TESTABILITY_PROVIDERS = [{
  provide: TESTABILITY_GETTER,
  useClass: BrowserGetTestability,
  deps: []
}, {
  provide: TESTABILITY,
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}, {
  provide: Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: Testability,
  deps: [NgZone, TestabilityRegistry, TESTABILITY_GETTER]
}];
var BROWSER_MODULE_PROVIDERS = [{
  provide: INJECTOR_SCOPE,
  useValue: "root"
}, {
  provide: ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [DOCUMENT, NgZone, PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, typeof ngDevMode === "undefined" || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
var _BrowserModule = class _BrowserModule {
  constructor(providersAlreadyPresent) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && providersAlreadyPresent) {
      throw new RuntimeError(5100, `Providers from the \`BrowserModule\` have already been loaded. If you need access to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
    }
  }
  /**
   * Configures a browser-based app to transition from a server-rendered app, if
   * one is present on the page.
   *
   * @param params An object containing an identifier for the app to transition.
   * The ID must match between the client and server versions of the app.
   * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
   *
   * @deprecated Use {@link APP_ID} instead to set the application ID.
   */
  static withServerTransition(params) {
    return {
      ngModule: _BrowserModule,
      providers: [{
        provide: APP_ID,
        useValue: params.appId
      }]
    };
  }
};
_BrowserModule.\u0275fac = function BrowserModule_Factory(t) {
  return new (t || _BrowserModule)(\u0275\u0275inject(BROWSER_MODULE_PROVIDERS_MARKER, 12));
};
_BrowserModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _BrowserModule
});
_BrowserModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
  imports: [CommonModule, ApplicationModule]
});
var BrowserModule = _BrowserModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserModule, [{
    type: NgModule,
    args: [{
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      exports: [CommonModule, ApplicationModule]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [BROWSER_MODULE_PROVIDERS_MARKER]
    }]
  }], null);
})();
var _Meta = class _Meta {
  constructor(_doc) {
    this._doc = _doc;
    this._dom = getDOM();
  }
  /**
   * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * If an existing element is found, it is returned and is not modified in any way.
   * @param tag The definition of a `<meta>` element to match or create.
   * @param forceCreation True to create a new element without checking whether one already exists.
   * @returns The existing element with the same attributes and values if found,
   * the new element if no match is found, or `null` if the tag parameter is not defined.
   */
  addTag(tag, forceCreation = false) {
    if (!tag)
      return null;
    return this._getOrCreateElement(tag, forceCreation);
  }
  /**
   * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
   * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
   * values in the provided tag definition, and verifies that all other attribute values are equal.
   * @param tags An array of tag definitions to match or create.
   * @param forceCreation True to create new elements without checking whether they already exist.
   * @returns The matching elements if found, or the new elements.
   */
  addTags(tags, forceCreation = false) {
    if (!tags)
      return [];
    return tags.reduce((result, tag) => {
      if (tag) {
        result.push(this._getOrCreateElement(tag, forceCreation));
      }
      return result;
    }, []);
  }
  /**
   * Retrieves a `<meta>` tag element in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching element, if any.
   */
  getTag(attrSelector) {
    if (!attrSelector)
      return null;
    return this._doc.querySelector(`meta[${attrSelector}]`) || null;
  }
  /**
   * Retrieves a set of `<meta>` tag elements in the current HTML document.
   * @param attrSelector The tag attribute and value to match against, in the format
   * `"tag_attribute='value string'"`.
   * @returns The matching elements, if any.
   */
  getTags(attrSelector) {
    if (!attrSelector)
      return [];
    const list = this._doc.querySelectorAll(`meta[${attrSelector}]`);
    return list ? [].slice.call(list) : [];
  }
  /**
   * Modifies an existing `<meta>` tag element in the current HTML document.
   * @param tag The tag description with which to replace the existing tag content.
   * @param selector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   * If not supplied, matches a tag with the same `name` or `property` attribute value as the
   * replacement tag.
   * @return The modified element.
   */
  updateTag(tag, selector) {
    if (!tag)
      return null;
    selector = selector || this._parseSelector(tag);
    const meta = this.getTag(selector);
    if (meta) {
      return this._setMetaElementAttributes(tag, meta);
    }
    return this._getOrCreateElement(tag, true);
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param attrSelector A tag attribute and value to match against, to identify
   * an existing tag. A string in the format `"tag_attribute=`value string`"`.
   */
  removeTag(attrSelector) {
    this.removeTagElement(this.getTag(attrSelector));
  }
  /**
   * Removes an existing `<meta>` tag element from the current HTML document.
   * @param meta The tag definition to match against to identify an existing tag.
   */
  removeTagElement(meta) {
    if (meta) {
      this._dom.remove(meta);
    }
  }
  _getOrCreateElement(meta, forceCreation = false) {
    if (!forceCreation) {
      const selector = this._parseSelector(meta);
      const elem = this.getTags(selector).filter((elem2) => this._containsAttributes(meta, elem2))[0];
      if (elem !== void 0)
        return elem;
    }
    const element = this._dom.createElement("meta");
    this._setMetaElementAttributes(meta, element);
    const head = this._doc.getElementsByTagName("head")[0];
    head.appendChild(element);
    return element;
  }
  _setMetaElementAttributes(tag, el) {
    Object.keys(tag).forEach((prop) => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
    return el;
  }
  _parseSelector(tag) {
    const attr = tag.name ? "name" : "property";
    return `${attr}="${tag[attr]}"`;
  }
  _containsAttributes(tag, elem) {
    return Object.keys(tag).every((key) => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
  }
  _getMetaKeyMap(prop) {
    return META_KEYS_MAP[prop] || prop;
  }
};
_Meta.\u0275fac = function Meta_Factory(t) {
  return new (t || _Meta)(\u0275\u0275inject(DOCUMENT));
};
_Meta.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Meta,
  factory: _Meta.\u0275fac,
  providedIn: "root"
});
var Meta = _Meta;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Meta, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var META_KEYS_MAP = {
  httpEquiv: "http-equiv"
};
var _Title = class _Title {
  constructor(_doc) {
    this._doc = _doc;
  }
  /**
   * Get the title of the current HTML document.
   */
  getTitle() {
    return this._doc.title;
  }
  /**
   * Set the title of the current HTML document.
   * @param newTitle
   */
  setTitle(newTitle) {
    this._doc.title = newTitle || "";
  }
};
_Title.\u0275fac = function Title_Factory(t) {
  return new (t || _Title)(\u0275\u0275inject(DOCUMENT));
};
_Title.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Title,
  factory: _Title.\u0275fac,
  providedIn: "root"
});
var Title = _Title;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Title, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var EVENT_NAMES = {
  // pan
  "pan": true,
  "panstart": true,
  "panmove": true,
  "panend": true,
  "pancancel": true,
  "panleft": true,
  "panright": true,
  "panup": true,
  "pandown": true,
  // pinch
  "pinch": true,
  "pinchstart": true,
  "pinchmove": true,
  "pinchend": true,
  "pinchcancel": true,
  "pinchin": true,
  "pinchout": true,
  // press
  "press": true,
  "pressup": true,
  // rotate
  "rotate": true,
  "rotatestart": true,
  "rotatemove": true,
  "rotateend": true,
  "rotatecancel": true,
  // swipe
  "swipe": true,
  "swipeleft": true,
  "swiperight": true,
  "swipeup": true,
  "swipedown": true,
  // tap
  "tap": true,
  "doubletap": true
};
var HAMMER_GESTURE_CONFIG = new InjectionToken("HammerGestureConfig");
var HAMMER_LOADER = new InjectionToken("HammerLoader");
var _HammerGestureConfig = class _HammerGestureConfig {
  constructor() {
    this.events = [];
    this.overrides = {};
  }
  /**
   * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
   * and attaches it to a given HTML element.
   * @param element The element that will recognize gestures.
   * @returns A HammerJS event-manager object.
   */
  buildHammer(element) {
    const mc = new Hammer(element, this.options);
    mc.get("pinch").set({
      enable: true
    });
    mc.get("rotate").set({
      enable: true
    });
    for (const eventName in this.overrides) {
      mc.get(eventName).set(this.overrides[eventName]);
    }
    return mc;
  }
};
_HammerGestureConfig.\u0275fac = function HammerGestureConfig_Factory(t) {
  return new (t || _HammerGestureConfig)();
};
_HammerGestureConfig.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HammerGestureConfig,
  factory: _HammerGestureConfig.\u0275fac
});
var HammerGestureConfig = _HammerGestureConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGestureConfig, [{
    type: Injectable
  }], null, null);
})();
var _HammerGesturesPlugin = class _HammerGesturesPlugin extends EventManagerPlugin {
  constructor(doc, _config, console2, loader) {
    super(doc);
    this._config = _config;
    this.console = console2;
    this.loader = loader;
    this._loaderPromise = null;
  }
  supports(eventName) {
    if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
      return false;
    }
    if (!window.Hammer && !this.loader) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`);
      }
      return false;
    }
    return true;
  }
  addEventListener(element, eventName, handler) {
    const zone = this.manager.getZone();
    eventName = eventName.toLowerCase();
    if (!window.Hammer && this.loader) {
      this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
      let cancelRegistration = false;
      let deregister = () => {
        cancelRegistration = true;
      };
      zone.runOutsideAngular(() => this._loaderPromise.then(() => {
        if (!window.Hammer) {
          if (typeof ngDevMode === "undefined" || ngDevMode) {
            this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
          }
          deregister = () => {
          };
          return;
        }
        if (!cancelRegistration) {
          deregister = this.addEventListener(element, eventName, handler);
        }
      }).catch(() => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because the custom Hammer.JS loader failed.`);
        }
        deregister = () => {
        };
      }));
      return () => {
        deregister();
      };
    }
    return zone.runOutsideAngular(() => {
      const mc = this._config.buildHammer(element);
      const callback = function(eventObj) {
        zone.runGuarded(function() {
          handler(eventObj);
        });
      };
      mc.on(eventName, callback);
      return () => {
        mc.off(eventName, callback);
        if (typeof mc.destroy === "function") {
          mc.destroy();
        }
      };
    });
  }
  isCustomEvent(eventName) {
    return this._config.events.indexOf(eventName) > -1;
  }
};
_HammerGesturesPlugin.\u0275fac = function HammerGesturesPlugin_Factory(t) {
  return new (t || _HammerGesturesPlugin)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(HAMMER_GESTURE_CONFIG), \u0275\u0275inject(Console), \u0275\u0275inject(HAMMER_LOADER, 8));
};
_HammerGesturesPlugin.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HammerGesturesPlugin,
  factory: _HammerGesturesPlugin.\u0275fac
});
var HammerGesturesPlugin = _HammerGesturesPlugin;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerGesturesPlugin, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: HammerGestureConfig,
    decorators: [{
      type: Inject,
      args: [HAMMER_GESTURE_CONFIG]
    }]
  }, {
    type: Console
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [HAMMER_LOADER]
    }]
  }], null);
})();
var _HammerModule = class _HammerModule {
};
_HammerModule.\u0275fac = function HammerModule_Factory(t) {
  return new (t || _HammerModule)();
};
_HammerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _HammerModule
});
_HammerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: EVENT_MANAGER_PLUGINS,
    useClass: HammerGesturesPlugin,
    multi: true,
    deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [new Optional(), HAMMER_LOADER]]
  }, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig,
    deps: []
  }]
});
var HammerModule = _HammerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HammerModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Console, [new Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    }]
  }], null, null);
})();
var _DomSanitizer = class _DomSanitizer {
};
_DomSanitizer.\u0275fac = function DomSanitizer_Factory(t) {
  return new (t || _DomSanitizer)();
};
_DomSanitizer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DomSanitizer,
  factory: function DomSanitizer_Factory(t) {
    let r = null;
    if (t) {
      r = new (t || _DomSanitizer)();
    } else {
      r = \u0275\u0275inject(DomSanitizerImpl);
    }
    return r;
  },
  providedIn: "root"
});
var DomSanitizer = _DomSanitizer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: forwardRef(() => DomSanitizerImpl)
    }]
  }], null, null);
})();
var _DomSanitizerImpl = class _DomSanitizerImpl extends DomSanitizer {
  constructor(_doc) {
    super();
    this._doc = _doc;
  }
  sanitize(ctx, value) {
    if (value == null)
      return null;
    switch (ctx) {
      case SecurityContext.NONE:
        return value;
      case SecurityContext.HTML:
        if (allowSanitizationBypassAndThrow(
          value,
          "HTML"
          /* BypassType.Html */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeHtml(this._doc, String(value)).toString();
      case SecurityContext.STYLE:
        if (allowSanitizationBypassAndThrow(
          value,
          "Style"
          /* BypassType.Style */
        )) {
          return unwrapSafeValue(value);
        }
        return value;
      case SecurityContext.SCRIPT:
        if (allowSanitizationBypassAndThrow(
          value,
          "Script"
          /* BypassType.Script */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5200, (typeof ngDevMode === "undefined" || ngDevMode) && "unsafe value used in a script context");
      case SecurityContext.URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "URL"
          /* BypassType.Url */
        )) {
          return unwrapSafeValue(value);
        }
        return _sanitizeUrl(String(value));
      case SecurityContext.RESOURCE_URL:
        if (allowSanitizationBypassAndThrow(
          value,
          "ResourceURL"
          /* BypassType.ResourceUrl */
        )) {
          return unwrapSafeValue(value);
        }
        throw new RuntimeError(5201, (typeof ngDevMode === "undefined" || ngDevMode) && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
      default:
        throw new RuntimeError(5202, (typeof ngDevMode === "undefined" || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${XSS_SECURITY_URL})`);
    }
  }
  bypassSecurityTrustHtml(value) {
    return bypassSanitizationTrustHtml(value);
  }
  bypassSecurityTrustStyle(value) {
    return bypassSanitizationTrustStyle(value);
  }
  bypassSecurityTrustScript(value) {
    return bypassSanitizationTrustScript(value);
  }
  bypassSecurityTrustUrl(value) {
    return bypassSanitizationTrustUrl(value);
  }
  bypassSecurityTrustResourceUrl(value) {
    return bypassSanitizationTrustResourceUrl(value);
  }
};
_DomSanitizerImpl.\u0275fac = function DomSanitizerImpl_Factory(t) {
  return new (t || _DomSanitizerImpl)(\u0275\u0275inject(DOCUMENT));
};
_DomSanitizerImpl.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DomSanitizerImpl,
  factory: _DomSanitizerImpl.\u0275fac,
  providedIn: "root"
});
var DomSanitizerImpl = _DomSanitizerImpl;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomSanitizerImpl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var HydrationFeatureKind;
(function(HydrationFeatureKind2) {
  HydrationFeatureKind2[HydrationFeatureKind2["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind2[HydrationFeatureKind2["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
})(HydrationFeatureKind || (HydrationFeatureKind = {}));
function provideZoneJsCompatibilityDetector() {
  return [{
    provide: ENVIRONMENT_INITIALIZER,
    useValue: () => {
      const ngZone = inject(NgZone);
      if (ngZone.constructor !== NgZone) {
        const console2 = inject(Console);
        const message = formatRuntimeError(-5e3, "Angular detected that hydration was enabled for an application that uses a custom or a noop Zone.js implementation. This is not yet a fully supported configuration.");
        console2.warn(message);
      }
    },
    multi: true
  }];
}
function provideClientHydration(...features) {
  const providers = [];
  const featuresKind = /* @__PURE__ */ new Set();
  const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
  for (const {
    \u0275providers,
    \u0275kind
  } of features) {
    featuresKind.add(\u0275kind);
    if (\u0275providers.length) {
      providers.push(\u0275providers);
    }
  }
  if (typeof ngDevMode !== "undefined" && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
    throw new Error("Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.");
  }
  return makeEnvironmentProviders([typeof ngDevMode !== "undefined" && ngDevMode ? provideZoneJsCompatibilityDetector() : [], withDomHydration(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : withHttpTransferCache({}), providers]);
}
var VERSION = new Version("17.3.12");

// node_modules/@angular/router/fesm2022/router.mjs
var PRIMARY_OUTLET = "primary";
var RouteTitleKey = /* @__PURE__ */ Symbol("RouteTitle");
var ParamsAsMap = class {
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
};
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split("/");
  if (parts.length > segments.length) {
    return null;
  }
  if (route.pathMatch === "full" && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    return null;
  }
  const posParams = {};
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part.startsWith(":");
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      return null;
    }
  }
  return {
    consumed: segments.slice(0, parts.length),
    posParams
  };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i]))
      return false;
  }
  return true;
}
function shallowEqual(a, b) {
  const k1 = a ? getDataKeys(a) : void 0;
  const k2 = b ? getDataKeys(b) : void 0;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
function last2(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
var pathCompareMap = {
  "exact": equalSegmentGroups,
  "subset": containsSegmentGroup
};
var paramCompareMap = {
  "exact": equalParams,
  "subset": containsParams,
  "ignored": () => true
};
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === "exact" && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments))
    return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren)
    return false;
  for (const c in containee.children) {
    if (!container.children[c])
      return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams))
      return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every((key) => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths))
      return false;
    if (containee.hasChildren())
      return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams))
      return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths))
      return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams))
      return false;
    for (const c in containee.children) {
      if (!container.children[c])
        return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current))
      return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams))
      return false;
    if (!container.children[PRIMARY_OUTLET])
      return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
var UrlTree = class {
  constructor(root = new UrlSegmentGroup([], {}), queryParams = {}, fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (root.segments.length > 0) {
        throw new RuntimeError(4015, "The root `UrlSegmentGroup` should not contain `segments`. Instead, these segments belong in the `children` so they can be associated with a named outlet.");
      }
    }
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  /** @docsNotRequired */
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
};
var UrlSegmentGroup = class {
  constructor(segments, children) {
    this.segments = segments;
    this.children = children;
    this.parent = null;
    Object.values(children).forEach((v) => v.parent = this);
  }
  /** Whether the segment has child segments */
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  /** Number of child segments */
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  /** @docsNotRequired */
  toString() {
    return serializePaths(this);
  }
};
var UrlSegment = class {
  constructor(path, parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    this._parameterMap ??= convertToParamMap(this.parameters);
    return this._parameterMap;
  }
  /** @docsNotRequired */
  toString() {
    return serializePath(this);
  }
};
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length)
    return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
var _UrlSerializer = class _UrlSerializer {
};
_UrlSerializer.\u0275fac = function UrlSerializer_Factory(t) {
  return new (t || _UrlSerializer)();
};
_UrlSerializer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UrlSerializer,
  factory: () => (() => new DefaultUrlSerializer())(),
  providedIn: "root"
});
var UrlSerializer = _UrlSerializer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new DefaultUrlSerializer()
    }]
  }], null, null);
})();
var DefaultUrlSerializer = class {
  /** Parses a url into a `UrlTree` */
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  /** Converts a `UrlTree` into a url */
  serialize(tree2) {
    const segment = `/${serializeSegment(tree2.root, true)}`;
    const query = serializeQueryParams(tree2.queryParams);
    const fragment = typeof tree2.fragment === `string` ? `#${encodeUriFragment(tree2.fragment)}` : "";
    return `${segment}${query}${fragment}`;
  }
};
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map((p) => serializePath(p)).join("/");
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : "";
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join("//")})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join("//")})`;
  }
}
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ";");
}
function encodeUriFragment(s) {
  return encodeURI(s);
}
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&");
}
function decode(s) {
  return decodeURIComponent(s);
}
function decodeQuery(s) {
  return decode(s.replace(/\+/g, "%20"));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.entries(params).map(([key, value]) => `;${encodeUriSegment(key)}=${encodeUriSegment(value)}`).join("");
}
function serializeQueryParams(params) {
  const strParams = Object.entries(params).map(([name, value]) => {
    return Array.isArray(value) ? value.map((v) => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&") : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter((s) => s);
  return strParams.length ? `?${strParams.join("&")}` : "";
}
var SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match2 = str.match(SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match2 = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
  const match2 = str.match(QUERY_PARAM_RE);
  return match2 ? match2[0] : "";
}
var QUERY_PARAM_VALUE_RE = /^[^&#]+/;
function matchUrlQueryParamValue(str) {
  const match2 = str.match(QUERY_PARAM_VALUE_RE);
  return match2 ? match2[0] : "";
}
var UrlParser = class {
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional("/");
    if (this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#")) {
      return new UrlSegmentGroup([], {});
    }
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional("?")) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional("&"));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === "") {
      return {};
    }
    this.consumeOptional("/");
    const segments = [];
    if (!this.peekStartsWith("(")) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(")) {
      this.capture("/");
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith("/(")) {
      this.capture("/");
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith("(")) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  // parse a segment with its matrix parameters
  // ie `name;k1=v1;k2`
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === "" && this.peekStartsWith(";")) {
      throw new RuntimeError(4009, (typeof ngDevMode === "undefined" || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(";")) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  // Parse a single query parameter `name[=value]`
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = "";
    if (this.consumeOptional("=")) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      params[decodedKey] = decodedVal;
    }
  }
  // parse `(a/b//outlet_name:c/d)`
  parseParens(allowPrimary) {
    const segments = {};
    this.capture("(");
    while (!this.consumeOptional(")") && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      if (next !== "/" && next !== ")" && next !== ";") {
        throw new RuntimeError(4010, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName = void 0;
      if (path.indexOf(":") > -1) {
        outletName = path.slice(0, path.indexOf(":"));
        this.capture(outletName);
        this.capture(":");
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional("//");
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  // Consumes the prefix when it is present and returns whether it has been consumed
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new RuntimeError(4011, (typeof ngDevMode === "undefined" || ngDevMode) && `Expected "${str}".`);
    }
  }
};
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const [childOutlet, child] of Object.entries(segmentGroup.children)) {
    const childCandidate = squashSegmentGroup(child);
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === "object" && command != null && !command.outlets && !command.segmentPath;
}
function isCommandWithOutlets(command) {
  return typeof command === "object" && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map((v) => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
var Navigation = class {
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new RuntimeError(4003, (typeof ngDevMode === "undefined" || ngDevMode) && "Root segment cannot have matrix parameters");
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== last2(commands)) {
      throw new RuntimeError(4004, (typeof ngDevMode === "undefined" || ngDevMode) && "{outlets:{}} has to be the last command");
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/";
  }
};
function computeNavigation(commands) {
  if (typeof commands[0] === "string" && commands.length === 1 && commands[0] === "/") {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res2, cmd, cmdIdx) => {
    if (typeof cmd === "object" && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands2]) => {
          outlets[name] = typeof commands2 === "string" ? commands2.split("/") : commands2;
        });
        return [...res2, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res2, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === "string")) {
      return [...res2, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split("/").forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === ".") {
        } else if (partIndex == 0 && urlPart === "") {
          isAbsolute = true;
        } else if (urlPart === "..") {
          numberOfDoubleDots++;
        } else if (urlPart != "") {
          res2.push(urlPart);
        }
      });
      return res2;
    }
    return [...res2, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = class {
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
};
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new RuntimeError(4005, (typeof ngDevMode === "undefined" || ngDevMode) && "Invalid number of '../'");
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  segmentGroup ??= new UrlSegmentGroup([], {});
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    if (Object.keys(outlets).some((o) => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands2]) => {
      if (typeof commands2 === "string") {
        commands2 = [commands2];
      }
      if (commands2 !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands2);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === void 0) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch2 = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length)
      return noMatch2;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === void 0)
      break;
    if (curr && next && typeof next === "object" && next.outlets === void 0) {
      if (!compare(curr, next, path))
        return noMatch2;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path))
        return noMatch2;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === "string") {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
var IMPERATIVE_NAVIGATION = "imperative";
var EventType;
(function(EventType2) {
  EventType2[EventType2["NavigationStart"] = 0] = "NavigationStart";
  EventType2[EventType2["NavigationEnd"] = 1] = "NavigationEnd";
  EventType2[EventType2["NavigationCancel"] = 2] = "NavigationCancel";
  EventType2[EventType2["NavigationError"] = 3] = "NavigationError";
  EventType2[EventType2["RoutesRecognized"] = 4] = "RoutesRecognized";
  EventType2[EventType2["ResolveStart"] = 5] = "ResolveStart";
  EventType2[EventType2["ResolveEnd"] = 6] = "ResolveEnd";
  EventType2[EventType2["GuardsCheckStart"] = 7] = "GuardsCheckStart";
  EventType2[EventType2["GuardsCheckEnd"] = 8] = "GuardsCheckEnd";
  EventType2[EventType2["RouteConfigLoadStart"] = 9] = "RouteConfigLoadStart";
  EventType2[EventType2["RouteConfigLoadEnd"] = 10] = "RouteConfigLoadEnd";
  EventType2[EventType2["ChildActivationStart"] = 11] = "ChildActivationStart";
  EventType2[EventType2["ChildActivationEnd"] = 12] = "ChildActivationEnd";
  EventType2[EventType2["ActivationStart"] = 13] = "ActivationStart";
  EventType2[EventType2["ActivationEnd"] = 14] = "ActivationEnd";
  EventType2[EventType2["Scroll"] = 15] = "Scroll";
  EventType2[EventType2["NavigationSkipped"] = 16] = "NavigationSkipped";
})(EventType || (EventType = {}));
var RouterEvent = class {
  constructor(id, url) {
    this.id = id;
    this.url = url;
  }
};
var NavigationStart = class extends RouterEvent {
  constructor(id, url, navigationTrigger = "imperative", restoredState = null) {
    super(id, url);
    this.type = EventType.NavigationStart;
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.type = EventType.NavigationEnd;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
};
var NavigationCancellationCode;
(function(NavigationCancellationCode2) {
  NavigationCancellationCode2[NavigationCancellationCode2["Redirect"] = 0] = "Redirect";
  NavigationCancellationCode2[NavigationCancellationCode2["SupersededByNewNavigation"] = 1] = "SupersededByNewNavigation";
  NavigationCancellationCode2[NavigationCancellationCode2["NoDataFromResolver"] = 2] = "NoDataFromResolver";
  NavigationCancellationCode2[NavigationCancellationCode2["GuardRejected"] = 3] = "GuardRejected";
})(NavigationCancellationCode || (NavigationCancellationCode = {}));
var NavigationSkippedCode;
(function(NavigationSkippedCode2) {
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredSameUrlNavigation"] = 0] = "IgnoredSameUrlNavigation";
  NavigationSkippedCode2[NavigationSkippedCode2["IgnoredByUrlHandlingStrategy"] = 1] = "IgnoredByUrlHandlingStrategy";
})(NavigationSkippedCode || (NavigationSkippedCode = {}));
var NavigationCancel = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = EventType.NavigationCancel;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
};
var NavigationSkipped = class extends RouterEvent {
  constructor(id, url, reason, code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = EventType.NavigationSkipped;
  }
};
var NavigationError = class extends RouterEvent {
  constructor(id, url, error, target) {
    super(id, url);
    this.error = error;
    this.target = target;
    this.type = EventType.NavigationError;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
};
var RoutesRecognized = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state2) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state2;
    this.type = EventType.RoutesRecognized;
  }
  /** @docsNotRequired */
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state2) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state2;
    this.type = EventType.GuardsCheckStart;
  }
  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var GuardsCheckEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state2, shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state2;
    this.shouldActivate = shouldActivate;
    this.type = EventType.GuardsCheckEnd;
  }
  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
};
var ResolveStart = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state2) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state2;
    this.type = EventType.ResolveStart;
  }
  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var ResolveEnd = class extends RouterEvent {
  constructor(id, url, urlAfterRedirects, state2) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state2;
    this.type = EventType.ResolveEnd;
  }
  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
};
var RouteConfigLoadStart = class {
  constructor(route) {
    this.route = route;
    this.type = EventType.RouteConfigLoadStart;
  }
  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
};
var RouteConfigLoadEnd = class {
  constructor(route) {
    this.route = route;
    this.type = EventType.RouteConfigLoadEnd;
  }
  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
};
var ChildActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ChildActivationStart;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationStart(path: '${path}')`;
  }
};
var ChildActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ChildActivationEnd;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ChildActivationEnd(path: '${path}')`;
  }
};
var ActivationStart = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ActivationStart;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationStart(path: '${path}')`;
  }
};
var ActivationEnd = class {
  constructor(snapshot) {
    this.snapshot = snapshot;
    this.type = EventType.ActivationEnd;
  }
  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || "";
    return `ActivationEnd(path: '${path}')`;
  }
};
var Scroll = class {
  constructor(routerEvent, position, anchor) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
    this.type = EventType.Scroll;
  }
  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
};
var BeforeActivateRoutes = class {
};
var RedirectRequest = class {
  constructor(url) {
    this.url = url;
  }
};
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case EventType.ActivationEnd:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ActivationStart:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationEnd:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.ChildActivationStart:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ""}')`;
    case EventType.GuardsCheckEnd:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case EventType.GuardsCheckStart:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.NavigationCancel:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationSkipped:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.NavigationEnd:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case EventType.NavigationError:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case EventType.NavigationStart:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case EventType.ResolveEnd:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.ResolveStart:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.RouteConfigLoadEnd:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case EventType.RouteConfigLoadStart:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case EventType.RoutesRecognized:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case EventType.Scroll:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}
var OutletContext = class {
  constructor() {
    this.outlet = null;
    this.route = null;
    this.injector = null;
    this.children = new ChildrenOutletContexts();
    this.attachRef = null;
  }
};
var _ChildrenOutletContexts = class _ChildrenOutletContexts {
  constructor() {
    this.contexts = /* @__PURE__ */ new Map();
  }
  /** Called when a `RouterOutlet` directive is instantiated */
  onChildOutletCreated(childName, outlet) {
    const context = this.getOrCreateContext(childName);
    context.outlet = outlet;
    this.contexts.set(childName, context);
  }
  /**
   * Called when a `RouterOutlet` directive is destroyed.
   * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
   * re-created later.
   */
  onChildOutletDestroyed(childName) {
    const context = this.getContext(childName);
    if (context) {
      context.outlet = null;
      context.attachRef = null;
    }
  }
  /**
   * Called when the corresponding route is deactivated during navigation.
   * Because the component get destroyed, all children outlet are destroyed.
   */
  onOutletDeactivated() {
    const contexts = this.contexts;
    this.contexts = /* @__PURE__ */ new Map();
    return contexts;
  }
  onOutletReAttached(contexts) {
    this.contexts = contexts;
  }
  getOrCreateContext(childName) {
    let context = this.getContext(childName);
    if (!context) {
      context = new OutletContext();
      this.contexts.set(childName, context);
    }
    return context;
  }
  getContext(childName) {
    return this.contexts.get(childName) || null;
  }
};
_ChildrenOutletContexts.\u0275fac = function ChildrenOutletContexts_Factory(t) {
  return new (t || _ChildrenOutletContexts)();
};
_ChildrenOutletContexts.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ChildrenOutletContexts,
  factory: _ChildrenOutletContexts.\u0275fac,
  providedIn: "root"
});
var ChildrenOutletContexts = _ChildrenOutletContexts;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildrenOutletContexts, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Tree = class {
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  /**
   * @internal
   */
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  /**
   * @internal
   */
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map((t2) => t2.value) : [];
  }
  /**
   * @internal
   */
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  /**
   * @internal
   */
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2)
      return [];
    const c = p[p.length - 2].children.map((c2) => c2.value);
    return c.filter((cc) => cc !== t);
  }
  /**
   * @internal
   */
  pathFromRoot(t) {
    return findPath(t, this._root).map((s) => s.value);
  }
};
function findNode(value, node) {
  if (value === node.value)
    return node;
  for (const child of node.children) {
    const node2 = findNode(value, child);
    if (node2)
      return node2;
  }
  return null;
}
function findPath(value, node) {
  if (value === node.value)
    return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
var TreeNode = class {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function nodeChildrenAsMap(node) {
  const map2 = {};
  if (node) {
    node.children.forEach((child) => map2[child.value.outlet] = child);
  }
  return map2;
}
var RouterState = class extends Tree {
  /** @internal */
  constructor(root, snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function createEmptyState(rootComponent) {
  const snapshot = createEmptyStateSnapshot(rootComponent);
  const emptyUrl = new BehaviorSubject([new UrlSegment("", {})]);
  const emptyParams = new BehaviorSubject({});
  const emptyData = new BehaviorSubject({});
  const emptyQueryParams = new BehaviorSubject({});
  const fragment = new BehaviorSubject("");
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = "";
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot("", new TreeNode(activated, []));
}
var ActivatedRoute = class {
  /** @internal */
  constructor(urlSubject, paramsSubject, queryParamsSubject, fragmentSubject, dataSubject, outlet, component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe(map((d) => d[RouteTitleKey])) ?? of(void 0);
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  /** The configuration used to match this route. */
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  /** The root of the router state. */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree. */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree. */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree. */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route. */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  get paramMap() {
    this._paramMap ??= this.params.pipe(map((p) => convertToParamMap(p)));
    return this._paramMap;
  }
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  get queryParamMap() {
    this._queryParamMap ??= this.queryParams.pipe(map((p) => convertToParamMap(p)));
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
};
function getInherited(route, parent, paramsInheritanceStrategy = "emptyOnly") {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === "always" || // inherit parent data if route is empty path
  routeConfig?.path === "" || // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: __spreadValues(__spreadValues({}, parent.params), route.params),
      data: __spreadValues(__spreadValues({}, parent.data), route.data),
      resolve: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, route.data), parent.data), routeConfig?.data), route._resolvedData)
    };
  } else {
    inherited = {
      params: __spreadValues({}, route.params),
      data: __spreadValues({}, route.data),
      resolve: __spreadValues(__spreadValues({}, route.data), route._resolvedData ?? {})
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
var ActivatedRouteSnapshot = class {
  /** The resolved route title */
  get title() {
    return this.data?.[RouteTitleKey];
  }
  /** @internal */
  constructor(url, params, queryParams, fragment, data, outlet, component, routeConfig, resolve) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
  }
  /** The root of the router state */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    this._paramMap ??= convertToParamMap(this.params);
    return this._paramMap;
  }
  get queryParamMap() {
    this._queryParamMap ??= convertToParamMap(this.queryParams);
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map((segment) => segment.toString()).join("/");
    const matched = this.routeConfig ? this.routeConfig.path : "";
    return `Route(url:'${url}', path:'${matched}')`;
  }
};
var RouterStateSnapshot = class extends Tree {
  /** @internal */
  constructor(url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
};
function setRouterState(state2, node) {
  node.value._routerState = state2;
  node.children.forEach((c) => setRouterState(state2, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(", ")} } ` : "";
  return `${node.value}${c}`;
}
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === "string" || config.title === null;
}
var _RouterOutlet = class _RouterOutlet {
  constructor() {
    this.activated = null;
    this._activatedRoute = null;
    this.name = PRIMARY_OUTLET;
    this.activateEvents = new EventEmitter();
    this.deactivateEvents = new EventEmitter();
    this.attachEvents = new EventEmitter();
    this.detachEvents = new EventEmitter();
    this.parentContexts = inject(ChildrenOutletContexts);
    this.location = inject(ViewContainerRef);
    this.changeDetector = inject(ChangeDetectorRef);
    this.environmentInjector = inject(EnvironmentInjector);
    this.inputBinder = inject(INPUT_BINDER, {
      optional: true
    });
    this.supportsBindingToComponentInputs = true;
  }
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (changes["name"]) {
      const {
        firstChange,
        previousValue
      } = changes["name"];
      if (firstChange) {
        return;
      }
      if (this.isTrackedInParentContexts(previousValue)) {
        this.deactivate();
        this.parentContexts.onChildOutletDestroyed(previousValue);
      }
      this.initializeOutletWithName();
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  isTrackedInParentContexts(outletName) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }
  /** @nodoc */
  ngOnInit() {
    this.initializeOutletWithName();
  }
  initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        this.attach(context.attachRef, context.route);
      } else {
        this.activateWith(context.route, context.injector);
      }
    }
  }
  get isActivated() {
    return !!this.activated;
  }
  /**
   * @returns The currently activated component instance.
   * @throws An error if the outlet is not activated.
   */
  get component() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    if (!this.activated)
      throw new RuntimeError(4012, (typeof ngDevMode === "undefined" || ngDevMode) && "Outlet is not activated");
    this.location.detach();
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    this.detachEvents.emit(cmp.instance);
    return cmp;
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  attach(ref, activatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.location.insert(ref.hostView);
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.attachEvents.emit(ref.instance);
  }
  deactivate() {
    if (this.activated) {
      const c = this.component;
      this.activated.destroy();
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new RuntimeError(4013, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component;
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(activatedRoute, childContexts, location.injector);
    this.activated = location.createComponent(component, {
      index: location.length,
      injector,
      environmentInjector: environmentInjector ?? this.environmentInjector
    });
    this.changeDetector.markForCheck();
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activateEvents.emit(this.activated.instance);
  }
};
_RouterOutlet.\u0275fac = function RouterOutlet_Factory(t) {
  return new (t || _RouterOutlet)();
};
_RouterOutlet.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RouterOutlet,
  selectors: [["router-outlet"]],
  inputs: {
    name: "name"
  },
  outputs: {
    activateEvents: "activate",
    deactivateEvents: "deactivate",
    attachEvents: "attach",
    detachEvents: "detach"
  },
  exportAs: ["outlet"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var RouterOutlet = _RouterOutlet;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterOutlet, [{
    type: Directive,
    args: [{
      selector: "router-outlet",
      exportAs: "outlet",
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }],
    attachEvents: [{
      type: Output,
      args: ["attach"]
    }],
    detachEvents: [{
      type: Output,
      args: ["detach"]
    }]
  });
})();
var OutletInjector = class _OutletInjector {
  /**
   * This injector has a special handing for the `ActivatedRoute` and
   * `ChildrenOutletContexts` tokens: it returns corresponding values for those
   * tokens dynamically. This behavior is different from the regular injector logic,
   * when we initialize and store a value, which is later returned for all inject
   * requests.
   *
   * In some cases (e.g. when using `@defer`), this dynamic behavior requires special
   * handling. This function allows to identify an instance of the `OutletInjector` and
   * create an instance of it without referring to the class itself (so this logic can
   * be invoked from the `core` package). This helps to retain dynamic behavior for the
   * mentioned tokens.
   *
   * Note: it's a temporary solution and we should explore how to support this case better.
   */
  __ngOutletInjector(parentInjector) {
    return new _OutletInjector(this.route, this.childContexts, parentInjector);
  }
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var _RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  constructor() {
    this.outletDataSubscriptions = /* @__PURE__ */ new Map();
  }
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
};
_RoutedComponentInputBinder.\u0275fac = function RoutedComponentInputBinder_Factory(t) {
  return new (t || _RoutedComponentInputBinder)();
};
_RoutedComponentInputBinder.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RoutedComponentInputBinder,
  factory: _RoutedComponentInputBinder.\u0275fac
});
var RoutedComponentInputBinder = _RoutedComponentInputBinder;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : void 0);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree2 = detachedRouteHandle.route;
        tree2.value._futureSnapshot = curr.value;
        tree2.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return tree2;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map((child) => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
var NAVIGATION_CANCELING_ERROR = "ngNavigationCancelingError";
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: void 0
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, NavigationCancellationCode.Redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code) {
  const error = new Error(`NavigationCancelingError: ${message || ""}`);
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  return error;
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return !!error && error[NAVIGATION_CANCELING_ERROR];
}
var _\u0275EmptyOutletComponent = class _\u0275EmptyOutletComponent {
};
_\u0275EmptyOutletComponent.\u0275fac = function \u0275EmptyOutletComponent_Factory(t) {
  return new (t || _\u0275EmptyOutletComponent)();
};
_\u0275EmptyOutletComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _\u0275EmptyOutletComponent,
  selectors: [["ng-component"]],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 0,
  template: function _EmptyOutletComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  },
  dependencies: [RouterOutlet],
  encapsulation: 2
});
var \u0275EmptyOutletComponent = _\u0275EmptyOutletComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275EmptyOutletComponent, [{
    type: Component,
    args: [{
      template: `<router-outlet></router-outlet>`,
      imports: [RouterOutlet],
      standalone: true
    }]
  }], null, null);
})();
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = createEnvironmentInjector(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function validateConfig(config, parentPath = "", requireStandaloneComponents = false) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && isNgModule(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !isStandalone(component)) {
    throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!route) {
      throw new RuntimeError(4014, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.redirectTo && (route.component || route.loadComponent)) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo && route.canActivate) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': redirectTo and canActivate cannot be used together. Redirects happen before activation so canActivate will never be executed.`);
    }
    if (route.path && route.matcher) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === "string" && route.path.charAt(0) === "/") {
      throw new RuntimeError(4014, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === "" && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new RuntimeError(4014, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return "";
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? __spreadProps(__spreadValues({}, r), {
    children
  }) : __spreadValues({}, r);
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = \u0275EmptyOutletComponent;
  }
  return c;
}
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
function sortByMatchingOutlets(routes2, outletName) {
  const sortedConfig = routes2.filter((r) => getOutlet(r) === outletName);
  sortedConfig.push(...routes2.filter((r) => getOutlet(r) !== outletName));
  return sortedConfig;
}
function getClosestRouteInjector(snapshot) {
  if (!snapshot)
    return null;
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    if (route?._loadedInjector)
      return route._loadedInjector;
    if (route?._injector)
      return route._injector;
  }
  return null;
}
var warnedAboutUnsupportedInputBinding = false;
var activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => map((t) => {
  new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
  return t;
});
var ActivateRoutes = class {
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  // De-activate the child route that are not re-used for the future state
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((futureChild) => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    Object.values(children).forEach((v) => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      if (future.component) {
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts2 = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts: contexts2
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const treeNode of Object.values(children)) {
      this.deactivateRouteAndItsChildren(treeNode, contexts);
    }
    if (context) {
      if (context.outlet) {
        context.outlet.deactivate();
        context.children.onOutletDeactivated();
      }
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach((c) => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    if (future === curr) {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          const injector = getClosestRouteInjector(future.snapshot);
          context.attachRef = null;
          context.route = future;
          context.injector = injector;
          if (context.outlet) {
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
};
var CanActivate = class {
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
};
var CanDeactivate = class {
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
};
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0)
    return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === "function" && !isInjectable(tokenOrFunction)) {
      return tokenOrFunction;
    } else {
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  futureNode.children.forEach((c) => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === "function") {
    return mode(curr, future);
  }
  switch (mode) {
    case "pathParamsChange":
      return !equalPath(curr.url, future.url);
    case "pathParamsOrQueryParamsChange":
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case "always":
      return true;
    case "paramsOrQueryParamsChange":
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case "paramsChange":
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}
function isFunction(v) {
  return typeof v === "function";
}
function isBoolean(v) {
  return typeof v === "boolean";
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isEmptyError(e) {
  return e instanceof EmptyError || e?.name === "EmptyError";
}
var INITIAL_VALUE = /* @__PURE__ */ Symbol("INITIAL_VALUE");
function prioritizedGuardValue() {
  return switchMap((obs) => {
    return combineLatest(obs.map((o) => o.pipe(take(1), startWith(INITIAL_VALUE)))).pipe(map((results) => {
      for (const result of results) {
        if (result === true) {
          continue;
        } else if (result === INITIAL_VALUE) {
          return INITIAL_VALUE;
        } else if (result === false || result instanceof UrlTree) {
          return result;
        }
      }
      return true;
    }), filter((item) => item !== INITIAL_VALUE), take(1));
  });
}
function checkGuards(injector, forwardEvent) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return of(__spreadProps(__spreadValues({}, t), {
        guardsResult: true
      }));
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe(mergeMap((canDeactivate) => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : of(canDeactivate);
    }), map((guardsResult) => __spreadProps(__spreadValues({}, t), {
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return from(checks).pipe(mergeMap((check) => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), first((result) => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return from(checks).pipe(concatMap((check) => {
    return concat(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), first((result) => {
    return result !== true;
  }, true));
}
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return of(true);
}
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return of(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0)
    return of(true);
  const canActivateObservables = canActivate.map((canActivate2) => {
    return defer(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate2, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe(first());
    });
  });
  return of(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map((p) => getCanActivateChild(p)).filter((_) => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map((d) => {
    return defer(() => {
      const guardsMapped = d.guards.map((canActivateChild) => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe(first());
      });
      return of(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0)
    return of(true);
  const canDeactivateObservables = canDeactivate.map((c) => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : runInInjectionContext(closestInjector, () => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe(first());
  });
  return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === void 0 || canLoad.length === 0) {
    return of(true);
  }
  const canLoadObservables = canLoad.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return pipe(tap((result) => {
    if (!isUrlTree(result))
      return;
    throw redirectingNavigationError(urlSerializer, result);
  }), map((result) => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0)
    return of(true);
  const canMatchObservables = canMatch.map((injectionToken) => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : runInInjectionContext(injector, () => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return of(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
var NoMatch = class {
  constructor(segmentGroup) {
    this.segmentGroup = segmentGroup || null;
  }
};
var AbsoluteRedirect = class extends Error {
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
  }
};
function noMatch$1(segmentGroup) {
  return throwError(new NoMatch(segmentGroup));
}
function namedOutletsRedirect(redirectTo) {
  return throwError(new RuntimeError(4e3, (typeof ngDevMode === "undefined" || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return throwError(navigationCancelingError((typeof ngDevMode === "undefined" || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, NavigationCancellationCode.GuardRejected));
}
var ApplyRedirects = class {
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return of(res);
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        return namedOutletsRedirect(route.redirectTo);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  applyRedirectCommands(segments, redirectTo, posParams) {
    const newTree = this.applyRedirectCreateUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    if (redirectTo.startsWith("/")) {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === "string" && v.startsWith(":");
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map((s) => s.path.startsWith(":") ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos)
      throw new RuntimeError(4001, (typeof ngDevMode === "undefined" || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
};
var noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return of(result);
  }
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe(map((v) => v === true ? result : __spreadValues({}, noMatch)));
}
function match(segmentGroup, route, segments) {
  if (route.path === "**") {
    return createWildcardMatchResult(segments);
  }
  if (route.path === "") {
    if (route.pathMatch === "full" && (segmentGroup.hasChildren() || segments.length > 0)) {
      return __spreadValues({}, noMatch);
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res)
    return __spreadValues({}, noMatch);
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? __spreadValues(__spreadValues({}, posParams), res.consumed[res.consumed.length - 1].parameters) : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? last2(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s2,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s2,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes2, children) {
  const res = {};
  for (const r of routes2) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return __spreadValues(__spreadValues({}, children), res);
}
function createChildrenForEmptyPaths(routes2, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes2) {
    if (r.path === "" && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes2) {
  return routes2.some((r) => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === "full") {
    return false;
  }
  return r.path === "";
}
function isImmediateMatch(route, rawSegment, segments, outlet) {
  if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
    return false;
  }
  return match(rawSegment, route, segments).matched;
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}
var NoLeftoversInUrl = class {
};
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = "emptyOnly") {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
var MAX_ALLOWED_REDIRECTS = 31;
var Recognizer = class {
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
    this.absoluteRedirectCount = 0;
    this.allowRedirects = true;
  }
  noMatchError(e) {
    return new RuntimeError(4002, typeof ngDevMode === "undefined" || ngDevMode ? `Cannot match any routes. URL Segment: '${e.segmentGroup}'` : `'${e.segmentGroup}'`);
  }
  recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    return this.match(rootSegmentGroup).pipe(map((children) => {
      const root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, {});
      const rootNode = new TreeNode(root, children);
      const routeState = new RouterStateSnapshot("", rootNode);
      const tree2 = createUrlTreeFromSnapshot(root, [], this.urlTree.queryParams, this.urlTree.fragment);
      tree2.queryParams = this.urlTree.queryParams;
      routeState.url = this.urlSerializer.serialize(tree2);
      this.inheritParamsAndData(routeState._root, null);
      return {
        state: routeState,
        tree: tree2
      };
    }));
  }
  match(rootSegmentGroup) {
    const expanded$ = this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET);
    return expanded$.pipe(catchError((e) => {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }));
  }
  inheritParamsAndData(routeNode, parent) {
    const route = routeNode.value;
    const i = getInherited(route, parent, this.paramsInheritanceStrategy);
    route.params = Object.freeze(i.params);
    route.data = Object.freeze(i.data);
    routeNode.children.forEach((n) => this.inheritParamsAndData(n, route));
  }
  processSegmentGroup(injector, config, segmentGroup, outlet) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup);
    }
    return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true).pipe(map((child) => child instanceof TreeNode ? [child] : []));
  }
  /**
   * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
   * we cannot find a match for _any_ of the children.
   *
   * @param config - The `Routes` to match against
   * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
   *     config.
   */
  processChildren(injector, config, segmentGroup) {
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === "primary") {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    return from(childOutlets).pipe(concatMap((childOutlet) => {
      const child = segmentGroup.children[childOutlet];
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      return this.processSegmentGroup(injector, sortedConfig, child, childOutlet);
    }), scan((children, outletChildren) => {
      children.push(...outletChildren);
      return children;
    }), defaultIfEmpty(null), last(), mergeMap((children) => {
      if (children === null)
        return noMatch$1(segmentGroup);
      const mergedChildren = mergeEmptyPathMatches(children);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        checkOutletNameUniqueness(mergedChildren);
      }
      sortActivatedRouteSnapshots(mergedChildren);
      return of(mergedChildren);
    }));
  }
  processSegment(injector, routes2, segmentGroup, segments, outlet, allowRedirects) {
    return from(routes2).pipe(concatMap((r) => {
      return this.processSegmentAgainstRoute(r._injector ?? injector, routes2, r, segmentGroup, segments, outlet, allowRedirects).pipe(catchError((e) => {
        if (e instanceof NoMatch) {
          return of(null);
        }
        throw e;
      }));
    }), first((x) => !!x), catchError((e) => {
      if (isEmptyError(e)) {
        if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
          return of(new NoLeftoversInUrl());
        }
        return noMatch$1(segmentGroup);
      }
      throw e;
    }));
  }
  processSegmentAgainstRoute(injector, routes2, route, rawSegment, segments, outlet, allowRedirects) {
    if (!isImmediateMatch(route, rawSegment, segments, outlet))
      return noMatch$1(rawSegment);
    if (route.redirectTo === void 0) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes2, route, segments, outlet);
    }
    return noMatch$1(rawSegment);
  }
  expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes2, route, segments, outlet) {
    const {
      matched,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = match(segmentGroup, route, segments);
    if (!matched)
      return noMatch$1(segmentGroup);
    if (route.redirectTo.startsWith("/")) {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new RuntimeError(4016, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.
This is currently a dev mode only error but will become a call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const newTree = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
    return this.applyRedirects.lineralizeSegments(route, newTree).pipe(mergeMap((newSegments) => {
      return this.processSegment(injector, routes2, segmentGroup, newSegments.concat(remainingSegments), outlet, false);
    }));
  }
  matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet) {
    const matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
    if (route.path === "**") {
      rawSegment.children = {};
    }
    return matchResult.pipe(switchMap((result) => {
      if (!result.matched) {
        return noMatch$1(rawSegment);
      }
      injector = route._injector ?? injector;
      return this.getChildConfig(injector, route, segments).pipe(switchMap(({
        routes: childConfig
      }) => {
        const childInjector = route._loadedInjector ?? injector;
        const {
          consumedSegments,
          remainingSegments,
          parameters
        } = result;
        const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(__spreadValues({}, this.urlTree.queryParams)), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const {
          segmentGroup,
          slicedSegments
        } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(childInjector, childConfig, segmentGroup).pipe(map((children) => {
            if (children === null) {
              return null;
            }
            return new TreeNode(snapshot, children);
          }));
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
          return of(new TreeNode(snapshot, []));
        }
        const matchedOnOutlet = getOutlet(route) === outlet;
        return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true).pipe(map((child) => {
          return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
        }));
      }));
    }));
  }
  getChildConfig(injector, route, segments) {
    if (route.children) {
      return of({
        routes: route.children,
        injector
      });
    }
    if (route.loadChildren) {
      if (route._loadedRoutes !== void 0) {
        return of({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe(mergeMap((shouldLoadResult) => {
        if (shouldLoadResult) {
          return this.configLoader.loadChildren(injector, route).pipe(tap((cfg) => {
            route._loadedRoutes = cfg.routes;
            route._loadedInjector = cfg.injector;
          }));
        }
        return canLoadFails(route);
      }));
    }
    return of({
      routes: [],
      injector
    });
  }
};
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET)
      return -1;
    if (b.value.outlet === PRIMARY_OUTLET)
      return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === "";
}
function mergeEmptyPathMatches(nodes) {
  const result = [];
  const mergedNodes = /* @__PURE__ */ new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find((resultNode) => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== void 0) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter((n) => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach((n) => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map((s) => s.toString()).join("/");
      const c = n.value.url.map((s) => s.toString()).join("/");
      throw new RuntimeError(4006, (typeof ngDevMode === "undefined" || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return mergeMap((t) => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({
    state: targetSnapshot,
    tree: urlAfterRedirects
  }) => {
    return __spreadProps(__spreadValues({}, t), {
      targetSnapshot,
      urlAfterRedirects
    });
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return mergeMap((t) => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return of(t);
    }
    const routesWithResolversToRun = new Set(canActivateChecks.map((check) => check.route));
    const routesNeedingDataUpdates = /* @__PURE__ */ new Set();
    for (const route of routesWithResolversToRun) {
      if (routesNeedingDataUpdates.has(route)) {
        continue;
      }
      for (const newRoute of flattenRouteTree(route)) {
        routesNeedingDataUpdates.add(newRoute);
      }
    }
    let routesProcessed = 0;
    return from(routesNeedingDataUpdates).pipe(concatMap((route) => {
      if (routesWithResolversToRun.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return of(void 0);
      }
    }), tap(() => routesProcessed++), takeLast(1), mergeMap((_) => routesProcessed === routesNeedingDataUpdates.size ? of(t) : EMPTY));
  });
}
function flattenRouteTree(route) {
  const descendants = route.children.map((child) => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== void 0 && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return resolveNode(resolve, futureARS, futureRSS, injector).pipe(map((resolvedData) => {
    futureARS._resolvedData = resolvedData;
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return null;
  }));
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return of({});
  }
  const data = {};
  return from(keys).pipe(mergeMap((key) => getResolver(resolve[key], futureARS, futureRSS, injector).pipe(first(), tap((value) => {
    data[key] = value;
  }))), takeLast(1), mapTo(data), catchError((e) => isEmptyError(e) ? EMPTY : throwError(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : runInInjectionContext(closestInjector, () => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}
function switchTap(next) {
  return switchMap((v) => {
    const nextResult = next(v);
    if (nextResult) {
      return from(nextResult).pipe(map(() => v));
    }
    return of(v);
  });
}
var _TitleStrategy = class _TitleStrategy {
  /**
   * @returns The `title` of the deepest primary route.
   */
  buildTitle(snapshot) {
    let pageTitle;
    let route = snapshot.root;
    while (route !== void 0) {
      pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
      route = route.children.find((child) => child.outlet === PRIMARY_OUTLET);
    }
    return pageTitle;
  }
  /**
   * Given an `ActivatedRouteSnapshot`, returns the final value of the
   * `Route.title` property, which can either be a static string or a resolved value.
   */
  getResolvedTitleForRoute(snapshot) {
    return snapshot.data[RouteTitleKey];
  }
};
_TitleStrategy.\u0275fac = function TitleStrategy_Factory(t) {
  return new (t || _TitleStrategy)();
};
_TitleStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _TitleStrategy,
  factory: () => (() => inject(DefaultTitleStrategy))(),
  providedIn: "root"
});
var TitleStrategy = _TitleStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultTitleStrategy)
    }]
  }], null, null);
})();
var _DefaultTitleStrategy = class _DefaultTitleStrategy extends TitleStrategy {
  constructor(title) {
    super();
    this.title = title;
  }
  /**
   * Sets the title of the browser to the given value.
   *
   * @param title The `pageTitle` from the deepest primary route.
   */
  updateTitle(snapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== void 0) {
      this.title.setTitle(title);
    }
  }
};
_DefaultTitleStrategy.\u0275fac = function DefaultTitleStrategy_Factory(t) {
  return new (t || _DefaultTitleStrategy)(\u0275\u0275inject(Title));
};
_DefaultTitleStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DefaultTitleStrategy,
  factory: _DefaultTitleStrategy.\u0275fac,
  providedIn: "root"
});
var DefaultTitleStrategy = _DefaultTitleStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTitleStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Title
  }], null);
})();
var ROUTER_CONFIGURATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router config" : "", {
  providedIn: "root",
  factory: () => ({})
});
var ROUTES = new InjectionToken(ngDevMode ? "ROUTES" : "");
var _RouterConfigLoader = class _RouterConfigLoader {
  constructor() {
    this.componentLoaders = /* @__PURE__ */ new WeakMap();
    this.childrenLoaders = /* @__PURE__ */ new WeakMap();
    this.compiler = inject(Compiler);
  }
  loadComponent(route) {
    if (this.componentLoaders.get(route)) {
      return this.componentLoaders.get(route);
    } else if (route._loadedComponent) {
      return of(route._loadedComponent);
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const loadRunner = wrapIntoObservable(route.loadComponent()).pipe(map(maybeUnwrapDefaultExport), tap((component) => {
      if (this.onLoadEndListener) {
        this.onLoadEndListener(route);
      }
      (typeof ngDevMode === "undefined" || ngDevMode) && assertStandalone(route.path ?? "", component);
      route._loadedComponent = component;
    }), finalize(() => {
      this.componentLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.componentLoaders.set(route, loader);
    return loader;
  }
  loadChildren(parentInjector, route) {
    if (this.childrenLoaders.get(route)) {
      return this.childrenLoaders.get(route);
    } else if (route._loadedRoutes) {
      return of({
        routes: route._loadedRoutes,
        injector: route._loadedInjector
      });
    }
    if (this.onLoadStartListener) {
      this.onLoadStartListener(route);
    }
    const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
    const loadRunner = moduleFactoryOrRoutes$.pipe(finalize(() => {
      this.childrenLoaders.delete(route);
    }));
    const loader = new ConnectableObservable(loadRunner, () => new Subject()).pipe(refCount());
    this.childrenLoaders.set(route, loader);
    return loader;
  }
};
_RouterConfigLoader.\u0275fac = function RouterConfigLoader_Factory(t) {
  return new (t || _RouterConfigLoader)();
};
_RouterConfigLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RouterConfigLoader,
  factory: _RouterConfigLoader.\u0275fac,
  providedIn: "root"
});
var RouterConfigLoader = _RouterConfigLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterConfigLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(route.loadChildren()).pipe(map(maybeUnwrapDefaultExport), mergeMap((t) => {
    if (t instanceof NgModuleFactory$1 || Array.isArray(t)) {
      return of(t);
    } else {
      return from(compiler.compileModuleAsync(t));
    }
  }), map((factoryOrRoutes) => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      rawRoutes = injector.get(ROUTES, [], {
        optional: true,
        self: true
      }).flat();
    }
    const routes2 = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(routes2, route.path, requireStandaloneComponents);
    return {
      routes: routes2,
      injector
    };
  }));
}
function isWrappedDefaultExport(value) {
  return value && typeof value === "object" && "default" in value;
}
function maybeUnwrapDefaultExport(input) {
  return isWrappedDefaultExport(input) ? input["default"] : input;
}
var _UrlHandlingStrategy = class _UrlHandlingStrategy {
};
_UrlHandlingStrategy.\u0275fac = function UrlHandlingStrategy_Factory(t) {
  return new (t || _UrlHandlingStrategy)();
};
_UrlHandlingStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _UrlHandlingStrategy,
  factory: () => (() => inject(DefaultUrlHandlingStrategy))(),
  providedIn: "root"
});
var UrlHandlingStrategy = _UrlHandlingStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultUrlHandlingStrategy)
    }]
  }], null, null);
})();
var _DefaultUrlHandlingStrategy = class _DefaultUrlHandlingStrategy {
  shouldProcessUrl(url) {
    return true;
  }
  extract(url) {
    return url;
  }
  merge(newUrlPart, wholeUrl) {
    return newUrlPart;
  }
};
_DefaultUrlHandlingStrategy.\u0275fac = function DefaultUrlHandlingStrategy_Factory(t) {
  return new (t || _DefaultUrlHandlingStrategy)();
};
_DefaultUrlHandlingStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DefaultUrlHandlingStrategy,
  factory: _DefaultUrlHandlingStrategy.\u0275fac,
  providedIn: "root"
});
var DefaultUrlHandlingStrategy = _DefaultUrlHandlingStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultUrlHandlingStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? "view transition helper" : "");
var VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? "view transition options" : "");
function createViewTransition(injector, from2, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document2 = injector.get(DOCUMENT);
  return injector.get(NgZone).runOutsideAngular(() => {
    if (!document2.startViewTransition || transitionOptions.skipNextTransition) {
      transitionOptions.skipNextTransition = false;
      return new Promise((resolve) => setTimeout(resolve));
    }
    let resolveViewTransitionStarted;
    const viewTransitionStarted = new Promise((resolve) => {
      resolveViewTransitionStarted = resolve;
    });
    const transition2 = document2.startViewTransition(() => {
      resolveViewTransitionStarted();
      return createRenderPromise(injector);
    });
    const {
      onViewTransitionCreated
    } = transitionOptions;
    if (onViewTransitionCreated) {
      runInInjectionContext(injector, () => onViewTransitionCreated({
        transition: transition2,
        from: from2,
        to
      }));
    }
    return viewTransitionStarted;
  });
}
function createRenderPromise(injector) {
  return new Promise((resolve) => {
    afterNextRender(resolve, {
      injector
    });
  });
}
var _NavigationTransitions = class _NavigationTransitions {
  get hasRequestedNavigation() {
    return this.navigationId !== 0;
  }
  constructor() {
    this.currentNavigation = null;
    this.currentTransition = null;
    this.lastSuccessfulNavigation = null;
    this.events = new Subject();
    this.transitionAbortSubject = new Subject();
    this.configLoader = inject(RouterConfigLoader);
    this.environmentInjector = inject(EnvironmentInjector);
    this.urlSerializer = inject(UrlSerializer);
    this.rootContexts = inject(ChildrenOutletContexts);
    this.location = inject(Location);
    this.inputBindingEnabled = inject(INPUT_BINDER, {
      optional: true
    }) !== null;
    this.titleStrategy = inject(TitleStrategy);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly";
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this.createViewTransition = inject(CREATE_VIEW_TRANSITION, {
      optional: true
    });
    this.navigationId = 0;
    this.afterPreactivation = () => of(void 0);
    this.rootComponentType = null;
    const onLoadStart = (r) => this.events.next(new RouteConfigLoadStart(r));
    const onLoadEnd = (r) => this.events.next(new RouteConfigLoadEnd(r));
    this.configLoader.onLoadEndListener = onLoadEnd;
    this.configLoader.onLoadStartListener = onLoadStart;
  }
  complete() {
    this.transitions?.complete();
  }
  handleNavigationRequest(request) {
    const id = ++this.navigationId;
    this.transitions?.next(__spreadProps(__spreadValues(__spreadValues({}, this.transitions.value), request), {
      id
    }));
  }
  setupNavigations(router, initialUrlTree, initialRouterState) {
    this.transitions = new BehaviorSubject({
      id: 0,
      currentUrlTree: initialUrlTree,
      currentRawUrl: initialUrlTree,
      extractedUrl: this.urlHandlingStrategy.extract(initialUrlTree),
      urlAfterRedirects: this.urlHandlingStrategy.extract(initialUrlTree),
      rawUrl: initialUrlTree,
      extras: {},
      resolve: null,
      reject: null,
      promise: Promise.resolve(true),
      source: IMPERATIVE_NAVIGATION,
      restoredState: null,
      currentSnapshot: initialRouterState.snapshot,
      targetSnapshot: null,
      currentRouterState: initialRouterState,
      targetRouterState: null,
      guards: {
        canActivateChecks: [],
        canDeactivateChecks: []
      },
      guardsResult: null
    });
    return this.transitions.pipe(
      filter((t) => t.id !== 0),
      // Extract URL
      map((t) => __spreadProps(__spreadValues({}, t), {
        extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
      })),
      // Using switchMap so we cancel executing navigations when a new one comes in
      switchMap((overallTransitionState) => {
        let completed = false;
        let errored = false;
        return of(overallTransitionState).pipe(
          switchMap((t) => {
            if (this.navigationId > overallTransitionState.id) {
              const cancellationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancellationReason, NavigationCancellationCode.SupersededByNewNavigation);
              return EMPTY;
            }
            this.currentTransition = overallTransitionState;
            this.currentNavigation = {
              id: t.id,
              initialUrl: t.rawUrl,
              extractedUrl: t.extractedUrl,
              trigger: t.source,
              extras: t.extras,
              previousNavigation: !this.lastSuccessfulNavigation ? null : __spreadProps(__spreadValues({}, this.lastSuccessfulNavigation), {
                previousNavigation: null
              })
            };
            const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
            const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
            if (!urlTransition && onSameUrlNavigation !== "reload") {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, NavigationSkippedCode.IgnoredSameUrlNavigation));
              t.resolve(null);
              return EMPTY;
            }
            if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
              return of(t).pipe(
                // Fire NavigationStart event
                switchMap((t2) => {
                  const transition2 = this.transitions?.getValue();
                  this.events.next(new NavigationStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), t2.source, t2.restoredState));
                  if (transition2 !== this.transitions?.getValue()) {
                    return EMPTY;
                  }
                  return Promise.resolve(t2);
                }),
                // Recognize
                recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
                // Update URL if in `eager` update mode
                tap((t2) => {
                  overallTransitionState.targetSnapshot = t2.targetSnapshot;
                  overallTransitionState.urlAfterRedirects = t2.urlAfterRedirects;
                  this.currentNavigation = __spreadProps(__spreadValues({}, this.currentNavigation), {
                    finalUrl: t2.urlAfterRedirects
                  });
                  const routesRecognized = new RoutesRecognized(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                  this.events.next(routesRecognized);
                })
              );
            } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
              const {
                id,
                extractedUrl,
                source,
                restoredState,
                extras
              } = t;
              const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
              this.events.next(navStart);
              const targetSnapshot = createEmptyState(this.rootComponentType).snapshot;
              this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
                targetSnapshot,
                urlAfterRedirects: extractedUrl,
                extras: __spreadProps(__spreadValues({}, extras), {
                  skipLocationChange: false,
                  replaceUrl: false
                })
              });
              this.currentNavigation.finalUrl = extractedUrl;
              return of(overallTransitionState);
            } else {
              const reason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : "";
              this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, NavigationSkippedCode.IgnoredByUrlHandlingStrategy));
              t.resolve(null);
              return EMPTY;
            }
          }),
          // --- GUARDS ---
          tap((t) => {
            const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
            this.events.next(guardsStart);
          }),
          map((t) => {
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
            });
            return overallTransitionState;
          }),
          checkGuards(this.environmentInjector, (evt) => this.events.next(evt)),
          tap((t) => {
            overallTransitionState.guardsResult = t.guardsResult;
            if (isUrlTree(t.guardsResult)) {
              throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
            }
            const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
            this.events.next(guardsEnd);
          }),
          filter((t) => {
            if (!t.guardsResult) {
              this.cancelNavigationTransition(t, "", NavigationCancellationCode.GuardRejected);
              return false;
            }
            return true;
          }),
          // --- RESOLVE ---
          switchTap((t) => {
            if (t.guards.canActivateChecks.length) {
              return of(t).pipe(tap((t2) => {
                const resolveStart = new ResolveStart(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                this.events.next(resolveStart);
              }), switchMap((t2) => {
                let dataResolved = false;
                return of(t2).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), tap({
                  next: () => dataResolved = true,
                  complete: () => {
                    if (!dataResolved) {
                      this.cancelNavigationTransition(t2, typeof ngDevMode === "undefined" || ngDevMode ? `At least one route resolver didn't emit any value.` : "", NavigationCancellationCode.NoDataFromResolver);
                    }
                  }
                }));
              }), tap((t2) => {
                const resolveEnd = new ResolveEnd(t2.id, this.urlSerializer.serialize(t2.extractedUrl), this.urlSerializer.serialize(t2.urlAfterRedirects), t2.targetSnapshot);
                this.events.next(resolveEnd);
              }));
            }
            return void 0;
          }),
          // --- LOAD COMPONENTS ---
          switchTap((t) => {
            const loadComponents = (route) => {
              const loaders = [];
              if (route.routeConfig?.loadComponent && !route.routeConfig._loadedComponent) {
                loaders.push(this.configLoader.loadComponent(route.routeConfig).pipe(tap((loadedComponent) => {
                  route.component = loadedComponent;
                }), map(() => void 0)));
              }
              for (const child of route.children) {
                loaders.push(...loadComponents(child));
              }
              return loaders;
            };
            return combineLatest(loadComponents(t.targetSnapshot.root)).pipe(defaultIfEmpty(null), take(1));
          }),
          switchTap(() => this.afterPreactivation()),
          switchMap(() => {
            const {
              currentSnapshot,
              targetSnapshot
            } = overallTransitionState;
            const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
            return viewTransitionStarted ? from(viewTransitionStarted).pipe(map(() => overallTransitionState)) : of(overallTransitionState);
          }),
          map((t) => {
            const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
            this.currentTransition = overallTransitionState = __spreadProps(__spreadValues({}, t), {
              targetRouterState
            });
            this.currentNavigation.targetRouterState = targetRouterState;
            return overallTransitionState;
          }),
          tap(() => {
            this.events.next(new BeforeActivateRoutes());
          }),
          activateRoutes(this.rootContexts, router.routeReuseStrategy, (evt) => this.events.next(evt), this.inputBindingEnabled),
          // Ensure that if some observable used to drive the transition doesn't
          // complete, the navigation still finalizes This should never happen, but
          // this is done as a safety measure to avoid surfacing this error (#49567).
          take(1),
          tap({
            next: (t) => {
              completed = true;
              this.lastSuccessfulNavigation = this.currentNavigation;
              this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
              this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
              t.resolve(true);
            },
            complete: () => {
              completed = true;
            }
          }),
          // There used to be a lot more logic happening directly within the
          // transition Observable. Some of this logic has been refactored out to
          // other places but there may still be errors that happen there. This gives
          // us a way to cancel the transition from the outside. This may also be
          // required in the future to support something like the abort signal of the
          // Navigation API where the navigation gets aborted from outside the
          // transition.
          takeUntil(this.transitionAbortSubject.pipe(tap((err) => {
            throw err;
          }))),
          finalize(() => {
            if (!completed && !errored) {
              const cancelationReason = typeof ngDevMode === "undefined" || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : "";
              this.cancelNavigationTransition(overallTransitionState, cancelationReason, NavigationCancellationCode.SupersededByNewNavigation);
            }
            if (this.currentTransition?.id === overallTransitionState.id) {
              this.currentNavigation = null;
              this.currentTransition = null;
            }
          }),
          catchError((e) => {
            errored = true;
            if (isNavigationCancelingError(e)) {
              this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
              if (!isRedirectingNavigationCancelingError(e)) {
                overallTransitionState.resolve(false);
              } else {
                this.events.next(new RedirectRequest(e.url));
              }
            } else {
              this.events.next(new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? void 0));
              try {
                overallTransitionState.resolve(router.errorHandler(e));
              } catch (ee) {
                if (this.options.resolveNavigationPromiseOnError) {
                  overallTransitionState.resolve(false);
                } else {
                  overallTransitionState.reject(ee);
                }
              }
            }
            return EMPTY;
          })
        );
      })
    );
  }
  cancelNavigationTransition(t, reason, code) {
    const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
    this.events.next(navCancel);
    t.resolve(false);
  }
  /**
   * @returns Whether we're navigating to somewhere that is not what the Router is
   * currently set to.
   */
  isUpdatingInternalState() {
    return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
  }
  /**
   * @returns Whether we're updating the browser URL to something new (navigation is going
   * to somewhere not displayed in the URL bar and we will update the URL
   * bar if navigation succeeds).
   */
  isUpdatedBrowserUrl() {
    const extractedBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
    return extractedBrowserUrl.toString() !== this.currentTransition?.extractedUrl.toString() && !this.currentTransition?.extras.skipLocationChange;
  }
};
_NavigationTransitions.\u0275fac = function NavigationTransitions_Factory(t) {
  return new (t || _NavigationTransitions)();
};
_NavigationTransitions.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NavigationTransitions,
  factory: _NavigationTransitions.\u0275fac,
  providedIn: "root"
});
var NavigationTransitions = _NavigationTransitions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationTransitions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}
var _RouteReuseStrategy = class _RouteReuseStrategy {
};
_RouteReuseStrategy.\u0275fac = function RouteReuseStrategy_Factory(t) {
  return new (t || _RouteReuseStrategy)();
};
_RouteReuseStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RouteReuseStrategy,
  factory: () => (() => inject(DefaultRouteReuseStrategy))(),
  providedIn: "root"
});
var RouteReuseStrategy = _RouteReuseStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(DefaultRouteReuseStrategy)
    }]
  }], null, null);
})();
var BaseRouteReuseStrategy = class {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route, detachedTree) {
  }
  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route) {
    return false;
  }
  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
};
var _DefaultRouteReuseStrategy = class _DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
};
_DefaultRouteReuseStrategy.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275DefaultRouteReuseStrategy_BaseFactory;
  return function DefaultRouteReuseStrategy_Factory(t) {
    return (\u0275DefaultRouteReuseStrategy_BaseFactory || (\u0275DefaultRouteReuseStrategy_BaseFactory = \u0275\u0275getInheritedFactory(_DefaultRouteReuseStrategy)))(t || _DefaultRouteReuseStrategy);
  };
})();
_DefaultRouteReuseStrategy.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _DefaultRouteReuseStrategy,
  factory: _DefaultRouteReuseStrategy.\u0275fac,
  providedIn: "root"
});
var DefaultRouteReuseStrategy = _DefaultRouteReuseStrategy;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultRouteReuseStrategy, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _StateManager = class _StateManager {
};
_StateManager.\u0275fac = function StateManager_Factory(t) {
  return new (t || _StateManager)();
};
_StateManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _StateManager,
  factory: () => (() => inject(HistoryStateManager))(),
  providedIn: "root"
});
var StateManager = _StateManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(HistoryStateManager)
    }]
  }], null, null);
})();
var _HistoryStateManager = class _HistoryStateManager extends StateManager {
  constructor() {
    super(...arguments);
    this.location = inject(Location);
    this.urlSerializer = inject(UrlSerializer);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    this.currentUrlTree = new UrlTree();
    this.rawUrlTree = this.currentUrlTree;
    this.currentPageId = 0;
    this.lastSuccessfulId = -1;
    this.routerState = createEmptyState(null);
    this.stateMemento = this.createStateMemento();
  }
  getCurrentUrlTree() {
    return this.currentUrlTree;
  }
  getRawUrlTree() {
    return this.rawUrlTree;
  }
  restoredState() {
    return this.location.getState();
  }
  /**
   * The ɵrouterPageId of whatever page is currently active in the browser history. This is
   * important for computing the target page id for new navigations because we need to ensure each
   * page id in the browser history is 1 more than the previous entry.
   */
  get browserPageId() {
    if (this.canceledNavigationResolution !== "computed") {
      return this.currentPageId;
    }
    return this.restoredState()?.\u0275routerPageId ?? this.currentPageId;
  }
  getRouterState() {
    return this.routerState;
  }
  createStateMemento() {
    return {
      rawUrlTree: this.rawUrlTree,
      currentUrlTree: this.currentUrlTree,
      routerState: this.routerState
    };
  }
  registerNonRouterCurrentEntryChangeListener(listener) {
    return this.location.subscribe((event) => {
      if (event["type"] === "popstate") {
        listener(event["url"], event.state);
      }
    });
  }
  handleRouterEvent(e, currentTransition) {
    if (e instanceof NavigationStart) {
      this.stateMemento = this.createStateMemento();
    } else if (e instanceof NavigationSkipped) {
      this.rawUrlTree = currentTransition.initialUrl;
    } else if (e instanceof RoutesRecognized) {
      if (this.urlUpdateStrategy === "eager") {
        if (!currentTransition.extras.skipLocationChange) {
          const rawUrl = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
          this.setBrowserUrl(rawUrl, currentTransition);
        }
      }
    } else if (e instanceof BeforeActivateRoutes) {
      this.currentUrlTree = currentTransition.finalUrl;
      this.rawUrlTree = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
      this.routerState = currentTransition.targetRouterState;
      if (this.urlUpdateStrategy === "deferred") {
        if (!currentTransition.extras.skipLocationChange) {
          this.setBrowserUrl(this.rawUrlTree, currentTransition);
        }
      }
    } else if (e instanceof NavigationCancel && (e.code === NavigationCancellationCode.GuardRejected || e.code === NavigationCancellationCode.NoDataFromResolver)) {
      this.restoreHistory(currentTransition);
    } else if (e instanceof NavigationError) {
      this.restoreHistory(currentTransition, true);
    } else if (e instanceof NavigationEnd) {
      this.lastSuccessfulId = e.id;
      this.currentPageId = this.browserPageId;
    }
  }
  setBrowserUrl(url, transition2) {
    const path = this.urlSerializer.serialize(url);
    if (this.location.isCurrentPathEqualTo(path) || !!transition2.extras.replaceUrl) {
      const currentBrowserPageId = this.browserPageId;
      const state2 = __spreadValues(__spreadValues({}, transition2.extras.state), this.generateNgRouterState(transition2.id, currentBrowserPageId));
      this.location.replaceState(path, "", state2);
    } else {
      const state2 = __spreadValues(__spreadValues({}, transition2.extras.state), this.generateNgRouterState(transition2.id, this.browserPageId + 1));
      this.location.go(path, "", state2);
    }
  }
  /**
   * Performs the necessary rollback action to restore the browser URL to the
   * state before the transition.
   */
  restoreHistory(navigation, restoringFromCaughtError = false) {
    if (this.canceledNavigationResolution === "computed") {
      const currentBrowserPageId = this.browserPageId;
      const targetPagePosition = this.currentPageId - currentBrowserPageId;
      if (targetPagePosition !== 0) {
        this.location.historyGo(targetPagePosition);
      } else if (this.currentUrlTree === navigation.finalUrl && targetPagePosition === 0) {
        this.resetState(navigation);
        this.resetUrlToCurrentUrlTree();
      } else {
      }
    } else if (this.canceledNavigationResolution === "replace") {
      if (restoringFromCaughtError) {
        this.resetState(navigation);
      }
      this.resetUrlToCurrentUrlTree();
    }
  }
  resetState(navigation) {
    this.routerState = this.stateMemento.routerState;
    this.currentUrlTree = this.stateMemento.currentUrlTree;
    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, navigation.finalUrl ?? this.rawUrlTree);
  }
  resetUrlToCurrentUrlTree() {
    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
  }
  generateNgRouterState(navigationId, routerPageId) {
    if (this.canceledNavigationResolution === "computed") {
      return {
        navigationId,
        \u0275routerPageId: routerPageId
      };
    }
    return {
      navigationId
    };
  }
};
_HistoryStateManager.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275HistoryStateManager_BaseFactory;
  return function HistoryStateManager_Factory(t) {
    return (\u0275HistoryStateManager_BaseFactory || (\u0275HistoryStateManager_BaseFactory = \u0275\u0275getInheritedFactory(_HistoryStateManager)))(t || _HistoryStateManager);
  };
})();
_HistoryStateManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HistoryStateManager,
  factory: _HistoryStateManager.\u0275fac,
  providedIn: "root"
});
var HistoryStateManager = _HistoryStateManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryStateManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NavigationResult;
(function(NavigationResult2) {
  NavigationResult2[NavigationResult2["COMPLETE"] = 0] = "COMPLETE";
  NavigationResult2[NavigationResult2["FAILED"] = 1] = "FAILED";
  NavigationResult2[NavigationResult2["REDIRECTING"] = 2] = "REDIRECTING";
})(NavigationResult || (NavigationResult = {}));
function afterNextNavigation(router, action) {
  router.events.pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), map((e) => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return NavigationResult.COMPLETE;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === NavigationCancellationCode.Redirect || e.code === NavigationCancellationCode.SupersededByNewNavigation : false;
    return redirecting ? NavigationResult.REDIRECTING : NavigationResult.FAILED;
  }), filter((result) => result !== NavigationResult.REDIRECTING), take(1)).subscribe(() => {
    action();
  });
}
function defaultErrorHandler(error) {
  throw error;
}
var exactMatchOptions = {
  paths: "exact",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "exact"
};
var subsetMatchOptions = {
  paths: "subset",
  fragment: "ignored",
  matrixParams: "ignored",
  queryParams: "subset"
};
var _Router = class _Router {
  get currentUrlTree() {
    return this.stateManager.getCurrentUrlTree();
  }
  get rawUrlTree() {
    return this.stateManager.getRawUrlTree();
  }
  /**
   * An event stream for routing events.
   */
  get events() {
    return this._events;
  }
  /**
   * The current state of routing in this NgModule.
   */
  get routerState() {
    return this.stateManager.getRouterState();
  }
  constructor() {
    this.disposed = false;
    this.isNgZoneEnabled = false;
    this.console = inject(Console);
    this.stateManager = inject(StateManager);
    this.options = inject(ROUTER_CONFIGURATION, {
      optional: true
    }) || {};
    this.pendingTasks = inject(PendingTasks);
    this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    this.navigationTransitions = inject(NavigationTransitions);
    this.urlSerializer = inject(UrlSerializer);
    this.location = inject(Location);
    this.urlHandlingStrategy = inject(UrlHandlingStrategy);
    this._events = new Subject();
    this.errorHandler = this.options.errorHandler || defaultErrorHandler;
    this.navigated = false;
    this.routeReuseStrategy = inject(RouteReuseStrategy);
    this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    this.config = inject(ROUTES, {
      optional: true
    })?.flat() ?? [];
    this.componentInputBindingEnabled = !!inject(INPUT_BINDER, {
      optional: true
    });
    this.eventsSubscription = new Subscription();
    this.isNgZoneEnabled = inject(NgZone) instanceof NgZone && NgZone.isInAngularZone();
    this.resetConfig(this.config);
    this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
      error: (e) => {
        this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
      }
    });
    this.subscribeToNavigationEvents();
  }
  subscribeToNavigationEvents() {
    const subscription = this.navigationTransitions.events.subscribe((e) => {
      try {
        const currentTransition = this.navigationTransitions.currentTransition;
        const currentNavigation = this.navigationTransitions.currentNavigation;
        if (currentTransition !== null && currentNavigation !== null) {
          this.stateManager.handleRouterEvent(e, currentNavigation);
          if (e instanceof NavigationCancel && e.code !== NavigationCancellationCode.Redirect && e.code !== NavigationCancellationCode.SupersededByNewNavigation) {
            this.navigated = true;
          } else if (e instanceof NavigationEnd) {
            this.navigated = true;
          } else if (e instanceof RedirectRequest) {
            const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
            const extras = {
              // Persist transient navigation info from the original navigation request.
              info: currentTransition.extras.info,
              skipLocationChange: currentTransition.extras.skipLocationChange,
              // The URL is already updated at this point if we have 'eager' URL
              // updates or if the navigation was triggered by the browser (back
              // button, URL bar, etc). We want to replace that item in history
              // if the navigation is rejected.
              replaceUrl: this.urlUpdateStrategy === "eager" || isBrowserTriggeredNavigation(currentTransition.source)
            };
            this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
              resolve: currentTransition.resolve,
              reject: currentTransition.reject,
              promise: currentTransition.promise
            });
          }
        }
        if (isPublicRouterEvent(e)) {
          this._events.next(e);
        }
      } catch (e2) {
        this.navigationTransitions.transitionAbortSubject.next(e2);
      }
    });
    this.eventsSubscription.add(subscription);
  }
  /** @internal */
  resetRootComponentType(rootComponentType) {
    this.routerState.root.component = rootComponentType;
    this.navigationTransitions.rootComponentType = rootComponentType;
  }
  /**
   * Sets up the location change listener and performs the initial navigation.
   */
  initialNavigation() {
    this.setUpLocationChangeListener();
    if (!this.navigationTransitions.hasRequestedNavigation) {
      this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
    }
  }
  /**
   * Sets up the location change listener. This listener detects navigations triggered from outside
   * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
   * navigation so that the correct events, guards, etc. are triggered.
   */
  setUpLocationChangeListener() {
    this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state2) => {
      setTimeout(() => {
        this.navigateToSyncWithBrowser(url, "popstate", state2);
      }, 0);
    });
  }
  /**
   * Schedules a router navigation to synchronize Router state with the browser state.
   *
   * This is done as a response to a popstate event and the initial navigation. These
   * two scenarios represent times when the browser URL/state has been updated and
   * the Router needs to respond to ensure its internal state matches.
   */
  navigateToSyncWithBrowser(url, source, state2) {
    const extras = {
      replaceUrl: true
    };
    const restoredState = state2?.navigationId ? state2 : null;
    if (state2) {
      const stateCopy = __spreadValues({}, state2);
      delete stateCopy.navigationId;
      delete stateCopy.\u0275routerPageId;
      if (Object.keys(stateCopy).length !== 0) {
        extras.state = stateCopy;
      }
    }
    const urlTree = this.parseUrl(url);
    this.scheduleNavigation(urlTree, source, restoredState, extras);
  }
  /** The current URL. */
  get url() {
    return this.serializeUrl(this.currentUrlTree);
  }
  /**
   * Returns the current `Navigation` object when the router is navigating,
   * and `null` when idle.
   */
  getCurrentNavigation() {
    return this.navigationTransitions.currentNavigation;
  }
  /**
   * The `Navigation` object of the most recent navigation to succeed and `null` if there
   *     has not been a successful navigation yet.
   */
  get lastSuccessfulNavigation() {
    return this.navigationTransitions.lastSuccessfulNavigation;
  }
  /**
   * Resets the route configuration used for navigation and generating links.
   *
   * @param config The route array for the new configuration.
   *
   * @usageNotes
   *
   * ```
   * router.resetConfig([
   *  { path: 'team/:id', component: TeamCmp, children: [
   *    { path: 'simple', component: SimpleCmp },
   *    { path: 'user/:name', component: UserCmp }
   *  ]}
   * ]);
   * ```
   */
  resetConfig(config) {
    (typeof ngDevMode === "undefined" || ngDevMode) && validateConfig(config);
    this.config = config.map(standardizeConfig);
    this.navigated = false;
  }
  /** @nodoc */
  ngOnDestroy() {
    this.dispose();
  }
  /** Disposes of the router. */
  dispose() {
    this.navigationTransitions.complete();
    if (this.nonRouterCurrentEntryChangeSubscription) {
      this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
      this.nonRouterCurrentEntryChangeSubscription = void 0;
    }
    this.disposed = true;
    this.eventsSubscription.unsubscribe();
  }
  /**
   * Appends URL segments to the current URL tree to create a new URL tree.
   *
   * @param commands An array of URL fragments with which to construct the new URL tree.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
   * property of the options object, if supplied.
   * @param navigationExtras Options that control the navigation strategy.
   * @returns The new URL tree.
   *
   * @usageNotes
   *
   * ```
   * // create /team/33/user/11
   * router.createUrlTree(['/team', 33, 'user', 11]);
   *
   * // create /team/33;expand=true/user/11
   * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
   *
   * // you can collapse static segments like this (this works only with the first passed-in value):
   * router.createUrlTree(['/team/33/user', userId]);
   *
   * // If the first segment can contain slashes, and you do not want the router to split it,
   * // you can do the following:
   * router.createUrlTree([{segmentPath: '/one/two'}]);
   *
   * // create /team/33/(user/11//right:chat)
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
   *
   * // remove the right secondary node
   * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
   *
   * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
   *
   * // navigate to /team/33/user/11/details
   * router.createUrlTree(['details'], {relativeTo: route});
   *
   * // navigate to /team/33/user/22
   * router.createUrlTree(['../22'], {relativeTo: route});
   *
   * // navigate to /team/44/user/22
   * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
   *
   * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
   * tree should be created relative to the root.
   * ```
   */
  createUrlTree(commands, navigationExtras = {}) {
    const {
      relativeTo,
      queryParams,
      fragment,
      queryParamsHandling,
      preserveFragment
    } = navigationExtras;
    const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
    let q = null;
    switch (queryParamsHandling) {
      case "merge":
        q = __spreadValues(__spreadValues({}, this.currentUrlTree.queryParams), queryParams);
        break;
      case "preserve":
        q = this.currentUrlTree.queryParams;
        break;
      default:
        q = queryParams || null;
    }
    if (q !== null) {
      q = this.removeEmptyProps(q);
    }
    let relativeToUrlSegmentGroup;
    try {
      const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
      relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
    } catch (e) {
      if (typeof commands[0] !== "string" || !commands[0].startsWith("/")) {
        commands = [];
      }
      relativeToUrlSegmentGroup = this.currentUrlTree.root;
    }
    return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
  }
  /**
   * Navigates to a view using an absolute route path.
   *
   * @param url An absolute path for a defined route. The function does not apply any delta to the
   *     current URL.
   * @param extras An object containing properties that modify the navigation strategy.
   *
   * @returns A Promise that resolves to 'true' when navigation succeeds,
   * to 'false' when navigation fails, or is rejected on error.
   *
   * @usageNotes
   *
   * The following calls request navigation to an absolute path.
   *
   * ```
   * router.navigateByUrl("/team/33/user/11");
   *
   * // Navigate without updating the URL
   * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
   * ```
   *
   * @see [Routing and Navigation guide](guide/router)
   *
   */
  navigateByUrl(url, extras = {
    skipLocationChange: false
  }) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (this.isNgZoneEnabled && !NgZone.isInAngularZone()) {
        this.console.warn(`Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?`);
      }
    }
    const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
    const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
    return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
  }
  /**
   * Navigate based on the provided array of commands and a starting point.
   * If no starting route is provided, the navigation is absolute.
   *
   * @param commands An array of URL fragments with which to construct the target URL.
   * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
   * segments, followed by the parameters for each segment.
   * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
   * of the options object, if supplied.
   * @param extras An options object that determines how the URL should be constructed or
   *     interpreted.
   *
   * @returns A Promise that resolves to `true` when navigation succeeds, or `false` when navigation
   *     fails. The Promise is rejected when an error occurs if `resolveNavigationPromiseOnError` is
   * not `true`.
   *
   * @usageNotes
   *
   * The following calls request navigation to a dynamic route path relative to the current URL.
   *
   * ```
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
   *
   * // Navigate without updating the URL, overriding the default behavior
   * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
   * ```
   *
   * @see [Routing and Navigation guide](guide/router)
   *
   */
  navigate(commands, extras = {
    skipLocationChange: false
  }) {
    validateCommands(commands);
    return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
  }
  /** Serializes a `UrlTree` into a string */
  serializeUrl(url) {
    return this.urlSerializer.serialize(url);
  }
  /** Parses a string into a `UrlTree` */
  parseUrl(url) {
    try {
      return this.urlSerializer.parse(url);
    } catch {
      return this.urlSerializer.parse("/");
    }
  }
  isActive(url, matchOptions) {
    let options;
    if (matchOptions === true) {
      options = __spreadValues({}, exactMatchOptions);
    } else if (matchOptions === false) {
      options = __spreadValues({}, subsetMatchOptions);
    } else {
      options = matchOptions;
    }
    if (isUrlTree(url)) {
      return containsTree(this.currentUrlTree, url, options);
    }
    const urlTree = this.parseUrl(url);
    return containsTree(this.currentUrlTree, urlTree, options);
  }
  removeEmptyProps(params) {
    return Object.entries(params).reduce((result, [key, value]) => {
      if (value !== null && value !== void 0) {
        result[key] = value;
      }
      return result;
    }, {});
  }
  scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
    if (this.disposed) {
      return Promise.resolve(false);
    }
    let resolve;
    let reject;
    let promise;
    if (priorPromise) {
      resolve = priorPromise.resolve;
      reject = priorPromise.reject;
      promise = priorPromise.promise;
    } else {
      promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
    }
    const taskId = this.pendingTasks.add();
    afterNextNavigation(this, () => {
      queueMicrotask(() => this.pendingTasks.remove(taskId));
    });
    this.navigationTransitions.handleNavigationRequest({
      source,
      restoredState,
      currentUrlTree: this.currentUrlTree,
      currentRawUrl: this.currentUrlTree,
      rawUrl,
      extras,
      resolve,
      reject,
      promise,
      currentSnapshot: this.routerState.snapshot,
      currentRouterState: this.routerState
    });
    return promise.catch((e) => {
      return Promise.reject(e);
    });
  }
};
_Router.\u0275fac = function Router_Factory(t) {
  return new (t || _Router)();
};
_Router.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Router,
  factory: _Router.\u0275fac,
  providedIn: "root"
});
var Router = _Router;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Router, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new RuntimeError(4008, (typeof ngDevMode === "undefined" || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}
var _RouterLink = class _RouterLink {
  constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
    this.router = router;
    this.route = route;
    this.tabIndexAttribute = tabIndexAttribute;
    this.renderer = renderer;
    this.el = el;
    this.locationStrategy = locationStrategy;
    this.href = null;
    this.commands = null;
    this.onChanges = new Subject();
    this.preserveFragment = false;
    this.skipLocationChange = false;
    this.replaceUrl = false;
    const tagName = el.nativeElement.tagName?.toLowerCase();
    this.isAnchorElement = tagName === "a" || tagName === "area";
    if (this.isAnchorElement) {
      this.subscription = router.events.subscribe((s) => {
        if (s instanceof NavigationEnd) {
          this.updateHref();
        }
      });
    } else {
      this.setTabIndexIfNotOnNativeEl("0");
    }
  }
  /**
   * Modifies the tab index if there was not a tabindex attribute on the element during
   * instantiation.
   */
  setTabIndexIfNotOnNativeEl(newTabIndex) {
    if (this.tabIndexAttribute != null || this.isAnchorElement) {
      return;
    }
    this.applyAttributeValue("tabindex", newTabIndex);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.isAnchorElement) {
      this.updateHref();
    }
    this.onChanges.next(this);
  }
  /**
   * Commands to pass to {@link Router#createUrlTree}.
   *   - **array**: commands to pass to {@link Router#createUrlTree}.
   *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
   *   - **null|undefined**: effectively disables the `routerLink`
   * @see {@link Router#createUrlTree}
   */
  set routerLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
      this.setTabIndexIfNotOnNativeEl("0");
    } else {
      this.commands = null;
      this.setTabIndexIfNotOnNativeEl(null);
    }
  }
  /** @nodoc */
  onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
    const urlTree = this.urlTree;
    if (urlTree === null) {
      return true;
    }
    if (this.isAnchorElement) {
      if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
        return true;
      }
      if (typeof this.target === "string" && this.target != "_self") {
        return true;
      }
    }
    const extras = {
      skipLocationChange: this.skipLocationChange,
      replaceUrl: this.replaceUrl,
      state: this.state,
      info: this.info
    };
    this.router.navigateByUrl(urlTree, extras);
    return !this.isAnchorElement;
  }
  /** @nodoc */
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  updateHref() {
    const urlTree = this.urlTree;
    this.href = urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(urlTree)) : null;
    const sanitizedValue = this.href === null ? null : (
      // This class represents a directive that can be added to both `<a>` elements,
      // as well as other elements. As a result, we can't define security context at
      // compile time. So the security context is deferred to runtime.
      // The `ɵɵsanitizeUrlOrResourceUrl` selects the necessary sanitizer function
      // based on the tag and property names. The logic mimics the one from
      // `packages/compiler/src/schema/dom_security_schema.ts`, which is used at compile time.
      //
      // Note: we should investigate whether we can switch to using `@HostBinding('attr.href')`
      // instead of applying a value via a renderer, after a final merge of the
      // `RouterLinkWithHref` directive.
      \u0275\u0275sanitizeUrlOrResourceUrl(this.href, this.el.nativeElement.tagName.toLowerCase(), "href")
    );
    this.applyAttributeValue("href", sanitizedValue);
  }
  applyAttributeValue(attrName, attrValue) {
    const renderer = this.renderer;
    const nativeElement = this.el.nativeElement;
    if (attrValue !== null) {
      renderer.setAttribute(nativeElement, attrName, attrValue);
    } else {
      renderer.removeAttribute(nativeElement, attrName);
    }
  }
  get urlTree() {
    if (this.commands === null) {
      return null;
    }
    return this.router.createUrlTree(this.commands, {
      // If the `relativeTo` input is not defined, we want to use `this.route` by default.
      // Otherwise, we should use the value provided by the user in the input.
      relativeTo: this.relativeTo !== void 0 ? this.relativeTo : this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: this.preserveFragment
    });
  }
};
_RouterLink.\u0275fac = function RouterLink_Factory(t) {
  return new (t || _RouterLink)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LocationStrategy));
};
_RouterLink.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RouterLink,
  selectors: [["", "routerLink", ""]],
  hostVars: 1,
  hostBindings: function RouterLink_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function RouterLink_click_HostBindingHandler($event) {
        return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
      });
    }
    if (rf & 2) {
      \u0275\u0275attribute("target", ctx.target);
    }
  },
  inputs: {
    target: "target",
    queryParams: "queryParams",
    fragment: "fragment",
    queryParamsHandling: "queryParamsHandling",
    state: "state",
    info: "info",
    relativeTo: "relativeTo",
    preserveFragment: [InputFlags.HasDecoratorInputTransform, "preserveFragment", "preserveFragment", booleanAttribute],
    skipLocationChange: [InputFlags.HasDecoratorInputTransform, "skipLocationChange", "skipLocationChange", booleanAttribute],
    replaceUrl: [InputFlags.HasDecoratorInputTransform, "replaceUrl", "replaceUrl", booleanAttribute],
    routerLink: "routerLink"
  },
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
});
var RouterLink = _RouterLink;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLink, [{
    type: Directive,
    args: [{
      selector: "[routerLink]",
      standalone: true
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    state: [{
      type: Input
    }],
    info: [{
      type: Input
    }],
    relativeTo: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    skipLocationChange: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    replaceUrl: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    routerLink: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.shiftKey", "$event.altKey", "$event.metaKey"]]
    }]
  });
})();
var _RouterLinkActive = class _RouterLinkActive {
  get isActive() {
    return this._isActive;
  }
  constructor(router, element, renderer, cdr, link) {
    this.router = router;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.link = link;
    this.classes = [];
    this._isActive = false;
    this.routerLinkActiveOptions = {
      exact: false
    };
    this.isActiveChange = new EventEmitter();
    this.routerEventsSubscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.update();
      }
    });
  }
  /** @nodoc */
  ngAfterContentInit() {
    of(this.links.changes, of(null)).pipe(mergeAll()).subscribe((_) => {
      this.update();
      this.subscribeToEachLinkOnChanges();
    });
  }
  subscribeToEachLinkOnChanges() {
    this.linkInputChangesSubscription?.unsubscribe();
    const allLinkChanges = [...this.links.toArray(), this.link].filter((link) => !!link).map((link) => link.onChanges);
    this.linkInputChangesSubscription = from(allLinkChanges).pipe(mergeAll()).subscribe((link) => {
      if (this._isActive !== this.isLinkActive(this.router)(link)) {
        this.update();
      }
    });
  }
  set routerLinkActive(data) {
    const classes = Array.isArray(data) ? data : data.split(" ");
    this.classes = classes.filter((c) => !!c);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this.update();
  }
  /** @nodoc */
  ngOnDestroy() {
    this.routerEventsSubscription.unsubscribe();
    this.linkInputChangesSubscription?.unsubscribe();
  }
  update() {
    if (!this.links || !this.router.navigated)
      return;
    queueMicrotask(() => {
      const hasActiveLinks = this.hasActiveLinks();
      this.classes.forEach((c) => {
        if (hasActiveLinks) {
          this.renderer.addClass(this.element.nativeElement, c);
        } else {
          this.renderer.removeClass(this.element.nativeElement, c);
        }
      });
      if (hasActiveLinks && this.ariaCurrentWhenActive !== void 0) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString());
      } else {
        this.renderer.removeAttribute(this.element.nativeElement, "aria-current");
      }
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.cdr.markForCheck();
        this.isActiveChange.emit(hasActiveLinks);
      }
    });
  }
  isLinkActive(router) {
    const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : (
      // While the types should disallow `undefined` here, it's possible without strict inputs
      this.routerLinkActiveOptions.exact || false
    );
    return (link) => {
      const urlTree = link.urlTree;
      return urlTree ? router.isActive(urlTree, options) : false;
    };
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
  }
};
_RouterLinkActive.\u0275fac = function RouterLinkActive_Factory(t) {
  return new (t || _RouterLinkActive)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(RouterLink, 8));
};
_RouterLinkActive.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _RouterLinkActive,
  selectors: [["", "routerLinkActive", ""]],
  contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.links = _t);
    }
  },
  inputs: {
    routerLinkActiveOptions: "routerLinkActiveOptions",
    ariaCurrentWhenActive: "ariaCurrentWhenActive",
    routerLinkActive: "routerLinkActive"
  },
  outputs: {
    isActiveChange: "isActiveChange"
  },
  exportAs: ["routerLinkActive"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var RouterLinkActive = _RouterLinkActive;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkActive, [{
    type: Directive,
    args: [{
      selector: "[routerLinkActive]",
      exportAs: "routerLinkActive",
      standalone: true
    }]
  }], () => [{
    type: Router
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }], {
    links: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }],
    routerLinkActiveOptions: [{
      type: Input
    }],
    ariaCurrentWhenActive: [{
      type: Input
    }],
    isActiveChange: [{
      type: Output
    }],
    routerLinkActive: [{
      type: Input
    }]
  });
})();
function isActiveMatchOptions(options) {
  return !!options.paths;
}
var PreloadingStrategy = class {
};
var _PreloadAllModules = class _PreloadAllModules {
  preload(route, fn) {
    return fn().pipe(catchError(() => of(null)));
  }
};
_PreloadAllModules.\u0275fac = function PreloadAllModules_Factory(t) {
  return new (t || _PreloadAllModules)();
};
_PreloadAllModules.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _PreloadAllModules,
  factory: _PreloadAllModules.\u0275fac,
  providedIn: "root"
});
var PreloadAllModules = _PreloadAllModules;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreloadAllModules, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NoPreloading = class _NoPreloading {
  preload(route, fn) {
    return of(null);
  }
};
_NoPreloading.\u0275fac = function NoPreloading_Factory(t) {
  return new (t || _NoPreloading)();
};
_NoPreloading.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NoPreloading,
  factory: _NoPreloading.\u0275fac,
  providedIn: "root"
});
var NoPreloading = _NoPreloading;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoPreloading, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _RouterPreloader = class _RouterPreloader {
  constructor(router, compiler, injector, preloadingStrategy, loader) {
    this.router = router;
    this.injector = injector;
    this.preloadingStrategy = preloadingStrategy;
    this.loader = loader;
  }
  setUpPreloading() {
    this.subscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd), concatMap(() => this.preload())).subscribe(() => {
    });
  }
  preload() {
    return this.processRoutes(this.injector, this.router.config);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  processRoutes(injector, routes2) {
    const res = [];
    for (const route of routes2) {
      if (route.providers && !route._injector) {
        route._injector = createEnvironmentInjector(route.providers, injector, `Route: ${route.path}`);
      }
      const injectorForCurrentRoute = route._injector ?? injector;
      const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
      if (route.loadChildren && !route._loadedRoutes && route.canLoad === void 0 || route.loadComponent && !route._loadedComponent) {
        res.push(this.preloadConfig(injectorForCurrentRoute, route));
      }
      if (route.children || route._loadedRoutes) {
        res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
      }
    }
    return from(res).pipe(mergeAll());
  }
  preloadConfig(injector, route) {
    return this.preloadingStrategy.preload(route, () => {
      let loadedChildren$;
      if (route.loadChildren && route.canLoad === void 0) {
        loadedChildren$ = this.loader.loadChildren(injector, route);
      } else {
        loadedChildren$ = of(null);
      }
      const recursiveLoadChildren$ = loadedChildren$.pipe(mergeMap((config) => {
        if (config === null) {
          return of(void 0);
        }
        route._loadedRoutes = config.routes;
        route._loadedInjector = config.injector;
        return this.processRoutes(config.injector ?? injector, config.routes);
      }));
      if (route.loadComponent && !route._loadedComponent) {
        const loadComponent$ = this.loader.loadComponent(route);
        return from([recursiveLoadChildren$, loadComponent$]).pipe(mergeAll());
      } else {
        return recursiveLoadChildren$;
      }
    });
  }
};
_RouterPreloader.\u0275fac = function RouterPreloader_Factory(t) {
  return new (t || _RouterPreloader)(\u0275\u0275inject(Router), \u0275\u0275inject(Compiler), \u0275\u0275inject(EnvironmentInjector), \u0275\u0275inject(PreloadingStrategy), \u0275\u0275inject(RouterConfigLoader));
};
_RouterPreloader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RouterPreloader,
  factory: _RouterPreloader.\u0275fac,
  providedIn: "root"
});
var RouterPreloader = _RouterPreloader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterPreloader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Router
  }, {
    type: Compiler
  }, {
    type: EnvironmentInjector
  }, {
    type: PreloadingStrategy
  }, {
    type: RouterConfigLoader
  }], null);
})();
var ROUTER_SCROLLER = new InjectionToken("");
var _RouterScroller = class _RouterScroller {
  /** @nodoc */
  constructor(urlSerializer, transitions, viewportScroller, zone, options = {}) {
    this.urlSerializer = urlSerializer;
    this.transitions = transitions;
    this.viewportScroller = viewportScroller;
    this.zone = zone;
    this.options = options;
    this.lastId = 0;
    this.lastSource = "imperative";
    this.restoredId = 0;
    this.store = {};
    this.environmentInjector = inject(EnvironmentInjector);
    options.scrollPositionRestoration ||= "disabled";
    options.anchorScrolling ||= "disabled";
  }
  init() {
    if (this.options.scrollPositionRestoration !== "disabled") {
      this.viewportScroller.setHistoryScrollRestoration("manual");
    }
    this.routerEventsSubscription = this.createScrollEvents();
    this.scrollEventsSubscription = this.consumeScrollEvents();
  }
  createScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        this.store[this.lastId] = this.viewportScroller.getScrollPosition();
        this.lastSource = e.navigationTrigger;
        this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
      } else if (e instanceof NavigationEnd) {
        this.lastId = e.id;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment);
      } else if (e instanceof NavigationSkipped && e.code === NavigationSkippedCode.IgnoredSameUrlNavigation) {
        this.lastSource = void 0;
        this.restoredId = 0;
        this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment);
      }
    });
  }
  consumeScrollEvents() {
    return this.transitions.events.subscribe((e) => {
      if (!(e instanceof Scroll))
        return;
      if (e.position) {
        if (this.options.scrollPositionRestoration === "top") {
          this.viewportScroller.scrollToPosition([0, 0]);
        } else if (this.options.scrollPositionRestoration === "enabled") {
          this.viewportScroller.scrollToPosition(e.position);
        }
      } else {
        if (e.anchor && this.options.anchorScrolling === "enabled") {
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (this.options.scrollPositionRestoration !== "disabled") {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      }
    });
  }
  scheduleScrollEvent(routerEvent, anchor) {
    this.zone.runOutsideAngular(() => __async(this, null, function* () {
      yield new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        });
        afterNextRender(() => {
          resolve();
        }, {
          injector: this.environmentInjector
        });
      });
      this.zone.run(() => {
        this.transitions.events.next(new Scroll(routerEvent, this.lastSource === "popstate" ? this.store[this.restoredId] : null, anchor));
      });
    }));
  }
  /** @nodoc */
  ngOnDestroy() {
    this.routerEventsSubscription?.unsubscribe();
    this.scrollEventsSubscription?.unsubscribe();
  }
};
_RouterScroller.\u0275fac = function RouterScroller_Factory(t) {
  \u0275\u0275invalidFactory();
};
_RouterScroller.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _RouterScroller,
  factory: _RouterScroller.\u0275fac
});
var RouterScroller = _RouterScroller;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterScroller, [{
    type: Injectable
  }], () => [{
    type: UrlSerializer
  }, {
    type: NavigationTransitions
  }, {
    type: ViewportScroller
  }, {
    type: NgZone
  }, {
    type: void 0
  }], null);
})();
function rootRoute(router) {
  return router.routerState.root;
}
function routerFeature(kind, providers) {
  return {
    \u0275kind: kind,
    \u0275providers: providers
  };
}
var ROUTER_IS_PROVIDED = new InjectionToken("", {
  providedIn: "root",
  factory: () => false
});
function getBootstrapListener() {
  const injector = inject(Injector);
  return (bootstrappedComponentRef) => {
    const ref = injector.get(ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, InjectFlags.Optional)?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, InjectFlags.Optional)?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
var BOOTSTRAP_DONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "bootstrap done indicator" : "", {
  factory: () => {
    return new Subject();
  }
});
var INITIAL_NAVIGATION = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "initial navigation" : "", {
  providedIn: "root",
  factory: () => 1
  /* InitialNavigation.EnabledNonBlocking */
});
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: INITIAL_NAVIGATION,
    useValue: 0
    /* InitialNavigation.EnabledBlocking */
  }, {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [Injector],
    useFactory: (injector) => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve());
      return () => {
        return locationInitialized.then(() => {
          return new Promise((resolve) => {
            const router = injector.get(Router);
            const bootstrapDone = injector.get(BOOTSTRAP_DONE);
            afterNextNavigation(router, () => {
              resolve(true);
            });
            injector.get(NavigationTransitions).afterPreactivation = () => {
              resolve(true);
              return bootstrapDone.closed ? of(void 0) : bootstrapDone;
            };
            router.initialNavigation();
          });
        });
      };
    }
  }];
  return routerFeature(2, providers);
}
function withDisabledInitialNavigation() {
  const providers = [{
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: () => {
      const router = inject(Router);
      return () => {
        router.setUpLocationChangeListener();
      };
    }
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 2
    /* InitialNavigation.Disabled */
  }];
  return routerFeature(3, providers);
}
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    providers = [{
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = inject(Router);
        return () => router.events.subscribe((e) => {
          console.group?.(`Router Event: ${e.constructor.name}`);
          console.log(stringifyEvent(e));
          console.log(e);
          console.groupEnd?.();
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1, providers);
}
var ROUTER_PRELOADER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router preloader" : "");
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0, providers);
}
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8, providers);
}
function withViewTransitions(options) {
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: __spreadValues({
      skipNextTransition: !!options?.skipInitialTransition
    }, options)
  }];
  return routerFeature(9, providers);
}
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, \u0275EmptyOutletComponent];
var ROUTER_FORROOT_GUARD = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "router duplicate forRoot guard" : "ROUTER_FORROOT_GUARD");
var ROUTER_PROVIDERS = [
  Location,
  {
    provide: UrlSerializer,
    useClass: DefaultUrlSerializer
  },
  Router,
  ChildrenOutletContexts,
  {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  },
  RouterConfigLoader,
  // Only used to warn when `provideRoutes` is used without `RouterModule` or `provideRouter`. Can
  // be removed when `provideRoutes` is removed.
  typeof ngDevMode === "undefined" || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : []
];
var _RouterModule = class _RouterModule {
  constructor(guard) {
  }
  /**
   * Creates and configures a module with all the router providers and directives.
   * Optionally sets up an application listener to perform an initial navigation.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```
   * @NgModule({
   *   imports: [RouterModule.forRoot(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the application.
   * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
   * @return The new `NgModule`.
   *
   */
  static forRoot(routes2, config) {
    return {
      ngModule: _RouterModule,
      providers: [ROUTER_PROVIDERS, typeof ngDevMode === "undefined" || ngDevMode ? config?.enableTracing ? withDebugTracing().\u0275providers : [] : [], {
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }, {
        provide: ROUTER_FORROOT_GUARD,
        useFactory: provideForRootGuard,
        deps: [[Router, new Optional(), new SkipSelf()]]
      }, {
        provide: ROUTER_CONFIGURATION,
        useValue: config ? config : {}
      }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).\u0275providers : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().\u0275providers : [], config?.enableViewTransitions ? withViewTransitions().\u0275providers : [], provideRouterInitializer()]
    };
  }
  /**
   * Creates a module with all the router directives and a provider registering routes,
   * without creating a new Router service.
   * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
   *
   * ```
   * @NgModule({
   *   imports: [RouterModule.forChild(ROUTES)]
   * })
   * class MyNgModule {}
   * ```
   *
   * @param routes An array of `Route` objects that define the navigation paths for the submodule.
   * @return The new NgModule.
   *
   */
  static forChild(routes2) {
    return {
      ngModule: _RouterModule,
      providers: [{
        provide: ROUTES,
        multi: true,
        useValue: routes2
      }]
    };
  }
};
_RouterModule.\u0275fac = function RouterModule_Factory(t) {
  return new (t || _RouterModule)(\u0275\u0275inject(ROUTER_FORROOT_GUARD, 8));
};
_RouterModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _RouterModule
});
_RouterModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var RouterModule = _RouterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterModule, [{
    type: NgModule,
    args: [{
      imports: ROUTER_DIRECTIVES,
      exports: ROUTER_DIRECTIVES
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ROUTER_FORROOT_GUARD]
    }]
  }], null);
})();
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = inject(ViewportScroller);
      const zone = inject(NgZone);
      const config = inject(ROUTER_CONFIGURATION);
      const transitions = inject(NavigationTransitions);
      const urlSerializer = inject(UrlSerializer);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(urlSerializer, transitions, viewportScroller, zone, config);
    }
  };
}
function provideHashLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  };
}
function providePathLocationStrategy() {
  return {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  };
}
function provideForRootGuard(router) {
  if ((typeof ngDevMode === "undefined" || ngDevMode) && router) {
    throw new RuntimeError(4007, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return "guarded";
}
function provideInitialNavigation(config) {
  return [config.initialNavigation === "disabled" ? withDisabledInitialNavigation().\u0275providers : [], config.initialNavigation === "enabledBlocking" ? withEnabledBlockingInitialNavigation().\u0275providers : []];
}
var ROUTER_INITIALIZER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "Router Initializer" : "");
function provideRouterInitializer() {
  return [
    // ROUTER_INITIALIZER token should be removed. It's public API but shouldn't be. We can just
    // have `getBootstrapListener` directly attached to APP_BOOTSTRAP_LISTENER.
    {
      provide: ROUTER_INITIALIZER,
      useFactory: getBootstrapListener
    },
    {
      provide: APP_BOOTSTRAP_LISTENER,
      multi: true,
      useExisting: ROUTER_INITIALIZER
    }
  ];
}
var VERSION2 = new Version("17.3.12");

// src/app/app-routing.module.ts
var routes = [];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
var AppRoutingModule = _AppRoutingModule;

// src/app/components/header/header.component.ts
var _HeaderComponent = class _HeaderComponent {
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 0, consts: [[1, "header"], [1, "main-header"], [1, "logo"], ["src", "../../../assets/images/infra.png", "alt", "", 1, "logoImg"], [1, "nav-menu"], ["href", "#about-infra"], ["href", "#targeted-sectors"], ["href", "#objectives"], ["href", "#news"], ["href", "#board-of-directors"], [1, "header-icons"], ["href", "#"], ["src", "../../../assets/images/path894.png", "alt", "Path 894"], ["src", "../../../assets/images/path886.png", "alt", "Path 886"], ["src", "../../../assets/images/youtube.png", "alt", "YouTube"], ["src", "../../../assets/images/linkedin.png", "alt", "LinkedIn"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, "ABOUT INFRA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 6);
    \u0275\u0275text(8, "TARGETED SECTORS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 7);
    \u0275\u0275text(10, "OBJECTIVES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275text(12, "NEWS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 9);
    \u0275\u0275text(14, "BOARD OF DIRECTORS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 10)(16, "a", 11);
    \u0275\u0275element(17, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 11);
    \u0275\u0275element(19, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 11);
    \u0275\u0275element(21, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 11);
    \u0275\u0275element(23, "img", 15);
    \u0275\u0275elementEnd()()();
  }
}, styles: ["\n\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\components\\header\\header.component.ts", lineNumber: 8 });
})();

// src/app/components/about-the-fund/about-the-fund.component.ts
var _AboutTheFundComponent = class _AboutTheFundComponent {
};
_AboutTheFundComponent.\u0275fac = function AboutTheFundComponent_Factory(t) {
  return new (t || _AboutTheFundComponent)();
};
_AboutTheFundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutTheFundComponent, selectors: [["app-about-the-fund"]], decls: 21, vars: 0, consts: [["id", "about-infra", 1, "about-section"], [1, "overlay"], [1, "content"], ["src", "../../../assets/images/infra1.png", "alt", "", 1, "infra1"], [1, "main-title"], [1, "main-text"]], template: function AboutTheFundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementStart(4, "div", 4)(5, "h1");
    \u0275\u0275text(6, "About the Fund");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8, " The National Infrastructure Fund (INFRA) is the Kingdom\u2019s lead developmental financing partner for infrastructure. It facilitates higher levels of private sector investment to accelerate the delivery of infrastructure projects critical to the Kingdom\u2019s ongoing social and economic transformation.");
    \u0275\u0275element(9, "br")(10, "br");
    \u0275\u0275text(11, " INFRA partners with local and global investors to build long term depth in the Kingdom\u2019s infrastructure financing markets. Its specialist expertise supports innovation across all sectors and project types.");
    \u0275\u0275element(12, "br")(13, "br");
    \u0275\u0275text(14, " INFRA operates under a professional investment framework to ensure its financial sustainability over the long term.");
    \u0275\u0275element(15, "br")(16, "br");
    \u0275\u0275text(17, " As a developmental impact investor, it prioritizes projects with positive social and economic outcomes, and it is committed to increasing investment in the Kingdom\u2019s sustainable infrastructure to ensure a green and prosperous future.");
    \u0275\u0275element(18, "br")(19, "br");
    \u0275\u0275text(20, " INFRA is a supervised entity of the National Development Fund. ");
    \u0275\u0275elementEnd()()()();
  }
}, styles: ["\n\n/*# sourceMappingURL=about-the-fund.component.css.map */"] });
var AboutTheFundComponent = _AboutTheFundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutTheFundComponent, { className: "AboutTheFundComponent", filePath: "src\\app\\components\\about-the-fund\\about-the-fund.component.ts", lineNumber: 8 });
})();

// src/app/services/data-service.service.ts
var _DataService = class _DataService {
  constructor() {
    this.data = {
      "sectors": [
        {
          "title": "Energy",
          "span": "",
          "image": "../../../assets/images/English V.5_img6.png"
        },
        {
          "title": "Water",
          "span": "",
          "image": "../../../assets/images/English V.5_img3.png"
        },
        {
          "title": "Transport ",
          "span": "and Logistics Services",
          "image": "../../../assets/images/English V.5_img2.png"
        },
        {
          "title": "Health",
          "span": "",
          "image": "../../../assets/images/English V.5_img4.png"
        },
        {
          "title": "Education",
          "span": "",
          "image": "../../../assets/images/English V.5_img5.png"
        },
        {
          "title": "Communication",
          "span": "Communication & Digital Infrastructure",
          "image": "../../../assets/images/English V.5_img0.png"
        },
        {
          "title": "Municipal Projects",
          "span": "",
          "image": "../../../assets/images/English V.5_img7.png"
        },
        {
          "title": "Energy ",
          "span": "Transition",
          "image": "../../../assets/images/English V.5_img1.png"
        }
      ],
      "objectives": [
        {
          "title": "Broaden",
          "image": "../../../assets/images/English V.5_img13.png"
        },
        {
          "title": "Deepen",
          "image": "../../../assets/images/English V.5_img12.png"
        },
        {
          "title": "Raising",
          "image": "../../../assets/images/English V.5_img11.png"
        },
        {
          "title": "Provide",
          "image": "../../../assets/images/English V.5_img10.png"
        },
        {
          "title": "Accelerate",
          "image": "../../../assets/images/English V.5_img9.png"
        }
      ],
      "news": {
        "newsTitle": "INFRA agrees MoU with Macquarie to boost private sector investment in KSA infrastructure",
        "content": [
          ` Riyadh, 12 February 2024 <br><br>The National Infrastructure Fund (INFRA) today
        announced that it has signed a Memorandum of Understanding (MoU) with
        Macquarie Asset Management(Macquarie) focused on increasing long-term
        institutional and foreign investment in the Kingdom\u2019s high-growth
        infrastructure market.<br><br> INFRA, with its unique local market knowledge, will
        collaborate strategically with Macquarie to identify and progress broad
        sector infrastructure investment opportunities, including those that
        advance the Kingdom\u2019s ambitious energy transition objectives in line with
        the Saudi Green Initiative.<br><br> INFRA will leverage its extensive expertise
        and Macquarie\u2019s global experience as the world\u2019s largest infrastructure
        asset grow long-term private sector participation in the Kingdom\u2019s
        infrastructure market.<br><br> INFRA and Macquarie will also prioritise
        initiatives to promote the participation of women in the infrastructure
        sector and the sharing of Environment, Social and Governance (ESG) best
        practices.<br><br> INFRA was inaugurated by the National Development Fund (NDF)
        and established as a supervised entity of NDF upon the enactment of the
        NIF Law on 6 February 2024.<br><br> INFRA will be chaired by His Excellency Faisal
        F. Alibrahim, Minister of Economy and Planning.<br><br> With the recent enactment
        of the National Infrastructure Fund Law and is eager to see INFRA build on
        its track record and expand its impact through this strategic
        collaboration with Macquarie.<br><br> INFRA\u2019s collaboration with Macquarie and its
        global network of relationships is an important step in growing long-term
        institutional investment across the Kingdom\u2019s infrastructure segment.\u201D<br><br>
        Esmail Alsallom, CEO of INFRA added: \u201COur strategic collaboration with
        Macquarie is a testament to INFRA\u2019s strategic vision.<br><br> It is an exciting
        step in expanding INFRA\u2019s innovative approach to financing and positioning
        as a key partner to global capital providers.<br><br> We are focused on working
        together to drive the evolution of the Kingdom's infrastructure market and
        supporting the energy transition imperative.\u201D<br><br> Ben Way, Group Head of
        Macquarie Asset Management, said: \u201CAs the Kingdom\u2019s economic
        transformation and energy transition gain pace, unlocking private sector
        investment and innovation in local infrastructure will be vital to
        achieving the Kingdom\u2019s Vision 2030 ambitions and beyond.<br><br> We are delighted
        to be partnering with INFRA to contribute to accelerating investments,
        aiming to deliver world-class infrastructure that underpins the Kingdom\u2019s
        dynamic economy and future-looking objectives.\u201D<br><br> Mark Dooley, Global Head
        of Green Investments at Macquarie Asset Management, added: \u201CThe
        opportunity to deepen our relationships with like-minded partners in Saudi
        Arabia represents a key growth opportunity for our business.<br><br> The progress
        achieved in the Kingdom, underpinned by its ambitious and highly capable
        workforce, has been impressive so far.<br><br> It is a very exciting time and we
        are honoured to contribute to the transformative initiatives the Kingdom
        is undertaking.\u201D `
        ]
      },
      "members": [
        {
          "name": "HE Dr. Nabeel Alamudi",
          "title": "Board Member",
          "image": "../../../assets/images/image744.png"
        },
        {
          "name": "HE Abdulaziz Alarif",
          "title": "Board Member",
          "image": "../../../assets/images/image758.png"
        },
        {
          "name": "Dr Stephen Paul Groff",
          "title": "Board Member",
          "image": "../../../assets/images/image773.png"
        },
        {
          "name": "Eng. Esmail Alsallom",
          "title": "Board Member",
          "image": "../../../assets/images/image787.png"
        },
        {
          "name": "Ms. Stephanie Von Friedeburg",
          "title": "Board Member",
          "image": "../../../assets/images/image801.png"
        },
        {
          "name": "Ms. Marie Lam-Frendo",
          "title": "Board Member",
          "image": "../../../assets/images/image815.png"
        }
      ]
    };
  }
  getData() {
    return this.data;
  }
};
_DataService.\u0275fac = function DataService_Factory(t) {
  return new (t || _DataService)();
};
_DataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
var DataService = _DataService;

// src/app/components/targeted-sectors/targeted-sectors.component.ts
function TargetedSectorsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const sector_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("src", sector_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(sector_r1.title);
  }
}
var _TargetedSectorsComponent = class _TargetedSectorsComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
};
_TargetedSectorsComponent.\u0275fac = function TargetedSectorsComponent_Factory(t) {
  return new (t || _TargetedSectorsComponent)(\u0275\u0275directiveInject(DataService));
};
_TargetedSectorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TargetedSectorsComponent, selectors: [["app-targeted-sectors"]], decls: 8, vars: 1, consts: [["id", "sectors", 1, "sectors-section"], [1, "top"], ["src", "../../../assets/images/infra2.png", "alt", "", 1, "infra2"], [1, "sectors-title"], [1, "sectors-images"], ["class", "image-container", 4, "ngFor", "ngForOf"], [1, "image-container"], ["alt", "", 3, "src"], [1, "sector-overlay"], [1, "animated-overlay"]], template: function TargetedSectorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h1");
    \u0275\u0275text(5, "Targeted Sectors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275template(7, TargetedSectorsComponent_div_7_Template, 6, 2, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.data.sectors);
  }
}, dependencies: [NgForOf], styles: ['\n\n.sectors-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  gap: 12rem;\n  background-color: rgb(208, 190, 169);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.sectors-images[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.top[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n.infra2[_ngcontent-%COMP%] {\n  width: 300px;\n  position: absolute;\n  top: 3rem;\n  left: 0;\n}\n.sectors-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5rem;\n  right: 0rem;\n  color: #18372f;\n  width: 360px;\n  font-size: 30px;\n  display: flex;\n  text-align: center;\n  justify-content: flex-start;\n}\n.sectors-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  width: fit-content;\n}\n.sectors-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n  height: 3px;\n  background-color: #18372f;\n}\n.sectors-images[_ngcontent-%COMP%] {\n  display: flex;\n}\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 12.5%;\n  height: 500px;\n  z-index: 10;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 100;\n}\n.sector-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(132, 104, 71, 0.4);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n}\n.animated-overlay[_ngcontent-%COMP%] {\n  background-color: transparent;\n  position: absolute;\n  width: 100%;\n  height: 20%;\n  bottom: 0;\n  left: 0;\n  z-index: 200;\n  color: white;\n  transition: height 0.3s ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  overflow: hidden;\n  text-align: center;\n}\n.animated-overlay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  z-index: 1000;\n}\n.animated-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  margin-bottom: 10px;\n  display: block;\n  align-self: center;\n  z-index: 1000;\n}\n.sector-overlay[_ngcontent-%COMP%]:hover   .animated-overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  align-items: flex-start;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n@media (min-width: 320px) {\n  .sectors-images[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 500px;\n    z-index: 10;\n    width: 50%;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sectors-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 360px !important;\n    font-size: 20px;\n    justify-content: center;\n  }\n  .sectors-title[_ngcontent-%COMP%]:after {\n    width: 63%;\n    bottom: 20px;\n  }\n}\n@media (min-width: 576px) {\n  .sectors-images[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 25%;\n    height: 500px;\n    z-index: 10;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sectors-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 360px !important;\n    font-size: 22px;\n    justify-content: center;\n  }\n  .sectors-title[_ngcontent-%COMP%]::after {\n    width: 70%;\n    bottom: 20px;\n  }\n}\n@media (min-width: 768px) {\n  .sectors-images[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 25%;\n    height: 500px;\n    z-index: 10;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    display: inline;\n    width: 300px;\n    position: absolute;\n    top: 2rem;\n    left: 0;\n  }\n  .sectors-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 360px !important;\n    font-size: 30px;\n    justify-content: flex-start;\n  }\n  .sectors-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    bottom: 30px;\n  }\n}\n@media (min-width: 992px) {\n  .sectors-images[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    row-gap: 0rem;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 12.5%;\n    height: 500px;\n    z-index: 10;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    display: inline;\n    width: 300px;\n    position: absolute;\n    top: 3rem;\n    left: 0;\n  }\n  .sectors-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 350px;\n    font-size: 28px;\n    justify-content: flex-start;\n  }\n  .sectors-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    bottom: 30px;\n  }\n}\n/*# sourceMappingURL=targeted-sectors.component.css.map */'] });
var TargetedSectorsComponent = _TargetedSectorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TargetedSectorsComponent, { className: "TargetedSectorsComponent", filePath: "src\\app\\components\\targeted-sectors\\targeted-sectors.component.ts", lineNumber: 9 });
})();

// src/app/components/news/news.component.ts
var _NewsComponent = class _NewsComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
};
_NewsComponent.\u0275fac = function NewsComponent_Factory(t) {
  return new (t || _NewsComponent)(\u0275\u0275directiveInject(DataService));
};
_NewsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsComponent, selectors: [["app-news"]], decls: 63, vars: 1, consts: [["id", "news", 1, "news-section"], [1, "top"], ["src", "../../../assets/images/infra2.png", "alt", "", 1, "infra2"], [1, "news-title"], [1, "news-content"], [1, "news"], [1, "heading"], [1, "news-container"], ["src", "../../../assets/images/news.png", "alt", "", 1, "news-img"], [1, "bottom-news"]], template: function NewsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h1");
    \u0275\u0275text(5, "News");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "div");
    \u0275\u0275text(12, " Riyadh, 12 February 2024 ");
    \u0275\u0275element(13, "br")(14, "br");
    \u0275\u0275text(15, "The National Infrastructure Fund (INFRA) today announced that it has signed a Memorandum of Understanding (MoU) with Macquarie Asset Management(Macquarie) focused on increasing long-term institutional and foreign investment in the Kingdom\u2019s high-growth infrastructure market.");
    \u0275\u0275element(16, "br")(17, "br");
    \u0275\u0275text(18, " INFRA, with its unique local market knowledge, will collaborate strategically with Macquarie to identify and progress broad sector infrastructure investment opportunities, including those that advance the Kingdom\u2019s ambitious energy transition objectives in line with the Saudi Green Initiative.");
    \u0275\u0275element(19, "br")(20, "br");
    \u0275\u0275text(21, " INFRA will leverage its extensive expertise and Macquarie\u2019s global experience as the world\u2019s largest infrastructure asset grow long-term private sector participation in the Kingdom\u2019s infrastructure market.");
    \u0275\u0275element(22, "br")(23, "br");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(24, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 9);
    \u0275\u0275element(26, "br");
    \u0275\u0275text(27, "INFRA and Macquarie will also prioritise initiatives to promote the participation of women in the infrastructure sector and the sharing of Environment, Social and Governance (ESG) best practices.");
    \u0275\u0275element(28, "br")(29, "br");
    \u0275\u0275text(30, " INFRA was inaugurated by the National Development Fund (NDF) and established as a supervised entity of NDF upon the enactment of the NIF Law on 6 February 2024.");
    \u0275\u0275element(31, "br")(32, "br");
    \u0275\u0275text(33, " INFRA will be chaired by His Excellency Faisal F. Alibrahim, Minister of Economy and Planning.");
    \u0275\u0275element(34, "br")(35, "br");
    \u0275\u0275text(36, " With the recent enactment of the National Infrastructure Fund Law and is eager to see INFRA build on its track record and expand its impact through this strategic collaboration with Macquarie.");
    \u0275\u0275element(37, "br");
    \u0275\u0275text(38, " INFRA\u2019s collaboration with Macquarie and its global network of relationships is an important step in growing long-term institutional investment across the Kingdom\u2019s infrastructure segment.\u201D");
    \u0275\u0275element(39, "br")(40, "br");
    \u0275\u0275text(41, " Esmail Alsallom, CEO of INFRA added: \u201COur strategic collaboration with Macquarie is a testament to INFRA\u2019s strategic vision.");
    \u0275\u0275element(42, "br")(43, "br");
    \u0275\u0275text(44, " It is an exciting step in expanding INFRA\u2019s innovative approach to financing and positioning as a key partner to global capital providers.");
    \u0275\u0275element(45, "br")(46, "br");
    \u0275\u0275text(47, " We are focused on working together to drive the evolution of the Kingdom's infrastructure market and supporting the energy transition imperative.\u201D");
    \u0275\u0275element(48, "br")(49, "br");
    \u0275\u0275text(50, " Ben Way, Group Head of Macquarie Asset Management, said: \u201CAs the Kingdom\u2019s economic transformation and energy transition gain pace, unlocking private sector investment and innovation in local infrastructure will be vital to achieving the Kingdom\u2019s Vision 2030 ambitions and beyond.");
    \u0275\u0275element(51, "br")(52, "br");
    \u0275\u0275text(53, " We are delighted to be partnering with INFRA to contribute to accelerating investments, aiming to deliver world-class infrastructure that underpins the Kingdom\u2019s dynamic economy and future-looking objectives.\u201D");
    \u0275\u0275element(54, "br")(55, "br");
    \u0275\u0275text(56, " Mark Dooley, Global Head of Green Investments at Macquarie Asset Management, added: \u201CThe opportunity to deepen our relationships with like-minded partners in Saudi Arabia represents a key growth opportunity for our business.");
    \u0275\u0275element(57, "br")(58, "br");
    \u0275\u0275text(59, " The progress achieved in the Kingdom, underpinned by its ambitious and highly capable workforce, has been impressive so far.");
    \u0275\u0275element(60, "br")(61, "br");
    \u0275\u0275text(62, " It is a very exciting time and we are honoured to contribute to the transformative initiatives the Kingdom is undertaking.\u201D ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx.data.news.newsTitle, " ");
  }
}, styles: ['\n\n.news-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  flex-direction: column;\n  background-color: #bfded9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 3rem;\n}\n.top[_ngcontent-%COMP%] {\n  margin: 6rem;\n}\n.infra2[_ngcontent-%COMP%] {\n  width: 300px;\n  position: absolute;\n  top: 3rem;\n  left: 0;\n}\n.news-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4rem;\n  right: 0rem;\n  color: #18372f;\n  width: 300px !important;\n  font-size: 30px;\n  display: flex;\n  text-align: center;\n  justify-content: flex-start;\n  margin-bottom: 3rem;\n}\n.news-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  width: fit-content;\n}\n.news-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n  height: 3px;\n  background-color: #18372f;\n}\n.news-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  row-gap: 2rem;\n  color: #18372f;\n  margin-top: 3rem;\n}\n.news[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: justify;\n  font-weight: 600;\n  padding-left: 1rem;\n}\n.news-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.bottom-news[_ngcontent-%COMP%] {\n  width: 98%;\n  text-align: justify;\n  font-weight: 600;\n  color: #18372f;\n}\n.heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 22px;\n  margin-bottom: 2rem;\n}\n.news-img[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n@media (min-width: 320px) {\n  .news-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    column-gap: 2rem;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    width: 200px;\n    top: 2rem;\n    margin-bottom: 5rem;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    top: 3rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 300px !important;\n    font-size: 23px;\n    justify-content: center;\n    margin-bottom: 6rem;\n  }\n  .news-title[_ngcontent-%COMP%]::after {\n    width: 30%;\n  }\n  .news[_ngcontent-%COMP%] {\n    order: 2;\n    width: 90%;\n    padding-left: 0rem;\n  }\n  .bottom-news[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .heading[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 2rem;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    order: 1;\n    width: 90%;\n  }\n}\n@media (min-width: 576px) {\n  .news-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    column-gap: 2rem;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    width: 250px;\n    top: 2rem;\n    margin-bottom: 5rem;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 4rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 300px !important;\n    font-size: 25px;\n    justify-content: center;\n  }\n  .news-title[_ngcontent-%COMP%]::after {\n    width: 32%;\n  }\n  .news[_ngcontent-%COMP%] {\n    order: 2;\n    width: 90%;\n    padding-left: 0rem;\n  }\n  .bottom-news[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .heading[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 2rem;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    order: 1;\n    width: 90%;\n  }\n}\n@media (min-width: 768px) {\n  .news-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2rem;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    width: 300px;\n    top: 2rem;\n    margin-bottom: 5rem;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    top: 3rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 300px !important;\n    font-size: 30px;\n    justify-content: flex-start;\n    margin-bottom: 3rem;\n  }\n  .news-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n  }\n  .news[_ngcontent-%COMP%] {\n    order: 1;\n    width: 90%;\n    padding-left: 1rem;\n  }\n  .bottom-news[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .heading[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 2rem;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    order: 2;\n    width: 40%;\n  }\n}\n@media (min-width: 992px) {\n  .news-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2rem;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    width: 300px;\n    top: 3rem;\n    margin-bottom: 2rem;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 300px !important;\n    font-size: 30px;\n    justify-content: flex-start;\n    margin-bottom: 3rem;\n  }\n  .news-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n  }\n  .news[_ngcontent-%COMP%] {\n    order: 1;\n    width: 50%;\n    padding-left: 1rem;\n  }\n  .bottom-news[_ngcontent-%COMP%] {\n    width: 98%;\n  }\n  .heading[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 2rem;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    order: 2;\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=news.component.css.map */'] });
var NewsComponent = _NewsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsComponent, { className: "NewsComponent", filePath: "src\\app\\components\\news\\news.component.ts", lineNumber: 9 });
})();

// node_modules/ngx-owl-carousel-o/fesm2022/ngx-owl-carousel-o.mjs
var _c0 = (a0, a1, a2, a3, a4) => ({
  "width": a0,
  "transform": a1,
  "transition": a2,
  "padding-left": a3,
  "padding-right": a4
});
var _c1 = (a0, a1, a2, a3) => ({
  "width": a0,
  "margin-left": a1,
  "margin-right": a2,
  "left": a3
});
var _c2 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function StageComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const slide_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", slide_r2.tplRef)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r2.preparePublicSlide(slide_r2), i_r5));
  }
}
function StageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
      const slide_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clear(slide_r2.id));
    });
    \u0275\u0275template(2, StageComponent_ng_container_2_2_Template, 1, 5, null, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", slide_r2.classes)("ngStyle", \u0275\u0275pureFunction4(4, _c1, slide_r2.width + "px", slide_r2.marginL ? slide_r2.marginL + "px" : "", slide_r2.marginR ? slide_r2.marginR + "px" : "", slide_r2.left))("@autoHeight", slide_r2.heightState);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slide_r2.load);
  }
}
var _c3 = (a0, a1, a2, a3, a4) => ({
  "owl-rtl": a0,
  "owl-loaded": a1,
  "owl-responsive": a2,
  "owl-drag": a3,
  "owl-grab": a4
});
var _c4 = (a0, a1) => ({
  "isMouseDragable": a0,
  "isTouchDragable": a1
});
var _c5 = (a0) => ({
  "disabled": a0
});
var _c6 = (a0, a1) => ({
  "active": a0,
  "owl-dot-text": a1
});
function CarouselComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "owl-stage", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("owlDraggable", \u0275\u0275pureFunction2(3, _c4, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
  }
}
function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
      const dot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveByDot(dot_r5.id));
    });
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dot_r5 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c6, dot_r5.active, dot_r5.showInnerContent));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", dot_r5.innerContent, \u0275\u0275sanitizeHtml);
  }
}
function CarouselComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275template(5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.prev == null ? null : ctx_r1.navData.prev.disabled))("innerHTML", ctx_r1.navData == null ? null : ctx_r1.navData.prev == null ? null : ctx_r1.navData.prev.htmlText, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.next == null ? null : ctx_r1.navData.next.disabled))("innerHTML", ctx_r1.navData == null ? null : ctx_r1.navData.next == null ? null : ctx_r1.navData.next.htmlText, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c5, ctx_r1.dotsData == null ? null : ctx_r1.dotsData.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dotsData == null ? null : ctx_r1.dotsData.dots);
  }
}
var OwlCarouselOConfig = class {
  items = 3;
  skip_validateItems = false;
  loop = false;
  center = false;
  rewind = false;
  mouseDrag = true;
  touchDrag = true;
  pullDrag = true;
  freeDrag = false;
  margin = 0;
  stagePadding = 0;
  merge = false;
  mergeFit = true;
  autoWidth = false;
  startPosition = 0;
  rtl = false;
  smartSpeed = 250;
  fluidSpeed = false;
  dragEndSpeed = false;
  responsive = {};
  responsiveRefreshRate = 200;
  // defaults to Navigation
  nav = false;
  navText = ["prev", "next"];
  navSpeed = false;
  slideBy = 1;
  // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  dots = true;
  dotsEach = false;
  dotsData = false;
  dotsSpeed = false;
  // defaults to Autoplay
  autoplay = false;
  autoplayTimeout = 5e3;
  autoplayHoverPause = false;
  autoplaySpeed = false;
  autoplayMouseleaveTimeout = 1;
  // defaults to LazyLoading
  lazyLoad = false;
  lazyLoadEager = 0;
  // defaults to Animate
  slideTransition = "";
  animateOut = false;
  animateIn = false;
  // defaults to AutoHeight
  autoHeight = false;
  // defaults to Hash
  URLhashListener = false;
  constructor() {
  }
};
var OwlOptionsMockedTypes = class {
  items = "number";
  skip_validateItems = "boolean";
  loop = "boolean";
  center = "boolean";
  rewind = "boolean";
  mouseDrag = "boolean";
  touchDrag = "boolean";
  pullDrag = "boolean";
  freeDrag = "boolean";
  margin = "number";
  stagePadding = "number";
  merge = "boolean";
  mergeFit = "boolean";
  autoWidth = "boolean";
  startPosition = "number|string";
  rtl = "boolean";
  smartSpeed = "number";
  fluidSpeed = "boolean";
  dragEndSpeed = "number|boolean";
  responsive = {};
  responsiveRefreshRate = "number";
  // defaults to Navigation
  nav = "boolean";
  navText = "string[]";
  navSpeed = "number|boolean";
  slideBy = "number|string";
  // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  dots = "boolean";
  dotsEach = "number|boolean";
  dotsData = "boolean";
  dotsSpeed = "number|boolean";
  // defaults to Autoplay
  autoplay = "boolean";
  autoplayTimeout = "number";
  autoplayHoverPause = "boolean";
  autoplaySpeed = "number|boolean";
  autoplayMouseleaveTimeout = "number";
  // defaults to LazyLoading
  lazyLoad = "boolean";
  lazyLoadEager = "number";
  // defaults to Animate
  slideTransition = "string";
  animateOut = "string|boolean";
  animateIn = "string|boolean";
  // defaults to AutoHeight
  autoHeight = "boolean";
  // defaults to Hash
  URLhashListener = "boolean";
  constructor() {
  }
};
var OwlLogger = class _OwlLogger {
  errorHandler;
  constructor(errorHandler2) {
    this.errorHandler = errorHandler2;
  }
  log(value, ...rest) {
    if (isDevMode()) {
      console.log(value, ...rest);
    }
  }
  error(error) {
    this.errorHandler.handleError(error);
  }
  warn(value, ...rest) {
    console.warn(value, ...rest);
  }
  static \u0275fac = function OwlLogger_Factory(t) {
    return new (t || _OwlLogger)(\u0275\u0275inject(ErrorHandler));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OwlLogger,
    factory: _OwlLogger.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlLogger, [{
    type: Injectable
  }], () => [{
    type: ErrorHandler
  }], null);
})();
var Type;
(function(Type2) {
  Type2["Event"] = "event";
  Type2["State"] = "state";
})(Type || (Type = {}));
var Width;
(function(Width2) {
  Width2["Default"] = "default";
  Width2["Inner"] = "inner";
  Width2["Outer"] = "outer";
})(Width || (Width = {}));
var CarouselService = class _CarouselService {
  logger;
  /**
   * Subject for passing data needed for managing View
   */
  _viewSettingsShipper$ = new Subject();
  /**
   * Subject for notification when the carousel got initializes
   */
  _initializedCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's settings start changinf
   */
  _changeSettingsCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's settings have changed
   */
  _changedSettingsCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel starts translating or moving
   */
  _translateCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel stopped translating or moving
   */
  _translatedCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
   */
  _resizeCarousel$ = new Subject();
  /**
   * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
   */
  _resizedCarousel$ = new Subject();
  /**
   * Subject for notification when the refresh of carousel starts
   */
  _refreshCarousel$ = new Subject();
  /**
   * Subject for notification when the refresh of carousel is ended
   */
  _refreshedCarousel$ = new Subject();
  /**
   * Subject for notification when the dragging of carousel starts
   */
  _dragCarousel$ = new Subject();
  /**
   * Subject for notification when the dragging of carousel is ended
   */
  _draggedCarousel$ = new Subject();
  /**
   * Current settings for the carousel.
   */
  settings = {
    items: 0
  };
  /**
   * Initial data for setting classes to element .owl-carousel
   */
  owlDOMData = {
    rtl: false,
    isResponsive: false,
    isRefreshed: false,
    isLoaded: false,
    isLoading: false,
    isMouseDragable: false,
    isGrab: false,
    isTouchDragable: false
  };
  /**
   * Initial data of .owl-stage
   */
  stageData = {
    transform: "translate3d(0px,0px,0px)",
    transition: "0s",
    width: 0,
    paddingL: 0,
    paddingR: 0
  };
  /**
   *  Data of every slide
   */
  slidesData;
  /**
   * Data of navigation block
   */
  navData;
  /**
   * Data of dots block
   */
  dotsData;
  /**
   * Carousel width
   */
  _width;
  /**
   * All real items.
   */
  _items = [];
  // is equal to this.slides
  /**
   * Array with width of every slide.
   */
  _widths = [];
  /**
   * Currently suppressed events to prevent them from beeing retriggered.
   */
  _supress = {};
  /**
   * References to the running plugins of this carousel.
   */
  _plugins = {};
  /**
   * Absolute current position.
   */
  _current = null;
  /**
   * All cloned items.
   */
  _clones = [];
  /**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   */
  _mergers = [];
  /**
   * Animation speed in milliseconds.
   */
  _speed = null;
  /**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   */
  _coordinates = [];
  /**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   */
  _breakpoint = null;
  /**
   * Prefix for id of cloned slides
   */
  clonedIdPrefix = "cloned-";
  /**
   * Current options set by the caller including defaults.
   */
  _options = {};
  /**
   * Invalidated parts within the update process.
   */
  _invalidated = {};
  // Is needed for tests
  get invalidated() {
    return this._invalidated;
  }
  /**
   * Current state information and their tags.
   */
  _states = {
    current: {},
    tags: {
      initializing: ["busy"],
      animating: ["busy"],
      dragging: ["interacting"]
    }
  };
  // is needed for tests
  get states() {
    return this._states;
  }
  /**
       * Ordered list of workers for the update process.
   */
  _pipe = [
    // {
    //   filter: ['width', 'settings'],
    //   run: () => {
    //     this._width = this.carouselWindowWidth;
    //   }
    // },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        cache.current = this._items && this._items[this.relative(this._current)]?.id;
      }
    },
    // {
    //   filter: ['items', 'settings'],
    //   run: function() {
    //     // this.$stage.children('.cloned').remove();
    //   }
    // },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        const margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
          "margin-left": rtl ? margin : "",
          "margin-right": rtl ? "" : margin
        };
        if (!grid) {
          this.slidesData.forEach((slide) => {
            slide.marginL = css["margin-left"];
            slide.marginR = css["margin-right"];
          });
        }
        cache.css = css;
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        const width = +(this.width() / this.settings.items).toFixed(3) - this.settings.margin, grid = !this.settings.autoWidth, widths = [];
        let merge2 = null, iterator = this._items.length;
        cache.items = {
          merge: false,
          width
        };
        while (iterator-- > 0) {
          merge2 = this._mergers[iterator];
          merge2 = this.settings.mergeFit && Math.min(merge2, this.settings.items) || merge2;
          cache.items.merge = merge2 > 1 || cache.items.merge;
          widths[iterator] = !grid ? this._items[iterator].width ? this._items[iterator].width : width : width * merge2;
        }
        this._widths = widths;
        this.slidesData.forEach((slide, i) => {
          slide.width = this._widths[i];
          slide.marginR = cache.css["margin-right"];
          slide.marginL = cache.css["margin-left"];
        });
      }
    },
    {
      filter: ["items", "settings"],
      run: () => {
        const clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2;
        let append = [], prepend = [], repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
        repeat /= 2;
        while (repeat-- > 0) {
          clones.push(this.normalize(clones.length / 2, true));
          append.push(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
          clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
          prepend.unshift(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
        }
        this._clones = clones;
        append = append.map((slide) => {
          slide.id = `${this.clonedIdPrefix}${slide.id}`;
          slide.isActive = false;
          slide.isCloned = true;
          return slide;
        });
        prepend = prepend.map((slide) => {
          slide.id = `${this.clonedIdPrefix}${slide.id}`;
          slide.isActive = false;
          slide.isCloned = true;
          return slide;
        });
        this.slidesData = prepend.concat(this.slidesData).concat(append);
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: () => {
        const rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, coordinates = [];
        let iterator = -1, previous = 0, current = 0;
        while (++iterator < size) {
          previous = coordinates[iterator - 1] || 0;
          current = this._widths[this.relative(iterator)] + this.settings.margin;
          coordinates.push(previous + current * rtl);
        }
        this._coordinates = coordinates;
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: () => {
        const padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
          "width": Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
          "padding-left": padding || "",
          "padding-right": padding || ""
        };
        this.stageData.width = css.width;
        this.stageData.paddingL = css["padding-left"];
        this.stageData.paddingR = css["padding-right"];
      }
    },
    {
      //   filter: [ 'width', 'items', 'settings' ],
      //   run: cache => {
      // 		// this method sets the width for every slide, but I set it in different way earlier
      // 		const grid = !this.settings.autoWidth,
      // 		items = this.$stage.children(); // use this.slidesData
      //     let iterator = this._coordinates.length;
      //     if (grid && cache.items.merge) {
      //       while (iterator--) {
      //         cache.css.width = this._widths[this.relative(iterator)];
      //         items.eq(iterator).css(cache.css);
      //       }
      //     } else if (grid) {
      //       cache.css.width = cache.items.width;
      //       items.css(cache.css);
      //     }
      //   }
      // }, {
      //   filter: [ 'items' ],
      //   run: function() {
      //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
      //   }
      // }, {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        let current = cache.current ? this.slidesData.findIndex((slide) => slide.id === cache.current) : 0;
        current = Math.max(this.minimum(), Math.min(this.maximum(), current));
        this.reset(current);
      }
    },
    {
      filter: ["position"],
      run: () => {
        this.animate(this.coordinates(this._current));
      }
    },
    {
      filter: ["width", "position", "items", "settings"],
      run: () => {
        const rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, matches = [];
        let begin, end, inner, outer, i, n;
        begin = this.coordinates(this.current());
        if (typeof begin === "number") {
          begin += padding;
        } else {
          begin = 0;
        }
        end = begin + this.width() * rtl;
        if (rtl === -1 && this.settings.center) {
          const result = this._coordinates.filter((element) => {
            return this.settings.items % 2 === 1 ? element >= begin : element > begin;
          });
          begin = result.length ? result[result.length - 1] : begin;
        }
        for (i = 0, n = this._coordinates.length; i < n; i++) {
          inner = Math.ceil(this._coordinates[i - 1] || 0);
          outer = Math.ceil(Math.abs(this._coordinates[i]) + padding * rtl);
          if (this._op(inner, "<=", begin) && this._op(inner, ">", end) || this._op(outer, "<", begin) && this._op(outer, ">", end)) {
            matches.push(i);
          }
        }
        this.slidesData.forEach((slide) => {
          slide.isActive = false;
          return slide;
        });
        matches.forEach((item) => {
          this.slidesData[item].isActive = true;
        });
        if (this.settings.center) {
          this.slidesData.forEach((slide) => {
            slide.isCentered = false;
            return slide;
          });
          this.slidesData[this.current()].isCentered = true;
        }
      }
    }
  ];
  constructor(logger) {
    this.logger = logger;
  }
  /**
   * Makes _viewSettingsShipper$ Subject become Observable
   * @returns Observable of _viewSettingsShipper$ Subject
   */
  getViewCurSettings() {
    return this._viewSettingsShipper$.asObservable();
  }
  /**
   * Makes _initializedCarousel$ Subject become Observable
   * @returns Observable of _initializedCarousel$ Subject
   */
  getInitializedState() {
    return this._initializedCarousel$.asObservable();
  }
  /**
   * Makes _changeSettingsCarousel$ Subject become Observable
   * @returns Observable of _changeSettingsCarousel$ Subject
   */
  getChangeState() {
    return this._changeSettingsCarousel$.asObservable();
  }
  /**
   * Makes _changedSettingsCarousel$ Subject become Observable
   * @returns Observable of _changedSettingsCarousel$ Subject
   */
  getChangedState() {
    return this._changedSettingsCarousel$.asObservable();
  }
  /**
   * Makes _translateCarousel$ Subject become Observable
   * @returns Observable of _translateCarousel$ Subject
   */
  getTranslateState() {
    return this._translateCarousel$.asObservable();
  }
  /**
   * Makes _translatedCarousel$ Subject become Observable
   * @returns Observable of _translatedCarousel$ Subject
   */
  getTranslatedState() {
    return this._translatedCarousel$.asObservable();
  }
  /**
   * Makes _resizeCarousel$ Subject become Observable
   * @returns Observable of _resizeCarousel$ Subject
   */
  getResizeState() {
    return this._resizeCarousel$.asObservable();
  }
  /**
   * Makes _resizedCarousel$ Subject become Observable
   * @returns Observable of _resizedCarousel$ Subject
   */
  getResizedState() {
    return this._resizedCarousel$.asObservable();
  }
  /**
   * Makes _refreshCarousel$ Subject become Observable
   * @returns Observable of _refreshCarousel$ Subject
   */
  getRefreshState() {
    return this._refreshCarousel$.asObservable();
  }
  /**
   * Makes _refreshedCarousel$ Subject become Observable
   * @returns Observable of _refreshedCarousel$ Subject
   */
  getRefreshedState() {
    return this._refreshedCarousel$.asObservable();
  }
  /**
   * Makes _dragCarousel$ Subject become Observable
   * @returns Observable of _dragCarousel$ Subject
   */
  getDragState() {
    return this._dragCarousel$.asObservable();
  }
  /**
   * Makes _draggedCarousel$ Subject become Observable
   * @returns Observable of _draggedCarousel$ Subject
   */
  getDraggedState() {
    return this._draggedCarousel$.asObservable();
  }
  /**
   * Setups custom options expanding default options
   * @param options custom options
   */
  setOptions(options) {
    const configOptions = new OwlCarouselOConfig();
    const checkedOptions = this._validateOptions(options, configOptions);
    this._options = __spreadValues(__spreadValues({}, configOptions), checkedOptions);
  }
  /**
   * Checks whether user's option are set properly. Cheking is based on typings;
   * @param options options set by user
   * @param configOptions default options
   * @returns checked and modified (if it's needed) user's options
   *
   * Notes:
   * 	- if user set option with wrong type, it'll be written in console
   */
  _validateOptions(options, configOptions) {
    const checkedOptions = __spreadValues({}, options);
    const mockedTypes = new OwlOptionsMockedTypes();
    const setRightOption = (type, key) => {
      this.logger.log(`options.${key} must be type of ${type}; ${key}=${options[key]} skipped to defaults: ${key}=${configOptions[key]}`);
      return configOptions[key];
    };
    for (const key in checkedOptions) {
      if (checkedOptions.hasOwnProperty(key)) {
        if (mockedTypes[key] === "number") {
          if (this._isNumeric(checkedOptions[key])) {
            checkedOptions[key] = +checkedOptions[key];
            checkedOptions[key] = key === "items" ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        } else if (mockedTypes[key] === "boolean" && typeof checkedOptions[key] !== "boolean") {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|boolean" && !this._isNumberOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|string" && !this._isNumberOrString(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string|boolean" && !this._isStringOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string[]") {
          if (Array.isArray(checkedOptions[key])) {
            let isString = false;
            checkedOptions[key].forEach((element) => {
              isString = typeof element === "string" ? true : false;
            });
            if (!isString) {
              checkedOptions[key] = setRightOption(mockedTypes[key], key);
            }
            ;
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        }
      }
    }
    return checkedOptions;
  }
  /**
   * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
   * @param items option items set by user
   * @param skip_validateItems option `skip_validateItems` set by user
   * @returns right number of items
   */
  _validateItems(items, skip_validateItems) {
    let result = items;
    if (items > this._items.length) {
      if (skip_validateItems) {
        this.logger.log("The option 'items' in your options is bigger than the number of slides. The navigation got disabled");
      } else {
        result = this._items.length;
        this.logger.log("The option 'items' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled");
      }
    } else {
      if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
        this.logger.log("Option 'items' in your options is equal to the number of slides. So the navigation got disabled");
      }
    }
    return result;
  }
  /**
   * Set current width of carousel
   * @param width width of carousel Window
   */
  setCarouselWidth(width) {
    this._width = width;
  }
  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @param carouselWidth width of carousel
   * @param slides array of slides
   * @param options options set by user
   */
  setup(carouselWidth, slides, options) {
    this.setCarouselWidth(carouselWidth);
    this.setItems(slides);
    this._defineSlidesData();
    this.setOptions(options);
    this.settings = __spreadValues({}, this._options);
    this.setOptionsForViewport();
    this._trigger("change", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
    this.invalidate("settings");
    this._trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }
  /**
   * Set options for current viewport
   */
  setOptionsForViewport() {
    const viewport = this._width, overwrites = this._options.responsive;
    let match2 = -1;
    if (!Object.keys(overwrites).length) {
      return;
    }
    if (!viewport) {
      this.settings.items = 1;
      return;
    }
    for (const key in overwrites) {
      if (overwrites.hasOwnProperty(key)) {
        if (+key <= viewport && +key > match2) {
          match2 = Number(key);
        }
      }
    }
    this.settings = __spreadProps(__spreadValues(__spreadValues({}, this._options), overwrites[match2]), {
      items: overwrites[match2] && overwrites[match2].items ? this._validateItems(overwrites[match2].items, this._options.skip_validateItems) : this._options.items
    });
    delete this.settings.responsive;
    this.owlDOMData.isResponsive = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    const mergers = [];
    this._items.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge : 1;
      mergers.push(mergeN);
    });
    this._mergers = mergers;
    this._breakpoint = match2;
    this.invalidate("settings");
  }
  /**
   * Initializes the carousel.
   * @param slides array of CarouselSlideDirective
   */
  initialize(slides) {
    this.enter("initializing");
    this.owlDOMData.rtl = this.settings.rtl;
    if (this._mergers.length) {
      this._mergers = [];
    }
    slides.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge : 1;
      this._mergers.push(mergeN);
    });
    this._clones = [];
    this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
    this.invalidate("items");
    this.refresh();
    this.owlDOMData.isLoaded = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    this.sendChanges();
    this.leave("initializing");
    this._trigger("initialized");
  }
  /**
   * Sends all data needed for View
   */
  sendChanges() {
    this._viewSettingsShipper$.next({
      owlDOMData: this.owlDOMData,
      stageData: this.stageData,
      slidesData: this.slidesData,
      navData: this.navData,
      dotsData: this.dotsData
    });
  }
  /**
   * Updates option logic if necessery
   */
  _optionsLogic() {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = 0;
      this.settings.merge = false;
    }
  }
  /**
   * Updates the view
   */
  update() {
    let i = 0;
    const n = this._pipe.length, filter2 = (item) => this._invalidated[item], cache = {};
    while (i < n) {
      const filteredPipe = this._pipe[i].filter.filter(filter2);
      if (this._invalidated.all || filteredPipe.length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }
    this.slidesData.forEach((slide) => slide.classes = this.setCurSlideClasses(slide));
    this.sendChanges();
    this._invalidated = {};
    if (!this.is("valid")) {
      this.enter("valid");
    }
  }
  /**
   * Gets the width of the view.
   * @param [dimension=Width.Default] The dimension to return
   * @returns The width of the view in pixel.
   */
  width(dimension) {
    dimension = dimension || Width.Default;
    switch (dimension) {
      case Width.Inner:
      case Width.Outer:
        return this._width;
      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  }
  /**
   * Refreshes the carousel primarily for adaptive purposes.
   */
  refresh() {
    this.enter("refreshing");
    this._trigger("refresh");
    this._defineSlidesData();
    this.setOptionsForViewport();
    this._optionsLogic();
    this.update();
    this.leave("refreshing");
    this._trigger("refreshed");
  }
  /**
   * Checks window `resize` event.
   * @param curWidth width of .owl-carousel
   */
  onResize(curWidth) {
    if (!this._items.length) {
      return false;
    }
    this.setCarouselWidth(curWidth);
    this.enter("resizing");
    this._trigger("resize");
    this.invalidate("width");
    this.refresh();
    this.leave("resizing");
    this._trigger("resized");
  }
  /**
   * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @param event - The event arguments.
   * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
   */
  prepareDragging(event) {
    let stage = null, transformArr;
    transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, "").split(",");
    stage = {
      x: +transformArr[0],
      y: +transformArr[1]
    };
    if (this.is("animating")) {
      this.invalidate("position");
    }
    if (event.type === "mousedown") {
      this.owlDOMData.isGrab = true;
    }
    this.speed(0);
    return stage;
  }
  /**
   * Enters into a 'dragging' state
   */
  enterDragging() {
    this.enter("dragging");
    this._trigger("drag");
  }
  /**
   * Defines new coords for .owl-stage while dragging it
   * @todo #261
   * @param event the event arguments.
   * @param dragData initial data got after starting dragging
   * @returns coords or false
   */
  defineNewCoordsDrag(event, dragData) {
    let minimum = null, maximum = null, pull = null;
    const delta = this.difference(dragData.pointer, this.pointer(event)), stage = this.difference(dragData.stage.start, delta);
    if (!this.is("dragging")) {
      return false;
    }
    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = +this.coordinates(this.maximum() + 1) - minimum;
      stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }
    return stage;
  }
  /**
   * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
   * @todo #261
   * @todo Threshold for click event
   * @param event the event arguments.
   * @param dragObj the object with dragging settings and states
   * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
   */
  finishDragging(event, dragObj, clickAttacher) {
    const directions = ["right", "left"], delta = this.difference(dragObj.pointer, this.pointer(event)), stage = dragObj.stage.current, direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
    let currentSlideI, current, newCurrent;
    if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
      this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
      currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
      current = this.current();
      newCurrent = this.current(currentSlideI === -1 ? void 0 : currentSlideI);
      if (current !== newCurrent) {
        this.invalidate("position");
        this.update();
      }
      dragObj.direction = direction;
      if (Math.abs(delta.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - dragObj.time > 300) {
        clickAttacher();
      }
    }
    if (!this.is("dragging")) {
      return;
    }
    this.leave("dragging");
    this._trigger("dragged");
  }
  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @param coordinate The coordinate in pixel.
   * @param direction The direction to check for the closest item. Ether `left` or `right`.
   * @returns The absolute position of the closest item.
   */
  closest(coordinate, direction) {
    const pull = 30, width = this.width();
    let coordinates = this.coordinates(), position = -1;
    if (this.settings.center) {
      coordinates = coordinates.map((item) => {
        if (item === 0) {
          item += 1e-6;
        }
        return item;
      });
    }
    for (let i = 0; i < coordinates.length; i++) {
      if (direction === "left" && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      } else if (direction === "right" && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
        position = i + 1;
      } else if (this._op(coordinate, "<", coordinates[i]) && this._op(coordinate, ">", coordinates[i + 1] || coordinates[i] - width)) {
        position = direction === "left" ? i + 1 : i;
      } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      }
      if (position !== -1) {
        break;
      }
      ;
    }
    if (!this.settings.loop) {
      if (this._op(coordinate, ">", coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this._op(coordinate, "<", coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }
    return position;
  }
  /**
   * Animates the stage.
   * @todo #270
   * @param coordinate The coordinate in pixels.
   */
  animate(coordinate) {
    const animate2 = this.speed() > 0;
    if (this.is("animating")) {
      this.onTransitionEnd();
    }
    if (animate2) {
      this.enter("animating");
      this._trigger("translate");
    }
    this.stageData.transform = "translate3d(" + coordinate + "px,0px,0px)";
    this.stageData.transition = this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "");
  }
  /**
   * Checks whether the carousel is in a specific state or not.
   * @param state The state to check.
   * @returns The flag which indicates if the carousel is busy.
   */
  is(state2) {
    return this._states.current[state2] && this._states.current[state2] > 0;
  }
  /**
   * Sets the absolute position of the current item.
   * @param position The new absolute position or nothing to leave it unchanged.
   * @returns The absolute position of the current item.
   */
  current(position) {
    if (position === void 0) {
      return this._current;
    }
    if (this._items.length === 0) {
      return void 0;
    }
    position = this.normalize(position);
    if (this._current !== position) {
      const event = this._trigger("change", {
        property: {
          name: "position",
          value: position
        }
      });
      this._current = position;
      this.invalidate("position");
      this._trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }
    return this._current;
  }
  /**
   * Invalidates the given part of the update routine.
   * @param part The part to invalidate.
   * @returns The invalidated parts.
   */
  invalidate(part) {
    if (typeof part === "string") {
      this._invalidated[part] = true;
      if (this.is("valid")) {
        this.leave("valid");
      }
    }
    return Object.keys(this._invalidated);
  }
  /**
   * Resets the absolute position of the current item.
   * @param position the absolute position of the new item.
   */
  reset(position) {
    position = this.normalize(position);
    if (position === void 0) {
      return;
    }
    this._speed = 0;
    this._current = position;
    this._suppress(["translate", "translated"]);
    this.animate(this.coordinates(position));
    this._release(["translate", "translated"]);
  }
  /**
   * Normalizes an absolute or a relative position of an item.
   * @param position The absolute or relative position to normalize.
   * @param relative Whether the given position is relative or not.
   * @returns The normalized position.
   */
  normalize(position, relative) {
    const n = this._items.length, m = relative ? 0 : this._clones.length;
    if (!this._isNumeric(position) || n < 1) {
      position = void 0;
    } else if (position < 0 || position >= n + m) {
      position = ((position - m / 2) % n + n) % n + m / 2;
    }
    return position;
  }
  /**
   * Converts an absolute position of an item into a relative one.
   * @param position The absolute position to convert.
   * @returns The converted position.
   */
  relative(position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  }
  /**
   * Gets the maximum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of maximum position
   */
  maximum(relative = false) {
    const settings = this.settings;
    let maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      reciprocalItemsWidth = this.slidesData[--iterator].width;
      elementWidth = this._width;
      while (iterator-- > 0) {
        reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;
        if (reciprocalItemsWidth > elementWidth) {
          break;
        }
      }
      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }
    if (relative) {
      maximum -= this._clones.length / 2;
    }
    return Math.max(maximum, 0);
  }
  /**
   * Gets the minimum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of minimum position
   */
  minimum(relative = false) {
    return relative ? 0 : this._clones.length / 2;
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  items(position) {
    if (position === void 0) {
      return this._items.slice();
    }
    position = this.normalize(position, true);
    return [this._items[position]];
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  mergers(position) {
    if (position === void 0) {
      return this._mergers.slice();
    }
    position = this.normalize(position, true);
    return this._mergers[position];
  }
  /**
   * Gets the absolute positions of clones for an item.
   * @param position The relative position of the item.
   * @returns The absolute positions of clones for the item or all if no position was given.
   */
  clones(position) {
    const odd = this._clones.length / 2, even = odd + this._items.length, map2 = (index) => index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
    if (position === void 0) {
      return this._clones.map((v, i) => map2(i));
    }
    return this._clones.map((v, i) => v === position ? map2(i) : null).filter((item) => item);
  }
  /**
   * Sets the current animation speed.
   * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns The current animation speed in milliseconds.
   */
  speed(speed) {
    if (speed !== void 0) {
      this._speed = speed;
    }
    return this._speed;
  }
  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @param position The absolute position of the item within `minimum()` and `maximum()`.
   * @returns The coordinate of the item in pixel or all coordinates.
   */
  coordinates(position) {
    let multiplier = 1, newPosition = position - 1, coordinate, result;
    if (position === void 0) {
      result = this._coordinates.map((item, index) => {
        return this.coordinates(index);
      });
      return result;
    }
    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }
      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }
    coordinate = Math.ceil(coordinate);
    return coordinate;
  }
  /**
   * Calculates the speed for a translation.
   * @param from The absolute position of the start item.
   * @param to The absolute position of the target item.
   * @param factor [factor=undefined] - The time factor in milliseconds.
   * @returns The time in milliseconds for the translation.
   */
  _duration(from2, to, factor) {
    if (factor === 0) {
      return 0;
    }
    return Math.min(Math.max(Math.abs(to - from2), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
  }
  /**
   * Slides to the specified item.
   * @param position The position of the item.
   * @param speed The time in milliseconds for the transition.
   */
  to(position, speed) {
    let current = this.current(), revert = null, distance = position - this.relative(current), maximum = this.maximum(), delayForLoop = 0;
    const direction = +(distance > 0) - +(distance < 0), items = this._items.length, minimum = this.minimum();
    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }
      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;
      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        delayForLoop = 30;
        this.reset(current);
        this.sendChanges();
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }
    setTimeout(() => {
      this.speed(this._duration(current, position, speed));
      this.current(position);
      this.update();
    }, delayForLoop);
  }
  /**
   * Slides to the next item.
   * @param speed The time in milliseconds for the transition.
   */
  next(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  }
  /**
   * Slides to the previous item.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  }
  /**
   * Handles the end of an animation.
   * @param event - The event arguments.
   */
  onTransitionEnd(event) {
    if (event !== void 0) {
      return false;
    }
    this.leave("animating");
    this._trigger("translated");
  }
  /**
   * Gets viewport width.
   * @returns - The width in pixel.
   */
  _viewport() {
    let width;
    if (this._width) {
      width = this._width;
    } else {
      this.logger.log("Can not detect viewport width.");
    }
    return width;
  }
  /**
   * Sets _items
   * @param content The list of slides put into CarouselSlideDirectives.
   */
  setItems(content) {
    this._items = content;
  }
  /**
   * Sets slidesData using this._items
   */
  _defineSlidesData() {
    let loadMap;
    if (this.slidesData && this.slidesData.length) {
      loadMap = /* @__PURE__ */ new Map();
      this.slidesData.forEach((item) => {
        if (item.load) {
          loadMap.set(item.id, item.load);
        }
      });
    }
    this.slidesData = this._items.map((slide) => {
      return {
        id: `${slide.id}`,
        isActive: false,
        tplRef: slide.tplRef,
        dataMerge: slide.dataMerge,
        width: 0,
        isCloned: false,
        load: loadMap ? loadMap.get(slide.id) : false,
        hashFragment: slide.dataHash
      };
    });
  }
  /**
   * Sets current classes for slide
   * @param slide Slide of carousel
   * @returns object with names of css-classes which are keys and true/false values
   */
  setCurSlideClasses(slide) {
    const currentClasses = {
      "active": slide.isActive,
      "center": slide.isCentered,
      "cloned": slide.isCloned,
      "animated": slide.isAnimated,
      "owl-animated-in": slide.isDefAnimatedIn,
      "owl-animated-out": slide.isDefAnimatedOut
    };
    if (this.settings.animateIn) {
      currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
    }
    if (this.settings.animateOut) {
      currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
    }
    return currentClasses;
  }
  /**
   * Operators to calculate right-to-left and left-to-right.
   * @param a - The left side operand.
   * @param o - The operator.
   * @param b - The right side operand.
   * @returns true/false meaning right-to-left or left-to-right
   */
  _op(a, o, b) {
    const rtl = this.settings.rtl;
    switch (o) {
      case "<":
        return rtl ? a > b : a < b;
      case ">":
        return rtl ? a < b : a > b;
      case ">=":
        return rtl ? a <= b : a >= b;
      case "<=":
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  }
  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @param name The event name.
   * @param data The event data.
   * @param namespace The event namespace.
   * @param state The state which is associated with the event.
   * @param enter Indicates if the call enters the specified state or not.
   */
  _trigger(name, data, namespace, state2, enter) {
    switch (name) {
      case "initialized":
        this._initializedCarousel$.next(name);
        break;
      case "change":
        this._changeSettingsCarousel$.next(data);
        break;
      case "changed":
        this._changedSettingsCarousel$.next(data);
        break;
      case "drag":
        this._dragCarousel$.next(name);
        break;
      case "dragged":
        this._draggedCarousel$.next(name);
        break;
      case "resize":
        this._resizeCarousel$.next(name);
        break;
      case "resized":
        this._resizedCarousel$.next(name);
        break;
      case "refresh":
        this._refreshCarousel$.next(name);
        break;
      case "refreshed":
        this._refreshedCarousel$.next(name);
        break;
      case "translate":
        this._translateCarousel$.next(name);
        break;
      case "translated":
        this._translatedCarousel$.next(name);
        break;
      default:
        break;
    }
  }
  /**
   * Enters a state.
   * @param name - The state name.
   */
  enter(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === void 0) {
        this._states.current[stateName] = 0;
      }
      this._states.current[stateName]++;
    });
  }
  /**
   * Leaves a state.
   * @param name - The state name.
   */
  leave(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === 0 || !!this._states.current[stateName]) {
        this._states.current[stateName]--;
      }
    });
  }
  /**
   * Registers an event or state.
   * @param object - The event or state to register.
   */
  register(object) {
    if (object.type === Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }
      this._states.tags[object.name] = this._states.tags[object.name].filter((tag, i) => {
        return this._states.tags[object.name].indexOf(tag) === i;
      });
    }
  }
  /**
   * Suppresses events.
   * @param events The events to suppress.
   */
  _suppress(events) {
    events.forEach((event) => {
      this._supress[event] = true;
    });
  }
  /**
   * Releases suppressed events.
   * @param events The events to release.
   */
  _release(events) {
    events.forEach((event) => {
      delete this._supress[event];
    });
  }
  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @param event The `mousedown` or `touchstart` event.
   * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
   */
  pointer(event) {
    const result = {
      x: null,
      y: null
    };
    event = event.originalEvent || event || window.event;
    event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }
    return result;
  }
  /**
   * Determines if the input is a Number or something that can be coerced to a Number
   * @param number The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number
   */
  _isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  /**
   * Determines whether value is number or boolean type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
   */
  _isNumberOrBoolean(value) {
    return this._isNumeric(value) || typeof value === "boolean";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isNumberOrString(value) {
    return this._isNumeric(value) || typeof value === "string";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isStringOrBoolean(value) {
    return typeof value === "string" || typeof value === "boolean";
  }
  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @param first The first vector.
   * @param second The second vector.
   * @returns The difference.
   */
  difference(first2, second) {
    if (null === first2 || null === second) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: first2.x - second.x,
      y: first2.y - second.y
    };
  }
  static \u0275fac = function CarouselService_Factory(t) {
    return new (t || _CarouselService)(\u0275\u0275inject(OwlLogger));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselService,
    factory: _CarouselService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselService, [{
    type: Injectable
  }], () => [{
    type: OwlLogger
  }], null);
})();
var NavigationService = class _NavigationService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  navSubscription;
  /**
   * Indicates whether the plugin is initialized or not.
   */
  _initialized = false;
  /**
   * The current paging indexes.
   */
  _pages = [];
  /**
   * Data for navigation elements of the user interface.
   */
  _navData = {
    disabled: false,
    prev: {
      disabled: false,
      htmlText: ""
    },
    next: {
      disabled: false,
      htmlText: ""
    }
  };
  /**
   * Data for dot elements of the user interface.
   */
  _dotsData = {
    disabled: false,
    dots: []
  };
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((state2) => {
      this.initialize();
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(filter((data) => data.property.name === "position"), tap((data) => {
      this.update();
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap(() => {
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const navMerge$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.navSubscription = navMerge$.subscribe(() => {
    });
  }
  /**
     * Initializes the layout of the plugin and extends the carousel.
     */
  initialize() {
    this._navData.disabled = true;
    this._navData.prev.htmlText = this.carouselService.settings.navText[0];
    this._navData.next.htmlText = this.carouselService.settings.navText[1];
    this._dotsData.disabled = true;
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Calculates internal states and updates prop _pages
   */
  _updateNavPages() {
    let i, j, k;
    const lower = this.carouselService.clones().length / 2, upper = lower + this.carouselService.items().length, maximum = this.carouselService.maximum(true), pages = [], settings = this.carouselService.settings;
    let size = settings.center || settings.autoWidth || settings.dotsData ? 1 : Math.floor(Number(settings.dotsEach)) || Math.floor(settings.items);
    size = +size;
    if (settings.slideBy !== "page") {
      settings.slideBy = Math.min(+settings.slideBy, settings.items);
    }
    if (settings.dots || settings.slideBy === "page") {
      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1
          });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          j = 0, ++k;
        }
        j += this.carouselService.mergers(this.carouselService.relative(i));
      }
    }
    this._pages = pages;
  }
  /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     */
  draw() {
    let difference;
    const settings = this.carouselService.settings, items = this.carouselService.items(), disabled = items.length <= settings.items;
    this._navData.disabled = !settings.nav || disabled;
    this._dotsData.disabled = !settings.dots || disabled;
    if (settings.dots) {
      difference = this._pages.length - this._dotsData.dots.length;
      if (settings.dotsData && difference !== 0) {
        this._dotsData.dots = [];
        items.forEach((item) => {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${item.id}`,
            innerContent: item.dotContent,
            showInnerContent: true
          });
        });
      } else if (difference > 0) {
        const startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
        for (let i = 0; i < difference; i++) {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${i + startI}`,
            innerContent: "",
            showInnerContent: false
          });
        }
      } else if (difference < 0) {
        this._dotsData.dots.splice(difference, Math.abs(difference));
      }
    }
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Updates navigation buttons's and dots's states
   */
  update() {
    this._updateNavButtons();
    this._updateDots();
  }
  /**
   * Changes state of nav buttons (disabled, enabled)
   */
  _updateNavButtons() {
    const settings = this.carouselService.settings, loop = settings.loop || settings.rewind, index = this.carouselService.relative(this.carouselService.current());
    if (settings.nav) {
      this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
      this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
    }
    this.carouselService.navData = this._navData;
  }
  /**
   * Changes active dot if page becomes changed
   */
  _updateDots() {
    let curActiveDotI;
    if (!this.carouselService.settings.dots) {
      return;
    }
    this._dotsData.dots.forEach((item) => {
      if (item.active === true) {
        item.active = false;
      }
    });
    curActiveDotI = this._current();
    if (this._dotsData.dots.length) {
      this._dotsData.dots[curActiveDotI].active = true;
    }
    this.carouselService.dotsData = this._dotsData;
  }
  /**
     * Gets the current page position of the carousel.
     * @returns the current page position of the carousel
     */
  _current() {
    const current = this.carouselService.relative(this.carouselService.current());
    let finalCurrent;
    const pages = this._pages.filter((page, index) => {
      return page.start <= current && page.end >= current;
    }).pop();
    finalCurrent = this._pages.findIndex((page) => {
      return page.start === pages.start && page.end === pages.end;
    });
    return finalCurrent;
  }
  /**
     * Gets the current succesor/predecessor position.
   * @param sussessor position of slide
     * @returns the current succesor/predecessor position
     */
  _getPosition(successor) {
    let position, length;
    const settings = this.carouselService.settings;
    if (settings.slideBy === "page") {
      position = this._current();
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[(position % length + length) % length].start;
    } else {
      position = this.carouselService.relative(this.carouselService.current());
      length = this.carouselService.items().length;
      successor ? position += +settings.slideBy : position -= +settings.slideBy;
    }
    return position;
  }
  /**
     * Slides to the next item or page.
     * @param speed The time in milliseconds for the transition.
     */
  next(speed) {
    this.carouselService.to(this._getPosition(true), speed);
  }
  /**
   * Slides to the previous item or page.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    this.carouselService.to(this._getPosition(false), speed);
  }
  /**
   * Slides to the specified item or page.
   * @param position - The position of the item or page.
   * @param speed - The time in milliseconds for the transition.
   * @param standard - Whether to use the standard behaviour or not. Default meaning false
   */
  to(position, speed, standard) {
    let length;
    if (!standard && this._pages.length) {
      length = this._pages.length;
      this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
    } else {
      this.carouselService.to(position, speed);
    }
  }
  /**
   * Moves carousel after user's clicking on any dots
   */
  moveByDot(dotId) {
    const index = this._dotsData.dots.findIndex((dot) => dotId === dot.id);
    this.to(index, this.carouselService.settings.dotsSpeed);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id id of slide
   */
  toSlideById(id) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.id === id && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  static \u0275fac = function NavigationService_Factory(t) {
    return new (t || _NavigationService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationService,
    factory: _NavigationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var WINDOW = new InjectionToken("WindowToken");
var WindowRef = class {
  get nativeWindow() {
    throw new Error("Not implemented.");
  }
};
var BrowserWindowRef = class _BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }
  /**
   * @returns window object
   */
  get nativeWindow() {
    return window;
  }
  static \u0275fac = function BrowserWindowRef_Factory(t) {
    return new (t || _BrowserWindowRef)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserWindowRef,
    factory: _BrowserWindowRef.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserWindowRef, [{
    type: Injectable
  }], () => [], null);
})();
function windowFactory(browserWindowRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  const obj = {
    setTimeout: (func, time) => {
    },
    clearTimeout: (a) => {
    }
  };
  return obj;
}
var browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
var windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, PLATFORM_ID]
};
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
var DOCUMENT2 = new InjectionToken("DocumentToken");
var DocumentRef = class {
  get nativeDocument() {
    throw new Error("Not implemented.");
  }
};
var BrowserDocumentRef = class _BrowserDocumentRef extends DocumentRef {
  constructor() {
    super();
  }
  /**
   * @returns Document object
   */
  get nativeDocument() {
    return document;
  }
  static \u0275fac = function BrowserDocumentRef_Factory(t) {
    return new (t || _BrowserDocumentRef)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserDocumentRef,
    factory: _BrowserDocumentRef.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserDocumentRef, [{
    type: Injectable
  }], () => [], null);
})();
function documentFactory(browserDocumentRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserDocumentRef.nativeDocument;
  }
  const doc = {
    hidden: false,
    visibilityState: "visible"
  };
  return doc;
}
var browserDocumentProvider = {
  provide: DocumentRef,
  useClass: BrowserDocumentRef
};
var documentProvider = {
  provide: DOCUMENT2,
  useFactory: documentFactory,
  deps: [DocumentRef, PLATFORM_ID]
};
var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];
var AutoplayService = class _AutoplayService {
  carouselService;
  ngZone;
  /**
   * Subscrioption to merge Observables from CarouselService
   */
  autoplaySubscription;
  /**
   * The autoplay timeout.
   */
  _timeout = null;
  /**
   * Indicates whenever the autoplay is paused.
   */
  _paused = false;
  /**
   * Shows whether the code (the plugin) changed the option 'AutoplayTimeout' for own needs
   */
  _isArtificialAutoplayTimeout;
  /**
   * Shows whether the autoplay is paused for unlimited time by the developer.
   * Use to prevent autoplaying in case of firing `mouseleave` by adding layers to `<body>` like `mat-menu` does
   */
  _isAutoplayStopped = false;
  get isAutoplayStopped() {
    return this._isAutoplayStopped;
  }
  set isAutoplayStopped(value) {
    this._isAutoplayStopped = value;
  }
  winRef;
  docRef;
  constructor(carouselService, winRef, docRef, ngZone) {
    this.carouselService = carouselService;
    this.ngZone = ngZone;
    this.winRef = winRef;
    this.docRef = docRef;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoplaySubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay) {
        this.play();
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      this._handleChangeObservable(data);
    }));
    const resized$ = this.carouselService.getResizedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay && !this._isAutoplayStopped) {
        this.play();
      } else {
        this.stop();
      }
    }));
    const autoplayMerge$ = merge(initializedCarousel$, changedSettings$, resized$);
    this.autoplaySubscription = autoplayMerge$.subscribe(() => {
    });
  }
  /**
     * Starts the autoplay.
     * @param timeout The interval before the next animation starts.
     * @param speed The animation speed for the animations.
     */
  play(timeout, speed) {
    if (this._paused) {
      this._paused = false;
      this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
    }
    if (this.carouselService.is("rotating")) {
      return;
    }
    this.carouselService.enter("rotating");
    this._setAutoPlayInterval();
  }
  /**
     * Gets a new timeout
     * @param timeout - The interval before the next animation starts.
     * @param speed - The animation speed for the animations.
     * @return
     */
  _getNextTimeout(timeout, speed) {
    if (this._timeout) {
      this.winRef.clearTimeout(this._timeout);
    }
    this._isArtificialAutoplayTimeout = timeout ? true : false;
    return this.ngZone.runOutsideAngular(() => {
      return this.winRef.setTimeout(() => {
        this.ngZone.run(() => {
          if (this._paused || this.carouselService.is("busy") || this.carouselService.is("interacting") || this.docRef.hidden) {
            return;
          }
          this.carouselService.next(speed || this.carouselService.settings.autoplaySpeed);
        });
      }, timeout || this.carouselService.settings.autoplayTimeout);
    });
  }
  /**
     * Sets autoplay in motion.
     */
  _setAutoPlayInterval(timeout) {
    this._timeout = this._getNextTimeout(timeout);
  }
  /**
   * Stops the autoplay.
   */
  stop() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
    this.winRef.clearTimeout(this._timeout);
    this.carouselService.leave("rotating");
  }
  /**
     * Stops the autoplay.
     */
  pause() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
  }
  /**
   * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
   * @param data object with current position of carousel and type of change
   */
  _handleChangeObservable(data) {
    if (data.property.name === "settings") {
      if (this.carouselService.settings.autoplay) {
        this.play();
      } else {
        this.stop();
      }
    } else if (data.property.name === "position") {
      if (this.carouselService.settings.autoplay) {
        this._setAutoPlayInterval();
      }
    }
  }
  /**
   * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
   */
  _playAfterTranslated() {
    of("translated").pipe(switchMap((data) => this.carouselService.getTranslatedState()), first(), filter(() => this._isArtificialAutoplayTimeout), tap(() => this._setAutoPlayInterval())).subscribe(() => {
    });
  }
  /**
   * Starts pausing
   */
  startPausing() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.pause();
    }
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayingMouseLeave() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  /**
   * Starts playing after touch ends
   */
  startPlayingTouchEnd() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  static \u0275fac = function AutoplayService_Factory(t) {
    return new (t || _AutoplayService)(\u0275\u0275inject(CarouselService), \u0275\u0275inject(WINDOW), \u0275\u0275inject(DOCUMENT2), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoplayService,
    factory: _AutoplayService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoplayService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT2]
    }]
  }, {
    type: NgZone
  }], null);
})();
var LazyLoadService = class _LazyLoadService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  lazyLoadSubscription;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.lazyLoadSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      const isLazyLoad = this.carouselService.settings && !this.carouselService.settings.lazyLoad;
      this.carouselService.slidesData.forEach((item) => item.load = isLazyLoad ? true : false);
    }));
    const changeSettings$ = this.carouselService.getChangeState();
    const resizedCarousel$ = this.carouselService.getResizedState();
    const lazyLoadMerge$ = merge(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(tap((data) => this._defineLazyLoadSlides(data)));
    this.lazyLoadSubscription = lazyLoadMerge$.subscribe(() => {
    });
  }
  _defineLazyLoadSlides(data) {
    if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
      return;
    }
    if (data.property && data.property.name === "position" || data === "initialized" || data === "resized") {
      const settings = this.carouselService.settings, clones = this.carouselService.clones().length;
      let n = settings.center && Math.ceil(settings.items / 2) || settings.items, i = settings.center && n * -1 || 0, position = (data.property && data.property.value !== void 0 ? data.property.value : this.carouselService.current()) + i;
      if (settings.lazyLoadEager > 0) {
        n += settings.lazyLoadEager;
        if (settings.loop) {
          position -= settings.lazyLoadEager;
          n++;
        }
      }
      while (i++ < n) {
        this._load(clones / 2 + this.carouselService.relative(position));
        if (clones) {
          this.carouselService.clones(this.carouselService.relative(position)).forEach((value) => this._load(value));
        }
        position++;
      }
    }
  }
  /**
     * Loads all resources of an item at the specified position.
     * @param position - The absolute position of the item.
     */
  _load(position) {
    if (this.carouselService.slidesData[position].load) {
      return;
    }
    this.carouselService.slidesData[position].load = true;
  }
  static \u0275fac = function LazyLoadService_Factory(t) {
    return new (t || _LazyLoadService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LazyLoadService,
    factory: _LazyLoadService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyLoadService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var AnimateService = class _AnimateService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  animateSubscription;
  /**
   * s
   */
  swapping = true;
  /**
   * active slide before translating
   */
  previous = void 0;
  /**
   * new active slide after translating
   */
  next = void 0;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.animateSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const changeSettings$ = this.carouselService.getChangeState().pipe(tap((data) => {
      if (data.property.name === "position") {
        this.previous = this.carouselService.current();
        this.next = data.property.value;
      }
    }));
    const dragCarousel$ = this.carouselService.getDragState();
    const draggedCarousel$ = this.carouselService.getDraggedState();
    const translatedCarousel$ = this.carouselService.getTranslatedState();
    const dragTranslatedMerge$ = merge(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(tap((data) => this.swapping = data === "translated"));
    const translateCarousel$ = this.carouselService.getTranslateState().pipe(tap((data) => {
      if (this.swapping && (this.carouselService._options.animateOut || this.carouselService._options.animateIn)) {
        this._swap();
      }
    }));
    const animateMerge$ = merge(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
    this.animateSubscription = animateMerge$.subscribe(() => {
    });
  }
  /**
     * Toggles the animation classes whenever an translations starts.
     * @returns
     */
  _swap() {
    if (this.carouselService.settings.items !== 1) {
      return;
    }
    this.carouselService.speed(0);
    let left;
    const previous = this.carouselService.slidesData[this.previous], next = this.carouselService.slidesData[this.next], incoming = this.carouselService.settings.animateIn, outgoing = this.carouselService.settings.animateOut;
    if (this.carouselService.current() === this.previous) {
      return;
    }
    if (outgoing) {
      left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === previous.id) {
          slide.left = `${left}px`;
          slide.isAnimated = true;
          slide.isDefAnimatedOut = true;
          slide.isCustomAnimatedOut = true;
        }
      });
    }
    if (incoming) {
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === next.id) {
          slide.isAnimated = true;
          slide.isDefAnimatedIn = true;
          slide.isCustomAnimatedIn = true;
        }
      });
    }
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.carouselService.slidesData.forEach((slide) => {
      if (slide.id === id) {
        slide.left = "";
        slide.isAnimated = false;
        slide.isDefAnimatedOut = false;
        slide.isCustomAnimatedOut = false;
        slide.isDefAnimatedIn = false;
        slide.isCustomAnimatedIn = false;
        slide.classes = this.carouselService.setCurSlideClasses(slide);
      }
    });
    this.carouselService.onTransitionEnd();
  }
  static \u0275fac = function AnimateService_Factory(t) {
    return new (t || _AnimateService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimateService,
    factory: _AnimateService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var AutoHeightService = class _AutoHeightService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  autoHeightSubscription;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoHeightSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      } else {
        this.carouselService.slidesData.forEach((slide) => slide.heightState = "full");
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight && data.property.name === "position") {
        this.update();
      }
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      }
    }));
    const autoHeight$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.autoHeightSubscription = autoHeight$.subscribe(() => {
    });
  }
  /**
   * Updates the prop 'heightState' of slides
   */
  update() {
    const items = this.carouselService.settings.items;
    let start = this.carouselService.current(), end = start + items;
    if (this.carouselService.settings.center) {
      start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
      end = items % 2 === 1 ? start + items : start + items + 1;
    }
    this.carouselService.slidesData.forEach((slide, i) => {
      slide.heightState = i >= start && i < end ? "full" : "nulled";
    });
  }
  static \u0275fac = function AutoHeightService_Factory(t) {
    return new (t || _AutoHeightService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoHeightService,
    factory: _AutoHeightService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoHeightService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var HashService = class _HashService {
  carouselService;
  route;
  router;
  /**
   * Subscription to merge Observable from CarouselService
   */
  hashSubscription;
  /**
   * Current url fragment (hash)
   */
  currentHashFragment;
  constructor(carouselService, route, router) {
    this.carouselService = carouselService;
    this.route = route;
    this.router = router;
    this.spyDataStreams();
    if (!this.route) {
      this.route = {
        fragment: of("no route").pipe(take(1))
      };
    }
    ;
    if (!this.router) {
      this.router = {
        navigate: (commands, extras) => {
          return;
        }
      };
    }
  }
  ngOnDestroy() {
    this.hashSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => this.listenToRoute()));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.URLhashListener && data.property.name === "position") {
        const newCurSlide = this.carouselService.current();
        const newCurFragment = this.carouselService.slidesData[newCurSlide].hashFragment;
        if (!newCurFragment || newCurFragment === this.currentHashFragment) {
          return;
        }
        this.router.navigate(["./"], {
          fragment: newCurFragment,
          relativeTo: this.route
        });
      }
    }));
    const hashFragment$ = merge(initializedCarousel$, changedSettings$);
    this.hashSubscription = hashFragment$.subscribe(() => {
    });
  }
  /**
   * rewinds carousel to slide which has the same hashFragment as fragment of current url
   * @param fragment fragment of url
   */
  rewind(fragment) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.hashFragment === fragment && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  /**
   * Initiate listening to ActivatedRoute.fragment
   */
  listenToRoute() {
    const count = this.carouselService.settings.startPosition === "URLHash" ? 0 : 2;
    this.route.fragment.pipe(skip(count)).subscribe((fragment) => {
      this.currentHashFragment = fragment;
      this.rewind(fragment);
    });
  }
  static \u0275fac = function HashService_Factory(t) {
    return new (t || _HashService)(\u0275\u0275inject(CarouselService), \u0275\u0275inject(ActivatedRoute, 8), \u0275\u0275inject(Router, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HashService,
    factory: _HashService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HashService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: ActivatedRoute,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var nextId = 0;
var CarouselSlideDirective = class _CarouselSlideDirective {
  tplRef;
  /**
   * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
   * Will be auto-generated if not provided.
   */
  id = `owl-slide-${nextId++}`;
  /**
   * Defines how much widths of common slide will current slide have
   * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
   */
  _dataMerge = 1;
  set dataMerge(data) {
    this._dataMerge = this.isNumeric(data) ? data : 1;
  }
  get dataMerge() {
    return this._dataMerge;
  }
  /**
   * Width of slide
   */
  width = 0;
  /**
   * Inner content of dot for certain slide; can be html-markup
   */
  dotContent = "";
  /**
   * Hash (fragment) of url which corresponds to certain slide
   */
  dataHash = "";
  constructor(tplRef) {
    this.tplRef = tplRef;
  }
  /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param - The input to be tested
     * @returns - An indication if the input is a Number or can be coerced to a Number
     */
  isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  static \u0275fac = function CarouselSlideDirective_Factory(t) {
    return new (t || _CarouselSlideDirective)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CarouselSlideDirective,
    selectors: [["ng-template", "carouselSlide", ""]],
    inputs: {
      id: "id",
      dataMerge: "dataMerge",
      width: "width",
      dotContent: "dotContent",
      dataHash: "dataHash"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselSlideDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[carouselSlide]"
    }]
  }], () => [{
    type: TemplateRef
  }], {
    id: [{
      type: Input
    }],
    dataMerge: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    dotContent: [{
      type: Input
    }],
    dataHash: [{
      type: Input
    }]
  });
})();
var ResizeService = class _ResizeService {
  resizeObservable$;
  /**
   * Makes resizeSubject become Observable
   * @returns Observable of resizeSubject
   */
  get onResize$() {
    return this.resizeObservable$;
  }
  constructor(winRef, platformId) {
    this.resizeObservable$ = isPlatformBrowser(platformId) ? fromEvent(winRef, "resize") : new Subject().asObservable();
  }
  static \u0275fac = function ResizeService_Factory(t) {
    return new (t || _ResizeService)(\u0275\u0275inject(WINDOW), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ResizeService,
    factory: _ResizeService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var StageComponent = class _StageComponent {
  zone;
  el;
  renderer;
  carouselService;
  animateService;
  /**
   * Object with settings which make carousel draggable by touch or mouse
   */
  owlDraggable;
  /**
   * Data of owl-stage
   */
  stageData;
  /**
   *  Data of every slide
   */
  slidesData;
  /**
   * Function wich will be returned after attaching listener to 'mousemove' event
   */
  listenerMouseMove;
  /**
   * Function wich will be returned after attaching listener to 'touchmove' event
   */
  listenerTouchMove;
  /**
   * Function wich will be returned after attaching listener to 'mousemove' event
   */
  listenerOneMouseMove;
  /**
   * Function wich will be returned after attaching listener to 'touchmove' event
   */
  listenerOneTouchMove;
  /**
   * Function wich will be returned after attaching listener to 'mouseup' event
   */
  listenerMouseUp;
  /**
   * Function wich will be returned after attaching listener to 'touchend' event
   */
  listenerTouchEnd;
  /**
   * Function wich will be returned after attaching listener to 'click' event
   */
  listenerOneClick;
  listenerATag;
  /**
   * Object with data needed for dragging
   */
  _drag = {
    time: null,
    target: null,
    pointer: null,
    stage: {
      start: null,
      current: null
    },
    direction: null,
    active: false,
    moving: false
  };
  /**
   * Subject for notification when the carousel's rebuilding caused by resize event starts
   */
  _oneDragMove$ = new Subject();
  /**
   * Subsctiption to _oneDragMove$ Subject
   */
  _oneMoveSubsription;
  preparePublicSlide = (slide) => {
    const newSlide = __spreadValues({}, slide);
    delete newSlide.tplRef;
    return newSlide;
  };
  constructor(zone, el, renderer, carouselService, animateService) {
    this.zone = zone;
    this.el = el;
    this.renderer = renderer;
    this.carouselService = carouselService;
    this.animateService = animateService;
  }
  onMouseDown(event) {
    if (this.owlDraggable.isMouseDragable) {
      this._onDragStart(event);
    }
  }
  onTouchStart(event) {
    if (event.targetTouches.length >= 2) {
      return false;
    }
    if (this.owlDraggable.isTouchDragable) {
      this._onDragStart(event);
    }
  }
  onTouchCancel(event) {
    this._onDragEnd(event);
  }
  onDragStart() {
    if (this.owlDraggable.isMouseDragable) {
      return false;
    }
  }
  onSelectStart() {
    if (this.owlDraggable.isMouseDragable) {
      return false;
    }
  }
  ngOnInit() {
    this._oneMoveSubsription = this._oneDragMove$.pipe(first()).subscribe(() => {
      this._sendChanges();
    });
  }
  ngOnDestroy() {
    this._oneMoveSubsription.unsubscribe();
  }
  /**
   * Passes this to _oneMouseTouchMove();
   */
  bindOneMouseTouchMove = (ev) => {
    this._oneMouseTouchMove(ev);
  };
  /**
   * Passes this to _onDragMove();
   */
  bindOnDragMove = (ev) => {
    this._onDragMove(ev);
  };
  /**
   * Passes this to _onDragMove();
   */
  bindOnDragEnd = (ev) => {
    this._onDragEnd(ev);
  };
  /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @param event - The event arguments.
     */
  _onDragStart(event) {
    let stage = null;
    if (event.which === 3) {
      return;
    }
    stage = this._prepareDragging(event);
    this._drag.time = (/* @__PURE__ */ new Date()).getTime();
    this._drag.target = event.target;
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this._pointer(event);
    this.listenerMouseUp = this.renderer.listen(document, "mouseup", this.bindOnDragEnd);
    this.listenerTouchEnd = this.renderer.listen(document, "touchend", this.bindOnDragEnd);
    this.zone.runOutsideAngular(() => {
      this.listenerOneMouseMove = this.renderer.listen(document, "mousemove", this.bindOneMouseTouchMove);
      this.listenerOneTouchMove = this.renderer.listen(document, "touchmove", this.bindOneMouseTouchMove);
    });
  }
  /**
   * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
   * @param event event objech of mouse or touch event
   */
  _oneMouseTouchMove(event) {
    const delta = this._difference(this._drag.pointer, this._pointer(event));
    if (this.listenerATag) {
      this.listenerATag();
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is("valid")) {
      return;
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is("valid")) {
      return;
    }
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    this._drag.moving = true;
    this.blockClickAnchorInDragging(event);
    this.listenerMouseMove = this.renderer.listen(document, "mousemove", this.bindOnDragMove);
    this.listenerTouchMove = this.renderer.listen(document, "touchmove", this.bindOnDragMove);
    event.preventDefault();
    this._enterDragging();
    this._oneDragMove$.next(event);
  }
  /**
   * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
   * @param event event object
   */
  blockClickAnchorInDragging(event) {
    let target = event.target;
    while (target && !(target instanceof HTMLAnchorElement)) {
      target = target.parentElement;
    }
    if (target instanceof HTMLAnchorElement) {
      this.listenerATag = this.renderer.listen(target, "click", () => false);
    }
  }
  /**
   * Handles the `touchmove` and `mousemove` events.
   * @todo #261
   * @param event - The event arguments.
   */
  _onDragMove(event) {
    let stage;
    const stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);
    if (stageOrExit === false) {
      return;
    }
    stage = stageOrExit;
    event.preventDefault();
    this._drag.stage.current = stage;
    this._animate(stage.x - this._drag.stage.start.x);
  }
  /**
   * Moves .owl-stage left-right
   * @param coordinate coordinate to be set to .owl-stage
   */
  _animate(coordinate) {
    this.renderer.setStyle(this.el.nativeElement.children[0], "transform", `translate3d(${coordinate}px,0px,0px`);
    this.renderer.setStyle(this.el.nativeElement.children[0], "transition", "0s");
  }
  /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @param event - The event arguments.
     */
  _onDragEnd(event) {
    this.carouselService.owlDOMData.isGrab = false;
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    if (this._drag.moving) {
      this.renderer.setStyle(this.el.nativeElement.children[0], "transform", ``);
      this.renderer.setStyle(this.el.nativeElement.children[0], "transition", this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1e3 + "s");
      this._finishDragging(event);
      this.listenerMouseMove();
      this.listenerTouchMove();
    }
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null,
      active: false,
      moving: false
    };
    this.listenerMouseUp();
    this.listenerTouchEnd();
  }
  /**
     * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
     * @param event - The event arguments.
     * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
     */
  _prepareDragging(event) {
    return this.carouselService.prepareDragging(event);
  }
  /**
   * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
   */
  _oneClickHandler = () => {
    this.listenerOneClick = this.renderer.listen(this._drag.target, "click", () => false);
    this.listenerOneClick();
  };
  /**
   * Finishes dragging
   * @param event object event of 'mouseUp' of 'touchend' events
   */
  _finishDragging(event) {
    this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
  }
  /**
     * Gets unified pointer coordinates from event.
     * @param event The `mousedown` or `touchstart` event.
     * @returns Contains `x` and `y` coordinates of current pointer position.
     */
  _pointer(event) {
    return this.carouselService.pointer(event);
  }
  /**
     * Gets the difference of two vectors.
     * @param first The first vector.
     * @param second The second vector.
     * @returns The difference.
     */
  _difference(firstC, second) {
    return this.carouselService.difference(firstC, second);
  }
  /**
     * Checks whether the carousel is in a specific state or not.
     * @param specificState The state to check.
     * @returns The flag which indicates if the carousel is busy.
     */
  _is(specificState) {
    return this.carouselService.is(specificState);
  }
  /**
  * Enters a state.
  * @param name The state name.
  */
  _enter(name) {
    this.carouselService.enter(name);
  }
  /**
     * Sends all data needed for View.
     */
  _sendChanges() {
    this.carouselService.sendChanges();
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
     * Enters into a 'dragging' state
     */
  _enterDragging() {
    this.carouselService.enterDragging();
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.animateService.clear(id);
  }
  static \u0275fac = function StageComponent_Factory(t) {
    return new (t || _StageComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(CarouselService), \u0275\u0275directiveInject(AnimateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StageComponent,
    selectors: [["owl-stage"]],
    hostBindings: function StageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
          return ctx.onMouseDown($event);
        })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
          return ctx.onTouchCancel($event);
        })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
          return ctx.onDragStart();
        })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
          return ctx.onSelectStart();
        });
      }
    },
    inputs: {
      owlDraggable: "owlDraggable",
      stageData: "stageData",
      slidesData: "slidesData"
    },
    decls: 3,
    vars: 8,
    consts: [[1, "owl-stage", 3, "transitionend", "ngStyle"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "animationend", "ngClass", "ngStyle"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0);
        \u0275\u0275listener("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
          return ctx.onTransitionEnd();
        });
        \u0275\u0275template(2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction5(2, _c0, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.slidesData);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
    encapsulation: 2,
    data: {
      animation: [trigger("autoHeight", [state("nulled", style({
        height: 0
      })), state("full", style({
        height: "*"
      })), transition("full => nulled", [
        // style({height: '*'}),
        animate("700ms 350ms")
      ]), transition("nulled => full", [
        // style({height: 0}),
        animate(350)
      ])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StageComponent, [{
    type: Component,
    args: [{
      selector: "owl-stage",
      template: `
    <div>
      <div class="owl-stage" [ngStyle]="{'width': stageData.width + 'px',
                                        'transform': stageData.transform,
                                        'transition': stageData.transition,
                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',
                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }"
          (transitionend)="onTransitionEnd()">
        <ng-container *ngFor="let slide of slidesData; let i = index">
          <div class="owl-item" [ngClass]="slide.classes"
                                [ngStyle]="{'width': slide.width + 'px',
                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',
                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',
                                            'left': slide.left}"
                                (animationend)="clear(slide.id)"
                                [@autoHeight]="slide.heightState">
            <ng-template *ngIf="slide.load" [ngTemplateOutlet]="slide.tplRef" [ngTemplateOutletContext]="{ $implicit: preparePublicSlide(slide), index: i }"></ng-template>
          </div><!-- /.owl-item -->
        </ng-container>
      </div><!-- /.owl-stage -->
    </div>
  `,
      animations: [trigger("autoHeight", [state("nulled", style({
        height: 0
      })), state("full", style({
        height: "*"
      })), transition("full => nulled", [
        // style({height: '*'}),
        animate("700ms 350ms")
      ]), transition("nulled => full", [
        // style({height: 0}),
        animate(350)
      ])])]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: CarouselService
  }, {
    type: AnimateService
  }], {
    owlDraggable: [{
      type: Input
    }],
    stageData: [{
      type: Input
    }],
    slidesData: [{
      type: Input
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onTouchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    onTouchCancel: [{
      type: HostListener,
      args: ["touchcancel", ["$event"]]
    }],
    onDragStart: [{
      type: HostListener,
      args: ["dragstart"]
    }],
    onSelectStart: [{
      type: HostListener,
      args: ["selectstart"]
    }]
  });
})();
var CarouselComponent = class _CarouselComponent {
  el;
  resizeService;
  carouselService;
  navigationService;
  autoplayService;
  lazyLoadService;
  animateService;
  autoHeightService;
  hashService;
  logger;
  changeDetectorRef;
  slides;
  translated = new EventEmitter();
  dragging = new EventEmitter();
  change = new EventEmitter();
  changed = new EventEmitter();
  initialized = new EventEmitter();
  /**
   * Width of carousel window (tag with class .owl-carousel), in wich we can see moving sliders
   */
  carouselWindowWidth;
  /**
   * Subscription to 'resize' event
   */
  resizeSubscription;
  /**
   * Subscription merge Observable, which merges all Observables in the component except 'resize' Observable and this.slides.changes()
   */
  _allObservSubscription;
  /**
   * Subscription to `this.slides.changes().
   * It could be included in 'this._allObservSubscription', but that subcription get created during the initializing of component
   * and 'this.slides' are undefined at that moment. So it's needed to wait for initialization of content.
   */
  _slidesChangesSubscription;
  /**
   * Current settings for the carousel.
   */
  owlDOMData;
  /**
   * Data of owl-stage
   */
  stageData;
  /**
   *  Data of every slide
   */
  slidesData = [];
  /**
   * Data of navigation block
   */
  navData;
  /**
   * Data of dots block
   */
  dotsData;
  /**
   * Data, wich are passed out of carousel after ending of transioning of carousel
   */
  slidesOutputData;
  /**
   * Shows whether carousel is loaded of not.
   */
  carouselLoaded = false;
  /**
   * User's options
   */
  options;
  prevOptions;
  /**
   * Observable for getting current View Settings
   */
  _viewCurSettings$;
  /**
   * Observable for catching the end of transition of carousel
   */
  _translatedCarousel$;
  /**
   * Observable for catching the start of dragging of the carousel
   */
  _draggingCarousel$;
  /**
   * Observable for catching the start of changing of the carousel
   */
  _changeCarousel$;
  /**
   * Observable for catching the moment when the data about slides changed, more exactly when the position changed.
   */
  _changedCarousel$;
  /**
   * Observable for catching the initialization of changing the carousel
   */
  _initializedCarousel$;
  /**
   * Observable for merging all Observables and creating one subscription
   */
  _carouselMerge$;
  docRef;
  constructor(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
    this.el = el;
    this.resizeService = resizeService;
    this.carouselService = carouselService;
    this.navigationService = navigationService;
    this.autoplayService = autoplayService;
    this.lazyLoadService = lazyLoadService;
    this.animateService = animateService;
    this.autoHeightService = autoHeightService;
    this.hashService = hashService;
    this.logger = logger;
    this.changeDetectorRef = changeDetectorRef;
    this.docRef = docRef;
  }
  onVisibilityChange(ev) {
    if (!this.carouselService.settings.autoplay)
      return;
    switch (this.docRef.visibilityState) {
      case "visible":
        !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
        break;
      case "hidden":
        this.autoplayService.pause();
        break;
      default:
        break;
    }
  }
  ngOnInit() {
    this.spyDataStreams();
    this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
  }
  ngOnChanges() {
    if (this.prevOptions !== this.options) {
      if (this.prevOptions && this.slides?.toArray().length) {
        this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
        this.carouselService.initialize(this.slides.toArray());
      } else if (this.prevOptions && !this.slides?.toArray().length) {
        this.carouselLoaded = false;
        this.logger.log(`There are no slides to show. So the carousel won't be re-rendered`);
      } else {
        this.carouselLoaded = false;
      }
      this.prevOptions = this.options;
    }
  }
  ngAfterContentInit() {
    if (this.slides.toArray().length) {
      this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
      this.carouselService.initialize(this.slides.toArray());
      this._winResizeWatcher();
    } else {
      this.logger.log(`There are no slides to show. So the carousel won't be rendered`);
    }
    this._slidesChangesSubscription = this.slides.changes.pipe(tap((slides) => {
      this.carouselService.setup(this.carouselWindowWidth, slides.toArray(), this.options);
      this.carouselService.initialize(slides.toArray());
      if (!slides.toArray().length) {
        this.carouselLoaded = false;
      }
      if (slides.toArray().length && !this.resizeSubscription) {
        this._winResizeWatcher();
      }
    })).subscribe(() => {
    });
  }
  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    if (this._slidesChangesSubscription) {
      this._slidesChangesSubscription.unsubscribe();
    }
    if (this._allObservSubscription) {
      this._allObservSubscription.unsubscribe();
    }
  }
  /**
   * Joins the observable login in one place: sets values to some observables, merges this observables and
   * subcribes to merge func
   */
  spyDataStreams() {
    this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(tap((data) => {
      this.owlDOMData = data.owlDOMData;
      this.stageData = data.stageData;
      this.slidesData = data.slidesData;
      if (!this.carouselLoaded) {
        this.carouselLoaded = true;
      }
      this.navData = data.navData;
      this.dotsData = data.dotsData;
      this.changeDetectorRef.markForCheck();
    }));
    this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.initialized.emit(this.slidesOutputData);
    }));
    this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.translated.emit(this.slidesOutputData);
    }));
    this._changeCarousel$ = this.carouselService.getChangeState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.change.emit(this.slidesOutputData);
    }));
    this._changedCarousel$ = this.carouselService.getChangeState().pipe(switchMap((value) => {
      const changedPosition = of(value).pipe(filter(() => value.property.name === "position"), switchMap(() => from(this.slidesData)), skip(value.property.value), take(this.carouselService.settings.items), map((slide) => {
        const clonedIdPrefix = this.carouselService.clonedIdPrefix;
        const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
        return __spreadProps(__spreadValues({}, slide), {
          id,
          isActive: true
        });
      }), toArray(), map((slides) => {
        return {
          slides,
          startPosition: this.carouselService.relative(value.property.value)
        };
      }));
      return merge(changedPosition);
    }), tap((slidesData) => {
      this.gatherTranslatedData();
      this.changed.emit(slidesData.slides.length ? slidesData : this.slidesOutputData);
    }));
    this._draggingCarousel$ = this.carouselService.getDragState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.dragging.emit({
        dragging: true,
        data: this.slidesOutputData
      });
    }), switchMap(() => this.carouselService.getDraggedState().pipe(map(() => !!this.carouselService.is("animating")))), switchMap((anim) => {
      if (anim) {
        return this.carouselService.getTranslatedState().pipe(first());
      } else {
        return of("not animating");
      }
    }), tap(() => {
      this.dragging.emit({
        dragging: false,
        data: this.slidesOutputData
      });
    }));
    this._carouselMerge$ = merge(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
    this._allObservSubscription = this._carouselMerge$.subscribe(() => {
    });
  }
  /**
   * Init subscription to resize event and attaches handler for this event
   */
  _winResizeWatcher() {
    if (Object.keys(this.carouselService._options.responsive).length) {
      this.resizeSubscription = this.resizeService.onResize$.pipe(filter(() => this.carouselWindowWidth !== this.el.nativeElement.querySelector(".owl-carousel").clientWidth), delay(this.carouselService.settings.responsiveRefreshRate)).subscribe(() => {
        this.carouselService.onResize(this.el.nativeElement.querySelector(".owl-carousel").clientWidth);
        this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
      });
    }
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
   * Handler for click event, attached to next button
   */
  next() {
    if (!this.carouselLoaded)
      return;
    this.navigationService.next(this.carouselService.settings.navSpeed);
  }
  /**
   * Handler for click event, attached to prev button
   */
  prev() {
    if (!this.carouselLoaded)
      return;
    this.navigationService.prev(this.carouselService.settings.navSpeed);
  }
  /**
   * Handler for click event, attached to dots
   */
  moveByDot(dotId) {
    if (!this.carouselLoaded)
      return;
    this.navigationService.moveByDot(dotId);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id fragment of url
   */
  to(id) {
    if (!this.carouselLoaded)
      return;
    this.navigationService.toSlideById(id);
  }
  /**
   * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
   */
  gatherTranslatedData() {
    let startPosition;
    const clonedIdPrefix = this.carouselService.clonedIdPrefix;
    const activeSlides = this.slidesData.filter((slide) => slide.isActive === true).map((slide) => {
      const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
      return {
        id,
        width: slide.width,
        marginL: slide.marginL,
        marginR: slide.marginR,
        center: slide.isCentered
      };
    });
    startPosition = this.carouselService.relative(this.carouselService.current());
    this.slidesOutputData = {
      startPosition,
      slides: activeSlides
    };
  }
  /**
   * Starts pausing
   */
  startPausing() {
    this.autoplayService.startPausing();
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayML() {
    this.autoplayService.startPlayingMouseLeave();
  }
  /**
   * Starts playing after touch ends
   */
  startPlayTE() {
    this.autoplayService.startPlayingTouchEnd();
  }
  stopAutoplay() {
    this.autoplayService.isAutoplayStopped = true;
    this.autoplayService.stop();
  }
  startAutoplay() {
    this.autoplayService.isAutoplayStopped = false;
    this.autoplayService.play();
  }
  static \u0275fac = function CarouselComponent_Factory(t) {
    return new (t || _CarouselComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ResizeService), \u0275\u0275directiveInject(CarouselService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(AutoplayService), \u0275\u0275directiveInject(LazyLoadService), \u0275\u0275directiveInject(AnimateService), \u0275\u0275directiveInject(AutoHeightService), \u0275\u0275directiveInject(HashService), \u0275\u0275directiveInject(OwlLogger), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselComponent,
    selectors: [["owl-carousel-o"]],
    contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CarouselSlideDirective, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slides = _t);
      }
    },
    hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
          return ctx.onVisibilityChange($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      options: "options"
    },
    outputs: {
      translated: "translated",
      dragging: "dragging",
      change: "change",
      changed: "changed",
      initialized: "initialized"
    },
    features: [\u0275\u0275ProvidersFeature([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService]), \u0275\u0275NgOnChangesFeature],
    decls: 4,
    vars: 9,
    consts: [["owlCarousel", ""], [1, "owl-carousel", "owl-theme", 3, "mouseover", "mouseleave", "touchstart", "touchend", "ngClass"], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "click", "ngClass", "innerHTML"], [1, "owl-next", 3, "click", "ngClass", "innerHTML"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "click", "ngClass"], [3, "innerHTML"]],
    template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPausing());
        })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPlayML());
        })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPausing());
        })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPlayTE());
        });
        \u0275\u0275template(2, CarouselComponent_div_2_Template, 2, 6, "div", 2)(3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(3, _c3, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.carouselLoaded);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.slides.toArray().length);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, StageComponent],
    styles: [".owl-theme[_ngcontent-%COMP%]{display:block}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "owl-carousel-o",
      template: `
    <div class="owl-carousel owl-theme" #owlCarousel
      [ngClass]="{'owl-rtl': owlDOMData?.rtl,
                  'owl-loaded': owlDOMData?.isLoaded,
                  'owl-responsive': owlDOMData?.isResponsive,
                  'owl-drag': owlDOMData?.isMouseDragable,
                  'owl-grab': owlDOMData?.isGrab}"
      (mouseover)="startPausing()"
      (mouseleave)="startPlayML()"
      (touchstart)="startPausing()"
      (touchend)="startPlayTE()">

      <div *ngIf="carouselLoaded" class="owl-stage-outer">
        <owl-stage [owlDraggable]="{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}"
                    [stageData]="stageData"
                    [slidesData]="slidesData"></owl-stage>
      </div> <!-- /.owl-stage-outer -->
      <ng-container *ngIf="slides.toArray().length">
        <div class="owl-nav" [ngClass]="{'disabled': navData?.disabled}">
          <div class="owl-prev" [ngClass]="{'disabled': navData?.prev?.disabled}" (click)="prev()" [innerHTML]="navData?.prev?.htmlText"></div>
          <div class="owl-next" [ngClass]="{'disabled': navData?.next?.disabled}" (click)="next()" [innerHTML]="navData?.next?.htmlText"></div>
        </div> <!-- /.owl-nav -->
        <div class="owl-dots" [ngClass]="{'disabled': dotsData?.disabled}">
          <div *ngFor="let dot of dotsData?.dots" class="owl-dot" [ngClass]="{'active': dot.active, 'owl-dot-text': dot.showInnerContent}" (click)="moveByDot(dot.id)">
            <span [innerHTML]="dot.innerContent"></span>
          </div>
        </div> <!-- /.owl-dots -->
      </ng-container>
    </div> <!-- /.owl-carousel owl-loaded -->
  `,
      providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".owl-theme{display:block}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ResizeService
  }, {
    type: CarouselService
  }, {
    type: NavigationService
  }, {
    type: AutoplayService
  }, {
    type: LazyLoadService
  }, {
    type: AnimateService
  }, {
    type: AutoHeightService
  }, {
    type: HashService
  }, {
    type: OwlLogger
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT2]
    }]
  }], {
    slides: [{
      type: ContentChildren,
      args: [CarouselSlideDirective]
    }],
    translated: [{
      type: Output
    }],
    dragging: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    changed: [{
      type: Output
    }],
    initialized: [{
      type: Output
    }],
    options: [{
      type: Input
    }],
    onVisibilityChange: [{
      type: HostListener,
      args: ["document:visibilitychange", ["$event"]]
    }]
  });
})();
var OwlRouterLinkDirective = class _OwlRouterLinkDirective {
  router;
  route;
  // TODO(issue/24571): remove '!'.
  queryParams;
  // TODO(issue/24571): remove '!'.
  fragment;
  // TODO(issue/24571): remove '!'.
  queryParamsHandling;
  // TODO(issue/24571): remove '!'.
  preserveFragment;
  // TODO(issue/24571): remove '!'.
  skipLocationChange;
  // TODO(issue/24571): remove '!'.
  replaceUrl;
  stopLink = false;
  commands = [];
  // TODO(issue/24571): remove '!'.
  preserve;
  constructor(router, route, tabIndex, renderer, el) {
    this.router = router;
    this.route = route;
    if (tabIndex == null) {
      renderer.setAttribute(el.nativeElement, "tabindex", "0");
    }
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  /**
   * @deprecated 4.0.0 use `queryParamsHandling` instead.
   */
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  onClick() {
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    if (this.stopLink) {
      return false;
    }
    this.router.navigateByUrl(this.urlTree, extras);
    return true;
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
  static \u0275fac = function OwlRouterLinkDirective_Factory(t) {
    return new (t || _OwlRouterLinkDirective)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OwlRouterLinkDirective,
    selectors: [["", "owlRouterLink", "", 5, "a"]],
    hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      stopLink: "stopLink",
      owlRouterLink: "owlRouterLink",
      preserveQueryParams: "preserveQueryParams"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a)[owlRouterLink]"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var OwlRouterLinkWithHrefDirective = class _OwlRouterLinkWithHrefDirective {
  router;
  route;
  locationStrategy;
  // TODO(issue/24571): remove '!'.
  target;
  // TODO(issue/24571): remove '!'.
  queryParams;
  // TODO(issue/24571): remove '!'.
  fragment;
  // TODO(issue/24571): remove '!'.
  queryParamsHandling;
  // TODO(issue/24571): remove '!'.
  preserveFragment;
  // TODO(issue/24571): remove '!'.
  skipLocationChange;
  // TODO(issue/24571): remove '!'.
  replaceUrl;
  stopLink = false;
  commands = [];
  subscription;
  // TODO(issue/24571): remove '!'.
  preserve;
  // the url displayed on the anchor element.
  // TODO(issue/24571): remove '!'.
  href;
  constructor(router, route, locationStrategy) {
    this.router = router;
    this.route = route;
    this.locationStrategy = locationStrategy;
    this.subscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.updateTargetUrlAndHref();
      }
    });
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  ngOnChanges(changes) {
    this.updateTargetUrlAndHref();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClick(button, ctrlKey, metaKey, shiftKey) {
    if (button !== 0 || ctrlKey || metaKey || shiftKey) {
      return true;
    }
    if (typeof this.target === "string" && this.target !== "_self") {
      return true;
    }
    if (this.stopLink) {
      return false;
    }
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    this.router.navigateByUrl(this.urlTree, extras);
    return false;
  }
  updateTargetUrlAndHref() {
    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
  static \u0275fac = function OwlRouterLinkWithHrefDirective_Factory(t) {
    return new (t || _OwlRouterLinkWithHrefDirective)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OwlRouterLinkWithHrefDirective,
    selectors: [["a", "owlRouterLink", ""]],
    hostVars: 2,
    hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("href", ctx.href, \u0275\u0275sanitizeUrl);
        \u0275\u0275attribute("target", ctx.target);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      stopLink: "stopLink",
      owlRouterLink: "owlRouterLink",
      preserveQueryParams: "preserveQueryParams"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkWithHrefDirective, [{
    type: Directive,
    args: [{
      selector: "a[owlRouterLink]"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    href: [{
      type: HostBinding
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.metaKey", "$event.shiftKey"]]
    }]
  });
})();
function attrBoolValue(s) {
  return s === "" || !!s;
}
var CarouselModule = class _CarouselModule {
  static \u0275fac = function CarouselModule_Factory(t) {
    return new (t || _CarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CarouselModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule
        // BrowserAnimationsModule, // there's an issue with this import while using lazy loading of module consuming this library. I don't remove it because it could be needed during future enhancement of this lib.
        // RouterModule.forChild(routes)
      ],
      declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
    }]
  }], null, null);
})();

// src/app/components/objectives/objectives.component.ts
function ObjectivesComponent_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const objective_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate("src", objective_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(objective_r1.title);
  }
}
function ObjectivesComponent_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ObjectivesComponent_7_ng_template_0_Template, 5, 2, "ng-template", 6);
  }
}
var _ObjectivesComponent = class _ObjectivesComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        420: {
          items: 2
        },
        576: {
          items: 3
        },
        768: {
          items: 4
        },
        1024: {
          items: 5
        }
      },
      nav: true
    };
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
};
_ObjectivesComponent.\u0275fac = function ObjectivesComponent_Factory(t) {
  return new (t || _ObjectivesComponent)(\u0275\u0275directiveInject(DataService));
};
_ObjectivesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectivesComponent, selectors: [["app-objectives"]], decls: 8, vars: 2, consts: [["id", "objectives", 1, "objectives-section"], [1, "top"], ["src", "../../../assets/images/infra2.png", "alt", "", 1, "infra2"], [1, "objectives-title"], [1, "carousel", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["alt", "img", 3, "src"], [1, "caro-overlay"], [1, "after"]], template: function ObjectivesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h1");
    \u0275\u0275text(5, "Objectives");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "owl-carousel-o", 4);
    \u0275\u0275template(7, ObjectivesComponent_7_Template, 1, 0, null, 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx.customOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.data.objectives);
  }
}, dependencies: [NgForOf, CarouselComponent, CarouselSlideDirective], styles: ['\n\n.objectives-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 120vh;\n  flex-direction: column;\n  gap: 4rem;\n  background-color: #bfded9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.objectives-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.objectives-section[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n.objectives-section[_ngcontent-%COMP%]   .infra2[_ngcontent-%COMP%] {\n  width: 300px;\n  position: absolute;\n  top: 3rem;\n  left: 0;\n}\n.objectives-section[_ngcontent-%COMP%]   .objectives-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4rem;\n  right: 0rem;\n  color: #18372f;\n  width: 300px !important;\n  font-size: 30px;\n  display: flex;\n  text-align: center;\n  justify-content: flex-start;\n  margin-bottom: 3rem;\n}\n.objectives-section[_ngcontent-%COMP%]   .objectives-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  width: fit-content;\n}\n.objectives-section[_ngcontent-%COMP%]   .objectives-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n  height: 3px;\n  background-color: #18372f;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 84%;\n  position: relative;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  height: 350px;\n  margin: 0;\n  padding: 0;\n  transition: transform 0.3s ease-in-out;\n  position: relative;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .caro-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  text-align: center;\n  color: rgb(208, 190, 169);\n  font-size: 18px;\n  font-weight: 500;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 20%;\n  background-color: #17372e;\n  transition: height 0.3s ease-in-out;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%]:hover {\n  height: 60%;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-carousel.owl-drag[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-stage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center !important;\n  gap: 1rem !important;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: calc(100% + 60px);\n  display: flex;\n  justify-content: space-between;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 45%;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: 26px;\n  height: 26px;\n  color: #18372f;\n  border-radius: 6px;\n  background-color: transparent;\n  border: 1.5px solid #18372f;\n  text-align: center;\n  line-height: 30px;\n  cursor: pointer;\n  font-size: 15px;\n  align-self: center;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]:hover, .objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #18372f;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%] {\n  left: -90px;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  right: -90px;\n}\n/*# sourceMappingURL=objectives.component.css.map */'] });
var ObjectivesComponent = _ObjectivesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectivesComponent, { className: "ObjectivesComponent", filePath: "src\\app\\components\\objectives\\objectives.component.ts", lineNumber: 11 });
})();

// src/app/components/footer/footer.component.ts
function FooterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7)(2, "img", 25);
    \u0275\u0275elementStart(3, "div", 9)(4, "h2", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.title);
  }
}
var _FooterComponent = class _FooterComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)(\u0275\u0275directiveInject(DataService));
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 35, vars: 1, consts: [["id", "directors", 1, "directors-section"], [1, "directors-overlay"], [1, "directors-title"], [1, "directors-content"], [1, "row1"], ["src", "../../../assets/images/leftlines.png", "alt", "", 1, "left-lines"], [1, "member-card"], [1, "card-overlay"], ["src", "../../../assets/images/image724.png", "alt", "Person Image", 1, "member1-image"], [1, "card-content"], [1, "member-name"], [1, "member-title"], ["src", "../../../assets/images/rightlines.png", "alt", "", 1, "right-lines"], [1, "row2"], ["class", "member-card", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "top-footer"], [1, "left-footer"], ["src", "../../../assets/images/lines.png", "alt", "img", 1, "footer-lines"], [1, "right-footer"], ["src", "../../../assets/images/path501.png", "alt", "img", 1, "fund-img"], ["src", "../../../assets/images/path176.png", "alt", "img", 1, "vision-img"], [1, "info"], [1, "bottom-footer"], ["src", "../../../assets/images/path508.png", "alt", "", 1, "infra-footer"], ["alt", "Person Image", 1, "member-image", 3, "src"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "h1");
    \u0275\u0275text(4, "Board of Directors");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
    \u0275\u0275element(7, "img", 5);
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275element(9, "div", 7)(10, "img", 8);
    \u0275\u0275elementStart(11, "div", 9)(12, "h2", 10);
    \u0275\u0275text(13, "HE Faisal Alibrahim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 11);
    \u0275\u0275text(15, "Chair man");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275template(18, FooterComponent_div_18_Template, 8, 3, "div", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "footer", 15)(20, "div", 16)(21, "div", 17);
    \u0275\u0275element(22, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 19);
    \u0275\u0275element(24, "img", 20)(25, "img", 21);
    \u0275\u0275elementStart(26, "div", 22)(27, "p");
    \u0275\u0275text(28, "Contact: info--infra.gov.sa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "All rights reserved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "National Infrastructure Fund 2024");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 23);
    \u0275\u0275element(34, "img", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx.data.members);
  }
}, dependencies: [NgForOf], styles: ['\n\n.directors-section[_ngcontent-%COMP%] {\n  background-color: #17372e;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n  padding: 12rem 0;\n}\n.directors-overlay[_ngcontent-%COMP%] {\n  background-image: url("./media/overlay.png");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\n.directors-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 20;\n  display: flex;\n  gap: 5rem;\n  flex-direction: column;\n  align-items: center;\n}\n.directors-title[_ngcontent-%COMP%] {\n  z-index: 10000;\n  position: absolute;\n  top: 5rem;\n  right: 0rem;\n  color: rgb(208, 190, 169);\n  width: 360px;\n  font-size: 23px;\n  display: flex;\n  text-align: center;\n  justify-content: flex-start;\n  margin-bottom: 3rem;\n}\n.directors-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  width: fit-content;\n}\n.directors-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  height: 3px;\n  background-color: rgb(208, 190, 169);\n}\n.row1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n}\n.row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 30px;\n  margin-top: 7rem;\n}\n.row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  width: 500px;\n  height: 30px;\n}\n.member-card[_ngcontent-%COMP%] {\n  background-color: #234d42;\n  width: 190px;\n  height: 190px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  position: relative;\n  transition: transform 0.3s ease-in-out;\n}\n.card-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(218, 204, 187, 0),\n      rgba(61, 60, 59, 0.4));\n  border-radius: 10px;\n  position: absolute;\n  width: 100%;\n  height: 30%;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n.member1-image[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  object-fit: cover;\n  margin-top: 10px;\n}\n.member-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-top: 10px;\n  position: relative;\n  border: 1px solid rgb(208, 190, 169);\n}\n.member-image[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -10px;\n  right: -10px;\n  width: 20px;\n  height: 20px;\n  background-color: rgb(206, 188, 166);\n  border-radius: 50%;\n  z-index: 120000;\n}\n.card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-content[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: rgb(208, 190, 169);\n}\n.card-content[_ngcontent-%COMP%]   .member-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: white;\n}\n.row2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 1rem;\n  flex-wrap: nowrap;\n}\n@media (min-width: 320px) {\n  .row1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n  .row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .row2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 3rem;\n  }\n}\n@media (min-width: 576px) {\n  .row1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0;\n  }\n  .row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n    display: block;\n    width: 180px;\n    height: 30px;\n    margin-top: 7rem;\n  }\n  .row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 3rem;\n    width: 180px;\n    height: 30px;\n  }\n  .row2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 5rem;\n    padding: 0 5rem;\n  }\n}\n@media (min-width: 768px) {\n  .row1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0;\n  }\n  .row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n    display: block;\n    width: 280px;\n    height: 30px;\n    margin-top: 7rem;\n  }\n  .row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 3rem;\n    width: 280px;\n    height: 30px;\n  }\n  .row2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap !important;\n    justify-content: center;\n    gap: 5rem !important;\n    padding: 0 5rem;\n  }\n}\n@media (min-width: 992px) {\n  .row1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0;\n  }\n  .row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n    display: block;\n    width: 400px;\n    height: 30px;\n    margin-top: 7rem;\n  }\n  .row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 3rem;\n    width: 400px;\n    height: 30px;\n  }\n  .row2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap !important;\n    justify-content: center;\n    gap: 1rem !important;\n    padding: 0rem 1rem;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: #17372e;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 2rem;\n  padding-right: 8rem;\n}\n.top-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.top-footer[_ngcontent-%COMP%]   .fund-img[_ngcontent-%COMP%], .top-footer[_ngcontent-%COMP%]   .vision-img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 50px;\n  margin-right: 3rem;\n}\n.footer-lines[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n}\n.right-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 2rem;\n}\n.bottom-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-right: 2rem;\n}\n.bottom-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.info[_ngcontent-%COMP%] {\n  display: inline;\n  color: rgb(208, 190, 169);\n  font-size: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px;\n  padding: 0;\n}\n@media (min-width: 320px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-right: 0rem;\n  }\n  .top-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .directors-title[_ngcontent-%COMP%] {\n    top: 2rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 360px !important;\n    font-size: 18px;\n    justify-content: center;\n    margin-bottom: 6rem;\n  }\n  .directors-title[_ngcontent-%COMP%]:after {\n    width: 62%;\n    bottom: 20px;\n  }\n  .right-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding-top: 1rem;\n    gap: 2rem;\n    justify-content: space-between;\n  }\n  .footer-lines[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .infra-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .inf[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .vision-img[_ngcontent-%COMP%] {\n    order: 2;\n    margin-right: 0rem !important;\n  }\n  .fund-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 0rem !important;\n    order: 3;\n  }\n}\n@media (min-width: 576px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-right: 0rem !important;\n  }\n  .directors-title[_ngcontent-%COMP%] {\n    top: 2rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 360px !important;\n    font-size: 20px;\n    justify-content: center;\n    margin-bottom: 6rem;\n  }\n  .directors-title[_ngcontent-%COMP%]:after {\n    width: 70%;\n    bottom: 20px;\n  }\n  .right-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding-top: 1rem;\n    gap: 2rem;\n    justify-content: space-between;\n  }\n  .footer-lines[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .infra-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .top-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .info[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .vision-img[_ngcontent-%COMP%] {\n    order: 2;\n    margin-right: 3rem;\n  }\n  .fund-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 3rem;\n    order: 1;\n  }\n}\n@media (min-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-right: 8rem;\n  }\n  .directors-title[_ngcontent-%COMP%] {\n    top: 2rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 360px !important;\n    font-size: 23px;\n    justify-content: flex-start;\n  }\n  .directors-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    bottom: 20px;\n  }\n  .right-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding-top: 0rem;\n    gap: 2rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .footer-lines[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .infra-footer[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .top-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .info[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .vision-img[_ngcontent-%COMP%] {\n    order: 2;\n    margin-right: 3rem;\n  }\n  .fund-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 3rem;\n    order: 1;\n  }\n}\n@media (min-width: 992px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-right: 8rem;\n  }\n  .directors-title[_ngcontent-%COMP%] {\n    top: 2rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 360px !important;\n    font-size: 24px;\n    justify-content: flex-start;\n  }\n  .directors-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    bottom: 20px;\n  }\n  .right-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding-top: 0rem;\n    gap: 2rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .footer-lines[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .infra-footer[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .top-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .fund-img[_ngcontent-%COMP%], .vision-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 3rem;\n  }\n  .info[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .vision-img[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .fund-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 3rem;\n    order: 1;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 10 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "INFRA";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header")(1, "app-about-the-fund")(2, "app-objectives")(3, "app-targeted-sectors")(4, "app-news")(5, "app-footer");
  }
}, dependencies: [HeaderComponent, AboutTheFundComponent, TargetedSectorsComponent, NewsComponent, ObjectivesComponent, FooterComponent] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 8 });
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-R5DIWS3N.js");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var _Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
};
_Platform.\u0275fac = function Platform_Factory(t) {
  return new (t || _Platform)(\u0275\u0275inject(PLATFORM_ID));
};
_Platform.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Platform,
  factory: _Platform.\u0275fac,
  providedIn: "root"
});
var Platform = _Platform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _PlatformModule = class _PlatformModule {
};
_PlatformModule.\u0275fac = function PlatformModule_Factory(t) {
  return new (t || _PlatformModule)();
};
_PlatformModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PlatformModule
});
_PlatformModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var PlatformModule = _PlatformModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var SPACE = 32;
var META = 91;
var MAC_META = 224;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var _MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
};
_MutationObserverFactory.\u0275fac = function MutationObserverFactory_Factory(t) {
  return new (t || _MutationObserverFactory)();
};
_MutationObserverFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MutationObserverFactory,
  factory: _MutationObserverFactory.\u0275fac,
  providedIn: "root"
});
var MutationObserverFactory = _MutationObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ContentObserver = class _ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    this._observedElements = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    if (!this._observedElements.has(element)) {
      const stream = new Subject();
      const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }
      this._observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this._observedElements.get(element).count++;
    }
    return this._observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
};
_ContentObserver.\u0275fac = function ContentObserver_Factory(t) {
  return new (t || _ContentObserver)(\u0275\u0275inject(MutationObserverFactory));
};
_ContentObserver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ContentObserver,
  factory: _ContentObserver.\u0275fac,
  providedIn: "root"
});
var ContentObserver = _ContentObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MutationObserverFactory
  }], null);
})();
var _CdkObserveContent = class _CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef, _ngZone) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this.event = new EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._ngZone.runOutsideAngular(() => {
      this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
    });
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_CdkObserveContent.\u0275fac = function CdkObserveContent_Factory(t) {
  return new (t || _CdkObserveContent)(\u0275\u0275directiveInject(ContentObserver), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
};
_CdkObserveContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkObserveContentDisabled", "disabled", booleanAttribute],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature]
});
var CdkObserveContent = _CdkObserveContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent",
      standalone: true
    }]
  }], () => [{
    type: ContentObserver
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var _ObserversModule = class _ObserversModule {
};
_ObserversModule.\u0275fac = function ObserversModule_Factory(t) {
  return new (t || _ObserversModule)();
};
_ObserversModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ObserversModule
});
_ObserversModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MutationObserverFactory]
});
var ObserversModule = _ObserversModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/layout.mjs
var _LayoutModule = class _LayoutModule {
};
_LayoutModule.\u0275fac = function LayoutModule_Factory(t) {
  return new (t || _LayoutModule)();
};
_LayoutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LayoutModule
});
_LayoutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var LayoutModule = _LayoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var _MediaMatcher = class _MediaMatcher {
  constructor(_platform, _nonce) {
    this._platform = _platform;
    this._nonce = _nonce;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
};
_MediaMatcher.\u0275fac = function MediaMatcher_Factory(t) {
  return new (t || _MediaMatcher)(\u0275\u0275inject(Platform), \u0275\u0275inject(CSP_NONCE, 8));
};
_MediaMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MediaMatcher,
  factory: _MediaMatcher.\u0275fac,
  providedIn: "root"
});
var MediaMatcher = _MediaMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var _BreakpointObserver = class _BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    this._queries = /* @__PURE__ */ new Map();
    this._destroySubject = new Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
};
_BreakpointObserver.\u0275fac = function BreakpointObserver_Factory(t) {
  return new (t || _BreakpointObserver)(\u0275\u0275inject(MediaMatcher), \u0275\u0275inject(NgZone));
};
_BreakpointObserver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _BreakpointObserver,
  factory: _BreakpointObserver.\u0275fac,
  providedIn: "root"
});
var BreakpointObserver = _BreakpointObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MediaMatcher
  }, {
    type: NgZone
  }], null);
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId2 = 0;
var _AriaDescriber = class _AriaDescriber {
  constructor(_document2, _platform) {
    this._platform = _platform;
    this._messageRegistry = /* @__PURE__ */ new Map();
    this._messagesContainer = null;
    this._id = `${nextId2++}`;
    this._document = _document2;
    this._id = inject(APP_ID) + "-" + nextId2++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
};
_AriaDescriber.\u0275fac = function AriaDescriber_Factory(t) {
  return new (t || _AriaDescriber)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform));
};
_AriaDescriber.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AriaDescriber,
  factory: _AriaDescriber.\u0275fac,
  providedIn: "root"
});
var AriaDescriber = _AriaDescriber;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId2++}`;
  }
}
var _InteractivityChecker = class _InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
};
_InteractivityChecker.\u0275fac = function InteractivityChecker_Factory(t) {
  return new (t || _InteractivityChecker)(\u0275\u0275inject(Platform));
};
_InteractivityChecker.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InteractivityChecker,
  factory: _InteractivityChecker.\u0275fac,
  providedIn: "root"
});
var InteractivityChecker = _InteractivityChecker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document2, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document2;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe(take(1)).subscribe(fn);
    }
  }
};
var _FocusTrapFactory = class _FocusTrapFactory {
  constructor(_checker, _ngZone, _document2) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document2;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
  }
};
_FocusTrapFactory.\u0275fac = function FocusTrapFactory_Factory(t) {
  return new (t || _FocusTrapFactory)(\u0275\u0275inject(InteractivityChecker), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT));
};
_FocusTrapFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusTrapFactory,
  factory: _FocusTrapFactory.\u0275fac,
  providedIn: "root"
});
var FocusTrapFactory = _FocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _CdkTrapFocus = class _CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory, _document2) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._previouslyFocusedElement = null;
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
};
_CdkTrapFocus.\u0275fac = function CdkTrapFocus_Factory(t) {
  return new (t || _CdkTrapFocus)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT));
};
_CdkTrapFocus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: [InputFlags.HasDecoratorInputTransform, "cdkTrapFocus", "enabled", booleanAttribute],
    autoCapture: [InputFlags.HasDecoratorInputTransform, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
  },
  exportAs: ["cdkTrapFocus"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
});
var CdkTrapFocus = _CdkTrapFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var ConfigurableFocusTrap = class extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document2, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document2, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var EventListenerFocusTrapInertStrategy = class {
  constructor() {
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var _FocusTrapManager = class _FocusTrapManager {
  constructor() {
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
};
_FocusTrapManager.\u0275fac = function FocusTrapManager_Factory(t) {
  return new (t || _FocusTrapManager)();
};
_FocusTrapManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusTrapManager,
  factory: _FocusTrapManager.\u0275fac,
  providedIn: "root"
});
var FocusTrapManager = _FocusTrapManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document2, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document2;
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }
};
_ConfigurableFocusTrapFactory.\u0275fac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || _ConfigurableFocusTrapFactory)(\u0275\u0275inject(InteractivityChecker), \u0275\u0275inject(NgZone), \u0275\u0275inject(FocusTrapManager), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(FOCUS_TRAP_INERT_STRATEGY, 8));
};
_ConfigurableFocusTrapFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ConfigurableFocusTrapFactory,
  factory: _ConfigurableFocusTrapFactory.\u0275fac,
  providedIn: "root"
});
var ConfigurableFocusTrapFactory = _ConfigurableFocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }], null);
})();
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _InputModalityDetector = class _InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document2, options) {
    this._platform = _platform;
    this._mostRecentTarget = null;
    this._modality = new BehaviorSubject(null);
    this._lastTouchMs = 0;
    this._onKeydown = (event) => {
      if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next("keyboard");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onMousedown = (event) => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onTouchstart = (event) => {
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next("keyboard");
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next("touch");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document2.addEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
        document2.addEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
        document2.addEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
    }
  }
};
_InputModalityDetector.\u0275fac = function InputModalityDetector_Factory(t) {
  return new (t || _InputModalityDetector)(\u0275\u0275inject(Platform), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};
_InputModalityDetector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InputModalityDetector,
  factory: _InputModalityDetector.\u0275fac,
  providedIn: "root"
});
var InputModalityDetector = _InputModalityDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }], null);
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var _LiveAnnouncer = class _LiveAnnouncer {
  constructor(elementToken, _ngZone, _document2, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._document = _document2;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
};
_LiveAnnouncer.\u0275fac = function LiveAnnouncer_Factory(t) {
  return new (t || _LiveAnnouncer)(\u0275\u0275inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};
_LiveAnnouncer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _LiveAnnouncer,
  factory: _LiveAnnouncer.\u0275fac,
  providedIn: "root"
});
var LiveAnnouncer = _LiveAnnouncer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkAriaLive = class _CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = "polite";
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
_CdkAriaLive.\u0275fac = function CdkAriaLive_Factory(t) {
  return new (t || _CdkAriaLive)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LiveAnnouncer), \u0275\u0275directiveInject(ContentObserver), \u0275\u0275directiveInject(NgZone));
};
_CdkAriaLive.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: [InputFlags.None, "cdkAriaLive", "politeness"],
    duration: [InputFlags.None, "cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"],
  standalone: true
});
var CdkAriaLive = _CdkAriaLive;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: ContentObserver
  }, {
    type: NgZone
  }], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _FocusMonitor = class _FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, document2, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    this._origin = null;
    this._windowFocused = false;
    this._originFromTouchInteraction = false;
    this._elementInfo = /* @__PURE__ */ new Map();
    this._monitoredElementCount = 0;
    this._rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    this._windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    this._stopInputModalityDetector = new Subject();
    this._rootNodeFocusAndBlurListener = (event) => {
      const target = _getEventTarget(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === "focus") {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document2;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._getDocument().activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
};
_FocusMonitor.\u0275fac = function FocusMonitor_Factory(t) {
  return new (t || _FocusMonitor)(\u0275\u0275inject(NgZone), \u0275\u0275inject(Platform), \u0275\u0275inject(InputModalityDetector), \u0275\u0275inject(DOCUMENT, 8), \u0275\u0275inject(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};
_FocusMonitor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusMonitor,
  factory: _FocusMonitor.\u0275fac,
  providedIn: "root"
});
var FocusMonitor = _FocusMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: InputModalityDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkMonitorFocus = class _CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
};
_CdkMonitorFocus.\u0275fac = function CdkMonitorFocus_Factory(t) {
  return new (t || _CdkMonitorFocus)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusMonitor));
};
_CdkMonitorFocus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"],
  standalone: true
});
var CdkMonitorFocus = _CdkMonitorFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var _HighContrastModeDetector = class _HighContrastModeDetector {
  constructor(_platform, document2) {
    this._platform = _platform;
    this._document = document2;
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
};
_HighContrastModeDetector.\u0275fac = function HighContrastModeDetector_Factory(t) {
  return new (t || _HighContrastModeDetector)(\u0275\u0275inject(Platform), \u0275\u0275inject(DOCUMENT));
};
_HighContrastModeDetector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HighContrastModeDetector,
  factory: _HighContrastModeDetector.\u0275fac,
  providedIn: "root"
});
var HighContrastModeDetector = _HighContrastModeDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _A11yModule = class _A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
};
_A11yModule.\u0275fac = function A11yModule_Factory(t) {
  return new (t || _A11yModule)(\u0275\u0275inject(HighContrastModeDetector));
};
_A11yModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _A11yModule
});
_A11yModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ObserversModule]
});
var A11yModule = _A11yModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }], null);
})();

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var _Directionality = class _Directionality {
  constructor(_document2) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document2) {
      const bodyDir = _document2.body ? _document2.body.dir : null;
      const htmlDir = _document2.documentElement ? _document2.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Directionality.\u0275fac = function Directionality_Factory(t) {
  return new (t || _Directionality)(\u0275\u0275inject(DIR_DOCUMENT, 8));
};
_Directionality.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Directionality,
  factory: _Directionality.\u0275fac,
  providedIn: "root"
});
var Directionality = _Directionality;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var _Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Dir.\u0275fac = function Dir_Factory(t) {
  return new (t || _Dir)();
};
_Dir.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: Directionality,
    useExisting: _Dir
  }])]
});
var Dir = _Dir;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _BidiModule = class _BidiModule {
};
_BidiModule.\u0275fac = function BidiModule_Factory(t) {
  return new (t || _BidiModule)();
};
_BidiModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _BidiModule
});
_BidiModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var BidiModule = _BidiModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/cdk.mjs
var VERSION3 = new Version("17.3.10");

// node_modules/@angular/material/fesm2022/core.mjs
var _c02 = ["*", [["mat-option"], ["ng-container"]]];
var _c12 = ["*", "mat-option, ng-container"];
var _c22 = ["text"];
var _c32 = [[["mat-icon"]], "*"];
var _c42 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.group.label, ")");
  }
}
var _c52 = ["mat-internal-form-field", ""];
var _c62 = ["*"];
var VERSION4 = new Version("17.3.10");
var _AnimationCurves = class _AnimationCurves {
};
_AnimationCurves.STANDARD_CURVE = "cubic-bezier(0.4,0.0,0.2,1)";
_AnimationCurves.DECELERATION_CURVE = "cubic-bezier(0.0,0.0,0.2,1)";
_AnimationCurves.ACCELERATION_CURVE = "cubic-bezier(0.4,0.0,1,1)";
_AnimationCurves.SHARP_CURVE = "cubic-bezier(0.4,0.0,0.6,1)";
var AnimationCurves = _AnimationCurves;
var _AnimationDurations = class _AnimationDurations {
};
_AnimationDurations.COMPLEX = "375ms";
_AnimationDurations.ENTERING = "225ms";
_AnimationDurations.EXITING = "195ms";
var AnimationDurations = _AnimationDurations;
function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
  providedIn: "root",
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
var _MatCommonModule = class _MatCommonModule {
  constructor(highContrastModeDetector, _sanityChecks, _document2) {
    this._sanityChecks = _sanityChecks;
    this._document = _document2;
    this._hasDoneGlobalChecks = false;
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const platform = inject(Platform, {
          optional: true
        });
        if (this._checkIsEnabled("doctype")) {
          _checkDoctypeIsDefined(this._document);
        }
        if (this._checkIsEnabled("theme")) {
          _checkThemeIsPresent(this._document, !!platform?.isBrowser);
        }
        if (this._checkIsEnabled("version")) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */
  _checkIsEnabled(name) {
    if (_isTestEnvironment()) {
      return false;
    }
    if (typeof this._sanityChecks === "boolean") {
      return this._sanityChecks;
    }
    return !!this._sanityChecks[name];
  }
};
_MatCommonModule.\u0275fac = function MatCommonModule_Factory(t) {
  return new (t || _MatCommonModule)(\u0275\u0275inject(HighContrastModeDetector), \u0275\u0275inject(MATERIAL_SANITY_CHECKS, 8), \u0275\u0275inject(DOCUMENT));
};
_MatCommonModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatCommonModule
});
_MatCommonModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [BidiModule, BidiModule]
});
var MatCommonModule = _MatCommonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCommonModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule],
      exports: [BidiModule]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MATERIAL_SANITY_CHECKS]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.");
  }
}
function _checkThemeIsPresent(doc, isBrowser) {
  if (!doc.body || !isBrowser) {
    return;
  }
  const testElement = doc.createElement("div");
  testElement.classList.add("mat-theme-loaded-marker");
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement);
  if (computedStyle && computedStyle.display !== "none") {
    console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming");
  }
  testElement.remove();
}
function _checkCdkVersionMatch() {
  if (VERSION4.full !== VERSION3.full) {
    console.warn("The Angular Material version (" + VERSION4.full + ") does not match the Angular CDK version (" + VERSION3.full + ").\nPlease ensure the versions of these two packages exactly match.");
  }
}
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: MAT_DATE_LOCALE_FACTORY
});
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var DateAdapter = class {
  constructor() {
    this._localeChanges = new Subject();
    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first2, second) {
    return this.getYear(first2) - this.getYear(second) || this.getMonth(first2) - this.getMonth(second) || this.getDate(first2) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first2, second) {
    if (first2 && second) {
      let firstValid = this.isValid(first2);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first2, second);
      }
      return firstValid == secondValid;
    }
    return first2 == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var _NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  constructor(matDateLocale) {
    super();
    this.useUtcForDisplay = false;
    this._matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style2) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style2,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style2) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style2,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
};
_NativeDateAdapter.\u0275fac = function NativeDateAdapter_Factory(t) {
  return new (t || _NativeDateAdapter)(\u0275\u0275inject(MAT_DATE_LOCALE, 8));
};
_NativeDateAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NativeDateAdapter,
  factory: _NativeDateAdapter.\u0275fac
});
var NativeDateAdapter = _NativeDateAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_LOCALE]
    }]
  }], null);
})();
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    }
  }
};
var _NativeDateModule = class _NativeDateModule {
};
_NativeDateModule.\u0275fac = function NativeDateModule_Factory(t) {
  return new (t || _NativeDateModule)();
};
_NativeDateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NativeDateModule
});
_NativeDateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
});
var NativeDateModule = _NativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var _MatNativeDateModule = class _MatNativeDateModule {
};
_MatNativeDateModule.\u0275fac = function MatNativeDateModule_Factory(t) {
  return new (t || _MatNativeDateModule)();
};
_MatNativeDateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatNativeDateModule
});
_MatNativeDateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideNativeDateAdapter()]
});
var MatNativeDateModule = _MatNativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}
var _ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
};
_ShowOnDirtyErrorStateMatcher.\u0275fac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
  return new (t || _ShowOnDirtyErrorStateMatcher)();
};
_ShowOnDirtyErrorStateMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ShowOnDirtyErrorStateMatcher,
  factory: _ShowOnDirtyErrorStateMatcher.\u0275fac
});
var ShowOnDirtyErrorStateMatcher = _ShowOnDirtyErrorStateMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
    type: Injectable
  }], null, null);
})();
var _ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
};
_ErrorStateMatcher.\u0275fac = function ErrorStateMatcher_Factory(t) {
  return new (t || _ErrorStateMatcher)();
};
_ErrorStateMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ErrorStateMatcher,
  factory: _ErrorStateMatcher.\u0275fac,
  providedIn: "root"
});
var ErrorStateMatcher = _ErrorStateMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorStateMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MatLine = class _MatLine {
};
_MatLine.\u0275fac = function MatLine_Factory(t) {
  return new (t || _MatLine)();
};
_MatLine.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"],
  standalone: true
});
var MatLine = _MatLine;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatLineModule = class _MatLineModule {
};
_MatLineModule.\u0275fac = function MatLineModule_Factory(t) {
  return new (t || _MatLineModule)();
};
_MatLineModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatLineModule
});
_MatLineModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatLineModule = _MatLineModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatLine],
      exports: [MatLine, MatCommonModule]
    }]
  }], null, null);
})();
var RippleState;
(function(RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
    this.state = RippleState.HIDDEN;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var RippleEventManager = class {
  constructor() {
    this._events = /* @__PURE__ */ new Map();
    this._delegateEventHandler = (event) => {
      const target = _getEventTarget(event);
      if (target) {
        this._events.get(event.type)?.forEach((handlers, element) => {
          if (element === target || element.contains(target)) {
            handlers.forEach((handler) => handler.handleEvent(event));
          }
        });
      }
    };
  }
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var _RippleRenderer = class _RippleRenderer {
  constructor(_target, _ngZone, elementOrElementRef, _platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._isPointerDown = false;
    this._activeRipples = /* @__PURE__ */ new Map();
    this._pointerUpEventsRegistered = false;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => this._finishRippleTransition(rippleRef);
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach((type) => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach((ripple) => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger2 = this._triggerElement;
    if (trigger2) {
      pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger2, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => trigger2.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
_RippleRenderer._eventManager = new RippleEventManager();
var RippleRenderer = _RippleRenderer;
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var _MatRipple = class _MatRipple {
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger2) {
    this._trigger = trigger2;
    this._setupTriggerEventsIfEnabled();
  }
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    this.radius = 0;
    this._disabled = false;
    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
};
_MatRipple.\u0275fac = function MatRipple_Factory(t) {
  return new (t || _MatRipple)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatRipple.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-ripple-unbounded", ctx.unbounded);
    }
  },
  inputs: {
    color: [InputFlags.None, "matRippleColor", "color"],
    unbounded: [InputFlags.None, "matRippleUnbounded", "unbounded"],
    centered: [InputFlags.None, "matRippleCentered", "centered"],
    radius: [InputFlags.None, "matRippleRadius", "radius"],
    animation: [InputFlags.None, "matRippleAnimation", "animation"],
    disabled: [InputFlags.None, "matRippleDisabled", "disabled"],
    trigger: [InputFlags.None, "matRippleTrigger", "trigger"]
  },
  exportAs: ["matRipple"],
  standalone: true
});
var MatRipple = _MatRipple;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRipple, [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  });
})();
var _MatRippleModule = class _MatRippleModule {
};
_MatRippleModule.\u0275fac = function MatRippleModule_Factory(t) {
  return new (t || _MatRippleModule)();
};
_MatRippleModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatRippleModule
});
_MatRippleModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatRippleModule = _MatRippleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRipple],
      exports: [MatRipple, MatCommonModule]
    }]
  }], null, null);
})();
var _MatPseudoCheckbox = class _MatPseudoCheckbox {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    this.state = "unchecked";
    this.disabled = false;
    this.appearance = "full";
  }
};
_MatPseudoCheckbox.\u0275fac = function MatPseudoCheckbox_Factory(t) {
  return new (t || _MatPseudoCheckbox)(\u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatPseudoCheckbox.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 12,
  hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled",
    appearance: "appearance"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 0,
  vars: 0,
  template: function MatPseudoCheckbox_Template(rf, ctx) {
  },
  styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatPseudoCheckbox = _MatPseudoCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"'
      },
      standalone: true,
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();
var _MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
};
_MatPseudoCheckboxModule.\u0275fac = function MatPseudoCheckboxModule_Factory(t) {
  return new (t || _MatPseudoCheckboxModule)();
};
_MatPseudoCheckboxModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatPseudoCheckboxModule
});
_MatPseudoCheckboxModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule]
});
var MatPseudoCheckboxModule = _MatPseudoCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatPseudoCheckbox],
      exports: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var _uniqueOptgroupIdCounter = 0;
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var _MatOptgroup = class _MatOptgroup {
  constructor(parent) {
    this.disabled = false;
    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = parent?.inertGroups ?? false;
  }
};
_MatOptgroup.\u0275fac = function MatOptgroup_Factory(t) {
  return new (t || _MatOptgroup)(\u0275\u0275directiveInject(MAT_OPTION_PARENT_COMPONENT, 8));
};
_MatOptgroup.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatOptgroup,
  selectors: [["mat-optgroup"]],
  hostAttrs: [1, "mat-mdc-optgroup"],
  hostVars: 3,
  hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
    }
  },
  inputs: {
    label: "label",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  exportAs: ["matOptgroup"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_OPTGROUP,
    useExisting: _MatOptgroup
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c12,
  decls: 5,
  vars: 4,
  consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
  template: function MatOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementStart(0, "span", 0)(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275projection(4, 1);
    }
    if (rf & 2) {
      \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
      \u0275\u0275property("id", ctx._labelId);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.label, " ");
    }
  },
  styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color);font-family:var(--mat-optgroup-label-text-font);line-height:var(--mat-optgroup-label-text-line-height);font-size:var(--mat-optgroup-label-text-size);letter-spacing:var(--mat-optgroup-label-text-tracking);font-weight:var(--mat-optgroup-label-text-weight)}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;min-height:48px}.mat-mdc-optgroup-label:focus{outline:none}[dir=rtl] .mat-mdc-optgroup-label,.mat-mdc-optgroup-label[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatOptgroup = _MatOptgroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      standalone: true,
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color);font-family:var(--mat-optgroup-label-text-font);line-height:var(--mat-optgroup-label-text-line-height);font-size:var(--mat-optgroup-label-text-size);letter-spacing:var(--mat-optgroup-label-text-tracking);font-weight:var(--mat-optgroup-label-text-weight)}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;min-height:48px}.mat-mdc-optgroup-label:focus{outline:none}[dir=rtl] .mat-mdc-optgroup-label,.mat-mdc-optgroup-label[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }, {
      type: Optional
    }]
  }], {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _uniqueIdCounter = 0;
var MatOptionSelectionChange = class {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var _MatOption = class _MatOption {
  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */
  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */
  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /** Whether to display checkmark for single-selection. */
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  constructor(_element, _changeDetectorRef, _parent, group) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = "";
    this.id = `mat-option-${_uniqueIdCounter++}`;
    this.onSelectionChange = new EventEmitter();
    this._stateChanges = new Subject();
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  /** Selects the option. */
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Deselects the option. */
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Sets focus onto this option. */
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  /** Returns the correct tabindex for the option depending on disabled state. */
  // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
  // That's because `MatLegacyOption` use `MatOption` type in a few places such as
  // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Gets the host DOM element. */
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
};
_MatOption.\u0275fac = function MatOption_Factory(t) {
  return new (t || _MatOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_OPTION_PARENT_COMPONENT, 8), \u0275\u0275directiveInject(MAT_OPTGROUP, 8));
};
_MatOption.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatOption,
  selectors: [["mat-option"]],
  viewQuery: function MatOption_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c22, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._text = _t.first);
    }
  },
  hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
  hostVars: 11,
  hostBindings: function MatOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MatOption_click_HostBindingHandler() {
        return ctx._selectViaInteraction();
      })("keydown", function MatOption_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275hostProperty("id", ctx.id);
      \u0275\u0275attribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
      \u0275\u0275classProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
    }
  },
  inputs: {
    value: "value",
    id: "id",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  },
  exportAs: ["matOption"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c42,
  decls: 8,
  vars: 5,
  consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
  template: function MatOption_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c32);
      \u0275\u0275template(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
      \u0275\u0275projection(1);
      \u0275\u0275elementStart(2, "span", 2, 0);
      \u0275\u0275projection(4, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3)(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
      \u0275\u0275element(7, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.multiple ? 0 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(5, !ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(6, ctx.group && ctx.group._inert ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    }
  },
  dependencies: [MatPseudoCheckbox, MatRipple],
  styles: ['.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatOption = _MatOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-mdc-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }]
  }, {
    type: MatOptgroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTGROUP]
    }]
  }], {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  });
})();
var _MatOptionModule = class _MatOptionModule {
};
_MatOptionModule.\u0275fac = function MatOptionModule_Factory(t) {
  return new (t || _MatOptionModule)();
};
_MatOptionModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatOptionModule
});
_MatOptionModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule]
});
var MatOptionModule = _MatOptionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();
var eventListenerOptions = {
  capture: true
};
var rippleInteractionEvents = ["focus", "click", "mouseenter", "touchstart"];
var matRippleUninitialized = "mat-ripple-loader-uninitialized";
var matRippleClassName = "mat-ripple-loader-class-name";
var matRippleCentered = "mat-ripple-loader-centered";
var matRippleDisabled = "mat-ripple-loader-disabled";
var _MatRippleLoader = class _MatRippleLoader {
  constructor() {
    this._document = inject(DOCUMENT, {
      optional: true
    });
    this._animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    this._platform = inject(Platform);
    this._ngZone = inject(NgZone);
    this._hosts = /* @__PURE__ */ new Map();
    this._onInteraction = (event) => {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }
      const eventTarget = event.target;
      const element = eventTarget.closest(`[${matRippleUninitialized}]`);
      if (element) {
        this._createRipple(element);
      }
    };
    this._ngZone.runOutsideAngular(() => {
      for (const event of rippleInteractionEvents) {
        this._document?.addEventListener(event, this._onInteraction, eventListenerOptions);
      }
    });
  }
  ngOnDestroy() {
    const hosts = this._hosts.keys();
    for (const host of hosts) {
      this.destroyRipple(host);
    }
    for (const event of rippleInteractionEvents) {
      this._document?.removeEventListener(event, this._onInteraction, eventListenerOptions);
    }
  }
  /**
   * Configures the ripple that will be rendered by the ripple loader.
   *
   * Stores the given information about how the ripple should be configured on the host
   * element so that it can later be retrived & used when the ripple is actually created.
   */
  configureRipple(host, config) {
    host.setAttribute(matRippleUninitialized, "");
    if (config.className || !host.hasAttribute(matRippleClassName)) {
      host.setAttribute(matRippleClassName, config.className || "");
    }
    if (config.centered) {
      host.setAttribute(matRippleCentered, "");
    }
    if (config.disabled) {
      host.setAttribute(matRippleDisabled, "");
    }
  }
  /** Returns the ripple instance for the given host element. */
  getRipple(host) {
    const ripple = this._hosts.get(host);
    return ripple || this._createRipple(host);
  }
  /** Sets the disabled state on the ripple instance corresponding to the given host element. */
  setDisabled(host, disabled) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.disabled = disabled;
      return;
    }
    if (disabled) {
      host.setAttribute(matRippleDisabled, "");
    } else {
      host.removeAttribute(matRippleDisabled);
    }
  }
  /** Creates a MatRipple and appends it to the given element. */
  _createRipple(host) {
    if (!this._document) {
      return;
    }
    const existingRipple = this._hosts.get(host);
    if (existingRipple) {
      return existingRipple;
    }
    host.querySelector(".mat-ripple")?.remove();
    const rippleEl = this._document.createElement("span");
    rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
    host.append(rippleEl);
    const ripple = new MatRipple(new ElementRef(rippleEl), this._ngZone, this._platform, this._globalRippleOptions ? this._globalRippleOptions : void 0, this._animationMode ? this._animationMode : void 0);
    ripple._isInitialized = true;
    ripple.trigger = host;
    ripple.centered = host.hasAttribute(matRippleCentered);
    ripple.disabled = host.hasAttribute(matRippleDisabled);
    this.attachRipple(host, ripple);
    return ripple;
  }
  attachRipple(host, ripple) {
    host.removeAttribute(matRippleUninitialized);
    this._hosts.set(host, ripple);
  }
  destroyRipple(host) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.ngOnDestroy();
      this._hosts.delete(host);
    }
  }
};
_MatRippleLoader.\u0275fac = function MatRippleLoader_Factory(t) {
  return new (t || _MatRippleLoader)();
};
_MatRippleLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MatRippleLoader,
  factory: _MatRippleLoader.\u0275fac,
  providedIn: "root"
});
var MatRippleLoader = _MatRippleLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var __MatInternalFormField = class __MatInternalFormField {
};
__MatInternalFormField.\u0275fac = function _MatInternalFormField_Factory(t) {
  return new (t || __MatInternalFormField)();
};
__MatInternalFormField.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __MatInternalFormField,
  selectors: [["div", "mat-internal-form-field", ""]],
  hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
  hostVars: 2,
  hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
    }
  },
  inputs: {
    labelPosition: "labelPosition"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  attrs: _c52,
  ngContentSelectors: _c62,
  decls: 1,
  vars: 0,
  template: function _MatInternalFormField_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: [".mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-form-field{font-family:var(--mdc-form-field-label-text-font);line-height:var(--mdc-form-field-label-text-line-height);font-size:var(--mdc-form-field-label-text-size);font-weight:var(--mdc-form-field-label-text-weight);letter-spacing:var(--mdc-form-field-label-text-tracking);color:var(--mdc-form-field-label-text-color)}.mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}"],
  encapsulation: 2,
  changeDetection: 0
});
var _MatInternalFormField = __MatInternalFormField;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      standalone: true,
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-form-field{font-family:var(--mdc-form-field-label-text-font);line-height:var(--mdc-form-field-label-text-line-height);font-size:var(--mdc-form-field-label-text-size);font-weight:var(--mdc-form-field-label-text-weight);letter-spacing:var(--mdc-form-field-label-text-tracking);color:var(--mdc-form-field-label-text-color)}.mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/icon.mjs
var _c03 = ["*"];
var policy;
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        policy = ttWindow.trustedTypes.createPolicy("angular#components", {
          createHTML: (s) => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
function getMatIconNoHttpProviderError() {
  return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");
}
function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
var SvgIconConfig = class {
  constructor(url, svgText, options) {
    this.url = url;
    this.svgText = svgText;
    this.options = options;
  }
};
var _MatIconRegistry = class _MatIconRegistry {
  constructor(_httpClient, _sanitizer, document2, _errorHandler) {
    this._httpClient = _httpClient;
    this._sanitizer = _sanitizer;
    this._errorHandler = _errorHandler;
    this._svgIconConfigs = /* @__PURE__ */ new Map();
    this._iconSetConfigs = /* @__PURE__ */ new Map();
    this._cachedIconsByUrl = /* @__PURE__ */ new Map();
    this._inProgressUrlFetches = /* @__PURE__ */ new Map();
    this._fontCssClassesByAlias = /* @__PURE__ */ new Map();
    this._resolvers = [];
    this._defaultFontSetClass = ["material-icons", "mat-ligature-font"];
    this._document = document2;
  }
  /**
   * Registers an icon by URL in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */
  addSvgIcon(iconName, url, options) {
    return this.addSvgIconInNamespace("", iconName, url, options);
  }
  /**
   * Registers an icon using an HTML string in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */
  addSvgIconLiteral(iconName, literal, options) {
    return this.addSvgIconLiteralInNamespace("", iconName, literal, options);
  }
  /**
   * Registers an icon by URL in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */
  addSvgIconInNamespace(namespace, iconName, url, options) {
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon resolver function with the registry. The function will be invoked with the
   * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
   * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
   * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
   * will be invoked in the order in which they have been registered.
   * @param resolver Resolver function to be registered.
   */
  addSvgIconResolver(resolver) {
    this._resolvers.push(resolver);
    return this;
  }
  /**
   * Registers an icon using an HTML string in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */
  addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    }
    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig("", trustedLiteral, options));
  }
  /**
   * Registers an icon set by URL in the default namespace.
   * @param url
   */
  addSvgIconSet(url, options) {
    return this.addSvgIconSetInNamespace("", url, options);
  }
  /**
   * Registers an icon set using an HTML string in the default namespace.
   * @param literal SVG source of the icon set.
   */
  addSvgIconSetLiteral(literal, options) {
    return this.addSvgIconSetLiteralInNamespace("", literal, options);
  }
  /**
   * Registers an icon set by URL in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param url
   */
  addSvgIconSetInNamespace(namespace, url, options) {
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon set using an HTML string in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param literal SVG source of the icon set.
   */
  addSvgIconSetLiteralInNamespace(namespace, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    }
    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig("", trustedLiteral, options));
  }
  /**
   * Defines an alias for CSS class names to be used for icon fonts. Creating an matIcon
   * component with the alias as the fontSet input will cause the class name to be applied
   * to the `<mat-icon>` element.
   *
   * If the registered font is a ligature font, then don't forget to also include the special
   * class `mat-ligature-font` to allow the usage via attribute. So register like this:
   *
   * ```ts
   * iconRegistry.registerFontClassAlias('f1', 'font1 mat-ligature-font');
   * ```
   *
   * And use like this:
   *
   * ```html
   * <mat-icon fontSet="f1" fontIcon="home"></mat-icon>
   * ```
   *
   * @param alias Alias for the font.
   * @param classNames Class names override to be used instead of the alias.
   */
  registerFontClassAlias(alias, classNames = alias) {
    this._fontCssClassesByAlias.set(alias, classNames);
    return this;
  }
  /**
   * Returns the CSS class name associated with the alias by a previous call to
   * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
   */
  classNameForFontAlias(alias) {
    return this._fontCssClassesByAlias.get(alias) || alias;
  }
  /**
   * Sets the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */
  setDefaultFontSetClass(...classNames) {
    this._defaultFontSetClass = classNames;
    return this;
  }
  /**
   * Returns the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */
  getDefaultFontSetClass() {
    return this._defaultFontSetClass;
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
   * The response from the URL may be cached so this will not always cause an HTTP request, but
   * the produced element will always be a new copy of the originally fetched icon. (That is,
   * it will not contain any modifications made to elements previously returned).
   *
   * @param safeUrl URL from which to fetch the SVG icon.
   */
  getSvgIconFromUrl(safeUrl) {
    const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    }
    const cachedIcon = this._cachedIconsByUrl.get(url);
    if (cachedIcon) {
      return of(cloneSvg(cachedIcon));
    }
    return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(tap((svg) => this._cachedIconsByUrl.set(url, svg)), map((svg) => cloneSvg(svg)));
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
   * and namespace. The icon must have been previously registered with addIcon or addIconSet;
   * if not, the Observable will throw an error.
   *
   * @param name Name of the icon to be retrieved.
   * @param namespace Namespace in which to look for the icon.
   */
  getNamedSvgIcon(name, namespace = "") {
    const key = iconKey(namespace, name);
    let config = this._svgIconConfigs.get(key);
    if (config) {
      return this._getSvgFromConfig(config);
    }
    config = this._getIconConfigFromResolvers(namespace, name);
    if (config) {
      this._svgIconConfigs.set(key, config);
      return this._getSvgFromConfig(config);
    }
    const iconSetConfigs = this._iconSetConfigs.get(namespace);
    if (iconSetConfigs) {
      return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
    }
    return throwError(getMatIconNameNotFoundError(key));
  }
  ngOnDestroy() {
    this._resolvers = [];
    this._svgIconConfigs.clear();
    this._iconSetConfigs.clear();
    this._cachedIconsByUrl.clear();
  }
  /**
   * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
   */
  _getSvgFromConfig(config) {
    if (config.svgText) {
      return of(cloneSvg(this._svgElementFromConfig(config)));
    } else {
      return this._loadSvgIconFromConfig(config).pipe(map((svg) => cloneSvg(svg)));
    }
  }
  /**
   * Attempts to find an icon with the specified name in any of the SVG icon sets.
   * First searches the available cached icons for a nested element with a matching name, and
   * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
   * that have not been cached, and searches again after all fetches are completed.
   * The returned Observable produces the SVG element if possible, and throws
   * an error if no icon with the specified name can be found.
   */
  _getSvgFromIconSetConfigs(name, iconSetConfigs) {
    const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
    if (namedIcon) {
      return of(namedIcon);
    }
    const iconSetFetchRequests = iconSetConfigs.filter((iconSetConfig) => !iconSetConfig.svgText).map((iconSetConfig) => {
      return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(catchError((err) => {
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconSetConfig.url);
        const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
        this._errorHandler.handleError(new Error(errorMessage));
        return of(null);
      }));
    });
    return forkJoin(iconSetFetchRequests).pipe(map(() => {
      const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
      if (!foundIcon) {
        throw getMatIconNameNotFoundError(name);
      }
      return foundIcon;
    }));
  }
  /**
   * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */
  _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
    for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
      const config = iconSetConfigs[i];
      if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
        const svg = this._svgElementFromConfig(config);
        const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
        if (foundIcon) {
          return foundIcon;
        }
      }
    }
    return null;
  }
  /**
   * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
   * from it.
   */
  _loadSvgIconFromConfig(config) {
    return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText), map(() => this._svgElementFromConfig(config)));
  }
  /**
   * Loads the content of the icon set URL specified in the
   * SvgIconConfig and attaches it to the config.
   */
  _loadSvgIconSetFromConfig(config) {
    if (config.svgText) {
      return of(null);
    }
    return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText));
  }
  /**
   * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */
  _extractSvgIconFromSet(iconSet, iconName, options) {
    const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
    if (!iconSource) {
      return null;
    }
    const iconElement = iconSource.cloneNode(true);
    iconElement.removeAttribute("id");
    if (iconElement.nodeName.toLowerCase() === "svg") {
      return this._setSvgAttributes(iconElement, options);
    }
    if (iconElement.nodeName.toLowerCase() === "symbol") {
      return this._setSvgAttributes(this._toSvgElement(iconElement), options);
    }
    const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
    svg.appendChild(iconElement);
    return this._setSvgAttributes(svg, options);
  }
  /**
   * Creates a DOM element from the given SVG string.
   */
  _svgElementFromString(str) {
    const div = this._document.createElement("DIV");
    div.innerHTML = str;
    const svg = div.querySelector("svg");
    if (!svg) {
      throw Error("<svg> tag not found");
    }
    return svg;
  }
  /**
   * Converts an element into an SVG node by cloning all of its children.
   */
  _toSvgElement(element) {
    const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
    const attributes = element.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const {
        name,
        value
      } = attributes[i];
      if (name !== "id") {
        svg.setAttribute(name, value);
      }
    }
    for (let i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
        svg.appendChild(element.childNodes[i].cloneNode(true));
      }
    }
    return svg;
  }
  /**
   * Sets the default attributes for an SVG element to be used as an icon.
   */
  _setSvgAttributes(svg, options) {
    svg.setAttribute("fit", "");
    svg.setAttribute("height", "100%");
    svg.setAttribute("width", "100%");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("focusable", "false");
    if (options && options.viewBox) {
      svg.setAttribute("viewBox", options.viewBox);
    }
    return svg;
  }
  /**
   * Returns an Observable which produces the string contents of the given icon. Results may be
   * cached, so future calls with the same URL may not cause another HTTP request.
   */
  _fetchIcon(iconConfig) {
    const {
      url: safeUrl,
      options
    } = iconConfig;
    const withCredentials = options?.withCredentials ?? false;
    if (!this._httpClient) {
      throw getMatIconNoHttpProviderError();
    }
    if (safeUrl == null) {
      throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
    }
    const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    }
    const inProgressFetch = this._inProgressUrlFetches.get(url);
    if (inProgressFetch) {
      return inProgressFetch;
    }
    const req = this._httpClient.get(url, {
      responseType: "text",
      withCredentials
    }).pipe(map((svg) => {
      return trustedHTMLFromString(svg);
    }), finalize(() => this._inProgressUrlFetches.delete(url)), share());
    this._inProgressUrlFetches.set(url, req);
    return req;
  }
  /**
   * Registers an icon config by name in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param iconName Name under which to register the config.
   * @param config Config to be registered.
   */
  _addSvgIconConfig(namespace, iconName, config) {
    this._svgIconConfigs.set(iconKey(namespace, iconName), config);
    return this;
  }
  /**
   * Registers an icon set config in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param config Config to be registered.
   */
  _addSvgIconSetConfig(namespace, config) {
    const configNamespace = this._iconSetConfigs.get(namespace);
    if (configNamespace) {
      configNamespace.push(config);
    } else {
      this._iconSetConfigs.set(namespace, [config]);
    }
    return this;
  }
  /** Parses a config's text into an SVG element. */
  _svgElementFromConfig(config) {
    if (!config.svgElement) {
      const svg = this._svgElementFromString(config.svgText);
      this._setSvgAttributes(svg, config.options);
      config.svgElement = svg;
    }
    return config.svgElement;
  }
  /** Tries to create an icon config through the registered resolver functions. */
  _getIconConfigFromResolvers(namespace, name) {
    for (let i = 0; i < this._resolvers.length; i++) {
      const result = this._resolvers[i](name, namespace);
      if (result) {
        return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
      }
    }
    return void 0;
  }
};
_MatIconRegistry.\u0275fac = function MatIconRegistry_Factory(t) {
  return new (t || _MatIconRegistry)(\u0275\u0275inject(HttpClient, 8), \u0275\u0275inject(DomSanitizer), \u0275\u0275inject(DOCUMENT, 8), \u0275\u0275inject(ErrorHandler));
};
_MatIconRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MatIconRegistry,
  factory: _MatIconRegistry.\u0275fac,
  providedIn: "root"
});
var MatIconRegistry = _MatIconRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIconRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ErrorHandler
  }], null);
})();
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler2, document2) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document2, errorHandler2);
}
var ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[new Optional(), new SkipSelf(), MatIconRegistry], [new Optional(), HttpClient], DomSanitizer, ErrorHandler, [new Optional(), DOCUMENT]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
function cloneSvg(svg) {
  return svg.cloneNode(true);
}
function iconKey(namespace, name) {
  return namespace + ":" + name;
}
function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}
var MAT_ICON_DEFAULT_OPTIONS = new InjectionToken("MAT_ICON_DEFAULT_OPTIONS");
var MAT_ICON_LOCATION = new InjectionToken("mat-icon-location", {
  providedIn: "root",
  factory: MAT_ICON_LOCATION_FACTORY
});
function MAT_ICON_LOCATION_FACTORY() {
  const _document2 = inject(DOCUMENT);
  const _location = _document2 ? _document2.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var funcIriAttributes = ["clip-path", "color-profile", "src", "cursor", "fill", "filter", "marker", "marker-start", "marker-mid", "marker-end", "mask", "stroke"];
var funcIriAttributeSelector = funcIriAttributes.map((attr) => `[${attr}]`).join(", ");
var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
var _MatIcon = class _MatIcon {
  /** Theme palette color of the icon. */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  /** Name of the icon in the SVG icon set. */
  get svgIcon() {
    return this._svgIcon;
  }
  set svgIcon(value) {
    if (value !== this._svgIcon) {
      if (value) {
        this._updateSvgIcon(value);
      } else if (this._svgIcon) {
        this._clearSvgElement();
      }
      this._svgIcon = value;
    }
  }
  /** Font set that the icon is a part of. */
  get fontSet() {
    return this._fontSet;
  }
  set fontSet(value) {
    const newValue = this._cleanupFontValue(value);
    if (newValue !== this._fontSet) {
      this._fontSet = newValue;
      this._updateFontIconClasses();
    }
  }
  /** Name of an icon within a font set. */
  get fontIcon() {
    return this._fontIcon;
  }
  set fontIcon(value) {
    const newValue = this._cleanupFontValue(value);
    if (newValue !== this._fontIcon) {
      this._fontIcon = newValue;
      this._updateFontIconClasses();
    }
  }
  constructor(_elementRef, _iconRegistry, ariaHidden, _location, _errorHandler, defaults) {
    this._elementRef = _elementRef;
    this._iconRegistry = _iconRegistry;
    this._location = _location;
    this._errorHandler = _errorHandler;
    this.inline = false;
    this._previousFontSetClass = [];
    this._currentIconFetch = Subscription.EMPTY;
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.fontSet) {
        this.fontSet = defaults.fontSet;
      }
    }
    if (!ariaHidden) {
      _elementRef.nativeElement.setAttribute("aria-hidden", "true");
    }
  }
  /**
   * Splits an svgIcon binding value into its icon set and icon name components.
   * Returns a 2-element array of [(icon set), (icon name)].
   * The separator for the two fields is ':'. If there is no separator, an empty
   * string is returned for the icon set and the entire value is returned for
   * the icon name. If the argument is falsy, returns an array of two empty strings.
   * Throws an error if the name contains two or more ':' separators.
   * Examples:
   *   `'social:cake' -> ['social', 'cake']
   *   'penguin' -> ['', 'penguin']
   *   null -> ['', '']
   *   'a:b:c' -> (throws Error)`
   */
  _splitIconName(iconName) {
    if (!iconName) {
      return ["", ""];
    }
    const parts = iconName.split(":");
    switch (parts.length) {
      case 1:
        return ["", parts[0]];
      case 2:
        return parts;
      default:
        throw Error(`Invalid icon name: "${iconName}"`);
    }
  }
  ngOnInit() {
    this._updateFontIconClasses();
  }
  ngAfterViewChecked() {
    const cachedElements = this._elementsWithExternalReferences;
    if (cachedElements && cachedElements.size) {
      const newPath = this._location.getPathname();
      if (newPath !== this._previousPath) {
        this._previousPath = newPath;
        this._prependPathToReferences(newPath);
      }
    }
  }
  ngOnDestroy() {
    this._currentIconFetch.unsubscribe();
    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    }
  }
  _usingFontIcon() {
    return !this.svgIcon;
  }
  _setSvgElement(svg) {
    this._clearSvgElement();
    const path = this._location.getPathname();
    this._previousPath = path;
    this._cacheChildrenWithExternalReferences(svg);
    this._prependPathToReferences(path);
    this._elementRef.nativeElement.appendChild(svg);
  }
  _clearSvgElement() {
    const layoutElement = this._elementRef.nativeElement;
    let childCount = layoutElement.childNodes.length;
    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    }
    while (childCount--) {
      const child = layoutElement.childNodes[childCount];
      if (child.nodeType !== 1 || child.nodeName.toLowerCase() === "svg") {
        child.remove();
      }
    }
  }
  _updateFontIconClasses() {
    if (!this._usingFontIcon()) {
      return;
    }
    const elem = this._elementRef.nativeElement;
    const fontSetClasses = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter((className) => className.length > 0);
    this._previousFontSetClass.forEach((className) => elem.classList.remove(className));
    fontSetClasses.forEach((className) => elem.classList.add(className));
    this._previousFontSetClass = fontSetClasses;
    if (this.fontIcon !== this._previousFontIconClass && !fontSetClasses.includes("mat-ligature-font")) {
      if (this._previousFontIconClass) {
        elem.classList.remove(this._previousFontIconClass);
      }
      if (this.fontIcon) {
        elem.classList.add(this.fontIcon);
      }
      this._previousFontIconClass = this.fontIcon;
    }
  }
  /**
   * Cleans up a value to be used as a fontIcon or fontSet.
   * Since the value ends up being assigned as a CSS class, we
   * have to trim the value and omit space-separated values.
   */
  _cleanupFontValue(value) {
    return typeof value === "string" ? value.trim().split(" ")[0] : value;
  }
  /**
   * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
   * reference. This is required because WebKit browsers require references to be prefixed with
   * the current path, if the page has a `base` tag.
   */
  _prependPathToReferences(path) {
    const elements = this._elementsWithExternalReferences;
    if (elements) {
      elements.forEach((attrs, element) => {
        attrs.forEach((attr) => {
          element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
        });
      });
    }
  }
  /**
   * Caches the children of an SVG element that have `url()`
   * references that we need to prefix with the current path.
   */
  _cacheChildrenWithExternalReferences(element) {
    const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
    const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || /* @__PURE__ */ new Map();
    for (let i = 0; i < elementsWithFuncIri.length; i++) {
      funcIriAttributes.forEach((attr) => {
        const elementWithReference = elementsWithFuncIri[i];
        const value = elementWithReference.getAttribute(attr);
        const match2 = value ? value.match(funcIriPattern) : null;
        if (match2) {
          let attributes = elements.get(elementWithReference);
          if (!attributes) {
            attributes = [];
            elements.set(elementWithReference, attributes);
          }
          attributes.push({
            name: attr,
            value: match2[1]
          });
        }
      });
    }
  }
  /** Sets a new SVG icon with a particular name. */
  _updateSvgIcon(rawName) {
    this._svgNamespace = null;
    this._svgName = null;
    this._currentIconFetch.unsubscribe();
    if (rawName) {
      const [namespace, iconName] = this._splitIconName(rawName);
      if (namespace) {
        this._svgNamespace = namespace;
      }
      if (iconName) {
        this._svgName = iconName;
      }
      this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(take(1)).subscribe((svg) => this._setSvgElement(svg), (err) => {
        const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
        this._errorHandler.handleError(new Error(errorMessage));
      });
    }
  }
};
_MatIcon.\u0275fac = function MatIcon_Factory(t) {
  return new (t || _MatIcon)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatIconRegistry), \u0275\u0275injectAttribute("aria-hidden"), \u0275\u0275directiveInject(MAT_ICON_LOCATION), \u0275\u0275directiveInject(ErrorHandler), \u0275\u0275directiveInject(MAT_ICON_DEFAULT_OPTIONS, 8));
};
_MatIcon.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatIcon,
  selectors: [["mat-icon"]],
  hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
  hostVars: 10,
  hostBindings: function MatIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet)("fontIcon", ctx._usingFontIcon() ? ctx.fontIcon : null);
      \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
      \u0275\u0275classProp("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
    }
  },
  inputs: {
    color: "color",
    inline: [InputFlags.HasDecoratorInputTransform, "inline", "inline", booleanAttribute],
    svgIcon: "svgIcon",
    fontSet: "fontSet",
    fontIcon: "fontIcon"
  },
  exportAs: ["matIcon"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function MatIcon_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatIcon = _MatIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIcon, [{
    type: Component,
    args: [{
      template: "<ng-content></ng-content>",
      selector: "mat-icon",
      exportAs: "matIcon",
      host: {
        "role": "img",
        "class": "mat-icon notranslate",
        "[class]": 'color ? "mat-" + color : ""',
        "[attr.data-mat-icon-type]": '_usingFontIcon() ? "font" : "svg"',
        "[attr.data-mat-icon-name]": "_svgName || fontIcon",
        "[attr.data-mat-icon-namespace]": "_svgNamespace || fontSet",
        "[attr.fontIcon]": "_usingFontIcon() ? fontIcon : null",
        "[class.mat-icon-inline]": "inline",
        "[class.mat-icon-no-color]": 'color !== "primary" && color !== "accent" && color !== "warn"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: MatIconRegistry
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["aria-hidden"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_ICON_LOCATION]
    }]
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_ICON_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    svgIcon: [{
      type: Input
    }],
    fontSet: [{
      type: Input
    }],
    fontIcon: [{
      type: Input
    }]
  });
})();
var _MatIconModule = class _MatIconModule {
};
_MatIconModule.\u0275fac = function MatIconModule_Factory(t) {
  return new (t || _MatIconModule)();
};
_MatIconModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatIconModule
});
_MatIconModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatIconModule = _MatIconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIconModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatIcon],
      exports: [MatIcon, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/app.module.ts
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  provideClientHydration(),
  provideAnimationsAsync()
], imports: [
  BrowserModule,
  AppRoutingModule,
  MatIconModule,
  CarouselModule
] });
var AppModule = _AppModule;

// src/main.ts
platformBrowser().bootstrapModule(AppModule).catch((err) => console.error(err));
/*! Bundled license information:

@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
