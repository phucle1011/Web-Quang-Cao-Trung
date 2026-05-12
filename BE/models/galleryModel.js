// ===============================
// models/GalleryModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const GalleryModel = connection.define('Gallery', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    image: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'galleries',
    timestamps: false
});

module.exports = GalleryModel;