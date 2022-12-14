gsap.registerPlugin(ScrollTrigger);

//GET ACCESS DOM
const elementMenu = document.querySelectorAll("a.element-menu");
const burgerMenu = document.querySelector("span.material-symbols-outlined");
const checkboxMenu = document.getElementById("mobile");
const blurItems = document.querySelectorAll("div.blur");


// WAIT FOR WINDOW LOAD
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

//EVENT LISTENER

//Ferme menu lors d'un click sur la navigation 
for (var i=0; i < elementMenu.length; i++) {
    elementMenu[i].addEventListener('click',() => {
        checkboxMenu.checked = false;
        burgerMenu.textContent = 'menu';
    });
}

//Change l'icone de la checkbox en croix lorsque le menu est ouvert
checkboxMenu.addEventListener('change', ($event) => {
    if ($event.target.checked){
        burgerMenu.textContent = 'close';
    }else{
        burgerMenu.textContent = 'menu';
    }
});

// fait apparaitre les blocs formations et cursus
window.addEventListener("scroll", appear);
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", rotate);


// onmouseenter crée un blur pour les items de experience pro non mis en valeur + focus pour item mis en valeur
for(let k=0; k<blurItems.length; k++){
  blurItems[k].onmouseenter = function(event){
    for (let i=0; i<blurItems.length ; i++ ){
      blurItems[i].classList.add("blurred");
    }
  }
}

//onmouseleave retire le blur et le focus class
for(let k=0; k<blurItems.length; k++){
  blurItems[k].onmouseleave = function(event){
    for (let i=0; i<blurItems.length ; i++ ){
      blurItems[i].classList.remove("blurred");
    }
  }
}

//FUNCTIONS
function reveal() {
    var reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  



function appear() {
  var appears = document.querySelectorAll(".appear");

  for(let i = 0; i < appears.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = appears[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      appears[i].classList.add("active");
    }else{
      appears[i].classList.remove("active")
    }
  }
}



function rotate() {
  var rotate = document.querySelectorAll(".rotate");

  for(let i = 0; i < rotate.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = rotate[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      rotate[i].classList.add("active");
    }else{
      rotate[i].classList.remove("active")
    }
  }
}





//GSAP

  gsap.to(".actionDecalageParcours", {
    scrollTrigger:{
      trigger: ".actionDecalageParcours",
      start: "top 75%",
      end: "top 55%",
      toggleActions: "restart none reverse reset",
      scrub: 0.6,
      markers: false
    },
    x: 140,
    rotation: 0,
    transformOrigin: "center center", 
    ease: "linear"
  });

  gsap.to(".actionDecalageCompetences", {
    scrollTrigger:{
      trigger: ".actionDecalageCompetences",
      start: "top 75%",
      end: "top 55%",
      toggleActions: "restart none reverse reset",
      scrub: 0.6,
      markers: false
    },
    x: 140,
    rotation: 0,
    transformOrigin: "center center", 
    ease: "linear"
  });

  gsap.to(".actionDecalageCursus", {
    scrollTrigger:{
      trigger: ".actionDecalageCursus",
      start: "top 75%",
      end: "top 40%",
      toggleActions: "restart none reverse reset",
      scrub: 0.6,
      markers: false
    },
    x: 140,
    rotation: 0,
    transformOrigin: "center center", 
    ease: "linear"
  });

  gsap.to(".actionDecalageExperience", {
    scrollTrigger:{
      trigger: ".actionDecalageExperience",
      start: "top 75%",
      end: "top 40%",
      toggleActions: "restart none reverse reset",
      scrub: 0.6,
      markers: false
    },
    x: 140,
    rotation: 0,
    transformOrigin: "center center", 
    ease: "linear"
  });

  gsap.to(".actionDecalageContact", {
    scrollTrigger:{
      trigger: ".actionDecalageContact",
      start: "top 75%",
      end: "top 40%",
      toggleActions: "restart none reverse reset",
      scrub: 0.6,
      markers: false
    },
    x: 140,
    rotation: 0,
    transformOrigin: "center center", 
    ease: "linear"
  });