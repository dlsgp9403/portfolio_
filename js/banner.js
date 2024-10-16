gsap.fromTo(
    "#name",
    {
      transform: "translateY(-30%)",
      autoAlpha: 0,
    },
    {
      transform: "translateY(0)",
      autoAlpha: 1,
      duration: 1,
      delay: 0.2,
      ease: "power2"
    }
  );
  
  gsap.fromTo(
    "#intro",
    {
      transform: "translateY(-20%)",
      autoAlpha: 0,
    },
    {
      transform:"translateY(0)",
      autoAlpha: 1,
      duration: 1,
      delay: 0.4,
      ease: "power2"
    }
  )
  
  gsap.fromTo(
    "#header",
    {
      transform: "translateY(-30%)",
      autoAlpha: 0,
    },
    {
      transform:"translateY(0)",
      autoAlpha: 1,
      duration: 1,
      ease: "power2"
    }
  )
  
  gsap.fromTo(
    "#cta-btn",
    {
      transform: "translateY(-10%)",
      autoAlpha: 0,
    },
    {
      transform:"translateY(0)",
      autoAlpha: 1,
      duration: 1,
      delay: 0.4,
      ease: "power2"
    }
  )
  