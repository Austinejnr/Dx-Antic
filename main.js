

var hamburger = document.querySelector(".hamburger-container")

var mobilelinkscontainer = document.querySelector(".mobilelinkscontainer")
console.log(hamburger)
const menu_btn = document.querySelector(".mobilelinkscontainer");



function addandremove(){
    hamburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle('showmobilelinks') 
    menu_btn.classList.toggle("is-active");
}

new Swiper ("#swiper-2", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 24,
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true
    },
    navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left"
    }
})
   

