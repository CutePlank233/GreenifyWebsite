// ==UserScript==
// @name         刷绿网页 - 让所有文字变成可爱的绿色
// @include      *
// @version      2024-12-15
// @description  Transform your entire browsing experience into an adorable, charming world of green! Green is not just a color; it’s the signature hue of railways, especially the beloved regional passenger trains that sport a cute, vibrant green. This script will infuse your browser with that same delightful shade, making everything feel as cheerful and inviting as those trains. Imagine every webpage wrapped in this playful green, bringing a sense of nostalgia and warmth, reminiscent of train journeys through beautiful landscapes. Let’s make your online experience as lovable and charming as those cute railway cars, spreading joy and color with every click!
// @author       Makuragi Wood
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
    document.querySelectorAll('*').forEach(element => {
        element.style.color = '#00ff00';
    });
}, 50);
})();
