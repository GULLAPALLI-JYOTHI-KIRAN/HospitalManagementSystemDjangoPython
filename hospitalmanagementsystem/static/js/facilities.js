const arrscrolling=[424,842,1256,1670,2084,2498,2912,3326];
const bigScreenArray=[600,1200,1800,2400,3100,3500,4200,4800]
const facilitiesDiv=document.querySelector(".facilities-section");
const rear=document.getElementById("rear");
const front=document.getElementById("front");
window.addEventListener("load",function(){
    facilitiesDiv.scrollTo({
        top:0,
        left:14,
        behavior:"smooth"
    });
    
})
if(window.innerWidth>=712){
    let ince=0;
front.addEventListener("click",function(){
    while(ince<bigScreenArray.length){
        facilitiesDiv.scrollTo({
            top:0,
            left:`${bigScreenArray[ince]}`,
            behavior:"smooth"
        })
        ince++;
        break;
    }
})
rear.addEventListener("click",function(){
    if(ince>0){
        ince=ince-1
        facilitiesDiv.scrollTo({
            top:0,
            left:`${bigScreenArray[ince-1]}`,
            behavior:"smooth"
        })
    }
    while(ince<=0  || ince==-1){
        facilitiesDiv.scrollTo({
            top:0,
            left:14,
            behavior:"smooth"
        });
        break;
    }
});
}
else{
    let ince=0;
front.addEventListener("click",function(){
    while(ince<arrscrolling.length){
        facilitiesDiv.scrollTo({
            top:0,
            left:`${arrscrolling[ince]}`,
            behavior:"smooth"
        })
        ince++;
        break;
    }
})
rear.addEventListener("click",function(){
    if(ince>0){
        ince=ince-1
        facilitiesDiv.scrollTo({
            top:0,
            left:`${arrscrolling[ince-1]}`,
            behavior:"smooth"
        })
    }
    while(ince<=0  || ince==-1){
        facilitiesDiv.scrollTo({
            top:0,
            left:14,
            behavior:"smooth"
        });
        break;
    }
})
}