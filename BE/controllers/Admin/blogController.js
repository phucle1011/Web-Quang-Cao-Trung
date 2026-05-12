// ========================================
// controllers/admin/BlogController.js
// ========================================

const BlogModel = require('../../models/BlogModel');

class BlogController {

    static async get(req, res) {

        try {

            const blogs = await BlogModel.findAll({
                order: [['id', 'DESC']]
            });

            res.status(200).json({
                success: true,
                data: blogs
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
                title,
                slug,
                content
            } = req.body;

            const image = req.file
                ? req.file.filename
                : null;

            const blog = await BlogModel.create({

                title,
                slug,
                content,
                image

            });

            res.status(201).json({
                success: true,
                message: 'Thêm bài viết thành công',
                data: blog
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
                title,
                slug,
                content
            } = req.body;

            const image = req.file
                ? req.file.filename
                : null;

            const blog = await BlogModel.findByPk(id);

            if (!blog) {

                return res.status(404).json({
                    success: false,
                    message: 'Blog không tồn tại'
                });

            }

            await blog.update({

                title,
                slug,
                content,

                ...(image && { image })

            });

            res.status(200).json({
                success: true,
                message: 'Cập nhật thành công',
                data: blog
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

            const blog = await BlogModel.findByPk(id);

            if (!blog) {

                return res.status(404).json({
                    success: false,
                    message: 'Blog không tồn tại'
                });

            }

            await blog.destroy();

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

module.exports = BlogController;