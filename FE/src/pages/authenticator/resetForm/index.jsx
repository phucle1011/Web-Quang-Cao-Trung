import { useForm } from "react-hook-form";
import Constants from "../../../Constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = Constants.DOMAIN_API;

function ResetForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (spors) => {
        try {
            const res = await axios.post(`${URL}/resetPassword`, { email: spors.email });
            toast.success("Yêu cầu đặt lại mật khẩu đã được gửi đến email của bạn!");
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
            <ToastContainer position="top-right" autoClose={2000} />

            <div className="w-full max-w-md bg-white p-6 my-[50px] rounded-2xl shadow-lg">
                <a href="/" className="hover:underline text-sm" style={{ color: "#e07000" }}>
                    &larr; Quay về trang chủ
                </a>

                <h2 className="text-2xl font-bold text-center mt-2" style={{ color: "#7a4500" }}>
                    Quên mật khẩu
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-2 p-3">
                    <div>
                        <label className="block text-sm mb-2 font-bold" style={{ color: "#7a4500" }}>Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            placeholder="Nhập email đã đăng ký"
                            {...register("email", {
                                required: "Vui lòng nhập email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Email không hợp lệ",
                                },
                            })}
                        />
                        {errors.email && <small className="text-red-600">{errors.email.message}</small>}
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white py-2 rounded-lg mt-4 font-bold hover:opacity-90 transition"
                        style={{ background: "linear-gradient(135deg,#f97316,#e07000)" }}
                    >
                        Gửi yêu cầu đặt lại mật khẩu
                    </button>

                    <p className="text-center text-sm mt-3">
                        Đã nhớ mật khẩu?{" "}
                        <a href="/login" className="hover:underline font-medium" style={{ color: "#e07000" }}>
                            Đăng nhập
                        </a>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default ResetForm;