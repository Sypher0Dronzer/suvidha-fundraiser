// navbar animation
gsap.registerPlugin(ScrollTrigger);

if(navigator.userAgent.search("Firefox") < 0){
  let mm = gsap.matchMedia();
 
mm.add("(min-width: 800px)",()=>{
  gsap.fromTo("nav img", {
    y: -400,
    opacity: 0,
    duration: 0.7,
  },{
    y: 0,
    opacity: 1,
    duration: 0.7,
  });
  gsap.fromTo(
    ".nav-item, .menu",
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
  gsap.fromTo(".title-box h1", {
    opacity: 0,
    x: -800,
    duration: 0.8,
  },{
    opacity: 1,
    x:0,
    duration: 0.8,
  });
  gsap.from(".title-box h2", {
    opacity: 0,
    x: 800,
    duration: 0.8,
  });
  gsap.fromTo(".title-box p", {
    opacity: 0,
    y: 200,
    duration: 0.8,
  },{
    opacity: 1,
    y: 0,
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
      scrub:2
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
  
  gsap.fromTo(".section3",{
    y:500,
    opacity:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".section3",
      // markers:true,    
      start: "top 90%",
      end: "top 40%",
      scrub:2,
    },
  
  },{
    y:0,
    opacity:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".section3",
      // markers:true,    
      start: "top 90%",
      end: "top 40%",
      scrub:2,
    },
  
  })
  gsap.fromTo(".section3",{
    y:0,
    opacity:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".section3",
      // markers:true,    
      start: "top -20%",
      end: "top -50%",
      scrub:2,
    },
  
  },{
    y:-300,
    opacity:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".section3",
      // markers:true,    
      start: "top -19%",
      end: "top -50%",
      scrub:2,
    },
  
  })
  gsap.fromTo(".section3 h2 ",{
    opacity:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".section3 ",
      // markers:true,    
      start: "top 50%",
      end: "top 30%",
      scrub:1,
    },
  },{
    opacity:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".section3 ",
      // markers:true,    
      start: "top 50%",
      end: "top 30%",
      scrub:1,
    },
  })
  gsap.fromTo(".section3 .grid-item",{
    opacity:0,
    stagger:  {each:0.5 },
    scrollTrigger:{
      scroller:"body",
      trigger:".grid-item",
      // markers:true,    
      start: "top 50%",
      end: "top 30%",
      scrub:1,
    },
  },{
    opacity:1,
    stagger:  {each:0.5 },
    scrollTrigger:{
      scroller:"body",
      trigger:".grid-item",
      // markers:true,    
      start: "top 50%",
      end: "top 30%",
      scrub:1,
    },
  })
  gsap.fromTo(".section3 .grid-item",{
    opacity:1,
    y:0,
    stagger:  {each:0.5 },
    scrollTrigger:{
      scroller:"body",
      trigger:".grid-item",
      // markers:true,    
      start: "top -20%",
      end: "top -70%",
      scrub:1,
    },
  },{
    opacity:0,
    y:-200,
    stagger:  {each:0.5 },
    scrollTrigger:{
      scroller:"body",
      trigger:".grid-item",
      // markers:true,    
      start: "top -20%",
      end: "top -70%",
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
  
  gsap.fromTo(".section8 .event",{
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
  },{
    opacity:1,
    y:0,
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
  
  
  gsap.fromTo(".section4",{
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
  
  },{
    x:0,
    opacity:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".section4",
      // markers:true,    
      start: "top 90%",
      end: "top 40%",
      scrub:2,
    },
  
  })
  gsap.fromTo(".section4",{
    y:0,
    opacity:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".section4",
      // markers:true,    
      start: "top -20%%",
      end: "top -40%",
      scrub:2,
    },
  
  },{
    y:-100,
    opacity:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".section4",
      // markers:true,    
      start: "top -19%",
      end: "top -50%",
      scrub:2,
    },
  
  })
  
  gsap.fromTo(".section4 h2",{
    opacity:0,
    x:-100,
    scrollTrigger:{
      scroller:"body",
      trigger:".section4 h2",
      // markers:true,    
      start: "top 55%",
      end: "top 37%",
      scrub:1,
    },
  },{
    opacity:1,
    x:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".section4 h2",
      // markers:true,    
      start: "top 45%",
      end: "top 30%",
      scrub:1,
    },
  })
  gsap.fromTo(".section4 .flex-item-box",{
    opacity:0,
    x:-150,
    stagger:{each:.8},
    scrollTrigger:{
      scroller:"body",
      trigger:".section4 .flex-item-box",
      // markers:true,    
      start: "top 55%",
      end: "top 35%",
      scrub:1,
    },
  },{
    opacity:1,
    stagger:{each:.8},
    x:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".section4 h2",
      // markers:true,    
      start: "top 55%",
      end: "top 35%",
      scrub:1,
    },
  })
  gsap.fromTo(".section4 .flex-item-box i",{
    scale:0,
    stagger:{each:1},
    scrollTrigger:{
      scroller:"body",
      trigger:".section4 .flex-item-box i",
      // markers:true,    
      start: "top 65%",
      end: "top 50%",
      scrub:1,
    },
  },{
    scale:1,
    stagger:{each:1},
    scrollTrigger:{
      scroller:"body",
      trigger:".section4 .flex-item-box i",
      // markers:true,    
      start: "top 65%",
      end: "top 40%",
      scrub:1,
    },
  })
  
  
  // ------------------Our team------------
  const teamH2 = document.querySelector('.section7 h2');
  const results4 = Splitting({ target: teamH2, by: 'chars' });
  gsap.fromTo(".section5",{
    y:0,
    opacity:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".section5",
      // markers:true,    
      start: "top -20%%",
      end: "top -40%",
      scrub:2,
    },
  
  },{
    y:-100,
    opacity:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".section5",
      // markers:true,    
      start: "top -19%",
      end: "top -50%",
      scrub:2,
    },
  
  })
  gsap.fromTo(".section7 .char",{
    opacity:0,
    rotate:360,
    x:200,
    duration:0.05,
    stagger:{each:0.05},
    scrollTrigger: {
      trigger: ".section7 .char",
      scroller: "body",
      // markers: true,
      start: "top 80%",
      end: "top 65%",
      scrub:2
    },
  },{
    opacity:1,
    x:0,
    rotate:0,
    duration:0.05,
    ease:"bounce",
  
    stagger:{each:0.05},
    scrollTrigger: {
      trigger: ".section7 .char",
      scroller: "body",
      // markers: true,
      start: "top 85%",
      end: "top 65%",
      scrub:2
    },
  })
  
  gsap.fromTo(".flex-team",{
    opacity:0,
    y:300,
    stagger:{each:0.5},
    scrollTrigger: {
      trigger: ".flex-team",
      scroller: "body",
      // markers: true,
      start: "top 80%",
      end: "top 70%",
      scrub:2
    },
  },{
    opacity:1,
    y:0,
    stagger:{each:0.5},
    scrollTrigger: {
      trigger: ".flex-team",
      scroller: "body",
      // markers: true,
      start: "top 80%",
      end: "top 60%",
      scrub:2
    },
  })
  
  
  // --------testimonials-------
  const testiH2 = document.querySelector('.section5 h2');
  const results5 = Splitting({ target: testiH2, by: 'chars' });
  gsap.fromTo(".section5 .char",{
    opacity:0,
    scale:2,
    duration:0.05,
    stagger:{each:0.05},
    scrollTrigger: {
      trigger: ".section5 .char",
      scroller: "body",
      // markers: true,
      start: "top 80%",
      end: "top 65%",
      scrub:2
    },
  },{
    opacity:1,
    scale:1,
    duration:0.05,
    ease:"bounce",
  
    stagger:{each:0.05},
    scrollTrigger: {
      trigger: ".section5 .char",
      scroller: "body",
      // markers: true,
      start: "top 85%",
      end: "top 65%",
      scrub:2
    },
  })

  gsap.fromTo(".section5",{
    x:-1000,
    opacity:0,
    scrollTrigger:{
      scroller:"body",
      trigger:".section5",
      // markers:true,    
      start: "top 90%",
      end: "top 40%",
      scrub:2,
    },
  
  },{
    x:0,
    opacity:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".section5",
      // markers:true,    
      start: "top 90%",
      end: "top 40%",
      scrub:2,
    },
  
  })


  gsap.fromTo(".section5 .mySwiper3 ",{
    opacity:0,
    y:200,
    stagger:  {each:0.5 },
    scrollTrigger:{
      scroller:"body",
      trigger:".section5 .mySwiper3 ",
      // markers:true,   
      start: "top 70%",
      end: "top 40%",
      scrub:1,
    },
  },{
    opacity:1,
    y:0,
    stagger:  {each:0.5 },
    scrollTrigger:{
      scroller:"body",
      trigger:".section5 .mySwiper3 ",
      // markers:true,    
      start: "top 70%",
      end: "top 40%",
      scrub:1,
    },
  })

})

}


gsap.from(".back-to-top",{
  repeat:-1,
  duration:.8,
  width:60.23,
  height:62.93

})

