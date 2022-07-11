const {
    findAll: findAllSchema,
    findOne: findOneSchema,
    create: createSchema,
    update: updateSchema,
    remove: removeSchema,
} = require('./schemas');

const {
    findAllHandler: findAllController,
    findOneHandler: findOneController,
    createHandler: createController,
    updateHandler: updateController,
    deleteHandler: deleteController
}= require ('./controller');

module.exports = async function (fastify) {
    fastify.get("/", { schema: findAllSchema }, findAllController);
    fastify.get("/:id", { schema: findOneSchema }, findOneController);
    fastify.post("/create", { schema: createSchema }, createController);
    fastify.put("/:id/update", { schema: updateSchema }, updateController);
    fastify.delete("/:id/remove", { schema: removeSchema }, deleteController);
}
