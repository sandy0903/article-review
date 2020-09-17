var icon= document.getElementById("show-icon");
icon.addEventListener("click", showIcon);
var menu= document.querySelector(".hidden");
let count=0;
window.addEventListener("load", function(){
    menu.classList.remove("show");
});
function showIcon(){
    count+=1;
    menu.classList.add("show");
    
    if(count%2==0){
        menu.classList.remove("show");

    }
    
}
