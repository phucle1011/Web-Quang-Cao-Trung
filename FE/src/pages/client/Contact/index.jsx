import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Constants from "../../../Constants";
import axios from "axios";

const URL = Constants.DOMAIN_API;

function Contact() {
    return (
        <main className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-[7%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                {/* CỘT TRÁI - FAQ */}
                <section className="py-2">
                    <h2 className="px-3 text-3xl font-bold text-blue-950 mb-6 border-b border-gray-300 pb-2">
                        Câu hỏi thường gặp
                    </h2>
                    <div className="space-y-3 px-4">
                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Làm thế nào để đặt mua trứng?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Bạn có thể đặt mua trứng trực tiếp trên website bằng cách chọn sản phẩm, thêm vào giỏ hàng và tiến hành thanh toán.
                                Ngoài ra, bạn cũng có thể liên hệ hotline để được hỗ trợ đặt hàng nhanh chóng.
                            </p>
                        </details>
                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Trứng có đảm bảo tươi và an toàn không?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Tất cả trứng đều được lấy từ trang trại uy tín, kiểm định chất lượng kỹ càng trước khi giao đến khách hàng.
                                Chúng tôi cam kết trứng luôn tươi mới và an toàn vệ sinh thực phẩm.
                            </p>
                        </details>
                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Tôi nên bảo quản trứng như thế nào?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Nên bảo quản trứng trong ngăn mát tủ lạnh ở nhiệt độ ổn định. Tránh rửa trứng trước khi cất để giữ được lớp bảo vệ tự nhiên,
                                giúp trứng tươi lâu hơn.
                            </p>
                        </details>
                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Giao hàng trứng mất bao lâu?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Thời gian giao hàng thường từ 1–3 ngày tùy khu vực. Chúng tôi luôn đóng gói cẩn thận để đảm bảo trứng không bị vỡ trong quá trình vận chuyển.
                            </p>
                        </details>
                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Nếu trứng bị vỡ khi nhận hàng thì sao?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Nếu sản phẩm bị vỡ hoặc hư hỏng khi nhận hàng, bạn có thể liên hệ ngay với chúng tôi trong vòng 24 giờ để được hỗ trợ đổi trả hoặc hoàn tiền.
                            </p>
                        </details>
                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Tôi có thể đặt số lượng lớn (sỉ) không?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Chúng tôi hỗ trợ đặt hàng số lượng lớn cho các đại lý, nhà hàng, trường học và doanh nghiệp.
                                Vui lòng liên hệ hotline hoặc email để được báo giá sỉ ưu đãi.
                            </p>
                        </details>

                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Trứng có hạn sử dụng bao lâu?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Trứng gà tươi thường có thể sử dụng trong vòng 30 ngày kể từ ngày đẻ nếu bảo quản đúng cách trong tủ lạnh.
                                Mỗi lô hàng đều được ghi rõ ngày sản xuất để bạn tiện theo dõi.
                            </p>
                        </details>

                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Trứng có được kiểm định an toàn thực phẩm không?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Có. Tất cả sản phẩm của chúng tôi đều đạt tiêu chuẩn an toàn vệ sinh thực phẩm theo quy định của Bộ Y tế.
                                Trang trại định kỳ được kiểm tra và cấp chứng nhận đảm bảo chất lượng.
                            </p>
                        </details>

                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Có chương trình khuyến mãi hay ưu đãi thành viên không?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Chúng tôi thường xuyên có các chương trình khuyến mãi theo mùa và ưu đãi cho khách hàng thân thiết.
                                Đăng ký tài khoản trên website để nhận thông báo sớm nhất về các chương trình ưu đãi.
                            </p>
                        </details>
                        <details className="border border-gray-300 p-2 rounded-md bg-gray-50">
                            <summary className="cursor-pointer font-semibold text-lg text-gray-800">
                                Tôi có thể hủy hoặc thay đổi đơn hàng sau khi đặt không?
                            </summary>
                            <p className="mt-3 text-gray-700 leading-relaxed">
                                Bạn có thể hủy hoặc chỉnh sửa đơn hàng trong vòng 2 giờ kể từ khi đặt hàng thành công.
                                Sau thời gian này, đơn hàng có thể đã được xử lý và không thể thay đổi. Vui lòng liên hệ hotline sớm nhất có thể để được hỗ trợ.
                            </p>
                        </details>
                    </div>
                </section>

                {/* CỘT PHẢI - THÔNG TIN LIÊN HỆ DẠNG CARD */}
                <section className="py-2">
                    <h2 className="px-3 text-3xl font-bold text-blue-950 mb-6 border-b border-gray-300 pb-2">
                        Thông tin liên hệ
                    </h2>

                    <div className="space-y-3 px-4">

                        {/* Địa chỉ */}
                        <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
                            <div className="w-11 h-11 bg-[#043175] rounded-full flex items-center justify-center shrink-0 text-white text-xl">
                                🏠
                            </div>
                            <div>
                                <p className="font-bold text-blue-950 mb-1">Địa chỉ</p>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Lô D12, Ô 29-30 Khu dân cư Thuận Giao, khu phố bình thuận 2, Thuận Giao, Hồ Chí Minh
                                </p>
                            </div>
                        </div>

                        {/* Điện thoại */}
                        <div className="flex items-start gap-4 bg-green-50 border border-green-100 rounded-xl p-4">
                            <div className="w-11 h-11 bg-green-600 rounded-full flex items-center justify-center shrink-0 text-white text-xl">
                                📞
                            </div>
                            <div>
                                <p className="font-bold text-blue-950 mb-1">Điện thoại</p>
                                <p className="text-gray-700 text-sm">0274.3746.959 - 0274.3717.885 - 0274.3717.659</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                            <div className="w-11 h-11 bg-yellow-500 rounded-full flex items-center justify-center shrink-0 text-white text-xl">
                                ✉️
                            </div>
                            <div>
                                <p className="font-bold text-blue-950 mb-1">Email</p>
                                <a href="mailto:tranhuong888@yahoo.com" className="text-blue-600 text-sm hover:underline">
                                    tranhuong888@yahoo.com
                                </a>
                            </div>
                        </div>

                        {/* Giờ làm việc */}
                        <div className="flex items-start gap-4 bg-purple-50 border border-purple-100 rounded-xl p-4">
                            <div className="w-11 h-11 bg-purple-600 rounded-full flex items-center justify-center shrink-0 text-white text-xl">
                                🕐
                            </div>
                            <div>
                                <p className="font-bold text-blue-950 mb-1">Giờ làm việc</p>
                                <p className="text-gray-700 text-sm">Thứ 2 – Thứ 7: 7:00 – 17:00</p>
                                <p className="text-gray-500 text-sm italic">Chủ nhật: Nghỉ</p>
                            </div>
                        </div>

                        {/* Mạng xã hội */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                            <p className="font-bold text-blue-950 mb-3">Theo dõi chúng tôi</p>
                            <div className="flex gap-3">
                                <a href="https://www.facebook.com/profile.php?id=100068380728370#" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white font-bold hover:opacity-80 transition">f</a>
                                <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-lg hover:opacity-80 transition">▶</a>
                                <a href="#" className="w-10 h-10 rounded-full bg-[#00aff0] flex items-center justify-center text-white font-bold hover:opacity-80 transition">S</a>
                                <a href="mailto:tranhuong888@yahoo.com" className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-lg hover:opacity-80 transition">✉</a>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            {/* BẢN ĐỒ */}
            <section className="mt-8 border-t border-gray-300 pt-8">
                <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">Bản đồ</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.025417314242!2d106.71759499999999!3d10.9614525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d7f35f003ef7%3A0xc23acc37e77fa1e0!2zQ8O0bmcgdHkgVE5ISCBUaOG7sWMgUGjhuqltIFRNLURWIFRyw6JuIEjGsMahbmc!5e0!3m2!1sen!2s!4v1778549115316!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                />
            </section>
        </main>
    );
}

export default Contact;
