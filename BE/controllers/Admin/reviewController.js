// ========================================
// controllers/admin/ReviewController.js
// ========================================

const ReviewModel = require('../../models/ReviewModel');
const UserModel = require('../../models/UserModel');
const ProductModel = require('../../models/ProductModel');

class ReviewController {

    static async get(req, res) {

        try {

            const reviews = await ReviewModel.findAll({

                include: [
                    {
                        model: UserModel,
                        as: 'user'
                    },
                    {
                        model: ProductModel,
                        as: 'product'
                    }
                ],

                order: [['id', 'DESC']]

            });

            res.status(200).json({
                success: true,
                data: reviews
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    static async create(req, res) {

        try {

            const {
                userId,
                productId,
                rating,
                comment,
                status
            } = req.body;

            const review = await ReviewModel.create({

                userId,
                productId,
                rating,
                comment,
                status

            });

            res.status(201).json({
                success: true,
                message: 'Đánh giá thành công',
                data: review
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    static async update(req, res) {

        try {

            const { id } = req.params;

            const {
                rating,
                comment,
                status
            } = req.body;

            const review = await ReviewModel.findByPk(id);

            if (!review) {

                return res.status(404).json({
                    success: false,
                    message: 'Review không tồn tại'
                });

            }

            await review.update({

                rating,
                comment,
                status

            });

            res.status(200).json({
                success: true,
                message: 'Cập nhật thành công',
                data: review
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    static async delete(req, res) {

        try {

            const { id } = req.params;

            const review = await ReviewModel.findByPk(id);

            if (!review) {

                return res.status(404).json({
                    success: false,
                    message: 'Review không tồn tại'
                });

            }

            await review.destroy();

            res.status(200).json({
                success: true,
                message: 'Xóa thành công'
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

}

module.exports = ReviewController;