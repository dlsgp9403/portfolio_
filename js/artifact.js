

//Nav Scroll snippet:
var lastLink;

function setTab() {
  $('.tab').each(function() {
    var scrollPos = $(document).scrollTop();
    var linkRef = $(this).attr("href");
    var refPos = $(linkRef).position().top;
    var refHeight = $(linkRef).height();
    
    if (refPos <= scrollPos && refPos + refHeight > scrollPos) {
      // Run this only if the section has changed...
      if (linkRef != lastLink) {
        // Update tab position:
        $('.tab').removeClass("active-tab");
        $(this).addClass("active-tab");
        var tabPos = $(this).position();
        var tabHeight = $(this).height();
        $(".indicator-line").css({"top": tabPos.top, "height": tabHeight + "px"});
        
        // History and URL hash update:
        history.pushState(null, null, linkRef);
        
        // Refresh control var:
        lastLink = linkRef;
      }
    }
  });
}

// Event handlers:
$(document).ready(function() {
  setTab();
  $(window).on("scroll resize", setTab);
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo("#artifact-banner", 
{
    y: "20%",
    opacity: 0
},
{ 
    y: "0%",
    opacity: 1,
    duration: 0.7,
    ease: Power1
})


gsap.fromTo("#artifact-intro-title", 
{
    y: "-20%",
    opacity: 0
},
{ 
    y: "0%",
    opacity: 1,
    duration: 0.7,
    ease: Power1
})

const sectionScroll = document.querySelectorAll('#scroll-section');

sectionScroll.forEach(revealUp => {
    gsap.fromTo(revealUp, 
    {
        y: "20%",
        opacity: 0
    },
    { 
        y: "0%",
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
            trigger: revealUp,
            scrub: 1,
            start: "-=100 center",
            
            end: "center bottom"
        }
    })
});



