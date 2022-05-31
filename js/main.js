let ham = document.querySelector("#ham");
let menu = document.querySelector("#mobileNav");
let menuOpen = false;
ham.addEventListener("click", function(){
    
    if(!menuOpen){
        ham.classList.add("open");
        menuOpen = true;
        menu.style.height = "100vh";
        menu.style.marginTop = "6em";
    }
    else{
        ham.classList.remove("open");
        menuOpen = false;
        menu.style.height = "0";
        menu.style.marginTop = "0";
    }

});