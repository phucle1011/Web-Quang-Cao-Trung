function Blog() {
    const recentNews = [
        {
            img: "http://tranhuong.com.vn/upload/news/cachlammontrunghapvan_3938.jpg",
            title: "Cách làm trứng hấp vân ngon, ai cũng tấm tắc khen",
            href: "http://tranhuong.com.vn/tin-tuc/cach-lam-trung-hap-van-ngon-ai-cung-tam-tac-khen.html",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/slide_8900.jpg",
            title: "Cách làm tôm chay bằng váng đậu phụ giòn dai",
            href: "http://tranhuong.com.vn/tin-tuc/cach-lam-tom-chay-bang-vang-dau-phu-gion-dai.html",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/30987chethai_8604.jpg",
            title: "Tổng hợp cách nấu 24 món chè ngon ngọt, thanh mát",
            href: "http://tranhuong.com.vn/tin-tuc/tong-hop-cach-nau-24-mon-che-ngon-ngot-thanh-mat-ai-nhin-cung-muon-an.html",
        },
    ];

    const categories = [
        {
            img: "http://tranhuong.com.vn/upload/news/img2656_6494.jpg",
            title: "Các hoạt động xã hội",
            href: "http://tranhuong.com.vn/tin-tuc/cac-hoat-dong-xa-hoi.html",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/iso_4287.jpg",
            title: "Lễ đón nhận ISO",
            href: "http://tranhuong.com.vn/tin-tuc/le-don-nhan-iso.html",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/345_8036.png",
            title: "Chứng nhận thương hiệu tin dùng",
            href: "http://tranhuong.com.vn/tin-tuc/chung-nhan.html",
        },
    ];

    const allNews = [
        {
            img: "http://tranhuong.com.vn/upload/news/img2656_6494.jpg",
            title: "Các hoạt động xã hội",
            desc: "Hằng năm, Công ty Trân Hương luôn năng nổ tham gia các hoạt động xã hội, nhằm sẻ chia, gắn kết tình yêu thương cộng đồng.",
            href: "http://tranhuong.com.vn/tin-tuc/cac-hoat-dong-xa-hoi.html",
            date: "15/08/2019",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/iso_4287.jpg",
            title: "Lễ đón nhận ISO",
            desc: "Công ty Trân Hương tự hào là một trong những công ty cung cấp suất ăn công nghiệp hàng đầu tại Việt Nam đạt chuẩn ISO 22000:2005 và ISO 9001:2008.",
            href: "http://tranhuong.com.vn/tin-tuc/le-don-nhan-iso.html",
            date: "10/06/2019",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/345_8036.png",
            title: "Chứng nhận thương hiệu – Nhãn hiệu tin dùng 2017",
            desc: "Năm 2017, Trân Hương vinh dự được tôn vinh trong buổi lễ trao giải Thương hiệu – Nhãn hiệu tin dùng, khẳng định vị thế trên thị trường.",
            href: "http://tranhuong.com.vn/tin-tuc/chung-nhan.html",
            date: "20/12/2017",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/cachlammontrunghapvan_3938.jpg",
            title: "Cách làm trứng hấp vân ngon, ai cũng tấm tắc khen",
            desc: "Trứng hấp vân là món ăn ngon, dễ chế biến, phù hợp cho cả gia đình. Không chỉ hấp dẫn người lớn mà các bé cũng rất mê món ăn đã mắt, đã miệng này.",
            href: "http://tranhuong.com.vn/tin-tuc/cach-lam-trung-hap-van-ngon-ai-cung-tam-tac-khen.html",
            date: "05/03/2019",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/slide_8900.jpg",
            title: "Cách làm tôm chay bằng váng đậu phụ giòn dai",
            desc: "Chỉ với vài bước đơn giản là có ngay món tôm chay vừa sạch sẽ, vừa an toàn lại ngon miệng — lựa chọn lý tưởng cho những ngày ăn chay.",
            href: "http://tranhuong.com.vn/tin-tuc/cach-lam-tom-chay-bang-vang-dau-phu-gion-dai.html",
            date: "18/02/2019",
        },
        {
            img: "http://tranhuong.com.vn/upload/news/foodyocquynhnguyenthuonghien212636494666490873664_3497.jpg",
            title: "Những món ăn đường phố hấp dẫn giới trẻ",
            desc: "Ăn vặt luôn là hoạt động yêu thích của hầu hết mọi người. Cùng khám phá những món ăn đường phố Việt Nam đang làm mưa làm gió trong cộng đồng giới trẻ.",
            href: "http://tranhuong.com.vn/tin-tuc/nhung-mon-an-duong-pho-hap-dan-gioi-tre.html",
            date: "10/01/2019",
        },
    ];

    return (
        <main className="home mx-auto w-full md:w-[80%] px-4 mt-[11%]">
            <div className="bg-white rounded-lg p-3 mb-3">
                <div className="flex flex-col md:flex-row">

                    {/* SIDEBAR */}
                    <aside className="w-full md:w-1/4 p-4 bg-gray-50 mr-5 mt-2 rounded-lg border border-gray-100">

                        <h4 className="text-xl font-bold text-orange-500 border-b-4 border-orange-500 inline-block pb-1 mb-4">
                            Tin Tức Mới Nhất
                        </h4>
                        <ul className="space-y-4 mb-6">
                            {recentNews.map((item, i) => (
                                <li key={i}>
                                    <a href={item.href} target="_blank" rel="noreferrer"
                                        className="flex items-center gap-3 text-gray-800 hover:text-amber-200 transition-colors">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-14 h-14 object-cover rounded flex-shrink-0"
                                        />
                                        <span className="text-sm line-clamp-2 leading-snug">{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h5 className="text-xl font-bold text-orange-500 border-b-4 border-orange-500 inline-block pb-1 mb-4">
                            Tin Nổi Bật
                        </h5>
                        <ul className="space-y-4">
                            {categories.map((item, i) => (
                                <li key={i}>
                                    <a href={item.href} target="_blank" rel="noreferrer"
                                        className="flex items-center gap-3 text-gray-800 hover:text-amber-200 transition-colors">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-14 h-14 object-cover rounded flex-shrink-0"
                                        />
                                        <span className="text-sm line-clamp-2 leading-snug">{item.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* MAIN CONTENT */}
                    <section className="w-full md:w-3/4 p-4">
                        <h2 className="text-3xl font-bold text-orange-500 border-b-4 border-orange-500 inline-block pb-1 mb-6">
                            Tất Cả Tin Tức
                        </h2>

                        <div className="grid grid-cols-1 gap-6">
                            {allNews.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 pb-6 border-b border-gray-100 last:border-0">
                                    <a href={item.href} target="_blank" rel="noreferrer" className="flex-shrink-0">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="w-48 h-32 object-cover rounded-lg hover:opacity-90 transition-opacity"
                                        />
                                    </a>
                                    <div className="flex-1">
                                        <a href={item.href} target="_blank" rel="noreferrer">
                                            <h3 className="text-base font-bold line-clamp-2 hover:text-amber-200 transition-colors mb-2">
                                                {item.title}
                                            </h3>
                                        </a>
                                        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-2">
                                            {item.desc}
                                        </p>
                                        <span className="text-xs text-gray-400">Ngày đăng: {item.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}

export default Blog;