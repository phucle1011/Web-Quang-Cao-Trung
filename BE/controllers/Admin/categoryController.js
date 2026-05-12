const CategoryModel = require('../../models/CategoryModel');

class CategoryController {

    // =========================
    // GET ALL
    // =========================

    static async get(req, res) {

        try {

            const categories = await CategoryModel.findAll({
                order: [['id', 'DESC']]
            });

            res.status(200).json({
                success: true,
                message: 'Lấy danh sách thành công',
                data: categories
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // =========================
    // GET BY ID
    // =========================

    static async getById(req, res) {

        try {

            const { id } = req.params;

            const category = await CategoryModel.findByPk(id);

            if (!category) {

                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy danh mục'
                });

            }

            res.status(200).json({
                success: true,
                data: category
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // =========================
    // CREATE
    // =========================

    static async create(req, res) {

        try {

            const {
                categoryName,
                description,
                status
            } = req.body;

            const category = await CategoryModel.create({

                categoryName,
                description,
                status

            });

            res.status(201).json({
                success: true,
                message: 'Thêm danh mục thành công',
                data: category
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // =========================
    // UPDATE
    // =========================

    static async update(req, res) {

        try {

            const { id } = req.params;

            const {
                categoryName,
                description,
                status
            } = req.body;

            const category = await CategoryModel.findByPk(id);

            if (!category) {

                return res.status(404).json({
                    success: false,
                    message: 'Danh mục không tồn tại'
                });

            }

            await category.update({

                categoryName,
                description,
                status

            });

            res.status(200).json({
                success: true,
                message: 'Cập nhật thành công',
                data: category
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    // =========================
    // DELETE
    // =========================

    static async delete(req, res) {

        try {

            const { id } = req.params;

            const category = await CategoryModel.findByPk(id);

            if (!category) {

                return res.status(404).json({
                    success: false,
                    message: 'Danh mục không tồn tại'
                });

            }

            await category.destroy();

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

module.exports = CategoryController;