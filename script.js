
function loader(){
  var tl = gsap.timeline()

tl.from(".loader span",{
  x:100,
  duration:1.2,
  stagger:.03,
  delay:.1
})
tl.to(".loader span",{
  x:-100,
  duration:.6,
  opacity:0,
  stagger:.03
})
tl.to('.loader',{
  duration:.5,
  opacity:0,
  display:"none"
})
tl.from('.page1 .inner-content h1 span',{
  y:60,
  duration:.5,
  delay:-.3,
  stagger:.05
})
}

loader();



function locoScroll() {
    
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: "#main",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate: self => console.log(self.direction)
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: "#main",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});


// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: "#main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locoScroll()

function cursor_efectos() {
const cursor = document.querySelector("#cursor")
const innerContent = document.querySelector("#page1-content")


innerContent.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
  })
})

innerContent.addEventListener("mouseenter",function(dets){
  gsap.to(cursor,{
      scale:1,
      opacity:1
  })
})
innerContent.addEventListener("mouseleave",function(dets){
  gsap.to(cursor,{
      scale:0,
      opacity:0
  })
})
}


cursor_efectos()


function page2Animacion() {
    
    gsap.from(".elem h1", {
        y:120,
        stagger:0.2,
        duration: 1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 47%",
            end:"top 46%",
            // markers:true,
            scrub:2
        }
    })

}

page2Animacion()


function page3Animacion() {
    
  gsap.from(".elem-1 h1", {
      y:120,
      stagger:0.2,
      duration: 1,
      scrollTrigger:{
          trigger:"#page3-2",
          scroller:"#main",
          start:"top 47%",
          end:"top 46%",
          // markers:true,
          scrub:2
      }
  })

}

page3Animacion()

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

function menuAnim(){
  const menuBtn = document.querySelector('#page1 #page1-content nav #menu')
  const menu = document.querySelector('#page1 .menu')
  const closeBtn = document.querySelector('#page1 .menu  #close')
  const video = document.querySelector('#page1 .menu .menu-sec .vid video')
  const playReel = document.querySelector('#page1 .menu .menu-sec .vid .play')
  const smallLinks = document.querySelector('#page1 .menu .small-links')
  const Links = document.querySelectorAll('#page1 .menu .menu-sec .links h3 , #page1 .menu .menu-sec .links button')
  const border = document.querySelector('#page1 .menu .menu-border') 


menuBtn.addEventListener('click',() => {
  menu.classList.add('active')
  menu.style.transition = `height .5s ease`
  
  gsap.from(video,{
    scale:.1,
    duration:1
  })
  gsap.from(playReel,{
    y:-100,
    duration:1.1
  })
  gsap.from(smallLinks,{
    x:200,
    duration:2,
    delay:-.4
  })
  gsap.from(Links,{
    y:100,
    duration:.7,
    stagger:.1
  })
  gsap.to(border,{
   width:95+"vw",
   duration:1.5,
   delay:-.1
  })

})
closeBtn.addEventListener('click',() => {
  menu.classList.remove('active') 
})

}

menuAnim();




// control + K + C comando para comentar
