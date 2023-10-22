// -----------swiper for title---------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".right-swipe",
    prevEl: ".left-swipe",
  },
});

let arrows = document.querySelectorAll(".arrow-head");
let swiperDiv = document.querySelector(".swiper");

swiperDiv.addEventListener("mouseover", () => {
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
  });
});
swiperDiv.addEventListener("mouseout", () => {
  arrows.forEach((arrow) => {
    arrow.style.opacity = 0;
  });
});

// --------swiper for free-swipe--------
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    440: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

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

// back to top
let sec2 = document.querySelector(".section2");
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

// -----------------testimonials--------------
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop:true,
  effect:'card',
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  }
});

let slides='';
for(var i=1;i<=5;i++){
  slides+=`<div class="swiper-slide">
  <img class="testimonial-img" src="testimonials/${i}.jpg" alt="" />
</div>`
}
console.log(slides)
document.querySelector('.mySwiper3 .swiper-wrapper').innerHTML=slides;



// --------------event swiper------
var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop:true,
  effect:'card',
  breakpoints: {
    730: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  }
});