document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//SMOOTHSCROLL EFFECT
  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  })

//SECTION 1
  //car crash
  gsap.to([".box-1a"], {
    scrollTrigger: {
      trigger: ".box-1a",
      start: "top 80%",
      scrub: true,
    },
    opacity: 100,
    width: "180vw",
    height: "100%"
  })

//SECTION 2
  //boxes fade-in
  gsap.from([".box-2a", ".box-2b", ".box-2c"], {
    scrollTrigger: {
        trigger: ".box-2a",
        start: "top 60%", //starts the fade in animation when the top of section 2 reaches 50% line down from top of viewport
        toggleActions: "play none none none" 
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, 
  })

  gsap.from([".box-2d", ".box-2e", ".box-2f"], {
    scrollTrigger: {
        trigger: ".box-2d",
        start: "top 60%", //starts the fade in animation when the top of section 2 reaches 50% line down from top of viewport
        toggleActions: "play none none none" 
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, 
  })

//SECTION 3 
  //boxes fade-in
  gsap.from([".box-3a"], {
    scrollTrigger: {
        trigger: ".section-3",
        start: "top 30%", //starts the fade in animation when the top of section 3 reaches 30% line down from top of viewport
        toggleActions: "play none none none" //animation plays only once
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, 
  })

//SECTION 5
  //overlay box fades in and out
  gsap.from([".box-5c"], {
    scrollTrigger: {
        trigger: ".box-5c",
        start: "top 40%", //starts the fade in animation when the top of section 5 reaches 50% line down from top of viewport
        toggleActions: "restart none none reverse", //animation restarts when off screen
        scrub: true,
        end: "top 5%",
   },
    opacity: 0,
  })

//SECTION 6
  //boxes fade-in
  gsap.from([".box-6a", ".box-6b", ".box-6c"], {
    scrollTrigger: {
        trigger: ".section-6",
        start: "top 50%", //starts the fade in animation when the top of section 2 reaches 50% line down from top of viewport
        toggleActions: "play none none none" 
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, 
  })

//SECTION 7
  gsap.to([".box-7a"], {
    scrollTrigger: {
      trigger: ".section-7",
      start: "top top",
      // pin: true,
      // end: "+=2000",
      scrub: 2,
    },
    left: "80%",
    top: "80%",
  })

  // gsap.from([".h1"], {
  //   scrollTrigger: {
  //       trigger: ".box-7a",
  //       start: "top 10%",
  //       toggleActions: "restart none none reverse", //animation restarts when off screen
  //       scrub: true,
  //       end: "top 5%",
  //  },
  //   opacity: 0,
  // })

//SECTION 8
  gsap.to([".box-8b"], {
    scrollTrigger: {
      trigger: ".box-8b",
      start: "top top",
      pin: true,
      end: "+=2000",
    },
  })

//SECTION 9
  gsap.to([".box-9a"], {
    scrollTrigger: {
      trigger: ".section-9",
      start: "top top",
      pin: true,
      end: "+=2000",
      scrub: 2,
    },
    x: 4500,
  })

//SECTION 14
  //box-a fade-in
  gsap.from([".box-14a"], {
    scrollTrigger: {
      trigger: ".section-14",
      start: "top 50%",
      toggleActions: "restart none none reverse"
    },
    opacity: 0,
  })

});
