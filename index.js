var httpMocks = require("node-mocks-http");

class Simreq {
  constructor() {
    if (!!Middler.instance) {
      return Middler.instance;
    } else {
      Middler.instance = this;
      return this;
    }
  }

  init(app) {
    if (!this.app) {
      this.app = app;
      this.response = httpMocks.createResponse();
    }
  }

  simulator(req, next, options, callback) {
    if (this.app) {
      if (typeof options == "object") {
        req.url = options.url || req.url;
        req.method = options.method ? options.method.toUppercase() : "GET";
        req.body = options.body || {};
        req.query = options.query || {};
        req.params = options.params || {};

        this.response.end = this.response.send = this.response.write = this.response.json = function(
          data
        ) {
          if (typeof callback == "function") {
            console.log("data", data);
            callback(data);
          }
        };

        this.app._router.handle(req, this.response, next);
      } else {
        throw new Error("options cannot be empty");
      }
    } else {
      throw new Error("app object not found ");
    }
  }
}

module.exports = new Simreq();
