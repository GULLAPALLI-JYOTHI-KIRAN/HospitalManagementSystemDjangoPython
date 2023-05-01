const scrollvalues=[431,845,1269,1683,2110];
const scrollingDiv=document.querySelector(".testimonial-section");
const scrollBack=document.getElementById("scroll-back");
const scrollForward=document.getElementById("scroll-front");
let index=0
scrollForward.addEventListener("click",function(){

    while(index<scrollvalues.length){
        scrollingDiv.scrollTo({
            top:0,
            left:`${scrollvalues[index]}`,
            behavior:"smooth"
        })
        index++;
        break;
    }
})
scrollBack.addEventListener("click",function(){
    if(index>0){
        index=index-1
        scrollingDiv.scrollTo({
            top:0,
            left:`${scrollvalues[index-1]}`,
            behavior:"smooth"
        })
    }
    while(index<=0  || index==-1){
        scrollingDiv.scrollTo({
            top:0,
            left:14,
            behavior:"smooth"
        });
        break;
    }
})
window.addEventListener("load",function(){
    scrollingDiv.scrollTo({
        top:0,
        left:14,
        behavior:"smooth"
    });
    
})