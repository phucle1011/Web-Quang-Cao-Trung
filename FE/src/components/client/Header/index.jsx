import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Constants from "../../../Constants";
import {
    initCommentSlider,
    initBannerSwiper,
    initPageVisibility
} from "./../../../styles/client/js/main.js";

const URL = Constants.DOMAIN_API;
const ENDPOINT = "admin/routes";

function Header() {
    const [user, setUser] = useState(null);
    const [cookies] = useCookies(["token"]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigator = useNavigate();
    const [menuHeight, setMenuHeight] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false); // ← thêm state mobile menu

    useEffect(() => {
        const updateHeight = () => {
            const menu = document.getElementById("menu");
            if (menu) setMenuHeight(menu.offsetHeight);
        };
        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, [mobileOpen]); // ← thêm mobileOpen để cập nhật khi dropdown mở/đóng

    useEffect(() => {
        checkCookie();
        getDataOptions();
        setTimeout(() => {
            if (typeof initBannerSwiper === "function") initBannerSwiper();
        }, 100);
    }, []);

    const checkCookie = () => {
        const token = cookies.token;
        if (token) {
            try { setUser(jwtDecode(token)); }
            catch (err) { console.error("Lỗi giải mã token:", err); }
        } else {
            setUser(null);
        }
    };

    const handleClose = () => setAnchorEl(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleProfile = () => navigator("/profile");
    const handleHistory = () => navigator("/bookingHistory");
    const logout = () => {
        setUser(null);
        navigator("/login");
        Cookies.remove("token", { path: "/" });
    };

    const [startPointOptions, setStartPointOptions] = useState([]);
    const [endPointOptions, setEndPointOptions] = useState([]);

    const getDataOptions = async () => {
        try {
            const response = await axios.get(`${URL}/${ENDPOINT}/list`);
            const responseData = response.data;
            if (responseData?.data && Array.isArray(responseData.data)) {
                const data = responseData.data;
                setStartPointOptions(data.map(item => ({ value: item.startPoint, label: item.startPoint })));
                setEndPointOptions(data.map(item => ({ value: item.endPoint, label: item.endPoint })));
                return data;
            }
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
            setStartPointOptions([]);
            setEndPointOptions([]);
            return [];
        }
    };

    const navItems = [
        { to: "/", label: "Trang chủ" },
        { to: "/about", label: "Giới thiệu" },
        { to: "/product", label: "Sản phẩm" },
        { to: "/blog", label: "Tin tức" },
        { to: "/contact", label: "Liên hệ" },
    ];

    return (
        <header className="p-0 mb-3">

            {/* ===== MENU CHUNG (desktop + mobile) ===== */}
            <div
                className="fixed top-0 left-0 w-full z-[9999] shadow-md"
                id="menu"
                style={{
                    background: "linear-gradient(135deg, #7a4500 0%, #b85c00 50%, #e07000 100%)",
                    borderBottom: "2px solid rgba(255,200,100,0.25)",
                    display: "block",       // ← ép hiển thị
                    visibility: "visible",  // ← ép visible
                    opacity: "1",           // ← ép opacity
                }}
            >
                {/* Thanh trên */}
                <div className="flex w-[90%] md:w-[80%] mx-auto items-center py-2 relative">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/assets/images/main/logo.jpg"
                            alt="Trân Hương"
                            className="h-12 w-12 md:h-20 md:w-20 object-contain"
                        />
                    </div>

                    {/* Menu desktop — nằm giữa */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                        <ul className="flex gap-2 list-none items-center font-bold m-0">
                            {navItems.map((item, i) => (
                                <li key={i} className="px-3 py-2 cursor-pointer rounded-md hover:bg-white/10 transition duration-200">
                                    <Link to={item.to} className="text-amber-100 no-underline hover:text-yellow-300 transition duration-200 text-sm">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bên phải: Hỗ trợ (desktop) + Hamburger (mobile) */}
                    <div className="ml-auto flex items-center gap-3">
                        <Link to="/contact" className="hidden md:block text-amber-100 no-underline text-sm font-semibold hover:text-yellow-300 transition">
                            Hỗ trợ
                        </Link>

                        {/* Hamburger button — chỉ hiện trên mobile */}
                        <button
                            className="block md:hidden p-2 text-amber-200"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown menu */}
                {mobileOpen && (
                    <div className="block md:hidden border-t border-amber-200/20">
                        <ul className="list-none m-0 p-0">
                            {navItems.map((item, i) => (
                                <li key={i} className="border-b border-amber-200/10">
                                    <Link
                                        to={item.to}
                                        className="block px-6 py-3 text-amber-100 no-underline text-sm font-semibold hover:bg-white/10 transition"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    to="/contact"
                                    className="block px-6 py-3 text-amber-100 no-underline text-sm font-semibold hover:bg-white/10 transition"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Hỗ trợ
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* ===== BANNER / SLIDER ===== */}
            <div id="homeHeader" className="relative w-screen overflow-hidden z-0"
                style={{ paddingTop: menuHeight || 60 }}> {/* ← fallback 60px nếu chưa tính được */}
                <div className="swiper bannerSwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="/assets/images/main/banner1.jpg" alt="" className="w-full h-auto block" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/assets/images/main/banner2.jpg" alt="" className="w-full h-auto block" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/assets/images/main/banner3.jpg" alt="" className="w-full h-auto block" />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                <div className="absolute bottom-4 md:bottom-10 left-0 w-full text-center z-10 px-4" id="homeComment">
                    <div id="comment-container"
                        className="inline-block bg-gray-100/90 backdrop-blur-sm p-2 md:p-3 rounded-lg text-xs md:text-sm text-gray-700 italic max-w-[90%] md:max-w-none">
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;