'use strict';

const logo = document.querySelector('header');
const leftArea = document.querySelector('div.left-area');
const AboutDivisionArea = document.querySelector('.division-area');
const resumeBtn = document.querySelector('button.resume');
let logoLeft;
let logoWidth;
let LeftAreaRight;
console.clear();

let isAboutOpen = false;


if(body.clientWidth >= 1024){
    window.addEventListener('load', ()=>{
        logoLeft = logo.getBoundingClientRect().x;
        leftArea.style.marginLeft = logoLeft + 'px';
        resumeBtn.style.marginLeft = logoLeft + 'px';
        logoWidth = logo.getBoundingClientRect().width;
        leftArea.style.width = logoWidth * (35 / 100) + "px";
        // LeftAreaRight = leftArea.getBoundingClientRect().right;
        // AboutDivisionArea.style.width = window.innerWidth - (LeftAreaRight + 30) + 'px';
    })
}
    window.addEventListener('resize', () => {
        console.log(isAboutOpen);
        if(isAboutOpen === true && body.clientWidth >= 1024 ){
            logoLeft = logo.getBoundingClientRect().x;
            leftArea.style.marginLeft = logoLeft + 'px';
            resumeBtn.style.left = logoLeft + 30 + 'px';
            logoWidth = logo.getBoundingClientRect().width;
            leftArea.style.width = logoWidth * (35 / 100) + "px";
            headerLogo.style.color = '#fff';
        
        
            LeftAreaRight = leftArea.getBoundingClientRect().right;
            AboutDivisionArea.style.width = window.innerWidth - (LeftAreaRight + 30) + 'px';
            
        }
        if (isAboutOpen === true && body.clientWidth < 1024 ){
            leftArea.style.width = "100%";
            AboutDivisionArea.style.width = '100vw';
            headerLogo.style.color = '#000';
            resumeBtn.style.left = '4%';
        }
    });
    


// const rightArea = document.querySelector('.right-area-full'),
//     about = document.querySelector('section.about'),
//     // skillEl = document.querySelector('h2.skill-title'),
//     scrolldown = document.querySelector('div.scroll'),
//     // skillSpan = skillEl.querySelector('span'),
//     skillLine = document.querySelector('.skill-line');

// about.addEventListener('mousewheel', (e) => 
// {   
//     // let scrollT = rightArea.scrollTop;
//     // console.log(e.wheelDelta);
//     // if(e.wheelDelta < 0){
//     //     console.log(scrollT);
//     //     rightArea.scrollTo -= 100;
        
//     // }
//     // rightArea.scrollTop = scrollT;
//     // console.log(scrollT);
//     // if(scrollT < 350){
//     //     skillEl.style.opacity = 0;
//     //     skillEl.style.transition = '.5s';
//     // }
//     // if(scrollT >= 350){
//     //     skillEl.style.opacity = 1;
//     //     skillEl.style.transition = '.5s';
//     //     skillEl.style.color = '#000';
//     //     skillSpan.style.color = '#2888f4';
//     // }
//     // if(scrollT < 500){
//     //     skillLine.style.width = 0;
//     //     skillLine.style.transition = '1s';
//     // }
//     // if(scrollT >= 500){
//     //     skillLine.style.width = '50vw';
//     //     skillLine.style.transition = '1s';
//     // }
// });
