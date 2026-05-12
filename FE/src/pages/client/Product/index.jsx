import { useState } from "react";

/* ─── DATA ─── */
const PRODUCTS = [
    {
        id: 1, category: "loai1",
        name: "Trứng gà Loại 1",
        desc: "Kích thước lớn, lòng đỏ đậm, giàu dinh dưỡng. Phù hợp gia đình và bếp ăn tập thể.",
        img: "/assets/images/main/trungloai1.png",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "6.3g protein / quả",
        prices: [
            { label: "Mua lẻ", unit: "quả", price: 1600 },
            { label: "Combo 30 quả", unit: "combo", price: 46000 },
            { label: "Combo 100 quả", unit: "combo", price: 150000 },
        ],
    },
    {
        id: 2, category: "loai2",
        name: "Trứng gà Loại 2",
        desc: "Kích thước vừa phải, tươi mới mỗi ngày. Lựa chọn phổ biến nhất của gia đình Việt.",
        img: "/assets/images/main/trungloai2.png",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "5.8g protein / quả",
        prices: [
            { label: "Mua lẻ", unit: "quả", price: 1500 },
            { label: "Combo 30 quả", unit: "combo", price: 43000 },
            { label: "Combo 100 quả", unit: "combo", price: 143000 },
        ],
    },
    {
        id: 3, category: "loai3",
        name: "Trứng gà Loại 3",
        desc: "Kinh tế, phù hợp sử dụng hàng ngày. Chất lượng đảm bảo, giá tốt nhất thị trường.",
        img: "/assets/images/main/trungloai3.png",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "5.5g protein / quả",
        prices: [
            { label: "Mua lẻ", unit: "quả", price: 1400 },
            { label: "Combo 30 quả", unit: "combo", price: 40000 },
            { label: "Combo 100 quả", unit: "combo", price: 135000 },
        ],
    },
    {
        id: 4, category: "dacbiet",
        name: "Trứng gà Đặc biệt",
        desc: "Gà nuôi tự nhiên, không kháng sinh, không tăng trọng. Lòng đỏ đậm vàng, vị ngậy đặc biệt.",
        img: "/assets/images/main/trungloai3.png",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "6.8g protein / quả",
        prices: [
            { label: "Mua lẻ", unit: "quả", price: 3500 },
            { label: "Combo 10 quả", unit: "hộp", price: 33000 },
            { label: "Combo 30 quả", unit: "combo", price: 95000 },
        ],
    },
    {
        id: 5, category: "loai1",
        name: "Trứng gà Loại 1 (Vỉ 10)",
        desc: "Đóng gói vỉ 10 quả tiện lợi, dễ bảo quản, phù hợp gia đình nhỏ.",
        img: "/assets/images/main/trungloai1.png",
        badge: "Tiện lợi", badgeColor: "#0ea5e9",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "6.3g protein / quả",
        prices: [
            { label: "Vỉ 10 quả", unit: "vỉ", price: 15000 },
            { label: "Combo 3 vỉ", unit: "combo", price: 43000 },
            { label: "Combo 10 vỉ", unit: "combo", price: 140000 },
        ],
    },
    {
        id: 6, category: "loai2",
        name: "Trứng gà Loại 2 (Vỉ 10)",
        desc: "Vỉ 10 quả loại 2, kích thước vừa, tươi ngon mỗi ngày.",
        img: "/assets/images/main/trungloai2.png",
        badge: "Tiện lợi", badgeColor: "#0ea5e9",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "5.8g protein / quả",
        prices: [
            { label: "Vỉ 10 quả", unit: "vỉ", price: 14000 },
            { label: "Combo 3 vỉ", unit: "combo", price: 40000 },
            { label: "Combo 10 vỉ", unit: "combo", price: 132000 },
        ],
    },
    {
        id: 7, category: "loai3",
        name: "Trứng gà Loại 3 (Vỉ 10)",
        desc: "Tiết kiệm, đóng vỉ 10 quả gọn gàng, phù hợp nấu ăn hàng ngày.",
        img: "/assets/images/main/trungloai3.png",
        badge: "Tiết kiệm", badgeColor: "#22c55e",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "5.5g protein / quả",
        prices: [
            { label: "Vỉ 10 quả", unit: "vỉ", price: 13000 },
            { label: "Combo 3 vỉ", unit: "combo", price: 37000 },
            { label: "Combo 10 vỉ", unit: "combo", price: 122000 },
        ],
    },
    {
        id: 8, category: "dacbiet",
        name: "Trứng gà Đặc biệt (Hộp 6)",
        desc: "Hộp quà 6 quả cao cấp, thích hợp làm quà biếu hoặc dùng hàng ngày.",
        img: "/assets/images/main/trungloai3.png",
        badge: "Quà tặng", badgeColor: "#a855f7",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "6.8g protein / quả",
        prices: [
            { label: "Hộp 6 quả", unit: "hộp", price: 22000 },
            { label: "Combo 3 hộp", unit: "combo", price: 63000 },
            { label: "Combo 10 hộp", unit: "combo", price: 200000 },
        ],
    },
    {
        id: 9, category: "loai1",
        name: "Trứng gà Loại 1 (Thùng 200)",
        desc: "Thùng 200 quả loại 1, phù hợp bếp ăn tập thể, nhà hàng, quán ăn.",
        img: "/assets/images/main/trungloai1.png",
        badge: "Số lượng lớn", badgeColor: "#7c3aed",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "6.3g protein / quả",
        prices: [
            { label: "Thùng 200 quả", unit: "thùng", price: 290000 },
            { label: "2 thùng", unit: "combo", price: 570000 },
            { label: "5 thùng", unit: "combo", price: 1400000 },
        ],
    },
    {
        id: 10, category: "loai2",
        name: "Trứng gà Loại 2 (Thùng 200)",
        desc: "Thùng 200 quả loại 2, giá tốt cho đơn hàng số lượng lớn.",
        img: "/assets/images/main/trungloai2.png",
        badge: "Số lượng lớn", badgeColor: "#7c3aed",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "5.8g protein / quả",
        prices: [
            { label: "Thùng 200 quả", unit: "thùng", price: 275000 },
            { label: "2 thùng", unit: "combo", price: 540000 },
            { label: "5 thùng", unit: "combo", price: 1320000 },
        ],
    },
    {
        id: 11, category: "loai3",
        name: "Trứng gà Loại 3 (Thùng 200)",
        desc: "Thùng 200 quả loại 3, tiết kiệm tối đa cho bếp ăn công nghiệp.",
        img: "/assets/images/main/trungloai3.png",
        badge: "Số lượng lớn", badgeColor: "#7c3aed",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "5.5g protein / quả",
        prices: [
            { label: "Thùng 200 quả", unit: "thùng", price: 260000 },
            { label: "2 thùng", unit: "combo", price: 510000 },
            { label: "5 thùng", unit: "combo", price: 1250000 },
        ],
    },
    {
        id: 12, category: "dacbiet",
        name: "Trứng gà Đặc biệt (Thùng 100)",
        desc: "Thùng 100 quả đặc biệt, gà nuôi tự nhiên, lòng đỏ đậm vàng, vị ngậy.",
        img: "/assets/images/main/trungloai3.png",
        badge: "Cao cấp", badgeColor: "#f59e0b",
        origin: "Trang trại Bình Dương", fresh: "Thu hoạch hàng ngày",
        nutrition: "6.8g protein / quả",
        prices: [
            { label: "Thùng 100 quả", unit: "thùng", price: 320000 },
            { label: "2 thùng", unit: "combo", price: 630000 },
            { label: "5 thùng", unit: "combo", price: 1550000 },
        ],
    },
];

const CATEGORIES = [
    { key: "all", label: "Tất cả" },
    { key: "loai1", label: "Loại 1" },
    { key: "loai2", label: "Loại 2" },
    { key: "loai3", label: "Loại 3" },
    { key: "dacbiet", label: "Đặc biệt" },
];

const fmt = (n) => n.toLocaleString("vi-VN") + "đ";

/* ─── CART DRAWER ─── */
function CartDrawer({ cart, onClose, onRemove, onChangeQty }) {
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const handleOrder = () => {
        const lines = cart.map(i => `${i.name} - ${i.label}: ${i.qty} × ${fmt(i.price)}`).join("\n");
        const msg = encodeURIComponent("Xin chào! Tôi muốn đặt hàng:\n" + lines + `\nTổng: ${fmt(total)}`);
    };

    return (
        <div className="fixed inset-0 z-[99999] flex justify-end">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <div className="relative bg-white w-full max-w-sm h-full flex flex-col shadow-2xl">
                <div
                    className="flex items-center justify-between px-5 py-4 border-b"
                    style={{ background: "linear-gradient(135deg,#7a4500,#e07000)" }}
                >
                    <h2 className="text-white font-bold text-lg">🛒 Giỏ hàng ({cart.length})</h2>
                    <button onClick={onClose} className="text-white text-2xl leading-none">&times;</button>
                </div>

                {cart.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
                        <span className="text-6xl mb-3">🛒</span>
                        <p>Giỏ hàng trống</p>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                        {cart.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-amber-50 rounded-xl p-3">
                                <img src={item.img} alt={item.name} className="w-14 h-14 object-cover rounded-lg flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-sm text-gray-800 truncate">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.label}</p>
                                    <p className="text-orange-600 font-bold text-sm">{fmt(item.price)}</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <button onClick={() => onChangeQty(i, -1)}
                                            className="px-2 py-1 text-orange-600 font-bold hover:bg-orange-50 text-sm">−</button>
                                        <span className="px-2 text-sm font-bold">{item.qty}</span>
                                        <button onClick={() => onChangeQty(i, 1)}
                                            className="px-2 py-1 text-orange-600 font-bold hover:bg-orange-50 text-sm">+</button>
                                    </div>
                                    <button onClick={() => onRemove(i)} className="text-xs text-red-400 hover:text-red-600">Xóa</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {cart.length > 0 && (
                    <div className="border-t px-5 py-4 space-y-3">
                        <div className="flex justify-between font-bold text-base">
                            <span>Tổng cộng</span>
                            <span className="text-orange-600 text-lg">{fmt(total)}</span>
                        </div>
                        <button onClick={handleOrder}
                            className="w-full py-3 rounded-xl font-bold text-white text-base transition"
                            style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                            💬 Đặt hàng qua Zalo
                        </button>
                        <a href="tel:0356808561"
                            className="block w-full py-3 rounded-xl font-bold text-center no-underline text-orange-600 border-2 border-orange-400 hover:bg-orange-50 transition text-sm">
                            📞 Gọi đặt hàng: 0356 808 561
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ─── PRODUCT MODAL ─── */
function ProductModal({ product, onClose, onAddToCart }) {
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [qty, setQty] = useState(1);
    const p = product.prices[selectedPrice];

    return (
        <div className="fixed inset-0 z-[99998] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />
            <div className="relative bg-white rounded-xl w-full max-w-sm shadow-lg overflow-hidden">
                {/* Image */}
                <div className="relative bg-amber-50 h-36 flex items-center justify-center">
                    <img src={product.img} alt={product.name} className="h-28 object-contain" />
                    <button onClick={onClose}
                        className="absolute top-2 right-2 bg-white/80 rounded-full w-7 h-7 flex items-center justify-center text-gray-400 hover:bg-white text-base">
                        &times;
                    </button>
                </div>

                <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                        <h2 className="font-bold text-base" style={{ color: "#7a4500" }}>{product.name}</h2>
                        <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">✅ Còn hàng</span>
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
                            <button key={i} onClick={() => setSelectedPrice(i)}
                                className={`rounded-lg py-1.5 px-1 text-center border transition text-xs ${selectedPrice === i ? "border-orange-400 bg-orange-50 text-orange-600" : "border-gray-200 text-gray-500 hover:border-orange-200"}`}>
                                <p className="mb-0.5">{pr.label}</p>
                                <p className="font-bold text-orange-400">{fmt(pr.price)}</p>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                            <button onClick={() => setQty(q => Math.max(1, q - 1))}
                                className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 text-base">−</button>
                            <span className="px-3 text-sm font-medium">{qty}</span>
                            <button onClick={() => setQty(q => q + 1)}
                                className="px-3 py-1.5 text-gray-500 hover:bg-gray-50 text-base">+</button>
                        </div>
                        <button
                            onClick={() => { onAddToCart(product, p, qty); onClose(); }}
                            className="flex-1 py-2 rounded-lg text-white text-sm font-bold transition"
                            style={{ background: "#e07000" }}>
                            🛒 Thêm  {fmt(p.price * qty)}
                        </button>
                    </div>

                    <a href="/product"
                        className="block w-full text-center mt-2 py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-500 hover:bg-gray-50 transition no-underline">
                        Mua ngay  {fmt(p.price * qty)} →
                    </a>

                </div>
            </div>

        </div>
    );
}

/* ─── PRODUCT CARD ─── */
function ProductCard({ product, onViewDetail, onQuickAdd }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col">
            {/* Image */}
            <div className="relative bg-amber-50 h-40 flex items-center justify-center overflow-hidden">
                <img src={product.img} alt={product.name}
                    className="h-32 object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Content */}
            <div className="p-3 flex flex-col flex-1">
                <h3 className="font-bold text-sm text-[#7a4500] mb-0.5">{product.name}</h3>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{product.desc}</p>

                {/* Price preview */}
                <div className="space-y-1 mb-3">
                    {product.prices.slice(0, 2).map((p, i) => (
                        <div key={i} className="flex justify-between text-xs">
                            <span className="text-gray-400">{p.label}</span>
                            <span className="font-semibold text-orange-400">{fmt(p.price)}</span>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                    <button onClick={() => onViewDetail(product)}
                        className="flex-1 py-1.5 rounded-lg border border-gray-200 text-gray-400 text-xs hover:text-gray-600 transition">
                        Chi tiết
                    </button>
                    <button onClick={() => onQuickAdd(product)}
                        className="flex-1 py-1.5 rounded-lg text-white text-xs transition"
                        style={{ background: "#e07000" }}>
                        🛒 Thêm
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─── TRUST BANNER ─── */
function TrustBanner() {
    const items = [
        { icon: "🚚", title: "Giao hàng miễn phí", sub: "Đơn từ 100.000đ" },
        { icon: "🥚", title: "Thu hoạch hàng ngày", sub: "Tươi mới 100%" },
        { icon: "✅", title: "Kiểm định chất lượng", sub: "An toàn vệ sinh" },
        { icon: "📞", title: "Hỗ trợ 24/7", sub: "0356 808 561" },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {items.map((it, i) => (
                <div key={i} className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm border border-amber-100">
                    <span className="text-2xl">{it.icon}</span>
                    <div>
                        <p className="font-bold text-xs text-[#7a4500]">{it.title}</p>
                        <p className="text-xs text-gray-500">{it.sub}</p>
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
    const [cart, setCart] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(null);

    const addToCart = (product, priceObj, qty = 1) => {
        setCart(prev => {
            const key = `${product.id}-${priceObj.label}`;
            const idx = prev.findIndex(i => i.key === key);
            if (idx >= 0) {
                const updated = [...prev];
                updated[idx] = { ...updated[idx], qty: updated[idx].qty + qty };
                return updated;
            }
            return [...prev, { key, name: product.name, label: priceObj.label, price: priceObj.price, img: product.img, qty }];
        });
        setCartOpen(true);
    };

    const removeFromCart = (i) => setCart(prev => prev.filter((_, idx) => idx !== i));
    const changeQty = (i, delta) => setCart(prev => {
        const updated = [...prev];
        updated[i] = { ...updated[i], qty: Math.max(1, updated[i].qty + delta) };
        return updated;
    });

    let filtered = PRODUCTS.filter(p =>
        (category === "all" || p.category === category) &&
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "asc") filtered = [...filtered].sort((a, b) => a.prices[0].price - b.prices[0].price);
    if (sort === "desc") filtered = [...filtered].sort((a, b) => b.prices[0].price - a.prices[0].price);

    const cartCount = cart.reduce((s, i) => s + i.qty, 0);

    return (
        <main className="home mx-auto w-full md:w-[80%] px-4 mt-[7%] mb-0">

            {/* Page Header */}
            <div className="mt-6 mb-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-extrabold text-[#c4874a]">Sản phẩm trứng gà tươi</h1>
                    <p className="text-gray-500 text-sm">Tươi mới mỗi ngày — kiểm định chất lượng — giao tận nơi</p>
                </div>
                <button onClick={() => setCartOpen(true)}
                    className="relative flex items-center gap-2 font-medium px-2 py-1 rounded-xl text-white transition self-start md:self-auto"
                    style={{ background: "#c97000" }}
                    style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                    🛒 Giỏ hàng
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>

            {/* Trust Banner */}
            <TrustBanner />

            {/* Filter bar */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
                <div className="flex gap-2 flex-wrap">
                    {CATEGORIES.map(c => (
                        <button key={c.key} onClick={() => setCategory(c.key)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition ${category === c.key ? "text-white" : "bg-amber-50/50 text-gray-500 hover:bg-amber-100/50"}`}
                            style={category === c.key ? { background: "#c97000" } : {}}>
                            {c.label}
                        </button>
                    ))}
                </div>

                <div className="flex gap-2 md:ml-auto">
                    <input
                        type="text" placeholder="🔍 Tìm sản phẩm..."
                        value={search} onChange={e => setSearch(e.target.value)}
                        className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-orange-400 w-48"
                    />
                    <select value={sort} onChange={e => setSort(e.target.value)}
                        className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-orange-400">
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
                            onQuickAdd={(prod) => addToCart(prod, prod.prices[1] || prod.prices[0], 1)}
                        />
                    ))}
                </div>
            )}

            {/* Modals */}
            {modalProduct && (
                <ProductModal
                    product={modalProduct}
                    onClose={() => setModalProduct(null)}
                    onAddToCart={addToCart}
                />
            )}
            {cartOpen && (
                <CartDrawer
                    cart={cart}
                    onClose={() => setCartOpen(false)}
                    onRemove={removeFromCart}
                    onChangeQty={changeQty}
                />
            )}

        </main>
    );
}