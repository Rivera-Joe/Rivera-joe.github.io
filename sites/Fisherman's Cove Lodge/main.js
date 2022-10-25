window.onload = function(){
    let carousel = document.querySelector("#cabinImage");

    let leftButton = document.querySelector("#left");

    let rightButton = document.querySelector("#right");

    let imageSources = ["https://fishermanscovelodge.com/index_htm_files/11965.webp", "https://fishermanscovelodge.com/index_htm_files/12219.webp", "https://fishermanscovelodge.com/index_htm_files/12224.webp"];
    carousel.src = imageSources[0];
    let location = imageSources.indexOf(carousel.src);


    rightButton.onclick = function(){
        
        location++;
        if(location > imageSources.length - 1){
            location = 0;
        }
        carousel.src = imageSources[location];
        
    }

    leftButton.onclick = function(){
        carousel.src = imageSources[0];
    }

}