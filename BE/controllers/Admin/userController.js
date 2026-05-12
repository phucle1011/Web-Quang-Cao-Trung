const UserModel = require('../../models/UserModel');
const bcrypt = require('bcryptjs');

class UserController {

    // ======================================
    // LẤY DANH SÁCH USERS
    // ======================================

    static async get(req, res) {
        try {

            const users = await UserModel.findAll({
                attributes: {
                    exclude: ['password']
                },
                order: [['id', 'DESC']]
            });

            res.status(200).json({
                success: true,
                message: 'Lấy danh sách thành công',
                data: users
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    // ======================================
    // LẤY USER THEO ID
    // ======================================

    static async getById(req, res) {

        try {

            const { id } = req.params;

            const user = await UserModel.findByPk(id, {
                attributes: {
                    exclude: ['password']
                }
            });

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy người dùng'
                });
            }

            res.status(200).json({
                success: true,
                message: 'Lấy dữ liệu thành công',
                data: user
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    // ======================================
    // THÊM USER
    // ======================================

    static async create(req, res) {

        try {

            const {
                fullName,
                email,
                phone,
                password,
                role,
                address,
                status
            } = req.body;

            // avatar upload
            const avatar = req.file ? req.file.filename : null;

            // check email
            const existingUser = await UserModel.findOne({
                where: {
                    email
                }
            });

            if (existingUser) {

                return res.status(400).json({
                    success: false,
                    message: 'Email đã tồn tại'
                });

            }

            // hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // create user
            const newUser = await UserModel.create({

                fullName,
                email,
                phone,
                password: hashedPassword,
                role,
                address,
                avatar,
                status

            });

            res.status(201).json({
                success: true,
                message: 'Thêm người dùng thành công',
                data: newUser
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    // ======================================
    // CẬP NHẬT USER
    // ======================================

    static async update(req, res) {

        try {

            const { id } = req.params;

            const {
                fullName,
                email,
                phone,
                role,
                address,
                status
            } = req.body;

            const avatar = req.file ? req.file.filename : null;

            // find user
            const user = await UserModel.findByPk(id);

            if (!user) {

                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy người dùng'
                });

            }

            // update
            await user.update({

                fullName,
                email,
                phone,
                role,
                address,
                status,

                ...(avatar && { avatar })

            });

            res.status(200).json({
                success: true,
                message: 'Cập nhật thành công',
                data: user
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    // ======================================
    // ĐỔI MẬT KHẨU
    // ======================================

    static async changePassword(req, res) {

        try {

            const { id } = req.params;

            const {
                oldPassword,
                newPassword
            } = req.body;

            const user = await UserModel.findByPk(id);

            if (!user) {

                return res.status(404).json({
                    success: false,
                    message: 'Không tìm thấy người dùng'
                });

            }

            // check password
            const isMatch = await bcrypt.compare(
                oldPassword,
                user.password
            );

            if (!isMatch) {

                return res.status(400).json({
                    success: false,
                    message: 'Mật khẩu cũ không đúng'
                });

            }

            // hash new password
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            await user.update({
                password: hashedPassword
            });

            res.status(200).json({
                success: true,
                message: 'Đổi mật khẩu thành công'
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    // ======================================
    // XÓA USER
    // ======================================

    static async delete(req, res) {

        try {

            const { id } = req.params;

            const user = await UserModel.findByPk(id);

            if (!user) {

                return res.status(404).json({
                    success: false,
                    message: 'Người dùng không tồn tại'
                });

            }

            await user.destroy();

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

module.exports = UserController;