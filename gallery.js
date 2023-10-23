var swiper = new Swiper(".mySwiper6", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// back to top
let sec2 = document.querySelector(".food");
let toTop = document.querySelector(".back-to-top");
setInterval(()=>{
    if (scrollY > (sec2.offsetTop - 650)) {
        toTop.style.opacity = 1;
        toTop.style.scale = 1;
      } 
      else {
        toTop.style.opacity = 0;
        toTop.style.scale = 0;
      }

},10)


let menubar = document.querySelector(".menu");
let navItemsDiv = document.querySelector(".nav-items");
let navItems = document.querySelectorAll(".nav-items a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navItemsDiv.style.height == `calc(100vh - 10.6rem)`) {
      navItemsDiv.style.height = 0;
    }
  });
});
menubar.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (navItemsDiv.style.height == `calc(100vh - 10.6rem)`) {
    navItemsDiv.style.height = 0;
  } else {
    navItemsDiv.style.height = `calc(100vh - 10.6rem)`;
  }
}

// ------preloader-----------
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});