let menubar=document.getElementById('menu-bttn');
let closebbtn=document.querySelector(".asidebar-close-section");
let sibebar=document.querySelector(".asidebar-container");
let navbar=document.querySelector('.nav-bar-container')
menubar.addEventListener("click",function(){
    sibebar.style.left="0%";
    sibebar.style.transition="left 2s linear";
    sibebar.style.position="sticky"
    navbar.style.display='none'
});
closebbtn.addEventListener('click',function(){
    sibebar.removeAttribute("style");
    sibebar.style.transition="left 1s linear";
    navbar.removeAttribute("style")
});