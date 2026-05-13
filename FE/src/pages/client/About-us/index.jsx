function AboutUs() {
    return (
        <main className="home mx-auto w-full md:w-[80%] px-4 mt-[70px] md:mt-[11%]">
            <div className="bg-white rounded-lg p-3 md:p-4">
                <div className="font-sans text-gray-800">
                    <div className="container mx-auto px-2 md:px-4 py-5 md:py-8">

                        {/* TIÊU ĐỀ */}
                        <div className="text-center mb-6 md:mb-10">
                            <h1 className="text-xl md:text-4xl font-bold uppercase tracking-wide text-orange-500">
                                CÔNG TY TNHH THỰC PHẨM THƯƠNG MẠI DỊCH VỤ TRÂN HƯƠNG
                            </h1>
                            <p className="text-base md:text-xl italic mt-2 font-bold">"Chất lượng là danh dự"</p>
                        </div>

                        {/* GIỚI THIỆU CHUNG */}
                        <div className="about-us text-sm md:text-md">
                            <p>Ra đời từ năm <strong>2004</strong>, <em>Công ty TNHH Thực Phẩm Thương Mại Dịch Vụ Trân Hương</em> khởi nghiệp từ dịch vụ cung cấp suất ăn công nghiệp cho công nhân tại Bình Dương. Trải qua hơn 20 năm phát triển, Trân Hương đã vươn lên trở thành doanh nghiệp dẫn đầu trong lĩnh vực cung cấp thực phẩm sạch, trong đó <strong>trứng gà sạch</strong> là sản phẩm chủ lực được hàng nghìn khách hàng tin dùng mỗi ngày.</p><br />
                            <p>Với kinh nghiệm phục vụ hơn <strong>40.000 phần ăn mỗi ngày</strong> cho các khu công nghiệp, nhà máy, văn phòng và trường học, Trân Hương thấu hiểu sâu sắc nhu cầu về thực phẩm an toàn, tươi ngon và ổn định. Chính từ nền tảng đó, chúng tôi mang đến nguồn <strong>trứng gà sạch, tươi mới</strong> được tuyển chọn từ các trang trại uy tín, đảm bảo tiêu chuẩn vệ sinh an toàn thực phẩm theo quy định của Bộ Y tế.</p><br />
                            <p><em>Trân Hương</em> không chỉ đơn thuần là nhà cung cấp trứng gà — chúng tôi là người bạn đồng hành tin cậy của mỗi gia đình, mỗi bếp ăn tập thể và mỗi doanh nghiệp trên hành trình tìm kiếm nguồn thực phẩm sạch, an toàn và chất lượng nhất.</p><br />
                            <p>Hãy để <em>Trân Hương</em> đồng hành cùng bạn — bởi mỗi quả trứng chúng tôi cung cấp đều mang theo cam kết về chất lượng, sự tận tâm và lòng tin suốt hơn hai thập kỷ qua!</p>
                        </div>

                        {/* TẦM NHÌN VÀ SỨ MỆNH */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-6 items-stretch">
                            <div className="flex flex-col justify-center px-2 md:px-8">
                                <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center">TẦM NHÌN VÀ SỨ MỆNH</h2>
                                <div className="about-us bg-gray-100 p-4 md:p-6 rounded-lg">
                                    <p className="mb-4 text-sm md:text-base">Với sứ mệnh trở thành nhà cung cấp trứng gà sạch hàng đầu khu vực, Trân Hương cam kết:</p>
                                    <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                                        <li>Cung cấp trứng gà tươi sạch, đạt chuẩn an toàn vệ sinh thực phẩm.</li>
                                        <li>Xây dựng chuỗi cung ứng bền vững từ trang trại đến bàn ăn.</li>
                                        <li>Phát triển đội ngũ chuyên nghiệp, tận tâm phục vụ khách hàng 24/7.</li>
                                    </ul>
                                    <p className="mt-4 text-sm md:text-base"><em>Trân Hương</em> hướng đến mục tiêu trở thành đối tác thực phẩm tin cậy nhất của các hộ gia đình, bếp ăn tập thể và doanh nghiệp tại Việt Nam.</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src="/assets/images/main/contact1.jpg" alt="Tầm nhìn Trân Hương" className="w-full h-auto object-cover rounded-lg shadow-lg mt-3 md:mt-5" />
                            </div>
                        </div>

                        {/* TRIẾT LÝ */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 items-center">
                            <div className="flex justify-center items-center order-2 md:order-1">
                                <img src="/assets/images/main/contact2.png" alt="Triết lý Trân Hương" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="flex flex-col justify-center px-2 md:px-8 order-1 md:order-2">
                                <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center">TRIẾT LÝ</h2>
                                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                                    <p className="about-us text-sm md:text-base">
                                        Lấy <strong>chữ tín</strong> làm nền tảng, lấy <strong>chất lượng</strong> làm kim chỉ nam — đó là triết lý kinh doanh xuyên suốt hơn 20 năm của <em>Trân Hương</em>. Chúng tôi tin rằng một quả trứng sạch không chỉ là thực phẩm, mà còn là sự tin tưởng mà khách hàng đặt vào chúng tôi.
                                        <br /><br />
                                        Vì vậy, <em>Trân Hương</em> không ngừng đầu tư vào quy trình kiểm định chất lượng, hợp tác với các trang trại đạt chuẩn và ứng dụng công nghệ bảo quản hiện đại — để mỗi quả trứng đến tay khách hàng đều tươi ngon, an toàn và đáng tin cậy nhất.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* GIÁ TRỊ CỐT LÕI */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 items-stretch">
                            <div className="flex flex-col justify-center px-2 md:px-8">
                                <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center">GIÁ TRỊ CỐT LÕI</h2>
                                <div className="about-us bg-gray-100 p-4 md:p-6 rounded-lg text-sm md:text-base">
                                    <p className="text-gray-700">- <strong>Chất lượng:</strong> Toàn bộ trứng gà được kiểm định kỹ lưỡng, đảm bảo tươi mới và đạt tiêu chuẩn an toàn vệ sinh thực phẩm trước khi giao đến khách hàng.</p>
                                    <p className="text-gray-700 mt-2">- <strong>Uy tín:</strong> Hơn 20 năm kinh nghiệm trong ngành thực phẩm là minh chứng rõ ràng nhất cho sự tin tưởng mà hàng nghìn khách hàng đã dành cho <em>Trân Hương</em>.</p>
                                    <p className="text-gray-700 mt-2">- <strong>Tận tâm:</strong> Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ, tư vấn và giải quyết mọi vấn đề nhanh chóng, kể cả đổi trả khi sản phẩm không đạt yêu cầu.</p>
                                    <p className="text-gray-700 mt-2">- <strong>Minh bạch:</strong> Nguồn gốc sản phẩm rõ ràng, giá cả công khai, không phát sinh chi phí ẩn.</p>
                                    <p className="mt-4">Với những giá trị cốt lõi đó, <em>Trân Hương</em> đang từng ngày khẳng định vị thế là nhà cung cấp trứng gà sạch hàng đầu tại Bình Dương.</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src="/assets/images/main/contact3.jpg" alt="Giá trị cốt lõi" className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                        </div>

                        {/* DỊCH VỤ NỔI BẬT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 items-center">
                            <div className="flex justify-center items-center order-2 md:order-1">
                                <img src="/assets/images/main/contact4.png" alt="Dịch vụ nổi bật" className="w-full h-auto object-cover rounded-lg shadow-lg mt-3 md:mt-5" />
                            </div>
                            <div className="flex flex-col justify-center px-2 md:px-8 order-1 md:order-2">
                                <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center">DỊCH VỤ NỔI BẬT</h2>
                                <div className="about-us bg-gray-100 p-4 md:p-6 rounded-lg text-sm md:text-base">
                                    <p className="text-gray-700">- <strong>Cung cấp trứng gà sỉ & lẻ:</strong> Phục vụ đa dạng từ hộ gia đình, nhà hàng đến bếp ăn tập thể với số lượng linh hoạt.</p>
                                    <p className="text-gray-700 mt-2">- <strong>Giao hàng tận nơi:</strong> Đóng gói cẩn thận, đảm bảo trứng đến tay khách hàng nguyên vẹn trong 1–3 ngày.</p>
                                    <p className="text-gray-700 mt-2">- <strong>Đa dạng phân loại:</strong> Trứng gà loại 1, loại 2, loại 3 — phù hợp mọi nhu cầu và ngân sách.</p>
                                    <p className="text-gray-700 mt-2">- <strong>Hỗ trợ 24/7:</strong> Luôn sẵn sàng giải đáp thắc mắc và xử lý khiếu nại nhanh chóng.</p>
                                </div>
                            </div>
                        </div>

                        {/* CAM KẾT */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 items-center">
                            <div className="flex flex-col justify-center px-2 md:px-8">
                                <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center"><em>TRÂN HƯƠNG - TRỨNG GÀ SẠCH, TƯƠI NGON, AN TOÀN!</em></h2>
                                <div className="about-us bg-gray-100 p-4 md:p-6 rounded-lg text-sm md:text-base">
                                    <p>Bạn đang tìm kiếm nguồn trứng gà sạch, ổn định và đáng tin cậy? <em>Trân Hương</em> mang đến giải pháp cung cấp trứng tươi ngon nhất, tiện lợi nhất — giao tận nơi, đảm bảo chất lượng mọi lúc!</p>
                                    <p className="text-gray-700 mt-2">- <strong>Nguồn gốc rõ ràng:</strong> Trứng từ trang trại uy tín, có kiểm định chất lượng.</p>
                                    <p className="text-gray-700 mt-2">- <strong>Đa dạng lựa chọn:</strong> Trứng gà loại 1, 2, 3 — phù hợp mọi nhu cầu.</p>
                                    <p className="text-gray-700 mt-2">- <strong>Thanh toán linh hoạt:</strong> Chuyển khoản, ví điện tử hoặc tiền mặt khi nhận hàng.</p>
                                    <p className="mt-4"><em>Trân Hương</em> — Hơn 20 năm tin cậy, chất lượng không đổi!</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mt-3 md:mt-5">
                                <img src="/assets/images/main/contact5.png" alt="Cam kết Trân Hương" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                            </div>
                        </div>

                        {/* KẾT NỐI */}
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-6 items-center">
                            <div className="flex justify-center items-center order-2 md:order-1 mt-3 md:mt-5">
                                <img src="/assets/images/main/contact6.png" alt="Kết nối Trân Hương" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="flex flex-col justify-center px-2 md:px-8 order-1 md:order-2">
                                <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-center">CÙNG <em>TRÂN HƯƠNG</em> - KẾT NỐI NGUỒN THỰC PHẨM SẠCH</h2>
                                <div className="about-us bg-gray-100 p-4 md:p-6 rounded-lg text-sm md:text-base">
                                    <p className="mb-4">Cùng với việc mở rộng mạng lưới phân phối và đầu tư vào chuỗi cung ứng lạnh hiện đại, <em>Trân Hương</em> không ngừng ứng dụng công nghệ vào quản lý chất lượng sản phẩm.</p>
                                    <p>Sử dụng dịch vụ của <em>Trân Hương</em>, khách hàng không chỉ nhận được trứng gà tươi ngon mà còn được tích lũy điểm thưởng sau mỗi đơn hàng. Điểm thưởng có thể quy đổi để nhận ưu đãi giảm giá hoặc quà tặng hấp dẫn.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default AboutUs;