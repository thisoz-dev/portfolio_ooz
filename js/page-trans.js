const mainBtn = document.querySelector('header > h1');
const aboutBtn = document.querySelector('li.about');
const worksBtn = document.querySelector('li.works');
const allNavBtn = document.querySelectorAll('header > nav.pc > ul > li');
const mainSection = document.querySelector('section.main');
const aboutSection = document.querySelector('section.about');
// const aboutSection = document.querySelector('div.right-area');
const worksSection = document.querySelector('section.work');
const divisionArea = document.querySelector('div.division-area');
const pentaVisible = document.querySelectorAll('div.penta-visible');
const pentaS5svg = document.querySelector('div.s5 > svg');

divisionArea.style.width = '50vw';
mainSection.style.visibility = 'visible';
aboutSection.style.visibility = 'hidden';
worksSection.style.visibility = 'hidden';
aboutSection.style.opacity = 0;
aboutSection.style.transition = '.3s ease';

function aboutClick(){
    isWorksOpen = false;
    mainSection.style.visibility = 'hidden';
    mainSection.style.opacity = 0;

    aboutSection.style.visibility = 'visible';
    aboutSection.style.opacity = 1;

    worksSection.style.visibility = 'hidden';
    worksSection.style.opacity = 0;
    
    divisionArea.style.width = '65vw';
    divisionArea.style.backgroundColor = '#eee';
    divisionArea.style.transition = '.5s';

    mainVisible();
    workView.style.display = 'none';
    workLiWrap.style.transition = '0';
    backTo();

    for(let i = 0; i < allNavBtn.length; i++){
        allNavBtn[i].style.color = '#000';
    }
    
    for(let i = 0; i < penta.length; i++){
        penta[i].style.transition = '.4s ease-in-out';
    }
    penta[0].style.left = 20 + 'vw';
    penta[0].style.top = 85 + 'vh';
    penta[0].style.opacity = '.5';
    penta[0].style.transform = 'rotate(-30deg) scale(1.5)';
    
    penta[1].style.left = 75 + 'vw';
    penta[1].style.top =  8 + 'vh';
    penta[1].style.opacity = '.5';
    penta[1].style.transform = 'rotate(130deg) scale(1.3)';
    
    penta[2].style.left = 15 + 'vw';
    penta[2].style.top = 55 + 'vh';
    penta[2].style.transform = 'rotate(40deg) scale(2)';
    
    penta[3].style.opacity = '.3';
    penta[3].style.transform = 'rotate(100deg) scale(2)';
    
    penta[4].style.left = 95 + 'vw';
    penta[4].style.top = 60 + 'vh';
    penta[4].style.transform = 'rotate(100deg) scale(5)';
    
    penta[5].style.left = 40 + 'vw';
    penta[5].style.top = 68 + 'vh';
    
    penta[6].style.left = 50 + 'vw';
    penta[6].style.top = 20 + 'vh';
    penta[6].style.opacity = '.8';
    penta[6].style.transform = 'rotate(100deg) scale(4)';
    
    penta[7].style.left = 15 + 'vw';
    penta[7].style.top = 15 + 'vh';
}
function worksClick(){
    isWorksOpen = true;
    mainSection.style.visibility = 'hidden';
    mainSection.style.opacity = 0;

    aboutSection.style.visibility = 'hidden';
    aboutSection.style.opacity = 0;

    worksSection.style.visibility = 'visible';
    worksSection.style.opacity = 1;

    divisionArea.style.width = '0vw';
    divisionArea.style.backgroundColor = '#1e1e1e';
    divisionArea.style.transition = '1s';

    workView.style.display = 'flex';
    
    mainVisible();
    // backTo();
    for(let i = 0; i < allNavBtn.length; i++){
        allNavBtn[i].style.color = '#fff';
    }

    for(let i = 0; i < penta.length; i++){
        penta[i].style.transition = '.4s ease-in-out';
    }
    penta[0].style.left = 7 + 'vw';
    penta[0].style.top = 90 + 'vh';
    penta[0].style.opacity = 1;
    penta[0].style.transform = 'rotate(30deg) scale(2)';
    
    penta[1].style.left = 95 + 'vw';
    penta[1].style.top =  5 + 'vh';
    penta[1].style.opacity = '.5';
    penta[1].style.transform = 'rotate(200deg) scale(1.8)';
    
    penta[2].style.left = 5 + 'vw';
    penta[2].style.top = 40 + 'vh';
    penta[2].style.transform = 'rotate(40deg) scale(4)';
    
    penta[3].style.opacity = '.5';
    penta[3].style.transform = 'rotate(210deg) scale(3)';
    
    penta[4].style.left = 95 + 'vw';
    penta[4].style.top = 60 + 'vh';
    penta[4].style.transform = 'rotate(60deg) scale(1)';
    
    penta[5].style.left = 32 + 'vw';
    penta[5].style.top = 70 + 'vh';
    
    penta[6].style.left = 60 + 'vw';
    penta[6].style.top = 15 + 'vh';
    penta[6].style.opacity = '.8';
    penta[6].style.transform = 'scale(1)';
    
    penta[7].style.left = 25 + 'vw';
    penta[7].style.top = 15 + 'vh';

    idxCount = 0;

    /* Responsive 반응형 */
    // works 네비를 클릭했을 때 body의 width 가 1024보다 작거나 같으면
    // 슬라이드 영역을 무조건 visiible 상태로 둔다. 
    // (모바일에서는 리스트를 선택하는 중간 단계가 없기 때문에.)
    // 브라우저가 리사이즈될 때도 반응형이 적용되도록 work.js에 작성.
    for(let i = 0; i < mDiscEls.length; i++){
        mDiscEls[i].style.display = 'none';
        mWorksList[i].style.color = '#666';
    }
    if(body.clientWidth <= 1024){
        slideArea.style.opacity = '1';
        slideArea.style.visibility = 'visible';
        thumb.style.visibility = 'visible';
        // discript.style.display = 'block';
        maskEls[idxCount].style.zIndex = 2;
        mDiscEls[idxCount].style.display = 'block';
        mWorksList[idxCount].style.color = '#fff';
    }
    
}
function mainClick(){
    isWorksOpen = false;
    mainSection.style.visibility = 'visible';
    mainSection.style.opacity = 1;

    aboutSection.style.visibility = 'hidden';
    aboutSection.style.opacity = 0;
    
    worksSection.style.visibility = 'hidden';
    worksSection.style.opacity = 0;

    divisionArea.style.width = '50vw';
    divisionArea.style.backgroundColor = '#1e1e1e';
    divisionArea.style.transition = '1s';
    
    workView.style.display = 'none';


    mainVisible();
    backTo();
    for(let i = 0; i < allNavBtn.length; i++){
        allNavBtn[i].style.color = '#fff';
    }

    penta[0].style.left = 13 + 'vw';
    penta[0].style.top = 65 + 'vh';
    penta[0].style.opacity = 1;
    penta[0].style.transform = 'rotate(-10deg) scale(1)';

    penta[1].style.left = 80 + 'vw';
    penta[1].style.top = 20 + 'vh';
    penta[1].style.opacity = 1;
    penta[1].style.transform = 'rotate(30deg) scale(1)';

    penta[2].style.left = 10 + 'vw';
    penta[2].style.top = 40 + 'vh';
    penta[2].style.transform = 'rotate(0) scale(1)';
    
    penta[3].style.opacity = 1;
    penta[3].style.transform = 'rotate(80deg) scale(1)';
    
    penta[4].style.left = 60 + 'vw';
    penta[4].style.top = 60 + 'vh';
    penta[4].style.transform = 'rotate(60deg) scale(1)';

    
    penta[5].style.left = 35 + 'vw';
    penta[5].style.top = 70 + 'vh';
    
    penta[6].style.left = 60 + 'vw';
    penta[6].style.top = 20 + 'vh';
    penta[6].style.opacity = '1';
    penta[6].style.transform = 'scale(1)';
    
    penta[7].style.left = 30 + 'vw';
    penta[7].style.top = 20 + 'vh';

    main.addEventListener('mousemove', pentaMove);
}

aboutBtn.addEventListener('click', aboutClick);
worksBtn.addEventListener('click', worksClick);
mainBtn.addEventListener('click', mainClick);
    

function mainVisible() {
    slogan.style.visibility = 'inherit';
    overview.style.visibility = 'inherit';
    // copyright.sytyle.visibility = 'inherit';

    for(let i = 0; i< penta.length; i++){
        penta[i].style.transition = 0;
    }
}