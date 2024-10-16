

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





var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    cursorColor = document.querySelectorAll('.cursor-color'),
    cursorOutline = document.querySelectorAll('.cursor-outline'),
    text = document.querySelectorAll(".cursor-scale[data-hover]"),
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
  repeat: -1,

  onRepeat: function() {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    })
  }
});

window.addEventListener("mousemove", function (e){
  mouseX = e.clientX;
  mouseY = e.clientY;
});

cursorScale.forEach(link => {
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
  });
  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
  });
});



cursorColor.forEach(link => {
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow-small');
  });
  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow-small');
  });
});


cursorOutline.forEach(link => {
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow-outline');
  });
  link.addEventListener('mousemove', () => {
    cursor.classList.add('grow-outline');
  });
});





var lazyLoadInstance = new LazyLoad({});


























