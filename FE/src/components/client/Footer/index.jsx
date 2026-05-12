function Footer() {
    return (
        <footer>
            <div className="footer-top"></div>
            <div className="footer-bottom bg-[#1C2930] text-white py-10">
                <div className="px-4 w-full md:w-[80%] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-4">

                        {/* Cột trái - Thông tin công ty */}
                        <div className="flex-1">
                            <h2 className="text-orange-500 font-bold text-lg md:text-xl mb-4">
                                CÔNG TY TNHH THỰC PHẨM THƯƠNG MẠI DỊCH VỤ TRÂN HƯƠNG
                            </h2>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>
                                    🏠 Lô D12, Ô 29-30 Khu dân cư Thuận Giao, khu phố bình thuận 2, Thuận Giao, Hồ Chí Minh
                                </li>
                                <li>📞 0274.3746.959 - 0274.3717.885</li>
                                <li>✉️ tranhuong888@yahoo.com</li>
                                <li>
                                    👥 http://tranhuong.com.vn . MST: 3702504726 . Sở Kế Hoạch Và Đầu Tư
                                    Tỉnh Bình Dương. Phòng Đăng Ký Kinh Doanh Cấp lần 1: Ngày 07 tháng 10
                                    Năm 2016. Đăng ký thay đổi lần 1: Ngày 07 tháng 04 năm 2020
                                </li>
                            </ul>
                        </div>

                        {/* Cột phải - Thống kê truy cập */}
                        <div className="md:w-[280px]">
                            <h3 className="text-[#00bcd4] font-bold text-lg mb-4">THỐNG KÊ TRUY CẬP</h3>
                            <ul className="space-y-2 text-gray-300 text-sm mb-6">
                                <li>👤 Đang online:</li>
                                <li>📊 Thống kê tuần:</li>
                                <li>📈 Thống kê tháng:</li>
                                <li>🗂️ Tổng:</li>
                            </ul>

                            {/* Mạng xã hội */}
                            {/* <div className="flex gap-2">
                                {[
                                    { icon: "f", color: "#3b5998" },
                                    { icon: "t", color: "#1da1f2" },
                                    { icon: "▶", color: "#ff0000" },
                                    { icon: "S", color: "#00aff0" },
                                ].map((item, index) => (
                                    
                                        key={index} href="#"
                                        className="w-9 h-9 flex items-center justify-center rounded text-white font-bold text-sm" style={{ backgroundColor: item.color }}
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div> */}
                        </div>

                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
                    Copyright © 2026 CÔNG TY TNHH THỰC PHẨM THƯƠNG MẠI DỊCH VỤ TRÂN HƯƠNG
                </div>
            </div>
        </footer>
    );
}

export default Footer;