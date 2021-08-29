'use strict';

window.addEventListener('DOMContentLoaded', (event) => {
    const colors = document.querySelector('.colors__items'),
        ceilingSatart = document.querySelector('.image__ceiling-start'),
        colorCeiling = document.querySelector('.image__color'),
        colorItem = document.querySelector('.colors__item');

    colors.addEventListener('click', (e) => {

        if (e.target != colors) {
            ceilingSatart.style.opacity = 0;
            const c = window.getComputedStyle(e.target).backgroundColor;
            colorCeiling.style.backgroundColor = c;
        }
    });

});