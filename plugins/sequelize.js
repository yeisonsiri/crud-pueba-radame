"use strict";
const fp = require("fastify-plugin");

const getModels = require("../models");

// fastify-plugin and fastify-swagger are required to sequelize-fastify

module.exports = fp(async function (fastify, opts) {
  fastify
    .register(require("sequelize-fastify"), {
      instance: "sequelize",
      sequelizeOptions: {
        dialect: "mariadb",
        database: "dbprueba",
        username: "root",
        password: '',
        host: "localhost",
        port: "3307",
        logging: false,
      },
    })
    .ready(async () => {
      try {
        console.log(
          "[database]: Database connection is successfully established."
        );

        const models = await getModels(fastify.sequelize);
        for (const modelName of Object.keys(models)) {
          models[modelName].sync();
        }
      } catch (err) {
        console.log(`[database]: Connection could not established: ${err}`);
      }
    });
});
