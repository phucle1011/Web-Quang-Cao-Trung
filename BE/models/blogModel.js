// ===============================
// models/BlogModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const BlogModel = connection.define('Blog', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    slug: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },

    content: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },

    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'blogs',
    timestamps: false
});

module.exports = BlogModel;