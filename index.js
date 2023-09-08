const menuBtn = document.querySelector(".ham")
const closeBtn = document.querySelector(".close-icon")
const mobileMenu = document.querySelector(".mobile-menu")
const dropdown = document.querySelector(".dropdown")
const overFlow = document.querySelector(".overflow")


menuBtn.addEventListener("click", () =>{
    mobileMenu.style.transform = "translate(0)"
    overFlow.style.display = "block"
})
closeBtn.addEventListener("click", () => {
    mobileMenu.style.transform = "translate(100%)"
    overFlow.style.display = "none"
})

