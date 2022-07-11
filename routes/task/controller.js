const TaskService = require("./service")

async function findAllHandler(req, reply) {
    const taskService = new TaskService(this);
    const findAllTask = await taskService.findAll();
    return reply.send(findAllTask);
}
async function findOneHandler(req, reply) {
    const { id } = req.params
    const taskService = new TaskService(this);
    const findAllTask = await taskService.findOne({ id });
    return reply.send(findAllTask);
}
async function createHandler(req, reply) {
    const { body } = req
    const taskService = new TaskService(this);
    const createTask = await taskService.create({ name: body.name });
    return reply.send(createTask);
}
async function updateHandler(req, reply) {
    const { body } = req
    const { id } = req.params
    const taskService = new TaskService(this)
    const findOneTask = await taskService.findOne({ id })
    if (findOneTask == null) {
        return reply.code(404).send({ message: "task not found" })
    }
    findOneTask.name = body.name
    if (!(await findOneTask.save())) {
        return reply.code(500).send({ message: "Couldn't update this task" });
    }
    return reply.send(findOneTask)
}
async function deleteHandler(req, reply) {
    const { id } = req.params
    const taskService = new TaskService(this);
    const deleteTask = await taskService.destroy({ id });
    return reply.send({ message: "Task deleted" });
}

module.exports = {
    findAllHandler,
    findOneHandler,
    createHandler,
    updateHandler,
    deleteHandler
}