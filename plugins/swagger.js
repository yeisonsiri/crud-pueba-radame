"use strict";

const fp = require("fastify-plugin");
const pk = require("../package.json");

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(async function (fastify, opts) {
  fastify.register(require("fastify-swagger"), {
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "Example Service",
        description: "",
        version: pk.version,
      },
      externalDocs: {
        url: "https://help.glowicom.com",
        description: "Find more info here",
      },
    },
    staticCSP: true,
    uiConfig: {
      displayRequestDuration: true,
    },
    exposeRoute: true,
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  });
});
