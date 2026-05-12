// ===============================
// models/CategoryModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const CategoryModel = connection.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    categoryName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    status: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    }

}, {
    tableName: 'categories',
    timestamps: false
});

module.exports = CategoryModel;