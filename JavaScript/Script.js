'use strict';
let x;
document.querySelector(`.uzbek`).addEventListener(`click`, function(){
    document.querySelector(`.between`).textContent = `Kiritiladigan solar oralig'i 1 dan 20 gacha`;
    document.querySelector(`.start`).textContent = `🔮 Taxmin qilishni boshlang`;
    document.querySelector(`.Highscore`).textContent = `🏆 Yuqori ball`;
    document.querySelector(`.btm`).textContent = `Tekshirish`;
    document.querySelector(`.Again`).textContent = `Qayta o'yinni boshlash`;
    document.querySelector(`h1`).textContent = `Men o'ylagan soni top!`;
    document.querySelector(`.between_nam`).textContent = `📈 Urunishlar soni: 20 ta 📉 `;
});
document.querySelector(`.english`).addEventListener(`click`,function(){
    document.querySelector(`.between_nam`).textContent = `📈 Score: 20 📉`;
    document.querySelector(`.start`).textContent = `🔮  Start guessing...`;
    document.querySelector(`.Highscore`).textContent = `🏆 Highscore`;
    document.querySelector(`.btm`).textContent = `check`;
    document.querySelector(`.Again`).textContent = `Again`;
    document.querySelector(`.between`).textContent = `(Between 1 and 20)`;
    document.querySelector(`h1`).textContent = `Guess My Number!`;
});
document.getElementById(`.guess`).onclick = function(){
    x = match.floor(Math.random() * 20 ) + 1;
    document.getElementById(`salom`).innerHTML = x;
};