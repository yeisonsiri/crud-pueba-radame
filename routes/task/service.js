module.exports = class Service {
    constructor(fastify) {
        this.models = fastify.sequelize.models;
    }
    findAll() {
        return this.models.Task.findAll();
    }
    findOne(where = {}) {
        return this.models.Task.findOne({ where });
    }
    create(body) {
        return this.models.Task.create(body);
    }
    destroy(where = {}) {
        return this.models.Task.destroy({ where });
    }
}