'use strict';

let container = document.querySelector(".container");
let quoteText = document.querySelector(".quote__text");
let quoteAuthor = document.querySelector(".quote__author");
let characterImg = document.querySelector(".character-img");


fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then(result => {        
        let quote = result[0];

        quoteText.innerHTML = quote.quote;
        quoteAuthor.innerHTML = quote.character;
        characterImg.src = quote.image;
        characterImg.alt = quote.character;
    });