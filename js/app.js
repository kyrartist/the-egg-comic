document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//   gsap.to(".box", {
//     rotation: 360,
//     duration: 2,
//   })

//SMOOTHSCROLL EFFECT
  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  })

//SECTION 1
  //car crash
  gsap.to([".box-a1"], {
    scrollTrigger: {
      trigger: ".box-a1",
      start: "top 80%",
      scrub: true,
    },
    opacity: 100,
    // scale: 2,
    width: "1200px",
    height: "1000px"
  })

//SECTION 2
  //boxes fade-in
  gsap.from([".box-a2", ".box-b2", ".box-c2"], {
    scrollTrigger: {
        trigger: ".section-2",
        start: "top 70%", //starts the fade in animation when the top of section 3 reaches 70% line down from top of viewport
        toggleActions: "restart none none reverse" //animation restarts when off screen
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, 
  })

//SECTION 3 
  //boxes fade-in
  gsap.from([".box-a3", ".box-b3", ".box-c3"], {
    scrollTrigger: {
        trigger: ".section-3",
        start: "top 70%", //starts the fade in animation when the top of section 3 reaches 70% line down from top of viewport
        toggleActions: "restart none none reverse" //animation restarts when off screen
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, 
  })

//SECTION 14
  //box-a fade-in
  gsap.from([".box-a14"], {
    scrollTrigger: {
      trigger: ".section-14",
      start: "top 50%",
      toggleActions: "restart none none reverse"
    },
    opacity: 0,
  })

});
