import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const reviews = [
    { name: "Chị Lan Anh", location: "Bình Dương", stars: 5, text: "Trứng tươi lắm, lòng đỏ đậm màu, mình mua cho bếp ăn công ty 3 năm nay chưa thất vọng lần nào!", avatar: "LA" },
    { name: "Anh Minh Tuấn", location: "TP.HCM", stars: 5, text: "Giao hàng đúng giờ, đóng gói cẩn thận, giá cả hợp lý. Đã giới thiệu cho nhiều bạn bè rồi.", avatar: "MT" },
    { name: "Chị Thu Hà", location: "Đồng Nai", stars: 5, text: "Combo 100 quả rất tiết kiệm, chất lượng đồng đều, không có quả nào bị hỏng. Rất hài lòng!", avatar: "TH" },
    { name: "Anh Quốc Bảo", location: "Bình Phước", stars: 5, text: "Bếp ăn tập thể 200 người, mình lấy hàng ở đây mỗi tuần. Uy tín, giá tốt, giao nhanh.", avatar: "QB" },
    { name: "Chị Ngọc Mai", location: "Tây Ninh", stars: 5, text: "Trứng sạch, không có mùi, nấu gì cũng ngon. Cảm ơn Trân Hương đã phục vụ tận tâm!", avatar: "NM" },
];

const certLogos = [
    { label: "ISO 22000:2018", sub: "An toàn thực phẩm", icon: "🏅" },
    { label: "ISO 9001:2015", sub: "Quản lý chất lượng", icon: "🎖️" },
    { label: "VSATTP", sub: "Bộ Y tế chứng nhận", icon: "✅" },
    { label: "Thương hiệu tin dùng", sub: "Việt Nam 2017", icon: "🥇" },
];

const farmImages = [
    { label: "Chuồng trại hiện đại", emoji: "🏗️", bg: "#fff8ed" },
    { label: "Gà được chăm sóc tốt", emoji: "🐔", bg: "#fef3e2" },
    { label: "Trứng sạch kiểm định", emoji: "🥚", bg: "#fff8ed" },
    { label: "Đóng gói vệ sinh", emoji: "📦", bg: "#fef3e2" },
    { label: "Giao hàng tận nơi", emoji: "🚚", bg: "#fff8ed" },
    { label: "Chất lượng cam kết", emoji: "⭐", bg: "#fef3e2" },
];

// ── 2. FLASH SALE BANNER ────────────────────
// function FlashSaleBanner() {
//     const [time, setTime] = useState({ h: 5, m: 59, s: 47 });
//     useEffect(() => {
//         const t = setInterval(() => {
//             setTime(prev => {
//                 let { h, m, s } = prev;
//                 s--;
//                 if (s < 0) { s = 59; m--; }
//                 if (m < 0) { m = 59; h--; }
//                 if (h < 0) return { h: 5, m: 59, s: 59 };
//                 return { h, m, s };
//             });
//         }, 1000);
//         return () => clearInterval(t);
//     }, []);
//     const pad = n => String(n).padStart(2, "0");

//     return (
//         <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl mt-4 p-4 text-white flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-3">
//                 <span className="text-3xl">⚡</span>
//                 <div>
//                     <p className="font-extrabold text-lg leading-none">FLASH SALE HÔM NAY</p>
//                     <p className="text-white/80 text-sm">Combo 30 quả giảm 10% — chỉ áp dụng khi đặt qua điện thoại</p>
//                 </div>
//             </div>
//             <div className="flex items-center gap-2 text-center">
//                 <span className="text-white/80 text-sm mr-1">Kết thúc sau:</span>
//                 {[pad(time.h), pad(time.m), pad(time.s)].map((v, i) => (
//                     <span key={i} className="flex items-center gap-1">
//                         <span className="bg-white/20 text-white font-mono font-bold text-xl px-3 py-1 rounded-lg">{v}</span>
//                         {i < 2 && <span className="font-bold text-lg">:</span>}
//                     </span>
//                 ))}
//             </div>
//             <a href="tel:0356808561"
//                 className="bg-white text-red-600 font-bold px-5 py-2 rounded-lg no-underline hover:bg-yellow-50 transition flex-shrink-0 text-center">
//                 Nhận ưu đãi →
//             </a>
//         </div>
//     );
// }

// ── 3. PRODUCTS (existing + add-to-cart buttons) ──
function Products() {
    const [cart, setCart] = useState({});
    const products = [
        {
            key: "l1", img: "/assets/images/main/trungloai1.png", title: "Trứng Loại 1",
            badge: "Bán chạy", badgeColor: "bg-orange-500",
            desc: "Kích thước lớn, lòng đỏ đậm",
            items: [
                { label: "Mua lẻ", sub: "Kích thước lớn", price: "1.600đ/quả" },
                { label: "Combo 30 quả", sub: "Tiết kiệm hơn mua lẻ", price: "46.000đ" },
                { label: "Combo 100 quả", sub: "Phù hợp bếp ăn tập thể", price: "150.000đ" },
            ]
        },
        {
            key: "l2", img: "/assets/images/main/trungloai2.png", title: "Trứng Loại 2",
            badge: "Phổ biến", badgeColor: "bg-sky-500",
            desc: "Vừa phải, tươi mới",
            items: [
                { label: "Mua lẻ", sub: "Vừa phải, tươi mới", price: "1.500đ/quả" },
                { label: "Combo 30 quả", sub: "Tiết kiệm hơn mua lẻ", price: "43.000đ" },
                { label: "Combo 100 quả", sub: "Phù hợp bếp ăn tập thể", price: "143.000đ" },
            ]
        },
        {
            key: "l3", img: "/assets/images/main/trungloai3.png", title: "Trứng Loại 3",
            badge: "Tiết kiệm", badgeColor: "bg-green-500",
            desc: "Kinh tế, hàng ngày",
            items: [
                { label: "Mua lẻ", sub: "Kinh tế, hàng ngày", price: "1.400đ/quả" },
                { label: "Combo 30 quả", sub: "Tiết kiệm hơn mua lẻ", price: "40.000đ" },
                { label: "Combo 100 quả", sub: "Phù hợp bếp ăn tập thể", price: "135.000đ" },
            ]
        },
    ];

    const handleOrder = (productTitle, itemLabel, price) => {
        const msg = encodeURIComponent(`Xin chào! Tôi muốn đặt mua ${productTitle} - ${itemLabel} (${price})`);
        window.open(`https://zalo.me/0356808561?text=${msg}`, "_blank");
    };

    return (
        <div id="products" className="bg-white p-4 rounded-lg shadow mt-4 text-center mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#7a4500]">SẢN PHẨM NỔI BẬT</h2>
            <p className="mb-4 text-gray-500">Được khách hàng tin tưởng và lựa chọn</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                {products.map(p => (
                    <div key={p.key} className="rounded-xl shadow-md w-full md:w-1/3 p-3 border border-amber-50 hover:shadow-lg transition">
                        <div className="relative rounded-xl overflow-hidden bg-amber-50 h-40">
                            <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                            <span className={`absolute top-2 right-2 ${p.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                                {p.badge}
                            </span>
                        </div>
                        <h3 className="font-bold text-base mt-3 mb-2 text-[#7a4500]">{p.title}</h3>
                        <div className="space-y-2">
                            {p.items.map((item, i) => (
                                <div key={i} className={`flex justify-between items-center pb-2 ${i < p.items.length - 1 ? "border-b" : ""}`}>
                                    <div className="text-left flex-1">
                                        <p className="font-semibold text-sm">{item.label}</p>
                                        <p className="text-gray-400 text-xs">{item.sub}</p>
                                    </div>
                                    <div className="text-right ml-2">
                                        <p className="text-orange-600 font-bold text-sm">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-3">
                            <a href="/product"
                                className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition no-underline">
                                🛒 Đặt ngay
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── 4. CUSTOMER REVIEWS ─────────────────────
function Reviews() {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-4 text-center mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#7a4500]">KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI?</h2>
            <p className="text-gray-500 mb-4">Hơn 5.000 khách hàng tin dùng mỗi tháng</p>
            <div className="flex overflow-x-auto gap-4 pb-2 md:grid md:grid-cols-3 md:overflow-visible">
                {reviews.slice(0, 6).map((r, i) => (
                    <div key={i} className="min-w-[260px] md:min-w-0 bg-amber-50 rounded-xl p-4 text-left flex-shrink-0">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-orange-400 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                                {r.avatar}
                            </div>
                            <div>
                                <p className="font-bold text-sm text-gray-800">{r.name}</p>
                                <p className="text-xs text-gray-400">📍 {r.location}</p>
                            </div>
                        </div>
                        <div className="text-yellow-400 text-sm mb-1">{"⭐".repeat(r.stars)}</div>
                        <p className="text-gray-600 text-sm italic">"{r.text}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── 5. FARM GALLERY ──────────────────────────
function FarmGallery() {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-4 text-center mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#7a4500]">TRANG TRẠI THỰC TẾ CỦA CHÚNG TÔI</h2>
            <p className="text-gray-500 mb-4">Minh bạch quy trình – từ trang trại đến bàn ăn</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {farmImages.map((img, i) => (
                    <div key={i}
                        className="rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 hover:scale-105 transition-transform cursor-pointer"
                        style={{ background: img.bg, minHeight: 120 }}>
                        <div className="text-5xl mb-2">{img.emoji}</div>
                        <p className="text-sm font-semibold text-gray-700 text-center">{img.label}</p>
                    </div>
                ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">
                * Chúng tôi chào đón khách tham quan trang trại theo lịch hẹn. Liên hệ: 0356 808 561
            </p>
        </div>
    );
}

// ── 6. CERTIFICATIONS ───────────────────────
function Certifications() {
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-4 text-center mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#7a4500]">CHỨNG NHẬN & UY TÍN</h2>
            <p className="text-gray-500 mb-4">Được kiểm định và công nhận bởi các tổ chức uy tín</p>
            <div className="flex flex-wrap justify-center gap-4">
                {certLogos.map((c, i) => (
                    <div key={i} className="flex flex-col items-center justify-center bg-amber-50 border border-amber-100 rounded-xl px-6 py-4 w-40 hover:shadow-md transition">
                        <div className="text-4xl mb-2">{c.icon}</div>
                        <p className="font-bold text-sm text-gray-800">{c.label}</p>
                        <p className="text-xs text-gray-500 mt-1">{c.sub}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── ZALO FLOAT BUTTON ────────────────────────
function ZaloFloat() {
    const [show, setShow] = useState(false);
    return (
        <div className="fixed bottom-6 right-6 z-50">
            {show && (
                <div className="mb-3 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 w-60 relative">
                    {/* Nút X */}
                    <button
                        onClick={() => setShow(false)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0068FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-gray-700">Kết bạn Zalo</p>
                    </div>
                    <p className="text-xs text-gray-400 mb-3 text-center">để bắt đầu trò chuyện</p>

                    <div className="bg-gray-50 rounded-xl px-3 py-2 mb-2 text-left">
                        <p className="text-[15px] font-semibold text-gray-800 tracking-wide whitespace-nowrap">📞 0356 808 561</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl px-3 py-2 text-left">
                        <p className="text-[15px] font-semibold text-gray-800 tracking-wide whitespace-nowrap">📞 0938 775 599</p>
                    </div>
                </div>
            )}
            <button
                onClick={() => setShow(!show)}
                className="flex items-center gap-2 text-white font-bold px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105"
                style={{ background: "#0068ff", boxShadow: "0 4px 20px rgba(0,104,255,0.4)" }}>
                <span className="text-xl">💬</span>
                <span className="text-sm hidden sm:inline">Chat Zalo</span>
            </button>
        </div>
    );
}

/* ─────────────────────────────────────────────
   ORIGINAL SECTIONS (preserved)
───────────────────────────────────────────── */
function WhyUs() {
    return (
        <div className="bg-white p-2 rounded-lg shadow mt-4 text-center mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#7a4500]">TẠI SAO LẠI LỰA CHỌN CHÚNG TÔI?</h2>
            <p className="mb-4">Chúng tôi cam kết mang đến sản phẩm tốt nhất cho gia đình bạn</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch p-4">
                {[
                    { icon: "🥚", title: "Chất lượng kiểm định", desc: "Toàn bộ trứng được kiểm định kỹ lưỡng, đảm bảo tươi mới và đạt tiêu chuẩn VSATTP." },
                    { icon: "🤝", title: "Hơn 20 năm uy tín", desc: "Kinh nghiệm lâu năm là minh chứng cho sự tin tưởng của hàng nghìn khách hàng." },
                    { icon: "🚚", title: "Giao hàng tận nơi", desc: "Miễn phí giao hàng tại Bình Dương và các tỉnh lân cận, nhanh chóng và đúng giờ." },
                    { icon: "📋", title: "Minh bạch giá cả", desc: "Nguồn gốc rõ ràng, giá công khai, không phát sinh chi phí ẩn." },
                ].map((item, i) => (
                    <div key={i} className="flex items-start text-left rounded-lg shadow-md w-full md:w-1/4 p-3">
                        <span className="text-4xl mr-3">{item.icon}</span>
                        <p className="max-w-xs">
                            <strong>{item.title}</strong><br />
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function NewsSection() {
    const news = [
        { href: "http://tranhuong.com.vn/tin-tuc/cach-lam-trung-hap-van-ngon-ai-cung-tam-tac-khen.html", img: "/assets/images/main/cachlammontrunghapvan_3938.jpg", title: "Cách làm trứng hấp vân ngon, ai cũng tấm tắc khen", desc: "Trứng hấp vân là món ăn ngon, dễ chế biến, phù hợp cho cả gia đình..." },
        { href: "http://tranhuong.com.vn/tin-tuc/cach-lam-tom-chay-bang-vang-dau-phu-gion-dai.html", img: "/assets/images/main/slide_8900.jpg", title: "Cách làm tôm chay bằng váng đậu phụ giòn dai", desc: "Chỉ với vài bước đơn giản là có ngay món tôm chay vừa sạch sẽ, vừa ngon miệng..." },
        { href: "http://tranhuong.com.vn/tin-tuc/le-don-nhan-iso.html", img: "/assets/images/main/iso_4287.jpg", title: "Trân Hương đón nhận chứng nhận ISO 22000 & 9001", desc: "Tự hào là doanh nghiệp thực phẩm hàng đầu đạt chuẩn ISO tại Việt Nam..." },
        { href: "http://tranhuong.com.vn/tin-tuc/chung-nhan.html", img: "/assets/images/main/345_8036.png", title: "Vinh danh Thương hiệu – Nhãn hiệu tin dùng 2017", desc: "Năm 2017, Trân Hương vinh dự được tôn vinh trong lễ trao giải Thương hiệu tin dùng..." },
    ];
    return (
        <div className="bg-white p-4 rounded-lg shadow mt-4 text-center mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-[#7a4500]">TIN TỨC</h2>
            <p className="mb-4 text-gray-500">Kiến thức hữu ích về trứng gà và dinh dưỡng</p>
            <div className="flex gap-3 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible pb-2">
                {news.map((n, i) => (
                    <a key={i} href={n.href} target="_blank" rel="noreferrer"
                        className="min-w-[220px] md:min-w-0 bg-white text-left shadow-md rounded-lg p-2 flex flex-col no-underline flex-shrink-0 hover:shadow-lg transition">
                        <img src={n.img} alt={n.title} className="rounded-lg mb-2 w-full h-32 object-cover" />
                        <h3 className="text-sm font-bold text-gray-800 line-clamp-2">{n.title}</h3>
                        <p className="text-gray-400 text-xs mt-1 line-clamp-2">{n.desc}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

function StatsSection() {
    const statsRef = useRef(null);
    const [animated, setAnimated] = useState(false);
    const [counts, setCounts] = useState({ years: 0, customers: 0, orders: 0, provinces: 0 });

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !animated) {
                setAnimated(true);
                animateCount("years", 20);
                animateCount("customers", 5000);
                animateCount("orders", 1200);
                animateCount("provinces", 8);
            }
        }, { threshold: 0.3 });
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, [animated]);

    const animateCount = (key, target) => {
        const duration = 1800;
        const start = performance.now();
        const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            setCounts(prev => ({ ...prev, [key]: Math.floor(progress * target) }));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    };

    return (
        <div className="bg-white p-4 pb-4 rounded-lg shadow mt-4 text-center mx-auto" ref={statsRef}>
            <h2 className="text-xl md:text-2xl font-bold text-[#7a4500]">CHẤT LƯỢNG LÀ DANH DỰ</h2>
            <p className="mb-4 text-gray-500">Chúng tôi cam kết mang đến sản phẩm tốt nhất</p>
            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
                {[
                    { label: "Năm kinh nghiệm", value: counts.years, suffix: "+" },
                    { label: "Khách hàng tin dùng", value: counts.customers.toLocaleString(), suffix: "+" },
                    { label: "Đơn hàng / tháng", value: counts.orders.toLocaleString(), suffix: "+" },
                    { label: "Tỉnh thành phân phối", value: counts.provinces, suffix: "+" },
                ].map((s, i) => (
                    <div key={i} className="bg-amber-50 p-4 rounded-lg text-center w-full md:w-1/4">
                        <h3 className="text-base font-bold text-orange-600 mb-2">{s.label}</h3>
                        <p className="text-4xl font-semibold text-gray-700">{animated ? s.value : 0}{s.suffix}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CTASection() {
    return (
        <div className="bg-amber-50 p-4 md:p-6 rounded-lg shadow mt-4 text-center mx-auto border border-amber-200">
            <div className="inline-block bg-orange-100 text-orange-600 border border-orange-300 px-3 py-1 rounded-full text-xs md:text-sm font-bold mb-3">
                🚚 Miễn phí giao hàng tận nơi khi đặt mua số lượng lớn
            </div>
            <h2 className="text-lg md:text-2xl font-bold text-[#7a4500] mb-2">ĐẶT HÀNG NGAY HÔM NAY!</h2>
            <p className="text-gray-600 text-sm md:text-base mb-4">Giao hàng tận nơi tại Bình Dương và các tỉnh lân cận. Cam kết chất lượng — an toàn vệ sinh.</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
                <a href="#"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg no-underline transition duration-200 text-sm md:text-base">
                    📞 0356 808 561
                </a>
                <a href="#"
                    className="bg-white hover:bg-orange-50 text-orange-500 border border-orange-400 font-bold px-6 py-3 rounded-lg no-underline transition duration-200 text-sm md:text-base">
                    📞 0938 77 55 99
                </a>
            </div>
            <p className="mt-4 text-gray-500 text-xs md:text-sm">🌐 www.tranhuong.com.vn &nbsp;|&nbsp; 📘 Công ty TNHH TP TM-DV Trân Hương</p>
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN HOME COMPONENT
───────────────────────────────────────────── */
function Home() {
    return (
        <main className="home mx-auto w-full md:w-[80%] px-4" id="home">
            <WhyUs />
            <Products />
            <Reviews />
            <FarmGallery />
            <Certifications />
            <NewsSection />
            <StatsSection />
            <CTASection />
            <ZaloFloat />
        </main>
    );
}

export default Home;