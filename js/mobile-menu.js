const about = document.querySelector('section.about');
const hamburger = document.querySelector('div.hamburger');
const hamburgerEls = document.querySelectorAll('div.hamburger > div');
const mobileNav = document.querySelector('nav.mobile');
const mAboutNav = document.querySelector('li.m-about');
const mWorksNav = document.querySelector('li.m-works');
const mHomeNav = document.querySelector('li.m-home');

let ishamburger = false;


hamburger.addEventListener('click', hamToggle);
function hamToggle(){
    if(ishamburger === false){
        mobileNav.style.height = '100vh';
        mobileNav.style.top = '0';
        ishamburger = true;
        hamOpen();
        if(isAboutOpen === true){
            headerLogo.style.color = '#fff';
        }
    }
    else if(ishamburger === true){
        mobileNav.style.height = '0';
        mobileNav.style.top = '-100%';
        ishamburger = false;
        hamClose();
        if(isAboutOpen === true){
            headerLogo.style.color = '#000';
        }
    }
}
mainBtn.addEventListener('click', () => {
    mainClick();
    hamClose();
    clickNav();

});

mAboutNav.addEventListener('click', () => {
    aboutClick();
    hamClose();
    ishamburger = false;
    mobileNav.style.top = '-100%';
    mobileNav.style.height = '0';
    for(let i = 0; i < hamburgerEls.length; i++){
        hamburgerEls[i].style.backgroundColor = '#000';
    }
    mAboutNav.classList.add('active');
});

mWorksNav.addEventListener('click', () => {
    worksClick();
    hamClose();
    clickNav();
});

mHomeNav.addEventListener('click', () => {
    mainClick();
    hamClose();
    clickNav();
});

function clickNav(){
    ishamburger = false;
    mobileNav.style.top = '-100%';
    mobileNav.style.height = '0';
    for(let i = 0; i < hamburgerEls.length; i++){
        hamburgerEls[i].style.backgroundColor = '#fff';
    }
}

function hamOpen(){
    hamburgerEls[0].style.top = '50%';
    hamburgerEls[0].style.transform = 'translate(-50%, -50%) rotate(45deg)';
    hamburgerEls[1].style.left = '150%';
    hamburgerEls[1].style.opacity = '0';
    hamburgerEls[2].style.top = '50%';
    hamburgerEls[2].style.transform = 'translate(-50%, -50%) rotate(-45deg)';
    for(let i = 0; i < hamburgerEls.length; i++){
        hamburgerEls[i].style.backgroundColor = '#fff';
    }
    
}
console.log(about.style.visibility);


function hamClose(){
    hamburgerEls[0].style.top = '0%';
    hamburgerEls[0].style.transform = 'translate(-50%, -50%) rotate(0deg)';
    hamburgerEls[1].style.left = '50%';
    hamburgerEls[1].style.opacity = '1';
    hamburgerEls[2].style.top = '100%';
    hamburgerEls[2].style.transform = 'translate(-50%, -50%) rotate(-0deg)';
    
    if(about.style.visibility == 'visible'){
        for(let i = 0; i < hamburgerEls.length; i++){
            hamburgerEls[i].style.backgroundColor = '#000';
        }
    }
}
