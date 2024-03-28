var istatus =document.querySelector("h5");
var btn=document.querySelector("#add");
var check=0;
var main=document.querySelector('.main');
var crsr=document.querySelector('.cursor')

btn.addEventListener("click",function(){
    if(check==0){
    istatus.innerHTML="Freinds"
    istatus.style.color="green"
    btn.innerHTML="Remove Freind"
    check=1;
    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        btn.innerHTML="Add Freind"
        check=0;
    }
})
main.addEventListener("mousemove",function(dets){

    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})
