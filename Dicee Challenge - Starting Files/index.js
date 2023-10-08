 
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomimage = "dice"+randomNumber1+".png";
var imagesource = "images/" + randomimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);
 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomimage = "dice"+randomNumber2+".png";
var imagesource = "images/" + randomimage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="try again";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="player 2 wins";
}