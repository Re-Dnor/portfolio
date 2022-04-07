const moon = document.getElementById('moon');
const bg = document.getElementById('background');
const mountain = document.getElementById('mountain');
const road = document.getElementById('road');
const title = document.getElementById('title');


window.addEventListener('scroll', function () {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.right = 100 - value * 0.5 + 'px';
    mountain.style.top = -value * 0.4 + 'px';
    road.style.bottom = value * 0.15 - 'px';
    title.style.top = value * 0.7 + 'px';
});

const easterEgg = document.getElementById('easterEgg');
const age = document.getElementById('age');
const myAge = 25;
let i = 0;


function stopDefAction(evt) {
    evt.preventDefault();
    i += 1;
    console.log(i);
    age.innerHTML = `${i}`;
    if (i === myAge) {
        easterEgg.src = './img/OMG.jpg';
        easterEgg.removeEventListener('click', stopDefAction);
    }
};
easterEgg.addEventListener('click', stopDefAction);

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 150, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});