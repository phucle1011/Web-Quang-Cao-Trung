// ========================================
// controllers/admin/OrderController.js
// ========================================

const OrderModel = require('../../models/OrderModel');
const OrderDetailModel = require('../../models/OrderDetailModel');
const UserModel = require('../../models/UserModel');

class OrderController {

    // GET ALL
    static async get(req, res) {

        try {

            const orders = await OrderModel.findAll({

                include: [
                    {
                        model: UserModel,
                        as: 'user'
                    },
                    {
                        model: OrderDetailModel,
                        as: 'orderDetails'
                    }
                ],

                order: [['id', 'DESC']]

            });

            res.status(200).json({
                success: true,
                data: orders
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // GET BY ID
    static async getById(req, res) {

        try {

            const { id } = req.params;

            const order = await OrderModel.findByPk(id, {

                include: [
                    {
                        model: UserModel,
                        as: 'user'
                    },
                    {
                        model: OrderDetailModel,
                        as: 'orderDetails'
                    }
                ]

            });

            if (!order) {

                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy đơn hàng'
                });

            }

            res.status(200).json({
                success: true,
                data: order
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // CREATE
    static async create(req, res) {

        try {

            const {
                userId,
                fullName,
                phone,
                address,
                note,
                totalPrice,
                paymentMethod,
                status
            } = req.body;

            const order = await OrderModel.create({

                userId,
                fullName,
                phone,
                address,
                note,
                totalPrice,
                paymentMethod,
                status

            });

            res.status(201).json({
                success: true,
                message: 'Tạo đơn hàng thành công',
                data: order
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // UPDATE STATUS
    static async update(req, res) {

        try {

            const { id } = req.params;

            const {
                status
            } = req.body;

            const order = await OrderModel.findByPk(id);

            if (!order) {

                return res.status(404).json({
                    success: false,
                    message: 'Đơn hàng không tồn tại'
                });

            }

            await order.update({
                status
            });

            res.status(200).json({
                success: true,
                message: 'Cập nhật đơn hàng thành công',
                data: order
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // DELETE
    static async delete(req, res) {

        try {

            const { id } = req.params;

            const order = await OrderModel.findByPk(id);

            if (!order) {

                return res.status(404).json({
                    success: false,
                    message: 'Đơn hàng không tồn tại'
                });

            }

            await order.destroy();

            res.status(200).json({
                success: true,
                message: 'Xóa đơn hàng thành công'
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

}

module.exports = OrderController;