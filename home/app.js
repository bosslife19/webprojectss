function drop (){
    var dropMenu = document.getElementById("drop");
    var dropButton = document.querySelector("span img");
    
    
    var login = document.querySelector(".login");
    dropButton.addEventListener("click", function(){
        dropButton.classList.toggle("transform");
        dropMenu.classList.toggle("active");
        login.classList.toggle("active");
    });

}
function toggle(){
    var toggleMenu = document.querySelector(".nav-links");
    var dropMenu = document.getElementById("drop");
    console.log(dropMenu);
    var toggleButton = document.querySelector(".togglers");
    var login = document.querySelector(".login");
    var dropButton = document.querySelector("span img");
    
    toggleButton.addEventListener("click", function(){
        toggleMenu.classList.toggle("show");
        toggleButton.classList.toggle("close");
        if(dropMenu.classList.contains("active")){
            dropMenu.classList.remove("active");
            login.classList.add("move");
            dropButton.classList.remove("transform");
        }
        
    });
}
toggle();
drop();
   