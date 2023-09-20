'use strict';
let ScoreNam = 20;
let HighscoreNmaNum = 20;
let x = Math.floor(Math.random() * 20 ) + 1;
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
document.querySelector(`.btm`).addEventListener(`click`, function(){
    let namberNam = Number(document.querySelector(`.guess`).value);
    if (ScoreNam>0) {
        if (!namberNam) {
            document.querySelector(`.start`).textContent = "🤷‍♀️ No number!";
        }
        else if(namberNam > x){
            document.querySelector(`.start`).textContent = "📈 Too High!"
            ScoreNam--;
            document.querySelector(`.yigirma`).textContent = ScoreNam; 
            document.querySelector(`.HighscoreNma`).textContent = HighscoreNmaNum; 
        }
        else if(namberNam<x){
            document.querySelector(`.start`).textContent = "📉 Too Low!"
            ScoreNam--;
            document.querySelector(`.yigirma`).textContent = ScoreNam; 
            document.querySelector(`.HighscoreNma`).textContent = HighscoreNmaNum; 
        }
        else if(namberNam == x){
            document.querySelector(`.start`).textContent = "🎯Correct Number"
            HighscoreNmaNum++;
            document.querySelector(`.HighscoreNma`).textContent = HighscoreNmaNum; 
            document.querySelector(`main`).style.backgroundColor = `#60b347`;
            document.querySelector(`header`).style.backgroundColor = `#60b347`;
            document.querySelector(`.guess`).style.backgroundColor = `#60b347`;
            document.querySelector(".nam").textContent= x;
            document.querySelector(`.nam`).style.width = `110px`;
            document.querySelector(".nam").style.padding = `10px`;
        }
    }
    else{
        document.querySelector(`.start`).textContent = "😒 You lost the game";
        document.querySelector(`.ScoreNam`).textContent = 0;
    }
});

document.querySelector(`.Again`).addEventListener(`click`, function(){
    x = Math.floor(Math.random() * 20) + 1;
    document.querySelector("main").style.backgroundColor="#222";
    document.querySelector(`.guess`).style.backgroundColor = `#222`;
    document.querySelector("header").style.backgroundColor="#222";
    document.querySelector(".nam").textContent= "?";
    document.querySelector(".nam").style.padding = `10px`;

});
