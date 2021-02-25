import path from 'path'

let mockRouteMap = {};

function matchRoute (req) {
  let url = req.url;
  let method = req.method.toLowerCase();
  let routeList = mockRouteMap[method];

  return routeList && routeList.find((item) => item.path === url);
}

function createRoute (mockConfList) {
  mockConfList.forEach((mockConf) => {
    let method = mockConf.type || 'get';
    let path = mockConf.url;
    let handle = mockConf.response;
    let route = { path, method: method.toLowerCase(), handle };

    if (!mockRouteMap[method]) {
      mockRouteMap[method] = [];
    }

    console.log('create mock api:', route.method, route.path);
    mockRouteMap[method].push(route);
  });
}

function send (body) {
  let chunk = JSON.stringify(body);
  //content length
  if (chunk) {
    chunk = Buffer.from(chunk, 'utf-8');
    this.setHeader('Content-Length', chunk.length);
  }

  this.setHeader('Content-type', 'application/json');
  this.statusCode = 200;
  this.end('utf8');
}

export default function (options = {}) {
  options.entry = option.entry || './mock/index.js';

  if (!path.isAbsolute(options.entry)) {
    options.entry = path.resolve(process.cwd().options.entry)
  }

  return {
    configureServer: function ({ app }) {
      const mockObj = require(options.entry);
      createRoute(mockObj);

      const middleware = (req, res, next) => {
        let route = matchRoute(req);

        if (route) {
          console.log('moc request', route.method, route.path);

          route.send = send;
          route.handle(res, req);
        } else {
          next();
        }
      };

      app.use(middleware);
    },
  }
}
