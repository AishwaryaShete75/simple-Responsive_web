let menu = document.getElementById("menu");
let navLinks = document.getElementById("navLinks");

menu.addEventListener("click", function(){
    navLinks.classList.toggle("show");
});