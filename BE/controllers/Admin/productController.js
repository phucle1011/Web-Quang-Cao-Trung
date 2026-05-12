const ProductModel = require('../../models/ProductModel');
const CategoryModel = require('../../models/CategoryModel');
const { Op } = require('sequelize');

class ProductController {

    // ==================================
    // GET ALL PRODUCTS
    // ==================================

    static async get(req, res) {

        try {

            const {
                keyword = '',
                page = 1,
                limit = 10
            } = req.query;

            const offset = (page - 1) * limit;

            const { count, rows } = await ProductModel.findAndCountAll({

                where: {
                    productName: {
                        [Op.like]: `%${keyword}%`
                    }
                },

                include: [
                    {
                        model: CategoryModel,
                        as: 'category'
                    }
                ],

                limit: Number(limit),
                offset: Number(offset),

                order: [['id', 'DESC']]
            });

            res.status(200).json({

                success: true,
                totalItems: count,
                totalPages: Math.ceil(count / limit),
                currentPage: Number(page),

                data: rows

            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // ==================================
    // GET PRODUCT BY ID
    // ==================================

    static async getById(req, res) {

        try {

            const { id } = req.params;

            const product = await ProductModel.findByPk(id, {

                include: [
                    {
                        model: CategoryModel,
                        as: 'category'
                    }
                ]

            });

            if (!product) {

                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy sản phẩm'
                });

            }

            res.status(200).json({
                success: true,
                data: product
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // ==================================
    // CREATE PRODUCT
    // ==================================

    static async create(req, res) {

        try {

            const {

                productName,
                slug,
                price,
                quantity,
                categoryId,
                description,
                status

            } = req.body;

            const image = req.file
                ? req.file.filename
                : null;

            const product = await ProductModel.create({

                productName,
                slug,
                price,
                quantity,
                categoryId,
                image,
                description,
                status

            });

            res.status(201).json({

                success: true,
                message: 'Thêm sản phẩm thành công',
                data: product

            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // ==================================
    // UPDATE PRODUCT
    // ==================================

    static async update(req, res) {

        try {

            const { id } = req.params;

            const {

                productName,
                slug,
                price,
                quantity,
                categoryId,
                description,
                status

            } = req.body;

            const image = req.file
                ? req.file.filename
                : null;

            const product = await ProductModel.findByPk(id);

            if (!product) {

                return res.status(404).json({
                    success: false,
                    message: 'Sản phẩm không tồn tại'
                });

            }

            await product.update({

                productName,
                slug,
                price,
                quantity,
                categoryId,
                description,
                status,

                ...(image && { image })

            });

            res.status(200).json({

                success: true,
                message: 'Cập nhật thành công',
                data: product

            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // ==================================
    // DELETE PRODUCT
    // ==================================

    static async delete(req, res) {

        try {

            const { id } = req.params;

            const product = await ProductModel.findByPk(id);

            if (!product) {

                return res.status(404).json({
                    success: false,
                    message: 'Sản phẩm không tồn tại'
                });

            }

            await product.destroy();

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

module.exports = ProductController;