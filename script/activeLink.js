const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".navlink").forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add("active");
    }
});


const navigation = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
});