import { useState } from "react";

/* ─── DATA ─── */
const PRODUCTS = [
    /* =========================
       LOẠI 1
    ========================= */
    {
        id: 1,
        category: "loai1",
        name: "Trứng gà Loại 1 (Mua lẻ)",
        desc: "Kích thước lớn, lòng đỏ đậm, giàu dinh dưỡng. Phù hợp gia đình và bếp ăn tập thể.",
        img: "/assets/images/main/trungloai1.png",
        badge: "Bán chạy",
        badgeColor: "#f97316",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "6.3g protein / quả",
        prices: [
            { label: "Mua lẻ", unit: "quả", price: 1600 },
            { label: "30 quả", unit: "combo", price: 46000 },
            { label: "100 quả", unit: "combo", price: 150000 },
        ],
    },
    {
        id: 2,
        category: "loai1",
        name: "Trứng gà Loại 1 (Vỉ 10)",
        desc: "Đóng gói vỉ 10 quả tiện lợi, dễ bảo quản, phù hợp gia đình nhỏ.",
        img: "/assets/images/main/trungloai1.png",
        badge: "Tiện lợi",
        badgeColor: "#0ea5e9",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "6.3g protein / quả",
        prices: [
            { label: "Vỉ 10", unit: "vỉ", price: 15000 },
            { label: "3 vỉ", unit: "combo", price: 43000 },
            { label: "10 vỉ", unit: "combo", price: 140000 },
        ],
    },
    {
        id: 3,
        category: "loai1",
        name: "Trứng gà Loại 1 (Thùng 200)",
        desc: "Thùng 200 quả phù hợp nhà hàng, quán ăn, bếp ăn tập thể.",
        img: "/assets/images/main/trungloai1.png",
        badge: "Giá sỉ",
        badgeColor: "#7c3aed",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "6.3g protein / quả",
        prices: [
            { label: "1 thùng", unit: "thùng", price: 290000 },
            { label: "2 thùng", unit: "combo", price: 570000 },
            { label: "5 thùng", unit: "combo", price: 1400000 },
        ],
    },

    /* =========================
       LOẠI 2
    ========================= */
    {
        id: 4,
        category: "loai2",
        name: "Trứng gà Loại 2 (Mua lẻ)",
        desc: "Kích thước vừa phải, tươi mới mỗi ngày. Lựa chọn phổ biến nhất của gia đình Việt.",
        img: "/assets/images/main/trungloai2.png",
        badge: "Phổ biến",
        badgeColor: "#22c55e",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "5.8g protein / quả",
        prices: [
            { label: "Mua lẻ", unit: "quả", price: 1500 },
            { label: "30 quả", unit: "combo", price: 43000 },
            { label: "100 quả", unit: "combo", price: 143000 },
        ],
    },
    {
        id: 5,
        category: "loai2",
        name: "Trứng gà Loại 2 (Vỉ 10)",
        desc: "Vỉ 10 quả loại 2, kích thước vừa, tươi ngon mỗi ngày.",
        img: "/assets/images/main/trungloai2.png",
        badge: "Gia đình",
        badgeColor: "#0ea5e9",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "5.8g protein / quả",
        prices: [
            { label: "Vỉ 10", unit: "vỉ", price: 14000 },
            { label: "3 vỉ", unit: "combo", price: 40000 },
            { label: "10 vỉ", unit: "combo", price: 132000 },
        ],
    },
    {
        id: 6,
        category: "loai2",
        name: "Trứng gà Loại 2 (Thùng 200)",
        desc: "Thùng 200 quả giá tốt cho đơn hàng số lượng lớn.",
        img: "/assets/images/main/trungloai2.png",
        badge: "Nhà hàng",
        badgeColor: "#7c3aed",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "5.8g protein / quả",
        prices: [
            { label: "1 thùng", unit: "thùng", price: 275000 },
            { label: "2 thùng", unit: "combo", price: 540000 },
            { label: "5 thùng", unit: "combo", price: 1320000 },
        ],
    },

    /* =========================
       LOẠI 3
    ========================= */
    {
        id: 7,
        category: "loai3",
        name: "Trứng gà Loại 3 (Mua lẻ)",
        desc: "Kinh tế, phù hợp sử dụng hàng ngày. Chất lượng đảm bảo, giá tốt.",
        img: "/assets/images/main/trungloai3.png",
        badge: "Tiết kiệm",
        badgeColor: "#16a34a",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "5.5g protein / quả",
        prices: [
            { label: "Mua lẻ", unit: "quả", price: 1400 },
            { label: "30 quả", unit: "combo", price: 40000 },
            { label: "100 quả", unit: "combo", price: 135000 },
        ],
    },
    {
        id: 8,
        category: "loai3",
        name: "Trứng gà Loại 3 (Vỉ 10)",
        desc: "Đóng vỉ 10 quả gọn gàng, phù hợp nấu ăn hàng ngày.",
        img: "/assets/images/main/trungloai3.png",
        badge: "Tiện lợi",
        badgeColor: "#0ea5e9",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "5.5g protein / quả",
        prices: [
            { label: "Vỉ 10", unit: "vỉ", price: 13000 },
            { label: "3 vỉ", unit: "combo", price: 37000 },
            { label: "10 vỉ", unit: "combo", price: 122000 },
        ],
    },
    {
        id: 9,
        category: "loai3",
        name: "Trứng gà Loại 3 (Thùng 200)",
        desc: "Tiết kiệm tối đa cho bếp ăn công nghiệp, nhà hàng lớn.",
        img: "/assets/images/main/trungloai3.png",
        badge: "Giá sỉ",
        badgeColor: "#7c3aed",
        origin: "Trang trại Bình Dương",
        fresh: "Thu hoạch hàng ngày",
        nutrition: "5.5g protein / quả",
        prices: [
            { label: "1 thùng", unit: "thùng", price: 260000 },
            { label: "2 thùng", unit: "combo", price: 510000 },
            { label: "5 thùng", unit: "combo", price: 1250000 },
        ],
    },
];

const CATEGORIES = [
    { key: "all", label: "Tất cả" },
    { key: "loai1", label: "Loại 1" },
    { key: "loai2", label: "Loại 2" },
    { key: "loai3", label: "Loại 3" },
];

const fmt = (n) => n.toLocaleString("vi-VN") + "đ";

/* ─── ZALO POPUP (dùng chung) ─── */
function ZaloPopup({ onClose }) {
    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-[99999]"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100 w-64 relative"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
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
                    <p className="text-sm font-medium text-gray-700">Đặt hàng qua Zalo</p>
                </div>
                <p className="text-xs text-gray-400 mb-3 text-center">Liên hệ hoặc kết bạn Zalo với chúng tôi để đặt hàng</p>
                <div className="bg-gray-50 rounded-xl px-3 py-2 mb-2 text-left">
                    <p className="text-[15px] font-semibold text-gray-800 tracking-wide whitespace-nowrap">📞 0356 808 561</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-3 py-2 text-left">
                    <p className="text-[15px] font-semibold text-gray-800 tracking-wide whitespace-nowrap">📞 0938 775 599</p>
                </div>
            </div>
        </div>
    );
}

/* ─── PRODUCT MODAL ─── */
function ProductModal({ product, onClose }) {
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [showZalo, setShowZalo] = useState(false);

    return (
        <div className="fixed inset-0 z-[99998] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />
            <div className="relative bg-white rounded-xl w-full max-w-sm shadow-lg overflow-hidden">
                {/* Image */}
                <div className="relative bg-amber-50 h-36 flex items-center justify-center">
                    <img src={product.img} alt={product.name} className="h-28 object-contain" />
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 bg-white/80 rounded-full w-7 h-7 flex items-center justify-center text-gray-400 hover:bg-white text-base"
                    >
                        &times;
                    </button>
                </div>

                <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                        <h2 className="font-bold text-base leading-tight" style={{ color: "#7a4500" }}>{product.name}</h2>
                        <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full whitespace-nowrap ml-2 flex-shrink-0">Còn hàng</span>
                    </div>
                    <p className="text-gray-400 text-xs mb-3">{product.desc}</p>

                    <div className="flex flex-wrap gap-1 mb-3 text-xs text-gray-400">
                        <span>📍 {product.origin}</span>
                        <span>·</span>
                        <span>🌿 {product.fresh}</span>
                        <span>·</span>
                        <span>💪 {product.nutrition}</span>
                    </div>

                    <p className="text-xs text-gray-500 font-medium mb-2">Chọn số lượng:</p>
                    <div className="grid grid-cols-3 gap-1.5 mb-3">
                        {product.prices.map((pr, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedPrice(i)}
                                className={`rounded-lg py-2 px-1 text-center border transition text-xs ${selectedPrice === i ? "border-orange-400 bg-orange-50 text-orange-600" : "border-gray-200 text-gray-500 hover:border-orange-200"}`}
                            >
                                <p className="mb-0.5">{pr.label}</p>
                                <p className="font-bold text-orange-400">{fmt(pr.price)}</p>
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setShowZalo(true)}
                        className="w-full py-3 rounded-lg text-white text-sm font-bold transition flex items-center justify-center gap-1.5"
                        style={{ background: "#0068FF" }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        Liên hệ Zalo đặt hàng
                    </button>
                </div>
            </div>

            {showZalo && <ZaloPopup onClose={() => setShowZalo(false)} />}
        </div>
    );
}

/* ─── PRODUCT CARD ─── */
function ProductCard({ product, onViewDetail }) {
    const [showZalo, setShowZalo] = useState(false);

    return (
        <>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col">
                {/* Image */}
                <div className="relative bg-amber-50 h-40 flex items-center justify-center overflow-hidden">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Badge */}
                    {product.badge && (
                        <span
                            className="absolute top-2 left-2 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: product.badgeColor }}
                        >
                            {product.badge}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="p-3 flex flex-col flex-1">
                    {/* FIX 1: tên dùng line-clamp-2 + text nhỏ hơn trên mobile */}
                    <h3 className="font-bold text-[11px] sm:text-sm text-[#7a4500] mb-0.5 leading-tight line-clamp-2">{product.name}</h3>
                    <p className="text-gray-400 text-[10px] sm:text-xs mb-3 line-clamp-2">{product.desc}</p>

                    {/* Price preview */}
                    <div className="space-y-1 mb-3">
                        {product.prices.slice(0, 2).map((p, i) => (
                            <div key={i} className="flex justify-between text-[10px] sm:text-xs">
                                <span className="text-gray-400">{p.label}</span>
                                <span className="font-semibold text-orange-400">{fmt(p.price)}</span>
                            </div>
                        ))}
                    </div>

                    {/* FIX 5: tăng tap target nút lên py-2.5 */}
                    <div className="flex gap-2 mt-auto">
                        <button
                            onClick={() => onViewDetail(product)}
                            className="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-400 text-xs hover:text-gray-600 transition min-h-[40px]"
                        >
                            Chi tiết
                        </button>
                        <button
                            onClick={() => setShowZalo(true)}
                            className="flex-1 py-2.5 rounded-lg text-white text-xs transition min-h-[40px]"
                            style={{ background: "#e07000" }}
                        >
                            🛒 Mua
                        </button>
                    </div>
                </div>
            </div>

            {showZalo && <ZaloPopup onClose={() => setShowZalo(false)} />}
        </>
    );
}

/* ─── TRUST BANNER ─── */
function TrustBanner() {
    const items = [
        { icon: "🚚", title: "Giao hàng miễn phí", sub: "Đơn từ 100.000đ" },
        { icon: "🥚", title: "Thu hoạch hàng ngày", sub: "Tươi mới 100%" },
        { icon: "✅", title: "Kiểm định chất lượng", sub: "An toàn vệ sinh" },
        { icon: "📞", title: "Hỗ trợ 24/7", sub: ["0356 808 561", "0938 775 599"] },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-6">
            {items.map((it, i) => (
                <div key={i} className="bg-white rounded-xl p-2.5 md:p-3 flex items-center gap-2 shadow-sm border border-amber-100 min-w-0">
                    <span className="text-xl md:text-2xl flex-shrink-0">{it.icon}</span>
                    <div className="min-w-0">
                        <p className="font-bold text-[11px] md:text-xs text-[#7a4500] leading-tight">{it.title}</p>
                        {Array.isArray(it.sub)
                            ? it.sub.map((s, j) => <p key={j} className="text-[10px] md:text-xs text-gray-500 leading-tight">{s}</p>)
                            : <p className="text-[10px] md:text-xs text-gray-500 leading-tight">{it.sub}</p>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ─── MAIN PAGE ─── */
export default function ProductPage() {
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("default");
    const [modalProduct, setModalProduct] = useState(null);

    let filtered = PRODUCTS.filter(p =>
        (category === "all" || p.category === category) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "asc") filtered = [...filtered].sort((a, b) => a.prices[0].price - b.prices[0].price);
    if (sort === "desc") filtered = [...filtered].sort((a, b) => b.prices[0].price - a.prices[0].price);

    return (
        /* FIX 2: đổi mt-[11%] → mt-14 (56px cố định) để đồng đều mọi thiết bị */
        <main className="home mx-auto w-full md:w-[80%] px-4 mt-20 md:mt-[11%] mb-0">

            {/* Page Header */}
            <div className="mt-6 mb-5 flex flex-col items-center justify-center text-center gap-1">
                <h1 className="text-2xl font-extrabold text-[#c4874a]">Sản phẩm trứng gà tươi</h1>
                <p className="text-gray-500 text-sm">Tươi mới mỗi ngày — kiểm định chất lượng — giao tận nơi</p>
            </div>

            {/* Trust Banner */}
            <TrustBanner />

            {/* FIX 3: Filter bar — wrap thành 2 hàng trên mobile */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-5 flex flex-col gap-3">
                {/* Hàng 1: Category buttons — scroll ngang trên mobile, wrap trên desktop */}
                <div className="flex gap-2 overflow-x-auto md:flex-wrap scrollbar-hide pb-0.5">
                    {CATEGORIES.map(c => (
                        <button
                            key={c.key}
                            onClick={() => setCategory(c.key)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition flex-shrink-0 ${category === c.key ? "text-white" : "bg-amber-50/50 text-gray-500 hover:bg-amber-100/50"}`}
                            style={category === c.key ? { background: "#c97000" } : {}}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                {/* Hàng 2: Search + Sort — full width trên mobile, auto trên desktop */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="🔍 Tìm sản phẩm..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="flex-1 min-w-0 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-orange-400"
                    />
                    <select
                        value={sort}
                        onChange={e => setSort(e.target.value)}
                        className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-orange-400 flex-shrink-0"
                    >
                        <option value="default">Mặc định</option>
                        <option value="asc">Giá tăng dần</option>
                        <option value="desc">Giá giảm dần</option>
                    </select>
                </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-400 mb-4">{filtered.length} sản phẩm</p>

            {/* Product grid */}
            {filtered.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                    <div className="text-5xl mb-3">🔍</div>
                    <p>Không tìm thấy sản phẩm phù hợp</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filtered.map(p => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            onViewDetail={setModalProduct}
                        />
                    ))}
                </div>
            )}

            {/* Modal */}
            {modalProduct && (
                <ProductModal
                    product={modalProduct}
                    onClose={() => setModalProduct(null)}
                />
            )}
        </main>
    );
}