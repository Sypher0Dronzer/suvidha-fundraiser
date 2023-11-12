// -----------swiper for title---------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
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
setInterval(() => {
  if (scrollY > sec2.offsetTop - 650) {
    toTop.style.opacity = 1;
    toTop.style.scale = 1;
  } else {
    toTop.style.opacity = 0;
    toTop.style.scale = 0;
  }
}, 10);

// -----------------testimonials--------------
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "card",
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

let slides = "";
for (var i = 1; i <= 10; i++) {
  slides += `<div class="swiper-slide">
  <img class="testimonial-img" src="testimonials/${i}.jpg" alt="" />
</div>`;
}
// console.log(slides)
document.querySelector(".mySwiper3 .swiper-wrapper").innerHTML = slides;

// --------------event swiper------
var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "card",
  breakpoints: {
    730: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

// about us section navigation

setInterval(function () {
  var abtRight = document.querySelector(".abt-us-right").clientWidth;
  document.querySelectorAll(".details *").forEach((detail) => {
    // console.log(detail.style)
    detail.style.width = `${abtRight - 45}px`;
  });
}, 100);

function selectorSlide(iter) {
  var abtRight = document.querySelector(".abt-us-right").clientWidth;
  document.querySelector(".details").style.transform = `translateX(-${
    iter * (abtRight - 45 + 50)
  }px)`;
}
var selectedItem = document.querySelectorAll(".selector p");
selectedItem.forEach(function (selected) {
  selected.addEventListener("click", () => {
    selectorSlide(selected.dataset.select);

    selectedItem.forEach((check) => {
      if (check === selected) {
        check.classList.add("selected");
      }
      if (check !== selected) {
        if (check.classList.contains("selected")) {
          check.classList.remove("selected");
        }
      }
    });
  });
});

var aboutHeight = document.querySelector(".about").clientHeight;
setInterval(function () {
  var aboutHeight = document.querySelector(".about").clientHeight;
  document.querySelector(".abt-us-right").style.minHeight = `${
    aboutHeight + 70
  }px`;
}, 10);

// about us counter

var countAll = document.querySelectorAll(".count");
function updateCounter() {
  setInterval(function () {
    countAll.forEach((counter) => {
      var target = parseInt(counter.dataset.limit);
      var innerCount = parseInt(counter.innerHTML);
      if (innerCount < target) {
        innerCount += 1;
        counter.innerHTML = innerCount;
      }
    });
  }, 100);
}

setInterval(function () {
  var countLocation = document
    .querySelector(".counter-div")
    .getBoundingClientRect().top;
  if (scrollY > countLocation - 100) {
    updateCounter();
  } else {
    setTimeout(()=>{
      countAll.forEach((counter) => {
        counter.innerHTML = 0;
      });
    },1000)
    
  }
}, 500);

// navbar animation 

gsap.from("nav img", {
  y:-400,
  opacity:0,
  duration:0.7,
})
gsap.from(".nav-item", {
  y:-400,
  opacity:0,
  // stagger:0.5

})
gsap.from(".nav-items .btn-div", {
  scale:0,
  opacity:0,
  // stagger:0.5
})

// titl box animation 
gsap.from(".title-box h1",{
  opacity:0,
  x:-800,
  duration:.8
})
gsap.from(".title-box h2",{
  opacity:0,
  x:800,
  duration:.8
})
gsap.from(".title-box p",{
  opacity:0,
  y:400,
  duration:.8
})
gsap.from(".title-box .btn-div a,.title-box .btn-div button",{
  opacity:0,
  duration:1.5,
})