

var hamburger = document.querySelector(".hamburger-container")

var mobilelinkscontainer = document.querySelector(".mobilelinkscontainer")
console.log(hamburger)



function addandremove(){
    hamburger.classList.toggle('showburger')
    mobilelinkscontainer.classList.toggle('showmobilelinks') 
}