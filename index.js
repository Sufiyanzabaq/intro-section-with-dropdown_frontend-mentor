const menuBtn = document.querySelector(".ham")
const closeBtn = document.querySelector(".close-icon")
const mobileMenu = document.querySelector(".mobile-menu")


menuBtn.addEventListener("click", () =>{
    mobileMenu.style.transform = "translate(0)"
})
closeBtn.addEventListener("click", () => {
    mobileMenu.style.transform = "translate(100%)"
})