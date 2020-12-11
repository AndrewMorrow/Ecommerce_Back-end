const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
    {
        tag_name: Sequelize.STRING,
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "tag",
    }
);

module.exports = Tag;
