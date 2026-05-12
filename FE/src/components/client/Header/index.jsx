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

    useEffect(() => {
        const menu = document.getElementById("menu");
        if (menu) setMenuHeight(menu.offsetHeight);
    }, []);

    useEffect(() => {
        const menu = document.getElementById("menu");
        if (menu) setMenuHeight(menu.offsetHeight);

        checkCookie();
        getDataOptions();

        setTimeout(() => {
            if (typeof initBannerSwiper === "function") {
                initBannerSwiper();
            }
        }, 100);
    }, []);

    const checkCookie = () => {
        const token = cookies.token;
        if (token) {
            try {
                const decode = jwtDecode(token);
                setUser(decode);
            } catch (err) {
                console.error("Lỗi giải mã token:", err);
            }
        } else {
            setUser(null);
        }
    }

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

    return (
        <header className="p-0 mb-3">

            {/* ===== DESKTOP MENU ===== */}
            <div
                className="menu fixed top-0 left-0 w-full z-[9999] !opacity-100 shadow-md"
                id="menu"
                style={{
                    background: "linear-gradient(135deg, #7a4500 0%, #b85c00 50%, #e07000 100%)",
                    borderBottom: "2px solid rgba(255,200,100,0.25)"
                }}
            >
                <div className="flex justify-between w-[80%] mx-auto items-center py-2">

                    {/* Logo */}
                    <img
                        src="/assets/images/main/logo.jpg"
                        alt="Trân Hương"
                        className="h-10 w-10 object-cover rounded-full flex-shrink-0"
                    />

                    {/* Nav links */}
                    <ul className="flex gap-1 list-none items-center font-bold m-0">
                        {[
                            { to: "/", label: "Trang chủ" },
                            { to: "/about", label: "Giới thiệu" },
                            { to: "/product", label: "Sản phẩm" },
                            { to: "/blog", label: "Tin tức" },
                            { to: "/contact", label: "Liên hệ" },
                        ].map((item, i) => (
                            <li key={i} className="px-3 py-2 cursor-pointer rounded-md hover:bg-white/10 transition duration-200">
                                <Link to={item.to}
                                    className="text-amber-100 no-underline hover:text-yellow-300 transition duration-200 text-sm">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Auth */}
                    <ul className="flex gap-2 list-none items-center m-0">
                        <li>
                            <Link to="/contact" className="text-amber-100 no-underline text-sm hover:text-yellow-300 transition">
                                Hỗ trợ
                            </Link>
                        </li>
                        {user ? (
                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ color: '#fef3c7', fontWeight: 'bold', textTransform: 'none', fontSize: '0.875rem' }}
                                >
                                    {user.fullName} <i className="fas fa-angle-down ml-2"></i>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{ 'aria-labelledby': 'basic-button' }}
                                    PaperProps={{ sx: { mt: 1, borderRadius: 2, border: "1px solid #f59e0b44", boxShadow: "0 8px 24px rgba(122,69,0,0.2)" } }}
                                >
                                    <MenuItem onClick={() => { handleProfile(); handleClose(); }}>Tài khoản của tôi</MenuItem>
                                    <MenuItem onClick={() => { handleHistory(); handleClose(); }}>Lịch sử mua vé</MenuItem>
                                    <MenuItem onClick={() => { logout(); handleClose(); }} sx={{ color: "#e07000" }}>Đăng xuất</MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <>
                                <li className="border border-amber-200/50 rounded-lg px-3 py-1 hover:border-yellow-300 transition">
                                    <Link to="/register" className="text-amber-100 no-underline text-sm hover:text-yellow-300 transition">
                                        <i className="fas fa-user mr-1"></i> Đăng ký
                                    </Link>
                                </li>
                                <li className="rounded-lg px-3 py-1 font-bold transition"
                                    style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}
                                    onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.28)"}
                                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.18)"}>
                                    <Link to="/login" className="text-amber-100 no-underline text-sm hover:text-yellow-200 transition">
                                        Đăng nhập
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                </div>
            </div>

            {/* ===== MOBILE MENU ===== */}
            <div id="mobileMenu" className="w-full z-50 text-amber-200"
                style={{ background: "linear-gradient(135deg, #7a4500 0%, #b85c00 100%)" }}>
                <div className="menu-top flex justify-between w-[90%] mx-auto items-center py-4">
                    <div className="menu-top-left flex items-center gap-2">
                        <img
                            src="/assets/images/main/logo.jpg"
                            alt="Trân Hương"
                            className="h-10 w-10 object-cover rounded-full"
                        />
                    </div>
                    <button id="menu-toggle" className="block md:hidden p-2 text-amber-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <hr className="border-amber-200/20" />
            </div>

            {/* ===== BANNER / SLIDER ===== */}
            <div id="homeHeader" className="relative w-screen overflow-hidden z-0" style={{ paddingTop: menuHeight }}>
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

                <div className="absolute bottom-10 left-0 w-full text-center z-10" id="homeComment">
                    <div id="comment-container"
                        className="inline-block bg-gray-100/90 backdrop-blur-sm p-3 rounded-lg text-sm text-gray-700 italic">
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;