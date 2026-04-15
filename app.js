document.addEventListener("DOMContentLoaded", () => {
  // 1. Custom Cursor
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    // Smooth follow
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Outline follows with slight delay
    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards", easing: "ease" });
  });

  // 2. Initial Setup & Entrance Animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero section entrance
  const tl = gsap.timeline();
  
  tl.fromTo(".navbar.hidden-onload", 
    { y: -20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  )
  .fromTo(".hero-title .word", 
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" },
    "-=0.5"
  )
  .fromTo(".sub-badge.hidden-onload, .hero-subtitle.hidden-onload",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
    "-=0.5"
  )
  .fromTo(".mockup-container.hidden-onload",
    { y: 40, opacity: 0, rotationX: 10 },
    { y: 0, opacity: 1, rotationX: 0, duration: 1.5, ease: "power4.out" },
    "-=0.5"
  );

  // 3. 3D Floating Mockup Effect
  const mockup = document.querySelector('.input-mockup');
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    
    gsap.to(mockup, {
      rotationY: x,
      rotationX: y,
      transformPerspective: 1000,
      ease: "power1.out",
      duration: 1
    });
  });

  // 4. Marquee Scroll interaction
  gsap.to(".marquee", {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".philosophy",
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

  // 5. Text Reveal on Scroll (Philosophy section)
  const revealBlocks = gsap.utils.toArray('.reveal-text .block');
  revealBlocks.forEach(block => {
    gsap.to(block, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: block,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
      }
    });
  });
  
  gsap.to('.reveal-paragraph', {
    opacity: 1,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.reveal-paragraph',
      start: "top 85%",
      end: "bottom 70%",
      scrub: true
    }
  });

  // 6. Section Background Transition: Cream -> Dark -> Cream
  gsap.to("body", {
    backgroundColor: "#121212", // dark
    color: "#F5F2ec",
    scrollTrigger: {
      trigger: ".philosophy",
      start: "top 50%",
      end: "top 10%",
      scrub: true,
      onEnter: () => updateCursorColor('#F5F2ec'),
      onLeaveBack: () => updateCursorColor('#1c1c1e')
    }
  });

  gsap.to("body", {
    backgroundColor: "#F5F2ec", // back to cream
    color: "#1c1c1e",
    scrollTrigger: {
      trigger: ".pillars",
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      onEnter: () => updateCursorColor('#1c1c1e'),
      onLeaveBack: () => updateCursorColor('#F5F2ec')
    }
  });

  function updateCursorColor(color) {
    cursorDot.style.backgroundColor = color;
    cursorOutline.style.borderColor = color;
  }

  // 7. iPhone Showcase Scroll Sequence
  const showcaseTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".iphone-showcase",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      // Optional: add markers: true to debug
    }
  });

  // Stage 0: Phone enters
  showcaseTl.fromTo(".iphone-frame-wrapper", 
    { scale: 0.5, y: 300, rotationX: 45, opacity: 0 },
    { scale: 1, y: 0, rotationX: 0, opacity: 1, duration: 1, ease: "power2.out" }
  );

  // Stage 1: First text
  showcaseTl.to(".sc-text-1", { opacity: 1, y: -20, duration: 0.5 })
            .to(".sc-text-1", { opacity: 0, y: -40, duration: 0.5, delay: 0.5 });

  // Stage 2: Slide to Screen 2 & Second text
  showcaseTl.to(".iphone-carousel", { xPercent: -33.33, duration: 1, ease: "power2.inOut" })
            .to(".sc-text-2", { opacity: 1, y: -20, duration: 0.5 }, "-=0.2")
            .to(".sc-text-2", { opacity: 0, y: -40, duration: 0.5, delay: 0.5 });

  // Stage 3: Slide to Screen 3 & Third text
  showcaseTl.to(".iphone-carousel", { xPercent: -66.66, duration: 1, ease: "power2.inOut" })
            .to(".sc-text-3", { opacity: 1, y: -20, duration: 0.5 }, "-=0.2")
            .to(".sc-text-3", { opacity: 0, y: -40, duration: 0.5, delay: 0.5 });

  // Stage 4: Exit sequence
  showcaseTl.to(".iphone-frame-wrapper", { scale: 0.8, y: -300, opacity: 0.2, duration: 1 });


  // 8. General Fade Up elements
  const fadeUpElements = gsap.utils.toArray('.fade-up');
  fadeUpElements.forEach(element => {
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });
});
