// ================= Slide card movie business soon ===================== //
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const business = document.querySelector('.business-container');
const itemNumber = business.querySelectorAll('img').length;
const ratio = Math.floor(window.innerWidth / 200);
let clickRightCounter = 0;
arrowRight.addEventListener("click",() => {
    clickRightCounter++;
    var a = itemNumber - (9 + clickRightCounter) + (9 - ratio) + clickLeftCounter; 
    console.log("Right = ",clickRightCounter);
    console.log("item = ",itemNumber);
    console.log('a = ',a);
    console.log('L = ',clickLeftCounter);
    if(a >= 0){  
        arrowLeft.classList.add('active'); 
        business.style.transform = `translateX(${business.computedStyleMap().get('transform')[0].x.value-280}px)`;
    }
    else{
        arrowLeft.classList.remove('active'); 
        business.style.transform = 'translateX(0)';
        clickRightCounter = 0;
        clickLeftCounter = 0;
    }
});
let clickLeftCounter = 0;
arrowLeft.addEventListener("click",() => {
    clickLeftCounter++;
    var b = itemNumber - (9 + clickLeftCounter) + (9 - ratio) + clickRightCounter; 
    console.log("Left = ",clickLeftCounter);
    console.log("item = ",itemNumber);
    console.log("b = ",b);
    console.log('R = ', clickRightCounter);
    if(b >= 0){  
        arrowLeft.classList.add('active'); 
        business.style.transform = `translateX(${business.computedStyleMap().get('transform')[0].x.value+280}px)`;
        if(business.style.transform === 'translateX(0px)'){
            arrowLeft.classList.remove('active');
        }
    }
});

// ============= MENU BAR ============= //
const menuBar = document.querySelector(".menu-icon");
const subMenuWrap = document.querySelector(".sub-menu-wrap");
const closeBtn = document.querySelector(".close");

closeMenu = () =>{
    subMenuWrap.classList.remove("open");
}


menuBar.addEventListener("click", () =>{
    if(!subMenuWrap.classList.contains("open")){
        subMenuWrap.classList.add("open");
    }
    else{
        closeMenu();
    }
});

closeBtn.addEventListener("click", () =>{
    closeMenu();
});

// ============ MENU SUB ============ //
// const downs = document.querySelectorAll("[data-btn]");
const menuWrap = document.querySelector(".menu-wrap");
const menuDown = document.querySelector(".drop-down");
const menuDrop = document.querySelector(".sub-menu-drop");


menuBar.addEventListener("click", () =>{
    if(!menuWrap.classList.contains("open")){
        menuWrap.classList.add("open");
    }
    else{
        menuWrap.classList.remove("open");
    }
})
menuDown.addEventListener("click", () =>{
    if(!menuDrop.classList.contains("active-sub")){
        menuDrop.classList.add("active-sub");
    }
    else{
        menuDrop.classList.remove("active-sub");
    }
})