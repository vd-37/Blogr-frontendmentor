var btn = document.getElementById("ham-btn");
var image = document.getElementById("mobile-ham")
var menu = document.getElementById("mobile-menu")
menu.style.left = "-100%"
btn.onclick = function(){
    if(menu.style.left == "-100%"){
        menu.style.left = "5%";
        menu.style.right = "5%";
        image.src = "images/icon-close.svg";
    }
    else{
        menu.style.left = "-100%";
        image.src = "images/icon-hamburger.svg" 
    }
}



// var btn = document.getElementById("mobilemenu");
// var mobilenav = document.getElementById("mobilenav");

// mobilenav.style.left = "-100%";

// btn.onclick = function(){
//     if(mobilenav.style.left == "-100%"){
//         mobilenav.style.left = "50%";
//         btn.src = "images/icon-close.svg";
//     }

//     else{
//         mobilenav.style.left = "-100%";
//         btn.src = "images/icon-hamburger.svg";
//     }
// }