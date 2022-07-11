const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    const task = sequelize.define(
        "Task",
        {
            id: {
                primaryKey: true,
                type: DataTypes.INTEGER,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            createdAt: {
                type: DataTypes.BIGINT,
            },
            updatedAt: {
                type: DataTypes.BIGINT,
            },
        },
        {
            sequelize,
            tableName: "task",
            hooks: {
                beforeCreate: (record, options) => {
                    record.dataValues.createdAt = Date.now();
                    record.dataValues.updatedAt = Date.now();
                },
                beforeUpdate: (record, options) => {
                    record.dataValues.updatedAt = Date.now();
                },
            },
        }
    );
    return task;
};