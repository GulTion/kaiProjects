document.addEventListener("keydown",function(e){
    switch(e.key){
        case 'ArrowRight':
            nav(1)
            break;
        case 'ArrowLeft':
            nav(-1)
            break;
        case 'ArrowDown':
             nav(3)
             break;
        case 'ArrowUp':
            nav(-3)
            break;
    }
});
let names = ["DetDEL","Kundali","QuardicEQ"]
let items = document.querySelectorAll(".items");
for(let i=0;i<items.length;i++){
    items[i].tabIndex = i;
}
function nav(move){
    let currentIndex = document.activeElement.tabIndex;
    let next =  currentIndex+move;
    let currentItem = items[next];
    let heading = document.getElementById("heading_background");
    heading.innerHTML = names[next];
    if(next>=items.length){
        nav(-items.length+1);
        next  =0;
    }
    currentItem.focus();
    
}
nav(1);

   


items[0].addEventListener("keyup",k);
items[0].addEventListener("click",function(){
    window.open("../detDEL/index.html" ,"_self");
});
function k(e){
    switch(e.key){
        case 'Enter':
            window.open("../detDEL/index.html" ,"_self");
            break;
    }
}
items[1].addEventListener("keyup",k1);
items[1].addEventListener("click",function(){
    window.open("../kundali-final/index.html" ,"_self");
});
function k1(e){
    switch(e.key){
        case 'Enter':
            window.open("../kundali-final/index.html" ,"_self");
            break;
    }
}
items[2].addEventListener("keyup",k2);
items[2].addEventListener("click",function(){
    window.open("../QuardicEQv3.3/index.html" ,"_self");
});
function k2(e){
    switch(e.key){
        case 'Enter':
            window.open("../QuardicEQv3.3/index.html" ,"_self");
            break;
    }
}