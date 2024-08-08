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