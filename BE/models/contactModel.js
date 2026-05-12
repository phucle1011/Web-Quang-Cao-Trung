// ===============================
// models/ContactModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const ContactModel = connection.define('Contact', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    fullName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },

    email: {
        type: DataTypes.STRING(255),
        allowNull: true
    },

    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    status: {
        type: DataTypes.TINYINT,
        defaultValue: 0
    },

    reply: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'contact',
    timestamps: false
});

module.exports = ContactModel;