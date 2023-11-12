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