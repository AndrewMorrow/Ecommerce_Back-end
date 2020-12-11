const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
    {
        product_id: Sequelize.INTEGER,
        tag_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "product_tag",
    }
);

module.exports = ProductTag;
