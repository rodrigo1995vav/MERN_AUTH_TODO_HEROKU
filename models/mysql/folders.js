const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Foldres = sequelize.define(
  "folders",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.NUMBER,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Foldres;