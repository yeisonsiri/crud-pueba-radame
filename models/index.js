const fs = require("fs");
const path = require("path");
const basename = path.basename(module.filename);

module.exports = async function (sequelize) {
  const models = {};
  const files = await fs
    .readdirSync(__dirname)
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );

  for (const file of files) {
    const model = require(path.join(__dirname, file))(sequelize);
    models[model.name] = model;
  }

  for (const modelName of Object.keys(models)) {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  }
  return models;
};
