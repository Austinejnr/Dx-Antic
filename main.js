

var hamburger = document.querySelector(".hamburger-container")

var mobilelinkscontainer = document.querySelector(".mobilelinkscontainer")
console.log(hamburger)
const menu_btn = document.querySelector(".mobilelinkscontainer");



function addandremove(){
    hamburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle('showmobilelinks') 
    menu_btn.classList.toggle("is-active");
}
   

