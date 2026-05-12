import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Constants from "../../../Constants";

const URL = Constants.DOMAIN_API;

function ResetPassword() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onTouched" });
    const { token } = useParams();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.patch(`${URL}/resetPassword/reset/${token}`, { password: data.password });
            toast.success(response.data.message, {
                onClose: () => navigate("/login"),
            });
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            } else {
                toast.error("Lỗi kết nối đến server!");
            }
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-amber-50">
            <div className="w-full max-w-md bg-white p-6 my-[50px] rounded-2xl shadow-lg">
                <a href="/" className="hover:underline text-sm" style={{ color: "#e07000" }}>
                    &larr; Quay về trang chủ
                </a>

                <h2 className="text-2xl font-bold text-center mt-2" style={{ color: "#7a4500" }}>
                    Đặt lại mật khẩu
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-2 p-3">
                    <div>
                        <label className="block text-sm mb-2 font-bold" style={{ color: "#7a4500" }}>
                            Mật khẩu mới
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            {...register("password", {
                                required: "Vui lòng nhập mật khẩu mới",
                                minLength: {
                                    value: 6,
                                    message: "Mật khẩu phải có ít nhất 6 ký tự",
                                },
                            })}
                        />
                        {errors.password && (
                            <small className="text-red-600">{errors.password.message}</small>
                        )}
                    </div>

                    <div className="mt-3">
                        <label className="block text-sm mb-2 font-bold" style={{ color: "#7a4500" }}>
                            Nhập lại mật khẩu
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            {...register("confirmPassword", {
                                validate: (value) =>
                                    value === watch("password") || "Mật khẩu nhập lại không khớp",
                            })}
                        />
                        {errors.confirmPassword && (
                            <small className="text-red-600">{errors.confirmPassword.message}</small>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white py-2 rounded-lg mt-4 font-bold hover:opacity-90 transition"
                        style={{ background: "linear-gradient(135deg,#f97316,#e07000)" }}
                    >
                        Đặt lại mật khẩu
                    </button>

                    <p className="text-center text-sm mt-3">
                        Quay lại{" "}
                        <a href="/login" className="hover:underline font-medium" style={{ color: "#e07000" }}>
                            đăng nhập
                        </a>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default ResetPassword;