/*********** NAVBAR ************/
const header = document.querySelector("header");
const navbar = document.querySelector("#navbar")
const topHeader = document.querySelector("#top-header");
const openMenu = document.querySelector("#openMenu");
const mobileNav = document.querySelector("#mobile-nav");

openMenu.addEventListener("click",()=>{
     mobileNav.classList.toggle("active");
     openMenu.classList.toggle("fa-xmark");
     header.classList.toggle("dark");
});
/*********** NAVBAR ************/


/*********** NAVBAR SCROLL************/
window.addEventListener("scroll",()=>{
    if(scrollY>50){
       navbar.classList.add("active");
       topHeader.classList.add("active");
    }

    else{
     navbar.classList.remove("active");
     topHeader.classList.remove("active");
    }
});

/*********** NAVBAR SCROLL************/

/*********** TESTOMONIAL ************/

 var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      freeMode: true,
      watchSlidesProgress: true,
      thumbs: {
        swiper: swiper,
      },
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });


/*********** TESTOMONIAL ************/

/*********** SPONSOR ************/
$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },

        500:{
            items:3,
            nav:false
        },
        800:{
            items:5,
            nav:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }
})
})

 /*********** SPONSOR ************/