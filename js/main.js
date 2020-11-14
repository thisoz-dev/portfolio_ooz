'use strict';
const body = document.querySelector('body');
const header = document.querySelector('header');
const slogan = document.querySelector('.slogan');
const overview = document.querySelector('.overview');
const overviewTitle = document.querySelector('.overview-title');
const mOverviewTx = document.querySelector('.overview-tx-m');
const copyright = document.querySelector('.copyright');
const degree = document.querySelector('.degree');
const centerPenta = document.querySelector('div.center-line');
const main = document.querySelector('.main');
    
const contactNav = document.querySelector('li.contact');
const contactPage = document.querySelector('.ct-popup');
const conClose = document.querySelector('.ct-close');
    
let conCloseDiv = document.querySelectorAll('div.ct-close div');
let penta = document.querySelectorAll('.penta-hidden');
let limit = 0;
let isOverview = false;

penta = Array.prototype.slice.call(penta);
conCloseDiv = Array.prototype.slice.call(conCloseDiv);

/* 72deg count + penta visible */
let count1 = setInterval(function(){
    if(limit >= 20) {
        clearInterval(count1);
        penta[0].classList.add('penta-visible');
        penta[1].classList.add('penta-visible');
        penta[4].classList.add('penta-visible');
        centerPenta.style.opacity = '1';
        centerPenta.style.transition = 'opacity 1.5s ease-in';
    }
    degree.innerHTML = '&nbsp;&nbsp;&nbsp;' + limit + '˚';
    limit ++;
}, 80);

setTimeout(function(){
    let count2 = setInterval(function() {
        if(limit >= 40) {
            clearInterval(count2);
            penta[2].classList.add('penta-visible');
            penta[3].classList.add('penta-visible');
            penta[5].classList.add('penta-visible');
        }
        degree.innerHTML = '&nbsp;&nbsp;&nbsp;' + limit + '˚';
        limit ++;
    }, 60);
}, 1600);

setTimeout(function(){
    let count3 = setInterval(function() {
        if(limit >= 72) {
            clearInterval(count3);
            penta[6].classList.add('penta-visible');
            penta[7].classList.add('penta-visible');
            // centerPenta.style.transition = '.15s ease-in';
            // centerPenta.style.transition = '.15s ease-in';
            // centerPenta.style.transform = 'translate(-50%, -50%) rotate(-20deg)';
            // centerPenta.classList.add('center-penta-ani');
            for(let i = 0; i < penta.length; i++){
                penta[i].style.transition = '0.01s';
            }
            penta[4].classList.add('scale1');
            penta[4].classList.add('opacity1');
            penta[2].classList.add('opacity2');
            penta[7].classList.add('scale2');
            penta[5].classList.add('rotate');

            header.style.transition = 'opacity 1s';
            header.style.transitionDelay = '.5s';
            header.style.visibility = 'visible';
            header.style.opacity = 1;

            slogan.style.transition = 'opacity 1s';
            slogan.style.transitionDelay = '.5s';
            slogan.style.visibility = 'visible';
            slogan.style.opacity = 1;

            overview.style.transition = 'opacity 1s';
            overview.style.transitionDelay = '.5s';
            overview.style.visibility = 'visible';
            overview.style.opacity = 1;

            copyright.style.transition = 'opacity 1s';
            copyright.style.transitionDelay = '.5s';
            copyright.style.visibility = 'visible';
            copyright.style.opacity = 1;
        }
        degree.innerHTML = '&nbsp;&nbsp;&nbsp;' + limit + '˚';
        limit ++;
    }, 20);



}, 2800);

/* pentagon shape move */
function pentaMove(e){
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    for(let i = 0; i < penta.length; i++){
        penta[i].style.transition = '0.01s';
    }
    
    const target = document.getElementById('body');
    const clientRect = target.getBoundingClientRect();
    const rTop = clientRect.height;
    const rWidth = clientRect.width;
    
    penta[0].style.left = ((2 * mouseY) / 570) + 13 + 'vw';
    penta[0].style.top = ((3 * mouseX) / 670) + 65 + 'vh';
    
    penta[1].style.left = ((1 * mouseX) / 570) + 80 + 'vw';
    penta[1].style.top = ((5 * mouseY) / 670) + 20 + 'vh';
    
    penta[2].style.left = ((4 * mouseX) / 570) + 7 + 'vw';
    penta[2].style.top = ((3 * mouseY) / 670) + 40 + 'vh';
    
    penta[3].style.left = ((1.3 * mouseX) / 570) + 75 + 'vw';
    penta[3].style.top = ((2.3 * mouseY) / 670) + 80 + 'vh';
    
    penta[4].style.left = ((3 * mouseX) / 570) + 60 + 'vw';
    penta[4].style.top = ((2 * mouseY) / 670) + 60 + 'vh';
    
    penta[5].style.left = ((1 * mouseX) / 570) + 35 + 'vw';
    penta[5].style.top = ((2 * mouseY) / 670) + 70 + 'vh';
    
    penta[6].style.left = ((2.2 * mouseY) / 570) + 60 + 'vw';
    penta[6].style.top = ((3.5 * mouseX) / 670) + 20 + 'vh';
    
    penta[7].style.left = ((1 * mouseX) / 570) + 30 + 'vw';
    penta[7].style.top = ((2 * mouseY) / 670) + 20 + 'vh';

    
    /* Main Center Pentagon - Line rotate */
    let pentaW = centerPenta.getBoundingClientRect().width;
    let pentaH = centerPenta.getBoundingClientRect().height;
    // console.log(pentaW);
    // console.log(pentaH);

    let pentaPosX = centerPenta.getBoundingClientRect().x + (pentaW / 2);
    let pentaPosY = centerPenta.getBoundingClientRect().y + (pentaH / 2);

    // 마우스 좌표와 요소의 좌표를 뺀 값을 각 변수에 반환.
    let penX = mouseX - pentaPosX;
    let penY = mouseY - pentaPosY;

    // 탄젠트로 구한 값과 원의 라디안 값을 곱해 angle 값에 반환.
    let angle = Math.atan2(penX, -penY) * (180/Math.PI);
    // console.log(angle);

    centerPenta.style.transform = 'translate(-50%, -50%) rotateZ('+ angle + 'deg)';

}
main.addEventListener('mousemove', pentaMove);



/* Contact Pop-up */
/* Open */
contactNav.addEventListener('click', () => {
    contactPage.style.top = '2vw';
    contactPage.style.bottom = '2vw';
    contactPage.style.display = 'flex';
    contactPage.style.transition = '.5s cubic-bezier(.68,-0.04,.46,1.11)';
    contactPage.style.transitionDelay = 'transition 0';
    contactPage.style.visibility = 'visible';
    for(let i = 0; i < conCloseDiv.length; i++){
        conCloseDiv[0].style.transform = 'translate(-50%,-50%) rotate(45deg)';
        conCloseDiv[1].style.transform = 'translate(-50%,-50%) rotate(-45deg)';
        conCloseDiv[i].style.transition = '.3s';
        conCloseDiv[i].style.transitionDelay = '.5s';
    }
});

/* Close */
conClose.addEventListener('click', conCloseClick);

function conCloseClick(){
    contactPage.style.top = '50vh';
    contactPage.style.bottom = '50vh';
    contactPage.style.transition = '.5s cubic-bezier(.68,-0.04,.46,1.11)';
    setTimeout(() => {
        contactPage.style.visibility = 'hidden';
    }, 800);
    for(let i = 0; i < conCloseDiv.length; i++){
        conCloseDiv[i].style.transform = 'translate(-50%,-50%) rotate(0deg)';
        conCloseDiv[i].style.transition = '.3s';
    }
}


/* mobile */
console.log(body.clientWidth);
if(body.clientWidth < 481){
    overviewTitle.addEventListener('click', ()=>{
        if(isOverview === false){
            mOverviewTx.style.display = 'block';
            isOverview = true;
        }
        else{
            mOverviewTx.style.display = 'none';
            isOverview = false;
        }
    })
}