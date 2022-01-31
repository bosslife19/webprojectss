var slide =document.querySelector(".togglers");
var menu = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links li");
function slider (){
    slide.addEventListener('click', function(){
        slide.classList.toggle("close");
        menu.classList.toggle("active");
        navLinks.forEach(function(link){
         if(link.style.animation){
             link.style.animation = "";
         }else{
             link.style.animation = "chiboy 1s ease forwards 2s"

             }
         }
        )


    });
    }
    slider();

