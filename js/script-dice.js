/*
? Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/
const maxTurn=5; //const for max 5 turns 
var randUser=[0];    //array for user
var randPc=[0];     //array for pc
var turnUser="";    //html message li
var turnPc="";     //html message li
var userTot=0;     //tot user
var pcTot=0;       //tot pc



var userList= document.getElementById("user-list");
var pcList= document.getElementById("pc-list");
var pcScore=document.getElementById("pc-score");
var userScore=document.getElementById("user-score");
var winner=document.getElementById("winner");
//insert array of random number from 1 to 6
for(var i=0; i<maxTurn ; i++){
    randUser[i]=Math.floor(Math.random()*6)+1;
    randPc[i]=Math.floor(Math.random()*6)+1;
    turnUser+="<li> turno: "+randUser[i]+ "</li>";
    turnPc+="<li> turno: "+randPc[i]+ "</li>";
    userTot+=randUser[i]; //sum user number
    pcTot+=randPc[i]; //sum user number
}

//insert in html
userList.innerHTML=turnUser;
pcList.innerHTML=turnPc;
pcScore.innerText=parseInt(pcTot);
userScore.innerText=parseInt(userTot);

//debug inline
console.table(randUser);
console.table(randPc);
console.log( "totale user",userTot);
console.log( "totale pc",pcTot);

//write results
if(userTot<pcTot){
    winner.innerText="PC";
    winner.style.color="#000";
    winner.style.fontWeight="bolder";
}else if(userTot>pcTot){
    winner.innerText="USER";
    winner.style.color="#00f";
    winner.style.fontWeight="bolder";
}else{
    winner.innerText="PATTA";
    winner.style.color="#8a2be2";
    winner.style.fontWeight="bolder";
}