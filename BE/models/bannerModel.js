// ===============================
// models/BannerModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const BannerModel = connection.define('Banner', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    image: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    link: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    status: {
        type: DataTypes.TINYINT,
        defaultValue: 1
    }

}, {
    tableName: 'banners',
    timestamps: false
});

module.exports = BannerModel;