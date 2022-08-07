const parallax = document.getElementsByClassName("tech")[0]

window.addEventListener("scroll", function(){
console.log("hey")

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

   const activeHam = document.getElementsByClassName("activeham")[0]
   activeHam.style.display = "none"
})

const OpenHamburgerMenu = document.getElementsByClassName("hamburger")[0]

OpenHamburgerMenu.addEventListener("click", function(){


    const activeHam = document.getElementsByClassName("activeham")[0]
    activeHam.style.display = "block"
 })