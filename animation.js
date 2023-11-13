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
Splitting();
const abtUsH2 = document.querySelector('#about-us h2');
const results2 = Splitting({ target: abtUsH2, by: 'chars' });
gsap.fromTo(".char",{
  opacity:0,
  y:80,
  duration:0.05,
  ease:"bounce",
  stagger:{each:0.05},
  scrollTrigger: {
    trigger: "#about-us h2",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 65%",
    scrub:5
  },
},{
  opacity:1,
  y:0,
  duration:0.05,
  stagger:{each:0.05},
  scrollTrigger: {
    trigger: "#about-us h2",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    end: "top 65%",
    scrub:2
  },
})

gsap.from(".abt-us-left", {
  opacity: 0,
  duration:1,
  x: -800,
  scrollTrigger:{
    scroller:"body",
    trigger:".abt-us-left",
    start: "top 85%",
    end: "top 65%",
    // markers: true,
    scrub:2,
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
    end: "top 65%",
    scrub:2
  },
});
gsap.fromTo(".abt-us-right .tag",{
  opacity:0,
  y:100,
  duration:.1,
  stagger:{each: .2},
},{
  opacity:1,
  duration:.5,
  y:0,
  stagger:{each: .2},
  scrollTrigger:{
    scroller:"body",
    trigger:".tag",
    start: "top 75%",
    end: "top 60%",
    scrub:2
  },
})
gsap.fromTo(".abt-us-right .about",{
  opacity:0,
  y:100,
  duration:.1,
  stagger:{each: .2},
},{
  opacity:1,
  duration:.5,
  y:0,
  stagger:{each: .2},
  scrollTrigger:{
    scroller:"body",
    trigger:".about",
    start: "top 65%",
    end: "top 55%",
    scrub:2
  },
})

gsap.from(".section3",{
  x:-1000,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".section3",
    // markers:true,    
    start: "top 90%",
    end: "top 40%",
    scrub:2,
  },

})
gsap.from(".section3 h2 , .section3 .grid-item",{
  opacity:0,
  stagger:{each:0.5},
  scrollTrigger:{
    scroller:"body",
    trigger:".section3 , .section3 .grid-item",
    // markers:true,    
    start: "top 40%",
    end: "top 30%",
    scrub:1,
  },
})

const eventsH2 = document.querySelector('#events h2');
const results1 = Splitting({ target: eventsH2, by: 'chars' });
gsap.fromTo(".events .char",{
  opacity:0,
  y:80,
  duration:0.05,
  stagger:{each:0.05},
  scrollTrigger: {
    trigger: ".events .char",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 65%",
    scrub:2
  },
},{
  opacity:1,
  y:0,
  duration:0.05,
  ease:"bounce",

  stagger:{each:0.05},
  scrollTrigger: {
    trigger: ".events .char",
    scroller: "body",
    // markers: true,
    start: "top 85%",
    end: "top 65%",
    scrub:2
  },
})

gsap.from(".section8 .event",{
  opacity:0,
  y:50,
  stagger:{each:1},
  scrollTrigger:{
    scroller:"body",
    trigger:".section8 .event",    
    // markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub:1,
  }
})


gsap.from(".section4",{
  x:-1000,
  opacity:0,
  scrollTrigger:{
    scroller:"body",
    trigger:".section4",
    // markers:true,    
    start: "top 90%",
    end: "top 40%",
    scrub:2,
  },

})

gsap.from(".section4 h2 , .section4 .flex-item-box",{
  opacity:0,
  x:-150,
  stagger:{each:1},
  scrollTrigger:{
    scroller:"body",
    trigger:".section4 h2 , .section4 .flex-item-box",
    // markers:true,    
    start: "top 45%",
    end: "top 30%",
    scrub:1,
  },
})
gsap.from(".section4 .flex-item-box i",{
  opacity:0,
  stagger:{each:1},
  scrollTrigger:{
    scroller:"body",
    trigger:".section4 .flex-item-box i",
    markers:true,    
    start: "top 45%",
    end: "top 25%",
    scrub:1,
  },
})

