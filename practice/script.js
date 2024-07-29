// 1. mainPage : bar click 
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  })
}

if(close) {
  close.addEventListener("click", () => {
    nav.classList.remove('active');
  })
}

// 2. sproductPage : smallImg click changinf Mainimg
let mainImg = document.getElementById("MainImg");
let smallImgs = document.querySelectorAll(".small-img");

smallImgs.forEach(smallImg => {
  smallImg.addEventListener("click", () => {
    mainImg.src = smallImg.src;
  })
});