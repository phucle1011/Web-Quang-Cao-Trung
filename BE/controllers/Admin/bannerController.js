// ========================================
// controllers/admin/BannerController.js
// ========================================

const BannerModel = require('../../models/BannerModel');

class BannerController {

    static async get(req, res) {

        try {

            const banners = await BannerModel.findAll({
                order: [['id', 'DESC']]
            });

            res.status(200).json({
                success: true,
                data: banners
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
                link,
                status
            } = req.body;

            const image = req.file
                ? req.file.filename
                : null;

            const banner = await BannerModel.create({

                title,
                image,
                link,
                status

            });

            res.status(201).json({
                success: true,
                message: 'Thêm banner thành công',
                data: banner
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
                link,
                status
            } = req.body;

            const image = req.file
                ? req.file.filename
                : null;

            const banner = await BannerModel.findByPk(id);

            if (!banner) {

                return res.status(404).json({
                    success: false,
                    message: 'Banner không tồn tại'
                });

            }

            await banner.update({

                title,
                link,
                status,

                ...(image && { image })

            });

            res.status(200).json({
                success: true,
                message: 'Cập nhật banner thành công',
                data: banner
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

            const banner = await BannerModel.findByPk(id);

            if (!banner) {

                return res.status(404).json({
                    success: false,
                    message: 'Banner không tồn tại'
                });

            }

            await banner.destroy();

            res.status(200).json({
                success: true,
                message: 'Xóa banner thành công'
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

}

module.exports = BannerController;