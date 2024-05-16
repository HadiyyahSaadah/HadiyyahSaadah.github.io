/*===========================Toggle icon navbar======================================*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*===========================Scroll section active======================================*/ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*===========================Sticky navbar============================================*/ 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*===========================remove toggle icon and navbar============================================*/ 
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*===========================About me Read More Button============================================*/
// Get the elements
const moreText = document.getElementById("more-about");
const readMoreBtn = document.getElementById("read-more-btn");

// Function to toggle the visibility of the additional text
readMoreBtn.addEventListener("click", function() {
    moreText.classList.toggle("hidden");
    if (moreText.classList.contains("hidden")) {
        readMoreBtn.textContent = "Read More";
    } else {
        readMoreBtn.textContent = "Read Less";
    }
});

/*===========================scroll reveal============================================*/ 
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin:'right' });

/*===========================typed JS============================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Web Developer', 'Graphic Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

