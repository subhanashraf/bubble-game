let time =60;
let score=0;
let hits
function makebubble() {
    let bubble =" ";
for(let a=1;a<99;a++){
    let number = Math.floor(Math.random()*10);
    bubble += ` <div id="bubble">${number}</div>`;
}
document.querySelector(".fobar").innerHTML= bubble;
}
function timer() {
    let set= setInterval(() => {
        if(time>0){
            time--;
            document.querySelector("#time").textContent=time;
    }
    else{
       clearInterval(set);
       document.querySelector(".fobar").innerHTML="GameOver"
    }
    }, 1000);


}
function hit() {
     hits =Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=`${hits}`;
    
}
function increases() {
    score = score+ 10 ;
    document.querySelector("#score").textContent=score;
    
}
document.querySelector(".fobar")
.addEventListener("click",function (par) {
   let id= Number(par.target.textContent)
   if (id==hits) {
    console.log("match");
    makebubble();
    hit();
    increases();
}
else{
    console.log("not");
}
})
makebubble();
hit();
timer();