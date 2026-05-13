function Footer() {
    return (
        <footer>
            <div className="footer-top"></div>
            <div className="footer-bottom bg-[#1C2930] text-white py-8">
                <div className="px-4 w-full md:w-[80%] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-4">

                        {/* Cột trái - Thông tin công ty */}
                        <div className="flex-1">
                            <h2 className="text-orange-500 font-bold text-base md:text-xl mb-3">
                                CÔNG TY TNHH THỰC PHẨM THƯƠNG MẠI DỊCH VỤ TRÂN HƯƠNG
                            </h2>
                            <ul className="space-y-2 text-gray-300 text-xs md:text-sm">
                                <li>🏠 Lô D12, Ô 29-30 Khu dân cư Thuận Giao, khu phố Bình Thuận 2, Thuận Giao, Hồ Chí Minh</li>
                                <li>📞 0274.3746.959 - 0274.3717.885</li>
                                <li>✉️ tranhuong888@yahoo.com</li>
                                <li className="text-xs text-gray-400 leading-relaxed">
                                    MST: 3702504726 · Sở Kế Hoạch Và Đầu Tư Tỉnh Bình Dương · Cấp lần 1: 07/10/2016 · Thay đổi lần 1: 07/04/2020
                                </li>
                            </ul>
                        </div>

                        {/* Cột phải - Thống kê */}
                        <div className="w-full md:w-[280px]">
                            <h3 className="text-[#00bcd4] font-bold text-base mb-3">THỐNG KÊ TRUY CẬP</h3>
                            <ul className="space-y-1 text-gray-300 text-xs md:text-sm">
                                <li>👤 Đang online:</li>
                                <li>📊 Thống kê tuần:</li>
                                <li>📈 Thống kê tháng:</li>
                                <li>🗂️ Tổng:</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-400 text-xs md:text-sm px-4">
                    Copyright © 2026 CÔNG TY TNHH THỰC PHẨM THƯƠNG MẠI DỊCH VỤ TRÂN HƯƠNG
                </div>
            </div>
        </footer>
    );
}

export default Footer;