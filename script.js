console.log("Temple Of God Loaded");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const icon = menuToggle.querySelector("i");
 
// TOGGLE MENU
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
 
    if(navLinks.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});
 
// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});
 
// DROPDOWN CLICK (MOBILE)
const dropdown = document.querySelector(".dropdown");
 
dropdown.addEventListener("click", (e) => {
    if(window.innerWidth <= 768){
        if(e.target.parentElement.classList.contains("dropdown")) {
            e.preventDefault();
        }
        dropdown.classList.toggle("active");
    }
});
