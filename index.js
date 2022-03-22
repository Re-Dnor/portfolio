const moon = document.getElementById('moon');
const bg = document.getElementById('background');
const mountain = document.getElementById('mountain');
const road = document.getElementById('road');
const title = document.getElementById('title');


window.addEventListener('scroll', function() {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.right = 100 - value * 0.5 + 'px';
    mountain.style.top = -value * 0.4 + 'px';
    road.style.bottom = value * 0.15 - 'px';
    title.style.top = value * 0.7 + 'px';
});