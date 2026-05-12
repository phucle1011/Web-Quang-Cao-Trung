const { DataTypes } = require('sequelize');
const connection = require('../config/database');
const bcrypt = require('bcrypt');

const UserModel = connection.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    fullName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },

    phone: {
        type: DataTypes.STRING(20),
        allowNull: true
    },

    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    role: {
        type: DataTypes.ENUM('admin', 'customer'),
        defaultValue: 'customer'
    },

    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    avatar: {
        type: DataTypes.STRING(255),
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
    tableName: 'users',
    timestamps: false
});


// HASH PASSWORD
UserModel.beforeCreate(async (user) => {
    if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
});


// UPDATE PASSWORD
UserModel.beforeUpdate(async (user) => {
    if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
});


// COMPARE PASSWORD
UserModel.comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = UserModel;