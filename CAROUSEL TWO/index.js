var count = 0;

display_image(count)
function display_image(x){
    count += x;

    const images = document.getElementsByClassName("imgCont")

    const dots = document.getElementsByClassName("dot")


    for (let i = 0; i < images.length; i++){
        images[i].style.display = 'none'
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","")
    }
    if (count > images.length) {
        count = 0  
    }
    if (count < 0 ) {
        count = 7
    }
    images[count].style.display = "block";
    dots[count].className += " active";
} 