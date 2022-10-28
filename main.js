let hamicon = document.getElementById("hamburgericon")
let menu = document.getElementById("mobilenavmenu")
let mobileLinks = document.getElementById("mobilelinks")


hamicon.addEventListener("click", function() {
    menu.style.display = "flex"
   
   mobileLinks.style.display = "block"
    menu.classList.toggle("active")
    mobileLinks.classList.toggle("active")

  });



