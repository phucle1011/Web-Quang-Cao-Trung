// ===============================
// models/OrderDetailModel.js
// ===============================

const { DataTypes } = require('sequelize');
const connection = require('../config/database');

const OrderDetailModel = connection.define('OrderDetail', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

}, {
    tableName: 'order_details',
    timestamps: false
});

module.exports = OrderDetailModel;