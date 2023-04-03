/*
/*const golden = document.getElementsByClassName("buyy");
const board = document.getElementsByClassName("panier");
const title = document.getElementsByClassName("title");
const count = document.getElementById("buy");
var a = title[0].value;
golden[0].addEventListener("click",function karimfuction(){
board[0].textContent = ""+a+"";
});*/
//const section = document.getElementsByClassName("section");
//for(let i=0;i<20;i++){


   /*section.innerHTML+="<div class='division1'"
    section.innerHTML+=" <div class='title'>Nonous</div>"
    section.innerHTML+="<div class='img'>"
   // <img src='Teddy-Bear-Day-removebg-preview.png' width='340em' height='300em'></div><p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed hic libero vel explicabo animi. Id consequatur nam nihil accusamus error!</p><div class='buy'><input class='buy' type='number' id='buy'></input><img class='buyy' src='ajouterAuPanierModif.png'></div></div>"};
*/
const numberOfArticules = document.getElementById("number");
const btn = document.getElementsByClassName("buyy");
const board = document.getElementsByClassName("panier");
const title = document.getElementsByClassName("title");
var total = document.getElementById("total");
var a = 0;
var b = 0;
var c = 0;
var d=0;
console.log(d);
numberOfArticules.value = 1;

btn[0].addEventListener("click",function(){
  c=c+1;
//board[0].innerHTML = "<div><img src='Teddy-Bear-Day-removebg-preview.png' width='340em' height='300em'> ";
if(c<=16 && numberOfArticules.value>=1&&d==0){
board[0].innerHTML +=  numberOfArticules.value +" "+ title[0].textContent +"<p id = 'coleur'><span>remove all</span></p><hr>"  ;

}

const remove = document.getElementById("coleur");
console.log(remove);

remove.addEventListener("click",function(){
  board[0].innerHTML = " ";
  total.textContent = 0;
a=0;
});

b = numberOfArticules.value;
console.log(b);
a+= 35*b;

total.textContent= a +" "+"dh";

}
);


