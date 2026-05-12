// ========================================
// controllers/admin/ContactController.js
// ========================================

const ContactModel = require('../../models/ContactModel');

class ContactController {

    static async get(req, res) {

        try {

            const contacts = await ContactModel.findAll({
                order: [['id', 'DESC']]
            });

            res.status(200).json({
                success: true,
                data: contacts
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
                fullName,
                phone,
                email,
                message
            } = req.body;

            const contact = await ContactModel.create({

                fullName,
                phone,
                email,
                message

            });

            res.status(201).json({
                success: true,
                message: 'Gửi liên hệ thành công',
                data: contact
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

    static async reply(req, res) {

        try {

            const { id } = req.params;

            const {
                reply,
                status
            } = req.body;

            const contact = await ContactModel.findByPk(id);

            if (!contact) {

                return res.status(404).json({
                    success: false,
                    message: 'Liên hệ không tồn tại'
                });

            }

            await contact.update({

                reply,
                status

            });

            res.status(200).json({
                success: true,
                message: 'Phản hồi thành công',
                data: contact
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }

    }

}

module.exports = ContactController;