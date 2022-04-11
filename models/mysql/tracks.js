const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Tracks = sequelize.define(
  "tracks",
  {
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    folderId: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.STRING,
    },    
  },
  {
    timestamps: true,
  }
);

module.exports = Tracks;