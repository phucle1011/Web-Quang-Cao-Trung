// ========================================
// controllers/admin/GalleryController.js
// ========================================

const GalleryModel = require('../../models/GalleryModel');

class GalleryController {

    static async get(req, res) {

        try {

            const galleries = await GalleryModel.findAll({
                order: [['id', 'DESC']]
            });

            res.status(200).json({
                success: true,
                data: galleries
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
                description
            } = req.body;

            const image = req.file
                ? req.file.filename
                : null;

            const gallery = await GalleryModel.create({

                image,
                description

            });

            res.status(201).json({
                success: true,
                message: 'Thêm hình ảnh thành công',
                data: gallery
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

            const gallery = await GalleryModel.findByPk(id);

            if (!gallery) {

                return res.status(404).json({
                    success: false,
                    message: 'Hình ảnh không tồn tại'
                });

            }

            await gallery.destroy();

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

module.exports = GalleryController;