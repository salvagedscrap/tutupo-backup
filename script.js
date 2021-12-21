
//sticky nav that changes color on scroll
const ul = document.querySelector('.ul')
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY>ul.offsetHeight +150){
        ul.classList.add('active')
    }else{
        ul.classList.remove('active')
    }
}

//scrollspy

let section= document. querySelectorAll('.section');
let navLinks= document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    section.forEach(sec =>{

        let top = window.scrollY;
        let offset= sec.offsetTop;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navLinks.forEach(links =>{
                links.classList.remove('hoveractive');

                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('hoveractive')
            })
        }    
    })
}

// SLIDER //////////////////////


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

// NAV

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', function(){
    nav.classList.toggle('navactive')
	})