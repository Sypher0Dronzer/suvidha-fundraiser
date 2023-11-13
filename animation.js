// navbar animation
gsap.registerPlugin(ScrollTrigger);
gsap.from("nav img", {
  y: -400,
  opacity: 0,
  duration: 0.7,
});
gsap.fromTo(
  ".nav-item",
  {
    y:-300,
    opacity: 0,
    duration: 1,
  },
  {
    y: 0,
    opacity: 1,
    stagger: { each: 0.2 },
    duration: 1,
  }
);
gsap.fromTo(
  ".nav-items .btn-div a",
  {
    scale: 0,
    opacity: 0,
    duration: 0.8,
  },
  {
    scale: 1,
    opacity: 1,
    stagger: { each: 0.3 },
    duration: 0.8,
  }
);

// titl box animation
gsap.from(".title-box h1", {
  opacity: 0,
  x: -800,
  duration: 0.8,
});
gsap.from(".title-box h2", {
  opacity: 0,
  x: 800,
  duration: 0.8,
});
gsap.from(".title-box p", {
  opacity: 0,
  y: 400,
  duration: 0.8,
});
gsap.fromTo(".title-box .btn-div a,.title-box .btn-div button", {
  y:100,
  opacity: 0,
  duration: 1.5,
  stagger:{each : .4}
},
  {
    y:0,
    opacity: 1,
    duration: 1.5,
    stagger:{each : .6}
  }
);

//--------- about us-------------
gsap.from("#about-us h2", {
  opacity: 0,
  duration: .5,
  y: 400,
  scrollTrigger: {
    trigger: "#about-us h2",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    end: "top 70%",
    scrub:5
  },
});
gsap.from(".abt-us-left", {
  opacity: 0,
  duration:1,
  x: -800,
  scrollTrigger:{
    scroller:"body",
    trigger:".abt-us-left",
    start: "top 85%",
    end: "top 70%",
    markers: true,

    scrub:4,
  },
});

gsap.from(".abt-us-right", {
  opacity: 0,
  duration:1,
  x: 800,
  scrollTrigger:{
    scroller:"body",
    trigger:".abt-us-left",
    start: "top 85%",
    end: "top 70%",
    scrub:4
  },
});
gsap.fromTo(".abt-us-right .tag",{
  scale:0,
  y:-100,
  duration:1,
  stagger:{each: .3},
},{
  scale:1,
  duration:1,
  y:0,
  stagger:{each: .3},
  scrollTrigger:{
    scroller:"body",
    trigger:".abt-us-left",
    start: "top 75%",
    end: "top 60%",
    scrub:4
  },
})

// Splitting();
// const target = document.querySelector('.intro');
// const results = Splitting({ target: target, by: 'lines' });
// gsap.from(".lines",{
//   opacity:0,
//   x:100,
//   duration:0.05,

// })