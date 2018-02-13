/*jshint esversion: 6 */
function mainTwo() {
    land();
}
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var wrap = document.querySelector('.wrap');


function land() {


    left.addEventListener('mouseenter', () => {
        wrap.classList.add('hover-left');
    });

    left.addEventListener('mouseleave', () => {
        wrap.classList.remove('hover-left');
    });

    right.addEventListener('mouseenter', () => {
        wrap.classList.add('hover-right');
    });

    right.addEventListener('mouseleave', () => {
        wrap.classList.remove('hover-right');
    });
}