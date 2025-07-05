/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
    } else {
    menuBtn.className = "nav-menu";
    }
}

  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

    } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

    }
}

  /* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText",{
    strings : ["Designer","engineer","Developer"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
})

  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
})

  /* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

  /* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
sr.reveal('.top-header',{})

  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

  /* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
})
}

window.addEventListener('scroll', scrollActive)

// JavaScript to toggle dark mode
const toggleButton = document.querySelector('.dark-mode-toggle');
let isDarkMode = false;

toggleButton.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    toggleDarkMode();
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode', isDarkMode);
}

document.getElementById('downloadButton').addEventListener('click', function() {
    // Path to the file to be downloaded
    var fileUrl = "C:\Users\Abrar\Desktop\ap\Abrar Ayman.pdf";
    
    // Create a temporary link element
    var downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = 'AbrarAyman.pdf'; // Name of the file to be downloaded
    
    // Append the link to the body
    document.body.appendChild(downloadLink);
    
    // Trigger the click event of the link
    downloadLink.click();
    
    // Remove the link from the DOM
    document.body.removeChild(downloadLink);
});
document.getElementById('redirectButton').addEventListener('click', function() {
  // URL of the page to redirect to
  var nextPageUrl = 'Untitled-111.html'; // Replace 'another-page.html' with the actual URL
  
  // Redirect to the next page
  window.location.href = nextPageUrl;
});