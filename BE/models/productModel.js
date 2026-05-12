// ===============================
// models/ProductModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const ProductModel = connection.define('Product', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    productName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    slug: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    status: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },

    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'products',
    timestamps: false
});

module.exports = ProductModel;