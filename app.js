//JQUERY MANIPULATIONS
$(document).ready(function() {
    $('.burger').on('click', function() {
        $(this).toggleClass('open')
    })
})
$(document).ready(function() {
    $('.burger').on('click', function() {
        $('.nav').toggleClass('open')
    })
})
$(document).ready(function() {
    $('.burger').on('click', function() {
        $('body').toggleClass('none')
    })
})

// GSAP ANIMATIONS
gsap.registerPlugin(ScrollTrigger)
//HEADER

//LEAF ANIMATION
gsap.from('.top-leaf', {
    x: -500,
    y: -500,
    delay: 1
})
gsap.to('.top-leaf', 1, {
    x: 0,
    y: 0,
    delay: 1
})

gsap.from('.bottom-leaf', {
    x: 500,
    y: 500,
    delay: 1
})
gsap.to('.bottom-leaf', 1, {
    x: 0,
    y: 0,
    delay: 1
})
//burger
gsap.from('.burger', 1, {
    x: 400,
    delay: 2.6
})
gsap.to('.burger', 1, {
    x: 0,
    delay: 2.6
})
//CONTENT HEADER
gsap.from('.content h1', {
    x: 2000,
    delay: 2.4
})
gsap.to('.content h1', .8, {
    x: 0,
    delay: 2.4,
    ease: Power4.easeOut
})


//CONTENT IMAGE
gsap.from('.img img', {
    x: -2000,
    delay: 2.4
})
gsap.to('.img img', .8, {
    x: 0,
    delay: 2.4,
    ease: Power4.easeOut
})



gsap.from('header .go-down', {
    y: 2000,
    delay: 3
})
gsap.to('header .go-down', .8, {
    y: 0,
    delay: 3,
    ease: Power4.easeOut
})

//VANILLA MANIPULATIONS
let body = document.querySelector('body')
let header = document.querySelector('header')
let nav = document.querySelector('.nav')
let burger = document.querySelector('.burger')
let main = document.querySelector('main')

header.addEventListener('click', () => { 
    nav.classList.remove('open')
    burger.classList.remove('open')
    body.classList.remove('none')
})
main.addEventListener('click', () => { 
    nav.classList.remove('open')
    burger.classList.remove('open')
    body.classList.remove('none')
})

//MAIN ANIMATION
//About loader
let loader = () => {
    let load = document.querySelector('.main-line')
    let positionLoad = load.getBoundingClientRect().top
    let heightView = window.innerHeight

    if(positionLoad < heightView){
        load.classList.add('slide')
    }else{
        load.classList.remove('slide')
    }
}
window.addEventListener('scroll', loader)
//MAIN H1 load
gsap.from('main h1', .8, {
    scrollTrigger: {
        trigger: "main",
        toggleActions: 'restart none none none',
    },
    y: 60,
    delay: 3,
    opacity: 0
})
gsap.to('main h1', .8, {
    scrollTrigger: {
        trigger: "main",
        toggleActions: 'restart none none none',
    },
    y: 40,
    delay: 3,
    opacity: 1
})
//MAIN H2 load
gsap.from('main h2', .8, {
    scrollTrigger: {
        trigger: "main",
        toggleActions: 'restart none none none',
    },
    y: -20,
    delay: 3,
    opacity: 0
})
gsap.to('main h2', .8, {
    scrollTrigger: {
        trigger: "main",
        toggleActions: 'restart none none none',
    },
    y: 0,
    delay: 3,
    opacity: 1
})
//MAIN IMAGES LOAD
gsap.from('.main-imgs img', .8, {
    scrollTrigger: {
        trigger: "main",
        toggleActions: 'restart none none none',
    },
    x: -2000,
    delay: 3,
})
gsap.to('.main-imgs img', .8, {
    scrollTrigger: {
        trigger: "main",
        toggleActions: 'restart none none none',
    },
    x: 0,
    delay: 3,
    opacity: 1
})


gsap.from('.main-imgs img:nth-child(2)', .8, {
    scrollTrigger: {
        trigger: "main",
        toggleActions: 'restart none none none',
    },
    x: 2000,
    delay: 3,
})
gsap.to('.main-imgs img:nth-child(2)', .8, {
    scrollTrigger: {
        trigger: "main",
        toggleActions: 'restart none none none',
    },
    x: 0,
    delay: 3,
    opacity: 1
})