document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//SMOOTHSCROLL EFFECT
  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  })

    gsap.to(".idle", {
        y: "+=5", // Float up by 20px
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
            each: 0.5, // Stagger start times for multiple elements
            from: "random"
        }
    });

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
        start: "top 80%", //starts the fade in animation when the top of section 2 reaches 50% line down from top of viewport
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
        start: "top 80%", //starts the fade in animation when the top of section 2 reaches 50% line down from top of viewport
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
        start: "top 40%",
        toggleActions: "restart none none reverse",
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
        start: "top 80%",
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

  gsap.from([".h1"], {
    scrollTrigger: {
        trigger: ".h1",
        start: "top 70%", //starts the fade in animation when the top of section 3 reaches 30% line down from top of viewport
        toggleActions: "play none none none" //animation plays only once
    },
    opacity: 0,
    y: 20,
    duration: 1,
  })

  gsap.from([".g1"], {
    scrollTrigger: {
        trigger: ".g1",
        start: "top 70%", //starts the fade in animation when the top of section 3 reaches 30% line down from top of viewport
        toggleActions: "play none none none" //animation plays only once
    },
    opacity: 0,
    y: 20,
    duration: 1,
  })

  gsap.from([".h2", ".h3", ".h4", ".g2"], {
    scrollTrigger: {
        trigger: ".h2",
        start: "top 70%", //starts the fade in animation when the top of section 3 reaches 30% line down from top of viewport
        toggleActions: "play none none none" //animation plays only once
    },
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.7,
  })

  gsap.from([".g3"], {
    scrollTrigger: {
        trigger: ".g3",
        start: "top 70%", //starts the fade in animation when the top of section 3 reaches 30% line down from top of viewport
        toggleActions: "play none none none" //animation plays only once
    },
    opacity: 0,
    y: 20,
    duration: 1,
  })

//SECTION 8
  gsap.to([".box-8c"], {
    scrollTrigger: {
      trigger: ".box-8c",
      start: "top top",
      pin: true,
      end: "+=2500",
    },
  })

  gsap.to([".box-8c-img"], {
    scrollTrigger: {
        trigger: ".box-8c",
        start: "top 5%", 
        toggleActions: "restart none none reverse", 
        scrub: true,
        end: "+=270",
   },
    opacity: 0,
  })

  gsap.from([".box-8d"], {
    scrollTrigger: {
        trigger: ".box-8c",
        start: "top 5%", 
        toggleActions: "restart none none reverse", 
        scrub: true,
        end: "+=400",
   },
    opacity: 0,
    width: 0,
    height: 0,
  })

//SECTION 9
  gsap.to([".box-9a"], {
    scrollTrigger: {
      trigger: ".section-9",
      start: "top top",
      pin: true,
      end: "+=2000",
      scrub: 3,
    },
    x: -4500,
  })

//SECTION 11
  gsap.to([".box-11a"], {
    scrollTrigger: {
      trigger: ".section-11",
      pin: true,
      scrub: true,
      end: "+=1200",
    },
    width: "100vw",
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
