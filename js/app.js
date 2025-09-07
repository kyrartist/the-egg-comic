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


//SECTION 3 
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

//SECTION 4
  gsap.from([".box-a4"], {
    scrollTrigger: {
      trigger: ".section-4",
      start: "top 50%",
      toggleActions: "restart none none reverse"
    },
    opacity: 0,
  })




});
