let ham = document.querySelector("#ham");

let mobileNav = document.querySelector("#mobileNav");
let hamClicked = false;
ham.addEventListener("click",()=>{

    if(!hamClicked){
        mobileNav.style.paddingTop = "10vh";
        mobileNav.style.height = "100vh";
        ham.classList.add("open");
        hamClicked = true;
    }
    else{
        mobileNav.style.paddingTop = "0px";
        mobileNav.style.height = "0px";
        ham.classList.remove("open");
        hamClicked = false;
    }
    


});