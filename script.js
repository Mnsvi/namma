let menus = document.querySelector(".menu-p");
let overlay = document.querySelector(".overlay");
let flag=1
menus.addEventListener("click",()=>{
    if(flag){
        overlay.style.top = "0%"
        overlay.style.transform = "rotate(5deg)"
        menus.textContent = "CLOSE" 
        flag = 0
    }else{
        overlay.style.top = "-180%"
        overlay.style.transform = "rotate(0deg)"
        menus.textContent = "MENU"
        flag = 1
    }
    
})