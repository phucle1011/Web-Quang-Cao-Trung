// ===============================
// models/ReviewModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const ReviewModel = connection.define('Review', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },

    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    image: {
        type: DataTypes.JSON,
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
    tableName: 'reviews',
    timestamps: false
});

module.exports = ReviewModel;