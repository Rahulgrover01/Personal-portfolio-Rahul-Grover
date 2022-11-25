let menuBtn= document.querySelector(".menu-btn")
let cnclBtn= document.querySelector(".cancel-btn")
let navBar= document.querySelector(".navbar")

menuBtn.onclick=()=>{
    menuBtn.style.opacity= "0"
    menuBtn.style.pointerEvents= "none"
    navBar.classList.add("active")
}
cnclBtn.onclick=()=>{
    menuBtn.style.opacity= "1"
    menuBtn.style.pointerEvents= "auto"
    navBar.classList.remove("active")
}
