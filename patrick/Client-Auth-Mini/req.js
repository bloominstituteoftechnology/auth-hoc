// REQUEST OBJECT from `/me` ROUTE

IncomingMessage {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: BufferList { head: null, tail: null, length: 0 },
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: null,
     ended: true,
     endEmitted: false,
     reading: false,
     sync: true,
     needReadable: false,
     emittedReadable: true,
     readableListening: false,
     resumeScheduled: false,
     destroyed: false,
     defaultEncoding: 'utf8',
     awaitDrain: 0,
     readingMore: true,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 216,
        _externalStream: [External],
        fd: 16,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 12 },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 12 },
     _idleTimeout: 120000,
     _idleNext:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idleStart: 71634,
     _destroyed: false,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular],
        locals: {},
        writeHead: [Function: writeHead],
        end: [Function: end],
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 219,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 220,
     [Symbol(triggerAsyncId)]: 12 },
  connection:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 216,
        _externalStream: [External],
        fd: 16,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 12 },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 12 },
     _idleTimeout: 120000,
     _idleNext:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idleStart: 71634,
     _destroyed: false,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular],
        locals: {},
        writeHead: [Function: writeHead],
        end: [Function: end],
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 219,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 220,
     [Symbol(triggerAsyncId)]: 12 },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: true,
  headers:
   { host: 'localhost:3000',
     'user-agent': 'curl/7.54.0',
     accept: '*/*',
     cookie: 'connect.sid=s%3AI2IFpHeIEb-J-CE1kgb5aoZ752jz2Z3D.L832QMgrF4vlNTacO7h%2Fcfjm4mXipEvGq3xrzyhsJtE',
     'content-type': 'application/json' },
  rawHeaders:
   [ 'Host',
     'localhost:3000',
     'User-Agent',
     'curl/7.54.0',
     'Accept',
     '*/*',
     'Cookie',
     'connect.sid=s%3AI2IFpHeIEb-J-CE1kgb5aoZ752jz2Z3D.L832QMgrF4vlNTacO7h%2Fcfjm4mXipEvGq3xrzyhsJtE',
     'Content-Type',
     'application/json' ],
  trailers: {},
  rawTrailers: [],
  upgrade: false,
  url: '/me',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 216,
        _externalStream: [External],
        fd: 16,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0,
        _consumed: true },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Array],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _bytesDispatched: 0,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 12 },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        _pendingResponseData: 0,
        maxHeadersCount: null,
        _connectionKey: '6::::3000',
        [Symbol(asyncId)]: 12 },
     _idleTimeout: 120000,
     _idleNext:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idlePrev:
      TimersList {
        _idleNext: [Circular],
        _idlePrev: [Circular],
        _timer: [Object],
        _unrefed: true,
        msecs: 120000,
        nextTick: false },
     _idleStart: 71634,
     _destroyed: false,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: bound parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        upgrading: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _onPendingData: [Function: bound updateOutgoingData],
        _sent100: false,
        _expect_continue: false,
        req: [Circular],
        locals: {},
        writeHead: [Function: writeHead],
        end: [Function: end],
        [Symbol(outHeadersKey)]: [Object] },
     [Symbol(asyncId)]: 219,
     [Symbol(bytesRead)]: 0,
     [Symbol(asyncId)]: 220,
     [Symbol(triggerAsyncId)]: 12 },
  _consuming: false,
  _dumped: false,
  next: [Function: next],
  baseUrl: '',
  originalUrl: '/me',
  _parsedUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/me',
     path: '/me',
     href: '/me',
     _raw: '/me' },
  params: {},   // <~~~~~~~~~~~~ PARAMETERS
  query: {},    // <~~~~~~~~~~~~ ?QUERY INPUT
  res:
   ServerResponse {
     domain: null,
     _events: { finish: [Function: bound resOnFinish] },
     _eventsCount: 1,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 71634,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 219,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 220,
        [Symbol(triggerAsyncId)]: 12 },
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 71634,
        _destroyed: false,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 219,
        [Symbol(bytesRead)]: 0,
        [Symbol(asyncId)]: 220,
        [Symbol(triggerAsyncId)]: 12 },
     _header: null,
     _onPendingData: [Function: bound updateOutgoingData],
     _sent100: false,
     _expect_continue: false,
     req: [Circular],
     locals: {},
     writeHead: [Function: writeHead],
     end: [Function: end],
     [Symbol(outHeadersKey)]: { 'x-powered-by': [Array] } },
  body: {},     // <~~~~~~~~~~~~ BODY
  _parsedOriginalUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/me',
     path: '/me',
     href: '/me',
     _raw: '/me' },
  sessionStore:
   MemoryStore {
     domain: null,
     _events:
      { disconnect: [Function: ondisconnect],
        connect: [Function: onconnect] },
     _eventsCount: 2,
     _maxListeners: undefined,
     sessions: { 'I2IFpHeIEb-J-CE1kgb5aoZ752jz2Z3D': '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"user":{"_id":"59a14cfd0638c815515d4c16","username":"ted","passwordHash":"$2a$11$tGs3hWrJgAoOQv2ii3iFReZQIUS2E1xVqzzjcE.lzLKdfS97OBj4e","__v":0}}' },
     generate: [Function] },
  sessionID: 'I2IFpHeIEb-J-CE1kgb5aoZ752jz2Z3D',
  session:
   Session {
     cookie:
      { path: '/',
        _expires: null,
        originalMaxAge: null,
        httpOnly: true },
     user:
      { _id: '59a14cfd0638c815515d4c16',
        username: 'ted',
        passwordHash: '$2a$11$tGs3hWrJgAoOQv2ii3iFReZQIUS2E1xVqzzjcE.lzLKdfS97OBj4e',
        __v: 0 } },
  route:
   Route {
     path: '/me',
     stack: [ [Object], [Object] ],
     methods: { get: true } },
  user:
   { _id: '59a14cfd0638c815515d4c16',
     username: 'ted',
     passwordHash: '$2a$11$tGs3hWrJgAoOQv2ii3iFReZQIUS2E1xVqzzjcE.lzLKdfS97OBj4e',
     __v: 0 } }
