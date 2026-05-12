// ===============================
// models/OrderModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const OrderModel = connection.define('Order', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    fullName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    note: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    paymentMethod: {
        type: DataTypes.ENUM('COD'),
        defaultValue: 'COD'
    },

    status: {
        type: DataTypes.ENUM(
            'pending',
            'confirmed',
            'shipping',
            'completed',
            'cancelled'
        ),
        defaultValue: 'pending'
    },

    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'orders',
    timestamps: false
});

module.exports = OrderModel;