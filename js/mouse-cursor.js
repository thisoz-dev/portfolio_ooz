'use strict';
const title = document.querySelector('header > h1');
const menu = document.querySelector('header > nav');
const overTitle = document.querySelector('.overview > p');
const overTx = document.querySelector(".overview-tx");
const curCircle = document.querySelector('.cursor-circle');
const curDot = document.querySelector('.cursor-dot');
const works = document.querySelector('.works-name');

/* enter */
function mouseEnter(e){
    if(e.currentTarget == overTitle){
        overTx.style.display = 'block';
        overTitle.style.color = 'var(--text-blue)';
    }
    curCircle.style.width = '80px';
    curCircle.style.height = '80px';
    curCircle.style.backgroundColor = '#fff';
    curCircle.style.mixBlendMode = 'difference';
}

/* leave */
function mouseLeave(){
    overTx.style.display = 'none';
    overTitle.style.color = '#fff';

    curCircle.style.width = '40px';
    curCircle.style.height = '40px';
    curCircle.style.backgroundColor = 'transparent';
    curCircle.style.mixBlendMode = 'none';
}

/* overview move */
function overMove(e){
    overTx.style.top = e.clientY + 'px';
    overTx.style.left = e.clientX + 'px';
}

/* cursor */
function cursor(e){
    curCircle.style.display = 'block';
    curCircle.style.top = e.clientY + 'px';
    curCircle.style.left = e.clientX + 'px';
    curCircle.style.transition = '.2s ease';

    curDot.style.display = 'block';
    curDot.style.top = e.clientY + 'px';
    curDot.style.left = e.clientX + 'px';
    curDot.style.transition = '.s ease';
}

if(body.clientWidth >= 1024){

    overTitle.addEventListener('mouseenter', mouseEnter);
    overTitle.addEventListener('mouseleave', mouseLeave);
    overTitle.addEventListener('mousemove', overMove);
    
    title.addEventListener('mouseenter', mouseEnter);
    title.addEventListener('mouseleave', mouseLeave);
    
    menu.addEventListener('mouseenter', mouseEnter);
    menu.addEventListener('mouseleave', mouseLeave);
    
    window.addEventListener('mousemove', cursor);
}else if(body.clientWidth < 1024){
    curCircle.style.display = 'none';
    curDot.style.display = 'none';
}
window.addEventListener('resize', ()=>{
    if(body.clientWidth >= 1024){
        curCircle.style.display = 'block';
        curDot.style.display = 'block';
        overTitle.addEventListener('mouseenter', mouseEnter);
        overTitle.addEventListener('mouseleave', mouseLeave);
        overTitle.addEventListener('mousemove', overMove);
        
        title.addEventListener('mouseenter', mouseEnter);
        title.addEventListener('mouseleave', mouseLeave);
        
        menu.addEventListener('mouseenter', mouseEnter);
        menu.addEventListener('mouseleave', mouseLeave);
        
        window.addEventListener('mousemove', cursor);
    } else if(body.clientWidth < 1024){
        curCircle.style.display = 'none';
        curDot.style.display = 'none';
    }
})