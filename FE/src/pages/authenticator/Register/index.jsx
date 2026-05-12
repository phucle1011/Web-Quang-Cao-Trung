import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Constants from "../../../Constants.jsx";
import "react-toastify/dist/ReactToastify.css";

const URL = Constants.DOMAIN_API;

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const formData = {
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                password: data.password,
            };
            await axios.post(`${URL}/register`, formData);
            toast.success("Đăng ký thành công!", {
                onClose: () => navigate("/login")
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
        <>
            <ToastContainer position="top-right" autoClose={2000} />
            <main className="flex items-center justify-center min-h-screen bg-amber-50">
                <div className="w-full max-w-md bg-white my-[50px] p-6 rounded-2xl shadow-lg">
                    <a href="/" className="hover:underline text-sm" style={{ color: "#e07000" }}>
                        &larr; Quay về trang chủ
                    </a>

                    <h2 className="text-2xl font-bold text-center mt-2" style={{ color: "#7a4500" }}>
                        Đăng ký
                    </h2>

                    <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm mb-1 font-bold" style={{ color: "#7a4500" }}>Họ và Tên</label>
                            <input type="text"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                {...register("fullName", {
                                    required: { value: true, message: "Họ và Tên không được để trống" }
                                })}
                            />
                            {errors.fullName && <small className="text-red-500">{errors.fullName.message}</small>}
                        </div>

                        <div className="mt-3">
                            <label className="block text-sm mb-1 font-bold" style={{ color: "#7a4500" }}>Số điện thoại</label>
                            <input type="tel"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                {...register("phone", {
                                    required: "Số điện thoại không được để trống",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Số điện thoại không hợp lệ, chỉ được nhập 10 chữ số",
                                    },
                                })}
                            />
                            {errors.phone && <small className="text-red-500">{errors.phone.message}</small>}
                        </div>

                        <div className="mt-3">
                            <label className="block text-sm mb-1 font-bold" style={{ color: "#7a4500" }}>Email</label>
                            <input type="email"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                {...register("email", {
                                    required: "Email không được để trống",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email không hợp lệ",
                                    },
                                })}
                            />
                            {errors.email && <small className="text-red-500">{errors.email.message}</small>}
                        </div>

                        <div className="mt-3">
                            <label className="block text-sm mb-1 font-bold" style={{ color: "#7a4500" }}>Mật khẩu</label>
                            <input type="password"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                                {...register("password", {
                                    required: "Mật khẩu không được để trống",
                                    minLength: {
                                        value: 5,
                                        message: "Mật khẩu phải ít nhất 5 ký tự",
                                    },
                                })}
                            />
                            {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white py-2 rounded-lg mt-4 font-bold hover:opacity-90 transition"
                            style={{ background: "linear-gradient(135deg,#f97316,#e07000)" }}
                        >
                            Đăng ký
                        </button>

                        <p className="text-center text-sm mt-3">
                            Đã có tài khoản?{" "}
                            <Link to="/login" className="hover:underline font-medium" style={{ color: "#e07000" }}>
                                Đăng nhập
                            </Link>
                        </p>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Register;