let nav =document.getElementById("nav");


window.onscroll=function(){
    if(window.pageYOffset > 300){
        nav.style.backgroundColor = "black"
    }
    else{
        nav.style.backgroundColor = "transparent"
    }
}