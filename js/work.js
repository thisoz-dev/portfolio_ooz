'use strict';
console.log('work js load');

let workLis = document.querySelectorAll('ul.work-list li');
let maskEls = document.querySelectorAll('.slide-mask');
let discEls = document.querySelectorAll('div.discEls');
let mDiscEls = document.querySelectorAll('div.m-discEls');
let mWorksList = document.querySelectorAll('.mobile-list > ul > li');
let isMain = true;
let isWorksOpen = false;


const workLiWrap = document.querySelector('ul.work-list');
const workView = document.querySelector('div.work-view');
const thumb = document.querySelector('.thumb');
const slideArea = document.querySelector('.img-slide');
const slideAreaImg = document.querySelector('.img-slide img');
const discript = document.querySelector('div.discript');
const goSite = document.querySelector('div.go-site');
const goSiteA = document.querySelector('div.go-site a');
const back = document.querySelector('span.back');
const slideIndex = document.querySelector('div.index');
const controller = document.querySelector('.work-control');
const index = document.querySelector('div.index ul');
const listOrigin = document.querySelectorAll('div.list-origin');
const worksLink = [
    'https://t0702.github.io/Promo_cannondale/',
    'https://t0702.github.io/CS_project/',
    'https://t0702.github.io/MediPlus_project/',
    'https://t0702.github.io/Remain_Re-main/main.html',
    'https://t0702.github.io/SpiderMan_web/',
    'https://t0702.github.io/PUBG_renewal/'
];

let count = 0;
// const selectBox = document.querySelector('.select-box');
// const selectBoxTop = selectBox.getBoundingClientRect().top;
// const selectUp = document.querySelector('div.up');
// const selectDown = document.querySelector('div.down');

workLis = Array.prototype.slice.call(workLis);
mWorksList = Array.prototype.slice.call(mWorksList);
maskEls = Array.prototype.slice.call(maskEls);
discEls = Array.prototype.slice.call(discEls);

console.log(workLis);

let idxCount = 0;
let beforeIdx = 0;

/* Work list click */
for(let i = 0; i < workLis.length; i++) {
    workLis[i].addEventListener('click', (e) => {
        isMain = false;
        let el = e.currentTarget, target = workLis.indexOf(el);
        idxCount = target;
        console.log('beforeIdx', beforeIdx);
        for(let j = 0; j < workLis.length; j++){
            maskEls[j].classList.remove('toPenta');
            maskEls[j].style.zIndex = 0;
            discEls[j].style.opacity = 0;
            // discEls[j].style.display = 'none';
            discEls[j].style.visibility = 'hidden';
            discEls[j].style.transition = '.4s';
            listOrigin[j].style.color = '#fff';
        }
        maskEls[beforeIdx].style.zIndex = 1;
        discEls[idxCount].style.opacity = 1;
        discEls[idxCount].style.visibility = 'visible';
        // discEls[idxCount].style.display = 'block';
        discEls[idxCount].style.transition = '.4s';

        maskEls[idxCount].classList.add('toPenta');
        maskEls[idxCount].style.zIndex = 2;
        
        listOrigin[idxCount].style.color = '#2888f4';

        goSiteA.setAttribute('href', worksLink[idxCount]);
        
        index.style.top = 170 * -idxCount + 'px';
        index.style.transition = '1s';

        beforeIdx = idxCount;

        workLiWrap.style.left = '8%';
        // workLiWrap.style.left = discript.getBoundingClientRect().x;
        workLiWrap.style.top = '30%';
        workLiWrap.style.transform = 'translate(0, 0)';
        workLiWrap.style.transition = '1s';
        workLiWrap.style.alignItems = 'flex-start';
        for(var i = 0; i < workLis.length; i++) {
            workLis[i].style.fontSize = '30px';
        }

        discript.style.transition = '1s';
        discript.style.transitionDelay = '1s';
        discript.style.opacity = '1';
        discript.style.visibility = 'visible';

        slideArea.style.transition = '1s';
        slideArea.style.opacity = '1';
        slideArea.style.visibility = 'visible';

        thumb.style.left = '45%';
        thumb.style.transition = '.5s';
        thumb.style.transitionDelay = '.3s';
        thumb.style.visibility = 'visible';

        goSite.style.width = '130px';
        goSite.style.height = '130px';
        goSite.style.transition = '.3s';
        goSite.style.transitionDelay = '1s';
        goSite.style.visibility = 'visible';

        goSiteA.style.opacity = 1;
        goSiteA.style.transition = '.5s';
        goSiteA.style.transitionDelay = '1s';
        goSiteA.style.visibility = 'visible';
        
        back.style.opacity = 1; 
        back.style.transition = '1s';
        back.style.transitionDelay = '1s';
        back.style.visibility = 'visible';

        slideIndex.style.opacity = 1;
        slideIndex.style.transition = '1s';
        slideIndex.style.transitionDelay = '1s';
        slideIndex.style.visibility = 'visible';


    });
}


for(let i = 0; i < mWorksList.length; i++){
    mWorksList[i].addEventListener('click', (e)=>{
        console.log('click');
        let el = e.currentTarget, target = mWorksList.indexOf(el);
        idxCount = target;
        console.log(idxCount);
        for(let j = 0; j < mWorksList.length; j++){
            maskEls[j].style.zIndex = 0;
            discEls[j].style.opacity = 0;
            discEls[j].style.display = 'none';
            discEls[j].style.visibility = 'hidden';
            discEls[j].style.transition = '.4s';
            mDiscEls[j].style.display = 'none';
            mWorksList[j].style.color = '#666';
    }

        discEls[idxCount].style.opacity = 1;
        discEls[idxCount].style.display = 'none';
        discEls[idxCount].style.visibility = 'visible';
        discEls[idxCount].style.transition = '0';

        maskEls[idxCount].style.zIndex = 2;

        mDiscEls[idxCount].style.display = 'block';
        mWorksList[idxCount].style.color = '#fff';


    })
}


function backTo() {
    console.log('back');
    isMain = true;
    workLiWrap.style.left = '50%';
    workLiWrap.style.top = '50%';
    workLiWrap.style.transform = 'translate(-50%, -50%)';
    
    workLiWrap.style.transition = '1s';
    workLiWrap.style.alignItems = 'center';
    for(var i = 0; i < workLis.length; i++) {
        workLis[i].style.fontSize = '70px';
        listOrigin[i].style.color = '#fff';
    }

    discript.style.transition = '.4s';
    discript.style.opacity = '0';
    discript.style.visibility = 'hidden';

    // slideArea.style.transition = '1s';
    // slideArea.style.opacity = '0';
    // slideArea.style.visibility = 'hidden';

    thumb.style.left = '170%';
    thumb.style.transition = '.5s';
    thumb.style.transitionDelay = '0';
    thumb.style.visibility = 'hidden';

    goSite.style.width = 0;
    goSite.style.height = 0;
    goSite.style.transition = '.3s';
    goSite.style.transitionDelay = '0';
    goSite.style.visibility = 'hidden';

    goSiteA.style.opacity = 0;
    goSiteA.style.transition = '.3s';
    goSiteA.style.transitionDelay = 0;
    goSiteA.style.visibility = 'hidden';
    
    back.style.opacity = 0; 
    back.style.transition = '1s';
    back.style.transitionDelay = '1s';
    back.style.visibility = 'hidden';

    slideIndex.style.opacity = 0;
    slideIndex.style.transition = '1s';
    slideIndex.style.transitionDelay = '1s';
    slideIndex.style.visibility = 'hidden';
}


/* work list close */
back.addEventListener('click', backTo);
// slideArea.addEventListener('mousedown', Mousedown);

// /* Works Controller */
// function Mousedown(e) {
//     if(body.clientWidth > 1024){
//         slideArea.addEventListener('mouseup', Mouseup);
//         slideArea.addEventListener('mouseleave', noControlelr);
//         slideArea.addEventListener('mousemove', Mousemove);
    
//         let mouseX = e.clientX, mouseY = e.clientY;
//         controller.style.display = 'block';
//         controller.style.top = mouseY + 'px';
//         controller.style.left = mouseX + 'px';
//         slideArea.addEventListener('mousewheel', wheel);
//     }
// }
// function Mousemove(e) {
//     let mouseX = e.clientX, mouseY = e.clientY;
//     controller.style.display = 'block';
//     controller.style.top = mouseY + 'px';
//     controller.style.left = mouseX + 'px';
// }

// function noControlelr(){
//     controller.style.display = 'none';
// }

// function Mouseup() {
//     controller.style.display = 'none';
//     slideArea.removeEventListener('mouseup', Mouseup);
//     slideArea.removeEventListener('mousemove', Mousemove);
//     slideArea.removeEventListener('mousewheel', wheel);
// }


// function wheel(e){
//     console.log(e.wheelDelta);
//     if(e.wheelDelta >= 120){
//         console.log('up');
//         selectDown.style.color = '#2888f4';
//         selectUp.style.color = '#000';
//         if(count < 3){
//             count++;
//             // count = 4;
//         }
//         selectBox.style.top = selectBoxTop - (45 * count) + 'px';
//         selectBox.style.transition = 'top .3s ease';
//     } else {
//         console.log('down');
//         selectUp.style.color = '#2888f4';
//         selectDown.style.color = '#000';
//         if(count > 0 ){
//             count--;
//             // count * -1;
//         }
//         selectBox.style.top = selectBoxTop - (45 * count) + 'px';
//     }

//     for(let j = 0; j < workLis.length; j++){
//         maskEls[j].classList.remove('toPenta');
//         maskEls[j].style.zIndex = 0;
//         discEls[j].style.opacity = 0;
//         discEls[j].style.visibility = 'hidden';
//         discEls[j].style.transition = '.4s';
//         listOrigin[j].style.color = '#fff';
//     }
//     discEls[count].style.opacity = 1;
//     discEls[count].style.visibility = 'visible';
//     discEls[count].style.transition = '.4s';

//     maskEls[count].classList.add('toPenta');
//     maskEls[count].style.zIndex = 2;

//     listOrigin[count].style.color = '#2888f4';
//     index.style.top = 170 * -count + 'px';
// }


/* Responsive 반응형 */

// 브라우저 영역이 리사이즈 될 때도 반응형이 적용되도록
window.addEventListener('resize', () => {
    if(isWorksOpen == true){
        // console.log(idxCount);
        console.log(isWorksOpen);
        // body의 width가 1024보다 커진다면
        // 1. 슬라이드 영역이 hidden일 때 discript도 함께 hidden
        // 2. 슬라이드 영역이 visible 일 때 discript도 함께 visible
        if(body.clientWidth > 1024){
            for(let i = 0; i < discEls.length; i++){
                discEls[i].style.display = 'block';
                listOrigin[i].style.color = '#fff';
            }
            if(slideArea.style.visibility === 'hidden' && isMain == true){
                discript.style.opacity = 0;
                discript.style.visibility = 'hidden';
                for(let i = 0; i < discEls.length; i++){
                    discEls[i].style.visibility = 'hidden';
                    discEls[i].style.opacity = 0;
                }   
            } else if(slideArea.style.visibility === 'visible' && isMain == false){
                discript.style.opacity = 1;
                discript.style.visibility = 'visible';
                discEls[idxCount].style.opacity = '1';
                discEls[idxCount].style.visibility = 'visible';
                listOrigin[idxCount].style.color = '#2888f4';
            }
            console.log(idxCount);
        } 
        // body의 width가 1024보다 작아진다면
        // 슬라이드 영역을 무조건 visible로 변경한다.
        // 반응형에는 리스트를 선택하는 중간 단계가 없으므로
        // 무조건 visible 상태로 전환한다.
        if(body.clientWidth <= 1024){

            slideArea.style.opacity = '1';
            slideArea.style.visibility = 'visible';
            discript.style.opacity = 0;
            discript.style.visibility = 'hidden';
            
            for(let j = 0; j < mWorksList.length; j++){
                maskEls[j].style.zIndex = 0;
                discEls[j].style.opacity = 0;
                // discEls[j].style.display = 'none';
                discEls[j].style.transition = '.4s';
                mDiscEls[j].style.display = 'none';
                mDiscEls[j].style.visibl = 'visible';
            }
            
            console.log(idxCount);
            maskEls[idxCount].style.zIndex = 2;
            mDiscEls[idxCount].style.display = 'block';
        }
    }
});
