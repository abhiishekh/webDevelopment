// alert("hello world!");

var randomnumner = Math.ceil(Math.random()*6);
var randomDiceImg = "dice" + randomnumner + ".png";
var randomimgSource = "images/" + randomDiceImg;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgSource);

// second image change

var randomnumner2 = Math.ceil(Math.random()*6);
var randomImgSource2 = "images/dice" + randomnumner2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSource2);


//making decision who won the game

if(randomnumner > randomnumner2){
    document.querySelector("h1").innerHTML = "Player 1 Won ";
}else if(randomnumner < randomnumner2){
    document.querySelector("h1").innerHTML = "Player 2 Won ";

}else{
    document.querySelector("h1").innerHTML = "Match draw ";
}