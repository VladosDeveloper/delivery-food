const cartBtn = document.querySelector("#shop-btn");
const modal = document.querySelector("#modal");
const close = document.querySelector(".close");


cartBtn.addEventListener('click', showHide);

close.addEventListener('click', showHide);

function showHide() {
    if (modal.style.visibility ===  'visible')
    {
        modal.style.visibility =  'hidden'
    }
    else {
        modal.style.visibility =  'visible'
    }
}

new WOW().init();