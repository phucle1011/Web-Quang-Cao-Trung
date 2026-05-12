import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// ================== HIỆU ỨNG COMMENT SLIDER ==================
export function initCommentSlider() {
  const commentContainer = document.getElementById("comment-container");
  const comments = [

    "“Cam kết mang đến nguồn trứng sạch, an toàn cho mọi gia đình Việt 🥚”",

    "“Chất lượng tạo nên uy tín – sự hài lòng của khách hàng là ưu tiên hàng đầu ⭐”",

    "“Trứng gà tươi mới mỗi ngày từ trang trại đến bàn ăn 🚚”",

    "“Sản phẩm đạt tiêu chuẩn vệ sinh an toàn thực phẩm ✅”",

    "“Đồng hành cùng sức khỏe cộng đồng bằng thực phẩm sạch 🌱”",

  ];

  if (commentContainer) {
    let currentIndex = 0;
    function updateComment() {
      commentContainer.textContent = comments[currentIndex];
    }
    function nextComment() {
      currentIndex = (currentIndex + 1) % comments.length;
      updateComment();
    }
    setInterval(nextComment, 5000);
    updateComment();
  }
}

// ================== HIỆU ỨNG SWIPER SLIDER ==================
export function initSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    breakpoints: {
      320: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    },
  });
}

// ================== HIỆU ỨNG MENU ==================
export function initMenu() {
  const menu = document.getElementById("menu");
  const main = document.querySelector("main");

  if (!menu || !main) return () => { };

  let scrollHandler = null;

  function updateMenuStyle() {
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
    }

    if (main.id === "home" || main.id === "busDetail") {
      scrollHandler = () => {
        if (window.scrollY > 50) {
          menu.classList.add("bg-[#043175]");
          menu.classList.remove("bg-transparent");
        } else {
          menu.classList.remove("bg-[#043175]");
          menu.classList.add("bg-transparent");
        }
      };

      window.addEventListener("scroll", scrollHandler);
      scrollHandler();
    } else {
      menu.classList.add("bg-[#043175]");
      menu.classList.remove("bg-transparent");
    }
  }

  const observer = new MutationObserver(updateMenuStyle);
  observer.observe(main, { attributes: true, attributeFilter: ["id"] });
  updateMenuStyle();

  return () => {
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
    }
    observer.disconnect();
  };
}
// ================== HIỆU ỨNG XE DI CHUYỂN ==================
export function initBusAnimation() {
  const busElement = document.getElementById("bus");
  if (!busElement) return;

  function checkBusVisibility() {
    const rect = busElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    busElement.classList.toggle("bus-move", isVisible);
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            busElement.classList.add("bus-move");
          } else {
            busElement.classList.remove("bus-move");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(busElement);
  } else {
    window.addEventListener("scroll", checkBusVisibility);
    checkBusVisibility();
  }
}
// ============== Modal hủy vé ==============
export function openCancelModal() {
  document.getElementById("cancelModal")?.classList.remove("hidden");
}

export function closeCancelModal() {
  document.getElementById("cancelModal")?.classList.add("hidden");
}

export function toggleTextarea(show) {
  const otherTextarea = document.getElementById("otherReason");
  if (otherTextarea) {
    show ? otherTextarea.classList.remove("hidden") : otherTextarea.classList.add("hidden");
  }
}

// ============== AN HIEN HEAER ==============

export function initPageVisibility() {
  const main = document.querySelector("main");
  const homeHeader = document.getElementById("homeHeader");
  const homeComment = document.getElementById("homeComment");

  if (!main) return;

  const allowedPages = ["home", "booktickets", "busDetail"];

  function updateVisibility() {
    if (allowedPages.includes(main.id)) {
      homeHeader?.classList.remove("hidden");
      homeComment?.classList.remove("hidden");
    } else {
      homeHeader?.classList.add("hidden");
      homeComment?.classList.add("hidden");
    }
  }


  const observer = new MutationObserver(() => updateVisibility());
  observer.observe(main, { attributes: true, attributeFilter: ["id"] });

  updateVisibility();
}

export function initBannerSwiper() {
  new Swiper(".bannerSwiper", {
    slidesPerView: 1,
    loop: true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // THÊM ĐOẠN NÀY
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
}