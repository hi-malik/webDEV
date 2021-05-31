var randomNumber1 = Math.floor(Math.random()* 6) + 1; // give random no b/w 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // gives random pics b/w dice 1 - dice 6
var randomImageSource = "images/" + randomDiceImage; // gives image folder location
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Let's make win situation
//iF player-1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "The Game Tie";
}

// prompt("What is your name?");
// prompt("What is crush name?");
//
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore);
// if(loveScore > 70){
//     alert("Ur love scr is " + loveScore + "%" + "Kuch nahi rkha in sab mn");
// }
// else{
//     alert("Ur love scr is " + loveScore + "%" + "Bhai pagal bna rahi hn");
// }
