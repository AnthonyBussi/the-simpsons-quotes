// 'use strict';

let container = document.querySelector(".container");
let quoteText = document.querySelector(".quote__text");
let quoteAuthor = document.querySelector(".quote__author");
let characterImg = document.querySelector(".character-img");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");


fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=3')
    .then(response => response.json())
    .then(result => {        
        let quote = result[0];
        let answer1 = result[0].character;
        let answer2 = result[1].character;
        let answer3 = result[2].character;

        quoteText.innerHTML = quote.quote;
        quoteAuthor.innerHTML = quote.character;
        characterImg.src = quote.image;
        characterImg.alt = quote.character;

        button1.setAttribute('value', answer1);
        button2.setAttribute('value', answer2);
        button3.setAttribute('value', answer3);  

        button1.innerHTML = answer1;
        button2.innerHTML = answer2;
        button3.innerHTML = answer3;
        
        button1.addEventListener('clic', checkAnswer());
        button2.addEventListener('clic', checkAnswer());
        button3.addEventListener('clic', checkAnswer());
    });



    function checkAnswer() {
        let userChoice = this;
        console.log(userChoice);
    }

    

    // button1.addEventListener('clic', checkAnswer());
    // button2.addEventListener('clic', checkAnswer());
    // button3.addEventListener('clic', checkAnswer());