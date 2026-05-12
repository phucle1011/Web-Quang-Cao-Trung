import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import constants from "../../../Constants.jsx";
import { Link } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = constants.DOMAIN_API;

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cookies, setCookie] = useCookies(["token", "fullName", "role"]);
    const navigate = useNavigate();

    const handleLogin = async (props) => {
        try {
            const formData = {
                email: props.email,
                password: props.password,
            };
            const res = await axios.post(`${URL}/login`, formData);

            let expiresDate = new Date();
            expiresDate.setHours(expiresDate.getHours() + 10);
            setCookie("token", res.data.token, {
                path: "/",
                expires: expiresDate,
            });

            if (res.data.role === 0) {
                navigate('/admin');
            } else {
                navigate('/');
            }

            toast.success(res.data.message);
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data.message);
            } else {
                toast.error("Lỗi kết nối đến server!");
            }
        }
    };

    return (
        <main className="flex items-center justify-center h-screen bg-amber-50">
            <div className="w-full max-w-md bg-white p-6 my-[50px] rounded-2xl shadow-lg">
                <a href="/" className="hover:underline text-sm" style={{ color: "#e07000" }}>
                    &larr; Quay về trang chủ
                </a>

                <h2 className="text-2xl font-bold text-center mt-2" style={{ color: "#7a4500" }}>
                    Đăng nhập
                </h2>

                <form className="mt-2 p-3">
                    <div>
                        <label className="block text-sm mb-2 font-bold" style={{ color: "#7a4500" }}>Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
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

                    <div className="mt-3">
                        <label className="block text-sm mb-2 font-bold" style={{ color: "#7a4500" }}>Mật khẩu</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                            {...register("password", {
                                required: "Vui lòng nhập mật khẩu",
                            })}
                        />
                        {errors.password && <small className="text-red-600">{errors.password.message}</small>}
                    </div>

                    <button
                        onClick={handleSubmit(handleLogin)}
                        type="submit"
                        className="w-full text-white py-2 rounded-lg mt-4 font-bold hover:opacity-90 transition"
                        style={{ background: "linear-gradient(135deg,#f97316,#e07000)" }}
                    >
                        Đăng nhập
                    </button>

                    <p className="text-center text-sm mt-3">
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="hover:underline font-medium" style={{ color: "#e07000" }}>
                            Đăng ký
                        </Link>
                    </p>
                    <p className="text-center text-sm mt-3">
                        Quên mật khẩu?{" "}
                        <Link to="/resetForm" className="hover:underline font-medium" style={{ color: "#e07000" }}>
                            Đặt lại mật khẩu
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default Login;