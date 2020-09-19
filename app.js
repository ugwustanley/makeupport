const intro_animation = document.querySelector('.intro-animation');
const intro_animation2 = document.querySelector('.intro-animation2');
const intro_animation3 = document.querySelector('.intro-animation3');
window.onload = ()=>{
    intro_animation.style.animationName = 'intro-animation'
    intro_animation2.style.animationName = 'intro-animation2';
    intro_animation3.style.animationName = 'intro-animation2';
    if(intro_animation){

    }
}

//animation on scroll costom implementation

const scroll = window.requestAnimationFrame || function(callback){
    window.setTimeout(callback, 1000/60)
}

const portfolio = document.querySelector('.portfolio')

