let hamicon = document.getElementById("hamburgericon")
let menu = document.getElementById("mobilenavmenu")
let mobileLinks = document.getElementsByClassName("mobilelink")

hamicon.addEventListener("click", function() {
    menu.style.display = "flex"
   

    menu.classList.toggle("active")
    console.log(mobileLinks[0])
    mobileLinks[0].classList.toggle("active")
    mobileLinks[1].classList.toggle("active")
    mobileLinks[2].classList.toggle("active")
    mobileLinks[3].classList.toggle("active")

    
  });





    for (let i = 0; i < mobileLinks.length; i++) {
        mobileLinks[i].addEventListener("click", function() {

            menu.style.display = "none"
      })

    }
