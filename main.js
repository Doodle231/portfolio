const parallax = document.getElementsByClassName("tech")[0]
 const activeHam = document.getElementsByClassName("activeham")[0]
const logo = document.getElementsByClassName("icon")[0]

 window.addEventListener("scroll", function(){

    let offset = window.scrollY
parallax.style.backgroundPositionY = offset * .5 + "px"






})

const goToStudyGit = document.getElementById("quizgit")

goToStudyGit.addEventListener("click", function(){

    window.location.href = "https://github.com/Doodle231/quizapp";
})

const attendanceGit = document.getElementById("attendancegit")

attendanceGit.addEventListener("click", function(){

    window.location.href = "https://github.com/Doodle231/Student-Attendance-Tracker";
})


const closeHamburgerMenu = document.getElementsByClassName("close")[0]

closeHamburgerMenu.addEventListener("click", function(){

   logo.style.display = "block"
   activeHam.style.display = "none"
})

const OpenHamburgerMenu = document.getElementsByClassName("hamburger")[0]

OpenHamburgerMenu.addEventListener("click", function(){


    const activeHam = document.getElementsByClassName("activeham")[0]
    activeHam.style.display = "block"
    logo.style.display = "none"
 })


 const HamburgerMenuLinks = document.getElementsByClassName("hamclass")


 for (let i = 0; i < HamburgerMenuLinks.length; i++) {
   
    HamburgerMenuLinks[i].addEventListener("click", function(){

        activeHam.style.display = "none"
        logo.style.display = ""
        })
      

  } 


 let flashcardapp = document.getElementById("liveflashcard")

  flashcardapp.addEventListener("click", function(){

    window.location.href = "https://danroyals.com/flashcard.html";
  })

  let attendanceApp = document.getElementById("liveattendance")

  attendanceApp.addEventListener("click", function(){

    window.location.href = "https://danroyals.com/attendancetracker.html";
  })
